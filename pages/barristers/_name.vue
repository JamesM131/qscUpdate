<template>
  <div class="my-wrapper tw-relative">
    <v-btn
      outlined
      color="white"
      to="/barristers"
      class="tw-absolute tw-top-0 tw-left-0"
      >Back</v-btn
    >

    <div
      style="height: 100%;"
      class="tw-flex tw-flex-wrap md:tw-pr-10 tw-px-2 tw-py-10"
    >
      <div
        class="tw-flex tw-items-center tw-justify-center lg:tw-justify-start lg:tw-w-1/3 tw-w-full"
      >
        <img :src="image" :alt="name" class="profile-image tw-rounded" />
      </div>
      <div
        class="tw-w-full md:tw-w-5/12 tw-h-full lg:tw-h-auto bounded-container lg:tw-overflow-y-scroll tw-ml-5"
      >
        <h1 class="white--text">{{ name }}</h1>
        <v-flex
          xs12
          md2
          class="px-0 md:tw-mt-5 md:tw-ml-5 text-xs-center lg:tw-hidden tw-block"
        >
          <div
            class="tw-flex tw-justify-center lg:tw-justify-start contact_details"
          >
            <div class="tw-mr-2">
              <h2 class="white--text text-xs-right tw-text-lg">Email:</h2>
              <h2 class="white--text text-xs-right tw-text-lg">Phone:</h2>
              <h2 class="white--text text-xs-right tw-text-lg">Fax:</h2>
            </div>
            <div>
              <h2 class="white--text text-xs-left tw-text-lg">{{ email }}</h2>
              <h2 class="white--text text-xs-left tw-text-lg">{{ phone }}</h2>
              <h2 class="white--text text-xs-left tw-text-lg">{{ fax }}</h2>
            </div>
          </div>
          <v-layout align-top justify-center row wrap style="height: 70%;">
            <v-btn large class="my-5 make--primary" @click="mail"
              >Contact Me</v-btn
            >
          </v-layout>
        </v-flex>

        <div v-if="practice_areas.length" class="tw-mt-5">
          <h2 v-if="practice_areas.length" class="white--text tw-font-bold">
            Areas of Practice
          </h2>

          <div
            v-for="(item, index) in practice_areas"
            :key="index"
            class="tw-flex tw-flex-col tw-mt-1"
          >
            <div class="tw-flex tw-flex-row tw--mb-4">
              <div class="blu-circle"></div>
              <p class="white--text">{{ item }}</p>
            </div>
          </div>
        </div>

        <div class="my-wrapper tw-mt-5 tw-pr-5">
          <!-- eslint-disable  -->
          <div
            class="tw-text-white tw-whitespace-pre-wrap"
            v-html="content"
          ></div>
          <!-- eslint-enable  -->
        </div>
      </div>
      <div
        class="px-0 tw-w-full md:tw-w-2/12 md:tw-mt-5 md:tw-ml-5 text-xs-center tw-hidden lg:tw-block"
      >
        <div
          class="tw-flex tw-justify-center lg:tw-justify-start contact_details"
        >
          <div class="tw-mr-2">
            <h2 class="white--text text-xs-right tw-text-lg">Email:</h2>
            <h2 class="white--text text-xs-right tw-text-lg">Phone:</h2>
            <h2 class="white--text text-xs-right tw-text-lg">Fax:</h2>
          </div>
          <div>
            <h2 class="white--text text-xs-left tw-text-lg">{{ email }}</h2>
            <h2 class="white--text text-xs-left tw-text-lg">{{ phone }}</h2>
            <h2 class="white--text text-xs-left tw-text-lg">{{ fax }}</h2>
          </div>
        </div>
        <v-layout align-top justify-center row wrap style="height: 70%;">
          <v-btn large class="my-5 make--primary" @click="mail"
            >Contact Me</v-btn
          >
        </v-layout>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async fetch() {
    const vm = this
    await axios
      .get('https://api.qsc.com.au/index.php?rest_route=/wp/v2/barrister')
      .then((res) => {
        const barrister = res.data.filter(
          (post) => post.slug === vm.$route.params.name
        )[0]
        vm.image = barrister.image.guid
        vm.content = barrister.bio

        const areas = barrister.areas_of_practice.map((aop) => aop.post_title)
        this.practice_areas = areas

        this.email = barrister.email
        this.phone = barrister.phone_number
        this.fax = barrister.fax
        this.name = barrister.title.rendered
      })
  },
  data() {
    return {
      email: '',
      phone: '',
      fax: '',
      image: '',
      practice_areas: [],
      name: '',
      content: '',
      image2: '../assets/uploads/david_goodwin-228x361.jpg',
      practice_areas2: [
        'Appeals',
        'Banckruptcy and Insolvency',
        'Building and Construction',
        'Coronial Inquests',
      ],
      content2:
        'Consequuntur sit vitae harum eveniet amet cumque soluta nulla, delectus tenetur nesciunt omnis ad consectetur placeat veniam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, quos unde fugit ratione tenetur id voluptate debitis nulla quas possimus? Rem aliquam tempore itaque, doloremque fugit quae id sed natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptatem assumenda incidunt? Minima voluptatem facilis, iusto magnam inventore quidem illum maxime repudiandae laborum sapiente exercitationem praesentium corrupti porro provident officia! Consequuntur sit vitae harum eveniet amet cumque soluta nulla, delectus tenetur nesciunt omnis ad consectetur placeat veniam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, quos unde fugit ratione tenetur id voluptate debitis nulla quas possimus? Rem aliquam tempore itaque, doloremque fugit quae id sed natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptatem assumenda incidunt? Minima voluptatem facilis, iusto magnam inventore quidem illum maxime repudiandae laborum sapiente exercitationem praesentium corrupti porro provident officia!',
    }
  },
  methods: {
    mail() {
      const MailLink = 'mailto:' + this.email
      window.location.href = MailLink
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/global.styl';

.my-wrapper {
  & >>> div {
    font-size: 15px;
  }

  & >>> h1 {
    font-size: 40px;
  }

  for number in 1 .. 6 {
    & >>> h{number} {
      color: white;
    }
  }

  & >>> h2 {
    font-size: 25px;
    font-weight: bold;
    margin-top: 10px;
  }

  & >>> h3 {
    font-size: 23px;
    font-weight: bold;
    margin-top: 10px;
  }

  & >>> h4 {
    font-size: 17px;
    font-weight: bold;
    margin-top: 10px;
  }

  & >>> p {
    color: white;
    font-size: 15px;
  }

  & >>> ul {
    list-style-type: none;
    padding: 0;
    /* margin: 5px; */
    font-size: 15px;
    color: #fff;
    vertical-align: top !important;
  }

  & >>> .point {
    height: 10px;
    width: 10px;
    background-color: main_blue;
    border-radius: 50%;
    display: inline-block;
  }

  & >>> .bounded-container {
    @media (min-width: 1024px) {
      max-height: 70vh;
    }
  }

  & >>> li::before {
    content: '\A0';
    display: inline-block;
    background-color: #0c8293;
    height: 10px;
    width: 10px;
    margin-right: 10px;
    border-radius: 50%;
    margin-top: 6px;
  }
}

.blu-circle {
  background-color: #0c8293;
  height: 10px;
  width: 10px;
  margin-right: 10px;
  border-radius: 50%;
  margin-top: 6px;
}

.profile-image {
  @media (min-width: 1024px) {
    height: 500px;
    object-fit: cover;
  }
}

.my-content {
}

@media (max-width: 500px) {
  .contact_details {
  }
}
</style>
