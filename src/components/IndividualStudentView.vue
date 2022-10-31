<script>
import StudentMetrics from './StudentMetrics.vue';
import VIcon from './VIcon.vue';

export default {
  name: 'IndividualStudentView',
  components: {
    StudentMetrics,
    VIcon,
  },
  props: {
    selectedStudent: {
      type: Object,
      required: true,
    },
  },
  computed: {
    problemsAnalyzed() {
      const { sessionProgress } = this.selectedStudent;
      const analyzed = sessionProgress.reduce(
        (result, { progress }) => {
          if (!Array.isArray(progress)) {
            return result;
          }
          const newResult = {
            ...result,
          };
          let correct = 0;
          let totalTimeTakenCorrect = 0;
          let inCorrect = 0;
          let totalTimeTakenInCorrect = 0;
          const questionTypes = {};
          const questionLevels = {};

          for (let i = 0; i < progress.length; i += 1) {
            if (progress[i].is_correct) {
              correct += 1;
              totalTimeTakenCorrect += progress[i].time_taken;
            } else {
              inCorrect += 1;
              totalTimeTakenInCorrect += progress[i].time_taken;
            }

            if (questionTypes[progress[i].question_type.toLowerCase()] === undefined) {
              questionTypes[progress[i].question_type.toLowerCase()] = 1;
            } else {
              questionTypes[progress[i].question_type.toLowerCase()] += 1;
            }

            if (questionLevels[progress[i].question_level] === undefined) {
              questionLevels[progress[i].question_level] = 1;
            } else {
              questionLevels[progress[i].question_level] += 1;
            }
          }

          newResult.correct += correct;
          newResult.inCorrect += inCorrect;
          newResult.totalTimeTakenCorrect += totalTimeTakenCorrect;
          newResult.totalTimeTakenInCorrect += totalTimeTakenInCorrect;
          Object.entries(questionLevels).forEach(([key, value]) => {
            if (newResult.questionLevels[key] === undefined) {
              newResult.questionLevels[key] = value;
            } else {
              newResult.questionLevels[key] += value;
            }
          });

          Object.entries(questionTypes).forEach(([key, value]) => {
            if (newResult.questionTypes[key] === undefined) {
              newResult.questionTypes[key] = value;
            } else {
              newResult.questionTypes[key] += value;
            }
          });
          return newResult;
        },
        {
          correct: 0,
          totalTimeTakenCorrect: 0,
          inCorrect: 0,
          totalTimeTakenInCorrect: 0,
          questionTypes: {},
          questionLevels: {},
        }
      );
      // Avergaes
      analyzed.averageTimeCorrect = (analyzed.totalTimeTakenCorrect / analyzed.correct).toFixed(2);
      analyzed.averageTimeInCorrect = (analyzed.totalTimeTakenInCorrect / analyzed.inCorrect).toFixed(2);
      analyzed.averageTimePerQuestion = (
        (analyzed.totalTimeTakenInCorrect + analyzed.totalTimeTakenCorrect) /
        (analyzed.correct + analyzed.inCorrect)
      ).toFixed(2);
      // Rounding
      analyzed.totalTimeTakenInCorrect = analyzed.totalTimeTakenInCorrect.toFixed(2);
      analyzed.totalTimeTakenCorrect = analyzed.totalTimeTakenCorrect.toFixed(2);
      return analyzed;
    },
  },
};
</script>

<template>
  <div class="wrapper d-flex justify-content-between">
    <div class="student-heading">
      <div class="student-picture">
        <VIcon name="user-solid-circle" />
        <div class="name">{{ `${selectedStudent.first_name} ${selectedStudent.last_name}` }}</div>
        <div class="name">Student ID: {{ selectedStudent.id }}</div>
        <div v-if="selectedStudent.email" class="name">Email: {{ selectedStudent.email }}</div>
      </div>
    </div>
    <StudentMetrics :problems-analyzed="problemsAnalyzed" />
  </div>
</template>

<style scoped>
.wrapper {
}

.student-heading {
  background: #6e6e6e;
  border-radius: 20px;
  grid-template-rows: 1fr;
  width: 25rem;
  padding: 2rem;
  margin-right: 1.5rem;
}

.student-picture {
  font-size: 9rem;
  display: grid;
  justify-content: center;
  color: #d9d9d9;
  border-radius: 4rem;
  justify-items: center;
  align-content: center;
  padding-top: 0.5rem;
}

.name {
  justify-self: center;
  font-size: 1.2rem;
  color: white;
}
</style>
