<template>
    <div class="flex justify-center">
        <div class="w-full justify-center flex flex-col">
            <IndexHeader />
            <IndexAd/>
            <slot class="mx-auto px-16"/>
            <IndexAside/>
            <IndexBottom/>
        </div>
        
    </div>
</template> 
<script setup lang="ts">
</script>
