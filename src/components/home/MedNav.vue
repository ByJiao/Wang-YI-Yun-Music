<template>
    <div class="MedNav">
        <div class="MedItem">
          <svg class="icon" aria-hidden="true">
             <use xlink:href="#icon-tuijian">每日推荐</use>
          </svg>
          <span class="text">每日推荐</span>
        </div>
        
      
    
    <div class="MedItem">
        <svg class="icon" aria-hidden="true">
         <use xlink:href="#icon-zhibo"></use>
       </svg>
       <span class="text">私人FM</span>
    </div>
     <div class="MedItem">
      <svg class="icon" aria-hidden="true">
         <use xlink:href="#icon-gedan">歌单</use>
       </svg>
       <span class="text">歌单</span>
     </div>
    <div class="MedItem"> 
        <svg class="icon" aria-hidden="true">
         <use xlink:href="#icon-paihangbang">排行榜</use>
       </svg>
       <span class="text">排行榜</span>
    </div>
    </div>

</template>
<style lang="less" scoped>
.MedNav{
    display: flex;
    width: 100%;
    height: 100px;
    margin-top: 10px;
    justify-content: space-around;
    align-items: center;
    
    .MedItem{
        width:25%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
     
        .icon{
            width: 1rem;
            height: 1rem;
            align-items: center;
            display: flex;

        }
    }

}
</style>