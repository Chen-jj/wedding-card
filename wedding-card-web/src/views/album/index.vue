<template>
  <div class="waterfall-container">
    <div v-for="(column, columnIndex) in columns" :key="columnIndex" class="column">
      <div v-for="(image, imageIndex) in column" :key="imageIndex" class="image-item" @click="showImage(image)">
        <img :src="image">
      </div>
    </div>
    <div v-if="selectedImage" class="modal" @click="closeImage">
      <img :src="selectedImage" alt="Enlarged Image" class="enlarged-image">
    </div>
  </div>
</template>

<script>
import p1 from '/@/assets/waterfall/1.jpg';
import p2 from '/@/assets/waterfall/2.jpg';
import p3 from '/@/assets/waterfall/3.jpg';
import p4 from '/@/assets/waterfall/4.jpg';
import p5 from '/@/assets/waterfall/5.jpg';
import p6 from '/@/assets/waterfall/6.jpg';
import p7 from '/@/assets/waterfall/7.jpg';
import p8 from '/@/assets/waterfall/8.jpg';
import p9 from '/@/assets/waterfall/9.jpg';
import p10 from '/@/assets/waterfall/10.jpg';
import p11 from '/@/assets/waterfall/11.jpg';
import p12 from '/@/assets/waterfall/12.jpg';
import p13 from '/@/assets/waterfall/13.jpg';
import p14 from '/@/assets/waterfall/14.jpg';
import p15 from '/@/assets/waterfall/15.jpg';
import p16 from '/@/assets/waterfall/16.jpg';
import p17 from '/@/assets/waterfall/17.jpg';
import p18 from '/@/assets/waterfall/18.jpg';
import p19 from '/@/assets/waterfall/19.jpg';
import p20 from '/@/assets/waterfall/20.jpg';
import p21 from '/@/assets/waterfall/21.jpg';
import p22 from '/@/assets/waterfall/22.jpg';
import p23 from '/@/assets/waterfall/23.jpg';
import p24 from '/@/assets/waterfall/24.jpg';
import p25 from '/@/assets/waterfall/25.jpg';
import p26 from '/@/assets/waterfall/26.jpg';
import p27 from '/@/assets/waterfall/27.jpg';
import p28 from '/@/assets/waterfall/28.jpg';
import p29 from '/@/assets/waterfall/29.jpg';
import p30 from '/@/assets/waterfall/30.jpg';
import p31 from '/@/assets/waterfall/31.jpg';
export default {
  name: 'ImageWaterfall',
  data() {
    return {
      images: [],
      columns: [
        [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15], 
        [ p16, p17, p18, p19, p20, p21, p22, p23, p24, p25, p26, p27, p28, p29, p30, p31]],
      selectedImage: null,
    };
  },
  created() {
    // await this.generateImages();
    // this.distributeImages();
  },
  methods: {
    // generateImages() {
    //   for (let i = 0; i < 31; i++) {
    //     this.images.push({
    //       id: i,
    //       url: await import(`@/assets/waterfall/${i+1}.jpg`),
    //       alt: `Random Image ${i}`,
    //     });
    //   }
    // },
    // distributeImages() {
    //   this.images.forEach((image, index) => {
    //     if (index % 2 === 0) {
    //       this.columns[0].push(image);
    //     } else {
    //       this.columns[1].push(image);
    //     }
    //   });
    // },
    showImage(url) {
      this.selectedImage = url;
    },
    closeImage() {
      this.selectedImage = null;
    },
  },
};
</script>

<style scoped>
.waterfall-container {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: linear-gradient(to right, #fff5f5, #e6e6fa); /* Light pink to lavender gradient */
  min-height: 100vh;
}

.column {
  display: flex;
  flex-direction: column;
  width: 49%;
}

.image-item {
  margin-bottom: 10px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.image-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.image-item img {
  width: 100%;
  height: auto;
  display: block;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.enlarged-image {
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
}
</style>