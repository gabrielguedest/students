export const cpfMask = (v) => {
  let cpf = v;

  cpf = cpf.replace(/(\d{3})(\d)/,"$1.$2");       
  cpf = cpf.replace(/(\d{3})(\d)/,"$1.$2");  
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2");

  return cpf;
}