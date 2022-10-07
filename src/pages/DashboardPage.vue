<script>
import ClassNameTab from '../components/ClassNameTab.vue';
import TimerTab from '../components/TimerTab.vue';
import TopPerformers from '../components/TopPerformers.vue';
import ProgressMap from '../components/ProgressMap.vue';
import HelpRequest from '../components/HelpRequest.vue';

export default {
  name: 'DashboardPage',
  components: {
    ClassNameTab,
    TimerTab,
    TopPerformers,
    ProgressMap,
    HelpRequest,
  },
};
</script>

<template>
  <section class="dashboard-page">
    <ClassNameTab />
    <TimerTab />
    <TopPerformers />
    <ProgressMap />
    <HelpRequest />
  </section>
</template>

<style scoped>
.dashboard-page {
  margin-right: 1rem;
  background: #f6f8ff;
  border-radius: 1.25rem;
  width: 100%;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto auto;
  grid-column-gap: 3.5rem;
  grid-row-gap: 2.125rem;
}
</style>
