import { styled } from "styled-components";

export const Navigation = styled.ul`
  list-style-type: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  margin: 0;
  padding-top: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    background-color: ${({ theme }) => theme.neutralColors.white};
    flex-flow: column nowrap;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    height: 100%;
    width: 220px;
    padding: 100px 0 0 10px;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => (open ? "translateX(-100%)" : "translateX(0)")};
    box-shadow: ${({ open }) =>
      open ? "" : " 76px 5px 49px 83px rgba(42, 42, 47, 0.37)"};
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
