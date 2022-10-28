<script>
export default {
  name: 'StudentMetrics',
};
</script>

<template>
  <div class="student-metrics">
    <div class="metrics">
      <div class="metrics-heading">TOTAL NUMBER OF PROBLEMS SOLVED</div>
        <div class="numbers"></div>
    </div>
    <div class="metrics">
      <div class="metrics-heading"> TOTAL NUMBER OF UNIQUE PROBLEMS SOLVED</div>
      <div class="numbers"></div>
    </div>
    <div class="metrics">
      <div class="metrics-heading">TOTAL NUMBER OF ERRORS</div>
      <div class="numbers"></div>
    </div>
    <div class="metrics">
      <div class="metrics-heading">TOTAL SCORE</div>
        <div class="numbers"></div>
    </div>
    <div class="metrics">
      <div class="metrics-heading">TOTAL TIME TAKEN</div>
        <div class="numbers"></div>
    </div>
    <div class="metrics">
      <div class="metrics-heading">TOTAL TIME TAKEN PER PROBLEM</div>
        <div class="numbers"></div>
    </div>
  </div>
</template>

<style scoped>
.student-metrics {
  background: #bfdbfe;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}

.metrics {
  display: grid;
  grid-template-rows: 17% 83%;
  gap: 0.2rem;
  align-items: stretch;
  color: white;
  padding: 0.2rem;
}
.metrics-heading {
  display: grid;
  justify-content: center;
  align-content: center;
  background-color: #446894;
  font-size: 1rem;
  border-radius: 0.5rem;
  padding: 0.2rem;
}

.numbers{
  background-color: #479AC8;
  border-radius: 0.6rem;
  margin: 0.2rem;
}

</style>
