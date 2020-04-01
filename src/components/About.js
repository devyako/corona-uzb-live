import React from "react";
import styled from "styled-components";
import Me from "../assets/me.png";
import Virus from "../assets/virus.png";
import { Link } from "react-router-dom";

const about = () => {
  return (
    <Container>
      <Link
        to="/"
        style={{
          color: "black",
          textDecoration: "none",
          border: "1px solid black",
          padding: "5px",
          borderRadius: "5px",
          marginTop: "15px"
        }}
      >
        Bosh Sahifa
      </Link>
      <div className="about">
        <img src={Virus} alt="corona-logo" />
        <div className="txt">
          Ushbu web site sizga yangi kirib kelgan Covid-19 yani karona virus
          O`zbekiston va Dunyo bo`yicha statistikalarini ishonarli raqamlar
          bilan ko`rsatadi. Dasturlash jarayoni hali ham davom etmoqda tez orada
          yana yangi bo`limlar kiritiladi.
        </div>
      </div>
      <div className="about">
        <img src={Me} alt="me" />
        <div className="txt">
          Web sayt Yakhyo Ismoiljonov tomonidan tayyorlandi. Developerlarni
          hamkorlikga chaqiraman.{" "}
          <a href="https://www.facebook.com/yakhyo.ismoildjanov">Facebook</a>
          <br />
          Ushbu sayt open source(ochiq manba) bo`lib GitHub da o`z hissangizni
          qo`shishingiz mumkin.{" "}
          <a href="https://github.com/devyako/corona-uzb-live">GitHub</a>
        </div>
      </div>
    </Container>
  );
};

export default about;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 20px;
  flex-direction: column;
  box-sizing: border-box;
  @media screen and (max-width: 428px) {
    padding: 5px;
  }

  .about {
    padding: 20px;
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    @media screen and (max-width: 428px) {
      width: 100%;
      flex-direction: column;
    }

    img {
      width: 20%;
      @media screen and (max-width: 428px) {
        width: 50%;
      }
    }

    .txt {
      width: 70%;
      padding: 20px;
      @media screen and (max-width: 428px) {
        width: 90%;
      }
    }
  }
`;