import styled from "styled-components"
import { Button as AntdButton } from "antd"

export const SideDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex: 1 1 25%;
  gap: 0.5rem;
`
export const CtaDiv = styled.div`
  border-bottom: 2.5px solid rgba(5, 5, 5, 0.06);
  flex: 1 1 30%;
`
export const Button = styled(AntdButton)`
  @media screen and (min-width: 768px) {
  }
`

export const ErrorDiv = styled.div`
  flex: 1 1 60%;
`