<template>
    <div class="mainRight">
        <div class="mainRight-top">
            <img class="mainRight-top-img" src="https://img.alicdn.com/imgextra/i2/O1CN01JxmiD929ugCNubQg3_!!6000000008128-0-tps-200-200.jpg" />
            <div class="mainRight-top-div">
                <span class="mainRight-top-text">{{timeText}}</span>
                <div class="mainRight-top-div-div ">
                    <a class="mainRight-top-login" target="_blank" href="https://reg.taobao.com/havanaone/register/register.htm?bizEntrance=person_pc&bizName=taobao&regBizSource=index">注册</a>
                    <a class="mainRight-top-register" target="_blank" href="https://zhaoshang.tmall.com/?spm=a21bo.tmall/a.profile.dlaunch.1778c3d5cNC1Ir">开店</a>
                </div>
            </div>
        </div>
        <div class="mainRight-text">
            <span class="font-bold text-[14px]">理想生活上天猫</span>
            <span class="text-[rgba(0,0,0,0.4)] text-[10px]">嘿！更懂你的推荐，更便捷的搜索</span>
        </div>
        <a href="https://login.taobao.com/havanaone/login/login.htm?bizName=taobao&spm=a21bo.tmall/a.action.dlogin.3c5cc3d5YZshpd&f=top&redirectURL=http%3A%2F%2Fwww.taobao.com%2F" target="_blank" class="mainRight-button">
            立即登录
        </a>
        <div class="flex flex-row space-x-2 mt-4 justify-center items-center">
            <a  href="https://login.taobao.com/havanaone/login/login.htm?bizName=taobao&from=taobaoindex&f=top&style=&sub=true&redirect_url=https%3A%2F%2Fshoucang.taobao.com%2Fitem_collect_n.htm%3Fspm%3Da21bo.tmall%2Fa.function.d_1.3c5cc3d5YZshpd" target="_blank" class="flex flex-col justify-center items-center hover:text-[rgb(255,0,54)]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                <span class="text-[12px]">宝贝收藏</span>
            </a>
            <a  href="https://login.taobao.com/havanaone/login/login.htm?bizName=taobao&from=taobaoindex&f=top&style=&sub=true&redirect_url=https%3A%2F%2Fshoucang.taobao.com%2Fitem_collect_n.htm%3Fspm%3Da21bo.tmall%2Fa.function.d_1.3c5cc3d5YZshpd" target="_blank" class="flex flex-col justify-center items-center hover:text-[rgb(255,0,54)]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>
                <span class="text-[12px]">买过的店</span>
            </a>
            <a  href="https://login.taobao.com/havanaone/login/login.htm?bizName=taobao&from=taobaoindex&f=top&style=&sub=true&redirect_url=https%3A%2F%2Fshoucang.taobao.com%2Fitem_collect_n.htm%3Fspm%3Da21bo.tmall%2Fa.function.d_1.3c5cc3d5YZshpd" target="_blank" class="flex flex-col justify-center items-center hover:text-[rgb(255,0,54)]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                </svg>
                <span class="text-[12px]">收藏的店</span>
            </a>
            <a href="https://login.taobao.com/havanaone/login/login.htm?bizName=taobao&from=taobaoindex&f=top&style=&sub=true&redirect_url=https%3A%2F%2Fshoucang.taobao.com%2Fitem_collect_n.htm%3Fspm%3Da21bo.tmall%2Fa.function.d_1.3c5cc3d5YZshpd" target="_blank" class="flex flex-col justify-center items-center hover:text-[rgb(255,0,54)]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span class="text-[12px]">我的足迹</span>
            </a>
        </div>
        <div class="ml-1">

            <div class="grid-cols-4 grid-rows-2 gap-y-4 grid  gap-x-1 mt-6">
                <a 
                    v-for="item in mainRightData?.data" :key="item.title"
                    :href="item.href" target="_blank" 
                    class="flex flex-col justify-center items-center  w-[50px] h-[54px] hover:text-[rgb(255,0,54)]"
                >
                        <img class="h-8 w-8" :src="item.img"/>
                        <span class="text-[12px] mt-1">{{ item.title }}</span>
                </a>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { mainRightData } from '~/data/index/mainRightData'
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

// 每秒更新一次时间
onMounted(() => {
    const time = setInterval(() => {
        currentTime.value = new Date().getHours()
    }, 1000)

onUnmounted(() => {
    clearInterval(time)
})
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
.mainRight-top-div{
    @apply flex flex-col justify-center items-center;
}
.mainRight-top-text{
    @apply text-[14px] hover:text-[rgb(255,0,54)] font-bold;
}
.mainRight-top-div-div{
    @apply flex flex-row text-[10px];
}
.mainRight-top-login{
    @apply ml-2 hover:text-[rgb(255,0,54)] pr-1 border-r border-[rgba(0,0,0,0.08)];
}
.mainRight-top-register{
    @apply ml-1 hover:text-[rgb(255,0,54)];
}
.mainRight-text{
    @apply flex flex-col justify-center items-center mt-5;
}
.mainRight-button{
    @apply flex ml-3 justify-center items-center mt-4 bg-[rgb(255,0,54)] font-bold text-white w-[208px] h-[48px] rounded-md
}
</style>