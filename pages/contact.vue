<template>
  <div class="my-wrapper tw-relative">
    <v-btn
      outlined
      color="white"
      to="/barristers"
      class="tw-absolute tw-top-0 tw-left-0"
      >Back</v-btn
    >

    <v-layout row wrap style="height: 100%;" class="tw-px-2 tw-py-10">
      <div
        class="tw-flex tw-items-center tw-justify-center lg:tw-justify-start lg:tw-w-1/3 tw-w-full"
      >
        <img
          :src="clerk_image"
          :alt="clerk_name"
          class="profile-image tw-rounded"
        />
      </div>
      <div class="bounded-container tw-ml-5 tw-w-full lg:tw-w-4/12">
        <h1 class="white--text">{{ clerk_name }}</h1>

        <div class="my-wrapper tw-mt-5 tw-pr-5">
          <!-- eslint-disable  -->

          <div
            class="tw-text-white tw-whitespace-pre-wrap"
            v-html="content"
          ></div>
          <!-- eslint-enable -->
        </div>
      </div>

      <div
        class="tw-flex tw-flex-col tw-w-full lg:tw-w-auto tw-justify-around lg:tw-ml-8"
      >
        <div class="tw-h-1/3 tw-flex tw-flex-col tw-items-center tw-py-3">
          <div
            class="tw-rounded-full tw-flex-none tw-mb-2 tw-bg-white tw-h-16 tw-w-16 tw-flex tw-items-center tw-justify-center"
          >
            <v-icon
              class="tw-fill-current tw-text-blue-900"
              style="text-color: #12324d;"
              large
              >mdi-phone</v-icon
            >
          </div>
          <div class="tw-text-center">
            <div class="tw-text-white tw-align-middle">
              <span class="tw-text-sm tw-text-gray-300">Ph:</span>
              <span
                class="tw-font-bold tw-block md:tw-inline tw-text-xl tw-ml-1"
                >+61 2 9232 4671</span
              >
            </div>
            <div class="tw-text-white tw-align-middle">
              <span class="tw-text-sm tw-text-gray-300">Fax:</span>
              <span
                class="tw-font-bold tw-block md:tw-inline tw-text-xl tw-ml-1"
                >+61 2 9221 4951</span
              >
            </div>
            <div class="tw-text-white tw-align-middle">
              <span class="tw-text-sm tw-text-gray-300"
                >Document Exchange:</span
              >
              <span
                class="tw-font-bold tw-block md:tw-inline tw-text-xl tw-ml-1"
                >+DX 247 SYDNEY</span
              >
            </div>
          </div>
        </div>
        <div class="tw-bg-white tw-h-px tw-w-full"></div>
        <div
          class="tw-h-1/3 tw-flex tw-flex-col tw-justify-start tw-py-3 tw-items-center"
        >
          <div
            class="tw-rounded-full tw-flex-none tw-2 tw-text-center tw-bg-white tw-h-16 tw-w-16 tw-flex tw-items-center tw-justify-center"
          >
            <v-icon
              class="tw-fill-current tw-text-blue-900"
              style="text-color: #12324d;"
              large
              >mdi-email</v-icon
            >
          </div>
          <div
            class="tw-text-white tw-text-center tw-font-bold tw-text-xl tw-align-middle"
          >
            mwilson@qsc.com.au
            <br />
            <v-btn
              outlined
              color="white"
              small
              class="tw-mt-3 hover:tw-bg-blue-800"
              @click="mail"
              >Email Now</v-btn
            >
          </div>
        </div>
        <div class="tw-bg-white tw-h-px tw-w-full"></div>

        <div
          class="tw-h-1/3 tw-flex tw-flex-col tw-justify-start tw-py-3 tw-items-center"
        >
          <div
            class="tw-rounded-full tw-flex-none tw-bg-white tw-mb-2 tw-h-16 tw-w-16 tw-flex tw-items-center tw-justify-center"
          >
            <v-icon
              class="tw-fill-current tw-text-blue-900"
              style="text-color: #12324d;"
              large
              >mdi-home-city</v-icon
            >
          </div>
          <div class="tw-text-white tw-text-center tw-align-middle">
            <span class="tw-font-bold">
              Ground Floor, Beanbah Bld
              <br />235 Macquarie Street
            </span>
            <span class="tw-font-normal tw-text-sm tw-text-gray-300">
              <br />Sydney, NSW, 2000 <br />Australia
            </span>
          </div>
        </div>
      </div>
    </v-layout>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async fetch() {
    await axios
      .get('https://api.qsc.com.au/index.php?rest_route=/wp/v2/posts')
      .then((res) => {
        const ContactPost = res.data.filter(
          (post) => post.slug === 'contact-us'
        )[0]
        const ContactMessage = ContactPost.content.rendered
        this.clerk_image = ContactPost.acf.clerk_image.url
        this.clerk_name = ContactPost.acf.clerk_name
        this.content = ContactMessage
      })
  },
  data() {
    return {
      content: '',
      clerk_image: '',
      clerk_name: '',
      email: '1',
      phone: '2',
      fax: '3',
    }
  },
  methods: {
    mail() {
      //   let mail_link = "mailto:" + this.$page.frontmatter.email;
      const MailLink = 'mailto:' + 'mwilson@qsc.com.au'
      window.location.href = MailLink
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '../assets/styles/global.styl';

.my-wrapper {
  & >>> h1 {
    font-size: 40px;
  }

  for number in 1 .. 6 {
    & >>> h{number} {
      color: white;
    }
  }

  & >>> h3 {
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
  }

  & >>> p {
    color: white;
    margin-bottom: 2px !important;
  }

  & >>> ul {
    margin-top: -60px;
  }

  & >>> li {
    list-style-type: none;
    padding: 0;
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
    @media (min-width: 500px) {
      max-height: 70vh;
    }

    overflow-y: scroll;
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
  @media (min-width: 500px) {
    height: 500px;
    object-fit: cover;
  }
}

.my-content {
}

@media (max-width: 500px) {
  .contact_details {
    margin-left: -35px;
  }
}
</style>
