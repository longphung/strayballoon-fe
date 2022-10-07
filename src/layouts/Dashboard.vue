<template>
  <HeaderTab />
  <main>
    <SideBar></SideBar>
    <router-view></router-view>
  </main>
</template>

<script>
import HeaderTab from '../components/HeaderTab.vue';
import SideBar from '../components/SideBar.vue';

export default {
  name: 'DashboardLayout',
  components: {
    HeaderTab,
    SideBar,
  },
};
</script>

<style>
body {
  background-color: #272d2d;
}

main {
  display: flex;
  margin-bottom: 1.125rem;
}
</style>
