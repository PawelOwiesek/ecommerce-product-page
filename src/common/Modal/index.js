import { data } from "../../core/assets/data";
import Tile from "../Tile";
import {
  Button,
  CalculateResult,
  Container,
  Content,
  Costs,
  DeleteButton,
  DeleteIcon,
  Header,
  Title,
  Wrapper,
} from "./styled";

const Modal = ({
  showModal,
  result,
  addProductsToCart,
  buyCount,
  setBuyCount,
}) => {
  const removeItems = () => {
    return setBuyCount((buyCount = 0));
  };

  return (
    <Container showModal={showModal}>
      <Header>Cart</Header>
      <Content>
        {buyCount === 0 ? (
          "Your cart is empty"
        ) : (
          <>
            <Wrapper>
              {data.map((item) => {
                const path = item.fall;
                return (
                  <>
                    <div key={path.image[0]}>
                      <Tile small image={path.image[0]} alt={path.alt} />
                    </div>
                    <CalculateResult
                      onChange={() => addProductsToCart(buyCount)}
                    >
                      <Title> {path.title}</Title>
                      <Costs>
                        <span>
                          ${path.discountPrice.toFixed(2)} x {buyCount}
                        </span>
                        <strong>
                          ${(result = path.discountPrice * buyCount).toFixed(2)}
                        </strong>
                        <DeleteButton onClick={() => removeItems()}>
                          <DeleteIcon />
                        </DeleteButton>
                      </Costs>
                    </CalculateResult>
                  </>
                );
              })}
            </Wrapper>
            <Button onClick={() => removeItems()}>Checkout</Button>
          </>
        )}
      </Content>
    </Container>
  );
};
export default Modal;
