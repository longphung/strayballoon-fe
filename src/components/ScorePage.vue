<script>
import VIcon from './VIcon.vue';

export default {
  name: 'ScorePage',
  components: {
    VIcon,
  },
  props: {
    character: {
      type: String,
      default() {
        return '';
      },
    },
  },
  emits: ['changeStage'],
};
</script>
<template>
  <section class="choose">
    <div class="chosen-character">
      <img :src="character" alt="selected character" />
    </div>

    <span class="help">
      <router-link class="hand-stop" to="/">
        <VIcon name="notification" />
      </router-link>
    </span>
  </section>
  <section class="ingame-container">
    <div class="choose-character mb-4">
      <p class="p1">WELL DONE</p>
    </div>
    <div class="players">
      <div class="player"></div>
      <div class="player"></div>
      <div class="player"></div>
      <div class="player"></div>
      <div class="player"></div>
    </div>

    <div class="d-flex justify-content-center m-4">
      <button
        type="button"
        class="p2 btn btn-lg btn-success"
        @click="$emit('changeStage', { nextStage: GAME_STAGE.SCORE_PAGE })"
      >
        New Game
      </button>
    </div>
  </section>
</template>

<style scoped>
.choose {
  position: relative;
  margin-bottom: 2rem;
}

.help {
  font-size: 4rem;
  top: 2rem;
  right: 0;
  position: absolute;
}

.chosen-character {
  font-size: 4rem;
  border: solid 0.2rem;
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  overflow: hidden;
  margin: auto;

  & img {
    width: 10rem;
  }
}

.choose-character {
  display: grid;
  justify-content: space-around;
  align-content: space-between;
}

.players {
  display: flex;
  align-items: center;
  flex-flow: column;

  & .player {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.player {
  border: solid 0.3rem;
  border-radius: 0.3rem;
  width: 30rem;
  height: 4rem;
  background-color: white;
}

.hand-stop {
  text-decoration: none;
  color: orangered;
}

.p1 {
  font-size: 2.5rem;
  margin: 0;
  padding: 0.3rem;
  color: aliceblue;
  border: solid white;
  border-radius: 1rem;
  background-color: #198754;
}

.p2 {
  font-size: 2.5rem;
  margin: 0;
}
</style>
