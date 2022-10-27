<script>
import ReportCard from '../components/ReportCard.vue';
import StudentDetails from '../components/StudentDetails.vue';
import StudentsList from '../components/StudentsList.vue';
import EnrollmentSummary from '../components/EnrollmentSummary.vue';

export default {
  name: 'ReportPage',
  components: {
    ReportCard,
    StudentDetails,
    StudentsList,
    EnrollmentSummary,
  },
};
</script>

<template>
  <section class="report-page">
    <StudentsList />
    <div class="report">
    <StudentDetails />
    <EnrollmentSummary />
     </div>
     <ReportCard />
  </section>
</template>

<style scoped>
.report-page {
  margin-right: 1rem;
  background: white;
  border-radius: 1.25rem;
  width: 100%;
  padding: 2rem;
  display: grid;
  grid-template-columns: 20% 15% 65%;
  grid-column-gap: 0.8rem;
}
.report {
    display: grid;
    grid-template-rows: 40% 58%;
    grid-row-gap: 0.6rem;
}
</style>