import { styled } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 130px 524px 1fr 100px;
  align-items: center;
  justify-items: center;
  border-bottom: 2px solid
    ${({ theme }) => theme.neutralColors.lightGrayishBlue};
`;

export const Navigation = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  padding-top: 20px;
`;

export const Item = styled.li`
  margin: 0 20px;
  border-bottom: 5px solid ${({ theme }) => theme.neutralColors.white};
  padding: 20px 0 30px 0;
  cursor: pointer;

  &:hover {
    border-bottom: 5px solid ${({ theme }) => theme.primaryColors.orange};
    padding-bottom: 30px;
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
`;
