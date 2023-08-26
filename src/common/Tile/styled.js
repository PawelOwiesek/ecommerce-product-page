import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
  }
`;

export const Image = styled.img`
  margin: 70px 0 0 30px;
  width: 450px;
  border-radius: 15px;
  justify-self: flex-start;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0;
    width: 320px;
    border-radius: 0;
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
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 10px;
    width: 300px;
  }
`;
export const Subtitle = styled.p`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.primaryColors.orange};
  margin: 0;
`;

export const Title = styled.p`
  margin: 10px 0 20px;
  font-size: 40px;
  font-weight: 700;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 24px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  margin: 0;
  line-height: 1.5;
  max-width: 320px;
  color: ${({ theme }) => theme.neutralColors.darkGrayishBlue};
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
`;