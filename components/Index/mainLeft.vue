<template>
  <div class="flex cursor-pointer relative">
    <div class="w-[240px] bg-[rgb(255,0,54)] rounded-lg">
      <div class="mt-3 ml-3 items-center flex">
        <span class="text-white font-bold">分类</span>
        <span class="popup-animation bg-white text-[8px] items-center font-bold rounded-sm ml-2 text-[rgb(255,0,54)] justify-center w-[26px] inline-flex h-[10px]">NEW</span>
      </div>
      
      <div 
        v-for="(item, index) in listData?.data" 
        :key="index"  
        class="group pl-3 ml-1 h-8 w-[200px] items-center rounded-lg flex text-white hover:bg-white hover:text-black cursor-pointer"
      >
        <div class="flex items-center text-[14px]">
          <component class="flex w-4 h-4 mr-2" :is="getIconComponent(item.icon)" />
          <div class="flex justify-between items-center">
            <a :href="`https://s.taobao.com/search?ie=utf8&q=${encodeURIComponent(item.name1)}&spm=a21bo.tmall%2Fa.201856-fline.1.1778c3d5oXRrYY&tab=mall`" target="_blank" class="mr-2 hover:text-[rgb(255,0,54)]">{{ item.name1 }}</a>
            /
            <a :href="`https://s.taobao.com/search?ie=utf8&q=${encodeURIComponent(item.name2)}&spm=a21bo.tmall%2Fa.201856-fline.1.1778c3d5oXRrYY&tab=mall`" target="_blank" class="mr-2 ml-2 hover:text-[rgb(255,0,54)]">{{ item.name2 }}</a>
            /
            <a :href="`https://s.taobao.com/search?ie=utf8&q=${encodeURIComponent(item.name3)}&spm=a21bo.tmall%2Fa.201856-fline.1.1778c3d5oXRrYY&tab=mall`" target="_blank" class="ml-2 hover:text-[rgb(255,0,54)]">{{ item.name3 }}</a>
          </div> 
        </div>

        <div class="z-20  border-[rgb(255,0,54)] rounded-2xl min-res-120:w-[549px] w-[1060px] min-res-110:w-[805px] border-2 bg-white absolute left-[204px] group-hover:opacity-100 group-hover:visible top-[0px] opacity-0 invisible  ">
          <div class="ml-4 my-4 min-res-120:w-[520px] min-res-110:w-[770px] w-[990px]  max-h-[570px] overflow-y-auto scrollbar-custom ">
            <div class="flex flex-row mt-4" v-for="(arrItem, arrIndex) in item.arr" :key="arrIndex">
              <div class="hover:text-[rgb(255,0,54)] cursor-pointer whitespace-nowrap  flex-row flex">
                <a :href="`https://s.taobao.com/search?ie=utf8&q=${encodeURIComponent(arrItem.name)}&spm=a21bo.tmall%2Fa.201856-fline.1.1778c3d5oXRrYY&tab=mall`" target="_blank">{{ arrItem.name }}</a>
                <Righticon class="h-[10px] mt-2 ml-1 w-[10px]" />
              </div>
              <div class="flex flex-wrap   gap-x-4 gap-y-4 pl-10">
                <a :href="`https://s.taobao.com/search?ie=utf8&q=${encodeURIComponent(arr2Item)}&spm=a21bo.tmall%2Fa.201856-fline.1.1778c3d5oXRrYY&tab=mall`" target="_blank" class="flex whitespace-nowrap cursor-pointer hover:text-[rgb(255,0,54)]" v-for="(arr2Item,arr2Index) in arrItem.arr" :key="arr2Index">{{ arr2Item }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: listData } = await useFetch('/api/listData');

const getIconComponent = (iconName: string) => {
    const components = {
        Phone: defineAsyncComponent(() => import('@/components/Icons/Phone.vue')),
        Home: defineAsyncComponent(() => import('@/components/Icons/Home.vue')),
        Suit: defineAsyncComponent(() => import('@/components/Icons/Suit.vue')),
        Book: defineAsyncComponent(() => import('@/components/Icons/Book.vue')),
        Shoes: defineAsyncComponent(() => import('@/components/Icons/Shoes.vue')),
        Gift: defineAsyncComponent(() => import('@/components/Icons/Gift.vue')),
        Car: defineAsyncComponent(() => import('@/components/Icons/Car.vue')),
        Box: defineAsyncComponent(() => import('@/components/Icons/Box.vue')),
        Play: defineAsyncComponent(() => import('@/components/Icons/Play.vue')),
        Wash: defineAsyncComponent(() => import('@/components/Icons/Wash.vue')),
        Tv: defineAsyncComponent(() => import('@/components/Icons/Tv.vue')),
    }
    return (components as Record<string, any>)[iconName];
}

</script>

<style scoped>
/* 自定义滚动条样式 */
:deep(.scrollbar-custom::-webkit-scrollbar) {
    width: 6px;
    position: relative; 
    left: 0; 
}
:deep(.scrollbar-custom::-webkit-scrollbar-track) {
    background: transparent;
}
:deep(.scrollbar-custom::-webkit-scrollbar-thumb) {
    background-color:rgb(139,139,139);
    border-radius: 3px;
}


@keyframes popup {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  13% {
    opacity: 1;
    transform: scale(1.3);
  }
  100% {
    opacity: 1;
    transform: scale(1.3);
  }
}

.popup-animation {
  animation: popup 3s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
}
</style>