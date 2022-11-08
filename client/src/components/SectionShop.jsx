import React from "react";
import styled from "styled-components";
import {
  bigTablet,
  laptop,
  mobile,
  tablet,
  smallTablet,
  bigmobile,
} from "../responsive";
import pilt from "./img-shop.jpg";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${laptop({ height: "70vh" })}
  ${bigTablet({ height: "70vh" })};
  ${tablet({ height: "60vh" })};
  ${smallTablet({ height: "50vh" })};
  ${bigmobile({ height: "50vh" })};
  ${mobile({ height: "40vh" })}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  color: #eed2c0;
  font-size: 4.5em;
  font-weight: 600;
  ${tablet({ fontSize: "3em" })};
  ${smallTablet({ fontSize: "3em" })};
  ${bigmobile({ fontSize: "3em" })};
  ${mobile({ fontSize: "3em" })}
`;

const SectionShop = () => {
  return (
    <Container>
      <Image src={pilt} />
      <Info>
        <Title>Shop</Title>
      </Info>
    </Container>
  );
};

export default SectionShop;
