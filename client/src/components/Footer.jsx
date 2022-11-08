import { Mail } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import {
  computer,
  mobile,
  laptop,
  tablet,
  smallTablet,
  bigmobile,
} from "../responsive";

const Container = styled.div`
  background: url("images/img-footer.jpg") center;
  height: 35vh;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  ${computer({ height: "45vh" })};
  ${tablet({ height: "70vh" })};
  ${smallTablet({ height: "35vh" })};
  ${bigmobile({ height: "40vh" })};
  ${mobile({ height: "50vh" })};
`;

const Wrapper = styled.div`
  display: grid;
  width: 90%;
  margin-top: 30px;
  grid-template-columns: 1fr 1fr 1fr 40% auto;
  grid-template-rows: auto auto;
  grid-gap: 10px;
  ${tablet({ marginTop: "1px" })};
  ${bigmobile({ marginTop: "5px" })};
  ${mobile({
    gridTemplateColumns: "1fr 1fr 1fr",
    gridTemplateRows: "auto auto auto",
  })};
`;

const Title = styled.h3`
  margin-bottom: 12px;
  list-style: none;
  font-weight: 500;
  ${tablet({ fontSize: "1em", marginTop: "5px" })};
  ${smallTablet({ fontSize: "1em", marginTop: "20px" })};
  ${bigmobile({ fontSize: "1em", marginTop: "5px" })};
  ${mobile({ fontSize: "1.2em", marginTop: "5px" })};
`;

const ContactLinks = styled.li`
  grid-column-start: 1;
  grid-column-end: 2;
  color: #eed2c0;
  padding: 10px;
  line-height: 2;
  ${tablet({ fontSize: "13px" })};
  ${smallTablet({ fontSize: "12px" })};
  ${bigmobile({ fontSize: "12px" })};
  ${mobile({ fontSize: "10px" })};
`;

const CompanyLinks = styled.li`
  grid-column-start: 2;
  grid-column-end: 3;
  color: #eed2c0;
  padding: 10px;
  line-height: 2;
  ${tablet({ fontSize: "13px" })};
  ${smallTablet({ fontSize: "12px" })};
  ${bigmobile({ fontSize: "12px" })};
  ${mobile({ fontSize: "10px" })};
`;

const MediaLinks = styled.li`
  grid-column-start: 3;
  grid-column-end: 4;
  color: #eed2c0;
  padding: 10px;
  line-height: 2;
  ${tablet({ fontSize: "13px" })};
  ${smallTablet({ fontSize: "12px" })};
  ${bigmobile({ fontSize: "12px" })};
  ${mobile({ fontSize: "10px" })};
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 5px;
  ${laptop({ marginBottom: "1px" })}
  ${tablet({ marginBottom: "1px" })}
  ${smallTablet({ marginBottom: "1px" })};
  ${bigmobile({ marginBottom: "1px" })};
`;

const Subscription = styled.div`
  grid-column-start: 4;
  grid-column-end: 5;
  color: #eed2c0;
  padding: 10px;
  ${mobile({ gridColumnStart: "1", gridColumnEnd: "-1" })};
`;

const InputContainer = styled.div`
  width: 50%;
  height: 30px;
  margin-top: 20px;
  padding: 8px 20px;
  border-radius: 2px;
  margin-right: 10px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid #eed2c0;
  ${laptop({ width: "70%" })}
  ${tablet({ width: "80%" })};
  ${smallTablet({ width: "90%" })};
  ${bigmobile({ width: "90%", padding: "2px" })};
  ${mobile({ width: "90%", padding: "2px" })};
`;

const Input = styled.input`
  border: none;
  padding-left: 5px;
  color: #683a41;
  ${bigmobile({ padding: "0" })};
`;

const Button = styled.button`
  border: none;
  background-color: white;
`;

const Desc = styled.p`
  line-height: 1.6;
  ${laptop({ lineHeight: "1.4" })}
  ${tablet({ lineHeight: "1.3", fontSize: "13px" })}
  ${smallTablet({ lineHeight: "1.3", fontSize: "12px" })};
  ${bigmobile({ lineHeight: "1.3", fontSize: "12px" })};
  ${mobile({ lineHeight: "1.5", fontSize: "10px" })};
`;

const Rights = styled.div`
  grid-column-start: 1;
  grid-column-end: -1;
  color: #eed2c0;
  text-align: center;
  ${laptop({ marginBottom: "20px" })}
  ${tablet({ marginBottom: "20px" })}
  ${smallTablet({ marginBottom: "20px" })};
  ${bigmobile({ marginBottom: "5px" })};
  ${mobile({ marginBottom: "5px", fontSize: "9px" })};
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <ContactLinks>
          <Title>Need help</Title>
          <List>
            <ListItem>Contact Us</ListItem>
            <ListItem>Shipping Service</ListItem>
            <ListItem>Payment Options</ListItem>
            <ListItem>Returns and Exchanges</ListItem>
            <ListItem>Product Care</ListItem>
          </List>
        </ContactLinks>
        <CompanyLinks>
          <Title>The Company</Title>
          <List>
            <ListItem>About Us</ListItem>
            <ListItem>Privacy and Cookies</ListItem>
          </List>
        </CompanyLinks>
        <MediaLinks>
          <Title>Find Us On</Title>
          <List>
            <ListItem>Facebook</ListItem>
            <ListItem>Instagram</ListItem>
          </List>
        </MediaLinks>
        <Subscription>
          <Title>Sign Up For Hekate Updates</Title>
          <Desc>
            By entering your email address below, you consent to receiving our
            newsletter with access to our latest collections and events. More
            details on this are provided in our Privacy Policy.
          </Desc>
          <InputContainer>
            <Input placeholder="Email address" />
            <Button>
              <Mail style={{ color: "#683a41" }} />
            </Button>
          </InputContainer>
        </Subscription>
        <Rights>
          <small>Hecate © 2022</small>
        </Rights>
      </Wrapper>
    </Container>
  );
};

export default Footer;
