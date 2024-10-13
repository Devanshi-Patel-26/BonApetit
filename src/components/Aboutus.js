import React from "react";
import styled from "styled-components";
import { CiBowlNoodles } from "react-icons/ci";
import { Link } from "react-router-dom";

const AboutUsPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const AboutUsHeader = styled.div`
  color: orange;
  background-color: white;
  display: flex;
  width: 100vw;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  box-shadow: 0 3px 6px 0 #555;
`;

const NameOfApp = styled.div`
  display: flex;
  align-items: center;
  font-family: "Lucida Handwriting", cursive;
  font-size: 35px;
  font-weight: bold;
`;

const LogoOfApp = styled.div`
  font-size: 60px;
`;

const LinkBox = styled.div`
  display: flex;
  font-size: 20px;
  font-family: none;
`;

const Link2 = styled(Link)`
  color: orange;
  text-decoration: none;
  padding-left: 15px;
  font-weight: bold;
`;

const Picture = styled.img`
  height: 86%;
  width: 100vw;
  object-fit: cover;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid white;
  width: 500px;
  height: 540px;
  position: fixed;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 165, 0, 0.7);
  color: orange;
  border-radius: 10px;
`;

const Headlines = styled.h1`
  color: white;
  font-size: 50px;
`;

const Paragraph = styled.p`
  color: white;
  font-size: 30px;
  text-align: justify;
  padding-top: 35px;
  padding-left: 15px;
  padding-right: 15px;
`;

function Aboutus() {
  return (
    <AboutUsPage>
      <AboutUsHeader>
        <NameOfApp>
          <LogoOfApp>
            <CiBowlNoodles />
          </LogoOfApp>
          Bon Apetit
        </NameOfApp>
        <LinkBox>
          <Link2 to="/">Home</Link2>
          <Link2 to="/login">Login</Link2>
          <Link2 to="/recipepg">Recipes</Link2>
          <Link2 to="/aboutus">About us</Link2>
        </LinkBox>
      </AboutUsHeader>
      <Picture
        src="https://media.istockphoto.com/id/1441427708/photo/various-seasonings-and-spices-on-black-stone-plate.webp?b=1&s=170667a&w=0&k=20&c=bbThS14nH17NZStld9cO25VaBY5dLUEGySs0VdBtMn0="
        alt=""
      ></Picture>
      <Content>
        <Headlines>About Us</Headlines>
        <Paragraph>
          Bon Apetit is a recipe finder app which makes cooking easier by
          providing a wide range of recipes for different cuisines and dietary
          preferences.It also help users to discover new dishes, plan meals and
          even create shopping list based on the recipes they choose.it's all
          about making cooking fun and convenient. It aims to inspire creativity
          in kitchen by offering diverse recipes.
        </Paragraph>
      </Content>
    </AboutUsPage>
  );
}
export default Aboutus;
