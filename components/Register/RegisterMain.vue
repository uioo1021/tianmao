<template>
    <div class="flex justify-center cursor-pointer">
        <form class="w-[380px]">
            <div class="flex text-[12px] items-center">
                <span class="mr-2">手机号码</span>
                <div class="relative flex">
                    <span class="register-searchText" @click="isOpen = true">
                        <div class="flex w-[85px] ml-2 whitespace-nowrap justify-between">
                            <span class="overflow-hidden whitespace-nowrap text-ellipsis">{{selectedOption.text}}</span>
                            <span>{{ selectedOption.code }}</span>
                        </div>
                    </span>
                    <div 
                        class="absolute top-[100%] z-10 bg-white border" 
                        v-show="isOpen"
                        @click.away="closeDropdown"
                        >
                        <div class="options-scroll-container w-[133.5px]">
                            <ul class="whitespace-nowrap">
                                <li 
                                    v-for="item in mainData.data" 
                                    :key="item.code"
                                    class="dropdown-item"
                                    :class="{ 'selected': item.code === selectedOption.code }"
                                    @click="selectOption(item)"
                                >
                                    <span>{{ item.text }}</span>
                                    <span>{{ item.code }}</span>
                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                    <span class="absolute top-2 left-[95px]">▼</span>
                    <input v-model="phoneValue" type="text" class="register-inputTop" placeholder="请输入你的手机号码" />
                </div>
            </div>
            <div class="flex ml-3 mt-4 text-[12px] items-center">
                <span class="mr-2">验证码</span>
                <div class=" relative flex">
                    <input v-model="yzmValue" type="text" class="register-inputBottom" placeholder="请输入校验码" />
                    <span @click="yzmCheck" maxlength="6" :class="{'left-[250px]':countdown.validText === '获取验证码','left-[282px]':countdown.validText === '重发','left-[210px]':countdown.validText !== '获取验证码' && countdown.validText !== '重发'}" class="yzm">{{ countdown.validText }}</span>
                </div>
            </div>
            <div class="ml-[57px] text-[rgb(255,80,0)] flex text-[10px]">{{ Text }}</div>
            <div @click="phoneCheck" :class="{'opacity-40': !phoneValue.trim() || !yzmValue.trim()}"  class="flex rounded w-[320px] h-[36px] text-[12px] text-white justify-center items-center mt-[50px] ml-[56px] bg-[linear-gradient(90deg,rgb(255,153,0),rgb(255,80,0))]">
                同意并注册
            </div>
            <div class="flex w-[320px] ml-[55px] mt-[50px] text-[12px]">
                <input v-model="isCheck" class="mb-[19px] mr-[5px]" type="checkbox" />
                <div>
                    已阅读并同意以下协议
                    <a target="_blank" href="https://terms.alicdn.com/legal-agreement/terms/TD/TD201609301342_19559.html"  class="text-[rgb(255,80,0)]">淘宝平台服务协议</a>、
                    <a target="_blank" href="https://terms.alicdn.com/legal-agreement/terms/suit_bu1_taobao/suit_bu1_taobao201703241622_61002.html"  class="text-[rgb(255,80,0)]">隐私权政策</a>、
                    <a target="_blank" href="https://terms.alicdn.com/legal-agreement/terms/suit_bu1_taobao/suit_bu1_taobao201811121436_80276.html"  class="text-[rgb(255,80,0)]">法律声明</a>、
                    <a target="_blank" href="https://render.alipay.com/p/f/fd-jm7jym6r/alipay/multi-agreement.html" class="text-[rgb(255,80,0)]">支付宝及客户端服务协议</a>
                </div>
            </div>
            <a target="_blank" href="https://reg.taobao.com/havanaone/register/register.htm?bizEntrance=enterprise_pc&bizName=taobao" class="text-[12px] mb-[50px] block text-[rgb(255,80,0)] mt-[30px] ml-[267px]">切换成企业账号注册</a>
        </form>
    </div>
</template>
<script lang="ts" setup>
import { mainData } from '~/data/register/mainData.js'

const isOpen = ref(false)
const selectedOption = ref(mainData.data[0])
const closeDropdown = () => {
    isOpen.value = false
}
const selectOption = (option: { code: string; text: string }) => {
    selectedOption.value = option
    closeDropdown()
}


const isCheck = ref(false)
const phoneValue = ref('')
const yzmValue = ref('')
const Text = ref('')
const phoneCheck = () => {
    if(!phoneValue.value.trim() || !yzmValue.value.trim()) return 
    if(!isCheck.value){
        Text.value='请先阅读并同意协议'
        return 
    }
    const phonePattern =/^1[3-9]\d{9}$/
    if(!phonePattern .test(phoneValue.value.trim())){
            Text.value="手机号码格式不正确，请重新输入";
    }
}
const yzmCheck = () => {
    if(!phoneValue.value.trim() || yzmFlag.value) return
    const phonePattern =/^1[3-9]\d{9}$/
    if(!phonePattern .test(phoneValue.value.trim())){
            Text.value="手机号码格式不正确，请重新输入";
            return
    }
    countdownChange()
}

const countdown = reactive({
    time:60,
    validText:'获取验证码'
})
const yzmFlag = ref(false)

const countdownChange = () =>{
    //已发送
    if(yzmFlag.value) return 
    yzmFlag.value=true
    const timer = setInterval(() => {
        if(countdown.time>0){
            countdown.time--;
            countdown.validText=`重发验证码（${countdown.time}s）`;
            yzmFlag.value=true
        }
        else{
            clearInterval(timer);
            countdown.time=60;
            countdown.validText='重发';
            yzmFlag.value=false
        }
    },1000)
}

</script>
<style scoped>
input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    width: 25px;
    border:#ccc solid 1px;
    height: 15px;
    outline: none;
    cursor: pointer;
    position: relative;
}
input[type="checkbox"]:checked {
    background-color: rgb(255,80,0); 
    border-color: rgb(255,80,0);
}
input[type="checkbox"]:checked::after {
    content: "✓";
    position: absolute;
    color: white;
    font-size: 14px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.register-inputTop {
    @apply border-[1px] rounded border-[rgb(214,214,214)] focus:outline-none p-2 pl-[125px] w-[320px] h-[34px];
}
.register-inputBottom {
    @apply border-[1px] pr-[100px] rounded border-[rgb(214,214,214)] focus:outline-none p-2 w-[320px] h-[34px];
}
.register-searchText{
    @apply absolute w-[114px] pt-[8px] border-r-[1px]  h-full border-[rgb(214,214,214)];
}
.yzm{
    @apply absolute text-[rgb(255,80,0)] top-[8px];
}
/* 横向,纵向滚动条 */
.options-scroll-container {
    @apply overflow-x-auto max-h-[250px];
}
.dropdown-item{
    @apply  min-w-[120px] py-[10px] px-[15px] flex justify-between;
}
.dropdown-item .selected {
    background-color: #ccc;
}

</style>