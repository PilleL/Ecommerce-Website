import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(200deg, rgb(104, 58, 65) 0%, rgb(47, 41, 42) 50%);
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #eed2c0;
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
  font-size: 3em;
  font-weight: 500;
  ${mobile({ fontSize: "2em" })};
`;

const Text = styled.h1`
  font-size: 2.5em;
  font-weight: 500;
  ${mobile({ fontSize: "1em" })};
`;

const Success = () => {
  return (
    <Container>
      <Info>
        <Title>Success </Title>
        <Text>Thank you for your purchase!</Text>
      </Info>
    </Container>
  );
};

export default Success;
