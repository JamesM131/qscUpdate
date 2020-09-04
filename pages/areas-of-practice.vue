<template>
  <div
    id="top-level"
    class="tw-flex tw-flex-col tw-items-center tw-justify-between"
  >
    <div class="tw-flex tw-w-11/12 tw-mt-3 tw-overflow-x-scroll">
      <div
        v-for="(item, index) in areas"
        :key="index"
        class="px-2 pt-0 pb-3 mx-0 mt-0 mb-3 item_box"
      >
        <h1
          class="px-0 mx-0 area_text make--pointer hover:tw-text-white"
          :class="{ strong_text: active_area === item }"
          @click="change_area(item)"
        >
          {{ item }}
        </h1>
      </div>
    </div>

    <MyList
      id="hello"
      :items="barristers_for_area2"
      :photos="true"
      :links="true"
      class="tw-self-center tw-w-full tw-mt-2"
    ></MyList>
  </div>
</template>

<script>
import axios from 'axios'
import MyList from '../components/MyList'

export default {
  name: 'PracticeAreas',
  components: { MyList },
  async fetch() {
    await axios
      .get('https://api.qsc.com.au/index.php?rest_route=/wp/v2/barrister')
      .then((res) => {
        const barristers = res.data.map((post) => {
          return {
            name: post.title.rendered,
            image_src: post.image.guid,
            path: 'barristers/' + post.slug,
            areas: post.areas_of_practice.map((aop) => aop.post_title),
          }
        })

        const AreasDuped = barristers.map((barrister) => barrister.areas).flat()

        const areas = Array.from(new Set(AreasDuped)).sort()

        this.areas = areas
        this.active_area = areas[0]
        this.barristers = barristers
      })
  },
  data() {
    return {
      areas: [],
      active_area: '',
      barristers: [],
      areas2: [
        'Appeals',
        'Bankruptcy and Insolvency',
        'Building and Construction',
        'Coronial Inquests',
        'Commercial Litigation and Advice',
        'Constitutional and Administrative Law',
        'Corporations',
        'Contract Law',
        'Consumer Law',
        'Crime',
        'Defamation',
        'Equity',
        'Environment, Planning and Strata Law',
        'Family Law-Property & Children',
        'Land Law',
        'Local Court',
        'Migration',
        'Partnership Law',
        'Professional Negligence & Insurance Law',
        'International Law',
        'Shipping Law',
        'Taxation & Revenue',
        'Wills, Estates & Family Provision Claims',
      ],
      active_area2: 'Appeals',
      barristers2: [
        {
          name: 'Tom Davie',
          path: 'barristers/tom-davie',
          picture: 'tom-davie',
          areas: [
            'Appeals',
            'Corporations',
            'Bankruptcy and Insolvency',
            'Crime',
            'Migration',
          ],
        },
        {
          name: 'Charles Alexander',
          path: 'barristers/charles-alexander',
          picture: 'charles-alexander',
          areas: [
            'Appeals',
            'Corporations',
            'Land Law',
            'Contract Law',
            'Defamation',
            'Migration',
          ],
        },
        {
          name: 'Fiona Sinclair',
          path: 'barristers/fiona-sinclair',
          picture: 'fiona-sinclair',
          areas: [
            'Corporations',
            'Bankruptcy and Insolvency',
            'Land Law',
            'Contract Law',
            'Defamation',
          ],
        },
        {
          name: 'Tristan Bohrs',
          path: 'barristers/tristan-bohrs',
          picture: 'tristan-godwin',
          areas: [
            'Appeals',
            'Corporations',
            'Land Law',
            'Contract Law',
            'Migration',
          ],
        },
      ],
    }
  },
  computed: {
    posts() {
      return this.$site.pages.filter((page) => {
        return /barristers\/./.test(page.path)
        // return page.path.includes("barristers");
      })
    },
    barristers_for_area2() {
      return this.barristers.filter((barrister) => {
        return barrister.areas.includes(this.active_area)
      })
    },
    barristers_for_area() {
      return this.posts.filter((obj) => {
        return obj.frontmatter.practice_areas.includes(this.active_area)
      })
    },
  },
  methods: {
    change_area(area) {
      this.active_area = area
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '../assets/styles/global.styl';

.item_box {
  min-width: 200px;
  max-width: 500px;
  display: flexbox;
}

.mybox {
  width: 1000px;
}

.area_text {
  width: 100%;
  font-size: 20px;
  text-align: center;
  color: main_blue;
  font-family: 'Times New Roman', Times, serif;
}

.strong_text {
  color: white;
}
</style>
