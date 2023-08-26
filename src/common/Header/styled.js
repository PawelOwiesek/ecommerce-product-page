import { styled } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 130px 524px 1fr 100px;
  align-items: center;
  justify-items: center;
  border-bottom: 2px solid
    ${({ theme }) => theme.neutralColors.lightGrayishBlue};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr auto auto;
  }
`;

export const Logo = styled.img`
  width: 125px;
  height: 19px;
`;
export const Cart = styled.img`
  justify-self: end;
  margin-right: 30px;
  cursor: pointer;
`;
export const Avatar = styled.img`
  width: 60px;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 50%;

  &:hover {
    border-color: ${({ theme }) => theme.primaryColors.orange};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 35px;
    margin-right: 20px;
    padding: 20px 0;
    border: none;
  }
`;