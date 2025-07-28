<template>
  <div class="flex cursor-pointer relative">
    <div class="mainLeft">
      <div class="mainLeft-top">
        <span class="mainLeft-top-text">分类</span>
        <span class="popup-animation mainLeft-top-new">NEW</span>
      </div>
      <div 
        v-for="(item, index) in listData?.data" 
        :key="index"  
        class="group mainLeft-container"
      >
        <div class="mainLeft-title">
          <component class="mainLeft-title-icon" :is="getIconComponent(item.icon)" />
          <div class="flexBox">
            <a 
              @mouseover="scrollToSection(item.id1)" 
              :href="`https://s.taobao.com/search?ie=utf8&q=${encodeURIComponent(item.name1)}&spm=a21bo.tmall%2Fa.201856-fline.1.1778c3d5oXRrYY&tab=mall`" 
              target="_blank" 
              class="mr-2 hover:text-[rgb(255,0,54)]"
            >
              {{ item.name1 }}
            </a>
            /
            <a 
              @mouseover="scrollToSection(item.id2)" 
              :href="`https://s.taobao.com/search?ie=utf8&q=${encodeURIComponent(item.name2)}&spm=a21bo.tmall%2Fa.201856-fline.1.1778c3d5oXRrYY&tab=mall`" 
              target="_blank" 
              class="mr-2 ml-2 hover:text-[rgb(255,0,54)]"
            >
              {{ item.name2 }}
            </a>
            /
            <a 
              @mouseover="scrollToSection(item.id3)" 
              :href="`https://s.taobao.com/search?ie=utf8&q=${encodeURIComponent(item.name3)}&spm=a21bo.tmall%2Fa.201856-fline.1.1778c3d5oXRrYY&tab=mall`" 
              target="_blank" 
              class="ml-2 hover:text-[rgb(255,0,54)]"
            >
                {{ item.name3 }}
            </a>
          </div> 
        </div>

        <div class="mainLeft-hover">
          <div class="mainLeft-hover-item scrollbar-custom ">
            <div 
              :id="arrItem.id" 
              class="flex flex-row mt-4 " 
              v-for="(arrItem, arrIndex) in item.arr" 
              :key="arrIndex"
            >
              <div class="mainLeft-hover-title">
                <a 
                  :href="`https://s.taobao.com/search?ie=utf8&q=${encodeURIComponent(arrItem.name)}&spm=a21bo.tmall%2Fa.201856-fline.1.1778c3d5oXRrYY&tab=mall`" 
                  target="_blank"
                >
                  {{ arrItem.name }}
                </a>
                <RightIcon class="mainLeft-rightIcon" />
              </div>
              <div class="mainLeft-hover-arr">
                <a 
                  :href="`https://s.taobao.com/search?ie=utf8&q=${encodeURIComponent(arr2Item)}&spm=a21bo.tmall%2Fa.201856-fline.1.1778c3d5oXRrYY&tab=mall`" target="_blank" class="flex whitespace-nowrap cursor-pointer hover:text-[rgb(255,0,54)]" 
                  v-for="(arr2Item,arr2Index) in arrItem.arr" 
                  :key="arr2Index"
                >
                  {{ arr2Item }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { listData } from '~/data/index/mainLeft.json'

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
    return (components as Record<string, any>)[iconName]
}

const scrollToSection = (sectionId: string) => {
  if (!sectionId) {
    return
  }

  // 获取滚动容器对应hover的组
  const activeContainer = document.querySelector('.group:hover .mainLeft-hover-item')
  const scrollContainer = activeContainer as HTMLElement

  // 找目标元素
  const section = scrollContainer.querySelector(`#${sectionId}`) as HTMLElement
  if (!section) {
    return
  }

  // 获取滚动容器相对于 浏览器视口 的位置信息
  const containerRect = scrollContainer.getBoundingClientRect()
  // 计算目标元素相对于 浏览器视口 的位置信息
  const sectionRect = section.getBoundingClientRect()
  // 目标元素相对于容器顶部的视口偏移 + 容器已滚动的距离
  const relativeTop = sectionRect.top - containerRect.top + scrollContainer.scrollTop

  // 执行滚动
  scrollContainer.scrollTo({
    top: relativeTop - 100 , 
    behavior: 'smooth'
  })
}

</script>

<style scoped>
/* 自定义滚动条样式 */
:deep(.scrollbar-custom::-webkit-scrollbar) {
    width: 6px;
}
:deep(.scrollbar-custom::-webkit-scrollbar-track) {
  /* 轨道透明 */
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
  animation: popup 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
}

.flexBox{
  @apply flex justify-between items-center
}
.mainLeft {
    @apply w-[240px] bg-[rgb(255,0,54)] rounded-lg;
}
.mainLeft-top {
    @apply mt-3 ml-3 items-center flex;
}
.mainLeft-top-text  {
    @apply text-white font-bold;
}
.mainLeft-top-new {
    @apply bg-white text-[8px] items-center font-bold rounded-sm ml-2 text-[rgb(255,0,54)] justify-center w-[26px] inline-flex h-[10px];
}
.mainLeft-container {
    @apply pl-3 ml-1 h-8 w-[200px] items-center rounded-lg flex text-white hover:bg-white hover:text-black cursor-pointer;
}
.mainLeft-title {
    @apply flex items-center text-[14px];
}
.mainLeft-title-icon {
    @apply flex w-4 h-4 mr-2;
}
.mainLeft-hover {
    @apply z-20 text-[14px]  border-[rgb(255,0,54)] rounded-2xl min-res-120:w-[549px] w-[1060px] min-res-110:w-[805px] border-2 bg-white absolute left-[204px] top-[0px] opacity-0 invisible;
}
.group:hover .mainLeft-hover {
    @apply opacity-100 visible !important;
}
.mainLeft-hover-item {
    @apply  ml-4 min-res-120:w-[520px] min-res-110:w-[770px] w-[990px]  max-h-[570px] overflow-y-auto my-4;
}
.mainLeft-hover-title {
    @apply hover:text-[rgb(255,0,54)] cursor-pointer whitespace-nowrap  flex-row flex;
}
.mainLeft-rightIcon {
    @apply h-[10px] mt-2 ml-1 w-[10px];
}
.mainLeft-hover-arr {
    @apply flex flex-wrap gap-x-4 pl-10 gap-y-2;
}
</style>