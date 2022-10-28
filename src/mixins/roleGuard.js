const roleGuard = (role) => ({
  inject: ['userData'],
  created() {
    if (!this.userData?.groups.includes(role)) {
      this.$router.push('/login');
    }
  },
});

export default roleGuard;
