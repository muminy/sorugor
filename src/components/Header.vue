<template>
  <nav class="navbar navbar-expand-lg navbar-light ">
    <Container>
      <router-link to="/">
        <LogoIcon size="26" color="#0d6efd" />
      </router-link>
      <button
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <MenuIcon size="24px" color="#212121" />
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="menu_list flex">
          <router-link to="/about">
            <CustomText class="menu__link aic">Sınavlar</CustomText>
          </router-link>
          <router-link to="/ders">
            <CustomText class="menu__link aic active">Dersler</CustomText>
          </router-link>
          <router-link to="/ders">
            <CustomText class="menu__link aic">Yol haritası</CustomText>
          </router-link>
        </div>
        <div class="flex aic">
          <router-link class="flex fullwidth" to="/puan-hesapla">
            <CustomText tag="div" class="calc ml0px">Puan hesapla</CustomText>
          </router-link>
        </div>
      </div>
    </Container>
  </nav>
</template>

<script>
import LogoIcon from '../icons/logo-icon'
import MenuIcon from '../icons/menu-icon'
import CustomText from './CustomText'
import Container from './Container'
export default {
  name: 'Header',
  components: {
    LogoIcon,
    CustomText,
    Container,
    MenuIcon
  },
  props: {
    size: {
      type: Number,
      default: 20
    }
  }
}
</script>

<style scoped>
header.header {
  padding: 28px 0px;
  display: flex;
  color: #ee451b;
  justify-content: space-between;
}
.menu_list {
  display: flex !important;
  margin-left: auto !important;
  margin-right: auto;
}
.menu_list > a > .menu__link {
  font-weight: 500;
  font-size: 14px;
  margin-left: 26px;
  margin-right: 26px;
  display: flex;
  color: #8f98a7;
}
.menu_list > a > .menu__link.active {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #212121;
}
.menu_list > a > .menu__link:hover {
  color: #2e2e2e;
  font-weight: 500;
  transition: all 0.25s ease 0s;
}

.calc-icon {
  margin-right: 6px;
}
.calc {
  padding: 7px 22px;
  border-radius: 6px;
  font-size: 14px;
  display: flex;
  align-items: center;
  font-weight: 500;
  margin-left: 16px;
  border: 1px solid #dbdbdb;
}
.ml0px {
  margin-left: 0px;
}
.calc:hover {
  background-color: #f7f7f7;
}
.navbar {
  padding-top: 30px !important;
  padding-bottom: 30px !important;
}
</style>
