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
          console.log("grupos " + groups)
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
            return "online";
          } else {
            return "offline";
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
        }
    },
    data() {
        return {
            mainUserId: 1, //posição do usuario no array
            friendCardId: 0,

            //Declaração de usuários para teste
            users: [
                {
                id: 1,
                name: "Saymon Felipe",
                avatar: "img-user-test-1.jpg",
                is_online: true,
                status_text: "Jogando lol com a raposa mais linda de sempre!!!",
                friends: [2, 3, 4],
                age: 19,
                ranking_position: 682,
                groups: [1, 2, 3]
                },
                
                {
                id: 2,
                name: "Ana Clara",
                avatar: "girl1.png",
                is_online: true,
                status_text: "Escutando BlackPink e jogando lol, venha jogar comigo onii-san!!! 😍😍🎵",
                friends: [1, 3, 4],
                age: 19,
                ranking_position: 28,
                groups: [1, 2, 3]
                },
                
                {
                id: 3,
                name: "Cristina Gonçalves",
                avatar: "girl3.png",
                is_online: false,
                status_text: "",
                friends: [1, 2, 4],
                age: 17,
                ranking_position: 830,
                groups: [1, 3]
                },
                
                {
                id: 4,
                name: "Sofia Cavalcanti dos Santos",
                avatar: "girl4.jpg",
                is_online: true,
                status_text: "",
                friends: [1, 2, 3],
                age: 16,
                ranking_position: 227,
                groups: [3]
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