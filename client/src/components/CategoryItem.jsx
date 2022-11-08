import React from "react";
import styled from "styled-components";
import {
  computer,
  mobile,
  tablet,
  smallTablet,
  bigmobile,
} from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 70vh;
  position: relative;
  &:hover {
    background-color: rgba(238, 210, 192, 0.4);
  }
  cursor: pointer;
  ${tablet({ height: "60vh" })}
  ${smallTablet({ height: "50vh" })};
  ${bigmobile({ height: "50vh" })};
`;

const Image = styled.img`
  width: 90%;
  height: 100%;
  object-fit: cover;
  ${tablet({ padding: "0px 10px 0 10px" })}
  ${mobile({ height: "20vh", padding: "0px 20px 0 20px" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: #683a41;
  font-weight: 500;
  margin-top: 400px;
  margin-bottom: 20px;
  ${computer({ marginTop: "300px" })}
  ${tablet({ marginTop: "170px", fontSize: "1.3em" })}
  ${smallTablet({ marginTop: "300px", fontSize: "1.5em" })};
  ${bigmobile({ marginTop: "300px", fontSize: "1.2em" })};
  ${mobile({ marginTop: "130px", fontSize: "1.2em" })}
`;

const Button = styled.button`
  border: solid 1px #683a41;
  background: transparent;
  padding: 10px 15px;
  color: #683a41;
  font-weight: 500;
  ${bigmobile({ fontSize: "0.8em", padding: "5px 5px" })};
  ${tablet({ fontSize: "0.8em", padding: "5px 5px", marginTop: "-10px" })};
  ${mobile({ display: "none" })}
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`} style={{ background: "none" }}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>Discover more</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
