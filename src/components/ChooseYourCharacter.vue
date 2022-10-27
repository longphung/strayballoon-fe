<script>
import VIcon from './VIcon.vue';
import { GAME_STAGE } from '../pages/Game.vue';

export default {

  name: 'ChooseYourCharacter',
  components: {
    VIcon,
  },
  emits: ['changeStage','currentChar'],
  data() {
    return {
      currentChar: '/character1.png',
    };
  },
  methods: {
    handleNextButtonClick() {
      this.$emit('changeStage', GAME_STAGE.IN_GAME);
    },
    handleCharacterButtonClick(character) {
      this.$emit('currentChar',character);
      this.currentChar = character; 
    },
  },
};

</script>

<template>
  <section class="choose">
    <div class="link">
      <router-link class="hand-stop" to="/">
        <VIcon name="setting" />
      </router-link>
    </div>
    <div class="help">
      <router-link class="hand-stop" to="/">
        <VIcon name="hand-stop" />
      </router-link>
    </div>
  </section>
  <section class="game-container">
    <div class="choose-character">
      <p class="p2">CHOOSE YOUR CHARACTER</p>
    </div>
    <div class="character">
      <div class="character-image"><img :src="currentChar" /></div>
    </div>
    <div class="characters">
      <button class="character-1" @click="handleCharacterButtonClick('/character1.png')">
        <img src="/character1.png" />
        <VIcon v-if="currentChar === '/character1.png'" class="check" name="checkbox-checked" />
      </button>
      <button class="character-2" @click="handleCharacterButtonClick('/character2.png')">
        <img src="/character2.png" />
        <VIcon v-if="currentChar === '/character2.png'" class="check" name="checkbox-checked" />
      </button>
      <button class="character-3" @click="handleCharacterButtonClick('/character3.png')">
        <img src="/character3.png" />
        <VIcon v-if="currentChar === '/character3.png'" class="check" name="checkbox-checked" />
      </button>
      <button class="character-4" @click="handleCharacterButtonClick('/character4.png')">
        <img src="/character4.png" />
        <VIcon v-if="currentChar === '/character4.png'" class="check" name="checkbox-checked" />
      </button>
      <button class="character-5" @click="handleCharacterButtonClick('/character5.png')">
        <img src="/character5.png" />
        <VIcon v-if="currentChar === '/character5.png'" class="check" name="checkbox-checked" />
      </button>
    </div>
    <div class="next">
      <button type="button" class="p1 btn btn-success" @click="handleNextButtonClick">NEXT</button>
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

.link {
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

.hand-stop {
  text-decoration: none;
  color: orangered;
}

.choose-character {
  display: grid;
  justify-content: space-around;
  align-content: space-between;
}

.p1 {
  font-size: 2rem;
  margin: 0;
  padding: 0.5rem;
  border: solid;
  border-radius: 1rem;
}
.p2{
  font-size: 2rem;
  margin: 0;
  padding: 0.5rem;
  border: solid white;
  border-radius: 1rem;
  background-color: #0b5ed7;
  color: white;
}
.character {
  display: grid;
  justify-content: space-around;
  align-content: center;
}
.character-image {
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
  background-size: contain;
  background-color:antiquewhite;
  height: 10rem;
  width: 10rem;
  position: relative;
}

.crown{
  position: absolute;
  left: calc(100% - 1.2rem);
  top: calc(100% - 0.6rem);
  font-size: 2rem;
}
.check {
  position: absolute;
  left: calc(100% - 1.2rem);
  top: calc(100% - 0.6rem);
  font-size: 2.5rem;
  color:green;
  background-color: white;
}

.character-2 {
  border: solid 0.3rem white;
  border-radius: 12rem;
  background-size: contain;
  background-color:antiquewhite;
  height: 10rem;
  width: 10rem;
  position: relative;
}

.character-3 {
  border: solid 0.3rem white;
  border-radius: 12rem;
  background-size: contain;
  background-color:antiquewhite;
  height: 10rem;
  width: 10rem;
  position: relative;
}


.character-4 {
  border: solid 0.3rem white;
  border-radius: 12rem;
  background-size: contain;
  background-color:antiquewhite;
  height: 10rem;
  width: 10rem;
  position: relative;
}

.character-5 {
  border: solid 0.3rem white;
  border-radius: 12rem;
  background-size: contain;
  background-color:antiquewhite;
  height: 10rem;
  width: 10rem;
  position: relative;
}

img {
  width: 100%;
}

.next {
  display: grid;
  align-self: center;
  padding-right: 20rem;
  padding-left: 20rem;
  padding-top: 0.2rem;
}
</style>
