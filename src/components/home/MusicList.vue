<template>
    <div class="musicList">
        <div class="musicTop"> 
            <div class="title">发现好歌单</div>
            <div class="more">查看更多</div>
        </div>
       <div class="MusicContent">
        <van-swipe :loop="false" :width="150" class="mySwipe" :show-indicators=flase>
            <van-swipe-item v-for='item in state.MusicList' :key='item'>
                <router-link :to="{path:'/itemMusic',query:{id:item.id}}">
                <img :src="item.picUrl" alt=""/>
                <span class="playCount">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-a-24gl-play"></use>
                    </svg>
                    {{changeCount(item.playCount)}}
                </span>
                <span class="name">{{item.name}}</span>
            </router-link>
            </van-swipe-item>
        </van-swipe>
       </div>

    </div>
    
</template>
<script>
import {getMusicList} from '@/request/api/home.js'
import { onMounted,reactive } from 'vue';
export default{
    // 
    setup() {
    const state = reactive({
      MusicList:[
      
    ]});
    function changeCount(params) {
          if(params>=100000000){
            return (params/100000000).toFixed(1)+'亿'
          }else if(params>=10000){
            return (params/10000).toFixed(1)+'万'
          }
    }
    onMounted(async ()=>{
      // axios.get('http://localhost:3000/banner?type=2').then((res)=>{
      //   console.log(res);
      //   state.images=res.data.banners
      //   console.log(state.images);
      // })
      let res=await getMusicList()
      state.MusicList=res.data.result
      //console.log(state.MusicList);
      
      
      
    })
     return { state,changeCount };
     
    },
    
        
    
};
</script>
<style lang="less" scoped>
.musicList{
   width: 100%;
   height: 5rem;
   padding: 0.2rem;
   .musicTop{
     width: 100%;
     height: 0.6rem;
     display: flex;
     justify-content: space-between;
     margin-bottom: 0.2rem;
     .title{
        font-size: 0.4rem;
        font-weight: 900;
     }
     .more{
        border: 1px solid #ccc;
        text-align: center;
        line-height: 0.6rem;
        padding: 0 0.2rem;
        border-radius: 0.4rem;

     }

   }
   .MusicContent{
    width: 100%;
    height: 200px;
    .van-swipe-item{
       padding-right: 0.2rem;
       position: relative;
       height: 3.8rem;
       img{
        width: 100%;
        height: 2.4rem;
        border-right:0.2rem ;

       }
       .playCount {
            position: absolute;
            z-index: 100;
            right: 0.3rem;
            color: white;
            margin-top: 0.06rem;
            .icon {
            width: 0.3rem;
            height: 0.3rem;
            }
        }
        .name {
            
            bottom: 0px;
       }
    }

   }
   
}

</style>