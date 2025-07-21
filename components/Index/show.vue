<template>
    <div class="flex justify-center">
        <div class="flex flex-wrap gap-x-2 gap-y-2 mt-4 l justify-center min-res-120:max-w-[1008px] max-w-[1516px] min-res-110:max-w-[1269px]">
            <a class="p-1 pb-4  hover:border-[rgb(255,0,54)] border-white border w-[246px] rounded-lg  h-[360px]" :href="item.href" target="_blank" v-for="(item,index) in bottomData.data" :key="index">
                <img class="rounded-lg w-[240px] h-[240px]" :src="item.img" />
                <div  class="ml-2 mt-2 max-h-[50px] text-clip  overflow-hidden">
                    <span v-if="item.isIcon" class=" text-[rgb(255,0,54)] font-bold mr-2">天猫</span>
                    <span class="flex-wrap text-[14px]">{{ item.title }}</span>
                </div>
                <div class="ml-2 mt-6">
                    <span class=" text-[rgb(255,0,54)] font-bold text-[12px] mr-1">¥</span>
                    <span class="text-[rgb(255,0,54)] font-bold text-[20px]">{{ item.price }}</span>
                </div>
            </a>
            <div class="flex pb-10 flex-col mt-10">
                <div class="font-bold flex mb-2">
                    <span class="border-r-2 pr-2 border-black">Tmall</span>
                    <span class="pl-2">天猫</span>
                </div>
                <div class="text-[12px] mb-1.5">
                    天猫商城，理想生活的起点，在这里时尚潮流与实用
                    <a class="text-[rgb(255,0,54)] m-[-3px]" href="https://goods.taobao.com/?spm=a21bo.tmall/a.seoinject.1.1a1dc3d5ctNOQY" target="_blank">好物</a>
                        齐聚，品质与优惠并行。无论你是追求时尚的弄潮儿，还是注重生活品质的居家达人，天猫都能为你打造专属的理想生活。
                </div>
                <div class="flex-wrap leading-[2] text-[12px]">
                    天猫商城作为国际化综合性购物超市，整合了大量国内外品牌商和生产商，为商家和消费者之间提供一站式耐克阿迪达斯锐步安德玛匡威始祖鸟羽绒服等淘宝网页购物服务。涵盖了从电视机，空调，洗衣机，冰箱，美的，skyworth，大金等几乎全品类的商品。其中
                    <a class="text-[rgb(255,0,54)] ml-[-3px]" target="_blank" href="https://bk.taobao.com/k/diannao_251/?spm=a21bo.tmall/a.seoinject.24.1a1dc3d5ctNOQY">数码电脑</a>、
                    <a class="text-[rgb(255,0,54)] ml-[-4px]" target="_blank" href="https://bk.taobao.com/k/bijibendiannao_273/?spm=a21bo.tmall/a.seoinject.25.1a1dc3d5ctNOQY">笔记本</a>、
                    <a class="text-[rgb(255,0,54)] ml-[-4px]" target="_blank" href="https://bk.taobao.com/k/pingban_233/?spm=a21bo.tmall/a.seoinject.26.1a1dc3d5ctNOQY">平板</a>、
                    <a class="text-[rgb(255,0,54)] ml-[-4px]" target="_blank" href="https://bk.taobao.com/k/jianpan_285/?spm=a21bo.tmall/a.seoinject.27.1a1dc3d5ctNOQY">键盘鼠标</a>、
                    <a class="text-[rgb(255,0,54)] ml-[-4px]" target="_blank" href="https://bk.taobao.com/k/erji_265/?spm=a21bo.tmall/a.seoinject.29.1a1dc3d5ctNOQY">耳机</a>、
                    <a class="text-[rgb(255,0,54)] ml-[-4px]" target="_blank" href="https://bk.taobao.com/k/xiaomi_79/?spm=a21bo.tmall/a.seoinject.30.1a1dc3d5ctNOQY">小米</a>、
                    <a class="text-[rgb(255,0,54)] ml-[-4px]" target="_blank" href="https://bk.taobao.com/k/huawei_82/?spm=a21bo.tmall/a.seoinject.31.1a1dc3d5ctNOQY">华为</a>、
                    <a class="text-[rgb(255,0,54)] ml-[-4px]" target="_blank" href="https://bk.taobao.com/k/pingguo_81/?spm=a21bo.tmall/a.seoinject.32.1a1dc3d5ctNOQY">苹果</a>、
                    <a class="text-[rgb(255,0,54)] ml-[-4px]" target="_blank" href="https://bk.taobao.com/k/iphone16_424?spm=a21bo.tmall/a.seoinject.33.1a1dc3d5ctNOQY">iphone</a>
                    等更是赢得了热门口碑和评价。
                </div>
                <div class="flex-wrap leading-[2] text-[12px]">
                    品质狂欢，尽在天猫！严选正品，购物无忧。丰富品类，满足你的各种需求。每一次点击，都是一次惊喜的发现；每一次购物，都是一次幸福的知识体验。加入天猫生活百科和Tao商城以及服装美妆数码游戏和淘宝智慧生活每一天！
                </div>
                <div class="text-[12px] mt-1.5">
                    天猫提供100%品质保证的商品，7天无理由退货的售后服务，天猫将通过
                    <a class="text-[rgb(255,0,54)] m-[-3px]" target="_blank" href="https://pc.taobao.com/?spm=a21bo.tmall/a.seoinject.45.1a1dc3d5ctNOQY">淘宝客户端</a>
                    继续提升消费者
                    <a class="text-[rgb(255,0,54)] m-[-3px]" target="_blank" href="https://jianghu.taobao.com/topicId/123402?spm=a21bo.tmall/a.seoinject.46.1a1dc3d5ctNOQY">购物体验</a>
                    ，致力于成为全球品牌与零售商的重要第三方线上及移动商业平台。
                </div>
        </div> 
    </div>
    </div>
    
</template>
<script lang="ts" setup>
import { bottomData } from '~/data/bottomData.js'
</script>