<script>
// import VIcon from './VIcon.vue';
import ProgressStudentAvatar from './ProgressStudentAvatar.vue';

export default {
  name: 'ProgressMap',
  components: {
    ProgressStudentAvatar,
  },
  props: {
    studentsData: {
      type: Object,
      required: true,
    },
    questionSet: {
      type: Array,
      required: true,
    },
  },
  computed: {
    students() {
      return Object.values(this.studentsData);
    },
  },
  data() {
    return {
      progress: 0,
    };
  },
  methods: {
    getStudentProgress(student) {
      return (student.sessionProgress.length / this.questionSet.length) * 100;
    },
  },
};
</script>

<template>
  <div class="progress-map">
    <p class="progress-title">Progress Map</p>
    <div class="progress-map__bar">
      <div class="bar"></div>
      <ProgressStudentAvatar
        v-for="student in students"
        :key="student[0]"
        :progress="getStudentProgress(student)"
        :student="student"
      />
    </div>
  </div>
</template>

<style scoped>
.progress-map {
  background: #d9d9d9;
  border-radius: 20px;
  width: 36.5rem;
}

.progress-title {
  padding-left: 50px;
  font-size: 1.125rem;
  margin-bottom: 10rem;
}

.progress-map__bar {
  position: relative;
  margin: 0 1.375rem;
}

.bar {
  width: 33.75rem;
  height: 0;
  color: #6f6f6f;
  border: 9px solid #6f6f6f;
  border-radius: 40px;
}
</style>
