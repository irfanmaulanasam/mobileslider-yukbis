<template>
<div id="carousel">
  <div class="scroll">
  <scroll :dataProduct="dataProduct"/>
  </div>
  <div class="slideThumbnail">
   <slideThumbnail 
   :startingImage="1" 
   :imagesSrc="images"  
   :auto-slide-interval="3000"
   :show-progress-bar="true"/>
  </div>
</div>
</template>
<script>
import images from './assets/image'
import dataProduct from './assets/dataProduct'
import scroll from './components/scroll'
import slideThumbnail from './components/slideThumbnail'
export default {
    name:'carousel',
    components:{
        scroll,
        slideThumbnail
    },
    data(){
        return {
            dataProduct,
            images
        }
    }
}
</script>