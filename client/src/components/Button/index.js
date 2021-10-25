import styled from 'styled-components'

const ButtonComponent = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  min-width: 30px;
  min-height: 30px;
  margin-right: 5px;
  padding: 2px;

  font-size: 12px;
  text-align: center;
  
  border-radius: 10px;
  border-width: 1px;
  border-style: solid;

  cursor: pointer;
  transition: all .2s ease;

  color: ${props => props.active ? "#FFF" : "#5d6dde"};
  background-color: ${props => props.active ? "#5d6dde" : "#f2f2fc"};
  border-color: ${props => props.active ? "transparent" : "#b4b9e1"};

  &:hover {
    color: #FFF;
    background-color: #5d6dde;
    border-color: transparent;
  }
`

export const Button = ({ children, onClick }) => {
  return (
    <ButtonComponent onClick={onClick}>
      {children}
    </ButtonComponent>
  );
}