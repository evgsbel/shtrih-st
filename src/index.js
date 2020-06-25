// JS
import * as $ from 'jquery'
import 'slick-carousel/slick/slick.min'
import './js/app'

// SCSS
import 'normalize.css'
import './assets/scss/app.scss'
import './assets/scss/media.scss'


// svg sprite
function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(require.context('./assets/img/svg/', true, /\.svg$/));

fetch(`./assets/img/svg//sprite.svg`).then(res => {
  return res.text();
}).then(data => {
  document.getElementById('svg-icons').innerHTML = data;
});