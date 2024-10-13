import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import { IoSearch } from "react-icons/io5";
import { CiBowlNoodles } from "react-icons/ci";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import {
  Container,
  Header,
  AppNameComponent,
  AppIcon,
  SearchComponent,
  SearchIcon,
  SearchInput,
  LinkComponent,
  Link1,
} from "./Recipepgheader";
import {
  RecipeContainer,
  CoverImage,
  RecipeName,
  IngredientsText,
  SeeMoretext,
} from "./Recipepgrecipe";

const APP_ID = "d19a3aca";
const APP_KEY = "88dd20a41a3e5cfa9f5127bb24f97350";

const RecipeListcontainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 1500px;
  width: 1520px;
  padding: 30px;
  gap: 20px;
  justify-content: space-evenly;
  background: url("https://media.istockphoto.com/id/1441427708/photo/various-seasonings-and-spices-on-black-stone-plate.webp?b=1&s=170667a&w=0&k=20&c=bbThS14nH17NZStld9cO25VaBY5dLUEGySs0VdBtMn0=");
  background-size: cover;
  background-attachment: fixed;
`;

const Placeholder = styled.div`
  font-size: 70px;
  color: white;
  opacity: 0.5;
  margin: 200px;
  position: fixed;
`;

const Recipepgrecipe = (props) => {
  const [show, setShow] = React.useState(false);

  const { recipeObj } = props;
  return (
    <>
      <Dialog open={show}>
        <DialogContent>
          <table>
            <thead>
              <th>Ingredients</th>
            </thead>
            <tbody>
              {recipeObj.ingredients.map((ingredientObj) => (
                <tr>
                  <td>{ingredientObj.text}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <IngredientsText onClick={() => window.open(recipeObj.url)}>
            See More
          </IngredientsText>
          <SeeMoretext onClick={() => setShow("")}>Close</SeeMoretext>
        </DialogActions>
      </Dialog>
      <RecipeContainer>
        <CoverImage src={recipeObj.image} alt="" />
        <RecipeName>{recipeObj.label}</RecipeName>
        <IngredientsText onClick={() => setShow(true)}>
          Ingredients
        </IngredientsText>
        <SeeMoretext onClick={() => window.open(recipeObj.url)}>
          See Complete Recipe
        </SeeMoretext>
      </RecipeContainer>
    </>
  );
};

function Recipepg() {
  const [timeoutId, updatetimeoutId] = useState();

  const [recipeList, updaterecipeList] = useState([]);

  const fetchRecipe = async (searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    updaterecipeList(response.data.hits);
  };

  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => fetchRecipe(event.target.value), 500);
    updatetimeoutId(timeout);
  };

  return (
    <Container>
      <Header>
        <AppNameComponent>
          <AppIcon>
            <CiBowlNoodles />
          </AppIcon>
          Bon Apetit
        </AppNameComponent>
        <SearchComponent>
          <SearchIcon>
            <IoSearch />
          </SearchIcon>
          <SearchInput placeholder="Search Recipes" onChange={onTextChange} />
        </SearchComponent>
        <LinkComponent>
          <Link1 to="/">Home</Link1>
          <Link1 to="/login">Login</Link1>
          <Link1 to="/recipepg">Recipes</Link1>
          <Link1 to="/aboutus">About us</Link1>
        </LinkComponent>
      </Header>
      <RecipeListcontainer>
        {recipeList.length ? (
          recipeList.map((recipeObj) => (
            <Recipepgrecipe recipeObj={recipeObj.recipe} />
          ))
        ) : (
          <Placeholder>
            <CiBowlNoodles />
          </Placeholder>
        )}
      </RecipeListcontainer>
    </Container>
  );
}
export default Recipepg;
