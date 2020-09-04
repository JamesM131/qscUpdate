<template>
  <v-container class="tw-py-10 container-important">
    <div
      class="tw-flex tw-items-center tw-justify-center tw-h-full tw-overflow-auto make--secondary"
    >
      <div
        class="tw-flex tw-flex-col tw-w-full tw-h-full"
        :class="{
          'tw-justify-top': justify_top,
          'tw-justify-center': !justify_top,
        }"
      >
        <slot></slot>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  computed: {
    justify_top() {
      return this.$route.path.includes('areas-of-practice')
    },
  },
}
</script>

<style scoped lang="stylus">
@import '../assets/styles/global.styl';

.container-important {
  min-height: 1rem;
}

.main-container {
  width: 100%;
  overflow: hidden;
}

@media (min-width: 960px) {
  .container-important {
    max-width: 1100px;
  }
}

@media (min-width: 1264px) {
  .container-important {
    max-width: 1185px;
  }
}

@media (min-width: 1904px) {
  .container-important {
    max-width: 1485px;
  }
}
</style>
