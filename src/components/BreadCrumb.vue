<script>
export default {
  name: 'BreadCrumb',
  computed: {
    links() {
      const { path } = this.$route;
      return path;
    },
  },
};
</script>

<template>
  <div class='bread-crumbs'>{{ links }}</div>
</template>

<style scoped>
.bread-crumbs {
  background: #d9d9d9;
  border-radius: 1.875rem;
  font-size: 0.75rem;
  min-width: 10ch;
  padding: .5rem 0.75rem;
}
</style>
