<template>
  <div class="about">
    <TitleHeader>
      <CustomText tag="b" class="anormal bigFOnt"
        >Puan hesapla</CustomText
      >
    </TitleHeader>
    <Container>
      <div class="list_of_puan">
        <CustomText tag="h2" class="header_tur"
          >Sınav Türü</CustomText
        >
        <CustomText tag="p" class="ap"
          >Lütfen puan hesaplamak istediğiniz bir sınav türünü
          seçiniz.</CustomText
        >
        <select v-model="selected">
          <option disabled value>Sınav türü seç</option>
          <option value="dgs">Direk Geçiş Sınavı ( DGS )</option>
          <option value="yks"
            >Yükseköğretim Kurumları Sınavı ( YKS )</option
          >
        </select>
      </div>
      <DirekGecisSinavi v-if="selected === 'dgs'" />
      <YuksekOgretimKurumlariSinavi v-if="selected === 'yks'" />
    </Container>
  </div>
</template>
<script>
import TitleHeader from "../components/TitleHeader";
import CustomText from "../components/CustomText";
import DirekGecisSinavi from "../components/puan-hesapla/DirekGecisSinavi";
import YuksekOgretimKurumlariSinavi from "../components/puan-hesapla/YuksekOgretimKurumlariSinavi";
import Container from "../components/Container";
export default {
  name: "PuanHesapla",
  data: () => {
    return {
      selected: "",
    };
  },
  components: {
    TitleHeader,
    CustomText,
    Container,
    DirekGecisSinavi,
    YuksekOgretimKurumlariSinavi,
  },
};
</script>

<style scoped>
.anormal {
  font-size: 14px;
  font-weight: 600;
}
.list_of_puan {
  padding: 40px 0px;
}
.header_tur {
  font-size: 18px;
  margin-bottom: 4px;
  font-weight: 600;
}
.ap {
  margin-top: 4px !important;
}

option {
  line-height: 40px;
}
.bigFOnt {
  font-weight: 700;
  font-size: 18px;
}
</style>
