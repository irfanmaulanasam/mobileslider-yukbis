<template>
    <div id="scroll">
      <div class="navLeft">
      </div>
      <section class="card">
            <section v-for="item in dataProduct" :key="item.id" >
                  <div class="card--content" >
                      <cardProduct 
                      :image="item.image"
                      :name="item.name"
                      :price="item.price" 
                      />
                  </div>
            </section>
        </section>
  </div>
</template>
<script>
import cardProduct from './card'
export default {
    name:'scroll',
    props:['dataProduct'],
    components:{
      cardProduct,
    }
}
</script>
<style scoped>
body {
  width: 90%;
  height: 90%;
}
body {
  background-color: #2980b9;
  margin: 0;
  display: flex;
  justify-content: left;
  align-items: center;
}
.card {
  display: flex;
  min-width: 100%;
  min-height: 200px;
  overflow-x: auto;
}
.card::-webkit-scrollbar {
  display: visible;
}
.card--content {
  background-color: #ecf0f1;
  min-width: 200px;
  margin: 5px;
  padding: 0px;
  color: #34495e
}
</style>
