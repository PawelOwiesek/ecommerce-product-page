import { styled } from "styled-components";
import { ReactComponent as cart } from "../../images/icons/icon-cart.svg";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 130px 524px 1fr 100px;
  align-items: center;
  justify-items: center;
  border-bottom: 2px solid
    ${({ theme }) => theme.neutralColors.lightGrayishBlue};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    grid-template-columns: 1fr auto auto;
  }
`;

export const Logo = styled.img`
  width: 125px;
  height: 19px;
`;

export const Cart = styled(cart)`
  width: 50px;
  justify-self: end;
  cursor: pointer;
  color: ${({ theme }) => theme.neutralColors.darkGrayishBlue};
`;
export const Avatar = styled.img`
  width: 60px;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 50%;

  &:hover {
    border-color: ${({ theme }) => theme.primaryColors.orange};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 50px;
    margin-right: 20px;
    padding: 20px 0;
    border: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 35px;
  }
`;

export const CartCount = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  width: 25px;
  height: 15px;
  border-radius: 15px;
  text-align: center;
  margin: -30px 0 0 10px;
  background-color: ${({ theme }) => theme.primaryColors.orange};
  color: ${({ theme }) => theme.neutralColors.white};
  font-size: 12px;
`;
export const CartWrapper = styled.p`
  justify-self: end;
`;
