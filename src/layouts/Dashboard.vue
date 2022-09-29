<template>
  <div class="container">
    <HeaderTab />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import HeaderTab from '../components/HeaderTab.vue';

export default {
  name: 'DashboardLayout',
  components: {
    HeaderTab,
  },
};
</script>

<style scoped>
.container {
  background-color: #272D2D;
}
</style>
