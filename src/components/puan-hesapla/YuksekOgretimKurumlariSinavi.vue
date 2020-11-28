<template>
  <div ref="scrollId" class="row">
    <div class="col-lg-5 col-md-6 col-sm-12">
      <form @submit="getPoint" class="area-point">
        <div v-if="tytPuan !== 0" class="table_area">
          <CustomText
            v-if="errNet"
            tag="span"
            class="small errortext"
          >
            Türkçe veya Temel Matematik testlerinin en az
            birinden 0,5 veya üzeri netiniz olmadığı için
            puanınız hesaplanmadı.
          </CustomText>
          <div class="flexPoint">
            <div class="infoPoint">TYT Puan:</div>
            <div class="pointarea">
              <b>{{ errNet ? "Hesaplanmadı" : tytPuan }}</b>
            </div>
          </div>
          <div
            v-if="
              afiz_d - afiz_y / 4 >= 0.5 ||
                akim_d - akim_y / 4 >= 0.5 ||
                abiy_d - abiy_y / 4 >= 0.5 ||
                amat_d - amat_y / 4 >= 0.5
            "
            class="flexPoint"
          >
            <div class="infoPoint">Sayısal Puan:</div>
            <div class="pointarea">
              <b>{{ errNet ? "Hesaplanmadı" : sayPuan }}</b>
            </div>
          </div>
          <div
            v-if="
              adil_d - adil_y / 4 >= 0.5 ||
                atar1_d - atar1_y / 4 >= 0.5 ||
                acor1_d - acor1_y / 4 >= 0.5 ||
                atar2_d - atar2_y / 4 >= 0.5 ||
                acor2_d - acor2_y / 4 >= 0.5 ||
                afel_d - afel_y / 4 >= 0.5 ||
                adin_d - adin_y / 4 >= 0.5
            "
            class="flexPoint"
          >
            <div class="infoPoint">Sözel Puan:</div>
            <div class="pointarea">
              <b>{{ errNet ? "Hesaplanmadı" : sozPuan }}</b>
            </div>
          </div>
          <div
            v-if="
              acor1_d - acor1_y / 4 >= 0.5 ||
                atar1_d - atar1_y / 4 >= 0.5 ||
                adil_d - adil_y / 4 >= 0.5 ||
                amat_d - amat_y / 4 >= 0.5
            "
            class="flexPoint"
          >
            <div class="infoPoint">Eşit Ağırlık Puan:</div>
            <div class="pointarea">
              <b>{{ errNet ? "Hesaplanmadı" : esitPuan }}</b>
            </div>
          </div>
          <div
            v-if="yab_d - yab_y / 4 >= 0.25"
            class="flexPoint"
          >
            <div class="infoPoint">Yabancı Dil Puan:</div>
            <div class="pointarea">
              <b>{{ errNet ? "Hesaplanmadı" : yabPuan }}</b>
            </div>
          </div>
        </div>
        <div>
          <CustomText tag="h2" class="h3net"
            >Temel Yeterlilik Testi</CustomText
          >
          <CustomText
            v-if="tturkce_d + tturkce_y > 40"
            tag="span"
            class="small errortext"
          >
            Lütfen Doğru ve yanlışlarınız soru sayısını geçmesin
          </CustomText>
          <CustomText tag="h2" class="h2net">
            Türkçe
            <span class="soruSayisi">40 Soru</span>
          </CustomText>
          <div class="flex aic mb_a">
            <input
              v-model="tturkce_d"
              type="number"
              min="0"
              max="40"
              class="puan_sayisal"
              placeholder="Doğru"
              @change="getValidate"
            />
            <input
              type="number"
              v-model="tturkce_y"
              min="0"
              max="40"
              class="puan_sayisal"
              placeholder="Yanlış"
              @change="getValidate"
            />
          </div>
          <CustomText
            v-if="this.tsos_d + this.tsos_y > 20"
            tag="span"
            class="small errortext"
          >
            Lütfen Doğru ve yanlışlarınız soru sayısını geçmesin
          </CustomText>
          <CustomText tag="h2" class="h2net">
            Sosyal Bilimler
            <span class="soruSayisi">20 Soru</span>
          </CustomText>
          <div class="flex aic mb_a">
            <input
              v-model="tsos_d"
              type="number"
              min="0"
              max="20"
              class="puan_sayisal"
              placeholder="Doğru"
              @change="getValidate"
            />
            <input
              type="number"
              v-model="tsos_y"
              min="0"
              max="20"
              class="puan_sayisal"
              placeholder="Yanlış"
              @change="getValidate"
            />
          </div>

          <CustomText
            v-if="tmat_d + tmat_y > 40"
            tag="span"
            class="small errortext"
          >
            Lütfen Doğru ve yanlışlarınız soru sayısını geçmesin
          </CustomText>
          <CustomText tag="h2" class="h2net">
            Temel Matematik
            <span class="soruSayisi">40 Soru</span>
          </CustomText>
          <div class="flex aic mb_a">
            <input
              v-model="tmat_d"
              type="number"
              min="0"
              max="40"
              class="puan_sayisal"
              placeholder="Doğru"
              @change="getValidate"
            />
            <input
              type="number"
              v-model="tmat_y"
              min="0"
              max="40"
              class="puan_sayisal"
              placeholder="Yanlış"
              @change="getValidate"
            />
          </div>

          <CustomText
            v-if="tfen_d + tfen_y > 20"
            tag="span"
            class="small errortext"
          >
            Lütfen Doğru ve yanlışlarınız soru sayısını geçmesin
          </CustomText>
          <CustomText tag="h2" class="h2net">
            Fen Bilimleri
            <span class="soruSayisi">20 Soru</span>
          </CustomText>
          <div class="flex aic mb_a">
            <input
              v-model="tfen_d"
              type="number"
              min="0"
              max="20"
              class="puan_sayisal"
              placeholder="Doğru"
              @change="getValidate"
            />
            <input
              type="number"
              v-model="tfen_y"
              min="0"
              max="20"
              class="puan_sayisal"
              placeholder="Yanlış"
              @change="getValidate"
            />
          </div>
          <CustomText tag="h2" class="h3net">
            Alan Yeterlilik Testi
          </CustomText>
          <CustomText
            v-if="adil_d + adil_y > 24"
            tag="span"
            class="small errortext"
          >
            Lütfen Doğru ve yanlışlarınız soru sayısını geçmesin
          </CustomText>
          <CustomText tag="h2" class="h2net">
            T. Dili ve Edebiyatı
            <span class="soruSayisi">24 Soru</span>
          </CustomText>
          <div class="flex aic mb_a">
            <input
              v-model="adil_d"
              type="number"
              min="0"
              max="24"
              class="puan_sayisal"
              placeholder="Doğru"
              @change="getValidate"
            />
            <input
              type="number"
              v-model="adil_y"
              min="0"
              max="24"
              class="puan_sayisal"
              placeholder="Yanlış"
              @change="getValidate"
            />
          </div>
          <CustomText
            v-if="atar1_d + atar1_y > 10"
            tag="span"
            class="small errortext"
          >
            Lütfen Doğru ve yanlışlarınız soru sayısını geçmesin
          </CustomText>
          <CustomText tag="h2" class="h2net">
            Tarih-1
            <span class="soruSayisi">10 Soru</span>
          </CustomText>
          <div class="flex aic mb_a">
            <input
              v-model="atar1_d"
              type="number"
              min="0"
              max="10"
              class="puan_sayisal"
              placeholder="Doğru"
              @change="getValidate"
            />
            <input
              type="number"
              v-model="atar1_y"
              min="0"
              max="10"
              class="puan_sayisal"
              placeholder="Yanlış"
              @change="getValidate"
            />
          </div>
          <CustomText
            v-if="atar2_d + atar2_y > 11"
            tag="span"
            class="small errortext"
          >
            Lütfen Doğru ve yanlışlarınız soru sayısını geçmesin
          </CustomText>
          <CustomText tag="h2" class="h2net">
            Tarih-2
            <span class="soruSayisi">11 Soru</span>
          </CustomText>
          <div class="flex aic mb_a">
            <input
              v-model="atar2_d"
              type="number"
              min="0"
              max="11"
              class="puan_sayisal"
              placeholder="Doğru"
              @change="getValidate"
            />
            <input
              type="number"
              v-model="atar2_y"
              min="0"
              max="11"
              class="puan_sayisal"
              placeholder="Yanlış"
              @change="getValidate"
            />
          </div>
          <CustomText
            v-if="acor1_d + acor1_y > 6"
            tag="span"
            class="small errortext"
          >
            Lütfen Doğru ve yanlışlarınız soru sayısını geçmesin
          </CustomText>
          <CustomText tag="h2" class="h2net">
            Coğrafya-1
            <span class="soruSayisi">6 Soru</span>
          </CustomText>
          <div class="flex aic mb_a">
            <input
              v-model="acor1_d"
              type="number"
              min="0"
              max="6"
              class="puan_sayisal"
              placeholder="Doğru"
              @change="getValidate"
            />
            <input
              type="number"
              v-model="acor1_y"
              min="0"
              max="6"
              class="puan_sayisal"
              placeholder="Yanlış"
              @change="getValidate"
            />
          </div>
          <CustomText
            v-if="acor2_d + acor2_y > 11"
            tag="span"
            class="small errortext"
          >
            Lütfen Doğru ve yanlışlarınız soru sayısını geçmesin
          </CustomText>
          <CustomText tag="h2" class="h2net">
            Coğrafya-2
            <span class="soruSayisi">11 Soru</span>
          </CustomText>
          <div class="flex aic mb_a">
            <input
              v-model="acor2_d"
              type="number"
              min="0"
              max="11"
              class="puan_sayisal"
              placeholder="Doğru"
              @change="getValidate"
            />
            <input
              type="number"
              v-model="acor2_y"
              min="0"
              max="11"
              class="puan_sayisal"
              placeholder="Yanlış"
              @change="getValidate"
            />
          </div>
          <CustomText
            v-if="adin_d + adin_y > 6"
            tag="span"
            class="small errortext"
          >
            Lütfen Doğru ve yanlışlarınız soru sayısını geçmesin
          </CustomText>
          <CustomText tag="h2" class="h2net">
            Din Kültürü
            <span class="soruSayisi">6 Soru</span>
          </CustomText>
          <div class="flex aic mb_a">
            <input
              v-model="adin_d"
              type="number"
              min="0"
              max="6"
              class="puan_sayisal"
              placeholder="Doğru"
              @change="getValidate"
            />
            <input
              type="number"
              v-model="adin_y"
              min="0"
              max="6"
              class="puan_sayisal"
              placeholder="Yanlış"
              @change="getValidate"
            />
          </div>
          <CustomText
            v-if="afel_d + afel_y > 12"
            tag="span"
            class="small errortext"
          >
            Lütfen Doğru ve yanlışlarınız soru sayısını geçmesin
          </CustomText>
          <CustomText tag="h2" class="h2net">
            Felsefe
            <span class="soruSayisi">12 Soru</span>
          </CustomText>
          <div class="flex aic mb_a">
            <input
              v-model="afel_d"
              type="number"
              min="0"
              max="12"
              class="puan_sayisal"
              placeholder="Doğru"
              @change="getValidate"
            />
            <input
              type="number"
              v-model="afel_y"
              min="0"
              max="12"
              class="puan_sayisal"
              placeholder="Yanlış"
              @change="getValidate"
            />
          </div>
          <CustomText
            v-if="amat_d + amat_y > 40"
            tag="span"
            class="small errortext"
          >
            Lütfen Doğru ve yanlışlarınız soru sayısını geçmesin
          </CustomText>
          <CustomText tag="h2" class="h2net">
            Matematik
            <span class="soruSayisi">40 Soru</span>
          </CustomText>
          <div class="flex aic mb_a">
            <input
              v-model="amat_d"
              type="number"
              min="0"
              max="40"
              class="puan_sayisal"
              placeholder="Doğru"
              @change="getValidate"
            />
            <input
              type="number"
              v-model="amat_y"
              min="0"
              max="40"
              class="puan_sayisal"
              placeholder="Yanlış"
              @change="getValidate"
            />
          </div>
          <CustomText
            v-if="afiz_d + afiz_y > 14"
            tag="span"
            class="small errortext"
          >
            Lütfen Doğru ve yanlışlarınız soru sayısını geçmesin
          </CustomText>
          <CustomText tag="h2" class="h2net">
            Fizik
            <span class="soruSayisi">14 Soru</span>
          </CustomText>
          <div class="flex aic mb_a">
            <input
              v-model="afiz_d"
              type="number"
              min="0"
              max="14"
              class="puan_sayisal"
              placeholder="Doğru"
              @change="getValidate"
            />
            <input
              type="number"
              v-model="afiz_y"
              min="0"
              max="14"
              class="puan_sayisal"
              placeholder="Yanlış"
              @change="getValidate"
            />
          </div>
          <CustomText
            v-if="akim_d + akim_y > 13"
            tag="span"
            class="small errortext"
          >
            Lütfen Doğru ve yanlışlarınız soru sayısını geçmesin
          </CustomText>
          <CustomText tag="h2" class="h2net">
            Kimya
            <span class="soruSayisi">13 Soru</span>
          </CustomText>
          <div class="flex aic mb_a">
            <input
              v-model="akim_d"
              type="number"
              min="0"
              max="13"
              class="puan_sayisal"
              placeholder="Doğru"
              @change="getValidate"
            />
            <input
              type="number"
              v-model="akim_y"
              min="0"
              max="13"
              class="puan_sayisal"
              placeholder="Yanlış"
              @change="getValidate"
            />
          </div>
          <CustomText
            v-if="abiy_d + abiy_y > 13"
            tag="span"
            class="small errortext"
          >
            Lütfen Doğru ve yanlışlarınız soru sayısını geçmesin
          </CustomText>
          <CustomText tag="h2" class="h2net">
            Biyoloji
            <span class="soruSayisi">13 Soru</span>
          </CustomText>
          <div class="flex aic mb_a">
            <input
              v-model="abiy_d"
              type="number"
              min="0"
              max="13"
              class="puan_sayisal"
              placeholder="Doğru"
              @change="getValidate"
            />
            <input
              type="number"
              v-model="abiy_y"
              min="0"
              max="13"
              class="puan_sayisal"
              placeholder="Yanlış"
              @change="getValidate"
            />
          </div>
          <CustomText
            v-if="yab_d + yab_y > 80"
            tag="span"
            class="small errortext"
          >
            Lütfen Doğru ve yanlışlarınız soru sayısını geçmesin
          </CustomText>
          <CustomText tag="h2" class="h2net">
            Yabancı Dil
            <span class="soruSayisi">80 Soru</span>
          </CustomText>
          <div class="flex aic mb_a">
            <input
              v-model="yab_d"
              type="number"
              min="0"
              max="80"
              class="puan_sayisal"
              placeholder="Doğru"
              @change="getValidate"
            />
            <input
              type="number"
              v-model="yab_y"
              min="0"
              max="80"
              class="puan_sayisal"
              placeholder="Yanlış"
              @change="getValidate"
            />
          </div>
          <CustomText
            v-if="obp < 50 || obp > 100"
            tag="span"
            class="small errortext"
          >
            OBP 50 ila 100 puan arasında olmalıdır
          </CustomText>
          <CustomText tag="h2" class="h2net">
            Okul başarı puanı
            <span class="soruSayisi">50 - 100</span>
          </CustomText>
          <div class="flex aic mb_a">
            <input
              type="number"
              v-model="obp"
              min="0"
              @change="getValidate"
              max="60"
              class="puan_sayisal olbp"
              placeholder="Okul Başarı puanınız"
            />
          </div>
          <div class="flex aic mb_a">
            <input
              type="checkbox"
              v-model="before_yks"
              min="0"
              max="60"
              id="before_dgs"
              class="puan_sayisal w0"
            />
            <label for="before_dgs">
              Geçen sene yerleştim.
            </label>
          </div>
          <button :disabled="disabled" class="buttonhesapla">
            HESAPLA
          </button>
        </div>
      </form>
    </div>
    <div class="col-lg-7 col-md-6 col-sm-12 content">
      <h3>
        Sınavda hangi alanlardan sorular sorulmaktadır?
      </h3>
      <p>
        4 adet alt testten oluşmaktadır. Bunlar sırasıyla Türk
        dili ve edebiyatı, sosyal bilimler-1 ve 2, matematik ve
        fen Bilimleri testleridir.
      </p>
      <p>
        Sosyal bilimler-1 testi, tarih ve coğrafya alanlarından
        sorular içermektedir.
      </p>
      <p>
        Tarih, coğrafya ve felsefe alanlarının yanında din
        kültürü ve ahlak bilgisinden de sorular içermektedir. Din
        kültürü ve ahlak bilgisi alanındaki soruları yanıtlamak
        istemeyen öğrenciler için alternatif olarak felsefe
        soruları bulunacaktır. Adaylar YKS başvurusu yaparken,
        kendi öğrenimlerine uygun olanı seçeneği işaretleyecekler
        ve bu bilgiler MEB e-okul sisteminden de kontrol edilerek
        din kültürü ve ahlak bilgisi dersinden muaf olan
        öğrencilerin felsefe grubu sorularını cevaplandırması
        imkanı sağlanacaktır.
      </p>
      <p>
        Fen bilimleri testinde fizik, kimya ve biyoloji
        alanlarından sorular yer almaktadır.
      </p>
      <h3>AYT nedir?</h3>
      <p>
        Yükseköğretim Kurumları Sınavı olan YKS'nin ikinci
        oturumu olan Alan Yeterlilik Testinin kısaltmasıdır.
        Yükseköğretim Kurumu tarafından 2018 yılından itibaren
        uygulanmaktadır.
      </p>
      <h3>
        Puanların hesaplanması için en az kaç net yapılmalı?
      </h3>
      <p>
        Öncelikle aday, TYT'den en az 150 almış olmalıdır.
        Sayısal (SAY) için AYT'de matematik ve fen bilimleri,
        eşit ağırlık (EA) için matematik ve Türk dili ve
        edebiyatı ile sosyal bilimler-1, sözel (SÖZ) için Türk
        dili ve edebiyatı ile sosyal bilimler-1 ve 2 testlerinin
        her ikisinden de en az 0,5 net, DİL içinse yabancı dil
        testinden de en az 0,5 net yapmış olmalıdır.
      </p>
      <h3>
        Lisans programlarını tercih edebilmek için gerekli baraj
        nedir?
      </h3>
      <p>
        TYT'den en az 150 almak koşuluyla, adayın ilk oturum
        sonucu ile sınavın ikinci oturumundaki alan yeterlilik
        testlerinden alacağı puanla birlikte hesaplanacak olan
        sözel, sayısal, eşit ağırlık ve dil puanının en az
        birinin 180 veya üzeri olması gerekmektedir. Adaylar en
        az 180 ve üzerinde aldıklarında, ilgili sonuç türünde
        öğrenci kabul eden lisans programlarından tercih
        yapabilecektir.
      </p>
    </div>
  </div>
