<template>
    <ItemMusicTop :playlist="state.playList"/>
    <ItemMusicList :itemlist='state.musiclist' :subscribedCount="state.playList.subscribedCount"/>
</template>
<script>
import { useRoute } from "vue-router"
import {onMounted,reactive} from 'vue'
import { getMusicitemList ,getMusicItem} from '@/request/api/item.js'
import ItemMusicTop from '@/components/item/ItemMusicTop.vue'
import ItemMusicList from '@/components/item/ItemMusicList.vue'
export default{
   setup(){
    const state=reactive({
        playList:{},
        musiclist:[]
    })
    onMounted(async()=>{
        let id=useRoute().query.id
        //获取歌单详情页
        let res=await getMusicitemList(id)
        //console.log(res);
        state.playList=res.data.playlist
        //获取歌单中的歌曲
        let result=await getMusicItem(id)
        console.log(result);
        state.musiclist=result.data.songs
        //防止页面刷新数据丢失，将数据保存在sessionStorage中
        sessionStorage.setItem('itemDetail',JSON.stringify(state))
    })
    return {state}
    
   },
   components:{
     ItemMusicTop,
     ItemMusicList,
   }
}
</script>