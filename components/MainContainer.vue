<template>
  <v-container class="tw-py-10 container-important">
    <v-row
      justify="center"
      align="center"
      class="tw-h-full tw-overflow-auto make--secondary"
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
