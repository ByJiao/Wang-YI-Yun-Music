<template>
    <div class="searchTop">
        <svg class="icon" aria-hidden="true"  @click="this.$router.go(-1)">
             <use xlink:href="#icon-zuojiantou"></use>
        </svg>
        <input type="text" placeholder="周杰伦" v-model="state.searchKey" @keydown.enter='enterKey' >
    </div>
    <div class="searchHistory">
        <span class="searchSpan">历史</span>
        <span v-for='item in state.keyWorldList' :key='item' class="searchKey" @click='searchHistory(item)'>
        {{item}}</span>
        <svg class="icon" aria-hidden="true" @click='delHistory'>
             <use xlink:href="#icon-shanchu"></use>
        </svg>
    </div>
    <div class="itemList">
        <div  class="item" v-for="(item, i) in state.searchList" :key="i">
            <div class="itemLeft"  @click="updateIndex(item)" > 
               
               <span class="leftSpan">{{ i + 1 }}</span>
               <div>
                <p>{{ item.name }}</p>
                <span v-for="(item1,index) in item.artists" :key='index'>
                    {{item1.name}}
                </span>
               </div>
            </div>
            <div class="itemRight">
                <svg class="icon bofang" aria-hidden="true" v-if='item.mvid !=0'>
                  <use xlink:href="#icon-a-24gl-play"></use>
                </svg>
                <svg class="icon liebiao" aria-hidden="true">
                  <use xlink:href="#icon-liebiao"></use>
                </svg>
            </div>
        </div>
    </div>
</template>
<script>
import {useStore} from 'vuex'
import { onMounted, reactive } from 'vue'
import {getSearchMusic} from '@/request/api/home.js'
export default{
  //vue2
  //  data(){
  //   return{
  //       keyWorldList:[],
  //       searchKey:"",
  //       searchList:[],
  //   }
  //   },
  //   mounted() {
  //       this.keyWorldList=JSON.parse(localStorage.getItem('keyWorldList')||'[]')
  //   },
  //   methods: {
  //       enterKey:async function(){
  //           if(this.searchKey!=""){
  //               this.keyWorldList.unshift(this.searchKey)
  //               //去重
  //               this.keyWorldList=[...new Set(this.keyWorldList)]
  //               //固定长度
  //               if(this.keyWorldList.length>10){
  //                   this.keyWorldList.splice(this.keyWorldList.length-1,1)
  //               }
  //               localStorage.setItem("keyWorldList",JSON.stringify(this.keyWorldList))
  //               let  res=await getSearchMusic(this.searchKey)
  //               this.searchList=res.data.result.songs
  //               this.searchKey=""
  //           }
          
  //       },
  //       delHistory:function(){
  //           localStorage.removeItem("keyWorldList")
  //           this.keyWorldList=[]
  //       },
  //       searchHistory:async function(item){
  //           let  res=await getSearchMusic(item)
  //           //console.log(res);
  //           this.searchList=res.data.result.songs
  //       },
  //       updateIndex:function(item){
  //           item.al=item.album
  //           item.al.picUrl=item.album.artist.img1v1Url

  //           this.$store.commit('pushPlayMusic',item)
  //           this.$store.commit('updateplaylistindex',this.$store.state.playlist.length-1)
  //       }
  //   },
  //vue3
  setup() {
    const store=useStore()
    const state=reactive({
        keyWorldList:[],
        searchKey:"",
        searchList:[],
    })
    onMounted(()=>{
      state.keyWorldList=JSON.parse(localStorage.getItem('keyWorldList')||'[]')
    })
    async function enterKey(){
      
      if(state.searchKey!=""){
          state.keyWorldList.push(state.searchKey)
          //去重
          state.keyWorldList=[...new Set(state.keyWorldList)]
          //固定长度
          if(state.keyWorldList.length>10){
              state.keyWorldList.splice(state.keyWorldList.length-1,1)
          }
          localStorage.setItem("keyWorldList",JSON.stringify(state.keyWorldList))
          let  res=await getSearchMusic(state.searchKey)
          state.searchList=res.data.result.songs
          state.searchKey=""
      }
    }
    function delHistory(){
            localStorage.removeItem("keyWorldList")
            state.keyWorldList=[]
    }
    async function searchHistory(item){
          
           let  res=await getSearchMusic(item)
            //console.log(res);
            state.searchList=res.data.result.songs
    }
    function updateIndex(item){
           item.al=item.album
           item.al.picUrl=item.album.artist.img1v1Url
           
           store.commit('pushPlayMusic',item)
           store.commit('updateplaylistindex',store.state.playlist.length-1)
           console.log(item);
    }
    return {state,enterKey,delHistory,searchHistory,updateIndex}
  }
}

</script>
<style>
.searchTop{
    width: 100%;
    height: 1rem;
    padding: 0 0.2rem;
    display: flex;
    align-items: center;
    input{
        margin-left: 0.2rem;
        border: none;
        border-bottom: 1px solid #999;
        width: 90%;
        padding: 5px;
    }
    
}
.searchHistory {
  width: 100%;
  padding: 0.2rem;
  position: relative;
  .searchSpan {
    font-weight: 700;
  }
  .searchKey {
    padding: 0.1rem 0.2rem;
    background-color: rgb(185, 169, 169);
    border-radius: 0.4rem;
    margin: 0.1rem 0.2rem;
    display: inline-block;
  }
  .icon {
    width: 0.3rem;
    height: 0.3rem;
    position: absolute;
    right: 0.2rem;
  }
}
.itemList {
    padding: 10px;
    width: 100%;
    .item {
      width: 100%;
      height: 1.4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .itemLeft {
        width: 85%;
        height: 100%;
        display: flex;
        align-items: center;
        .leftSpan {
          display: inline-block;
          width: 0.2rem;
          text-align: center;
        }
        div {
          p {
            width: 4.54rem;
            height: .4rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 700;
          }
          span{
            font-weight: 400;
            font-size: .24rem;
            color: #999;
          }
          margin-left: 0.3rem;
        }
      }
      .itemRight{
        width: 20%;
        height: 100%;
        display: flex;
    
        align-items: center;
        position: relative;
        .icon{
          fill: #999;
        }
         .bofang{
            position: absolute;
            left: 0;
          }
         .liebiao{
            position: absolute;
            right: 0;
          }
      }
    }
  }

</style>