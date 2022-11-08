import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import {
  bigTablet,
  laptop,
  mobile,
  tablet,
  smallTablet,
  bigmobile,
} from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  color: #eed2c0;
  ${bigTablet({ height: "80vh" })}
  ${tablet({ height: "70vh" })}
  ${smallTablet({ height: "60vh" })};
  ${bigmobile({ height: "60vh" })};
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
  ${bigTablet({ height: "80vh" })};
  ${tablet({ height: "70vh" })};
  ${smallTablet({ height: "60vh" })};
  ${bigmobile({ height: "60vh" })};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 90%;
  ${laptop({ height: "80%", marginTop: "70px" })};
  ${bigTablet({ height: "80%", marginTop: "70px" })};
  ${tablet({ height: "100%", margin: "10px 50px" })};
  ${smallTablet({ height: "70%", marginTop: "80px" })};
  ${bigmobile({ height: "65%", marginTop: "95px" })};
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  ${tablet({ marginRight: "30px" })};
`;

const Title = styled.h1`
  font-size: 5em;
  font-weight: 400;
  ${laptop({ fontSize: "4em" })};
  ${bigTablet({ fontSize: "4em" })};
  ${tablet({ fontSize: "2.5em" })};
  ${smallTablet({ fontSize: "2em" })};
  ${bigmobile({ fontSize: "1.5em" })};
`;

const Desc = styled.p`
  margin: 30px 0px 40px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  ${smallTablet({ fontSize: "15px" })};
  ${tablet({ fontSize: "15px" })};
  ${bigmobile({ fontSize: "13px" })};
`;

const Button = styled.button`
  border: solid 1px #eed2c0;
  background: transparent;
  padding: 10px 25px;
  color: #eed2c0;
  cursor: pointer;
  font-weight: 500;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosNewOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Link to={item.link} style={{ background: "none" }}>
                <Button>SHOW NOW</Button>
              </Link>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
