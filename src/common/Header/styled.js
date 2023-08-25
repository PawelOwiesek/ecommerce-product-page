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

export const Navigation = styled.ul`
  list-style-type: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  margin: 0;
  padding-top: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    background-color: ${({ theme }) => theme.primaryColors.orange};
    flex-flow: column nowrap;
    position: fixed;
    top: 0;
    left: 0;
    display: none;
  }
`;

export const Item = styled.li`
  margin: 0 20px;
  border-bottom: 5px solid ${({ theme }) => theme.neutralColors.white};
  padding: 20px 0 30px 0;
  cursor: pointer;

  &:hover {
    border-bottom: 5px solid ${({ theme }) => theme.primaryColors.orange};
    padding-bottom: 30px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      border: none;
      padding: 10px 0;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-right: 40px;
    padding: 10px 0;
    border: none;
    z-index: 1;
  }
`;

export const Link = styled.a`
  text-decoration-line: none;
  color: ${({ theme }) => theme.neutralColors.darkGrayishBlue};

  &:hover {
    color: ${({ theme }) => theme.neutralColors.black};
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
