import {
  Avatar,
  Cart,
  Container,
  Item,
  Link,
  Logo,
  Navigation,
} from "./styled";
import logo from "../../images/icons/logo.svg";
import cart from "../../images/icons/icon-cart.svg";
import avatar from "../../images/jpgImages/image-avatar.png";
import { Burger } from "./Burger/burger";

const Header = () => {
  const mobile = window.innerWidth <= 768;
  return (
    <Container>
      {mobile ? <Burger /> : null}
      <Logo src={logo} alt="logo" />
      <Navigation>
        <Item>
          <Link href="#collections">Collections</Link>
        </Item>
        <Item>
          <Link href="#men">Men</Link>
        </Item>
        <Item>
          <Link href="#women">Women</Link>
        </Item>
        <Item>
          <Link href="#about">About</Link>
        </Item>
        <Item>
          <Link href="#contact">Contact</Link>
        </Item>
      </Navigation>
      <Cart src={cart} alt="cart" />
      <Avatar src={avatar} alt="avatar" />
    </Container>
  );
};

export default Header;
