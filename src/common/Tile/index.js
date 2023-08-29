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
  itemIndex,
  active,
  setActiveItem,
}) => {
  let result;
  return (
    <Container active={active}>
      {small ? (
        <ImageSmall active={active} src={image} alt={alt} />
      ) : (
        <>
          <Image
            onClick={() => setActiveItem()}
            active={active}
            src={image}
            alt={alt}
          />
          <Buttons>
            <Button
              disabled={itemIndex === 0 ? true : false}
              onClick={() => onIndexPrevChange()}
            >
              <Previous />
            </Button>
            <Button
              disabled={itemIndex === 3 ? true : false}
              onClick={() => onIndexNextChange()}
            >
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
            ${discountPrice}
            {discount ? <Discount>{discount}</Discount> : null}
          </Promotie>
          <Price>{price}</Price>
          {result}
        </Wrapper>
      )}
    </Container>
  );
};
export default Tile;
