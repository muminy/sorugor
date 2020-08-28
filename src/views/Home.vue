<template>
  <Container>
    <div class="row aic">
      <div class="col-lg-12 tac text_area_home">
        <CustomText tag="h3" class="info_webpage">
          Online ortam da kendinizi
          <span>test</span> edin
        </CustomText>
        <CustomText size="xnormal" class="info_page" tag="p">
          Ücretsiz bir şekilde test çözbilir, çözemediğin yada yanlış yaptığın
          soruların cevaplarına erişebilirsin.
        </CustomText>
      </div>
    </div>
    <div class="area_exams">
      <div class="row">
        <div class="col-lg-4 list_of_list">
          <CustomText tag="h3" class="test_list">Temel yeterlilik sınavi</CustomText>
          <div class="list_of_tests tyt flex">
            <CustomText class="counts_user">Canlılar Alemi</CustomText>
            <div class="user_list_of_tet flex aic">
              <CustomText class="counts_user">18</CustomText>
              <UsersIcon size="16px" color="#1e57b9" />
            </div>
          </div>
          <div class="list_of_tests tyt flex">
            <CustomText class="counts_user">Madde ve Özellikleri</CustomText>
            <div class="user_list_of_tet flex aic">
              <CustomText class="counts_user">62</CustomText>
              <UsersIcon size="16px" color="#1e57b9" />
            </div>
          </div>
          <div class="list_of_tests tyt flex">
            <CustomText class="counts_user">Hücre ve Organellerii</CustomText>
            <div class="user_list_of_tet flex aic">
              <CustomText class="counts_user">98</CustomText>
              <UsersIcon size="16px" color="#1e57b9" />
            </div>
          </div>
          <div class="list_of_tests tyt flex">
            <CustomText class="counts_user">Ekosistem Ekolojisi</CustomText>
            <div class="user_list_of_tet flex aic">
              <CustomText class="counts_user">5</CustomText>
              <UsersIcon size="16px" color="#1e57b9" />
            </div>
          </div>
          <div class="list_of_tests tyt flex">
            <CustomText class="counts_user">Kalıtım</CustomText>
            <div class="user_list_of_tet flex aic">
              <CustomText class="counts_user">101</CustomText>
              <UsersIcon size="16px" color="#1e57b9" />
            </div>
          </div>
        </div>
        <div class="col-lg-4 list_of_list">
          <CustomText tag="h3" class="test_list">Alan yeterlilik sınavı</CustomText>
          <div class="list_of_tests ayt flex">
            <CustomText class="counts_user">Trigonometri</CustomText>
            <div class="user_list_of_tet flex aic">
              <CustomText class="counts_user">18</CustomText>
              <UsersIcon size="16px" color="#b9571e" />
            </div>
          </div>
          <div class="list_of_tests ayt flex">
            <CustomText class="counts_user">Polinomlar</CustomText>
            <div class="user_list_of_tet flex aic">
              <CustomText class="counts_user">4</CustomText>
              <UsersIcon size="16px" color="#b9571e" />
            </div>
          </div>
          <div class="list_of_tests ayt flex">
            <CustomText class="counts_user">Permütasyon ve Kombinasyon</CustomText>
            <div class="user_list_of_tet flex aic">
              <CustomText class="counts_user">42</CustomText>
              <UsersIcon size="16px" color="#b9571e" />
            </div>
          </div>
          <div class="list_of_tests ayt flex">
            <CustomText class="counts_user">İntegral</CustomText>
            <div class="user_list_of_tet flex aic">
              <CustomText class="counts_user">87</CustomText>
              <UsersIcon size="16px" color="#b9571e" />
            </div>
          </div>
          <div class="list_of_tests ayt flex">
            <CustomText class="counts_user">Karmaşık Sayılar</CustomText>
            <div class="user_list_of_tet flex aic">
              <CustomText class="counts_user">56</CustomText>
              <UsersIcon size="16px" color="#b9571e" />
            </div>
          </div>
        </div>
        <div class="col-lg-4 list_of_list">
          <CustomText tag="h3" class="test_list">Direk geçiş sınavı</CustomText>
          <div class="list_of_tests dgs flex">
            <CustomText class="counts_user">Faktöriyel</CustomText>
            <div class="user_list_of_test flex aic">
              <CustomText class="counts_user">86</CustomText>
              <UsersIcon size="16px" color="#202020" />
            </div>
          </div>
          <div class="list_of_tests dgs flex">
            <CustomText class="counts_user">Denklem Çözme</CustomText>
            <div class="user_list_of_test flex aic">
              <CustomText class="counts_user">23</CustomText>
              <UsersIcon size="16px" color="#202020" />
            </div>
          </div>
          <div class="list_of_tests dgs flex">
            <CustomText class="counts_user">Oran Orantı</CustomText>
            <div class="user_list_of_test flex aic">
              <CustomText class="counts_user">162</CustomText>
              <UsersIcon size="16px" color="#202020" />
            </div>
          </div>
          <div class="list_of_tests dgs flex">
            <CustomText class="counts_user">Yaş Problemleri</CustomText>
            <div class="user_list_of_test flex aic">
              <CustomText class="counts_user">44</CustomText>
              <UsersIcon size="16px" color="#202020" />
            </div>
          </div>
          <div class="list_of_tests dgs flex">
            <CustomText class="counts_user">Rasyonel Sayılar</CustomText>
            <div class="user_list_of_test flex aic">
              <CustomText class="counts_user">18</CustomText>
              <UsersIcon size="16px" color="#202020" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="website_stats">
      <CustomText class="h3_big" tag="h3">Aylık site istatistikleri</CustomText>
      <div class="row">
        <div class="col-lg-4">
          <div class="list_stats">
            <div class="flex aic jcsb stats_count_bottom">
              <CustomText class="h_stats" tag="h3">Toplam soru</CustomText>
              <CustomText class="flex aic upstats">
                <UpIcon class="mtcustom" size="24px" color="#49bb6b"></UpIcon>%18
              </CustomText>
            </div>
            <CustomText class="count_stats" tag="h3">1.826</CustomText>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="list_stats">
            <div class="flex aic jcsb stats_count_bottom">
              <CustomText class="h_stats" tag="h3">Toplam Öğrenci</CustomText>
              <CustomText class="flex aic upstats">
                <UpIcon class="mtcustom" size="24px" color="#49bb6b"></UpIcon>%18
              </CustomText>
            </div>
            <CustomText class="count_stats" tag="h3">1.002</CustomText>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="list_stats">
            <div class="flex aic jcsb stats_count_bottom">
              <CustomText class="h_stats" tag="h3">Toplam Sınav</CustomText>
              <CustomText class="flex aic upstats">
                <UpIcon class="mtcustom" size="24px" color="#49bb6b"></UpIcon>%22
              </CustomText>
            </div>
            <CustomText class="count_stats" tag="h3">6.719</CustomText>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import CustomText from '../components/CustomText'
