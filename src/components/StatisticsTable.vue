<script>
export default {
  name: 'StatisticsTable',
  props: {
    students: {
      type: Object,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['studentSelect'],
};
</script>

<template>
  <table class="table table-striped table-hover">
    <thead>
      <tr>
        <th id="student-id" scope="col"># ID</th>
        <th id="student-username" scope="col">User Name</th>
        <th id="student-fistname" scope="col">First name</th>
        <th id="student-lastname" scope="col">Last Name</th>
        <th id="student-email" scope="col">Email</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="student in students"
        :id="`student-id-${student.id}`"
        :key="student.id"
        class="table-row"
        @click="$emit('studentSelect', student.id)"
      >
        <th :headers="`student-id-${student.id} student-id`" scope="row">{{ student.id }}</th>
        <td :headers="`student-id-${student.id} student-username`">{{ student.username }}</td>
        <td :headers="`student-id-${student.id} student-firstname`">{{ student.first_name }}</td>
        <td :headers="`student-id-${student.id} student-lastname`">{{ student.last_name }}</td>
        <td :headers="`student-id-${student.id} student-email`">{{ student.email }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.table-row {
  cursor: pointer;
}
</style>
