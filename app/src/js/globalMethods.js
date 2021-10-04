import $ from 'jquery'
export const globalMethods = {
    methods: {
        //Função converte a posição no ranking em numero para classes
        findRankingPosition(rankingPosition, avatarBadge = 0) {
          if(rankingPosition > 0 && rankingPosition <= 100) {
            if (avatarBadge == 1) { return "rank-1-badge" }
            return "rank-1";
          } else if (rankingPosition > 100 && rankingPosition <= 300) {
            if (avatarBadge == 1) { return "rank-2-badge" }
            return "rank-2";
          } else if (rankingPosition > 300 && rankingPosition <= 600) {
            if (avatarBadge == 1) { return "rank-3-badge" }
            return "rank-3";
          } else if (rankingPosition > 600 && rankingPosition <= 1200) {
            if (avatarBadge == 1) { return "rank-4-badge" }
            return "rank-4";
          } else {
            if (avatarBadge == 1) { return "rank-5-badge" }
            return "rank-5";
          }
        },

        //Função testa se deve colocar cor preta na letra do badge
        testIfColorBlack(colorBadge, single = true) {
            if (colorBadge == "label-ranking-interaction rank-2-badge" || colorBadge == "label-ranking-interaction rank-3-badge") {
              if (single) { return "var(--gray-low)" }
              return "textBlack";
            } 
            return;
        },

        //Função procura o usuário desejado no array
        findUser(userId) {
            for (let i in this.users) {
                if (this.users[i].id == userId){
                    return this.users[i];
                }
            }
        },
        findGroup(groupId) {
          for (let i in this.groups) {
            if (this.groups[i].id == groupId){
                return this.groups[i];
            }
          }
        },
        findGroupOwner(userId) {
          var groupsOwner = new Array();
          for (let i in this.groups) {
            if (this.groups[i].owner == userId){
              groupsOwner.push(this.groups[i].id);
            }
          }
          return groupsOwner;
        },
        findGroupIparticipate(userId) {
          var groups = this.findUser(userId).groups;
          return groups;
        },
        formatRankingPosition(rankingPosition) {
            return "#" + rankingPosition + " em interação";
        },
        requireImage(id) {
          return require('../assets/img/test/' + this.findUser(id).avatar);
        },
        requireGroupImage(id) {
          return require('../assets/img/test/' + this.findGroup(id).avatar);
        },
        findName(id) {
          var userName = this.findUser(id).name;
          return userName;
        },
        findGroupName(id) {
          var groupName = this.findGroup(id).name;
          return groupName;
        },
        getGroupMembers(groupId) {
          var selectedGroup = this.findGroup(groupId);
          return selectedGroup.members;
        },
        getLenghtGroupMembers(groupId) {
          var selectedGroup = this.findGroup(groupId).members;
          var arrayMembers = [];
          for (let i in selectedGroup) {
            arrayMembers.push(selectedGroup[i]);
          }
          return arrayMembers.length;
        },
        checkLockedGroup(groupId, icon = 0) {
          var isPublic = this.findGroup(groupId).is_public;
          if (isPublic) {
            if (icon == 1) {
              return "fa-lock-open"
            }
            return "opened-room"
          }
          if (icon == 1) {
            return "fa-lock"
          }
          return "closed-room"
        },
        //Testa se o usuário está online
        userIsOnline(id) {
          if (this.findUser(id).is_online) {
            return " online";
          } else {
            return " offline";
          }
        },
        getStatusText(id) {
          var userStatus = this.findUser(id).status_text;
          return userStatus;
        },
        findAge(id) {
          var age = this.findUser(id).age;
          return age + " anos.";
        },
        timeLastMessage() {
          var timeLastMessage = "Há 1 hora"; //Valor virá da api
          return timeLastMessage;
        },
        goToUserProfile(userId) {
          window.location = "/profile/" + userId
        },
        enableInput(element) {
          $(element).removeAttr("disabled");
          $(element).attr("required", "required");
        },
        disableInput(element) {
          $(element).removeAttr("required");
          $(element).attr("disabled", "disabled");
        },
        formatTel(tel) {
          var remainingTel = "";
          var arrayTel = tel.toString().split('');
          var formatedTel1 = `(${arrayTel[0]}${arrayTel[1]}) ${arrayTel[2]} `
          arrayTel.splice(0, 3);
          for (let i in arrayTel) {
            remainingTel += arrayTel[i];
            if (i == 3) {
              remainingTel += "-";
            }
          }
          var formatedTel2 = formatedTel1 + remainingTel; 
          return formatedTel2;
        },
        getMutualFriends(mainUserId, friendId) {
          var mainUser = this.findUser(mainUserId);
          var friend = this.findUser(friendId);
          var mutualFriends = [];
          for (let i in mainUser.friends) {
            for (let j in friend.friends) {
              if (friend.friends[j] == mainUser.friends[i]) {
                mutualFriends.push(friend.friends[j]);
              }
            }
          }
          return mutualFriends;
        },
        returnFormatedDate(date) {
          var arrayDate = date.split("-");
          var formatedDate = `${arrayDate[2]}/${arrayDate[1]}/${arrayDate[0]}`
          return formatedDate;
        },
        returnRelationship(id) {
          var user = this.findUser(id);
          var relationship = user.relationship;
          var gender = user.gender;
          var genderControl = '';
          if (gender == "f") {
            genderControl = "a";
          } else {
            genderControl = "o";
          }
          if (relationship == "alone") {
            return "Solteir" + genderControl;
          } else if (relationship == "loving") {
            var partnerName = this.findName(user.partner);
            return "Em um relacionamento com " + partnerName ;
          }
        },
        formatTime(hour, minute, second) {
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
        },
        calcTime(element, timeRange) {
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
            this.totalSeconds += 1;
            if (this.totalSeconds >= timeRange) {
              clearInterval(timerAudio);
              this.totalSeconds = 0;
            }
            $(element).html(this.formatTime(hour, minute, second));
          }, 1000);
        },
        initiateConferenceTimer(){
          $(".time-duration-container").show();
          if (this.totalSeconds == 0) {
            this.calcTime(".time-duration", 18000);
          }

          //Fechar o chat
          $(".chat-box").hide();
          var windowWidth = $(window).width();
          if (windowWidth <= 850) {
            this.closeChat();
          }
        },
        closeChat() {
          $('.chat').css("transform", "translateX(100vw)");
          this.hasOpened = 0;
          $(".overlayChat").hide();
        }
    },
    data() {
        return {
            mainUserId: 1, //posição do usuario no array
            friendCardId: 0,
            totalSeconds: 0,

            //Declaração de usuários para teste
            users: [
                {
                id: 1,
                name: "Saymon Felipe",
                gender: "m",
                avatar: "img-user-test-1.jpg",
                nickname: "saymonf",
                email: "linnubr@gmail.com",
                tel: 41996352536,
                birthday: "2001-14-09",
                relationship: "loving",
                partner: "2",
                allow_private_tel: true,
                only_friends: false,
                is_online: true,
                status_text: "Jogando lol com a raposa mais linda de sempre!!!",
                friends: [2, 3],
                schooling: "Estudou",
                from: "Curitiba",
                live: "São João do Ivaí",
                institution: "Arthur de Azevedo",
                age: 19,
                ranking_position: 682,
                groups: [1, 2, 3],
                blocked_users: [4]
                },
                
                {
                id: 2,
                name: "Ana Clara",
                gender: "f",
                nickname: "aninha",
                email: "aninha2004@gmail.com",
                tel: 41987005329,
                birthday: "2004-12-22",
                relationship: "loving",
                partner: "1",
                allow_private_tel: false,
                only_friends: true,
                avatar: "girl1.png",
                is_online: true,
                status_text: "Escutando BlackPink e jogando lol, venha jogar comigo onii-san!!! 😍😍🎵",
                friends: [1, 3, 4],
                schooling: "Estuda",
                institution: "Colégio Zardo",
                from: "Curitiba",
                live: "Curitiba",
                age: 19,
                ranking_position: 28,
                groups: [1, 2, 3],
                blocked_users: [4]
                },
                
                {
                id: 3,
                name: "Cristina Gonçalves",
                gender: "f",
                nickname: "curisutina",
                email: "crisrainhadeles@gmail.com",
                tel: 42998541872,
                birthday: "2006-02-03",
                relationship: "alone",
                partner: "",
                allow_private_tel: false,
                only_friends: true,
                avatar: "girl3.png",
                is_online: false,
                status_text: "",
                friends: [1, 2, 4],
                schooling: "Estudou",
                institution: "Colégio Zardo",
                from: "Curitiba",
                live: "Curitiba",
                age: 17,
                ranking_position: 830,
                groups: [1, 3],
                blocked_users: []
                },
                
                {
                id: 4,
                name: "Sofia Cavalcanti dos Santos",
                gender: "f",
                nickname: "sofih",
                email: "sofiacs@hotmail.com",
                tel: 44986593112,
                birthday: "2003-08-09",
                relationship: "alone",
                partner: "",
                avatar: "girl4.jpg",
                allow_private_tel: true,
                only_friends: false,
                is_online: true,
                status_text: "",
                friends: [1, 2, 3],
                schooling: "Estuda",
                institution: "Colégio Zardo",
                from: "Curitiba",
                live: "Curitiba",
                age: 16,
                ranking_position: 227,
                groups: [3],
                blocked_users: []
                }
            ],

            //Declaração de grupos para teste
            groups: [
              {
                id: 1,
                name: "Ahri Lovers",
                description: "Grupo para contemplação da rainha Ahri",
                avatar: "ahri13.jpg",
                is_public: true,
                members: [1, 2, 3],
                owner: 1
              },
              {
                id: 2,
                name: "Mono Ahri",
                description: "Só os mono Ahri",
                avatar: "ahri9.jpg",
                is_public: false,
                members: [1, 2],
                owner: 1
              },
              {
                id: 3,
                name: "Plastic Memories Fan Club",
                description: "Fan club oficial de Plastic Memories",
                avatar: "plastic-memories.jpg",
                is_public: true,
                members: [1, 2, 3, 4],
                owner: 2
              }
            ]
        }
    }
}