
import { StudentsRepository } from '../modules/students/students.repository';
import { StudentsService } from '../modules/students/students.service';
import { Student } from '../modules/students/student.entity';
import { StudentAlreadyExistsError, StudentNotFound } from '../modules/students/errors/students.errors'
import { copyFile } from 'fs';
import { DeleteResult } from 'typeorm';

jest.mock('../modules/students/students.repository');

describe('Students Service', () => {
  let repositoryMock: StudentsRepository;
  let service: StudentsService;

  beforeAll(() => {
    repositoryMock = new StudentsRepository();
    service = new StudentsService(repositoryMock);
  });

  describe('getStudents', () => {
    it('should call repository with filters', async () => {
      const spy = jest.spyOn(repositoryMock, 'getAll').mockImplementation(async () => []);
  
      await service.getStudents('filter');
  
      expect(spy).toHaveBeenCalledWith('filter')
    });
  });

  describe('insertStudent', () => {
    it('should throw StudentAlreadyExistsError if students already exists when creating', async () => {
      const spy = jest.spyOn(repositoryMock, 'getByEmailOrCPF').mockImplementation(async () => new Student());
      const params = {
        name: 'Student',
        email: 'student@email.com',
        cpf: '12345678912'
      };
  
      try {
        await service.insertStudent(params);
  
        // if insertStudent does not throw error, the test will fail
        expect(true).toBe(false);
      } catch (error) {
        expect(spy).toHaveBeenCalledWith({
          cpf: params.cpf,
          email: params.email,
        });
        expect(error).toBeInstanceOf(StudentAlreadyExistsError);
      }
    });

    it('should call save with student on insertStudent', async () => {
      const getByEmailOrCPFSpy = jest.spyOn(repositoryMock, 'getByEmailOrCPF').mockImplementation(async () => undefined);
      const saveSpy = jest.spyOn(repositoryMock, 'save').mockImplementation(async (param) => param);
      const params = {
        name: 'Student',
        email: 'student@email.com',
        cpf: '12345678912'
      };
  
      const response = await service.insertStudent(params);

      expect(response).toMatchObject(params);
      expect(saveSpy).toHaveBeenCalled();
      expect(getByEmailOrCPFSpy).toHaveBeenCalledWith({
        cpf: params.cpf,
        email: params.email,
      });
    });
  });

  describe('editUser', () => {
    it('should throw StudentNotFound', async () => {
      const getByIdSpy = jest.spyOn(repositoryMock, 'getById').mockImplementation(async () => undefined);
      const id = 'student-id';
      const params = {
        name: 'Student Edit',
      };
  
      try {
        await service.editStudent(id, params);
  
        // if editStudent does not throw error, the test will fail
        expect(true).toBe(false);
      } catch (error) {
        expect(getByIdSpy).toHaveBeenCalledWith(id);
        expect(error).toBeInstanceOf(StudentNotFound);
      }
    });

    it('should throw StudentAlreadyExists', async () => {
      const getByIdSpy = jest.spyOn(repositoryMock, 'getById').mockImplementation(async () => new Student());
      const getByEmailOrCPFSpy = jest.spyOn(repositoryMock, 'getByEmailOrCPF').mockImplementation(async () => new Student());

      const id = 'student-id';
      const params = {
        name: 'Student Edit',
        email: 'student@email.com'
      };
  
      try {
        await service.editStudent(id, params);
  
        // if editStudent does not throw error, the test will fail
        expect(true).toBe(false);
      } catch (error) {
        expect(getByIdSpy).toHaveBeenCalledWith(id);
        expect(getByEmailOrCPFSpy).toHaveBeenCalledWith({
          email: params.email,
          cpf: undefined,
        })
        expect(error).toBeInstanceOf(StudentAlreadyExistsError);
      }
    });

    it('should call edit on editStudent', async () => {
      const id = 'student-id';
      const params = {
        name: 'Student Edit',
      };

      const student = new Student;
      student.name = 'Student';
      student.id = id;
      student.cpf = '12345678912';
      student.email = 'student@email.com';

      const getByIdSpy = jest.spyOn(repositoryMock, 'getById').mockImplementation(async () => student);
      const getByEmailOrCPFSpy = jest.spyOn(repositoryMock, 'getByEmailOrCPF').mockImplementation(async () => undefined);
      const saveSpy = jest.spyOn(repositoryMock, 'save').mockImplementation(async (param) => param);
      
      const response = await service.editStudent(id, params);

      expect(getByIdSpy).toHaveBeenCalledWith(id);
      expect(response).toMatchObject({
        id: id,
        name: 'Student Edit',
        cpf: student.cpf,
        email: student.email,
      });
      expect(saveSpy).toHaveBeenCalled();
      expect(getByEmailOrCPFSpy).toHaveBeenCalledWith({
        cpf: undefined,
        email: undefined,
      });
    });
  });

  describe('deleteStudent', () => {
    it('should throw StudentNotFound', async () => {
      const spy = jest.spyOn(repositoryMock, 'getById').mockImplementation(async () => undefined);

      try {
        await service.deleteStudent('id');

        // if deleteStudent does not throw error, the test will fail
        expect(true).toBe(false);
      } catch (error) {
        expect(spy).toHaveBeenCalledWith('id');
        expect(error).toBeInstanceOf(StudentNotFound);
      }
    })

    it('should return true if student was deleted', async () => {
      const spy = jest.spyOn(repositoryMock, 'getById').mockImplementation(async () => new Student());
      const deleteSpy = jest.spyOn(repositoryMock, 'delete').mockImplementation(async () => (
       { affected: 1, raw: null } as DeleteResult
      ))

      const response = await service.deleteStudent('id');

      expect(response).toBe(1);
      expect(deleteSpy).toHaveBeenLastCalledWith('id')
    })
  })
})