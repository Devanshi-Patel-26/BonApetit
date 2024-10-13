import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  color: white;
  background-color: orange;
  display: flex;
  flex-direction: row;
  width: 1520px;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  box-shadow: 0 3px 6px 0 #555;
`;

export const AppNameComponent = styled.div`
  display: flex;
  align-items: center;
  font-family: "Lucida Handwriting", cursive;
  font-size: 35px;
  font-weight: bold;
`;

export const AppIcon = styled.div`
  font-size: 60px;
`;

export const SearchComponent = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 10px;
  border-radius: 6px;
  width: 700px;
  position: absolute;
  left: 400px;
`;

export const SearchIcon = styled.div`
  color: black;
  font-size: 20px;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  margin-left: 15px;
  font-size: 18px;
  font-weight: bold;
`;

export const LinkComponent = styled.div`
  display: flex;
  font-size: 20px;
  font-family: none;
`;

export const Link1 = styled(Link)`
  color: white;
  text-decoration: none;
  padding-left: 15px;
  font-weight:bold;
`;
