<script>
import Chart from 'chart.js/auto';

export default {
  name: 'StudentMetrics',
  props: {
    problemsAnalyzed: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      totalNumberOfProblemsChart: null,
      totalTimeTakenChart: null,
      totalTimeTakenPerProblemChart: null,
    };
  },
  mounted() {
    const options = {
      rotation: 225,
      circumference: 270,
    };
    const chart1 = (id) => {
      const chartEl = document.getElementById(id);

      const qs = [this.problemsAnalyzed.correct, this.problemsAnalyzed.inCorrect]; // this should consist of 2x variables for correct questions and total questions let qs = [cor_qs,total_qs]
      const questionsLabels = ['Correct', 'Incorrect'];

      this.totalNumberOfProblemsChart = new Chart(chartEl, {
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
        options,
        // plugin for inner text visualisation
        plugins: [
          {
            id: 'text',
            // beforeDraw: (chart, a, b) => {
            beforeDraw: (chart) => {
              const { width, height, ctx } = chart;

              ctx.restore();
              // how to add weight / bold??
              ctx.font = `1.25rem sans-serif`;
              ctx.textBaseline = 'middle';
              // this variable should be (correctquestions+"/"+totalquestions)
              const text = `${this.problemsAnalyzed.correct}/${this.problemsAnalyzed.inCorrect}`;
              const textX = Math.round((width - ctx.measureText(text).width) / 2);
              const textY = height / 1.65;

              ctx.fillText(text, textX, textY);
              ctx.save();
            },
          },
        ],
      });
    };
    const chart3 = (id) => {
      const chartEl = document.getElementById(id);

      const qs = [4, 16]; // this should consist of 2x variables for correct questions and total questions let qs = [cor_qs,total_qs]
      const questionsLabels = ['Correct', 'Incorrect'];

      this.myChart3 = new Chart(chartEl, {
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
        options,
        // plugin for inner text visualisation
        plugins: [
          {
            id: 'text',
            // beforeDraw: (chart, a, b) => {
            beforeDraw: (chart) => {
              const { width, height, ctx } = chart;

              ctx.restore();
              const fontSize = (height / 160).toFixed(2);
              // how to add weight / bold??
              ctx.font = `${fontSize}em sans-serif`;
              ctx.textBaseline = 'middle';
              // this variable should be (correctquestions+"/"+totalquestions)
              const text = '4' + '/' + '20';
              const textX = Math.round((width - ctx.measureText(text).width) / 2);
              const textY = height / 1.65;

              ctx.fillText(text, textX, textY);
              ctx.save();
            },
          },
        ],
      });
    };
    const chart5 = (id) => {
      const chartEl = document.getElementById(id);

      const qs = [this.problemsAnalyzed.totalTimeTakenCorrect, this.problemsAnalyzed.totalTimeTakenInCorrect]; // this should consist of 2x variables for correct questions and total questions let qs = [cor_qs,total_qs]
      const questionsLabels = ['Correct', 'Incorrect'];

      this.totalTimeTakenChart = new Chart(chartEl, {
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
        options,
        // plugin for inner text visualisation
        plugins: [
          {
            id: 'text',
            // beforeDraw: (chart, a, b) => {
            beforeDraw: (chart) => {
              const { width, height, ctx } = chart;

              ctx.restore();
              // how to add weight / bold??
              ctx.font = `1.25rem sans-serif`;
              ctx.textBaseline = 'middle';
              // this variable should be (correctquestions+"/"+totalquestions)
              const text = `${this.problemsAnalyzed.totalTimeTakenCorrect} / ${this.problemsAnalyzed.totalTimeTakenInCorrect}`;
              const textX = Math.round((width - ctx.measureText(text).width) / 2);
              const textY = height / 1.65;

              ctx.fillText(text, textX, textY);
              ctx.save();
            },
          },
        ],
      });
    };

    const chart6 = (id) => {
      const chartEl = document.getElementById(id);

      const qs = [this.problemsAnalyzed.averageTimeCorrect, this.problemsAnalyzed.averageTimeInCorrect]; // this should consist of 2x variables for correct questions and total questions let qs = [cor_qs,total_qs]
      const questionsLabels = ['Correct', 'Incorrect'];

      this.myChart6 = new Chart(chartEl, {
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
        options,
        // plugin for inner text visualisation
        plugins: [
          {
            id: 'text',
            // beforeDraw: (chart, a, b) => {
            beforeDraw: (chart) => {
              const { width, height, ctx } = chart;

              ctx.restore();
              // how to add weight / bold??
              ctx.font = `1.25rem sans-serif`;
              ctx.textBaseline = 'middle';
              // this variable should be (correctquestions+"/"+totalquestions)
              const text = '22 secs';
              const textX = Math.round((width - ctx.measureText(text).width) / 2);
              const textY = height / 1.65;

              ctx.fillText(text, textX, textY);
              ctx.save();
            },
          },
        ],
      });
    };

    chart1('myChart');
    // chart3('myChart3');
    chart5('myChart5');
    chart6('myChart6');
  },
  beforeUnmount() {
    if (this.totalNumberOfProblemsChart) {
      this.totalNumberOfProblemsChart.destroy();
    }
  },
};
</script>

<template>
  <div class="student-metrics">
    <div class="metrics">
      <div class="metrics-heading">TOTAL NUMBER OF PROBLEMS SOLVED</div>
      <div class="numbers">
        <canvas id="myChart" class="m-auto" width="300" height="300"></canvas>
      </div>
    </div>
    <div class="metrics">
      <div class="metrics-heading">TOTAL NUMBER OF ERRORS</div>
      <div class="numbers">
        <canvas id="myChart3" class="m-auto" width="225" height="225"></canvas>
      </div>
    </div>
    <div class="metrics">
      <div class="metrics-heading">TOTAL TIME TAKEN</div>
      <div class="numbers">
        <canvas id="myChart5" class="m-auto" width="300" height="300"></canvas>
      </div>
    </div>
    <div class="metrics">
      <div class="metrics-heading">TOTAL TIME TAKEN PER PROBLEM</div>
      <div class="numbers">
        <canvas id="myChart6" class="m-auto" width="300" height="300"></canvas>
      </div>
    </div>
  </div>
</template>

<style scoped>
.student-metrics {
  border-radius: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: solid #446894 0.5rem;
  flex-grow: 1;
}

.metrics {
  display: grid;
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
  font-size: 0.9rem;
  border-radius: 0.9rem;
  padding: 0.5rem;
}

.numbers {
  border-radius: 0.6rem;
  margin: 0.2rem;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
