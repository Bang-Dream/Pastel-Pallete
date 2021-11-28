import React from "react";
import "../../scss/Reset.scss";
import "../../scss/Main.scss";
import { Carousel } from "react-bootstrap";
export default function Slider() {
  return (
    <Carousel style={{ textAlign: "center" }}>
      <Carousel.Item interval={5000}>
        <img src="https://ifh.cc/g/SYiLyi.jpg" alt="First slide" width="80%" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img src="https://ifh.cc/g/E8Sr3C.jpg" alt="Second slide" width="80%" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://ifh.cc/g/z3ELsF.jpg" alt="Third slide" width="80%" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
