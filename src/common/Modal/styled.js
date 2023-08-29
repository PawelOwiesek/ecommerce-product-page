import { styled } from "styled-components";
import { ReactComponent as deleteIcon } from "../../images/icons/icon-delete.svg";

export const Container = styled.div`
  display: ${({ showModal }) => (showModal ? "none" : "flex")};
  background-color: ${({ theme }) => theme.neutralColors.white};
  flex-direction: column;
  position: absolute;
  top: 80px;
  right: 185px;
  max-width: 320px;
  margin: 10px auto;
  width: 100%;
  height: 300px;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.neutralColors.darkGrayishBlue};
  z-index: 2;
  box-shadow: 0px 0px 56px 12px rgba(255, 255, 255, 1);

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    top: 130px;
    right: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    right: 0;
  }
`;
export const Header = styled.h2`
  font-size: 16px;
  padding: 20px;
  border-bottom: 2px solid
    ${({ theme }) => theme.neutralColors.lightGrayishBlue};
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 70px auto 10px;
  margin-left: 10px;
  font-size: 12px;
  font-weight: bold;
`;

export const Content = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const CalculateResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 5px 0 0 20px;
`;

export const Button = styled.button`
  max-width: 300px;
  width: 100%;
  height: 60px;
  margin-top: 20px;
  border: none;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.primaryColors.orange};
  color: ${({ theme }) => theme.neutralColors.white};
  font-weight: bold;
`;

export const DeleteButton = styled.span`
  display: inline-block;
  cursor: pointer;
`;

export const DeleteIcon = styled(deleteIcon)``;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: normal;
  margin: 0;
`;

export const Costs = styled.p`
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 15px;
  margin: 20px auto;
  font-size: 16px;
`;
