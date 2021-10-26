import styled from "styled-components"
import { RiFileListLine } from 'react-icons/ri'

const Wrapper = styled.div`
  margin-top: 60px;
  text-align: center;
`

const Message = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #919191;
  text-align: center;
`

export const EmptyData = () => {
  return (
    <Wrapper>
      <RiFileListLine color={"#919191"} size={"3em"}/>
      <Message>Nenhum resultado encontrado.</Message>
    </Wrapper>
  );
}