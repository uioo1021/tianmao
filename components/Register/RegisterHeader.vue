<template>
<div class="header">
    <div class="header-div">
        <div class="header-left">
            <a href="https://login.taobao.com/havanaone/login/login.htm?bizName=taobao&spm=a21bo.tmall/a.754894437.1.3c5cc3d5KaAMPU&f=top&redirectURL=https%3A%2F%2Fwww.tmall.com%2F%3Fspm%3Da21bo.tmall%2Fa.201857.1.1778c3d5oXRrYY" target="_blank" class="header-a-first">亲，请登录</a>
            <a href="https://reg.taobao.com/havanaone/register/register.htm?bizEntrance=person_pc&bizName=taobao&regBizSource=tbtop" target="_blank" class="header-a-second">免费注册</a>
            <div class="header-left-div">网页无障碍</div>                                                                                                                                                                                                                                   
        </div>
        <div class="header-right">
            <div v-for="item in headerData?.data" :key="item.name" class="group header-right-div">
                <div class="header-right-item">
                    <div v-if="item.isIcon" class="flex"> 
                        <component v-if="item.component === 'Shopping'" class="header-right-icon text-[rgb(255,80,0)]" :is="getIconComponent(item.component)" />
                        <component v-else class="header-right-icon" :is="getIconComponent(item.component)" />
                    </div>
                    <span>{{ item.name }}</span>
                    <div v-if="item.arr.length > 0" class="header-right-downIcon-div group-hover:rotate-180">
                        <DownIcon class="header-right-downIcon" />
                    </div>
                </div>
                <div v-show="item.arr.length>0" class="header-right-hover-div group-hover:opacity-100 group-hover:visible ">
                    <a href="https://login.taobao.com/havanaone/login/login.htm?bizName=taobao&redirectURL=http%3A%2F%2Fi.taobao.com%2Fmy_itaobao%2Fcoupon%3Fspm%3Da21bo.tmall%252Fa.1997525045.3.3c5cc3d5QAWvYs" target="_blank" v-for="(arrItem,arrIndex) in item.arr" :key="arrIndex" class="header-right-hover-a">{{arrItem}}</a>
                </div>

            </div>
        </div>
    </div>
</div>
    
</template>
<script setup lang="ts">
import { headerData } from '~/data/register/headerData.js'
const getIconComponent = (iconName: string) => {
    const components = {
        Shopping: defineAsyncComponent(() => import('@/components/Icons/Shopping.vue')),
        Collection: defineAsyncComponent(() => import('@/components/Icons/Collection.vue'))
    }
    return (components as Record<string, any>)[iconName]
}

</script>
<style scoped>
.header{
    @apply flex justify-center bg-white;
}
.header-div{
    @apply cursor-pointer h-[50px] flex bg-white justify-between text-[12px] whitespace-nowrap  min-res-120:w-[1156px] w-[1624px] min-res-110:w-[1423px] ;
}
.header-left{
    @apply flex items-center mb-2 mr-[100px];
}
.header-right{
    @apply flex space-x-4  items-center;
}
.header-left-div{
    @apply flex ml-4 hover:text-[rgb(255,80,0)];
}
.header-a-first{
    @apply flex  text-[rgb(255,80,0)];
}
.header-a-second{
    @apply flex ml-2 hover:text-[rgb(255,80,0)];
}
.header-right-div{
    @apply relative flex hover:text-[rgb(255,80,0)];
}
.header-right-icon{
    @apply flex w-4 h-4;
}
.header-right-item{
    @apply flex flex-row  whitespace-nowrap mb-2;
}
.header-right-downIcon{
    @apply h-[10px] w-[10px] mt-[4px] ml-[2px];
}
.header-right-downIcon-div{
    @apply flex transition-transform duration-300;
}
.header-right-hover-div{
    @apply z-40 bg-white shadow-[1px_1px_5px_1px_rgba(180,180,180,0.2)] text-black rounded-lg justify-center py-2 top-[25px] left-[-18px] absolute flex-col flex opacity-0 invisible;
}
.header-right-hover-a{
    @apply hover:bg-[rgba(180,180,180,0.2)] mx-3 rounded-lg px-2 flex  h-8 items-center;
}
</style>