import { useState } from "react";
import Header from "../common/Header";
import Main from "../features/Main";

function App() {
  const [counter, setCounter] = useState(0);
  const [buyCount, setBuyCount] = useState(0);

  const addProductsToCart = () => {
    setBuyCount(buyCount + counter);
    setCounter((counter) => (counter = 0));
  };

  return (
    <>
      <Header
        addPrductsToCart={addProductsToCart}
        buyCount={buyCount}
        setBuyCount={setBuyCount}
      />
      <Main
        counter={counter}
        setCounter={setCounter}
        addProductsToCart={addProductsToCart}
        setBuyCount={setBuyCount}
        buyCount={buyCount}
      />
    </>
  );
}

export default App;
