import styled from "styled-components/native";
import {css} from "styled-components/native";

interface Props {
  center?: boolean;
}
export const Body = styled.View<Props>`
  flex:1;
  padding: 0 12px 0 12px;
  justify-content: space-evenly;
  ${p => p.center && css`
    justify-content: center;
  `}
  align-items: center;
`;
