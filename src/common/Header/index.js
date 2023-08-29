import {
  Avatar,
  Cart,
  CartCount,
  CartWrapper,
  Container,
  Logo,
} from "./styled";
import logo from "../../images/icons/logo.svg";
import avatar from "../../images/jpgImages/image-avatar.png";
import { Burger } from "./Navigation/Burger/burger";
import { useState } from "react";
import Modal from "../Modal";

const Header = ({ setBuyCount, buyCount }) => {
  const [open, setOpen] = useState(true);
  const [showModal, setShowModal] = useState(true);

  const onBurgerClick = () => {
    setOpen((open) => !open);
  };

  const onCartClick = () => {
    setShowModal((showModal) => !showModal);
  };

  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <Burger open={open} onBurgerClick={onBurgerClick} />

      <CartWrapper>
        <Cart onClick={() => onCartClick()} />
        <CartCount>{buyCount}</CartCount>
      </CartWrapper>
      <Avatar src={avatar} alt="avatar" />
      <Modal
        showModal={showModal}
        buyCount={buyCount}
        setBuyCount={setBuyCount}
      />
    </Container>
  );
};

export default Header;
