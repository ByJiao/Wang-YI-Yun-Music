<template>
    <div class="FooterMusic">
        <div class="FooterLeft" @click='updateDetailShow'>
            <img :src="playlist[playlistindex].al.picUrl" alt="">
            <div>
                <p>{{playlist[playlistindex].name}}
                </p>
                <span>横划切换上下首</span>
            </div>
        </div>
        <div class="FooterRight">
            <svg class="icon" aria-hidden="true" @click='play' v-if='isbtnShow' >
                  <use xlink:href="#icon-bofanganniu"></use>
            </svg>
            <svg class="icon" aria-hidden="true" @click='play' v-else>
                  <use xlink:href="#icon-weibiaoti--"></use>
            </svg>
            <svg class="icon" aria-hidden="true" >
                  <use xlink:href="#icon-zu"></use>
         </svg>

        </div>
        <audio  ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playlist[playlistindex].id}.mp3`"></audio>
        <van-popup v-model:show="detailShow" position="bottom" :style="{ height: '100%' ,width:'100%'}" > <MusicDetail :musiclist='playlist[playlistindex]' :play='play' :isbtnShow='isbtnShow' 
        :addDuration='addDuration'/>
        </van-popup>
    </div>
</template>
<script >
import {mapState,mapMutations}  from 'vuex'
import MusicDetail from './MusicDetail.vue';
//import { onMounted,reactive,onUpdated ,ref,watch} from 'vue';
//import { useStore } from 'vuex';
//import {useState,useMutations} from '@/utils/useMapper.js'

export default{



    data(){
        return {
            interVal:0
        }
    },
    computed:{
        ...mapState(['playlist','playlistindex','isbtnShow','detailShow'])
    },
    mounted() {
        this.$store.dispatch('getLyric',this.playlist[this.playlistindex].id)
        this.updateTime()
    
    },
    updated() {
        this.$store.dispatch('getLyric',this.playlist[this.playlistindex].id)
        this.addDuration()
    },
    methods: {
        play:function () {
            //判断音乐是否播放
            if(this.$refs.audio.paused){
                this.$refs.audio.play()
                this.updateIsbtnShow(false)
                this.updateTime()//播放就调用函数进行传值
            }else{
                this.$refs.audio.pause()
                this.updateIsbtnShow(true)
                clearInterval(this.interVal)//暂停清除定时器
            }
            
        },
        addDuration:function(){
            this.updateDuration(this.$refs.audio.duration)
        },
        updateTime:function(){
           this.interVal=setInterval(()=>{
             this.updateCurrentTime(this.$refs.audio.currentTime)
           },1000)
        },
        ...mapMutations(['updateIsbtnShow','updateDetailShow','updateCurrentTime','updateDuration'])

    },
    watch:{
        playlistindex:function(){//监听下标，如果下标发生改变，就自动切换音乐
            this.$refs.audio.autoplay=true
            if(this.$refs.audio.paused){//如果是暂停状态，改变图标
                this.updateIsbtnShow(false)
               
            }
        },
        playlist:function(){
            if(this.isbtnShow){
                this.$refs.audio.autoplay=true
                this.updateIsbtnShow(false)
            }
        }
    },
    components:{
        MusicDetail,
    }
  
}

    
//    setup(){
//     const store = useStore();
//     const { state} = store;
//     //const mapState= useState(['playlist', 'playlistindex', 'isbtnShow','detailShow'])
//     //const mapMutations=useMutations(['updateIsbtnShow','updateDetailShow','updateCurrentTime','updateDuration'])
//     const {playlist,playlistindex,isbtnShow,detailShow}=state
//     // const {updateIsbtnShow,updateDetailShow,updateCurrentTime,updateDuration}=mutations
    
//     let audio=ref()
    

//     const target=reactive({
//         interVal:0
//     })
    
//     function play(){
//             //判断音乐是否播放
//         if(audio.value.paused){
//             audio.value.play()
//             store.commit('updateIsbtnShow',false)
//             updateTime()//播放就调用函数进行传值
//         }else{
//             audio.value.pause()
//             store.commit('updateIsbtnShow',true)
//             clearInterval(target.interVal)//暂停清除定时器
//         }
//     }
//     function addDuration(){
//         store.commit('updateDuration',audio.value.duration)
//     }
//     function updateTime(){
//         //console.log(audio.value.currentTime);
//         target.interVal=setInterval(()=>{
//             store.commit('updateCurrentTime',audio.value.currentTime)
//         },1000)
//     }
//     function updateDetailShow(){
//         store.commit('updateDetailShow')
//     }
    
//     watch(playlistindex, () => {
//         audio.value.autoplay = true;
//         if (audio.value.paused) {
//             store.commit('updateIsbtnShow',false);
//         }
//         });
//     watch(playlist, () => {
//         if (isbtnShow.value) {
//             audio.value.autoplay = true;
//             store.commit('updateIsbtnShow',false);
//         }
//     });
   
    
   

//     onMounted(() => {
//             store.dispatch('getLyric',playlist[playlistindex].id) 
                   
//             updateTime()
//             //console.log(state);
//      }),
//     onUpdated(()=>{
//         store.dispatch('getLyric',playlist[playlistindex].id)
//         addDuration()
        
//     })
//      return {updateDetailShow,addDuration,updateTime,playlist,playlistindex,isbtnShow,detailShow,play}
//     },


</script>

<style lang="less">

.FooterMusic{
    width: 100%;
    height: 70px;
    background-color: #fff;
    position:fixed;
    bottom: 0;
    border-top: 1px solid #999;
    display: flex;
    padding: 10px;
    justify-content: space-between;
    .FooterLeft{
        width: 60%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        img{
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
        }
    }
    .FooterRight{
        width: 20%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icon {
           width: 0.6rem;
           height: 0.6rem;
        }
    }
}
</style>