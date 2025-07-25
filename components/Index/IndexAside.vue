<template>
    <div class="aside">
        <div>
            <a 
                href="https://pc.taobao.com/?spm=a21bo.tmall/a.20220530.1.1a1dc3d5McfVIy&channel=tmall"
                target="_blank" 
                class="aside-a group"
            >
                <div class="justify-center items-center flex flex-col">
                    <img 
                        class="aside-img " 
                        src="https://gw.alicdn.com/imgextra/i4/O1CN0165n4Cr1CGK2faBVbj_!!6000000000053-1-tps-56-56.gif"
                    />
                    <span class="aside-text">桌面版</span>
                </div>
                <div class="aside-div">
                    <div class="aside-hover-div   min-res-120:group-hover:flex">
                        桌面版 
                        <div class="aside-icon"></div>
                    </div>
                </div>
            </a>
            <a 
                v-for="item in asideData?.data" 
                :key="item.name" :href="item.href" 
                target="_blank" 
                class="aside-a group">
                <div class="justify-center items-center flex flex-col">
                    <img :src="item.img" class="aside-img"/>
                    <span class="aside-text">{{item.name}}</span>
                </div>
                <div class="aside-div">
                    <div class="aside-hover-div  min-res-120:group-hover:flex">
                        {{ item.name }}
                        <div class="aside-icon"></div>
                    </div>
                </div>
            </a>
        </div>

        <div
            v-show="isVisible"
            @click="scrollToTop"
            class="aside-top group"
        >
            <div class="aside-top-div">
                <div class="justify-center items-center flex flex-col">
                    <AsideTop class="size-5"/>
                    <div class="aside-text">回顶部</div>
                </div>
                
                <div class="aside-div">
                    <div class="aside-hover-div   min-res-120:group-hover:flex">
                        回顶部 
                        <div class="aside-icon"></div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>

</template>
<script setup lang="ts">
import{asideData} from '~/data/index/asideData.js'
const isVisible = ref(false)
const scrollValue = ref(600) // 滚动阈值，超过此距离显示

const handleScroll = () => {
    isVisible.value = window.scrollY > scrollValue.value
}

// 滚动到顶部
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  //处理刷新页面时的情况
    handleScroll()
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

</script>

<style scoped>
.aside {
    @apply cursor-pointer z-[50] bg-white border-l border-y rounded-md rounded-r-none top-[35%] flex-col right-[0px] fixed h-[250px] min-res-120:h-[185px] min-res-120:w-[38px] w-[52px];
}
.aside-a{
    @apply min-res-120:w-[32px] w-[45px] ml-0.5 h-[45px]  min-res-120:h-[32px] flex rounded-lg hover:bg-[rgba(180,180,180,0.2)] justify-center items-center mt-1 relative ;
}
.aside-text{
    @apply text-[8px] min-res-120:hidden flex items-center justify-center text-center;
}
.aside-img{
    @apply h-6 w-6 ;
}
.aside-hover-div{
    @apply hidden text-white text-[12px] relative h-[30px] justify-center items-center rounded-lg w-[70px] bg-[rgb(31,31,31)];
}
.aside-div{
    @apply absolute left-[-85px] flex;
}
.aside-icon{
    @apply absolute left-[46px] top-[-0.3px] w-[16px] transform rotate-[315deg]  -translate-x-[-50%] translate-y-0 h-[25px] bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAdCAYAAAAaeWr3AAAAAXNSR0IArs4c6QAAAWVJREFUWEfl2M1RwzAQhuH9OqACWyVAB6QEOoAOoIKECoAKkg6gA+iAlLB2BelgiRnMgBM7krWr+EcnHzSy3sc6eARKPJxzjoiWInJJRNVzNXYA3ojohZk55ZaQ8mX79pWILLveCeCZmR9S7SsJgHPuQkReiejaM+wDwA0z7zzn955mDvAT/05E1ZEPGVsAC2sEU4CI+BrKHMEUIM/zzx5fvnlKtkVRXIUcnZC5ZgBZlq0B3IZspm2uiGzKsrzTWKu5hgmAZny9YSsEdQCLeEsEVQDLeCsENYAU8RYIKgAp47URogHOEa+JEAVwzngthN4AQ4jXQOgFMKT4WIRggCHGxyAEATjnnkTk3uKXVGvN0PsEbwCfywytiNh1ADzuL5ZWPut4AYwpvo72RTgJMMb4EIROgDHH+yK0Akwh3gfhKMCU4k8hHABMMb4L4R/AlOPbEH4B5hB/DOEbYE7xTQTMMf4vwhd2Lub+TgZAXwAAAABJRU5ErkJggg==')];
}
.aside-top{
    @apply min-res-120:w-[38px] w-[52px] min-res-120:h-[40px] h-[54px] rounded-md rounded-r-none border-l border-y flex justify-center items-center mt-4 text-[8px];
}
.aside-top-div{
    @apply min-res-120:w-[32px] w-[45px] flex-col rounded-lg hover:bg-[rgba(180,180,180,0.2)] h-[45px]  min-res-120:h-[32px] flex justify-center items-center ;
}
</style>