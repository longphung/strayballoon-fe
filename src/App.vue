<script>
import { computed } from 'vue';

export default {
  name: 'AppContainer',
  provide() {
    return {
      userToken: computed(() => this.userToken),
    };
  },
  data() {
    return {
      userToken: '',
    };
  },
};
</script>

<template>
  <router-view></router-view>
</template>

<style scoped></style>
