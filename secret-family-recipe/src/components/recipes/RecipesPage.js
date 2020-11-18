import React from 'react'
import './RecipesPage.css'

const RecipesPage = () => {
    return (
        <div className='page-container'>
            <h2 className='title'>Creamy Mac 'n' Cheese</h2>
            <div className='recipe-wrapper'>
                <div className='ingredients'>
                    <h2>Ingridients:</h2>
                    <p>4 tbsp. butter</p>
                    <p>1/4 c. all-purpose flour</p>
                    <p>2 1/2 c. whole milk</p>
                    <p>2 clove garlic</p>
                    <p>12 oz. Cheddar cheese</p>
                    <p>8 oz. pasteurized cheese product or yellow American cheese</p>
                    <p>1 lb. elbow macaroni</p>
                </div>
                <div className='directions'>
                    <h2>Directions:</h2>
                    <p>1. Heat medium saucepot of salted water to boiling on high.</p>
                    <p>2. In large saucepot, melt butter on medium heat. Sprinkle flour over melted butter. Cook 1 minute or until well combined, stirring constantly with wooden spoon. Reduce heat to medium-low. While whisking, slowly drizzle milk into pot. Add garlic and 1/2 teaspoon salt. Heat sauce to simmering on medium, whisking and scraping pot. Simmer 1 minute or until thickened, whisking constantly.</p>
                </div>
            </div>
        </div>
    )
}

export default RecipesPage
