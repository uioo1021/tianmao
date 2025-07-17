<template>
    <div class="flex flex-wrap gap-x-2 gap-y-2 mt-4 justify-center min-res-110:max-w-[1269px] min-res-120:max-w-[1008px] max-w-[1516px]">
        <a class="p-1 pb-4  hover:border-[rgb(255,0,54)] border-white border w-[246px] rounded-lg  h-[360px]" :href="item.href" target="_blank" v-for="(item,index) in bottomData?.data" :key="index">
            <img class="rounded-lg w-[240px] h-[240px]" :src="item.img" />
            <div  class="ml-2 mt-2 max-h-[50px] text-overflow-clip overflow-hidden">
                <span v-if="item.isIcon" class=" text-[rgb(255,0,54)] font-bold mr-2">天猫</span>
                <span class="flex-wrap ">{{ item.title }}</span>
            </div>
            <div class="ml-2 mt-6">
                <span class=" text-[rgb(255,0,54)] font-bold text-[12px] mr-1">¥</span>
                <span class="text-[rgb(255,0,54)] font-bold text-[20px]">{{ item.price }}</span>
            </div>
        </a>
    </div>
</template>
<script lang="ts" setup>
const { data: bottomData } = await useFetch('/api/bottomData');
</script>