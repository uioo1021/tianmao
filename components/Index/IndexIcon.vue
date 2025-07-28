<template>
    <div class="flex justify-center">
        <div class="icon">
            <div class="icon-img">
                <img 
                    class="icon-img-item" 
                    src="https://gw.alicdn.com/imgextra/i2/O1CN011E0R1J23w9lJDeJXk_!!6000000007319-2-tps-192-192.png"
                />
            </div>
            <div class="icon-text">
                <span class="text-[rgb(255,0,54)]">猜你喜欢</span>
                <span class="text-[rgb(255,0,54)] text-xs">精选好物推荐</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
.icon{
    @apply cursor-pointer min-res-120:w-[1008px] w-[1516px] min-res-110:w-[1269px] flex mt-4 ;
}
.icon-img{
    @apply flex w-12 h-12 rounded-full bg-[rgb(255,241,235)];
}
.icon-img-item{
    @apply w-12 h-12;
}
.icon-text{
    @apply flex flex-col mt-1 ml-2;
}
</style>