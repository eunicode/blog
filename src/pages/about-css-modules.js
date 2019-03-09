/* Gatsby Tutorial 2: Introduction to Styling in Gatsby
https://www.gatsbyjs.org/tutorial/part-two/ */

import React from "react";

import styles from "./about-css-modules.module.css";

// Import component
import Container from "../components/container";

/* -------------------------------------------------------------------------- */

// See the result of your processed `./about-css-modules.module.css` file.
// You'll see the unique class names CSS Modules generated.
console.log(styles);

/* -------------------------------------------------------------------------- */

/* COMPONENTS OVERVIEW

Default export is a `Container` with `User`'s inside. 

`Container` is imported.
In `container.js`, `container.module.css` is imported.

We define `User` inline, bc we'll only use it on this page.
`User` uses imported style sheet `about-css-modules.module.css`.

*/

/* -------------------------------------------------------------------------- */

// USER COMPONENT
// Use imported styles like so: className={styles.header--link}
const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

/* -------------------------------------------------------------------------- */

// HIGHER-ORDER COMPONENT
// Default export

export default () => (
  <Container>
    <h1>About CSS Modules</h1>
    <p>CSS Modules are cool</p>
    <User
      username="Jane Doe"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <User
      username="Bob Smith"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
      excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
  </Container>
);

/*
Tip: Generally, if you use a component in multiple places on a site, it should be in its own module file in the components directory. 
But, if it’s used only in one file, create it inline.
*/