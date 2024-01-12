//------------------------------------------------------
// Copyright (c) 2024. All rights reserved.
// Made with ♥ by Houssem Saiah.
//------------------------------------------------------

const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error('no element selected');
};

export default getElement;
