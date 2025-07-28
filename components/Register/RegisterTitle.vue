<template>
    <div class="register-title">
        <a 
            href="https://www.taobao.com/" 
            target="_blank"
        >
            <img 
                class="w-[106px] h-[43px]" 
                src="https://gw.alicdn.com/tfs/TB176rg4VP7gK0jSZFjXXc5aXXa-286-118.png" 
            />
        </a>
        <div class="register-title-text">用户注册</div>
    </div>
</template>
<script lang="ts" setup>
</script>
<style scoped>
.register-title{
    @apply flex flex-row min-res-120:w-[1156px] w-[1624px] min-res-110:w-[1423px];
}
.register-title-text {
    @apply flex text-[20px] text-[rgb(60,60,60)] ml-5 justify-center items-center;
}
</style>