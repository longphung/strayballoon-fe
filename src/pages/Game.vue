<script>
import { computed } from 'vue';

import ChooseYourCharacter from '../components/ChooseYourCharacter.vue';
import InGame from '../components/InGame.vue';
import ScorePage from '../components/ScorePage.vue';
import authGuard from '../mixins/authGuard';
import roleGuard from '../mixins/roleGuard';
import { baseWs } from '../features';
import { useToast } from 'vue-toastification';

export const GAME_STAGE = {
  CHOOSE_CHARACTER: 'ChooseYourCharacter',
  IN_GAME: 'InGame',
  SCORE_PAGE: 'ScorePage',
};

export default {
  name: 'GamePage',
  components: {
    ChooseYourCharacter,
    InGame,
    ScorePage,
  },
  mixins: [authGuard, roleGuard('students')],
  inject: ['userData'],
  provide() {
    return {
      session: computed(() => this.session),
      setSession: (newSession) => {
        this.session = newSession;
      },
    };
  },
  data() {
    return {
      // This will be replaced with data from the backend
      gameStage: GAME_STAGE.CHOOSE_CHARACTER,
      session: null,
      ws: null,
      toast: {},
    };
  },
  computed: {
    gamePageBackgroundClass() {
      switch (this.gameStage) {
        case GAME_STAGE.CHOOSE_CHARACTER:
          return 'choose-your-character';
        case GAME_STAGE.IN_GAME:
          return 'in-game';
        case GAME_STAGE.SCORE_PAGE:
          return 'score-page';
        default:
          return '';
      }
    },
  },
  created() {
    this.toast = useToast();
  },
  watch: {
    session(val, previousVal) {
      if (!val.sessionId) {
        return;
      }
      if (val.sessionId === previousVal.sessionId) {
        return;
      }
      if (previousVal.sessionId) {
        this.ws.close();
      }
      this.ws = new WebSocket(`${baseWs}/session/${val.sessionId}?token=${this.userData.token}`);
      this.ws.onmessage = (event) => {
        const { data: rawData } = event;
        try {
          const data = JSON.parse(rawData);
          switch (data.type) {
            case 'session_join':
              break;
            default:
              break;
          }
        } catch (e) {
          console.error(e);
        }
      };
      this.ws.onopen = () => {
        console.log(`You have joined session ${val.sessionId}`);
      };
    },
  },
  methods: {
    handleChangeStage(nextStage) {
      this.gameStage = nextStage;
    },
  },
};
</script>

<template>
  <section class="game-page" :class="gamePageBackgroundClass">
    <component :is="gameStage" @change-stage="handleChangeStage" />
  </section>
</template>

<style scoped>
.game-page {
  background: #f6f8ff;
  width: 100%;
  height: 47rem;
  display: grid;
  grid-template-rows: 1fr 5fr;
}

.choose-your-character {
  background-image: url('game-background.jpg');
  background-size: contain;
}

.in-game {
  background-image: url('in-game-background.png');
  background-size: contain;
}

.score-page {
  background-image: url('in-game-background.png');
  background-size: contain;
}
</style>
