<template>
  <div class="TitleHeader">
    <Container>
      <slot />
    </Container>
  </div>
</template>

<script>
import Container from "./Container";
export default {
  name: "TitleHeader",
  components: {
    Container,
  },
};
</script>

<style scoped>
.TitleHeader {
  border-top: 1px solid #06102711;
  border-bottom: 1px solid #06102711;
  color: #061027;
  border-radius: 0px;
  padding: 13px 0px;
}
</style>
