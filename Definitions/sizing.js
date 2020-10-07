const CONSTANTS = require('../Scripts/constants.js');

/*        WIDTH CLASSES        */

let width = [];

width.push(
  {
    label:"w-0",
    detail:"width: 0;",
    documentation:"Set the element width to 0."
  },
  {
    label:"w-auto",
    detail:"width: auto;",
    documentation:"Let the browser calculate the width for the element."
  },
  {
    label:"w-px",
    detail:"width: 1px;",
    documentation:"Set the element to a fixed width of 1px."
  }  
);

for(i = 0; i < CONSTANTS.CLASS_REMS.length; i++) {
  width.push(
    {
      label:"w-" + CONSTANTS.CLASS_REMS[i].class,
      detail:"width: " + CONSTANTS.CLASS_REMS[i].value + "rem;",
      documentation:"Set the element to a fixed width of " + CONSTANTS.CLASS_REMS[i].value + "rem."
    }
  );
}

for(i = 0; i < CONSTANTS.CLASS_FRACTIONALS.length; i++) {
  width.push(
    {
      label:"w-" + CONSTANTS.CLASS_FRACTIONALS[i].class,
      detail:"width: " + CONSTANTS.CLASS_FRACTIONALS[i].value + "%;",
      documentation:"Set the element to a fluid width of " + CONSTANTS.CLASS_FRACTIONALS[i].value + "%."
    }
  );
}

width.push(
  {
    label:"w-full",
    detail:"width: 100%;",
    documentation:"Set the element width to 100%."
  },
  {
    label:"w-screen",
    detail:"width: 100vw;",
    documentation:"Set the element to span the entire width of the viewport."
  }
);

let classes = [];

classes = classes.concat(
 width
);

exports.classes = classes;