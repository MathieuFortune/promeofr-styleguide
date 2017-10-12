import '../scss/imports.scss'

// If jQuery needed
// const $ = require("jquery");


function initMobileNavigation() {
  var menu = document.getElementById('main-nav'),
  toggler = document.getElementById('toggler'),
  body = document.body;

  toggler.addEventListener("click", function(e) {
    e.preventDefault();
    this.classList.toggle('active');
    menu.classList.toggle('open');
    body.classList.toggle('menu-open');
  });
}

function checkOffset() {
  var partnerBlock = document.querySelector('#partner-block');
  var footer = document.querySelector('#footer');

  function getRectTop(el){
    var rect = el.getBoundingClientRect();
    return rect.top;
  }

  if((getRectTop(partnerBlock) + document.body.scrollTop) + partnerBlock.offsetHeight >= (getRectTop(footer) + document.body.scrollTop) - 10)
    partnerBlock.style.position = 'static';
  if(document.body.scrollTop + window.innerHeight < (getRectTop(footer) + document.body.scrollTop))
    partnerBlock.style.position = 'fixed';
    partnerBlock.style.transform = 'translateY(0)';

  // partnerBlock.innerHTML = document.body.scrollTop + window.innerHeight;
}

var windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
if(windowWidth >= 480) {
  console.log('desktop')
  document.addEventListener("scroll", function(){
    checkOffset();
  });
}

window.onload = function(){
  initMobileNavigation();
};