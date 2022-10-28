<script>
export default {
  name: 'ClassNameTab',
  inject: ['userData'],
  emits: ['sessionStart'],
};
</script>

<template>
  <div class="class-name">
    <div class="tab">
      <h1>Current sesion ID:</h1>
      <h1>{{ userData?.userId }}</h1>
      <button class="btn btn-primary" @click="$emit('sessionStart')">Start Session</button>
      <button class="btn btn-danger" @click="$emit('sessionStart')">End Session</button>
    </div>
  </div>
</template>

<style scoped>
.class-name {
  background: #d9d9d9;
  border-radius: 20px;
  grid-column-start: span 2;
  grid-column-gap: 2rem;
}

.tab {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
}
h1 {
  font-size: 2rem;
  align-content: center;
  justify-self: center;
}
.btn {
  margin: 1rem;
}
</style>
