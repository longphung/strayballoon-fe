<script>
export default {
  name: 'TopPerformers'
};
</script>

<template>
  <div class='top-performers'><p class="performance-title">Top Performers</p>
    <div class="perf1">
      <div class="icon-perf"></div>
      <div class="perf-text">
        <div class="text1"></div>
        <div class="text1"></div>
      </div>
      <div class="perf-score"></div>
    </div>
    <div class="perf2">
      <div class="icon-perf"></div>
      <div class="perf-text">
        <div class="text1"></div>
        <div class="text1"></div>
      </div>
      <div class="perf-score"></div>
    </div>
    <div class="perf3">
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
  background: #D9D9D9;
  border-radius: 20px;
}
.performance-title {
  padding-left: 50px;
  font-size: 1.125rem;
  margin-bottom: 4rem;
}
.perf1 {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 1rem;
  height: 4rem;
  background: rgba(151, 151, 151, 1);
  border-radius: 10px;
  margin-bottom: 0.5rem;
  gap: 30px;
}
.perf2 {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 1rem;
  height: 4rem;
  background: rgba(151, 151, 151, 1);
  border-radius: 10px;
  margin-bottom: 0.5rem;
  gap: 30px;
}
.perf3 {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 1rem;
  height: 4rem;
  background: rgba(151, 151, 151, 1);
  border-radius: 10px;
  margin-bottom: 0.5rem;
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
.text2 {
  width: 8rem;
  height: 1rem;
  background-color: rgba(217, 217, 217, 1);
  border-radius: 5px;
  margin-left: 0.5rem;
}
.perf-score{
  width: 2.7rem;
  height: 2.7rem;
  background-color: rgba(217, 217, 217, 1);
  border-radius: 10px;
}
</style>
