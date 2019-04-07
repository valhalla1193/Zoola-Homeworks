<template>
  <div id="app">
  <app-navbar :counter="counter"  @yourbasket="basket = $event"></app-navbar>
  <app-header></app-header>
  <app-basket @yourcounter="counter=$event" @yourbasket="basket = $event" v-show="basket" :products="products"></app-basket>
  <app-content v-on:yourproduct='SendToBasket'></app-content>
  </div>
</template>

<script>
import navbar from './components/navbar.vue'
import header from './components/header.vue'
import content from './components/content.vue'
import basket from './components/basket.vue'

export default {
  data () {
    return {
       basket:false,
       counter:0,
      product:{},
      products:[]
    }
  },
   methods:{
     SendToBasket: function(value){
         this.product=value;
           this.products.push(this.product);
      }
  },
  components: {
    navbar,
    header,
    content,
    basket
  }
 
}
</script>

<style>
body{
  margin:0;
}
app-basket{
    display:none;
}
#app {
    margin:0;
    background: url('./assets/depositphotos_46953867-stock-photo-weathered-black-brick-wall-background.jpg');
}
.navbar{
    position: fixed;
    z-index: 2;
    box-shadow:0 0 40px black;
    width:100%;
    height:6vw;
    background: url('./assets/depositphotos_46953867-stock-photo-weathered-black-brick-wall-background.jpg');
    display: flex;
    color:white;
    font-family: 'Oswald', sans-serif;
    opacity: 0.95;
}
.navbar__tel{
    opacity: 1;
    width: 20%;
    text-align: center;
    /* border: 0.5px solid red; */
    font-size:3vw;
    line-height:6vw;
    /* box-shadow:0 0 20px rgb(8, 172, 248); */
}
.navbar__logo{
    opacity: 1;
    width: 40%;
    text-align: center;
    /* border: 0.5px solid red; */
    font-size:3vw;
    line-height:6vw;
    margin-left: 12%;
    /* box-shadow:0 0 20px rgb(8, 172, 248); */
}
.navbar__logo:hover{
    /* background: rgb(117, 203, 230); */
    opacity:1;
    cursor:pointer;
    box-shadow:0 0 20px rgb(8, 172, 248); 
}

.menu__img>img{ 
    width: 100%;
    height: 100%;
}
.inputsize{
    width:50%;
    display: flex;
    justify-content: space-between;
}

.menu{
    opacity: 0.9;
    position: relative;
    box-sizing: border-box;
    width:5%;
    /* border: 0.5px solid red; */
    height:100%;
    margin-left: 2%;
}
.menu>ul{
    display:none;
    position: absolute;
    right:0%;
    top:100%;
    margin-block-start: 0;
    margin-block-end: 1em;
}
.menu__img{
    box-sizing: border-box;
    height: 90%;
border-bottom:1vw solid white; 
border-top:1vw solid white;
}
.menu__img1{
    box-sizing: border-box;
    height: 50%;
    border-bottom:0.5vw solid white; 
}
.menu__img2{
    box-sizing: border-box;
    border-top:0.5vw solid white;
}
.menu:hover{
    opacity: 1;
    cursor:pointer;
}
.menu:hover>ul{
    display:block;
}
li{
    box-sizing: border-box;
    /* background: #375090; */
    /* height: 6vh; */
    width:12.5vw;
    list-style-type: none;
    height:5vw;
    line-height: 5vw;
    text-align: end;
    font-size: 2vw;
    box-shadow:0 0 10px rgb(0, 0, 0);
    background: rgba(0, 0, 0, 0.7);
}
.menu>ul li:hover{
    /* border: 1px solid white; */
    opacity: 1;
    box-shadow:0 0 20px rgb(8, 172, 248);
    background: rgb(117, 203, 230);
    color:blue;
}

