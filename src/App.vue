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
  data() {
    return {
      userData: {},
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
  methods: {
    handleLogin(userData) {
      this.userData = userData;
    },
  },
};
</script>

<template>
  <router-view></router-view>
</template>

<style scoped></style>
