<template>
  <div ref="scrollId" class="row">
    <div class="col-lg-5 col-md-6 col-sm-12">
      <form @submit="getPoint" class="area-point">
        <div v-if="sayPuan !== 0" class="table_area">
          <div class="flexPoint">
            <div class="infoPoint">Sözel Puan:</div>
            <div class="pointarea">
              <b>{{ sozPuan }}</b>
            </div>
          </div>
          <div class="flexPoint">
            <div class="infoPoint">Sayısal Puan:</div>
            <div class="pointarea">
              <b>{{ sayPuan }}</b>
            </div>
          </div>
          <div class="flexPoint">
            <div class="infoPoint">Eşit Ağırlık Puan:</div>
            <div class="pointarea">
              <b>{{ esitPuan }}</b>
            </div>
          </div>
        </div>
        <div>
          <CustomText tag="h2" class="h2net"
            >Sayısal testi</CustomText
          >
          <div class="flex aic mb_a">
            <input
              v-model="sa_dogru"
              type="number"
              min="0"
              max="60"
              class="puan_sayisal"
              placeholder="Doğru"
            />
            <input
              type="number"
              v-model="sa_yanlis"
              min="0"
              max="60"
              class="puan_sayisal"
              placeholder="Yanlış"
            />
          </div>
          <CustomText tag="h2" class="h2net"
            >Sözel testi</CustomText
          >
          <div class="flex aic mb_a">
            <input
              type="number"
              v-model="so_dogru"
              min="0"
              max="60"
              class="puan_sayisal"
              placeholder="Doğru"
            />
            <input
              type="number"
              v-model="so_yanlis"
              min="0"
              max="60"
              class="puan_sayisal"
              placeholder="Yanlış"
            />
          </div>
          <CustomText tag="h2" class="h2net"
            >Ön lisans başarı puanı</CustomText
          >
          <div class="flex aic mb_a">
            <input
              type="number"
              v-model="obp"
              min="0"
              max="60"
              class="puan_sayisal olbp"
              placeholder="Yanlış"
              pattern="[0-9] ([\.|,][0-9] )?"
              step="0.1"
            />
          </div>
          <div class="flex aic mb_a">
            <input
              type="checkbox"
              v-model="before_dgs"
              id="before_dgs"
              class="puan_sayisal w0"
              placeholder="Yanlış"
            />
            <label for="before_dgs"
              >Önceki dgs sonucum ile bir programa
              yerleştirildim</label
            >
          </div>
          <button class="buttonhesapla">HESAPLA</button>
        </div>
      </form>
    </div>
    <div class="col-lg-7 col-md-6 col-sm-12 content">
      <h3>DGS nedir?</h3>
      <p>
        Dikey Geçiş Sınavının kısaltmasıdır. 2000 yılından bu
        yana meslek yüksekokulları ile açıköğretim ön lisans
        programlarından mezun olan öğrencilerin örgün öğretim
        lisans programlarına geçiş yapmaları için Öğrenci Seçme
        ve Yerleştirme Merkezi (ÖSYM) tarafından her yıl Temmuz
        ayının ikinci haftasında yapılmakta olan sınavın adıdır.
      </p>
      <h3>Sınava kimler başvurabilir?</h3>
      <p>
        Yükseköğretim programlarına dikey geçiş için başvuracak
        adaylarda, meslek yüksekokulları ve açık öğretim ön
        lisans programlarından mezun olmuş olma şartı aranır. O
        yıl son sınıfta olup da staj dışındaki mezuniyet
        şartlarını yerine getirmiş olan adaylar da başvurabilir.
      </p>
      <h3>ÖBP nedir?</h3>
      <p>
        Önlisans Başarı Puanının kısaltmasıdır. Ön lisans
        akademik not ortalamaları (en yükseği 100, en düşüğü 50
        olarak değerlendirilerek) 0,8 ile çarpılarak ÖBP'ye
        dönüştürülmektedir. Böylece, 50 olan en düşük akademik
        not ortalamasının ÖBP değeri 40, en yüksek 100 olan
        akademik ortalamanın da 80 olmaktadır. 50'nin altında
        olan akademik notlar 50 olarak değerlendirmeye
        alınmaktadır. Bu şekilde hesaplanan Önlisans Başarı
        Puanı, kılavuzda da belirtildiği gibi 0,6 katsayı ile
        çarpılarak adayların yerleştirme puanları
        hesaplanmaktadır.
      </p>
    </div>
  </div>
</template>

<script>
import CustomText from "../CustomText";
export default {
  name: "DirekGecisSinavi",
  data: () => {
    return {
      so_dogru: "",
      so_yanlis: "",
      sa_dogru: "",
      sa_yanlis: "",
      obp: "",
      before_dgs: false,
      ekpuan: 0,
      sayPuan: 0,
      sozPuan: 0,
      esitPuan: 0,
    };
  },
  components: {
    CustomText,
  },
  methods: {
    getPoint: function(event) {
      event.preventDefault();
      const sozelAgirlikPuani = 122.382;
      const sayisalAgirlikPuan = 145.378;
      const esitAAgirlikPuan = 133.88;
      const sayisal_net = this.sa_dogru - this.sa_yanlis / 4;
      const sozel_net = this.so_dogru - this.so_yanlis / 4;
      let dkatsayi = 0.6;
      if (this.before_dgs) {
        dkatsayi = 0.45;
      }
      const sozelNetPuan =
        sayisal_net * 0.4947733333 +
        sozel_net * 2.539699231 +
        this.obp * dkatsayi +
        121.8846149;
      const sayisalNetPuan =
        sayisal_net * 2.473866667 +
        sozel_net * 0.50794 +
        this.obp * dkatsayi +
        141.8123767;
      const esitANetPuan =
        sayisal_net * 1.484319167 +
        sozel_net * 1.523819231 +
        this.obp * dkatsayi +
        131.8485407;
      this.sozPuan = Number(sozelNetPuan.toFixed(3));
      this.sayPuan = Number(sayisalNetPuan.toFixed(3));
      this.esitPuan = Number(esitANetPuan.toFixed(3));

      var scrollId = this.$refs["scrollId"];
      var top = scrollId.offsetTop;
      window.scrollTo(0, top);
    },
  },
};
</script>

<style scoped>
h2 {
  font-weight: 600;
  margin-bottom: 3px;
  font-size: 16px !important;
}
p {
  font-size: 14px;
  font-weight: 400;
}
</style>
