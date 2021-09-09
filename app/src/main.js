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


//Função para contagem progressiva do audio
$(".microphone-icon").on("click", () => {
  $(".microphone-icon").hide();
  $(".container-audio-record").show();
  $("#send-message").attr("placeholder", "");
  let second = 0;
  let minute = 0;
  let totalSeconds = 0;
  $(".timer-audio").html("00:00");
  let timerAudio = setInterval(() => {
    second += 1;
    if (second == 60) {
      minute += 1;
      second = 0;
    }
    totalSeconds += 1;
    if (totalSeconds >= 5940) {
      clearInterval(timerAudio);
    }
    console.log("esta entrando")
    $(".timer-audio").html(formatTime(minute, second));
  }, 1000);

  //Skip do audio
  $(".skip-audio").on("click", () => {
    $(".container-audio-record").hide();
    totalSeconds = 5940;
    $(".microphone-icon").show();
  });
});

function formatTime(minute, second) {
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
  return formatedMinute + ":" + formatedSecond;
}


//Declaração de usuários para teste
var user001 = {
  id: 1,
  name: "Saymon Felipe",
  avatar: "../assets/img/test/img-user-test-1.jpg",
  is_online: true,
  status_text: "Jogando lol com a raposa mais linda de sempre!!!",
  friends: [2, 3, 4],
  age: 19,
  ranking_position: 682
}

var user002 = {
  id: 2,
  name: "Ana Clara",
  avatar: "assets/img/test/girl1.png",
  is_online: true,
  status_text: "Escutando BlackPink e jogando lol, venha jogar comigo onii-san!!! 😍😍🎵",
  friends: [1, 3, 4],
  age: 19,
  ranking_position: 28
}

var user003 = {
  id: 3,
  name: "Cristina Gonçalves",
  avatar: "assets/img/test/girl3.png",
  is_online: false,
  status_text: "",
  friends: [1, 2, 4],
  age: 17,
  ranking_position: 830
}

var user004 = {
  id: 4,
  name: "Sofia Cavalcanti dos Santos",
  avatar: "assets/img/test/girl4.png",
  is_online: true,
  status_text: "",
  friends: [1, 2, 3],
  age: 16,
  ranking_position: 327
}


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

//Funções para home user
setInterval(() => {
  //Aplica a data atual a todas as divs com classe "today" a cada 1 s
  $(".today").html(formatedDate);

  var arrayRankingReturnedSelf = findRankingPosition(user001.ranking_position);

  //Coloca a letra preta nos badges conforme cor do background
  $(".home-user-text .label-ranking-interaction").css("color", testIfColorBlack(arrayRankingReturnedSelf[1]));

  //Inserção dinâmica do nome do usuário (usuário)
  $(".user-name").html(user001.name);

  //Adiciona cor na badge do próprio usuário
  $(".home-user-text .label-ranking-interaction").addClass(arrayRankingReturnedSelf[1]);

  //Encontrar a posição on ranking
  getUserRankingPosition();

  $(".avatar-g").addClass(arrayRankingReturnedSelf[0]); //usuário atual virá da api

}, 1000);


//Função converte a posição no ranking em numero para classes
function findRankingPosition(rankingPosition) {
  if(rankingPosition > 0 && rankingPosition <= 100) {
    return ["rank-1", "rank-1-badge"];
  } else if (rankingPosition > 100 && rankingPosition <= 300) {
    return ["rank-2", "rank-2-badge"];
  } else if (rankingPosition > 300 && rankingPosition <= 600) {
    return ["rank-3", "rank-3-badge"];
  } else if (rankingPosition > 600 && rankingPosition <= 1200) {
    return ["rank-4", "rank-4-badge"];
  } else {
    return ["rank-5", "rank-5-badge"];
  }
}

//Função testa se deve colocar cor preta na letra do badge
function testIfColorBlack(colorBadge) {
  if (colorBadge == "rank-2-badge" || colorBadge == "rank-3-badge") {
    return "var(--gray-low)"
  }
}

//Função coloca foto de perfil do usuário
/*setInterval(() => {
  if ($(".img-user").length) {
    console.log(document.querySelector(".img-user"))
    document.querySelector(".img-user").src = user001.avatar;
  }
}, 1000);*/

//Recupera a posição no ranking de interação do usuário a cada 1 segundo
function getUserRankingPosition() {
  var currentRankingPosition = $(".user-card .label-ranking-interaction h6").html();
  var formatedRankingPosition = "#" + user001.ranking_position + " <span>em interação</span>";
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
  var formatedRankingPosition = "#" + user002.ranking_position + " <span>em interação</span>";
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
    var arrayRankingReturnedFriend = findRankingPosition(user002.ranking_position);
    $("#user-001 .avatar-p").addClass(arrayRankingReturnedFriend[0]); //usuário atual virá da api

    //Adiciona cor do badge dos amigos
    $("#user-001 .label-ranking-interaction").addClass(arrayRankingReturnedFriend[1]);

    //Coloca a letra preta nos badges conforme cor do background
    //Amigo
    $(".user-card .label-ranking-interaction").css("color", testIfColorBlack(arrayRankingReturnedFriend[1]));
  
    //Inserção dinâmica do nome do usuário (amigo)
    $(".user-name-others").html(user002.name);
  }

  if ($(".chat").length) {
    var lastMessage = "Então dai você vem na minha casa pra gente poder estudar aquela questão lá"; //Pensar na lógica que irá retornar as mensagens
    //Exibir status
    $(".user-status").html(user002.status_text);

    //Última mensagem
    $(".last-message").html(lastMessage);

    //Exibir o tempo da última mensagem
    var timeLastMessage = "Há 1 hora"; //Valor virá da api
    $(".time-last-message").html(timeLastMessage);

    //Exibe a idade do usuário
    var userIdade = user002.age + " anos"; //Idade virá da api
    $(".user-idade").html(userIdade);
}}
executeChat();
setInterval(executeChat, 1000);

//Função para o feed
function executePublications() {
  if ($(".publications").length) {

    //Retorna o contorno do avatar do user do comentario
    var arrayRankingReturnedFriend2 = findRankingPosition(user003.ranking_position);
    $("#user-002 .avatar-pp").addClass(arrayRankingReturnedFriend2[0]); //usuário atual virá da api
  
    //Retorna o nome do user do comentario
    $("#user-002 .user-name-comment").html(user003.name);

    //Retorna o contorno do avatar do user do comentario
    var arrayRankingReturnedFriend3 = findRankingPosition(user004.ranking_position);
    $("#user-003 .avatar-pp").addClass(arrayRankingReturnedFriend3[0]); //usuário atual virá da api

    //Retorna o nome do user do comentario resposta
    $("#user-003 .user-name-comment").html(user004.name);
  
  }
}

setInterval(executePublications, 1000);


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



