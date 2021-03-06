import React, { useEffect } from "react";
import styled from "styled-components";
import { ImgSlider, Movies, Viewers } from ".";
import db from "../firebase";

export default function Home() {
  useEffect(() => {
    return () => {
      db.collection("movies").onSnapshot((snapshot) => {
        console.log(snapshot);
      });
    };
  }, []);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  );
}

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
