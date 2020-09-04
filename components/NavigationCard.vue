<template>
  <div
    class="tw-p-0 tw-m-3 tw-shadow-sm tw-cursor-pointer nav-card hover:tw-shadow-2xl"
    :style="{ backgroundImage: 'url(/' + image + ')' }"
    @click="link_click(path)"
  >
    <div class="tw-flex nav-card">
      <h1 class="tw-mx-auto tw-my-auto tw-text-gray-100 text-shadow-lg">
        <slot></slot>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationCard',
  props: {
    image: {
      type: String,
      default: '',
    },
    path: {
      type: String,
      default: '',
    },
  },
  methods: {
    link_click(path) {
      this.$router.push(path)
    },
  },
}
</script>

<style scoped>
h1 {
  color: white;
  font-size: 30px;
  text-align: center;
  text-justify: center;
}

.nav-card {
  height: 150px;
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(12, 130, 147, 0.5);
}
@media (hover: hover) {
  .nav-card:hover {
    height: 150px;
    background-size: cover;
    box-shadow: inset 0 0 0 2000px rgba(12, 130, 147, 0.8);
  }
}
</style>
