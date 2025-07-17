<template>
    <div class="cursor-pointer h-[50px]  flex justify-between text-[12px] whitespace-nowrap ">
        <div class="flex items-center mb-2 mr-[100px]">
            <div class="flex ml-10  text-[rgb(255,0,54)]">亲，请登录</div>
            <div class="flex ml-2 hover:text-[rgb(255,0,54)]">免费注册</div>
            <div class="flex ml-4 hover:text-[rgb(255,0,54)]">网页无障碍</div>                                                                                                                                                                                                                                   
        </div>
        <div class="flex space-x-4 mr-10 items-center">
            <div  v-for="item in headerData?.data" :key="item.name" class="group relative flex hover:text-[rgb(255,0,54)]">
                <div class="flex flex-row mb-2">
                        <div v-if="item.isIcon" class="flex"> 
                        <component class="flex w-4 h-4" :is="getIconComponent(item.component)" />
                        </div>
                        <span>{{ item.name }}</span>
                        <div v-if="item.arr.length > 0" class="flex transition-transform duration-300 group-hover:rotate-180">
                            <Downicon class="h-[10px] w-[10px] mt-[4px] ml-[2px]" />
                        </div>
                </div>

                <div v-show="item.arr.length>0" class="z-40 bg-white shadow-[1px_1px_5px_1px_rgba(180,180,180,0.2)] text-black rounded-lg justify-center py-2 top-[25px] left-[-18px] absolute flex-col flex opacity-0 invisible group-hover:opacity-100 group-hover:visible ">
                    <div v-for="(arrItem,arrIndex) in item.arr" :key="arrIndex" class=" hover:bg-[rgba(180,180,180,0.2)] mx-3 rounded-lg px-2 flex  h-8 items-center">{{arrItem}}</div>
                </div>

            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const { data: headerData } = await useFetch('/api/headerData');
const getIconComponent = (iconName: string) => {
    const components = {
        Shopping: defineAsyncComponent(() => import('@/components/Icons/Shopping.vue')),
        Collection: defineAsyncComponent(() => import('@/components/Icons/Collection.vue'))
    }
    return (components as Record<string, any>)[iconName];
}
</script>
<style scoped>
</style>