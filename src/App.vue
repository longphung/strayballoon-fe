<script>
import { computed } from 'vue';

export default {
  name: 'AppContainer',
  provide() {
    return {
      userData: computed(() => this.userData),
    };
  },
  data() {
    return {
      userData: {},
    };
  },
  methods: {
    handleLogin(userData) {
      this.userData = userData;
    },
  },
};
</script>

<template>
  <router-view @login="handleLogin"></router-view>
</template>

<style scoped></style>
