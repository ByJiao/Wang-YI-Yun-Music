<template>
  <div id='swiperTop'>
    <van-swipe :autoplay="3000" lazy-render>
        <van-swipe-item v-for="image in state.images" :key="image">
          <img :src="image.pic" />
       </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>

import {reactive,onMounted} from 'vue'
import { getBanner } from '@/request/api/home';
export default {
  setup() {
    const state = reactive({
      images:[
      
    ]});
    onMounted(async ()=>{
      // axios.get('http://localhost:3000/banner?type=2').then((res)=>{
      //   console.log(res);
      //   state.images=res.data.banners
      //   console.log(state.images);
      // })
      let res=await getBanner()
      state.images=res.data.banners
      //console.log(res);
    })
    return { state };
  },
};
</script>
<style>
#swiperTop{
  .van-swipe{
    width: 100%;
    height: 3rem;
    
   
    .van-swipe-item{
      padding: 0 0.2rem;
      img{
        width:100%;
        height: 100%;
        border-radius: 0.2rem;
      }
    }
    .van-swipe__indiacator--active{
      background-color:rgb(219,130,130);
    }
    
  }
}
</style>