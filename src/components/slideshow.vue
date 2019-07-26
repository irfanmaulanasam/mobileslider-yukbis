<template>
<div id="autoslide">
    <section>
        <marquee loop=infinite behavior="alternate" onMouseOver="this.stop()" onMouseOut="this.start()">
                <div class="cardProduct" v-for="item in dataProduct" :key="item.id" >
                        <cardProduct 
                        :image="item.image"
                        :name="item.name"
                        :price="item.price" 
                        />
                </div>
        </marquee>
    </section>
</div>
</template>
<script>
import cardProduct from './card'
export default {
    name:'autoslide',
    components:{
        cardProduct
    },
    props:['dataProduct']
}
</script>

<style scoped>

/* .cardProduct {
    display: grid;
    align-items: center;
    justify-items: center;
    background-color: #fff;
    width: 10000px;
    margin: auto;
    padding-bottom: 67px;
}
  
marquee {
    height: 300px;
    width: 100%;
}
  
@media screen and (max-width: 1200px) {
    section {
        width: 100%;
    }
}

.myvideo {
  text-decoration: none;
  color: #fff;
  background: red;
  text-align: center;
  padding: 10px;
  font-weight: 600;
  z-index:100;
  position: absolute;
  bottom: 20px;
}
.myvideo:hover {
  color: #000;
} */
.tech-slideshow {
  height: 100px;
  max-width: 100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border:1px solid black;
}

.mover-1 {
  height: 150px;
  width: 10000px;
  
  position: absolute;
  overflow-x:hidden;
  top: 0;
  left: 0;

  animation: moveSlideshow 3s linear infinite;
}

.mover-1 img {
  display:inline-block;
  vertical-align:middle;
  width:100px;
  margin:0;
}

@keyframes moveSlideshow {
  100% { 
    transform: translateX(-520px);  
  }
}
</style>
