<template>
    <section class="basket" :="SendCounter()">
            <div class="basket__header">
                <div class="basket__name">корзина</div>
                <div class="basket__close" @click="Basketclose()"><i class="far fa-times-circle"></i></div>
            </div>
            <div class="basket__container"> 
                    <div class="basket__content">
                    <app-basketproduct @yourindex="DeletefromArr" v-for="product,index) in products"
                    :index="index"
                    :name="product.name"
                    :price="product.price"
                    >
                    </app-basketproduct>
                    </div>
                <div class="basket__form">
                <form id="basket__form">
                        <p>Ваше Имя<br>
                        <input class="input" name="firstname" required></p>
                        <p>Ваша фамилия<br>
                            <input class="input" name="lastname"></p>
                        <p>Ваш Email<br>
                            <input class="input" name="youremail"></p>
                            <p>Ваш телефон<br>
                                <input class="input" name="yourphone"required></p>
                                <p>Город<br>
                                    <input class="input" name="sity"></p>
                                <p>Ваше сообщение<br>
                                    <textarea class="message" name="yourmessage" size="200"></textarea></p>
                                    <input  class="inputsubmit" type="submit" value="отправить" @click="OrderSend">
                    </form>  
        </div></div>
            <div class="basket__footer">
                    <div class="basket-footer__total"> 
                            <div class="total__name" @click="Summ">Итого:</div>
                            <div class="total__price">{{Summ}}</div>
                            <div class="total__text">грн</div>

                    </div>  
            </div>
        </section>
</template>
<script>
import Basketproduct from './basketproduct.vue'
import axios from 'axios';

export default {
    props:['products'],
data () {
    return {
        basket:false
        
           }
},
computed:{
    counter:function(){
        return(this.products.length)
    },
     Summ:function(){
        let summ=0;
            this.products.forEach(function(index){
                summ+=+index.price;
            })
            return(summ);
    }
},
methods:{
    Basketclose(){
          this.$emit('yourbasket', this.basket);
    },
    SendCounter(){
         this.$emit('yourcounter', this.counter);
    },
    DeletefromArr:function(value){
     this.products.splice(value, 1);
    },
    OrderSend: function(){
       axios.post('send2.php',{
           products: this.products
       })
       .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error.response)
        })
    }
},
 components: {
    'app-basketproduct':Basketproduct
    }
}
</script>


<style>
/* КОРЗИНА */
.basket__img{
    position: relative;
    height:5vw;
    width: 5vw;
    font-size: 5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 15%;
    box-sizing: border-box;
}
.basket__img:hover{
    cursor: pointer;
}
.basket__counter{
    position: absolute;
    bottom:0%;
    right:0%;
    height:3vw;
    width: 3vw;
    box-sizing: border-box;
    font-size: 3vw;
    color:red;
}
.basket{
    position:fixed;
    top:15%;
    width: 80%;
    height: 80vh;
    margin-left: 10%;
    /* padding-top: 5%; */
    background: rgba(0, 0, 0, 0.9);
    box-shadow: 0 0 30px rgb(0, 0, 0);
    border-radius:1%;
    color:white;
        z-index: 1;
}
.basket__header{
    display:flex;
    width: 100%;
    height: 10%;
    position: relative;
}
.basket__name{
    text-transform: uppercase;
    width:100%;
    font-size: 4vw;
    text-align: center;
}
.basket__close{
    position: absolute;
    right:0%;
    height: 100%;
    width: 5%;
    font-size: 4vw;
}
.basket__close:hover{
    cursor: pointer;
}
.basket__container{
    color:white;
    font-size: 1.5vw;
    width:100%;
    height: 80%;
    overflow-y: auto;
    box-sizing: border-box;
    }
    .basket__container::-webKit-scrollbar{
        width: 2%;
        background-color: black;
    }
    .basket__container::-webkit-scrollbar-thumb{
        width: 2%;
        background:silver;
    }
   

    .basket__content>.product__info .product__buttons .button__delete{
        display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    /* border:2px solid silver;  */
    /* box-shadow:0 0 10px rgb(153, 153, 153); */
    font-size: 2vw;
    border-radius: 5%;
    box-sizing: border-box;
    height: 3vw; 
    /* text-transform: uppercase; */
    }
    .basket__footer{
        box-sizing: border-box;
        display:flex;
        width: 100%;
        height: 10%;
    }
    .basket-footer__total{
        display:flex;
        font-size: 2vw;
    }
@media  screen and (orientation:portrait) {

    .basket__content>.product__info .product__buttons .button__delete{
    font-size: 2vh;
    height: 3vh; 
}
.basket-footer__total{
    display:flex;
    font-size: 4vh;
}
.basket__close{
    height: 100%;
    width: 10%;
    font-size: 4vh;
    opacity:0.7;
}
.basket__close:hover{
    opacity:1;
}
}
/* КОНЕЦ КОРЗИНЫ */
</style>