.content{
    position: relative;
    margin-top:4vw;
    margin-bottom:4vw;
    /* height: 85vw; */
    /* background: url(' beautyrobic-exercise-fit-866023.jpg'); */
    /* background-size: 100% 100%;
    background-position: center; */
    /* boxing-female-fight-161017.jpg */
    /*  */
}
.content__shadow{
width: 100%;
height: 100vw;
/* background: black; */
opacity: 0.6;
top:0%;
}
.content__container{
    /* position: absolute; */
    /* top:0%; */
    margin-left: 10%;
    /* height: 85vw; */
    width:80%;
    box-shadow:0 0 50px rgb(0, 0, 0);
    display: flex;
    justify-content:space-around;
    flex-wrap: wrap;
    background: rgba(0, 0, 0, 0.6);
}
.container__product{
font-family: 'Oswald', sans-serif;
    position: relative;
    margin-top:2vw;
    box-sizing: border-box;
    width: 40%;
    height: 40vw;
    background: rgba(0, 0, 0, 0.2);
    box-shadow:0 0 50px rgb(153, 153, 153);
    filter: brightness(1);
}
.container__product:hover{
    box-shadow:0 0 50px rgb(117, 203, 230);
    filter: brightness(1.1);
}
.product__img{
    height:80%;
    overflow: hidden;
}
.product__img>img{
    width: 100%;
    height: 200%;
    margin-top:-40%;
    /* margin-bottom:-15%; */
}
#img2>img{
    margin-top:-60%;
    height: 230%;
}
#img3>img,
#img4>img{
    margin-top:-35%;
    height: 165%;   
}
#img9>img,
#img8>img,
#img7>img,
#img5>img,
#img6>img{
    margin-top:-30%;
    height: 160%;
}
.img__buttons{
    display:flex;
    justify-content: space-between;
    box-sizing: border-box;
    position: absolute;
    top:40%;
    height: 10%;
    width: 100%;
    /* border: 0.5px solid red; */
}
.img__buttons-prew,
.img__buttons-next{
    color:rgb(8, 163, 235);
    font-size: 5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* border: 0.5px solid red; */
    opacity: 0.2;
}
.img__buttons-prew:hover,
.img__buttons-next:hover{
    opacity: 1;
    cursor: pointer;
}
.product__info{
    box-sizing: border-box;
    /* border:0.5px solid red; */
    height: 20%;
}
.product__info-content{
    box-sizing: border-box;
    height: 50%;
    display:flex;
    /* border:0.5px solid red; */
    color: white;

}
.info__name{
    display:flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 70%;
    /* border:0.5px solid red; */
    font-size: 2vw;
}
.info__price{
    display:flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 30%;
    /* border:0.5px solid red; */
    font-size: 2vw;
}
.product__buttons{
    box-sizing: border-box;
    display:flex;
    justify-content: space-between;
    align-items: center;
    color:white;
    height: 50%;
}
.button__basket{
/* display:none; */
display: flex;
align-items: center;
justify-content: center;
    box-sizing: border-box;
width: 40%;
height: 60%;
/* border:2px solid black;  */
font-size: 2vw;
text-align: center;
border-radius: 5%;
/* text-transform: uppercase; */
}
.button__delete{
    box-sizing: border-box;
    height: 3vw; 
    display:none;
}
.button__fastbuy{
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 50%;
    height: 60%;
    /* border:2px solid silver;  */
    /* box-shadow:0 0 10px rgb(153, 153, 153); */
    font-size: 2vw;
    border-radius: 5%;
    /* text-transform: uppercase; */
}
.button__delete:hover,
.button__basket:hover,
.button__fastbuy:hover{
color:blue;
box-shadow:0 0 30px rgb(117, 203, 230);
border:2px solid rgb(117, 203, 230);
background: rgb(117, 203, 230);
cursor: pointer;
}
.delivery{
    padding-top: 1%;
    height:60vw;
    width:80%;
    margin-left:10%;
    background: rgba(0, 0, 0, 0.7);
    background-position: center;
    box-shadow:0 0 30px rgb(0, 0, 0);
    color:white;
    font-size: 2vw;
    text-align: center;
}
.deliverytitle{
font-size: 4vw;
text-align: center;
}

