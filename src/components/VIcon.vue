<script>
export default {
  name: 'VIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <i :class="`icon-${name}`" />
</template>

<style scoped></style>
