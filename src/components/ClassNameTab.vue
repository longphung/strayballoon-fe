<script>
export default {
  name: 'ClassNameTab',
  inject: ['userData'],
  props: {
    sessionInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  emits: ['sessionStart', 'sessionEnd'],
};
</script>

<template>
  <div class="class-name">
    <div class="tab">
      <h1>Your ID: {{ userData?.userId }}</h1>

      <p v-if="['in_progress', 'started'].includes(sessionInfo.status)">You have an in progress session!</p>

      <button class="btn btn-primary" @click="$emit('sessionStart')">Start Session</button>

      <button class="btn btn-danger" @click="$emit('sessionEnd')">End Session</button>
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
  padding: 1rem 0;
  text-align: center;
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
