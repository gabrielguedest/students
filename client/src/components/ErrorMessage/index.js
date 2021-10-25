import styled from "styled-components"
import { RiEmotionSadLine } from 'react-icons/ri'

const Wrapper = styled.div`
  margin-top: 60px;
  text-align: center;
`

const Message = styled.p`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  color: #ff5561;
`

export const ErrorMessage = ({ children }) => {
  return (
    <Wrapper>
      <RiEmotionSadLine color={"#ff5561"} size={"4em"}/>
      <Message>{children}</Message>
    </Wrapper>  
  );
}