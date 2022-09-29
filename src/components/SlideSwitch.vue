<script>
export default {
  name: 'SlideSwitch',
};
</script>

<template>
  <div :class='$style.container'>
    <input v-bind="$attrs" type="checkbox" :class="$style.toggle" />
    <slot></slot>
  </div>
</template>

<style module>
.container {
  position: relative;
}

.toggle {
  --b1: #272d2d;
  --handleoffset: 1.95rem;
  --circlecolor: #dddddd;
  appearance: none;
  transition: background, box-shadow 0.2s ease-in-out;
  border-radius: 30px;
  cursor: pointer;
  border: var(--circlecolor) 5px solid;
  background-color: var(--circlecolor);
  box-shadow: calc(var(--handleoffset) * -1) 0 0 4px var(--b1) inset, 0 0 0 4px var(--b1) inset;
  margin: 0;
  width: 100%;
  height: 100%;

  &:checked,
  &[checked='true'],
  &[aria-checked='true'] {
    box-shadow: var(--handleoffset) 0 0 4px var(--b1) inset, 0 0 0 4px var(--b1) inset;
  }
}
</style>
