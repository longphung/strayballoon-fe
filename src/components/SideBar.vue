<script>
import VIcon from './VIcon.vue';

export default {
  name: 'SideBar',
  components: {
    VIcon,
  },
};
</script>

<template>
  <aside class="sidebar">
    <ul class="sidebar__list">
      <li class="sidebar__item">
        <VIcon name="home-page" />
        Home
      </li>

      <li class="sidebar__item">
        <VIcon name="chart" />
        Statistic
      </li>

      <li class="sidebar__item">
        <VIcon name="attendance" />
        Attendance
      </li>
      <li class="sidebar__item">
        <router-link class="report-link" to="/report">
        <VIcon name="report" />
        Report
      </router-link>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
.sidebar {
  max-width: 9.375rem;
}

.sidebar__list,
.sidebar__item {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: 0 2.5rem;
}

.sidebar__item {
  color: white;
  margin-top: 4.375rem;

  &:first-child {
    margin-top: 0;
  }

  & i {
    color: #d9d9d9;
    font-size: 2.1875rem;
    margin-bottom: 1rem;
  }
}

.report-link {
  color: white;
  margin-top: 4.375rem;
  text-decoration: none;
  text-align: center;

  &:first-child {
    margin-top: 0;
  }

  & i {
    color: #d9d9d9;
    font-size: 2.1875rem;
    margin-bottom: 1rem;
  }
}
</style>
