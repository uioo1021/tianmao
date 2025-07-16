<template>
    <div class="flex cursor-pointer flex-col">
        <div class="h-[48px] w-[496px] bg-[rgb(247,247,247)] rounded-xl flex">
            <div class="ml-7 h-48px items-center justify-center flex">
                <a class="border-r-2 pr-8 font-bold text-[rgb(255,0,54)]" href="https://www.taobao.com/" target="_blank">淘宝首页</a>
            </div>
            <div class="ml-7 h-48px items-center justify-center flex">
                <a class="border-r-2 pr-8 font-bold text-[rgb(51,201,0)]" href="https://www.taobao.com/" target="_blank">天猫超市</a>
            </div>
            <div class="ml-7 h-48px items-center justify-center flex">
                <a class="border-r-2 pr-8 font-bold text-[rgb(120,78,210)]" href="https://www.taobao.com/" target="_blank">天猫国际</a>
            </div>
            <div class="ml-7 h-48px items-center justify-center flex">
                <a class="pr-8 font-bold text-[rgb(255,0,54)]" href="https://www.taobao.com/" target="_blank">聚划算</a>
            </div>
        </div>
        <div class="flex mt-4 space-x-4">
            <div class="w-[240px] h-[160px] bg-[rgb(247,247,247)] rounded-xl">
                <div class="block text-center rounded-xl">
                    <el-carousel height="160px" motion-blur>
                        <el-carousel-item>
                            <img class="rounded-xl" src="/imgs/image1.png" />
                        </el-carousel-item>
                        <el-carousel-item>
                            <img class="rounded-xl" src="/imgs/image2.png" />
                        </el-carousel-item>
                        <el-carousel-item>
                            <img class="rounded-xl" src="/imgs/image3.png" />
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
            <div class="w-[240px] h-[160px] bg-[rgb(247,247,247)] rounded-xl">
                <div class="div1 mt-4 flex justify-between mx-4">
                    <span class="font-bold">天猫U先</span>
                    <Righticon class="icon1 w-3 h-3 mt-1" />
                </div>
                <div class="flex flex-row mt-4 space-x-8 justify-center items-center">
                    <div class="w-[72px] h-[98px] flex justify-center items-center flex-col">
                        <img class="rounded-sm  w-16 h-16" src="/imgs/face.png" />
                        <span class="text-[rgb(255,0,54)] mt-2 font-bold">¥999</span>
                    </div>
                    <div class="w-[72px] h-[98px] flex justify-center items-center flex-col">
                        <img class="rounded-sm w-16 h-16" src="/imgs/vip.png" />
                        <span class="text-[rgb(255,0,54)] mt-2 font-bold">¥100</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex mt-4 space-x-4">
            <div class="w-[240px] h-[160px] bg-[rgb(247,247,247)] rounded-xl">
                <div class="flex flex-row items-center justify-center mt-2 div2">
                    <span class="font-bold">百亿补贴 · 买贵必赔</span>
                    <div class="font-bold text-white flex ml-2 justify-center items-center rounded-md w-10 h-4 bg-[rgb(255,0,54)] text-[10px]">限时秒</div>
                    <Righticon class="icon2 w-3 h-3 ml-1" />
                </div>
                <div class="flex justify-between mt-4 mx-4">
                    <img class="w-24 h-24" src="https://img.alicdn.com/bao/upload/O1CN01Xw0lUE1iPzownoVGb_!!6000000004406-2-yinhe.png"/>
                    <div class="space-x-2 space-y-2">
                        <span class=" font-thin text-[14px] overflow-hidden line-clamp-2 w-[100px] leading-[22px] text-ellipsis ">【Gree/格力官方】新一级3匹变频冷暖客厅节能立式空调柜机云颜</span>
                        <div class="font-thin text-[rgb(255,0,54)] justify-center items-center rounded-md w-14 h-5 bg-[rgba(255,0,54,0.082)] flex text-[10px]">已补1900元</div>
                        <div class="text-[rgb(255,0,54)] font-bold">¥9399</div>
                    </div>
                </div>
            </div>
            <div class="w-[240px] h-[160px] bg-[rgb(230,230,230)] rounded-xl">
                <div class="mt-4 flex justify-between mx-4 div3">
                    <span class="font-bold">国家补贴</span>
                    <Righticon class="icon3 w-3 h-3 mt-1" />
                </div>
                <div class="flex flex-row mt-4 space-x-8 justify-center items-center">
                    <div class="w-[72px] h-[98px] flex justify-center items-center flex-col">
                        <img class="rounded-sm  w-16 h-16" src="/imgs/cd.png" />
                        <span class="text-[rgb(255,0,54)] mt-2 font-bold">¥11499</span>
                    </div>
                    <div class="w-[72px] h-[98px] flex justify-center items-center flex-col">
                        <img class="rounded-sm w-16 h-16" src="/imgs/fan.png" />
                        <span class="text-[rgb(255,0,54)] mt-2 font-bold">¥20990</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
.div1:hover .icon1{
    color:rgb(255,0,54);
}
.div2:hover .icon2{
    color:rgb(255,0,54);
}
.div3:hover .icon3{
    color:rgb(255,0,54);
}
</style>