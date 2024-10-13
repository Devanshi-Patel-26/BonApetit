import styled from 'styled-components';

export const RecipeContainer = styled.div`
    display:flex;
    flex-direction:column;
    padding:10px;
    width:300px;
    box-shadow:0 3px 10px 0 #aaa;
    background:orange;`;

export const CoverImage = styled.img`
    height:200px
    object-fit:cover;`;

export const RecipeName = styled.span`
    font-size:18px;
    font-weight:bold;
    color:black;
    margin:10px 0;`;

export const IngredientsText = styled.span`
    font-size:18px;
    border:1px solid black;
    cursor:pointer;
    padding:10px 15px;
    border-radius:4px;
    color:black;
    text-align:center;
    margin-bottom:12px;`;

export const SeeMoretext = styled(IngredientsText)`
    color:black;
    border:1px solid black;`;