/* footer */
.footer{
    margin-top: 5vw;
    height:10vw;
    box-shadow:0 0 40px rgb(0, 0, 0);
    background: url('./assets/depositphotos_46953867-stock-photo-weathered-black-brick-wall-background.jpg');
    display:flex;
    color:white;
    font-family: 'Oswald', sans-serif;
    opacity: 0.95;
}
.footer__contacts{
    opacity: 1;
    width: 20%;
    text-align: center;
    /* border: 0.5px solid red; */
    font-size:2vw;
    /* line-height:6vw; */
    /* box-shadow:0 0 20px rgb(8, 172, 248); */
}
.footer__logo{
    opacity: 1;
    width: 40%;
    text-align: center;
    /* border: 0.5px solid red; */
    font-size:4vw;
    line-height:6vw;
    margin-left: 12%;
    /* box-shadow:0 0 20px rgb(8, 172, 248); */
}
.footer__contacts:hover,
.footer__logo:hover{
    /* background: rgb(117, 203, 230); */
    opacity:1;
    cursor:pointer;
    box-shadow:0 0 20px rgb(8, 172, 248); 
}
.footer__button{
    /* border:1px solid red; */
    opacity: 0.7;
    box-sizing: border-box;
    width:6%;
    /* border: 0.5px solid red; */
    height:100%;
    margin-left: 21%;
    color:white;
    /* text-align: end; */
    display:flex; 
    justify-content: flex-end;
    align-items: center;
}
.footer__button>i{
    color:white;
    font-size:5vw;
    margin-left:0;
    opacity: 0.8;
}
.footer__button>i:hover{
    cursor: pointer;
    opacity: 1.2;
}
.fastbuy{
    display:none;
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
font-size: 3vw;
padding-bottom:2vw;
padding-left:2vw;
/* overflow-y: scroll; */
}
.fastbuy__product-info{
    display: flex;
}
.close{
    width:10%;
    margin-left: 90%;
    height: 3vw;
    /* border:1px solid red; */
    font-size:3vw;
    display:flex;
    justify-content: flex-end;
    opacity:0.7;
}
.close:hover{
    cursor:pointer;
    opacity:1;
}
.inputname,
.inputprice{
    display: none;
}
.inputs__radio{
    display:none;
    margin-top:2%;
    /* display: flex; */
}
.basket__content>.product__info .inputs__radio{
    display:flex;
}
.inputs__radio>form{
    display:flex;
    flex-direction: row;
}
.inputsize{
    width:50%;
    display: flex;
    justify-content: space-between;
}
.fastbuy-product__name{
    margin-top: 1%;
    width:70%; 
}
.fastbuy-product__price{
    margin-top: 1%;
    display:flex;
}
.fastbuy__form{
color:white;
font-size: 1.5vw;
width:100%;
height: 80%;
overflow-y: auto;
}
.fastbuy__form::-webKit-scrollbar{
    width: 2%;
    background-color: black;
}
.fastbuy__form::-webkit-scrollbar-thumb{
    width: 2%;
    background:silver;
}

.input{
    width:60%;
    height: 2vw;
    font-size: 2vw;
}
.inputsubmit{
    height: 3vw;
    width:20%;
    font-size: 2vw;
    border-radius:10%;
}
.message{
    width:60%;
    height: 4vw;
    font-size: 1vw;
}
.inputsubmit:hover{
    color:blue;
box-shadow:0 0 30px rgb(117, 203, 230);
border:2px solid rgb(117, 203, 230);
background: rgb(117, 203, 230);
cursor: pointer;
}

@media  screen and (orientation:portrait) {
    .navbar{
        height: 6vh;
    }
    .navbar__tel,
    .navbar__logo{
        font-size: 3vh;
    line-height: 6vh;
    }
    li{
         width: 40vw;
        height: 7vh;
    line-height: 7vh;
    text-align: end;
    font-size: 4vw;
    }
    /* .content__container{
        width: 90%;
        margin-left: 5%;
    }
    .container__product{
        height: 45vw;
        /* font-size:5vh;} */
    .content__container{
        width: 100%;
        margin-left: 0%;
}
.container__product {
    height: 60vw;
    font-size: 5vh;
    margin-top: 3vh;
    width: 45%;
}
.img__buttons-prew,
 .img__buttons-next {
    font-size: 7vh;
}
.info__name,
.info__price{
       font-size: 3.1vw;
}
.button__basket,
.button__fastbuy{
    font-size: 3.3vw;
    width: 50%;
}
.fastbuy__product-info {
    display: flex;
    font-size: 5vw;
}
form{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80%;
    font-size: 2vw;
}
.basket__img{
    margin-left: 8%;
    width: 5vh;
    height: 5vh;
    font-size: 5vh;
}
.menu__img{
    box-sizing: border-box;
    height: 90%;
    width: 4vh;
border-bottom:1vh solid white; 
border-top:1vh solid white;
}
.menu__img2{
    border-top:0.5vh solid white;
}
.menu__img1{
    border-bottom:0.5vh solid white;
}
.basket__counter{
    height:3vh;
    width: 3vh;
    box-sizing: border-box;
    font-size: 3vh;
    color:red;
}
.menu>ul{
    display:none;
    position: absolute;
    right:-40%;
    top:100%;
    margin-block-start: 0;
    margin-block-end: 1em;
}
.menu>ul li{
    text-align: center;
    background: rgba(0, 0, 0, 1);
}
.input{
    width:60%;
    height: 2vh;
    font-size: 2vh;
}
.inputsubmit{
    height: 6vh;
    width:60%;
    font-size: 4vh;
    border-radius:10%;
}
.message{
    width:60%;
    height: 4vh;
    font-size: 1vh;
}
.inputsubmit:hover{
    color:blue;
box-shadow:0 0 30px rgb(117, 203, 230);
border:2px solid rgb(117, 203, 230);
background: rgb(117, 203, 230);
cursor: pointer;
}


.close {
    right:0%;
    width: 10%;
    font-size: 4vh;
}

}
</style>
