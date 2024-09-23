import { createStore } from 'vuex'
import { getMusiclyric} from '@/request/api/item.js'
import {getPhoneLogin}  from '@/request/api/home.js'
export default createStore({
  state: {
    playlist:[{
      al:{
        id: 20339,
        name: "赵小雷",
        pic: 109951169213244780,
        picUrl: "https://p1.music.126.net/btBocL7KKvl0sRZY62_BIA==/109951169213244790.jpg",
        pic_str: "109951169213244790"
      },
      id:202369,
      name:'成都'
    }],
    playlistindex:0,
    isbtnShow:true,//暂停按钮的显示
    detailShow:false,
    lyricList:{},//歌词
    currentTime:0,
    duration:0,
    isLogin:false,//判断是否登录
    isFooterMusic:true,//判断底部组件是否需要显示
    token:'',
    user:{},//用户信息
    cookie:'',
  },
  getters: {
  },
  mutations: {
    updateIsbtnShow:function(state,value){
      state.isbtnShow=value
    },
    pushPlayMusic:function(state,value){
        state.playlist.push(value)
    },
    updatePlayList: function (state, value) {
      state.playlist = value
      
    },
    updateplaylistindex: function(state,value){
      state.playlistindex=value
    },
    updateDetailShow:function(state){
      state.detailShow=!state.detailShow
    },
    updateLyricList:function(state,value){
       state.lyricList=value

    },
    updateCurrentTime:function(state,value){
      state.currentTime=value
      //console.log(state);
    },
    updateDuration:function(state,value){
       state.duration=value
    },
    updateIsLogin:function(state){
       state.isLogin=true
    },
    updateToken:function(state,value){
       state.token=value
       localStorage.setItem('token',state.token)
    },
    updateUser:function(state,value){
      state.user=value
    }
  },
  actions: {
    getLyric:async function(context,value){
      let res=await getMusiclyric(value)
      console.log(res);
      context.commit('updateLyricList',res.data.lrc)
    },
    getLogin:async function(context,value){
       let res=await getPhoneLogin(value)
       //console.log(res);
       return res
    }
  },
  modules: {
  }
})
