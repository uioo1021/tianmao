<template>
<div class=" justify-center flex">
    <div class="flex flex-col">
        <RegisterTitle class="mt-[10px] ml-[157px]"/>
        <RegisterMain class="mt-[90px]" />
    </div>
</div>
</template>
<script lang="ts" setup>
definePageMeta({
    layout: 'register',
})
useHead({
    title: '注册',
    link: [{
        rel: 'icon',
        type: 'image/png',
        href: 'https://img.alicdn.com/tps/i3/T1OjaVFl4dXXa.JOZB-114-114.png'
    }]
})
</script>
<style scoped>
</style>