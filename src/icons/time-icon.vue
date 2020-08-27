<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style="margin-top: 1px"
    viewBox="0 0 24 24"
    :width="size"
    :height="size"
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      :fill="color"
      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z"
    />
  </svg>
</template>
<script>
export default {
  name: 'UsersIcon',
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