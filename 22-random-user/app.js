//------------------------------------------------------
// Copyright (c) 2024. All rights reserved.
// Made with ♥ by Houssem Saiah.
//------------------------------------------------------

import get from './utils/getElement.js';
import getUser from './utils/fetchUser.js';
import displayUser from './utils/displayUser.js';

const btn = get('.btn');

const showUser = async () => {
  // get user from api
  const person = await getUser();
  displayUser(person);

  // display user
};

window.addEventListener('DOMContentLoaded', showUser);
btn.addEventListener('click', showUser);
