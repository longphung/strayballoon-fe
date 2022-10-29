<script>
import VIcon from './VIcon.vue';

export default {
  name: 'StudentHeading',
  components: {
    VIcon,
  },
};
</script>

<template>
  <div class="student-heading">
    <div class="student-picture">
      <VIcon name="user-solid-circle" />
      <div class="name">Lisa Moon</div>
      <div class="name">Student ID: 10406</div>
      <div class="name">Grade 3, Age 7</div>
      <div class="name">Enrolled Courses:</div>
      <div class="name">Arithmetic</div>
      <div class="name">Reading and Writing</div>
      <div class="name">Introductory Science</div>
    </div>
  </div>
</template>

<style scoped>
.student-heading {
  background: #6e6e6e;
  border-radius: 20px;
  grid-template-rows: 1fr;
}

.student-picture {
  font-size: 9rem;
  display: grid;
  justify-content: center;
  color: #d9d9d9;
  border-radius: 4rem;
  justify-items: center;
  align-content: center;
  padding-top: 0.5rem;
}

.name {
  justify-self: center;
  font-size: 1.2rem;
  color: white;
}
</style>
