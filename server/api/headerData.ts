// import Shopping from '@/components/Icons/Shopping.vue'
// import Collection from '@/components/Icons/Collection.vue'
const headerData = {
    data:[
        {
            name: '淘宝网首页',
            arr: [],
            isIcon: false,
            component: ''
        },
        {
            name: '已买到的宝贝',
            arr: [],
            isIcon: false,
            component: ''
        },
        {
            name: '我的淘宝',
            arr: ['我的足迹','我的卡券包'],
            isIcon: false,
            component: ''
        },
        {
            name: '购物车',
            arr: [],
            isIcon: true,
            component: 'Shopping'
        },
        {
            name: '收藏夹',
            arr: ['收藏的宝贝','收藏的店铺'],
            isIcon:true,
            component: 'Collection'
        },
        {
            name: '商家支持',
            arr: ['已卖出的宝贝','商家中心','天猫规则','商家入驻','淘天标准','商家工具','商家学习中心','商家服务大厅','问商友'],
            isIcon: false,
            component: ''
        },
        {
            name: '商家中心',
            arr: [],
            isIcon: false,
            component: ''
        },
        {
            name: '联系客服', 
            arr: ['消费者客服','卖家客服','意见反馈','网页版旺旺'],
            isIcon: false,
            component: ''
        }
    ]
};

export default defineEventHandler(() => {
    return headerData;
});