import { useState } from "react";
import Tile from "../../common/Tile";
import { data } from "../../core/assets/data";
import { Counter, Item, TileList } from "./styled";

const Main = () => {
  const [itemIndex, setItemIndex] = useState(0);

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

  return (
    <>
      {data.map((item) => {
        const path = item.fall;
        return (
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
              handleImageChange={() => handleImageChange(itemIndex)}
              onIndexPrevChange={() => onIndexPrevChange(itemIndex)}
              onIndexNextChange={() => onIndexNextChange(itemIndex)}
            />
          </div>
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
        })}
      </TileList>
      <Counter></Counter>
    </>
  );
};

export default Main;
