<template>
  <div class="tw-flex tw-flex-col tw-justify-center tw-h-full tw-px-3">
    <MyList :items="posts" :photos="true" :links="true"></MyList>
  </div>
</template>

<script>
import axios from 'axios'
import MyList from '~/components/MyList'

export default {
  name: 'BarristerList',
  components: { MyList },
  async fetch() {
    await axios
      .get('https://api.qsc.com.au/index.php?rest_route=/wp/v2/barrister')
      .then((res) => {
        this.posts = res.data.map((post) => {
          return {
            name: post.title.rendered,
            image_src: post.image.guid,
            path: 'barristers/' + post.slug,
          }
        })
      })
  },
  data() {
    return {
      names: [],
      posts: [],
      posts2: [
        {
          name: 'Tom Davie',
          path: 'barristers/tom-davie',
          picture: 'tom-davie',
        },
        {
          name: 'Charles Alexander',
          path: 'barristers/charles-alexander',
          picture: 'charles-alexander',
        },
        {
          name: 'Fiona Sinclair',
          path: 'barristers/fiona-sinclair',
          picture: 'fiona-sinclair',
        },
        {
          name: 'Tristan Bohrs',
          path: 'barristers/tristan-bohrs',
          picture: 'tristan-godwin',
        },
      ],
      wp_posts: [],
    }
  },
}
</script>

<style lang="stylus" scoped>
h1 {
  font-size: 30px;
  font-weight: bold;
  color: white;
}
</style>
