// Test import of a JavaScript function
import { toggleActive } from './js/accordion.js'

// Import of styles
import './styles/index.scss'

// Importing images
import illustrationBoxDesktop from './images/illustration-box-desktop.svg'
import illustrationWomanOnlineDesktop from './images/illustration-woman-online-desktop.svg'
import bgPatternDesktop from './images/bg-pattern-desktop.svg'
import iconArrowDown from './images/icon-arrow-down.svg'

// Appending images to the DOM
const box = document.createElement('img')
box.src = illustrationBoxDesktop

const womanOnline = document.createElement('img')
womanOnline.src = illustrationWomanOnlineDesktop

const bgPattern = document.createElement('img')
bgPattern.src = bgPatternDesktop

const boxDiv = document.getElementById('box')
const womanOnlineDiv = document.getElementById('woman-online')
const bgPatternDiv = document.getElementById('bg-pattern')
boxDiv.append(box);
womanOnlineDiv.append(womanOnline);
bgPatternDiv.append(bgPattern);

const divs = document.querySelectorAll('.arrow-down'); 
divs.forEach(div => {
  const iconImg = document.createElement('img');
  iconImg.src = iconArrowDown;
  div.append(iconImg);
});

// Init JS Functions
toggleActive();
