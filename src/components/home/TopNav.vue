<template>
    <div class="TopNav">
        <div class="topleft">
          <svg class="icon" aria-hidden="true">
             <use xlink:href="#icon-31liebiao"></use>
          </svg>
        </div>
      
    
    <div class="topContent">
        <span @click="$router.push('/login')">我的</span>
        <span class="active">发现</span>
        <span>云村</span>
        <span>视频</span>
    </div>
     <div class="topright">
      <svg class="icon" aria-hidden="true" @click="this.$router.push('/search')">
         <use xlink:href="#icon-sousuo" ></use>
       </svg>
     </div>
    
    </div>

</template>
<style lang="less" scoped>
.TopNav{
    width: 100%;
    height: 1rem;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .topContent{
        width: 70%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 18px;
        .active{
            font-weight: 900;
        }

    }
}

</style>