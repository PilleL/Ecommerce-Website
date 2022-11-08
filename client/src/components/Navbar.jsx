import { FavoriteBorder, Search, ShoppingBag } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { mobile, smallTablet } from "../responsive";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 60px;
  background: linear-gradient(200deg, rgb(104, 58, 65) 0%, rgb(47, 41, 42) 50%);
  color: #eed2c0;
  ${mobile({ height: "45px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 10px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Title = styled.span`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${smallTablet({ fontSize: "12px" })};
  ${mobile({ fontSize: "12px" })};
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: 500;
  text-decoration: none;
  ${smallTablet({ fontSize: "25px" })};
  ${mobile({ fontSize: "18px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${smallTablet({ fontSize: "12px" })};
  ${mobile({ fontSize: "12px" })};
`;

const In = styled.div`
  color: #eed2c0;
  ${mobile({ marginRight: "-25px" })};
`;
const Out = styled.div`
  color: #eed2c0;
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  let user = useSelector((state) => state.user.currentUser);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link
            to="/shop"
            style={{
              color: "#eed2c0",
              textDecoration: "none",
              background: "none",
            }}
          >
            <Title>SHOP</Title>
          </Link>
        </Left>
        <Center>
          <Link to="/" style={{ color: "#eed2c0", textDecoration: "none" }}>
            <Logo>HECATE</Logo>
          </Link>
        </Center>
        <Right>
          <In>
            {user ? (
              <MenuItem>LOGOUT</MenuItem>
            ) : (
              <Link
                to="/login"
                style={{ color: "#eed2c0", textDecoration: "none" }}
              >
                <MenuItem>SIGNIN</MenuItem>
              </Link>
            )}
          </In>
          <Out>
            <MenuItem>{user && user.username}</MenuItem>
          </Out>
          <Link to="/search" style={{ background: "none" }}>
            <MenuItem>
              <Badge color="primary">
                <Search style={{ color: "#eed2c0" }} />
              </Badge>
            </MenuItem>
          </Link>
          <MenuItem>
            <Badge color="primary">
              <FavoriteBorder />
            </Badge>
          </MenuItem>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingBag style={{ color: "#eed2c0" }} />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
