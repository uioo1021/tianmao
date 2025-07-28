<template>
    <div class="registerMain">
        <form class="w-[380px]">
            <div class="registerMain-input-top">
                <span class="mr-2">手机号码</span>
                <div class="relative flex">
                    <span class="registerMain-searchText" @click="isOpen = true">
                        <div class="selectContainer">
                            <span class="selectContainer-text">{{selectedOption.text}}</span>
                            <span>{{ selectedOption.code }}</span>
                        </div>
                    </span>
                    <div 
                        class="selectOptions" 
                        v-show="isOpen"
                        @click.away="closeDropdown"
                        >
                        <div class="options-scroll-container">
                            <ul class="whitespace-nowrap">
                                <li 
                                    v-for="item in mainData.selectData" 
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
                    <span class="selectContainer-icon">▼</span>
                    <input 
                        v-model="phoneValue" 
                        type="text" 
                        class="registerMain-inputTop" 
                        placeholder="请输入你的手机号码" 
                    />
                </div>
            </div>
            <div class="registerMain-input-bottom">
                <span class="mr-2">验证码</span>
                <div class="relative flex">
                    <input 
                        maxlength="6" 
                        v-model="valiValue" 
                        type="text" 
                        class="registerMain-inputBottom" 
                        placeholder="请输入校验码" 
                    />
                    <span 
                        @click="verificationCheck" 
                        :class="{'left-[250px]':countdown.validText === '获取验证码','left-[282px]':countdown.validText === '重发','left-[210px]':countdown.validText !== '获取验证码' && countdown.validText !== '重发'}" 
                        class="verificationCode"
                    >
                        {{ countdown.validText }}
                    </span>
                </div>
            </div>
            <div class="registerMain-tip">{{ Text }}</div>
            <div 
                @click="phoneCheck" 
                :class="{'opacity-40': !phoneValue.trim() || !valiValue.trim()}"  
                class="registerMain-button"
            >
                同意并注册
            </div>
            <div class="registerMain-text">
                <input 
                    v-model="isCheck" 
                    class="mb-[19px] mr-[5px]" 
                    type="checkbox" 
                />
                <div>
                    已阅读并同意以下协议
                    <a 
                        v-for="(item,index) in mainData.textData"
                        :key="item.name"
                        target="_blank" 
                        :href="item.href"  
                    >
                        <span class="text-[rgb(255,80,0)]">{{ item.name }}</span>
                        <span v-show="index !== mainData.textData.length - 1">、</span>
                    </a>
                </div>
            </div>
            <a 
                target="_blank" 
                href="https://reg.taobao.com/havanaone/register/register.htm?bizEntrance=enterprise_pc&bizName=taobao" 
                class="registerMain-change"
            >
                切换成企业账号注册
            </a>
        </form>
    </div>
</template>
<script lang="ts" setup>
import { mainData } from '~/data/register/mainData.json'

const isOpen = ref(false)
const selectedOption = ref(mainData.selectData[0])
const closeDropdown = () => {
    isOpen.value = false
}
const selectOption = (option: { code: string; text: string }) => {
    selectedOption.value = option
    closeDropdown()
}


const isCheck = ref(false)
const phoneValue = ref('')
const valiValue = ref('')
const Text = ref('')
const phoneCheck = () => {
    if(!phoneValue.value.trim() || !valiValue.value.trim()) return 
    if(!isCheck.value){
        Text.value='请先阅读并同意协议'
        return 
    }
    const phonePattern =/^1[3-9]\d{9}$/
    if(!phonePattern .test(phoneValue.value.trim())){
            Text.value="手机号码格式不正确，请重新输入";
    }
}
const verificationCheck = () => {
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
.registerMain{
    @apply flex justify-center cursor-pointer;
}
.registerMain-inputTop {
    @apply border-[1px] rounded border-[rgb(214,214,214)] focus:outline-none p-2 pl-[125px] w-[320px] h-[34px];
}
.registerMain-inputBottom {
    @apply border-[1px] pr-[100px] rounded border-[rgb(214,214,214)] focus:outline-none p-2 w-[320px] h-[34px];
}
.registerMain-searchText{
    @apply absolute w-[114px] pt-[8px] border-r-[1px]  h-full border-[rgb(214,214,214)];
}
.verificationCode{
    @apply absolute text-[rgb(255,80,0)] top-[8px];
}
/* 横向,纵向滚动条 */
.options-scroll-container {
    @apply overflow-x-auto max-h-[250px] w-[133.5px];
}
.dropdown-item{
    @apply  min-w-[120px] py-[10px] px-[15px] flex justify-between;
}
.dropdown-item.selected {
    @apply bg-[#ccc];
}
.selectContainer{
    @apply flex w-[85px] ml-2 whitespace-nowrap justify-between;
}
.selectContainer-text{
    @apply overflow-hidden whitespace-nowrap text-ellipsis;
}
.selectOptions{
    @apply absolute top-[100%] z-10 bg-white border;
}
.selectContainer-icon{
    @apply absolute top-2 left-[95px];
}
.registerMain-input-top{
    @apply flex text-[12px] items-center;
}
.registerMain-input-bottom{
    @apply flex ml-3 mt-4 text-[12px] items-center;
}
.registerMain-tip{
    @apply ml-[57px] text-[rgb(255,80,0)] flex text-[10px];
}
.registerMain-button{
    @apply flex rounded w-[320px] h-[36px] text-[12px] text-white justify-center items-center mt-[50px] ml-[56px] bg-[linear-gradient(90deg,rgb(255,153,0),rgb(255,80,0))];
}
.registerMain-text{
    @apply flex w-[320px] ml-[55px] mt-[50px] text-[12px];
}
.registerMain-change{
    @apply text-[12px] mb-[50px] block text-[rgb(255,80,0)] mt-[30px] ml-[267px];
}
</style>