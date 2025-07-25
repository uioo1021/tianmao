<template>
    <div class="bottom">
        <div>
            <div class="bottom-div">
                <div class="bottom-top">
                    <div 
                        v-for="item in footerData?.topData"
                        :key="item.title"
                        class="bottom-top-div"
                    >
                        <span>{{ item.title }}</span>
                        <a 
                            v-for="(arrItem,arrIndex) in item.arr"
                            :key="arrIndex"
                            :href="arrItem.href"
                            class="text-[#7a7a7a] cursor-pointer hover:text-[rgb(255,80,0)]"
                            target="_blank"
                        >
                            {{ arrItem.title }}
                        </a>
                    </div>
                </div>
                <div class="bottom-center">
                    <a 
                        v-for="item in footerData?.centerData"
                        :key="item.title"
                        class="bottom-center-a" 
                        :href="item.href" 
                        target="_blank"
                    >
                        {{ item.title }}
                    </a>
                </div>
                <div class="bottom-bottom">
                    <a 
                        target="_blank"
                        class="bottom-bottom-a" 
                        v-for="(item,index) in footerData?.bottomATopData"
                        :key="index"
                        :href="item.href"
                    >
                        {{ item.title }}
                    </a>
                    <span 
                        class="whitespace-nowrap"
                        v-for="item in footerData?.bottomSpanData"
                        :key="item"
                    >
                        {{ item  }}
                    </span>
                    <a target="_blank" class="bottom-bottom-a" href="https://img.alicdn.com/imgextra/i3/O1CN01hDXQ0B1ru4arWDeO6_!!6000000005690-0-tps-4300-3040.jpg">出版物网络交易平台服务经营备案证：新出发浙备字第2024005号</a>
                    <img class="bottom-bottom-img" src="https://img.alicdn.com/imgextra/i2/O1CN0108Mv2B1VBiUZxdc4j_!!6000000002615-2-tps-30-30.png" />
                    <a 
                        target="_blank"
                        class="bottom-bottom-a" 
                        v-for="(item,index) in footerData?.bottomABottomData"
                        :key="index"
                        :href="item.href"
                    >
                        {{ item.title }}
                    </a>
                    <img class="bottom-bottom-img" src="https://img.alicdn.com/imgextra/i3/O1CN01Q5eyfT1KawjDwueMh_!!6000000001181-2-tps-132-48.png" />
                    <a target="_blank" class="bottom-bottom-a" href="https://terms.alicdn.com/legal-agreement/terms/suit_bu1_taobao/suit_bu1_taobao202105131215_57739.html?spm=a21bo.tmall/a.1997523009-ft.17.5776c3d5UctMcg">不当竞争举报</a>
                    <img 
                        v-for="item in footerData?.bottomImgData"
                        :key="item"
                        class="bottom-bottom-img" 
                        :src="item" 
                    />
                </div>
            </div>
        </div>
    </div>
    
</template>
<script lang="ts" setup>
import { footerData } from '~/data/register/footerData.js'
</script>
<style>
.bottom{
    @apply  border-t justify-center flex;
}
.bottom > div:first-child{
    @apply  pt-2 pb-1 justify-center flex min-res-120:max-w-[1008px] max-w-[1516px] min-res-110:max-w-[1269px];
}
.bottom-div{
    @apply pt-8 text-[12px];
}
.bottom-top{
    @apply flex flex-row border-t pt-2 min-res-120:gap-x-[200px] min-res-110:gap-x-[250px] gap-x-[300px];
}
.bottom-top-div{
    @apply flex flex-col gap-y-2;
}
.bottom-center{
    @apply pt-8 border-b flex-wrap leading-[2.5] flex gap-x-8 text-[#7a7a7a] pb-5;
}
.bottom-center-a{
    @apply hover:text-[rgb(255,80,0)];
}
.bottom-bottom-a{
    @apply whitespace-nowrap hover:text-[rgb(255,80,0)] cursor-pointer;
}
.bottom-bottom{
    @apply text-[#7a7a7a] gap-x-5 mb-8 flex flex-wrap leading-[3.5] mt-4;
}
.bottom-bottom-img{
    @apply h-[24px];
}
</style>