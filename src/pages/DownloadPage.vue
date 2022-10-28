<script>
import StudentHeading from '../components/StudentHeading.vue';
import StudentMetrics from '../components/StudentMetrics.vue'; 

export default {
  name: 'DownloadPage',
  components: {
    StudentHeading,
    StudentMetrics,
  },
};
</script>

<template>
  <section class="download-page">
    <StudentHeading />
    <StudentMetrics />
  </section>
</template>

<style scoped>
.download-page {
  margin-right: 1rem;
  background: white;
  border-radius: 1.25rem;
  width: 100%;
  padding: 1rem;
  display: grid;
  grid-template-columns: 15% 85%;
  gap: 1rem;
}

</style>
