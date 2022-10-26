<script>
// import VIcon from './VIcon.vue';
import ProgressStudentAvatar from './ProgressStudentAvatar.vue';

export default {
  name: 'ProgressMap',
  components: {
    ProgressStudentAvatar,
  },
  data() {
    return {
      progress: 0,
    };
  },
};
</script>

<template>
  <div class="progress-map">
    <p class="progress-title">Progress Map</p>
    <div class="progress-bar">
      <div class="bar"></div>
      <ProgressStudentAvatar :progress='progress' />
    </div>
  </div>
</template>

<style scoped>
.progress-map {
  background: #d9d9d9;
  border-radius: 20px;
  width: 36.5rem;
}

.progress-title {
  padding-left: 50px;
  font-size: 1.125rem;
  margin-bottom: 10rem;
}

.progress-bar {
  position: relative;
  margin: 0 1.375rem;
}

.bar {
  width: 33.75rem;
  height: 0;
  color: #6f6f6f;
  border: 9px solid #6f6f6f;
  border-radius: 40px;
}
</style>
