import { useState } from "react";
import Tile from "../../common/Tile";
import { data } from "../../core/assets/data";
import {
  Button,
  CartIcon,
  Container,
  Count,
  Counter,
  CounterButton,
  CounterWrapper,
  Item,
  TileList,
} from "./styled";
import PopOut from "../../common/PopOut";

const Main = ({ counter, setCounter, addProductsToCart }) => {
  const [itemIndex, setItemIndex] = useState(0);
  const [active, setActive] = useState(false);

  const handleImageChange = (index) => {
    setItemIndex(index);
  };

  const onIndexPrevChange = (index) => {
    if (index < 0) {
      return;
    }
    setItemIndex((index) => index - 1);
  };

  const onIndexNextChange = (index) => {
    if (index > 4) {
      return;
    }
    setItemIndex((index) => index + 1);
  };

  const counterDecrement = () => {
    if (!counter) {
      return;
    }
    return setCounter((counter) => counter - 1);
  };

  const counterIncrement = () => {
    return setCounter((counter) => counter + 1);
  };

  const setActiveItem = () => {
    setActive(!active);
    console.log(active);
  };

  return (
    <Container active={active}>
      {data.map((item) => {
        const path = item.fall;
        return (
          <>
            <div key={path.image[itemIndex]}>
              <Tile
                itemIndex={itemIndex}
                image={path.image[itemIndex]}
                alt={path.alt}
                subTitle={path.subTitle}
                title={path.title}
                description={path.description}
                discountPrice={path.discountPrice}
                discount={path.discount}
                price={path.price}
                setActiveItem={setActiveItem}
                handleImageChange={() => handleImageChange(itemIndex)}
                onIndexPrevChange={() => onIndexPrevChange(itemIndex)}
                onIndexNextChange={() => onIndexNextChange(itemIndex)}
              />
            </div>
            <CounterWrapper>
              <Counter>
                <CounterButton onClick={() => counterDecrement()}>
                  -
                </CounterButton>
                <Count>{counter}</Count>
                <CounterButton onClick={() => counterIncrement()}>
                  +
                </CounterButton>
              </Counter>
              <Button onClick={() => addProductsToCart()}>
                <CartIcon />
                Add to cart
              </Button>
            </CounterWrapper>
          </>
        );
      })}
      <TileList>
        {data.map((item) => {
          const fallData = item.fall;
          return fallData.image.map((image, index) => (
            <Item key={index} onClick={() => handleImageChange(index)}>
              <Tile small image={image} alt={fallData.alt} />
            </Item>
          ));
        })}{" "}
      </TileList>
      <PopOut
        active={active}
        setActiveItem={setActiveItem}
        itemIndex={itemIndex}
        handleImageChange={handleImageChange}
      />
    </Container>
  );
};

export default Main;
