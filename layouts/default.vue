<template>
    <div>
        <Header/>

            <Search/>
            <div class="mt-6 flex w-[1000px] mx-auto">
                <MainLeft/>
                <MainCenter class="ml-4"/>
                <MainRight class="ml-4"/>
            </div>
            <Aside/>
            <Bottom/>
            <slot/>

        
    </div>
</template>
<script setup lang="ts">
import Header from '@/components/Index/header.vue';
// 无需手动注册，<script setup> 会自动处理
</script>