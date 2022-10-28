const authGuard = {
  inject: ['userData'],
  created() {
    if (!this.userData?.token) {
      this.$router.push('/login');
    }
  },
};

export default authGuard;
