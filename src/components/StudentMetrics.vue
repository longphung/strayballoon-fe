<script>
import Chart from 'chart.js/auto';

export default {
  name: 'StudentMetrics',
  mounted() {
    function chart1(id) {
      const ctx = document.getElementById(id);

      const qs = [16, 20]; // this should consist of 2x variables for correct questions and total questions let qs = [cor_qs,total_qs]
      const questionsLabels = ['Correct', 'Incorrect'];

      const myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: questionsLabels,
          datasets: [
            {
              label: 'Questions answered & total correct',
              data: qs,
              backgroundColor: ['rgb(54, 162, 235)', 'rgb(255, 99, 132)'],
            },
          ],
        },

        options: {
          rotation: 0.75 * Math.PI,
          circumference: 1.5 * Math.PI,
        },
        // plugin for inner text visualisation
        plugins: [
          {
            id: 'text',
            beforeDraw: (chart, a, b) => {
              const width = chart.width;
              const height = chart.height;
              const ctx = chart.ctx;

              ctx.restore();
              const fontSize = (height / 160).toFixed(2);
              // how to add weight / bold??
              ctx.font = `${fontSize}em sans-serif`;
              ctx.textBaseline = 'middle';
              // this variable should be (correctquestions+"/"+totalquestions)
              const text = 'XXX' + '/' + 'XXX';
              const textX = Math.round((width - ctx.measureText(text).width) / 2);
              const textY = height / 1.5;

              ctx.fillText(text, textX, textY);
              ctx.save();
            },
          },
        ],
      });
    }

    chart1('myChart');
  },
};
</script>

<template>
  <div class="student-metrics">
    <div class="metrics">
      <div class="metrics-heading">TOTAL NUMBER OF PROBLEMS SOLVED</div>
      <div class="numbers">
        <canvas id="myChart" width="200" height="50"></canvas>
      </div>
    </div>
    <div class="metrics">
      <div class="metrics-heading">TOTAL NUMBER OF UNIQUE PROBLEMS SOLVED</div>
      <div class="numbers">
        <canvas id="myChart2" width="200" height="50"></canvas>
      </div>
    </div>
    <div class="metrics">
      <div class="metrics-heading">TOTAL NUMBER OF ERRORS</div>
      <div class="numbers">
        <canvas id="myChart3" width="200" height="50"></canvas>
      </div>
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

.numbers {
  background-color: #479ac8;
  border-radius: 0.6rem;
  margin: 0.2rem;
}
</style>
