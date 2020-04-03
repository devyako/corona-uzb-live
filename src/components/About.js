import React from "react";
import styled from "styled-components";
import Me from "../assets/me.png";
import Virus from "../assets/virus.png";
import BlackNavigation from "../UI/BlackNav";

const about = () => {
  return (
    <Container>
      <BlackNavigation path="./news" pathName="YANGILIKLAR" />
      <div className="about">
        <img src={Virus} alt="corona-logo" />
        <div className="txt">
          Ushbu web saye sizga yangi kirib kelgan COVID-19 ya`ni korona virusini
          O`zbekiston va Dunyo bo`yicha ishonarli raqamlar bilan ko`rsatadi.
          Barcha ma`lumotlar Jahon Sog`liqni Saqlash Vazirligi ma`lumotlar
          bazasidan olinadi shu sababli O`zbekistondagi raqamlar JSSV tomonidan
          tasdiqlanmaguncha statistikalar yangilanishi 10 yoi 20 minutga
          kechikishi mumkin. Dasturlash jarayoni hali ham davom etmoqda tez
          orada yana yangi bo`lim va ma`lumotlar kiritiladi.
        </div>
      </div>
      <div className="about">
        <img src={Me} alt="me" />
        <div className="txt">
          Web sayt Yakhyo Ismoiljonov tomonidan tayyorlandi. Developerlar va
          Designerlarni hamkorlikga chaqiraman.
          <a href="https://www.facebook.com/yakhyo.ismoildjanov">Facebook</a>
          <br />
          Ushbu sayt open source(ochiq manba) bo`lib GitHub da o`z hissangizni
          qo`shishingiz mumkin.
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
      border-radius: 50%;
      @media screen and (max-width: 428px) {
        width: 50%;
      }
    }

    .txt {
      width: 70%;
      padding: 20px;
      text-align: center;
      @media screen and (max-width: 428px) {
        width: 90%;
      }
    }
  }
`;
