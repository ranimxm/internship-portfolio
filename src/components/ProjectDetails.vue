<script lang="ts">
export default {
  props: {
    headerTitle: {
      type: String,
      required: true
    },
    headerSubtitle: {
      type: String,
      required: true
    },
    reverse: {
      type: Boolean,
      default: false
    },
    imageSrc: {
      type: String,
      required: true
    },
    imageClass: {
      type: String,
      default: "img"
    },
    applyImageClass: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<template>
  <section class="work-section" id="work">
    <div class="work-container">
      <div :class="['work-item', reverse ? 'reverse' : '']">
        <div class="right">
          <h3>{{ headerSubtitle }}</h3>
          <h1>{{ headerTitle }}</h1>
          <slot name="content"></slot>
        </div>
        <div class="left">
          <img :class="imageClass" :src="imageSrc" />
        </div>
      </div>
    </div>
  </section>
</template>
