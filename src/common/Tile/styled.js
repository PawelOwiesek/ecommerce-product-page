import styled from "styled-components";
import { ReactComponent as previous } from "../../images/icons/icon-previous.svg";
import { ReactComponent as next } from "../../images/icons/icon-next.svg";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Image = styled.img`
  margin: 70px 0 0 30px;
  max-width: 450px;
  border-radius: 15px;
  justify-self: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    max-width: 767px;
    margin: 40px 0 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    max-width: 500px;
    border-radius: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0;
    max-width: 320px;
  }
`;

export const ImageSmall = styled(Image)`
  width: 80px;
  margin: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 60px 0 0 100px;
  width: 400px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 100%;
    padding: 10px;
    margin: 0;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 10px;
    width: 300px;
    align-items: flex-start;
  }
`;

export const Subtitle = styled.p`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.primaryColors.orange};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`;

export const Title = styled.p`
  margin: 10px 0 20px;
  font-size: 40px;
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 24px;
    text-align: start;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  margin: 0;
  line-height: 1.5;
  max-width: 320px;
  color: ${({ theme }) => theme.neutralColors.darkGrayishBlue};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
  }
`;

export const Promotie = styled.p`
  display: flex;
  align-items: center;
  font-size: 26px;
  font-weight: 700;
  margin: 20px 0 5px;
`;

export const Discount = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  margin-left: 10px;
  width: 40px;
  height: 25px;
  border-radius: 4px;
  color: ${({ theme }) => theme.primaryColors.orange};
  background-color: ${({ theme }) => theme.primaryColors.paleOrange};
`;

export const Price = styled.p`
  margin: 0;
  text-decoration-line: line-through;
  font-size: 14px;
  color: ${({ theme }) => theme.neutralColors.grayishBlue};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    position: absolute;
    right: 25px;
    top: 660px;
  }
`;

export const Buttons = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 350px;
    left: 0px;
    width: 100vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    top: 200px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  width: 35px;
  height: 35px;
  border: 2px solid ${({ theme }) => theme.primaryColors.orange};
  border-radius: 50%;
  transition: 3s linear;

  &:disabled {
    background-color: ${({ theme }) => theme.neutralColors.darkGray};
    border: 2px solid ${({ theme }) => theme.neutralColors.darkGray};
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const Previous = styled(previous)``;
export const Next = styled(next)``;
