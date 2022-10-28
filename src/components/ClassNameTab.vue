<script>
export default {
  name: 'ClassNameTab',
  inject: ['userData'],
  emits: ['sessionStart'],
};
</script>

<template>
  <div class="class-name">
    <h1>Your Session ID: {{ userData.userId }}</h1>
    <button class="btn btn-primary" @click="$emit('sessionStart')">Start Session</button>
  </div>
</template>

<style scoped>
.class-name {
  background: #d9d9d9;
  border-radius: 20px;
  grid-column-start: span 2;
}
</style>
