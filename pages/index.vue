<template>
  <div class="tw-overflow-hidden">
    <div class="tw-flex tw-items-center tw-justify-center">
      <div class="mx-auto">
        <img src="~/assets/logo.png" alt="Queen's Square Chambers Logo" />
      </div>
    </div>

    <div class="tw-flex tw-justify-center">
      <div class="tw-w-9/12 tw-pb-0 tw-mt-4 tw-mb-4">
        <div
          class="tw-px-10 tw-py-4 tw-mt-2 tw-bg-gray-100 tw-rounded tw-shadow min_height"
        >
          <h1 class="text-center tw-mb-3 tw-text-2xl tw-font-extrabold">
            Welcome
          </h1>
          <!-- eslint-disable  -->
          <div class="tw-text-gray-800" v-html="home"></div>
          <!-- eslint-enable -->
        </div>
      </div>
    </div>

    <div class="tw-flex tw-items-center tw-justify-center tw-pb-4">
      <div
        v-for="(card, key) in navigation_cards"
        :key="key"
        class="tw-w-full tw-px-10 lg:tw-w-4/12"
      >
        <navigation-card :image="card.image" :path="card.path">{{
          key
        }}</navigation-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import NavigationCard from '~/components/NavigationCard'

export default {
  async fetch() {
    await axios
      .get('https://api.qsc.com.au/index.php?rest_route=/wp/v2/posts')
      .then((res) => {
        const WelcomePost = res.data.filter(
          (post) => post.slug === 'welcome'
        )[0]
        const WelcomeMessage = WelcomePost.content.rendered
        this.home = WelcomeMessage
      })
  },

  data() {
    return {
      home: '',
      navigation_cards: {
        Barristers: {
          image: 'wig.jpg',
          path: '/barristers',
        },

        'Areas of Practice': {
          image: 'bookshelf.jpg',
          path: '/areas-of-practice',
        },
        Contact: {
          image: 'paper.jpg',
          path: '/contact',
        },
      },
    }
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
@import '../assets/styles/global.styl';

h1 {
  color: main_blue;
}

.my-container {
  min-height: 80vh;
  width: 100%;
  overflow: hidden;
  background-size: cover;
  background-color: rgba(23, 70, 99, 1);
}

.min_height {
  min-height: 250px;
}
</style>
