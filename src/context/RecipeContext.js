
import React, { useState, createContext } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth'

export const RecipeContext = createContext();

export const RecipeProvider = (props) => {
    const [recipes, setRecipes] = useState([]);

    const getRecipes = () => {
        axiosWithAuth()
            .get('/recipes')
            .then((res) => {
                setRecipes(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <RecipeContext.Provider value={[recipes, setRecipes]}>
            {props.children}
        </RecipeContext.Provider>
    );

}