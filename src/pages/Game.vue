<script>
import ChooseYourCharacter from '../components/ChooseYourCharacter.vue';
import InGame from '../components/InGame.vue';
import ScorePage from '../components/ScorePage.vue';

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
  data() {
    return {
      //       This will replaced with data from the backend
      gameStage: GAME_STAGE.CHOOSE_CHARACTER,
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
