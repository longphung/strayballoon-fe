<script>
import VIcon from './VIcon.vue';

export default {
  name: 'StudentsList',
  components: {
    VIcon,
},
}
</script>

<template>
  <div class="students-list">
    <div class="students-row">
      <div class="name-title">Name</div>
      <div class="student-1"><VIcon name="user-solid-circle" /> Lisa Moon</div>
      <div class="student-2"><VIcon name="user-solid-circle" /> Jeanette Lou</div>
      <div class="student-3"><VIcon name="user-solid-circle" /> Bob Joe</div>
      <div class="student-4"><VIcon name="user-solid-circle" /> Regina Istie</div>
      <div class="student-5"><VIcon name="user-solid-circle" /> Michael Yi</div>
    </div>
  </div>
</template>

<style scoped>
.students-list {
  background: #6E6E6E;
  border-radius: 20px;
}

.students-row {
  display: grid;
  grid-template-rows: 20% 20% 20% 20% 20% 20%;
  padding-top: 0.5rem;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
}
.name-title {
  background-color: #dddddd;
  align-content: start;
  height: 2.4rem;
  font-size: 1.5rem;
  font-weight: bold;
  padding-left: 0.8rem;
  border-radius: 15px 15px 0.2rem 0.2rem;
}
.student-1 {
  background-color: #81ca67;;
  align-content: start;
  height: 2.4rem;
  font-size: 1.5rem;
  font-weight: bold;
  padding-left: 0.8rem;
  border-radius: 0.2rem;
}
.student-2 {
  background-color: #dddddd;
  align-content: start;
  height: 2.4rem;
  font-size: 1.5rem;
  font-weight: bold;
  padding-left: 0.8rem;
  border-radius: 0.2rem;
}
.student-3 {
  background-color: #dddddd;
  align-content: start;
  height: 2.4rem;
  font-size: 1.5rem;
  font-weight: bold;
  padding-left: 0.8rem;
  border-radius: 0.2rem;
}
.student-4 {
  background-color: #dddddd;
  align-content: start;
  height: 2.4rem;
  font-size: 1.5rem;
  font-weight: bold;
  padding-left: 0.8rem;
  border-radius: 0.2rem;
}
.student-5 {
  background-color: #dddddd;
  height: 2.4rem;
  font-size: 1.5rem;
  font-weight: bold;
  padding-left: 0.8rem;
  border-radius: 0.2rem;
}
</style>
