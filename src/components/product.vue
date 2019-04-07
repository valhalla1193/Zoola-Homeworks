<template> 
<div class="container__product">
                 <div class="product__img"> <img :src=images[counter]>
                 </div>
                                  <div class="img__buttons">
                    <div class="img__buttons-prew" @click="SlidePrev()"><i class="fas fa-angle-left"></i>
                </div>
                    <div class="img__buttons-next" @click="SlideNext()"><i class="fas fa-angle-right"></i>
                        </div>
                </div>
                 <div class="product__info">
                     <div class="product__info-content">
                     <div class="info__name">{{name}}</div> 
                     <div class="info__price">
                            <div class="info-price__value">{{price}}</div>
                                <div class="info-price__name"> грн</div>
                        </div>
                    
                 </div>
                 <div class="product__buttons">
                     <div class="button__basket" @click="SendToContent()" id="button__basket">В корзину</div>
                     <div class="button__fastbuy" id="button__fastbuy">Купить</div>
                 </div> 
                 </div>
             </div>
             </template>

              <script>
export default {
    
    props: ['name','price','img','images'],
  data () {
    return {
        images:{},
counter:0,
product:{name:this.name, price:this.price}
    }
  },
  methods:{
      SlideNext(){
              if(this.counter<this.images.length-1)
              {this.counter++;}
              else{this.counter=0}
      },
       SlidePrev(){
              if(this.counter>0)
              {this.counter--;}
              else{this.counter=this.images.length-1}
      },
      SendToContent(){
           this.$emit('yourproduct', this.product);
      }
  }
  
}
</script>
<style>
@media  screen and (orientation:portrait) {

     .button__fastbuy,
     .button__basket
     {
    font-size: 3vh;
    height: 3vh; 
}
}
</style>