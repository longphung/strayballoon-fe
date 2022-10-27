const authGuard = {
  inject: ['userData'],
  mounted() {
    if (!this.userData?.token) {
      this.$router.push('/login');
    }
  },
};

export default authGuard;
