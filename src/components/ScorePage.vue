<script>
import VIcon from './VIcon.vue';

export default {
  name: 'ScorePage',
  components: {
    VIcon,
  },
};
</script>
<template>
  <section class="choose">
    <div class="setting">
      <router-link class="hand-stop" to="/">
        <VIcon name="setting" />
      </router-link>
    </div>
    <div class="chosen-character"></div>
    <div class="help">
      <router-link class="hand-stop" to="/">
        <VIcon name="notification" />
      </router-link>
    </div>
  </section>
  <section class="ingame-container">
    <div class="choose-character">
      <p class="p1">WELL DONE</p>
    </div>
    <div class="players">
      <div class="player-1"></div>
      <div class="player-2"></div>
      <div class="player-3"></div>
      <div class="player-4"></div>
      <div class="player-5"></div>
    </div>
    <div class="exit">
      <button type="button" class="p2 btn btn-danger">EXIT</button>
    </div>
  </section>
</template>

<style scoped>
.choose {
  display: grid;
  grid-template-columns: auto auto auto;
}

.ingame-container {
  display: grid;
  grid-template-rows: 15% 70% 15%;
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

.chosen-character {
  place-self: center;
  font-size: 4rem;
  border: solid 0.2rem;
  border-radius: 3rem;
  width: 6rem;
  height: 6rem;
}

.choose-character {
  display: grid;
  justify-content: space-around;
  align-content: space-between;
}

.exit {
  display: grid;
  justify-content: space-around;
  align-content: center;
}

.players {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 0.5rem;
  justify-content: space-around;
  align-content: center;
}

.player-1 {
  border: solid 0.3rem;
  border-radius: 0.3rem;
  width: 30rem;
  background-color: white;
}

.hand-stop {
  text-decoration: none;
  color: orangered;
}

.player-2 {
  border: solid 0.3rem;
  border-radius: 0.3rem;
  background-color: white;
}

.player-3 {
  border: solid 0.3rem;
  border-radius: 0.3rem;
  background-color: white;
}

.player-4 {
  border: solid 0.3rem;
  border-radius: 0.3rem;
  background-color: white;
}

.player-5 {
  border: solid 0.3rem;
  border-radius: 0.3rem;
  background-color: white;
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
