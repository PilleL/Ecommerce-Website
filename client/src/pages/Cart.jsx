import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile, tablet, smallTablet, bigmobile } from "../responsive";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

const Container = styled.div`
  background: linear-gradient(
    200deg,
    rgb(238, 210, 192) 0%,
    rgb(104, 58, 65) 50%
  );
  color: #eed2c0;
`;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  ${tablet({ fontSize: "20px" })};
  ${smallTablet({ fontSize: "20px" })};
  ${bigmobile({ fontSize: "20px" })};
  ${mobile({ fontSize: "20px" })};
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 400;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "#683A41" : "#F4E7DF"};
  color: ${(props) => props.type === "filled" && "#F4E7DF"};
  ${mobile({ padding: "2px", fontSize: "12px" })}
`;

const TopTexts = styled.span`
  ${mobile({ display: "flex", flexDirection: "column", fontSize: "12px" })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${tablet({ flexDirection: "column" })}
  ${bigmobile({ flexDirection: "column" })}
  ${smallTablet({ flexDirection: "column" })}
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
  ${tablet({ fontSize: "13px" })};
  ${smallTablet({ fontSize: "13px" })};
  ${bigmobile({ fontSize: "13px" })};
  ${mobile({ fontSize: "13px" })};
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  ${tablet({ width: "150px" })};
  ${smallTablet({ width: "150px" })};
  ${bigmobile({ width: "150px" })};
  ${mobile({ width: "150px" })};
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${tablet({ fontSize: "18px" })};
  ${smallTablet({ fontSize: "18px" })};
  ${bigmobile({ fontSize: "18px" })};
  ${mobile({ fontSize: "18px" })};
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${tablet({ fontSize: "25px" })};
  ${smallTablet({ fontSize: "25px" })};
  ${bigmobile({ fontSize: "25px" })};
  ${mobile({ fontSize: "20px", marginBottom: "10px" })};
`;

const Hr = styled.hr`
  background-color: #f4e7df;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 1px solid #683a41;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  ${tablet({ height: "40vh" })};
  ${smallTablet({ height: "40vh" })};
  ${bigmobile({ height: "40vh" })};
  ${mobile({ height: "40vh" })};
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
  ${tablet({ fontSize: "20px" })};
  ${smallTablet({ fontSize: "20px" })};
  ${bigmobile({ fontSize: "20px" })};
  ${mobile({ fontSize: "20px" })};
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
  ${tablet({ fontSize: "15px" })};
  ${smallTablet({ fontSize: "15px" })};
  ${bigmobile({ fontSize: "15px" })};
  ${mobile({ fontSize: "15px" })};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #683a41;
  color: #f4e7df;
  font-weight: 400;
`;

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE);
  }
  return stripePromise;
};

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const item = {
    price: "price_1LwByTKS8AZWJfA1fHKKv5ck",
    quantity: 1,
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`,
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>
                    {product.price * product.quantity} €
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>{cart.total} €</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>3.90 €</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>{cart.total} €</SummaryItemPrice>
            </SummaryItem>

            <Button onClick={redirectToCheckout} disabled={isLoading}>
              {isLoading ? "Loading..." : "CHECKOUT NOW"}
            </Button>
            {/* <StripeCheckout
              name="Hecate Shop"
              image="https://img.favpng.com/19/2/9/computer-icons-halloween-apple-icon-image-format-png-favpng-fTxBvfZcSdCVKZdDG74BCdNAy_t.jpg"
              billingAddress
              shippingAddress
              description={`Your total is ${cart.total}  €`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout> */}
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
