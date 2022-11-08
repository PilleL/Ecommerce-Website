import { Add, Remove } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile, tablet, smallTablet, bigmobile } from "../responsive";
import { publicRequest } from "../requestMethods";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartRedux";

const Container = styled.div`
  background: linear-gradient(
    200deg,
    rgb(238, 210, 192) 0%,
    rgb(104, 58, 65) 50%
  );
  color: #eed2c0;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })};
  ${tablet({ height: "60vh" })};
  ${smallTablet({ height: "50vh" })};
  ${bigmobile({ height: "35vh" })};
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-weight: 500;
  ${tablet({ fontSize: "20px" })};
  ${smallTablet({ fontSize: "20px" })};
  ${bigmobile({ fontSize: "20px" })};
  ${mobile({ fontSize: "20px" })};
`;

const Desc = styled.p`
  margin: 20px 0px;
  ${tablet({ fontSize: "13px" })};
  ${smallTablet({ fontSize: "13px" })};
  ${bigmobile({ fontSize: "10px" })};
  ${mobile({ fontSize: "10px" })};
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 30px;
  ${tablet({ fontSize: "20px" })};
  ${smallTablet({ fontSize: "20px" })};
  ${bigmobile({ fontSize: "20px" })};
  ${mobile({ fontSize: "20px" })};
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  ${tablet({ fontSize: "13px" })};
  ${smallTablet({ fontSize: "13px" })};
  ${bigmobile({ fontSize: "13px" })};
  ${mobile({ fontSize: "13px" })};
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
  ${tablet({ width: "15px", height: "15px" })};
  ${smallTablet({ width: "15px", height: "15px" })};
  ${bigmobile({ width: "15px", height: "15px" })};
  ${mobile({ width: "15px", height: "15px" })};
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  color: #683a41;
  ${tablet({ marginLeft: "20px" })};
  ${smallTablet({ marginLeft: "20px" })};
  ${bigmobile({ marginLeft: "20px" })};
  ${mobile({ marginLeft: "20px" })};
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })};
  ${tablet({ width: "20%" })};
  ${smallTablet({ width: "20%" })};
  ${bigmobile({ width: "20%" })};
  ${mobile({ width: "20%" })};
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  ${tablet({ fontSize: "18px" })};
  ${smallTablet({ fontSize: "18px" })};
  ${bigmobile({ fontSize: "18px" })};
  ${mobile({ fontSize: "18px" })};
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #683a41;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  ${tablet({ width: "15px", height: "15px" })};
  ${smallTablet({ width: "15px", height: "15px" })};
  ${bigmobile({ width: "15px", height: "15px" })};
  ${mobile({ width: "15px", height: "15px" })};
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid #eed2c0;
  background-color: transparent;
  color: #eed2c0;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #eed2c0;
    color: #683a41;
  }
  ${tablet({ fontSize: "12px", padding: "10px", marginLeft: "25px" })};
  ${smallTablet({ fontSize: "12px", padding: "10px", marginLeft: "25px" })};
  ${bigmobile({ fontSize: "12px", padding: "10px", marginLeft: "25px" })};
  ${mobile({ fontSize: "10px", padding: "10px", marginLeft: "25px" })};
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>{product.price} €</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Product;
