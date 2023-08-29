import { styled } from "styled-components";
import { ReactComponent as cart } from "../../images/icons/icon-cart.svg";

export const TileList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  max-width: fit-content;
  height: fit-content;
  margin: 0;
  padding-left: 28px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    display: none;
  }
`;

export const Item = styled.li`
  margin: 20px 36px 0 0;
  border: 3px solid transparent;
  border-radius: 18px;
  &:hover {
    border: 3px solid ${({ theme }) => theme.primaryColors.orange};
  }
`;

export const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 450px;
  width: 100%;
  float: right;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: column;
    margin-top: -50px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    justify-content: center;
    float: none;
    max-width: 767px;
    margin-top: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    flex-direction: column;
    max-width: 450px;
    margin: 0;
  }
`;

export const Counter = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  height: 50px;
  background-color: ${({ theme }) => theme.neutralColors.lightGrayishBlue};
  border-radius: 15px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 230px;
  height: 50px;
  background-color: ${({ theme }) => theme.primaryColors.orange};
  color: ${({ theme }) => theme.neutralColors.white};
  border-radius: 15px;
  border: none;
  cursor: pointer;
`;

export const CartIcon = styled(cart)``;

export const CounterButton = styled.button`
  border: none;
  background-color: transparent;
  width: 50px;
  font-size: 30px;
  font-weight: bold;
  color: ${({ theme }) => theme.primaryColors.orange};
  cursor: pointer;
`;

export const Count = styled.p`
  font-size: 23px;
  font-weight: bold;
`;
