<script>
import { debounce } from 'lodash';
import VIcon from './VIcon.vue';
import { GAME_STAGE } from '../pages/Game.vue';

export default {
  name: 'ChooseYourCharacter',
  components: {
    VIcon,
  },
  inject: ['session', 'setSession'],
  emits: ['changeStage', 'currentChar'],
  data() {
    return {
      currentChar: '/character1.png',
      sessionId: 0,
    };
  },
  mounted() {
    this.handleCharacterButtonClick(this.currentChar);
  },
  methods: {
    handleNextButtonClick() {
      this.$emit('changeStage', GAME_STAGE.IN_GAME);
    },
    handleCharacterButtonClick(character) {
      this.setSession({
        ...this.session,
        character,
      });
    },
    // eslint-disable-next-line func-names
    handleInputChange: debounce(function (event) {
      this.setSession({
        ...this.session,
        sessionId: event.target.value,
      });
    }, 250),
  },
};
</script>

<template>
  <section class="choose">
    
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
    <!-- TODO: restyle this -->
    <form class="container-sm mb-3 row m-auto session-id">
      <label for="session-id" class="col-sm-2 col-form-label label">Session ID</label>
      <div class="col-sm-10">
        <input
          id="session-id"
          type="text"
          class="form-control"
          placeholder="Session ID..."
          name="sessionId"
          @input="handleInputChange"
        />
      </div>
    </form>

    <div class="next">
      <button type="button" class="p1 btn btn-success" @click="handleNextButtonClick">NEXT</button>
    </div>
  </section>
</template>

<style scoped>
.session-id {

}

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
  position: absolute;
  right: 0;
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
  max-width: 370px;
  width: 15%;
  border: solid;
  border-radius: 1rem;
  display: flex;
  align-items: center; 
  margin:auto;
  margin-top: 10px;
  justify-content: center;
  
}
.p2 {
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
  background-color: antiquewhite;
  width: 16rem;
  height: 15.6rem;
  border-radius: 8rem;
}

.characters {
  margin-top: 2em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 5rem;
  justify-self: center;
}

.character-1 {
  border: solid 0.3rem white;
  border-radius: 12rem;
  background-size: contain;
  background-color: antiquewhite;
  height: 10rem;
  width: 10rem;
  position: relative;
}

.crown {
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
  color: green;
  background-color: white;
}

.character-2 {
  border: solid 0.3rem white;
  border-radius: 12rem;
  background-size: contain;
  background-color: antiquewhite;
  height: 10rem;
  width: 10rem;
  position: relative;
}

.character-3 {
  border: solid 0.3rem white;
  border-radius: 12rem;
  background-size: contain;
  background-color: antiquewhite;
  height: 10rem;
  width: 10rem;
  position: relative;
}

.character-4 {
  border: solid 0.3rem white;
  border-radius: 12rem;
  background-size: contain;
  background-color: antiquewhite;
  height: 10rem;
  width: 10rem;
  position: relative;
}

.character-5 {
  border: solid 0.3rem white;
  border-radius: 12rem;
  background-size: contain;
  background-color: antiquewhite;
  height: 10rem;
  width: 10rem;
  position: relative;
}

img {
  width: 100%;
}

.next {
  text-align: center;
}



.label {
  color: white;
  font-weight: bold;
}
<<<<<<< Updated upstream
=======


.container-sm {
  font-size: 1.1rem;
  display: flex;
  align-items: center; 
  margin:auto;
  
  justify-content: center;
}

.col-sm-2 {
  border-radius: 10px;
  border: 2px solid white;
  background: #0b5ed7;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  text-align: center;
  width:10%;
  margin-top: 40px;
  padding-top: 9px;
  padding-bottom: 9px;
   
}

.col-sm-10 {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  width: 20%;
  margin-top: 40px;
}


.form-control {
  padding-top: 10px;
  padding-bottom: 10px;
  
}

>>>>>>> Stashed changes
</style>
