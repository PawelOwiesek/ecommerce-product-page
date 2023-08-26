import { styled } from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
`;
export const Counter = styled.div``;

export const TileList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  max-width: fit-content;
  height: fit-content;
  margin: 0;
  padding-left: 28px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
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
