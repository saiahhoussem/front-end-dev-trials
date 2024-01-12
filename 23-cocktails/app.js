//------------------------------------------------------
// Copyright (c) 2024. All rights reserved.
// Made with ♥ by Houssem Saiah.
//------------------------------------------------------

import presentDrinks from './src/presentDrinks.js';
import './src/searchForm.js';
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

window.addEventListener('DOMContentLoaded', () => {
  presentDrinks(URL);
});
