import {
  Container,
  Description,
  Discount,
  Image,
  ImageSmall,
  Price,
  Promotie,
  Subtitle,
  Title,
  Wrapper,
} from "./styled";

const Tile = ({
  small,
  image,
  subTitle,
  alt,
  title,
  description,
  discountPrice,
  discount,
  price,
}) => {
  return (
    <Container>
      {small ? (
        <ImageSmall src={image} alt={alt} />
      ) : (
        <Image src={image} alt={alt} />
      )}
      {small ? null : (
        <Wrapper>
          <Subtitle>{subTitle ? subTitle.toUpperCase() : null}</Subtitle>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Promotie>
            {discountPrice}
            {discount ? <Discount>{discount}</Discount> : null}
          </Promotie>
          <Price>{price}</Price>
        </Wrapper>
      )}
    </Container>
  );
};
export default Tile;
