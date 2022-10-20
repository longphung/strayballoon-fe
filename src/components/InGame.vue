<script>
import VIcon from './VIcon.vue' 

export default {
  name: 'InGame',
  components: {
    VIcon,
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
      <div class="pause">
        <router-link to="/">
          <VIcon name="notification" />
        </router-link>
      </div>
      <div class="help">
        <router-link to="/">
          <VIcon name="notification" />
        </router-link>
      </div>
  </section>
  <section class="ingame-container">
  <div class="choose-character">
    <div class="bar"></div>
  </div>
  <div class="character">
    <div class="character-image"></div>
  </div>
  <div class="characters">
    <div class="character-1"></div>
    <div class="character-2"></div>
    <div class="character-3"></div>
    <div class="character-4"></div>
  </div>
</section>
  </template>

<style scoped>
.choose {
  background: #80cfea;
  display: grid;
  grid-template-columns: auto auto auto;
}

.ingame-container{
  background: red;
  display: grid;
  grid-template-rows: 15% 42.5% 42.5%;
}

.setting {
  background: #80cfea;
  place-self: center start;
  padding-top: 2rem;
  padding-left: 6rem;
  font-size: 4rem;
}

.help {
  background-color: #80cfea;
  padding-top: 2rem;
  place-self: center end;
  padding-right: 6rem;
  font-size: 4rem;
}

.pause {
  background-color: #80cfea;
  place-self: center;
  font-size: 4rem;
}

.choose-character {
  background-color: #80cfea;
  display: grid;
  justify-content: space-around;
  align-content: space-between;
}

.bar {
  background-color: #F8C033;
  width: 26rem;
  height: 2rem;
  border-radius: 2.5rem;
}

.character {
  background-color: #80cfea;
  display: grid;
  justify-content: space-around;
  align-content: center;
}
.character-image {
  width: 35rem;
  height: 14rem;
  border: solid 0.3rem;
  border-radius: 1rem;
} 

.characters {
  background-color: #80cfea;
  display: grid;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 2rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 6rem;
}

.character-1 {
  border: solid 0.3rem;
  border-radius: 0.3rem;
}

.character-2 {
  border: solid 0.3rem;
  border-radius: 0.3rem;
}

.character-3 {
  border: solid 0.3rem;
  border-radius: 0.3rem;
}

.character-4 {
  border: solid 0.3rem;
  border-radius: 0.3rem;
}
</style>

