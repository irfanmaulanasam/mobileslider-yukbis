<template>
    <div id="scrollslide">
        <p>
            <a @click="prev" href='#'>Previous</a> || <a @click="next" href='#'>Next</a>
        </p>    
        <transition-group name='fade' tag='div'>
            <div
            v-for="number in [currentNumber]"
            :key='number'
            >
            <img
            :src="currentImage"
            v-on:mouseover="stopRotation"
            v-on:mouseout="startRotation"
            />
            </div>
        </transition-group>
    </div>
</template>

<script>
export default {
    name: 'scrollslide',
 data() {
     return {
        images: ['http://i.imgur.com/vYdoAKu.jpg', 'http://i.imgur.com/PUD9HQL.jpg', 'http://i.imgur.com/Lfv18Sb.jpg', 'http://i.imgur.com/tmVJtna.jpg', 'http://i.imgur.com/ZfFAkWZ.jpg'],
        currentNumber: 0,
        timer: null
     }
 },
 mounted () {
 this.startRotation();
 },
 methods: {
    startRotation () {
    this.timer = setInterval(this.next, 3000);
    },

    stopRotation: function() {
    clearTimeout(this.timer);
    this.timer = null;
    },
    next: function() {
        this.currentNumber += 1
    },
    prev: function() {
        this.currentNumber -= 1
    }
 },
 computed: {
    currentImage: function() {
      	return this.images[Math.abs(this.currentNumber) % this.images.length];
      }
    }
}
</script>
<style scoped>
body{
    background-color: gray;
    opacity:50%;
    outline: 1em dashed red;
}
.fade-enter-active, .fade-leave-active {
  transition: all 0.8s ease;
  overflow: hidden;
  visibility: visible;
  opacity: 1;
  position: absolute;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  visibility: hidden;
}
</style>
