<template>
 <section class="navbar">
                <div class="navbar__tel">0930219544</div>
            <div class="navbar__logo">sportlegence.com.ua</div>
            <div class="basket__img" @click="Basketshow()"><i class="fas fa-shopping-basket"></i>
                <div class="basket__counter">{{counter}}</div>
            </div>
            <div class="menu">
                <div class="menu__img">
                    <div class="menu__img1"></div>
                    <div class="menu__img2"></div>
                </div>
                <ul>
                    <li id="mainli">Главная</li>
                    <li id="deliveryli">Доставка</li>
                    <li id="contactsli">Контакты</li>
                </ul>
            </div>
        </section>
</template>

<script>
export default {
     props:['counter'],
    data () {
    return {
        basket:true
    }
    },
  methods:{
      Basketshow(){
          this.$emit('yourbasket', this.basket);
      }
  }
}
</script>


<style>

</style>
