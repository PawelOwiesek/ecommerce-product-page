import { styled } from "styled-components";

export const Container = styled.div`
  width: 40px;
  height: 18px;
  position: fixed;
  top: 30px;
  left: 0;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Strip = styled.div`
  width: 20px;
  height: 3px;
  background-color: ${({ theme }) => theme.neutralColors.darkGrayishBlue};
  margin: 0;
`;
