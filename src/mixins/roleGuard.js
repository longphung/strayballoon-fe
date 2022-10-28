import { useToast } from 'vue-toastification';

const roleGuard = (role) => ({
  inject: ['userData'],
  created() {
    const toast = useToast();
    if (!this.userData?.groups.includes(role)) {
      this.$router.push('/login');
      toast.error(`You must be ${role} to enter this area.`);
    }
  },
});

export default roleGuard;
