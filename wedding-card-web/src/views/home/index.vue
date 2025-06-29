<template>
  <div class="flex flex-col home-container">
    <div class="cover-container animate__animated animate__pulse animate__duration-2s">
      <img v-if="cover" class="cover" :src="cover" alt="" />
    </div>
    <div class="flex-1 flex flex-col items-center">
      <div
        class="animate__animated animate__tada animate__repeat-2"
        style="font-size: 30px; margin-top: 20px; letter-spacing: 20px"
      >
        我们结婚啦
      </div>
      <div class="flex items-center we">
        <div class="flex-1">新郎：{{ groom }}</div>
        <div style="margin: 0 10px" class="animate__animated animate__heartBeat animate__infinite">
          <!-- <Icon icon="heart|svg" size="30" color="#ff6b6b" /> -->
        </div>
        <div class="flex-1">新娘：{{ bride }}</div>
      </div>
      <div class="name-line flex items-center justify-center">
        <div class="line"></div>
        <!-- <Icon
          icon="rhombus|svg"
          style="position: absolute; left: 50%; margin-left: -85px"
          size="20"
          color="#4d532a"
          class="animate__animated animate__fadeInRight animate__delay-2s color-red"
        />
        <Icon icon="rhombus|svg" style="position: absolute" size="30" color="#4d532a" />
        <Icon
          icon="rhombus|svg"
          style="position: absolute; left: 50%; margin-left: 65px"
          size="20"
          color="#4d532a"
          class="animate__animated animate__fadeInLeft animate__delay-2s"
        /> -->
      </div>
      <div class="flex remark items-center">
        <div class="flex-1">婚礼日期：{{ day }}</div>
      </div>
      <div class="flex count-down items-center">
        <div class="flex-1" style="letter-spacing: 4">
          {{ countDown }}
        </div>
      </div>

      <div class="flex-1 flex flex-col justify-center items-center">
        <button class="more-btn" @click="handleMore">点击查看更多</button>
      </div>
    </div>

    <div
      class="cover-text flex flex-col items-center animate__animated animate__fadeInLeft animate__delay-2s"
    >
      <span style="font-size: 40px; letter-spacing: 14px">LOVE</span>
      <span>执子之手</span>
      <span>与之偕老</span>
    </div>

    <div class="ver-text animate__animated animate__fadeInRight animate__delay-2s">
      我们的婚礼，诚邀您见证
    </div>

    <div class="border-line animate__animated animate__rotateIn animate__slow"></div>
  </div>
</template>

<script lang="ts" setup>
  import { computed } from '@vue/reactivity';
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { router } from '/@/router';
  import { get } from '/@/utils/request';
  // import Icon from '/@/components/Icon/index.vue';

  const route = useRoute();
  const countDown = ref('');
  const cover = ref('');

  const tcbEnv = computed(() => (window as any)._tcbEnv);
  const name = computed(() => route.query.name);
  const groom = '陈嘉健' // computed(() => tcbEnv.value.GROOM);
  const bride = '尹俏冰' // computed(() => tcbEnv.value.BRIDE);
  const date = computed(() => tcbEnv.value.DATE);
  const day = computed(() => {
    const dateTime = new Date(Date.parse(date.value));
    const year = dateTime.getFullYear();
    const month = dateTime.getMonth() + 1;
    const monthStr = month < 10 ? '0' + month : month;
    const day = dateTime.getDate();
    const dayStr = day < 10 ? '0' + day : day;
    return `${year}-${monthStr}-${dayStr}`;
  });

  onMounted(async () => {
    setCountDown();
    setInterval(setCountDown, 1000);
    await initCover();
  });

  async function initCover(): Promise<void> {
    const data = await get<{ url: string }>({
      url: 'res/cover',
    });
    if (!data) return;

    cover.value = data?.url;
  }

  function setCountDown(): void {
    const now = new Date().getTime();
    const dateTime = new Date(Date.parse(date.value)).getTime();
    const totalSecond = (dateTime - now) / 1000;

    if (totalSecond < 0) {
      countDown.value = `已 相 守 ${Math.floor(-totalSecond / 60 / 60 / 24)}/+∞ 天`;
      return;
    }

    const day = Math.floor(totalSecond / 60 / 60 / 24);
    const hour = Math.floor((totalSecond / 60 / 60) % 24);
    const minute = Math.floor((totalSecond / 60) % 60);
    const second = Math.floor(totalSecond % 60);

    countDown.value = `${day} 天 ${hour} 时 ${minute} 分 ${second} 秒`;
  }

  function handleMore(): void {
    router.push({
      name: 'Detail',
      query: {
        name: name.value,
      },
    });
  }
</script>

<style lang="less" scoped>
  @import '../common.less';

  .home-container {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: @bg-color;
  }

  .cover-container {
    width: 100%;
    height: 400px;
    .cover {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .we {
    font-size: 20px;
    margin-top: 20px;
    letter-spacing: 2px;
    font-weight: 340;
  }

  .border-line {
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border: 4px solid @dark-color;
    pointer-events: none;
  }

  .name-line {
    position: relative;
    margin-top: 40px;
    color: red;
    width: 100%;

    .line {
      position: absolute;
      background: linear-gradient(to left, #efefef, @dark-color, #efefef);
      height: 2px;
      left: 30px;
      right: 30px;
      border-radius: 50%;
    }
  }

  .remark {
    margin-top: 40px;
    font-size: 18px;
    letter-spacing: 0px;
    align-self: stretch;
    text-align: center;
  }

  .cover-text {
    position: absolute;
    top: 250px;
    left: 30px;
    font-weight: 300;
    letter-spacing: 16px;
    font-size: 24px;
    color: @light-color;
  }

  .ver-text {
    position: absolute;
    top: 70px;
    right: 30px;
    font-size: 18px;
    color: @light-color;
    letter-spacing: 10px;
    writing-mode: vertical-lr;
    font-weight: 300;
  }

  .more-btn {
    margin-bottom: 20px;
    padding: 18px 40px;
    color: @light-color;
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 15px;
    border: 0;
    border-radius: 15px;
    background: @dark-color;
    font-family: 微软雅黑;
  }

  .count-down {
    margin-top: 10px;
  }
</style>
