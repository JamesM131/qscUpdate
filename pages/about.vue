<template>
  <div>
    <div
      class="tw-flex tw-items-center tw-flex-wrap tw-justify-center tw-mx-px tw-shadow-2xl tw-h-auto lg:tw-h-110 lg:tw-m-20"
      style="background-color: #12394e;"
    >
      <div class="tw-w-full lg:tw-w-5/12">
        <div
          class="tw-text-white tw-text-6xl tw-uppercase tw-tracking-wider tw-font-extrabold tw-text-center lg:tw-pl-24 lg:tw-text-left"
        >
          About
          <br />Us
        </div>
      </div>
      <div class="tw-w-full lg:tw-w-2/12">
        <div class="vertical-line tw-hidden lg:tw-block"></div>
        <div
          class="horizontal-line tw-flex tw-mx-auto tw-text-center lg:tw-hidden"
        ></div>
      </div>
      <div
        class="tw-w-full lg:tw-w-5/12 tw-overflow-y-scroll tw-text-justify tw-p-8 lg:tw-pr-20 lg:tw-text-left"
      >
        <!-- eslint-disable-next-line  -->
        <div class="tw-text-white" v-html="content.about"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async fetch() {
    await axios
      .get('https://api.qsc.com.au/index.php?rest_route=/wp/v2/posts')
      .then((res) => {
        const AboutPost = res.data.filter((post) => post.slug === 'about-us')[0]
        const AboutMessage = AboutPost.content.rendered
        this.content.about = AboutMessage
      })
  },
  data() {
    return {
      content: {
        about: '',
        first:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis orci, enim, erat pretium dui. Mauris nibh non eu et, consequat vitae, semper blandit mauris.',
        second:
          'Pharetra tellus quis volutpat at nisl ut cursus sit. Dui sit ultricies mattis diam dolor nunc. Posuere pharetra praesent quam quis cras magna elit. Maecenas',
        third:
          'Pharetra tellus quis volutpat at nisl ut cursus sit. Dui sit ultricies mattis diam dolor nunc. Posuere pharetra praesent quam quis cras magna elit. Maecenas',
      },
    }
  },
}
</script>

<style lang="stylus" scoped>
@import '../assets/styles/global.styl';

.with--border {
  border: 1px solid white;
  border-radius: 3%;
}

.main--section {
  height: 60vh;
  overflow-y: scroll;
}

.big-heading {
  font-size: 70px;
  font-weight: 800;
  text-align: left;
  display: inline-block;
  color: #F0F8FF !important;
}

.main-card {
  background: #12394E;
  padding: 10px 0 0 30px;
  height: 60vh;
  width: 80%;
  overflow-y: scroll;
  justify-content: center;
}

.vertical-line {
  width: 2px;
  background-color: #CDD2D3;
  height: 400px;
  display: inline-block;
  text-align: center;
}

.horizontal-line {
  height: 2px;
  background-color: #CDD2D3;
  width: 80%;
  display: inline-block;
  text-align: center;
}

.card-containers {
  text-align: center;
  height: 100%;
}

.height-100 {
  height: 100%;
}

.width-100 {
  width: 100%;
}

.card-flex {
  justify-content: center;
}
</style>
