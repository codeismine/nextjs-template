import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { SpaceHeight } from "@/components/shared/Space";
import { H3 } from "@/components/shared/Text";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageContent = styled(Image)`
  width: 250px;
  height: 250px;
  border-radius: ${({ theme }) => theme.shape.borderRadius};
`;

const HomeComponent: React.FC = () => {
  return (
    <Container>
      <ImageContent width={250} height={250} src={"/logo.jpg"} alt={"logo"} />
      <SpaceHeight style={{ height: 40 }} />
      <H3>Hello Code.Is.Mine</H3>
    </Container>
  );
};

export default HomeComponent;
