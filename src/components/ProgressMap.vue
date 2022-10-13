<script>
import VIcon from './VIcon.vue';

export default {
  name: 'ProgressMap',
  components: {
    VIcon
  },
  data() {
    return {
      progress: 0,
    }
  },
  computed: {
    offset() {
      return 0
    }
  }
};
</script>

<template>
  <div class='progress-map'><p class="progress-title">Progress Map</p>
    <div class="bar"></div>
    <span class='student-avatar' :style="`left: ${offset}`">&#9675;</span>
  </div>
</template>

<style scoped>
.progress-map {
  background: #D9D9D9;
  border-radius: 20px;
  width: 36.5rem;
  position: relative
}
.progress-title {
  padding-left: 50px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
}
.student-avatar {
  position: absolute;
  font-size: 50px;
}
.bar{
  position: absolute;
  width: 540px;
  height: 0px;
  color: #6F6F6F;
  border: 9px solid #6F6F6F;
}
</style>
