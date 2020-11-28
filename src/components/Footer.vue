<template>
  <footer>
    <Container>
      <div class="flex aic">
        <router-link to="/">
          <LogoIcon size="20px" color="#212121" />
        </router-link>
        <CustomText class="copr">Tüm hakları saklıdır</CustomText>
      </div>
    </Container>
  </footer>
</template>

<script>
import Container from './Container'
import CustomText from './CustomText'
import LogoIcon from '../icons/logo-icon'
export default {
  name: 'Footer',
  components: {
    Container,
    LogoIcon,
    CustomText
  }
}
</script>

<style scoped>
footer {
  padding: 20px 0px;
  padding-top: 60px;
}
.social_list {
  padding: 18px 0px;
  margin-bottom: 18px;
  border-bottom: 1px solid #eeeeee;
}
.link_social {
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
}
.copr {
  font-size: 12px;
  margin-left: 10px;
  margin-bottom: 0px;
  font-weight: 500;
}
</style>
