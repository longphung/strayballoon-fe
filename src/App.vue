<script>
import { computed } from 'vue';

export default {
  name: 'AppContainer',
  provide() {
    return {
      userData: computed(() => this.userData),
      setUserData: (userData) => {
        this.userData = userData;
      },
    };
  },
  created() {
    const storedUserData = window.sessionStorage.getItem('userData');
    try {
      this.userData = JSON.parse(storedUserData);
    } catch (e) {
      console.error(e);
    }
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
