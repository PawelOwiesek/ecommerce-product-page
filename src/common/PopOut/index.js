import Tile from "../Tile";
import { data } from "../../core/assets/data";
import { Item, TileList } from "../../features/Main/styled";
import { CloseIcon, FrontDrop, PopButton } from "./styled";
import close from "../../images/icons/icon-close.svg";

const PopOut = ({ itemIndex, handleImageChange, active, setActiveItem }) => {
  return (
    <FrontDrop active={active}>
      <PopButton onClick={() => setActiveItem()}>
        <CloseIcon src={close} alt="closeIcon" />
      </PopButton>
      {data.map((item) => {
        const path = item.fall;
        return (
          <div key={path.image[itemIndex]}>
            <Tile
              active={active}
              itemIndex={itemIndex}
              image={path.image[itemIndex]}
              alt={path.alt}
            />
          </div>
        );
      })}
      <TileList>
        {data.map((item) => {
          const fallData = item.fall;
          return fallData.image.map((image, index) => (
            <Item key={index} onClick={() => handleImageChange(index)}>
              <Tile small active={active} image={image} alt={fallData.alt} />
            </Item>
          ));
        })}{" "}
      </TileList>
    </FrontDrop>
  );
};

export default PopOut;
