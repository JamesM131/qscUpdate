<template>
  <v-toolbar class="tw-flex-initial toolbar tw-justify-between">
    <v-toolbar-title class="headline text-uppercase">
      <span class="tw-hidden lg:tw-block">Queen's Square Chambers</span>
      <span class="tw-block lg:tw-hidden tw-text-center">QSC</span>
    </v-toolbar-title>

    <v-spacer class></v-spacer>

    <v-toolbar-items
      v-for="(name, index) in pages"
      :key="index"
      class="tw-hidden xl:tw-block"
    >
      <v-btn text :to="name">{{ index }}</v-btn>
    </v-toolbar-items>

    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <div class="xl:tw-hidden">
          <v-icon aria-label="menu" v-on="on">mdi-menu</v-icon>
        </div>
      </template>
      <v-list>
        <v-list-item v-for="(name, index) in pages" :key="index">
          <v-btn text :to="name" nuxt>{{ index }}</v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
export default {
  name: 'MyToolbar',
  data() {
    return {
      pages: {
        Home: '/',
        About: '/about',
        Barristers: '/barristers',
        'Areas Of Practice': '/areas-of-practice',
        Contact: '/contact',
      },
      isOpen: true,
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) {
            document.body.style.setProperty('overflow', 'hidden')
          } else {
            document.body.style.removeProperty('overflow')
          }
        }
      },
    },
  },
  methods: {
    open() {
      this.isOpen = true
      this.$nextTick(() => {
        this.$refs.closeButton.focus()
      })
    },
    close() {
      this.isOpen = false
      this.$nextTick(() => {
        this.$refs.openButton.focus()
      })
    },
  },
}
</script>
