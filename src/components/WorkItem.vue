<script lang="ts">
export default {
  props: {
    reverse: {
      type: Boolean,
      default: false
    },
    imageSrc: {
      type: String,
      required: true
    }
  }
};
</script>

<template>
  <div :class="['work-item', reverse ? 'reverse' : '']">
    <div class="right">
      <slot name="content"></slot>
    </div>
    <div class="left">
      <img :src="imageSrc" />
    </div>
  </div>
</template>
