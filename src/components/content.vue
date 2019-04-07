 <template>
    <section class="content__container">
    <app-product @yourproduct="SendToBasket" v-for="leggin in leggins" 
    :key="leggin.id"
    :name="leggin.name"
    :price="leggin.price"
    :images="leggin.images"
    ></app-product>
                </section>
                 </template>

                
 <script>
 import Product from './product.vue';

export default {
    
  data () {
    return {
      product:{},
      leggins:[
                    {name:'Леггинсы "Violet"', price:'599', id:"1", images:['../../src/assets/leggins/photosA1.jpg','../../src/assets/leggins/photosA2.jpg']},
                  {name:'Леггинсы "AmFootball"', price:'599', id:"2", images:['../../src/assets/leggins/photosB1.jpg','../../src/assets/leggins/photosB2.jpg']},
                  {name:'Леггинсы "Blackass"', price:'599', id:"3", images:['../../src/assets/leggins/photosC1.jpg','../../src/assets/leggins/photosC2.jpg']},
                  {name:'Леггинсы "SuperHot"', price:'599', id:"4", images:['../../src/assets/leggins/photosD1.jpg','../../src/assets/leggins/photosD2.jpg', '../../src/assets/leggins/photosD3.jpg']},
                   {name:'Леггинсы "Boom"', price:'599', id:"5", images:['../../src/assets/leggins/photosE1.jpg','../../src/assets/leggins/photosE2.jpg', '../../src/assets/leggins/photosE3.jpg']},
                    {name:'Леггинсы "Angels"', price:'599', id:"6", images:['../../src/assets/leggins/photosF1.jpg','../../src/assets/leggins/photosF2.jpg', '../../src/assets/leggins/photosF3.jpg']},
                     {name:'Леггинсы "Sculls&Roses"', price:'599', id:"7", images:['../../src/assets/leggins/photosG1.jpg']},
                      {name:'Леггинсы "White Bee"', price:'599', id:"8", images:['../../src/assets/leggins/photosH1.jpg','../../src/assets/leggins/photosH2.jpg', '../../src/assets/leggins/photosH3.jpg']},
                       {name:'Леггинсы "Black Bee"', price:'599', id:"9", images:['../../src/assets/leggins/photosI1.jpg','../../src/assets/leggins/photosI2.jpg']},
                        {name:'Леггинсы "Trec Girl"', price:'599', id:"10", images:['../../src/assets/leggins/photosJ1.jpg','../../src/assets/leggins/photosJ2.jpg']}
                  ]
    }
  },
   methods:{
       SendToBasket: function(value){
         this.product=value;
           this.$emit('yourproduct', this.product);
      }

   },
   components:{
       'app-product': Product
   }
}
</script>