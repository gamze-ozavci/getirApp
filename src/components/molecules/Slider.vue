<template>
  <div class="slider-wrapper relative">
    <div id="slider-container" class="flex items-start overflow-hidden relative">
      <div v-for="index in images" :key="index" class="box-border overflow-hidden">
        <img class="block" :src="index"/>
      </div>
    </div>
    <a class="previous-slide left-0 absolute text-white font-bold" @click="previousSlide" href="#">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 24 24"
          stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
      </svg>
    </a>
    <a class="next-slide right-0 absolute text-white font-bold" @click="nextSlide" href="#">
      <svg xmlns="http://www.w3.org/2000/svg"
           fill="none" viewBox="0 0 24 24"
           stroke-width="1.5" stroke="currentColor"
           class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: [
    'images'
  ],
  data() {
    return {
      timer: null,
      currentIndex: 0,
      frame: 1,
      slideCount: 0,
      scrollWidth: 0,
      sliderWidth: 0,
      sliderElement: ''
    };
  },
  mounted() {
    this.setDimensions();

    window.addEventListener('resize', this.setDimensions);

    setInterval(() => this.slideLoop('next'), 2000);
  },
  methods: {
    setDimensions() {
      this.slideCount = this.images.length - this.frame;
      this.scrollWidth = window.innerWidth;
      this.sliderWidth = this.images.length * this.scrollWidth;
      this.sliderElement = document.getElementById('slider-container');
    },
    slideLoop(scrollType) {
      if (scrollType === 'next') {
        this.nextSlide();
      } else {
        this.previousSlide();
      }
    },
    nextSlide() {
      if (this.currentIndex >= this.slideCount) {
        this.currentIndex = 0;

        this.sliderElement.scrollLeft -= this.sliderWidth;
      } else {
        this.currentIndex++;

        this.sliderElement.scrollLeft += this.scrollWidth;
      }
    },
    previousSlide() {
      if (this.currentIndex <= this.scrollWidth) {
        this.currentIndex = this.slideCount;

        this.sliderElement.scrollLeft += this.sliderWidth;
      } else {
        this.currentIndex--;

        this.sliderElement.scrollLeft -= this.scrollWidth;
      }
    }
  }
}
</script>

<style>
#slider-container > div {
  min-width: 100vw;
}

.previous-slide,
.next-slide {
  cursor: pointer;
  top: 50%;
  width: auto;
  font-size: 15px;
  transition: 0.7s ease;
  text-decoration: none;
  user-select: none;
  border-radius: 50%;
}
</style>
