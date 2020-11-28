<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :width="size"
    :height="size"
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path :fill="color" d="M12 8l6 6H6z" />
  </svg>
</template>

<script>
export default {
  name: 'IconUp',
  props: {
    color: {
      type: String,
      default: '#111'
    },
    size: {
      type: String,
      default: '20px'
    }
  }
}
</script>
