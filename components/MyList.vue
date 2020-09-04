<template>
  <div>
    <div class="tw-flex tw-flex-wrap tw-items-center tw-justify-around">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="tw-w-1/2 tw-px-4 tw-pt-3 tw-pb-1 tw-rounded tw-cursor-pointer lg:tw-w-1/4 hover:tw-bg-blue-800"
        @click="view_profile(item.path)"
      >
        <div class="tw-flex tw-flex-col tw-items-center tw-justify-center">
          <image-card :image-src="item.image_src" :alt="item.name"></image-card>
          <div class="tw-mt-3 tw-text-center make--pointer">
            <p class="tw-font-serif tw-text-white">{{ item.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageCard from '@/components/ImageCard.vue'

export default {
  name: 'MyList',
  components: {
    'image-card': ImageCard,
  },
  props: {
    // eslint-disable-next-line vue/prop-name-casing
    Title: {
      type: String,
      default: '',
    },
    // eslint-disable-next-line vue/require-default-prop
    items: Array,
    photos: Boolean,
    links: Boolean,
  },
  data() {
    return {
      key: 'val',
    }
  },
  methods: {
    view_profile(path) {
      this.$router.push(path)
    },
  },
}
</script>

<style scoped>
.profile_image {
  height: 200px;
}
</style>
