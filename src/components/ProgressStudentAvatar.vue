<script>
import tippy from 'tippy.js';

export default {
  name: 'ProgressStudentAvatar',
  props: {
    student: {
      type: Object,
      required: true,
    },
    progress: {
      required: true,
      type: Number,
    },
  },
  data() {
    return {
      tippy: null,
    };
  },
  computed: {
    // Return percentage of the width of the whole progress bar
    offset() {
      return this.progress;
    },
    studentInitial() {
      return this.student?.fullName?.charAt(0) || '';
    },
    id() {
      return `student-avatar-${this.student.fullName.replace(/\s/, '-').toLowerCase()}`;
    },
  },
  mounted() {
    this.tippy = tippy(`#${this.id}`, {
      content: this.student.fullName,
      animation: 'scale',
    });
  },
  beforeUnmount() {
    this.tippy.destroy();
  },
};
</script>

<template>
  <div :id="id" class="student-avatar" :style="`left: calc(${offset}% - 1.25rem)`">
    {{ studentInitial }}
  </div>
</template>

<style scoped>
.student-avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  text-transform: capitalize;
  width: 2.5rem;
  height: 2.5rem;
  background-color: rgba(151, 151, 151, 1);
  border-radius: 50%;
  position: absolute;
  top: calc(100% + 0.3125rem);
  transition: left ease-in-out 250ms;
}
</style>
