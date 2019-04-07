  <template>
   <section class="header">
            <div class="header__img"><img src="../assets/fotoheader.jpg"></div>
            <div class="header__shadow">
 <h1> Спортивные Леггинсы для  девушек</h1>
                <h1>Спортивные Лосины для  девушек</h1>
                <h1>Стильные леггинсы для девушек</h1>
                <h1>Стильные легенсы для девушек</h1>
                <h1>Стильные лосины для девушек</h1>
                <h1>Стильные Спортивные Леггинсы и Лосины</h1></div>
            <div class="header__title">sportlegence.com.ua</div>
            <div class="header__subtitle">Легенсы с неповторимым дизайном</div>
            <div class="header__text">
                <div class="header-text__part1"><i class="far fa-check-circle"></i>УНИКАЛЬНОСТЬ</div>
                <div class="header-text__part2"><i class="far fa-check-circle"></i>КОМФОРТ</div>
            </div>
            <div class="header__text2">
                    <div class="header-text2__part1"><i class="far fa-check-circle"></i>СТИЛЬ</div>
            </div>
        </section>       
</template>

<script>
export default {
  props: {
  }
}
</script>

<style>
h1{
    opacity:0;
}
.header{
    position: relative;
}
.header__img{
    box-sizing: border-box;
    height:52.5vw;
    overflow: hidden;
}
.header__img>img{
    width: 100%;
    height: 120%;
    margin-top:-10%;
}
.header__shadow{
position: absolute;
width: 100%;
height:53.0vw;
background: black;
opacity: 0.4;
top:0%;
}
.header__title{
position: absolute;
top:20%;
left:20%;
width:60vw;
height:10vw;
 font-family: 'Oswald', sans-serif;
 font-size: 8vw;
 /* border: 0.5px solid red; */
 color: white;
 line-height: 0.7;
 box-shadow:0 0 50px rgb(0, 0, 0);
}
.header__subtitle{
position: absolute;
/* border: 0.5px solid red; */
box-shadow:0 0 50px rgb(0, 0, 0);
width:60vw;
height:5vw;
top:40%;
left:20%;
color: white;
font-family: 'Oswald', sans-serif;
 font-size: 3vw;
 text-align: center;
}
.header__text{
    position: absolute;
    top:60%;
    left:20%;
    width:60vw;
    height:6vw;
    /* border: 0.5px solid red; */
    box-shadow:0 0 50px rgb(0, 0, 0);
    display: flex;
}
.header__text2{
    position: absolute;
    top:80%;
    left:40%;
    width:30vw;
    height:6vw;
    /* border: 0.5px solid red; */
    box-shadow:0 0 50px rgb(0, 0, 0);
    display: flex; 
}
.header-text__part1,
.header-text__part2{
    width: 30%;
    margin-left:15%;
    font-size: 1.5vw;
    color:white;
    display: flex; 
}
.header-text__part1>i,
.header-text__part2>i{
    font-size: 6vw;
    color:white;
}
.header-text2__part1{
    /* margin-left:15%; */
    font-size: 3vw;
    color:white;
    display: flex;
}
.header-text2__part1>i{
    font-size: 7vw;
    color:white; 
}
@media  screen and (orientation:portrait) {
     .header__text,
    .header__text2{
        display:none;
    }
    .header__title{
        top:40%;
    }
.header__subtitle{
    top:90%;
}
}
</style>
