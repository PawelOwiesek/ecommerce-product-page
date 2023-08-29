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

const Modal = ({ showModal, counter, result }) => {
  counter = 4;

  return (
    <Container showModal={showModal}>
      <Header>Cart</Header>
      <Content>
        {counter === 0 ? (
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
                    <CalculateResult>
                      <Title> {path.title}</Title>
                      <Costs>
                        <span>
                          ${path.discountPrice.toFixed(2)} x {counter}
                        </span>
                        <strong>
                          ${(result = path.discountPrice * counter).toFixed(2)}
                        </strong>
                        <DeleteButton>
                          <DeleteIcon />
                        </DeleteButton>
                      </Costs>
                    </CalculateResult>
                  </>
                );
              })}
            </Wrapper>
            <Button>Checkout</Button>
          </>
        )}
      </Content>
    </Container>
  );
};
export default Modal;
