<template>
  <div>
    <p class="item">{{ item }}</p>
  </div>
</template>

<script>
export default {
  name: 'MyListItem',
  props: {
    item: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped lang="stylus">
.item {
  color: white;
  font-family: 'Times New Roman', Times, serif;
}
</style>
