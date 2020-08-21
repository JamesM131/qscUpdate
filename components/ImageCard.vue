<template>
  <div>
    <img
      :src="imageSrc"
      :alt="alt"
      class="tw-rounded tw-h-48 tw-object-cover tw-object-center tw-self-center tw-cursor-pointer"
    />
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['imageSrc', 'alt'],
}
</script>