import Container from '../components/Container'
import UsersIcon from '../icons/users-icon'
import UpIcon from '../icons/up-icon'
export default {
  name: 'Home',
  components: {
    CustomText,
    UsersIcon,
    Container,
    UpIcon
  }
}
</script>

<style scoped>
.stats_count_bottom {
  margin-bottom: 6px;
}
.list_of_list:not(:last-child) {
  margin-bottom: 28px;
}
.mtcustom {
  margin-top: 1px;
}
.upstats {
  color: #49bb6b;
  font-weight: 500;
  font-size: 12px;
}
.count_stats {
  font-size: 24px;
  font-weight: 800;
}
.h3_big {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 18px;
}
.h_stats {
  font-weight: 600;
  font-size: 15px;
}
.list_stats {
  width: 100%;
  padding: 20px;
  border: 1px solid #eeeeee;
  border-radius: 6px;
  margin-bottom: 18px;
}
.info_page {
  width: 70%;
  margin: 0 auto;
}
.area_exams,
.website_stats {
  padding-top: 40px;
  padding-bottom: 40px;
}
.img_review > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.info_webpage {
  font-weight: 900;
  font-size: 68px;
  width: 70%;
  margin: 0 auto;
  color: #1b1b1b;
  margin-bottom: 12px !important;
}
.info_webpage > span {
  color: #0d6efd;
}
.text_area_home {
  text-align: center;
  width: 70%;
  margin: 0 auto;
  padding-top: 70px;
  padding-bottom: 70px;
}
.populer_exs {
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 18px !important;
  color: #1b1b1b;
}
.test_list {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 18px;
}
.tests__ex {
  padding: 15px;
  background-color: #f3f3f3;
  width: 20%;
}
.list_of_tests {
  display: flex;
  margin-bottom: 12px;
}
.tests__ex > .logo_of_ex {
  width: 80px;
  height: 80px;
  border-radius: 4px;
  background-color: #00000027;
  margin: 0 auto;
}
.list_of_tests {
  width: 100%;
  padding: 12px 12px;
  border-radius: 5px;
  justify-content: space-between;
}
.tyt {
  background-color: #1e57b911;
  border-radius: 5px;
}
.tyt .counts_user {
  color: #1e57b9;
  font-weight: 500;
}
.ayt .counts_user {
  color: #b9571e;
  font-weight: 500;
}
.tyt:hover {
  background-color: #1e57b91c;
  transition: all 0.25s ease 0s;
  cursor: pointer;
}
.dgs:hover {
  background-color: #2020201c;
  transition: all 0.25s ease 0s;
  cursor: pointer;
}
.ayt:hover {
  background-color: #b9571e1c;
  transition: all 0.25s ease 0s;
  cursor: pointer;
}
.dgs .counts_user {
  color: #202020;
  font-weight: 500;
}
.ayt {
  background-color: #b9571e11;
  border-radius: 5px;
}
.dgs {
  background-color: #20202011;
  border-radius: 5px;
}
.counts_user {
  font-size: 14px;
  margin-right: 6px;
}
</style>
