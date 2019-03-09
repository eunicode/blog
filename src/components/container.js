/* Gatsby Tutorial 2: Introduction to Styling in Gatsby
https://www.gatsbyjs.org/tutorial/part-two/ */

// This component gets imported into the page `about-css-modules.js`

import React from "react";

// Default import
import containerStyles from "./container.module.css";

export default ({ children }) => (
  <div className={containerStyles.container}>
    {children}
  </div>
)