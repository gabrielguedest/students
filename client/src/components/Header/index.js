import styled from "styled-components";

const HeaderComponent = styled.h1`
  color: #5d6dde;
  font-weight: normal;
  font-size: 38px;
`

export const Header = ({ title }) => {
  return <HeaderComponent>{title}</HeaderComponent>;
}