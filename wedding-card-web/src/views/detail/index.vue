<template>
  <div class="detail-container">
    <img class="background-img"  alt="" />
    <div class="main-detail flex flex-col items-center">
      <span class="subtitle animate__animated animate__fadeInLeft">诚邀您参加我们的婚礼</span>
      <div class="hori-line flex items-center">
        <div class="line animate__animated animate__fadeInLeft animate__delay-2s"></div>
        <div class="line-heart animate__animated animate__shakeX animate__infinite animate__slower">
          <!-- <Icon icon="heart|svg" class="heart-icon" size="35" /> -->
        </div>
      </div>
      <span class="title animate__animated animate__fadeInLeft">日期</span>
      <span class="content animate__animated animate__fadeInLeft">2025年9月13日 星期六</span>
      <span class="title animate__animated animate__fadeInLeft">户外仪式</span>
      <span class="content animate__animated animate__fadeInLeft">湖畔草坪 16:00</span>
      <span class="title animate__animated animate__fadeInLeft">晚宴</span>
      <span class="content animate__animated animate__fadeInLeft">会英殿 18:00</span>
      <span class="title animate__animated animate__fadeInLeft">详细地址</span>
      <span class="content animate__animated animate__fadeInLeft">广州鸣泉居酒店</span>

      <tlbs-map
        ref="mapRef"
        api-key="KZQBZ-CDIYB-YHZUP-J5B3D-LW2HH-NUBAM"
        :center="center"
        :zoom="zoom"
        :control="control"
        style="height: 240px; width: 90%"
      >
        <tlbs-multi-marker
          ref="markerRef"
          :geometries="geometries"
          :styles="styles"
          :options="options"
        />
      </tlbs-map>

      <button class="nav-btn animate__animated animate__fadeInUp" @click="handleAlbum">
        来看看我们的照片吧
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { computed, onMounted, ref } from 'vue';
  import { router } from '/@/router';
  import Icon from '/@/components/Icon/index.vue';

  const tcbEnv = computed(() => (window as any)._tcbEnv);
  const date = computed(() => tcbEnv.value.DATE.split(' ')[0]);
  const outdoor_time = computed(() => tcbEnv.value.DATE.split(' ')[1]);
  const dinner_time = computed(() => {
    const outdoor_time = tcbEnv.value.DATE.split(' ')[1].split(':');
    const dinner_time_h = Number(outdoor_time[0]) + 2;
    return `${dinner_time_h}:${outdoor_time[1]}:${outdoor_time[2]}`;
  });
  const addr = computed(() => tcbEnv.value.ADDR);

  const center = ref({ lat: 23.186682, lng: 113.287329 });
  const zoom = ref(12);
  const control = {
    scale: {},
    zoom: {
      position: 'topRight',
    },
  };
  const geometries = [
    { styleId: 'marker',  position: { lat: 23.186682, lng: 113.287329 } },
  ]
  const styles = {
    marker: {
      width: 20,
      height: 30,
      anchor: { x: 10, y: 30 },
    },
  };
  const options = {
    minZoom: 5,
    maxZoom: 15,
  };

  function handleAlbum(): void {
    router.push({
      name: 'Album',
    });
  }
</script>

<style lang="less" scoped>
  @import '../common.less';

  .text() {
    color: @detail-dark-color;
    text-shadow: 1px 1px 2px @detail-shadow-color;
  }

  .detail-container {
    position: relative;
    height: 100%;
    width: 100%;

    .background-img {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: -1;
      background: linear-gradient(to bottom right, @detail-bg-color-s, @detail-bg-color-s 30%, @detail-bg-color-e 70%, @detail-bg-color-e);
    }

    .heart-icon {
      fill: @dark-color;
    }

    .main-detail {
      position: relative;
      height: 100%;
      width: 100%;

      .title {
        .text();
        align-self: flex-start;
        font-size: 22px;
        font-weight: 340;
        margin: 0 5% 5px 5%;
        letter-spacing: 10px;
      }
      .content {
        .text();
        align-self: flex-start;
        font-size: 18px;
        font-weight: 300;
        margin: 0px 5% 20px 5%;
        letter-spacing: 5px;
      }
      .subtitle {
        .text();
        font-size: 28px;
        margin-top: 30px;
        font-weight: 300;
        letter-spacing: 5px;
      }
      .hori-line {
        align-self: stretch;
        position: relative;
        margin: 40px 0 20px;

        .line {
          width: 100%;
          height: 2px;
          background: @detail-dark-color;
        }
        .line-heart {
          position: absolute;
          color: @dark-color;
          font-size: 30px;
          right: 50px;
        }
      }
      .nav-btn {
        .text();
        position: absolute;
        bottom: 30px;
        align-self: center;
        padding: 10px 30px;
        font-size: 20px;
        letter-spacing: 5px;
        border-radius: 30px;
        box-shadow: 5px 5px 7px 0px @detail-box-shadow-color;
        background: linear-gradient(to top left, @detail-bg-color-s, @detail-bg-color-e);
      }
    }

    .center-text {
      font-weight: 300;
      font-size: 100px;
      letter-spacing: 100px;
      height: 60%;
      width: 900px;
      margin-left: 140px;
    }
  }
</style>
