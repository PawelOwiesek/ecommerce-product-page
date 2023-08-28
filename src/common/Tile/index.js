import {
  Button,
  Buttons,
  Container,
  Description,
  Discount,
  Image,
  ImageSmall,
  Next,
  Previous,
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
  onIndexPrevChange,
  onIndexNextChange,
}) => {
  return (
    <Container>
      {small ? (
        <ImageSmall src={image} alt={alt} />
      ) : (
        <>
          <Image src={image} alt={alt} />
          <Buttons>
            <Button onClick={() => onIndexPrevChange()}>
              <Previous />
            </Button>
            <Button onClick={() => onIndexNextChange()}>
              <Next />
            </Button>
          </Buttons>
        </>
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
