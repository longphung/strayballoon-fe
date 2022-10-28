<script>
export default {
  name: 'ClassNameTab',
  emits: ['sessionStart'],
};
</script>

<template>
  <div class="class-name">
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
