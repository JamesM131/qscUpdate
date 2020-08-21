<template>
  <v-container class="container-important">
    <v-row
      justify="center"
      align="center"
      class="lg:tw-h-128 make--secondary tw-overflow-auto"
    >
      <v-col cols="12" class="tw-h-full">
        <slot></slot>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style scoped lang="stylus">
@import '../assets/styles/global.styl';

.main-container {
  width: 100%;
  overflow: hidden;
}

@media (min-width: 960px) {
  .container {
    max-width: 1100px;
  }
}

@media (min-width: 1264px) {
  .container {
    max-width: 1185px;
  }
}

@media (min-width: 1904px) {
  .container {
    max-width: 1785px;
  }
}
</style>
