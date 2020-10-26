// Test import of a JavaScript function
import {example} from './js/example'

// Import of styles
import './styles/index.scss'

// Importing images
import illustrationBoxDesktop from './images/illustration-box-desktop.svg'
import illustrationWomanOnlineDesktop from './images/illustration-woman-online-desktop.svg'
import bgPatternDesktop from './images/bg-pattern-desktop.svg'
import iconArrowDown from './images/icon-arrow-down.svg'

// Appending to the DOM
const box = document.createElement('img')
box.src = illustrationBoxDesktop

const womanOnline = document.createElement('img')
womanOnline.src = illustrationWomanOnlineDesktop

const bgPattern = document.createElement('img')
bgPattern.src = bgPatternDesktop

const arrowDown = document.createElement('img')
arrowDown.src = iconArrowDown

const boxDiv = document.getElementById('box')
const womanOnlineDiv = document.getElementById('woman-online')
const bgPatternDiv = document.getElementById('bg-pattern')
const arrowDownDiv = document.querySelectorAll('.arrow-down')
console.log(arrowDownDiv);
boxDiv.append(box);
womanOnlineDiv.append(womanOnline);
bgPatternDiv.append(bgPattern);
arrowDownDiv.forEach(arrowDiv => arrowDiv.append(arrowDown));

// Init JS Functions
example();
