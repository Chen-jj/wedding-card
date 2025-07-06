<template>
  <div class="app-container">
    <audio v-if="music" ref="audioRef" class="back-music" @canplay="onAudioCanPlay">
      <source :src="music" />
    </audio>
    <div class="router-container">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref, AudioHTMLAttributes } from 'vue';
  import { get } from './utils/request';

  const audioRef = ref<AudioHTMLAttributes>();
  const music = ref('');

  onMounted(async () => {
    await initMusic();
  });

  async function initMusic(): Promise<void> {
    const data = await get<{ url: string }>({
      url: 'res/music',
    });
    music.value = data?.url ?? '';
  }

  async function onAudioCanPlay() {
    if (!audioRef.value) return;
    const audio = audioRef.value;
    try {
      await audio['play']();
    } catch {
      setTimeout(() => onAudioCanPlay(), 2000);
    }
  }
</script>

<style lang="less">
  .app-container {
    height: 100%;
    transform-origin: 0 0 0;

    .back-music {
      height: 0;
      width: 0;
    }
  }
  .router-container {
    height: 100%;
  }
  body {
    margin: 0;
  }
</style>
