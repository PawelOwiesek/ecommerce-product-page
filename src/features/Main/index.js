import Tile from "../../common/Tile";
import { data } from "../../core/assets/data";
import { Container, Counter, Item, TileList } from "./styled";

const Main = () => {
  return (
    <>
      <Container>
        <div>
          {data.map((item, index) => {
            const path = item.fall;
            return (
              <div key={path.image[index]}>
                <Tile
                  image={path.image[index]}
                  alt={path.alt}
                  subTitle={path.subTitle}
                  title={path.title}
                  description={path.description}
                  discountPrice={path.discountPrice}
                  discount={path.discount}
                  price={path.price}
                />
              </div>
            );
          })}
        </div>
        <TileList>
          {data.map((item) => {
            const fallData = item.fall;
            return fallData.image.map((image, index) => (
              <Item key={index}>
                <Tile small image={image} alt={fallData.alt} />
              </Item>
            ));
          })}
        </TileList>
        <Counter></Counter>
      </Container>
    </>
  );
};

export default Main;
