<script>
import axios from 'axios';
import Loading from 'vue-loading-overlay';
import IndividualStudentView from '../components/IndividualStudentView.vue';
import StatisticsTable from '../components/StatisticsTable.vue';

export default {
  name: 'StatisticsPage',
  components: {
    Loading,
    StatisticsTable,
    IndividualStudentView,
  },
  inject: ['userData'],
  data() {
    return {
      isLoading: true,
      students: [],
      selectedStudent: null,
      selectedStudentReport: null,
      axios: null,
    };
  },
  computed: {},
  mounted() {
    this.axios = axios.create({
      headers: {
        Authorization: `token ${this.userData?.token}`,
      },
    });
    this.getStudents();
  },
  methods: {
    async getStudents() {
      this.isLoading = true;
      const result = await this.axios.get('/api/students/');
      this.students = result.data;
      this.isLoading = false;
    },
    async handleSelectStudent(studentId) {
      try {
        this.isLoading = true;
        const selectedStudentInfo = this.students.find(({ id }) => studentId === id);
        const studentReportApi = await this.axios.get('/api/student-report/', {
          params: {
            username: selectedStudentInfo.username,
          },
        });
        this.isLoading = false;
        this.selectedStudent = studentReportApi.data;
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<template>
  <section class="statistics-page">
    <div class="container-fluid w-100">
      <Loading v-model:active="isLoading" loader="bars" :lock-scroll="true" />
      <StatisticsTable
        v-if="!selectedStudent"
        :students="students"
        :is-loading="isLoading"
        @student-select="handleSelectStudent"
      />
      <IndividualStudentView v-else :selected-student="selectedStudent" />
    </div>
  </section>
</template>

<style scoped>
.statistics-page {
  margin-right: 1rem;
  background: white;
  border-radius: 1.25rem;
  width: 100%;
  padding: 1rem;
}
</style>