</template>

<script>
import { watchEffect } from "vue";
import CustomText from "../CustomText";
export default {
  name: "AlanYeterlilikTesti",
  components: {
    CustomText,
  },
  data: () => {
    return {
      before_yks: false,
      tturkce_d: 16,
      tturkce_y: "",
      tmat_d: 36,
      tmat_y: "",
      tsos_d: 12,
      tsos_y: "",
      tfen_d: 16,
      tfen_y: "",
      dfen_y: "",
      adil_d: 12,
      adil_y: "",
      atar1_d: 5,
      atar1_y: "",
      atar2_d: 5,
      atar2_y: "",
      acor1_d: 5,
      acor1_y: "",
      acor2_d: 5,
      acor2_y: "",
      adin_d: 5,
      adin_y: "",
      afel_d: 5,
      afel_y: "",
      amat_d: 5,
      amat_y: "",
      afiz_d: 5,
      afiz_y: "",
      akim_d: 5,
      akim_y: "",
      abiy_d: 5,
      abiy_y: "",
      yab_d: 5,
      yab_y: 0,
      obp: 50,
      disabled: false,
      tytPuan: 0,
      aytPuan: 0,
      errNet: false,
      sayPuan: 0,
      esitPuan: 0,
      sozPuan: 0,
      yabPuan: 0,
    };
  },
  methods: {
    getPoint: function(event) {
      event.preventDefault();

      const tmatNet = this.tmat_d - this.tmat_y / 4;
      const tfenNet = this.tfen_d - this.tfen_y / 4;
      const tsosNet = this.tsos_d - this.tsos_y / 4;
      const tturNet = this.tturkce_d - this.tturkce_y / 4;
      const adilNet = this.adil_d - this.adil_y / 4;
      const atarNet = this.atar1_d - this.atar1_y / 4;
      const atar2Net = this.atar2_d - this.atar2_y / 4;
      const acogNet = this.acor1_d - this.acor1_y / 4;
      const acog2Net = this.acor2_d - this.acor2_y / 4;
      const adinNet = this.adin_d - this.adin_y / 4;
      const afelNet = this.afel_d - this.afel_y / 4;
      const amatNet = this.amat_d - this.amat_y / 4;
      const afizNet = this.afiz_d - this.afiz_y / 4;
      const akimNet = this.akim_d - this.akim_y / 4;
      const abiyNet = this.abiy_d - this.abiy_y / 4;
      const yabNet = this.yab_d - this.yab_y / 4;

      let diplomaNotu = this.obp * 0.6;
      if (this.before_yks) {
        diplomaNotu = this.obp / 2;
      }

      this.tytPuan = Number(
        99.421 +
          (tturNet * 3.24 +
            tsosNet * 3.66 +
            tmatNet * 3.34 +
            tfenNet * 3.41) +
          diplomaNotu,
      ).toFixed(3);

      this.sayPuan = Number(
        99.135 +
          (tturNet * 1.38 +
            tsosNet * 1.56 +
            tmatNet * 1.43 +
            tfenNet * 1.46) +
          amatNet * 2.71 +
          afizNet * 3.15 +
          akimNet * 2.77 +
          abiyNet * 3.31 +
          diplomaNotu,
      ).toFixed(3);

      this.esitPuan = Number(
        94.453 +
          (tturNet * 1.38 +
            tsosNet * 1.55 +
            tmatNet * 1.42 +
            tfenNet * 1.45) +
          amatNet * 2.69 +
          adilNet * 3.18 +
          atarNet * 3.54 +
          acogNet * 2.96 +
          diplomaNotu,
      ).toFixed(3);
      this.sozPuan = Number(
        98.192 +
          (tturNet * 1.35 +
            tsosNet * 1.53 +
            tmatNet * 1.4 +
            tfenNet * 1.42) +
          adilNet * 3.12 +
          atarNet * 3.48 +
          acogNet * 2.91 +
          atar2Net * 3.7 +
          acog2Net * 2.6 +
          afelNet * 3.22 +
          adilNet * 3.94 +
          diplomaNotu,
      ).toFixed(3);
      this.yabPuan =
        99.022 +
        (tturNet * 1.57 +
          tsosNet * 1.77 +
          tmatNet * 1.62 +
          tfenNet * 1.65) +
        yabNet * 2.62 +
        diplomaNotu;

      if (this.tytPuan < 150) {
        this.sayPuan = 0;
        this.sozPuan = 0;
        this.esitPuan = 0;
        this.yabPuan = 0;
      }

      if (tmatNet >= 0.5 || tturNet >= 0.5) {
        this.errNet = false;
      } else {
        this.errNet = true;
      }

      var scrollId = this.$refs["scrollId"];
      var top = scrollId.offsetTop;
      window.scrollTo(0, top - 40);
    },
    getValidate: function() {
      if (this.tturkce_d + this.tturkce_y > 40) {
        this.disabled = true;
        return;
      }

      if (this.tsos_d + this.tsos_y > 20) {
        this.disabled = true;
        return;
      }

      if (this.tmat_d + this.tmat_y > 40) {
        this.disabled = true;
        return;
      }

      if (this.tfen_d + this.tsos_y > 20) {
        this.disabled = true;
        return;
      }

      if (this.adil_d + this.adil_y > 24) {
        this.disabled = true;
        return;
      }

      if (this.atar1_d + this.atar1_y > 10) {
        this.disabled = true;
        return;
      }

      //
      if (this.atar2_d + this.atar2_y > 11) {
        this.disabled = true;
        return;
      }

      if (this.acor1_d + this.acor1_y > 6) {
        this.disabled = true;
        return;
      }

      if (this.acor2_d + this.acor2_y > 11) {
        this.disabled = true;
        return;
      }

      if (this.adin_d + this.adin_y > 6) {
        this.disabled = true;
        return;
      }

      if (this.afel_d + this.afel_y > 12) {
        this.disabled = true;
        return;
      }

      if (this.amat_d + this.amat_y > 40) {
        this.disabled = true;
        return;
      }

      //
      if (this.afiz_d + this.afiz_y > 14) {
        this.disabled = true;
        return;
      }

      if (this.akim_d + this.akim_y > 13) {
        this.disabled = true;
        return;
      }

      if (this.abiy_d + this.abiy_y > 13) {
        this.disabled = true;
        return;
      }

      if (this.yab_d + this.yab_y > 80) {
        this.disabled = true;
        return;
      }

      if (this.obp > 100 || this.obp < 50) {
        this.disabled = true;
        return;
      }

      this.disabled = false;
    },
  },
};
</script>

<style scoped>
.h3net {
  font-size: 20px;
  font-weight: 700;
}
.soruSayisi {
  margin-left: 2px;
  font-size: 10px;
  color: #929292;
  font-weight: 500;
}
.table_area {
  scroll-margin-top: 120px;
}
</style>
