<script>
import VIcon from './VIcon.vue';

export default {
  name: 'TopPerformers',
  components: {
    VIcon,
  },
};
</script>

<template>
  <div class="top-performers">
    <p class="performance-title">Top Performers</p>
    <VIcon name="crown" />
    <div class="perf">
      <div class="icon-perf"></div>
      <div class="perf-text">
        <div class="text1"></div>
        <div class="text1"></div>
      </div>
      <div class="perf-score"></div>
    </div>
    <div class="perf">
      <div class="icon-perf"></div>
      <div class="perf-text">
        <div class="text1"></div>
        <div class="text1"></div>
      </div>
      <div class="perf-score"></div>
    </div>
    <div class="perf">
      <div class="icon-perf"></div>
      <div class="perf-text">
        <div class="text1"></div>
        <div class="text1"></div>
      </div>
      <div class="perf-score"></div>
    </div>
  </div>
</template>

<style scoped>
.top-performers {
  background: #d9d9d9;
  border-radius: 20px;
}

.performance-title {
  padding-left: 50px;
  font-size: 1.125rem;
  margin-bottom: 4rem;
}

.perf {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 1rem 1rem 0.5rem;
  height: 4rem;
  background: rgba(151, 151, 151, 1);
  border-radius: 10px;
  gap: 30px;
}

.icon-perf {
  width: 3rem;
  height: 3rem;
  background-color: rgba(217, 217, 217, 1);
  border-radius: 100px;
}

.perf-text {
  width: 8rem;
  height: 3rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
}

.text1 {
  width: 8rem;
  height: 1.5rem;
  background-color: rgba(217, 217, 217, 1);
  border-radius: 5px;
  margin-left: 0.5rem;
}

.perf-score {
  width: 2.7rem;
  height: 2.7rem;
  background-color: rgba(217, 217, 217, 1);
  border-radius: 10px;
}
</style>
