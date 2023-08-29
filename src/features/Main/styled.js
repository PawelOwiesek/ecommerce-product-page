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
  width: 450px;
  float: right;
  gap: 20px;
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
`;

export const CartIcon = styled(cart)``;

export const CounterButton = styled.button`
  border: none;
  background-color: transparent;
  width: 50px;
  font-size: 23px;
  font-weight: bold;
  color: ${({ theme }) => theme.primaryColors.orange};
`;
