<template>
  <v-hover>
    <div
      slot-scope="{ hover }"
      class="pa-0 ma-3 nav-card pointer"
      :class="`elevation-${hover ? 20 : 2}`"
      :style="{ backgroundImage: 'url(/' + image + ')' }"
      role="button"
      @click="link_click(path)"
    >
      <v-row
        justify="center"
        align="center"
        class="tw-mx-0"
        :class="{ 'nav-card-strong': hover, 'nav-card': !hover }"
      >
        <v-col cols="12">
          <h1 class="tw-text-gray-100 text-shadow-lg">
            <slot></slot>
          </h1>
        </v-col>
      </v-row>
    </div>
  </v-hover>
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

<style lang="stylus" scoped>
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

.nav-card-strong {
  height: 150px;
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(12, 130, 147, 0.8);
}

.pointer {
  cursor: pointer;
}
</style>
