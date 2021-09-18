import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery'
import router from '../src/routes/router.js';
//import { setInterval } from 'core-js';

Vue.config.productionTip = false
Vue.prototype.$hasOpened



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


/*var totalSeconds = 0;
function calcTime(element, timeRange) {
  let second = 0;
  let minute = 0;
  let hour = 0;
  let timerAudio = setInterval(() => {
    second += 1;
    if (second == 60) {
      minute += 1;
      second = 0;
    }
    if (minute == 60) {
      minute = 0;
      hour += 1;
    }
    totalSeconds += 1;
    if (totalSeconds >= timeRange) {
      clearInterval(timerAudio);
      totalSeconds = 0;
    }
    $(".time-duration-container").show();
    $(element).html(formatTime(hour, minute, second));
  }, 1000);
}

//Função para contagem progressiva do audio
$(".microphone-icon").on("click", () => {
  $(".microphone-icon").hide();
  $(".container-audio-record").show();
  $("#send-message").attr("placeholder", "");
  $(".timer-audio").html("00:00");
  calcTime(".timer-audio", 5490);

  //Skip do audio
  $(".skip-audio").on("click", () => {
    $(".container-audio-record").hide();
    totalSeconds = 5490;
    $(".microphone-icon").show();
  });
});

$(".video-meeting").on("click", () => {
  $(".time-duration-container").show();
  console.log("entrou")
  if (totalSeconds == 0) {
    calcTime(".time-duration", 18000);
  }
});

$(".end-meeting").on("click", () => {
  totalSeconds = 18000;
  setTimeout(() => {
    $(".time-duration-container").hide();
  });
});
*/
/*function formatTime(hour, minute, second) {
  let formatedSecond;
  let formatedMinute;
  if (second < 10) {
    formatedSecond = "0" + second;
  } else {
    formatedSecond = second;
  }
  if (minute < 10) {
    formatedMinute = "0" + minute;
  } else {
    formatedMinute = minute;
  }
  if (!hour == 0) {
    return hour + ":" + formatedMinute + ":" + formatedSecond;
  } else {
    return formatedMinute + ":" + formatedSecond;
  }
}*/






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

//$(".label-ranking-interation").css("color", testIfColorBlack(findRankingPosition(this.users[3].ranking_position, 1)))

//var arrayRankingReturnedSelf = findRankingPosition(users.user001.ranking_position);

/*
//Funções para home user
setInterval(() => {
  //Aplica a data atual a todas as divs com classe "today" a cada 1 s
  
  

  //Coloca a letra preta nos badges conforme cor do background
  $(".home-user-text .label-ranking-interaction").css("color", testIfColorBlack(arrayRankingReturnedSelf[1]));

  //Inserção dinâmica do nome do usuário (usuário)
  $(".user-name").html(users.user001.name);

  //Adiciona cor na badge do próprio usuário
  $(".home-user-text .label-ranking-interaction").addClass(arrayRankingReturnedSelf[1]);

  $(".home-user-text .label-ranking-interaction h6").html(formatedRankingPosition);

  //Encontrar a posição on ranking
  getUserRankingPosition();

  $(".avatar-g").addClass(arrayRankingReturnedSelf[0]); //usuário atual virá da api

}, 1000);
*/
/*






//Recupera a posição no ranking de interação do usuário a cada 1 segundo
function getUserRankingPosition() {
  var currentRankingPosition = $(".user-card .label-ranking-interaction h6").html();
  var formatedRankingPosition = "#" + users.user001.ranking_position + " <span>em interação</span>";
  if (formatedRankingPosition == currentRankingPosition) {
    return;
  } else {
    $(".home-user-text .label-ranking-interaction h6").html(formatedRankingPosition);
  }
  setTimeout(getUserRankingPosition, 1000);
}

//Recupera a posição no ranking de interação do amigo a cada 1 segundo
function getFriendRankingPosition() {
  var currentRankingPosition = $(".user-card .label-ranking-interaction h6").html();
  var formatedRankingPosition = "#" + users.user002.ranking_position + " <span>em interação</span>";
  if (formatedRankingPosition == currentRankingPosition) {
    return;
  } else {
    $(".user-card .label-ranking-interaction h6").html(formatedRankingPosition);
  }
  setTimeout(getFriendRankingPosition, 8000);
}

getFriendRankingPosition();

//Funções para funcionarem dentro do chat
function executeChat() {

  //Testa se o usuário está online
  if (user002.is_online) {
    if (document.querySelector(".onlineOffline").classList == ".onlineOffline offline") {
      $(".onlineOffline").removeClass("offline");
      $(".onlineOffline").addClass("online");
    } else {
      $(".onlineOffline").addClass("online");
    }
  } else {
    if (document.querySelector(".onlineOffline").classList == ".onlineOffline online") {
      $(".onlineOffline").removeClass("online");
      $(".onlineOffline").addClass("offline");
    } else {
      $(".onlineOffline").addClass("offline");
    }
  }

  //Colocar cor do avatar e do badge conforme o ranking de interação
  if ($(document).length) {
    var arrayRankingReturnedFriend = findRankingPosition(users.user002.ranking_position);
    $("#user-001 .avatar-p").addClass(arrayRankingReturnedFriend[0]); //usuário atual virá da api

    //Adiciona cor do badge dos amigos
    $("#user-001 .label-ranking-interaction").addClass(arrayRankingReturnedFriend[1]);

    //Coloca a letra preta nos badges conforme cor do background
    //Amigo
    $(".user-card .label-ranking-interaction").css("color", testIfColorBlack(arrayRankingReturnedFriend[1]));
  
    //Inserção dinâmica do nome do usuário (amigo)
    $(".user-name-others").html(users.user002.name);
  }

  if ($(".chat").length) {
    var lastMessage = "Então dai você vem na minha casa pra gente poder estudar aquela questão lá"; //Pensar na lógica que irá retornar as mensagens
    //Exibir status
    $(".user-status").html(users.user002.status_text);

    //Última mensagem
    $(".last-message").html(lastMessage);

    //Exibir o tempo da última mensagem
    var timeLastMessage = "Há 1 hora"; //Valor virá da api
    $(".time-last-message").html(timeLastMessage);

    
}}
executeChat();
setInterval(executeChat, 1000);


*/

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
var scrollPosition = localStorage.getItem('posicaoScroll');

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
