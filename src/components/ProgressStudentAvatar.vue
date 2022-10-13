<script>
export default {
  name: 'ProgressStudentAvatar',
  props: {
    progress: {
      required: true,
      type: Number,
    },
  },
  computed: {
    // Return percentage of the width of the whole progress bar
    offset() {
      return this.progress;
    }
  },
};
</script>

<template>
  <span class="student-avatar" :style="`left: ${offset}%`">
    avatar
<!--    TODO: Akhmad to fill with student avatar-->
  </span>
</template>

<style scoped>
.student-avatar {
  position: absolute;
  top: calc(100% + 0.3125rem);
}
</style>
