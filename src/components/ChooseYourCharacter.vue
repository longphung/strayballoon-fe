<script>
import VIcon from './VIcon.vue';
import { GAME_STAGE } from '../pages/Game.vue';

export default {
  name: 'ChooseYourCharacter',
  components: {
    VIcon,
  },
  emits: ['changeStage'],
  methods: {
    handleNextButtonClick() {
      this.$emit('changeStage', GAME_STAGE.IN_GAME);
    },
  },
};
</script>

<template>
  <section class="choose">
    <div class="setting">
      <router-link to="/">
        <VIcon name="setting" />
      </router-link>
    </div>
    <div class="help">
      <router-link to="/">
        <VIcon name="notification" />
      </router-link>
    </div>
  </section>
  <section class="game-container">
    <div class="choose-character">
      <p class="p1">CHOOSE YOUR CHARACTER</p>
    </div>
    <div class="character">
      <div class="character-image"></div>
    </div>
    <div class="characters">
      <div class="character-1"></div>
      <div class="character-2"></div>
      <div class="character-3"></div>
      <div class="character-4"></div>
      <div class="character-5"></div>
    </div>
    <div class="next">
      <button type="button" class="p1" @click="handleNextButtonClick">NEXT</button>
    </div>
  </section>
</template>

<style scoped>
.choose {
  display: grid;
  grid-template-columns: auto auto;
}

.game-container {
  display: grid;
  grid-template-rows: 15% 40% 30% 15%;
}

.setting {
  place-self: center start;
  padding-top: 2rem;
  padding-left: 6rem;
  font-size: 4rem;
}

.help {
  padding-top: 2rem;
  place-self: center end;
  padding-right: 6rem;
  font-size: 4rem;
}

.choose-character {
  display: grid;
  justify-content: space-around;
  align-content: space-between;
}

.p1 {
  font-size: 3rem;
  margin: 0;
  padding: 0.5rem;
  border: solid;
  border-radius: 1rem;
}

.character {
  display: grid;
  justify-content: space-around;
  align-content: center;
}
.character-image {
  background-image: url('character3.png');
  background-size: contain;
  border: solid 0.3rem white;
  background-color:antiquewhite;
  width: 16rem;
  height: 15.6rem;
  border-radius: 8rem;
}

.characters {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 5rem;
  justify-self: center;
}

.character-1 {
  border: solid 0.3rem white;
  border-radius: 12rem;
  background-image: url('character1.png');
  background-size: contain;
  background-color:antiquewhite;
  height: 10rem;
  width: 10rem;
}

.character-2 {
  border: solid 0.3rem white;
  border-radius: 12rem;
  background-image: url('character2.png');
  background-size: contain;
  background-color:antiquewhite;
  height: 10rem;
  width: 10rem;
}

.character-3 {
  border: solid 0.3rem white;
  border-radius: 12rem;
  background-image: url('character3.png');
  background-size: contain;
  background-color:antiquewhite;
  height: 10rem;
  width: 10rem;
}

.character-4 {
  border: solid 0.3rem white;
  border-radius: 12rem;
  background-image: url('character4.png');
  background-size: contain;
  background-color:antiquewhite;
  height: 10rem;
  width: 10rem;
}

.character-5 {
  border: solid 0.3rem white;
  border-radius: 12rem;
  background-image: url('3.png');
  background-size: contain;
  background-color:antiquewhite;
  height: 10rem;
  width: 10rem;
}

.next {
  display: grid;
  justify-content: space-around;
  align-content: space-between;
  padding-top: 0.2rem;
}
</style>
