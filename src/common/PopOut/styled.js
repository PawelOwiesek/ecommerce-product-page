import { styled } from "styled-components";

export const FrontDrop = styled.div`
  display: ${({ active }) => (active === true ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 120px;
  margin-left: 130px;
  background-color: rgba(66, 68, 90, 50%);
  box-shadow: 0px 0px 500px 500px rgba(66, 68, 90, 50%);
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const PopButton = styled.button`
  display: flex;
  justify-content: end;
  background: transparent;
  border: none;
  margin: 0 50px -50px 0;
  position: relative;
  font-size: 20px;
  cursor: pointer;
`;
export const CloseIcon = styled.img`
  width: 24px;
`;
