<template>
<div class="infoUserTop">
    <img :src="user.data.profile.avatarUrl" alt="" class="profileimg">
    <div class="name">
      
        {{ user.data.profile.nickname }}
    </div>
</div>
</template>
<script>
import { mapState } from "vuex";
export default{
    computed:{
        ...mapState(['user'])
    },
    mounted() {
        
    },
}
</script>
<style>
.infoUserTop{
    width: 100%;
    height: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .profileimg{
    width: 1rem;
    height: 50px;
    border-radius: 50%;
    }
    .name{
        font-weight: 700;
        font-size: 20px;
    }
}

</style>