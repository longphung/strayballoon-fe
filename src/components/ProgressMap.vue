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
  <div class='progress-map'>
    <VIcon name='attendance'/>
    <span class='student-avatar' :style="`left: ${offset}`"></span>
  </div>
</template>

<style scoped>
.progress-map {
  background: #D9D9D9;
  border-radius: 20px;
  width: 36.5rem;
  position: relative
}

.student-avatar {
  position: absolute;
}
</style>
