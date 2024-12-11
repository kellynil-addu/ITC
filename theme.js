/*
theme.js
Determines the css color palette to be used before loading the page.
*/

let theme = "color-light.css"

// append the css file
const link_el = document.createElement("link")
link_el.href = theme
link_el.rel = "stylesheet"
document.head.appendChild(link_el)
