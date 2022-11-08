import React from "react";
import styled from "styled-components";
import {
  bigTablet,
  computer,
  laptop,
  mobile,
  smallTablet,
  tablet,
  bigmobile,
} from "../responsive";
import pilt from "./img-home.jpg";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${laptop({ height: "90vh" })};
  ${bigTablet({ height: "90vh" })};
  ${tablet({ height: "80vh" })};
  ${smallTablet({ height: "60vh" })};
  ${bigmobile({ height: "60vh" })};
  ${mobile({ height: "60vh" })};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${laptop({ height: "110%" })};
  ${bigTablet({ height: "110%" })};
  ${tablet({ height: "110%" })};
  ${smallTablet({ height: "110%" })};
  ${bigmobile({ height: "110%" })};
  ${mobile({ height: "110%" })};
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
  ${laptop({ marginTop: "30px" })};
  ${bigTablet({ marginTop: "30px" })};
  ${smallTablet({ marginTop: "20px" })};
  ${bigmobile({ marginTop: "20px" })};
  ${mobile({ marginTop: "10px" })};
`;

const TitleFirst = styled.h1`
  color: #683a41;
  font-size: 5em;
  font-weight: 500;
  margin-top: 80px;
  margin-bottom: -15px;
  ${computer({ fontSize: "4em" })};
  ${laptop({ fontSize: "4em" })};
  ${bigTablet({ fontSize: "4em" })};
  ${tablet({ fontSize: "2.5em" })};
  ${smallTablet({ fontSize: "2em", paddingBottom: "10px" })};
  ${bigmobile({ fontSize: "2em", paddingBottom: "10px" })};
  ${mobile({ fontSize: "2em", paddingBottom: "10px" })};
`;

const TitleSecond = styled.h1`
  color: #683a41;
  font-size: 5em;
  font-weight: 500;
  margin-bottom: 0px;
  ${computer({ fontSize: "4em" })};
  ${laptop({ fontSize: "4em" })};
  ${bigTablet({ fontSize: "4em" })};
  ${tablet({ fontSize: "2.5em" })};
  ${smallTablet({ fontSize: "2.5em" })};
  ${bigmobile({ fontSize: "2em" })};
  ${mobile({ fontSize: "2em" })};
`;

const Button = styled.button`
  border: solid 1px #683a41;
  background: transparent;
  padding: 10px 15px;
  color: #683a41;
  cursor: pointer;
  font-weight: 500;
  margin-top: 20px;
  ${tablet({ marginTop: "10px" })};
`;

const SectionHome = () => {
  return (
    <Container>
      <Image src={pilt} />
      <Info>
        <TitleFirst>New</TitleFirst>
        <TitleSecond>Collection</TitleSecond>
        <Link to="/products/all" style={{ background: "none" }}>
          <Button>SHOP NOW</Button>
        </Link>
      </Info>
    </Container>
  );
};

export default SectionHome;
