import { Item, Link, Navigation } from "./styled";

const NavBar = ({ open }) => {
  return (
    <Navigation open={open}>
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
  );
};

export default NavBar;
