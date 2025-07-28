<template>
    <div class="mainRight">
        <div class="mainRight-top">
            <img 
                class="mainRight-top-img" 
                src="https://img.alicdn.com/imgextra/i2/O1CN01JxmiD929ugCNubQg3_!!6000000008128-0-tps-200-200.jpg" 
            />
            <div class="mainRight-top-container">
                <span class="mainRight-top-text"> {{ timeText }} </span>
                <div class="mainRight-top-sign">
                    <a 
                        class="mainRight-top-register" 
                        target="_blank" 
                        href="https://reg.taobao.com/havanaone/register/register.htm?bizEntrance=person_pc&bizName=taobao&regBizSource=index"
                    >
                        注册
                    </a>
                    <a 
                        class="mainRight-top-login" 
                        target="_blank" 
                        href="https://zhaoshang.tmall.com/?spm=a21bo.tmall/a.profile.dlaunch.1778c3d5cNC1Ir"
                    >
                        开店
                    </a>
                </div>
            </div>
        </div>
        <div class="mainRight-text">
            <span class="font-bold text-[14px]">理想生活上天猫</span>
            <span class="text-[rgba(0,0,0,0.4)] text-[10px]">嘿！更懂你的推荐，更便捷的搜索</span>
        </div>
        <a 
            href="https://login.taobao.com/havanaone/login/login.htm?bizName=taobao&spm=a21bo.tmall/a.action.dlogin.3c5cc3d5YZshpd&f=top&redirectURL=http%3A%2F%2Fwww.taobao.com%2F" 
            target="_blank" 
            class="mainRight-button"
        >
            立即登录
        </a>
        <div class="mainRight-grid-top">
            <a  
                v-for="item in mainRightData?.topData" 
                :key="item.title"
                :href="item.href" 
                target="_blank" 
                class="mainRight-grid-top-item"
            >
                <component :is="getIconComponent(item.component)" class="size-6" />
                <span class="text-[12px]">{{ item.title }}</span>
            </a>
        </div>
        <div class="ml-1">
            <div class="mainRight-grid-bottom">
                <a 
                    v-for="item in mainRightData?.bottomData" 
                    :key="item.title"
                    :href="item.href" target="_blank" 
                    class="mainRight-grid-bottom-item"
                >
                        <img class="h-8 w-8" :src="item.img"/>
                        <span class="text-[12px] mt-1">{{ item.title }}</span>
                </a>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { mainRightData } from '~/data/index/mainRight.json'

const getIconComponent = (iconName: string) => {           
    const components = {
        Clock: defineAsyncComponent(() => import('@/components/Icons/Clock.vue')),
        Bag: defineAsyncComponent(() => import('@/components/Icons/Bag.vue')),
        Star: defineAsyncComponent(() => import('@/components/Icons/Star.vue')),
        House: defineAsyncComponent(() => import('@/components/Icons/House.vue')),
    }
    return (components as Record<string, any>)[iconName]
}

const currentTime = ref(new Date().getHours())
const timeText = computed(() => {
    if (currentTime.value >= 0 && currentTime.value < 12) {
        return '早上好'
    }
    else if (currentTime.value >= 12 && currentTime.value < 14) {
        return '中午好'
    }
    else if (currentTime.value >= 14 && currentTime.value < 18) {
        return '下午好'
    }
    else if (currentTime.value >= 18 && currentTime.value <= 24) {
        return '晚上好'
    }
})

const time = ref<NodeJS.Timeout | null>(null)
// 每秒更新一次时间
onMounted(() => {
    time.value = setInterval(() => {
        currentTime.value = new Date().getHours()
    }, 1000)
})
onUnmounted(() => {
    if (time.value) {
        clearInterval(time.value)
    }
})
</script>
<style scoped>
.mainRight{
    @apply w-[240px] cursor-pointer bg-[rgb(245,245,245)] rounded-lg;
}
.mainRight-top{
    @apply flex ml-3 mt-5;
}
.mainRight-top-img{
    @apply flex w-10 rounded-full h-10;
}
.mainRight-top-container{
    @apply flex flex-col justify-center items-center;
}
.mainRight-top-text{
    @apply text-[14px] hover:text-[rgb(255,0,54)] font-bold;
}
.mainRight-top-sign{
    @apply flex flex-row text-[10px];
}
.mainRight-top-register{
    @apply ml-2 hover:text-[rgb(255,0,54)] text-[rgba(0,0,0,0.4)]  pr-1 border-r border-[rgba(0,0,0,0.08)];
}
.mainRight-top-login{
    @apply ml-1 hover:text-[rgb(255,0,54)] text-[rgba(0,0,0,0.4)] ;
}
.mainRight-text{
    @apply flex flex-col justify-center items-center mt-5;
}
.mainRight-button{
    @apply flex ml-3 justify-center items-center mt-4 bg-[rgb(255,0,54)] font-bold text-white w-[208px] h-[48px] rounded-md
}
.mainRight-grid-top{
    @apply flex flex-row space-x-2 mt-4 justify-center items-center;
}
.mainRight-grid-top-item{
    @apply flex flex-col justify-center items-center hover:text-[rgb(255,0,54)];
}
.mainRight-grid-bottom{
    @apply grid-cols-4 grid-rows-2 gap-y-4 grid  gap-x-1 mt-6;
}
.mainRight-grid-bottom-item{
    @apply flex flex-col justify-center items-center  w-[50px] h-[54px] hover:text-[rgb(255,0,54)];
}
</style>