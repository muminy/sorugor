<template>
  <component :is="tag" :class="size">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'CustomText',
  props: {
    tag: {
      type: String,
      default: 'span'
    },
    size: {
      type: String,
      default: 'normal',
      validator: function(value) {
        return (
          ['normal', 'small', 'xsmall', 'xnormal', 'xxnormal'].indexOf(
            value
          ) !== -1
        )
      }
    }
  }
}
</script>

<style scoped>
.normal {
  font-size: 14px;
}
.small {
  font-size: 12px;
}
.xsmall {
  font-size: 10px;
}
.xnormal {
  font-size: 18px;
}
.xxnormal {
  font-size: 24px;
}
</style>
