import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery'
import router from '../src/routes/router.js';
import { setInterval } from 'core-js';

Vue.config.productionTip = false
Vue.prototype.$hasOpened

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

//Encontra a data local
var today = new Date();
function findMonth(month) {
  switch(month) {
    case 1: return "Janeiro";
    case 2: return "Fevereiro";
    case 3: return "Março";
    case 4: return "Abril";
    case 5: return "Maio";
    case 6: return "Junho";
    case 7: return "Julho";
    case 8: return "Agosto";
    case 9: return "Setembro";
    case 10: return "Outubro";
    case 11: return "Novembro";
    case 12: return "Dezembro";
  }
}

var formatedDate = ((today.getDate() )) + " de " + (findMonth(today.getMonth())) + " de " + today.getFullYear();
$(".today").html(formatedDate);

$(document).on("click", e => {

  //Resetar textarea de nova publicação quando clicar fora da div
  var target = $(e.target);
  if(!target.closest('.new-publication-text').length && $('.new-publication-text').is(":visible")) {
    $("#write-publication").css("height", "38.78px");
    $("#write-publication").attr("rows", 1);
    $("#publish").hide();
  }  

  //Resetar moreoptions de video e audio quando clicar fora da div
  if(!target.closest('.meeting-controls').length && $('.meeting-controls').is(":visible")) {
    $(".more-options-container").removeClass("d-flex");
    $(".more-options-container").addClass("d-none");
  }  

  //Resetar div de notificações quando clica fora
  if(!target.closest('.notifications').length && !target.closest('.notifications-components').length && $('.notifications-component').is(":visible")) {
    $(".notifications-component").removeClass("d-block");
    $(".notifications-component").addClass("d-none");
  } 
});

//Preservar o scroll atual da pagina
var scrollPosition = localStorage.getItem('scrollPosition');

// Se existir uma opção salva seta o scroll nela
if(scrollPosition) {
    setTimeout(function() {
        window.scrollTo(0, scrollPosition);
    }, 1);
}

// Verifica mudanças no Scroll e salva no localStorage a posição
setInterval(() => {
  document.querySelector(".inner-container").onscroll = () => {
    scrollPosition = window.scrollY;
    localStorage.setItem('scrollPosition', JSON.stringify(scrollPosition));
  }
}, 1);
