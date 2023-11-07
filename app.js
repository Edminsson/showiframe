// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Iframe och window.open</h1>`;

const skapaIframe = document.getElementById('skapa-iframe');
const openWindow = document.getElementById('open-window');
const closeWindow = document.getElementById('close-window');
let embeddedWindow;

skapaIframe.addEventListener('click', () => {
  console.log('iframe');
  const iframe = document.createElement('iframe');
  iframe.src = 'https://rad-choux-97d2d8.netlify.app/';
  iframe.style.width = '300px';
  iframe.style.height = '200px';
  document.body.appendChild(iframe);
});

openWindow.addEventListener('click', () => {
  console.log('window.open');
  embeddedWindow = window.open(
    "https://rad-choux-97d2d8.netlify.app/",
    "_blank",
    "width=300,height=200,resizable=no,scrollbars=no,left=300,top=150"
  );  
});

closeWindow.addEventListener('click', () => {
  embeddedWindow.close();
});
