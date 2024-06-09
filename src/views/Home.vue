<template>
  <TopNav/>
  <SwpierTop/>
  <MedNav/>
  <MusicList/>
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/home/TopNav.vue';
import SwpierTop from '@/components/home/SwpierTop.vue';
import MedNav from '@/components/home/MedNav.vue';
import MusicList from '@/components/home/MusicList.vue';
export default {
  name: 'HomeView',
  components: {
   TopNav,
   SwpierTop,
   MedNav,
   MusicList
  },
}
</script>
