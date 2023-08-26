import NavBar from "../NavBar";
import { Container, Strip } from "./styled";

export const Burger = ({ open, onBurgerClick }) => {
  return (
    <>
      <Container open={open} onClick={() => onBurgerClick()}>
        <Strip open={open} />
        <Strip open={open} />
        <Strip open={open} />
      </Container>
      <NavBar open={open} />
    </>
  );
};
export default Burger;
