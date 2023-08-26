import { styled } from "styled-components";

export const Container = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
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
    z-index: 2;
  }
`;

export const Strip = styled.div`
  width: 20px;
  height: 3px;
  background-color: ${({ theme }) => theme.neutralColors.darkGrayishBlue};
  margin: 0;
  transform-origin: 1.5px;
  transition: all 0.3s linear;

  &:nth-child(1) {
    transform: ${({ open }) => (open ? "rotate(0)" : "rotate(45deg)")};
  }
  &:nth-child(2) {
    opacity: ${({ open }) => (open ? 1 : 0)};
  }
  &:nth-child(3) {
    transform: ${({ open }) => (open ? "rotate(0)" : "rotate(-45deg)")};
  }
`;
