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
<!--    TODO: Akhmad to fill with student avatar(Completed)-->
  </span>
</template>

<style scoped>
.student-avatar {
  width: 2.5rem;
  height: 2.5rem;
  background-color: rgba(151, 151, 151, 1);
  border-radius: 100px;
  position: absolute;
  top: calc(100% + 0.3125rem);
}
</style>
