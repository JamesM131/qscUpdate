<template>
  <div>
    <v-row justify="space-around" align="center">
      <v-col
        v-for="(item, index) in items"
        :key="index"
        cols="6"
        sm="3"
        class="hover:tw-bg-blue-800 tw-cursor-pointer tw-px-4 tw-pb-1 tw-pt-3 tw-rounded"
        @click="view_profile(item.path)"
      >
        <div class="tw-flex tw-flex-col tw-items-center tw-justify-center">
          <image-card :image-src="item.image_src" :alt="item.name"></image-card>

          <my-list-item
            :item="item.name"
            class="make--pointer tw-text-center tw-mt-3"
          ></my-list-item>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import MyListItem from '@/components/MyListItem.vue'
import ImageCard from '@/components/ImageCard.vue'

export default {
  name: 'MyList',
  components: {
    'my-list-item': MyListItem,
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
