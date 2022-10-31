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
      typesOfQuestionChart: null,
      difficultiesOfQuestionChart: null,
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
              backgroundColor: ['rgb(54, 162, 235)', 'red'],
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
              const text = `${this.problemsAnalyzed.correct} / ${this.problemsAnalyzed.inCorrect}`;
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

      const qs = Object.values(this.problemsAnalyzed.questionTypes);
      const questionsLabels = Object.keys(this.problemsAnalyzed.questionTypes);

      this.typesOfQuestionChart = new Chart(chartEl, {
        type: 'doughnut',
        data: {
          labels: questionsLabels,
          datasets: [
            {
              label: 'Questions answered & total correct',
              data: qs,
              backgroundColor: ['rgb(54, 162, 235)', 'red', 'green', 'yellow', 'black', 'purple'],
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
              const { ctx } = chart;

              // this variable should be (correctquestions+"/"+totalquestions)
              ctx.save();
            },
          },
        ],
      });
    };
    const chart5 = (id) => {
      const chartEl = document.getElementById(id);

      const qs = Object.values(this.problemsAnalyzed.questionLevels);
      const questionsLabels = Object.keys(this.problemsAnalyzed.questionLevels);

      this.difficultiesOfQuestionChart = new Chart(chartEl, {
        type: 'doughnut',
        data: {
          labels: questionsLabels,
          datasets: [
            {
              label: 'Questions answered & total correct',
              data: qs,
              backgroundColor: ['rgb(54, 162, 235)', 'red', 'green', 'yellow', 'black', 'purple'],
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
              const { ctx } = chart;
              // this variable should be (correctquestions+"/"+totalquestions)
              ctx.save();
            },
          },
        ],
      });
    };

    chart1('myChart');
    chart3('myChart3');
    chart5('myChart5');
  },
  beforeUnmount() {
    if (this.totalNumberOfProblemsChart) {
      this.totalNumberOfProblemsChart.destroy();
    }
    if (this.typesOfQuestionChart) {
      this.typesOfQuestionChart.destroy();
    }
    if (this.difficultiesOfQuestionChart) {
      this.difficultiesOfQuestionChart.destroy();
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
      <div class="metrics-heading">TYPES OF QUESTIONS ANSWERED</div>
      <div class="numbers">
        <canvas id="myChart3" class="m-auto" width="300" height="300"></canvas>
      </div>
    </div>
    <div class="metrics">
      <div class="metrics-heading">DIFFICULTIES OF QUESTIONS ANSWERED</div>
      <div class="numbers">
        <canvas id="myChart5" class="m-auto" width="300" height="300"></canvas>
      </div>
    </div>
    <div class="metrics">
      <div class="metrics-heading">AVERAGE TIME TAKEN PER PROBLEM</div>
      <div class="numbers">{{ problemsAnalyzed.averageTimePerQuestion }} secs</div>
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
  padding: 0.2rem;
  font-size: 1.25rem;
}

.metrics-heading {
  display: grid;
  justify-content: center;
  align-content: center;
  background-color: #446894;
  font-size: 0.9rem;
  border-radius: 0.9rem;
  padding: 0.5rem;
  color: white;
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
