<template>
  <v-app>
    <my-toolbar></my-toolbar>
    <v-main class="with--image main--content">
      <div class="tw-h-full tw-flex tw-items-center tw-justify-center">
        <div class="justify-center tw-h-full tw-w-full">
          <transition :key="$route.path" appear name="fade" mode="out-in">
            <main-container
              class="tw-overflow-y-auto tw-overflow-x-hidden tw-h-full tw-flex tw-flex-col tw-justify-center"
            >
              <nuxt keep-alive />
            </main-container>
          </transition>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import MyToolbar from '~/components/MyToolbar.vue'
import MainContainer from '~/components/MainContainer.vue'

export default {
  components: {
    'my-toolbar': MyToolbar,
    'main-container': MainContainer,
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>

<style scoped lang="stylus">
@import '../assets/styles/global.styl';

.main-container {
  width: 100%;
  overflow: hidden;
}

.toolbar {
  height: 7;
}

.main--content {
  min-height: 93vh;
}

.with--image {
  background-color: rgba(12, 130, 147, 0.5);
  background-image: url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80');
  background-size: cover;
  background-blend-mode: lighten;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: 0.5s;
}

.small--header {
  font-size: 1.15rem;
  font-weight: 400;
}
</style>
