import { Avatar, Cart, Container, Logo } from "./styled";
import logo from "../../images/icons/logo.svg";
import avatar from "../../images/jpgImages/image-avatar.png";
import { Burger } from "./Navigation/Burger/burger";
import { useState } from "react";
import Modal from "../Modal";

const Header = ({ setBuyCount, buyCount }) => {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
      <Cart onClick={() => onCartClick()} />
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
