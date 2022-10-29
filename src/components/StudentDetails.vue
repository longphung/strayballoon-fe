<script>
import VIcon from './VIcon.vue';

export default {
  name: 'StudentDetails',
  components: {
    VIcon, 
},
}
</script>

<template>
  <div class='student-details'>
    <div class="student-picture"> <VIcon name="user-solid-circle" />
    </div>
    <div class="details">
      <div class="student-name">Lisa Moon</div>
      <div class="student-id">Student ID: 10406</div>
      <div class="grade">Grade 3, Age 7</div>
    </div>
  </div>
</template>

<style scoped>
.student-details {
  background: #6E6E6E;
  border-radius: 20px;
  display: grid;
  grid-template-rows: 50% 50%;
}
.student-picture {
  align-items: center;
  font-size: 5rem;
  display: grid;
  justify-self: center;
  color: #D9D9D9;
  margin: 0.3rem;
  width: 5rem;
  height: 4rem;
  border-radius: 4rem;
}

.details {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
}

.student-name {
  justify-self: center;
  font-size: 1.2rem;
  color:white;

}

.student-id {
  justify-self: center;
  font-size: 1.2rem;
  color:white;
}

.grade {
  justify-self: center;
  font-size: 1.2rem;
  color:white;
}
</style>