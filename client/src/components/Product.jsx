import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartRedux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { tablet, smallTablet, bigmobile, mobile } from "../responsive";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(238, 210, 192, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(244, 231, 223, 0.7);
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
  ${tablet({ height: "200px" })};
  ${smallTablet({ height: "200px" })};
  ${bigmobile({ height: "200px" })};
  ${mobile({ height: "180px" })};
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.6);
  position: absolute;
  ${tablet({ width: "100px", height: "100px" })};
  ${smallTablet({ width: "100px", height: "100px" })};
  ${bigmobile({ width: "100px", height: "100px" })};
  ${mobile({ width: "100px", height: "100px" })};
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`} style={{ background: "none" }}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
