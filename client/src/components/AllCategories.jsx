import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  computer,
  tablet,
  smallTablet,
  bigmobile,
  mobile,
} from "../responsive";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #683a41;
  background: linear-gradient(
    200deg,
    rgb(238, 210, 192) 0%,
    rgb(104, 58, 65) 50%
  );
`;

const Body = styled.div`
  display: grid;
  width: 100%;
  height: 110vh;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;
  margin: 20px;
  ${tablet({
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "auto",
    height: "auto",
  })};
  ${smallTablet({
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "auto",
    height: "auto",
  })};
  ${bigmobile({
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "auto",
    height: "auto",
  })};
  ${mobile({
    gridTemplateColumns: "1fr",
    gridTemplateRows: "auto",
    height: "auto",
  })};
`;

const Section1 = styled.div`
  background: url("images/img-shop-body.png") center;
  display: grid;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: #eed2c0;
    transform: scale(1.1);
  }
`;
const Section2 = styled.div`
  background: url("images/img-shop-shirt.png") center;
  display: grid;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: #eed2c0;
    transform: scale(1.1);
  }
`;
const Section3 = styled.div`
  background: url("images/img-shop-dress.png") center;
  display: grid;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: #eed2c0;
    transform: scale(1.1);
  }
`;
const Section4 = styled.div`
  background: url("images/img-shop-pants.png") center;
  display: grid;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: #eed2c0;
    transform: scale(1.1);
  }
`;
const Section5 = styled.div`
  background: url("images/img-shop-bibs.png") center;
  display: grid;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: #eed2c0;
    transform: scale(1.1);
  }
`;
const Section6 = styled.div`
  background: url("images/img-shop-hat.png") center;
  display: grid;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: #eed2c0;
    transform: scale(1.1);
  }
`;
const Section7 = styled.div`
  background: url("images/img-shop-pasifier.png") center;
  display: grid;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: #eed2c0;
    transform: scale(1.1);
  }
`;
const Section8 = styled.div`
  background: url("images/img-shop-headband.png") center;
  display: grid;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: #eed2c0;
    transform: scale(1.1);
  }
`;

const Title = styled.h1`
  font-size: 2em;
  font-weight: 500;
  margin-top: 290px;
  ${computer({ fontSize: "2em", marginTop: "250px" })};
  ${tablet({ fontSize: "1.5em", marginTop: "300px" })};
  ${smallTablet({ fontSize: "1.5em", marginTop: "300px" })};
  ${bigmobile({ fontSize: "1em", marginTop: "300px" })};
  ${mobile({ fontSize: "2em", marginTop: "270px", marginLeft: "10px" })};
`;

const Button = styled.button`
  border: solid 1px #683a41;
  background: transparent;
  padding: 10px 15px;
  color: #683a41;
  cursor: pointer;
  font-weight: 500;
  ${tablet({ marginBottom: "10px" })};
  ${smallTablet({ marginBottom: "10px" })};
  ${bigmobile({ marginBottom: "10px" })};
  ${mobile({ marginBottom: "10px" })};
`;

const AllCategories = () => {
  return (
    <Container>
      <Body>
        <Section1>
          <Link
            to="/products/body"
            style={{
              color: "#683a41",
              textDecoration: "none",
              background: "none",
            }}
          >
            <Title>Body</Title>
            <Button>Shop now</Button>
          </Link>
        </Section1>
        <Section2>
          <Link
            to="/products/shirt"
            style={{
              color: "#683a41",
              textDecoration: "none",
              background: "none",
            }}
          >
            <Title>Shirt</Title>
            <Button>Shop now</Button>
          </Link>
        </Section2>
        <Section3>
          <Link
            to="/products/dress"
            style={{
              color: "#683a41",
              textDecoration: "none",
              background: "none",
            }}
          >
            <Title>Dress</Title>
            <Button>Shop now</Button>
          </Link>
        </Section3>
        <Section4>
          <Link
            to="/products/pants"
            style={{
              color: "#683a41",
              textDecoration: "none",
              background: "none",
            }}
          >
            <Title>Pants</Title>
            <Button>Shop now</Button>
          </Link>
        </Section4>
        <Section5>
          <Link
            to="/products/bibs"
            style={{
              color: "#683a41",
              textDecoration: "none",
              background: "none",
            }}
          >
            <Title>Bibs</Title>
            <Button>Shop now</Button>
          </Link>
        </Section5>
        <Section6>
          <Link
            to="/products/hat"
            style={{
              color: "#683a41",
              textDecoration: "none",
              background: "none",
            }}
          >
            <Title>Hat</Title>
            <Button>Shop now</Button>
          </Link>
        </Section6>
        <Section7>
          <Link
            to="/products/pasifier"
            style={{
              color: "#683a41",
              textDecoration: "none",
              background: "none",
            }}
          >
            <Title>Pasifier</Title>
            <Button>Shop now</Button>
          </Link>
        </Section7>
        <Section8>
          <Link
            to="/products/headband"
            style={{
              color: "#683a41",
              textDecoration: "none",
              background: "none",
            }}
          >
            <Title>Headband</Title>
            <Button>Shop now</Button>
          </Link>
        </Section8>
      </Body>
    </Container>
  );
};

export default AllCategories;
