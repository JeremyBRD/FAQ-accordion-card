// Test import of a JavaScript function
import {example} from './js/example'

// Import of styles
import './styles/index.scss'

// Importing images
import illustrationBoxDesktop from './images/illustration-box-desktop.svg'
import illustrationWomanOnlineDesktop from './images/illustration-woman-online-desktop.svg'

// Appending to the DOM
const box = document.createElement('img')
box.src = illustrationBoxDesktop

const womanOnline = document.createElement('img')
womanOnline.src = illustrationWomanOnlineDesktop

const boxDiv = document.querySelector('#box')
const womanOnlineDiv = document.querySelector('#woman-online')

boxDiv.append(box)
womanOnlineDiv.append(womanOnline)

// Init JS Functions
example();
