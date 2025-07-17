<template>
    <div class="flex cursor-pointer flex-col">
        <div class="min-res-120:w-[496px] min-res-110:w-[752px] w-[1008px] h-[48px] justify-center whitespace-nowrap  bg-[rgb(247,247,247)] rounded-xl flex">
            <div class="ml-7 min-res-110:ml-12 h-48px items-center justify-center flex">
                <a class="border-r-2 pr-8 font-bold text-[rgb(255,0,54)]" href="https://www.taobao.com/" target="_blank">淘宝首页</a>
            </div>
            <div class="ml-7 h-48px items-center justify-center flex">
                <a class="border-r-2 pr-8 font-bold text-[rgb(51,201,0)]" href="https://www.taobao.com/" target="_blank">天猫超市</a>
            </div>
            <div class="ml-7 h-48px items-center justify-center flex">
                <a class="border-r-2 pr-8 font-bold text-[rgb(120,78,210)]" href="https://www.taobao.com/" target="_blank">天猫国际</a>
            </div>
            <div class="ml-7 h-48px items-center justify-center flex">
                <a class="min-res-120:border-none border-r-2 pr-8 font-bold text-[rgb(255,0,54)]" href="https://www.taobao.com/" target="_blank">聚划算</a>
            </div>
            <div class="ml-7 min-res-120:hidden h-48px items-center justify-center flex">
                <a class="min-res-120:border-none border-r-2 pr-8 font-bold text-[rgb(255,0,54)]" href="https://tbzb.taobao.com/?spm=a21bo.tmall/a.201859.5.3c5cc3d5X5F3E1" target="_blank">直播频道</a>
            </div>
            <div class="ml-7 min-res-120:hidden h-48px items-center justify-center flex">
                <a class="min-res-110:border-none border-r-2 pr-8 font-bold text-[rgb(124,69,14)]" href="https://tbzb.taobao.com/?spm=a21bo.tmall/a.201859.5.3c5cc3d5X5F3E1" target="_blank">88VIP</a>
            </div>
            <div class="ml-7 min-res-110:hidden h-48px items-center justify-center flex">
                <a class="min-res-110:border-none border-r-2 pr-8 font-bold text-black" href="https://tbzb.taobao.com/?spm=a21bo.tmall/a.201859.5.3c5cc3d5X5F3E1" target="_blank">喵鲜生</a>
            </div>
            <div class="ml-7 min-res-110:hidden h-48px items-center justify-center flex">
                <a class=" pr-8 font-bold text-black" href="https://tbzb.taobao.com/?spm=a21bo.tmall/a.201859.5.3c5cc3d5X5F3E1" target="_blank">飞猪旅行</a>
            </div>
        </div>

        <div class="min-res-120:block hidden">
            <div class="flex mt-4 space-x-4" >
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

        <div class="flex-row min-res-120:hidden flex space-x-4">
            <div class="w-[240px] h-[335px] bg-[rgb(247,247,247)] mt-4 rounded-xl">
                <div class="block text-center rounded-xl">
                    <el-carousel height="335px" motion-blur>
                        <el-carousel-item>
                            <img class="rounded-xl" src="https://img.alicdn.com/imgextra/i1/O1CN01TeIRXy1FtCUoTRRiS_!!6000000000544-2-tps-480-672.png" />
                        </el-carousel-item>
                        <el-carousel-item>
                            <img class="rounded-xl" src="https://img.alicdn.com/imgextra/i2/O1CN01R3b2vD1uC3RAGkfGC_!!6000000006000-2-tps-480-672.png" />
                        </el-carousel-item>
                        <el-carousel-item>
                            <img class="rounded-xl" src="https://img.alicdn.com/imgextra/i1/O1CN01CpjXan1m08BI7AuZx_!!6000000004891-0-tps-480-672.jpg" />
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
            <div class="flex flex-col mt-4">
                <div class="min-res-110:w-[240px] w-[495px] h-[160px] bg-[rgb(247,247,247)] rounded-xl">
                        <div class="flex flex-row items-center justify-between mt-2">
                            <div class="flex ml-4">
                                <span class="font-bold">百亿补贴 · 买贵必赔</span>
                                <div class="font-bold text-white flex ml-2 mt-1 justify-center items-center rounded-md w-10 h-4 bg-[rgb(255,0,54)] text-[10px]">限时秒</div>
                            </div>
                            <Righticon class="icon2 w-3 h-3 mr-4" />
                        </div>
                    <div class="flex justify-center">
                        <div class="flex flex-row">
                            <div class="flex justify-between mt-4 ">
                                <img class="w-24 h-24" src="https://img.alicdn.com/bao/upload/O1CN01Xw0lUE1iPzownoVGb_!!6000000004406-2-yinhe.png"/>
                                <div class=" space-y-2">
                                    <span class=" font-thin text-[14px] overflow-hidden line-clamp-2 w-[100px] leading-[22px] text-ellipsis ">【Gree/格力官方】新一级3匹变频冷暖客厅节能立式空调柜机云颜</span>
                                    <div class="font-thin text-[rgb(255,0,54)] justify-center items-center rounded-md w-14 h-5 bg-[rgba(255,0,54,0.082)] flex text-[10px]">已补1900元</div>
                                    <div class="text-[rgb(255,0,54)] font-bold">¥9399</div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-row min-res-110:hidden ml-16 mr-4">
                            <div class="flex justify-between  space-x-2 mt-4">
                                <img class="w-24 h-24" src="https://img.alicdn.com/bao/upload/O1CN01JN0iCm1eFE4WDLPAA_!!6000000003841-2-yinhe.png"/>
                                <div class="space-y-9">
                                    <span class=" font-thin text-[14px] overflow-hidden line-clamp-2 w-[100px] leading-[22px] text-ellipsis ">源氏木语全实木衣柜原木北欧家用卧室橡木对开门小户型组合衣橱</span>
                                    <div class="text-[rgb(255,0,54)] font-bold">¥5375</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="flex mt-4 flex-row space-x-4">
                    <div class="min-res-110:w-[112px] w-[240px] h-[160px] bg-[rgb(247,247,247)] rounded-xl">
                        <div class="flex justify-between items-center div2 mt-2 ml-3">
                            <div class=" flex">
                                <span class="font-bold">淘宝秒杀</span>
                                <div class="min-res-110:hidden text-white flex ml-2 mt-1 justify-center items-center rounded-md w-10 h-4 bg-orange-400 text-[10px]">超低价</div>
                            </div>
                            <Righticon class="icon2 w-3 h-3 mr-4" />
                        </div>
                        <div class="justify-center space-x-8 mt-2 flex">
                            <div class="items-center justify-center flex flex-col">
                                <img class="w-20 h-20" src="https://img.alicdn.com/bao/upload/O1CN019NZjoA1oD4XcWC6m2_!!6000000005190-2-yinhe.png" />
                                <div class="text-[rgb(255,0,54)] font-bold">¥4299</div>
                            </div>
                            <div class="items-center min-res-110:hidden justify-center flex flex-col">
                                <img class="w-20 h-20" src="https://img.alicdn.com/bao/upload/O1CN01JSrKkK1al37p9LIkP_!!6000000003369-2-yinhe.png" />
                                <div class="text-[rgb(255,0,54)] font-bold">¥3999</div>
                            </div>
                        </div>
                    </div>
                    <div class="min-res-110:w-[112px] w-[240px] h-[160px] bg-[rgb(247,247,247)] rounded-xl">
                        <div class="flex justify-between items-center div2 mt-2 ml-4">
                            <span class="font-bold">聚划算</span>
                            <Righticon class="icon2 w-3 h-3 mr-4" />
                        </div>
                        <div class="justify-center space-x-8 mt-2 flex">
                            <div class="items-center justify-center flex flex-col">
                                <img class="w-20 h-20" src="https://img.alicdn.com/bao/upload/O1CN01mLhE7X1gZ2bQ4VvCx_!!6000000004155-2-yinhe.png" />
                                <div class="text-[rgb(255,0,54)] font-bold">¥13120</div>
                            </div>
                            <div class="items-center min-res-110:hidden justify-center flex flex-col">
                                <img class="w-20 h-20" src="https://img.alicdn.com/bao/upload/O1CN01TAIlaU1kYMQCnOhto_!!6000000004695-2-yinhe.png" />
                                <div class="text-[rgb(255,0,54)] font-bold">¥1000</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col mt-4">
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
                <div class="w-[240px] mt-4 h-[160px] bg-[rgb(230,230,230)] rounded-xl">
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
        
        <div class="flex-row min-res-110:flex hidden space-x-4">

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