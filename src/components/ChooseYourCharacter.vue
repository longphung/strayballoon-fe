<script>
import VIcon from './VIcon.vue';
import { GAME_STAGE } from '../pages/Game.vue';
import char1 from '../assets/character1.png';
import char2 from '../assets/character2.png';
import char3 from '../assets/character3.png';
import char4 from '../assets/character4.png';
import char5 from '../assets/character5.png';

export default {
  
  name: 'ChooseYourCharacter',
  components: {
    VIcon,
  },
  emits: ['changeStage'],
  data() {
    return {
      char1,
      char2,
      char3,
      char4,
      char5,
    };
  },
  methods: {
    handleNextButtonClick() {
      this.$emit('changeStage', GAME_STAGE.IN_GAME);
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
      <div class="character-image"><img src="../assets/character3.png" /></div>
    </div>
    <div class="characters">
      <div class="character-1">
        <img src="../assets/character1.png" />
        <VIcon class="check" name="checkbox-checked" />
      </div>
      <div class="character-2">
        <img src="../assets/character2.png" />
      </div>
      <div class="character-3">
        <img src="../assets/character3.png" />
      </div>
      <div class="character-4">
        <img src="../assets/character4.png" />
      </div>
      <div class="character-5">
        <img src="../assets/character5.png" />
      </div>
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
  font-size: 2rem;
  color:white;
  background-color: green;
}

.character-2 {
  border: solid 0.3rem white;
  border-radius: 12rem;
  background-size: contain;
  background-color:antiquewhite;
  height: 10rem;
  width: 10rem;
}

.character-3 {
  border: solid 0.3rem white;
  border-radius: 12rem;
  background-size: contain;
  background-color:antiquewhite;
  height: 10rem;
  width: 10rem;
}

.character-4 {
  border: solid 0.3rem white;
  border-radius: 12rem;
  background-size: contain;
  background-color:antiquewhite;
  height: 10rem;
  width: 10rem;
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
  justify-content: space-around;
  align-self: center;
  padding-top: 0.2rem;
}
</style>
