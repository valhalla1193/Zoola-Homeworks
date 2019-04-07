<template>
 <div class="container__product">
                 <div class="product__info">
                     <div class="product__info-content">
                     <div class="info__name">{{name}}</div> 
                     <div class="info__price">
                            <div class="info-price__value">{{price}}</div>
                                <div class="info-price__name"> грн</div>
                        </div>
                 </div>
                 </div>
                 <div class="product__buttons">
                     <div class="button__delete" @click="SendIndex()">удалить</div>
                 </div> 
             </div>
</template>

<script>
export default {
    props:['name', 'price','index'],
data () {
    return {
        
    }
},
methods:{
    SendIndex(){
        this.$emit('yourindex', this.index);
    }
}
}
</script>


<style scoped> 

.product__buttons {
     width:100%;
}
.product__info{
        padding-top: 5%;
        width:100%;
        display: flex;
        flex-wrap: wrap;
    }
     .product__info-content{
        /* border: 1px solid red; */
        width:100%;
    }
     .info__name{
        width: 70%;
        /* border: 1px solid red; */
    }
     .info__price{
        width: 20%;
        /* border: 1px solid red; */
    }
    .container__product{
        height:10vh;
        width: 60%;
    }
    .button__delete{
         display:flex;
        flex-direction:column;
        justify-content:center;
        border-radius:10%;
    }
    @media  screen and (orientation:portrait) {
       .button__delete{
        display:block;
        font-size:2vh;
        height:3vh;
        margin-top:1vh;
        display:flex;
        flex-direction:column;
        justify-content:center;
    } 
    }
    
    
    </style>