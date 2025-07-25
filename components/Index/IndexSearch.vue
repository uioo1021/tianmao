<template>
    <div class="search">
        <div :class="[isVisible ? 'h-[87px] mt-4' : 'h-[55px] mt-[5px]']" class="search-div">
            <a href="https://www.tmall.com/?spm=a21bo.tmall/a.201857.1.1778c3d5oXRrYY" target="_blank" :class="[isVisible ? 'w-[240px] ml-[8px]' : 'w-[229px] mt-[6px] pr-16 ml-[18px]']">
                    <img src="https://img.alicdn.com/imgextra/i4/O1CN01Se8pZU1ruzNvEEwH9_!!6000000005692-2-tps-480-144.png" alt="天猫" class="search-img" />
            </a>
            <form class="mt-[5px] ml-1" @submit.prevent="handleSearch">
                <div class="flex h-[44px] relative">
                    <input  
                        class="search-input"
                        type="text"
                        :class="{'placeholder-gray': searchText === '' && showSearch}"
                        @focus="handleFocus()"
                        @blur="handleBlur()"
                        v-model="searchText"
                        :placeholder="currentPlaceholder"
                        @keyup.enter="handleSearch()"
                    />

                    <div 
                        v-if="showSearch" 
                        @mouseleave="showSearch = false , isExpanded = false,delAll=false"
                        ref="dropdownRef"
                        tabindex="-1"
                        class="search-dropdown"
                    >
                        <div v-if="searchHistory.length > 0" class="border-b border-gray-100 pb-2">
                            <div class="search-input-top">
                                <div class="text-[rgb(122,122,122)]">历史搜索</div>
                                <div @click="delAll=true" v-show="!delAll" class="flex hover:text-[rgb(255,0,54)] text-[rgb(122,122,122)]">
                                    <DelIcon class="h-3 w-3 mt-0.5 mr-1"/>
                                    <div  class=" cursor-pointer" >清除</div>
                                </div>
                                <div v-show="delAll"  class="text-[rgb(122,122,122)] ">
                                    <span @click="clearHistory()" class="border-r border-1 hover:text-[rgb(255,0,54)] border-[rgb(122,122,122)] pr-2">清除全部</span>
                                    <span @click="delAll=false" class="pl-2 hover:text-[rgb(255,0,54)]">完成</span>
                                </div>
                            </div>
                            <div class="history-container flex" ref="historyContainer">
                                <div class="overflow-hidden flex flex-wrap gap-2 mx-2 relative" :class="[isExpanded ? 'max-h-none' : 'max-h-[40px]']">
                                    <div v-show="showToggle && !isExpanded"  @click="toggleExpanded" class="search-expand">
                                        <DownIcon class="w-4 h-4"/>
                                    </div>
                                    <div :class="{'mr-16': showToggle}" class="flex flex-row flex-wrap gap-x-2 gap-y-2">
                                        <div 
                                            v-for="(item, index) in searchHistory" 
                                            :key="index" 
                                            class="search-history"
                                            @click="delHistory(item,index)"
                                        >
                                            {{ item }}
                                            <!-- 阻止事件冒泡，直接跳转 -->
                                            <span v-if="delAll" class="ml-1" @click.stop="deleteHistory(index)">&times;</span> 
                                        </div>
                                    </div>
                            </div>
                            </div>
                            
                        </div>

                        <div class="search-guess">
                            <div class="flex">猜你喜欢</div>
                            <div class="flex" @click="handleChange()"> 
                                <div class="mr-1 flex mb-0.5 text-[20px]">&#10227;</div>
                                <div class="flex items-center">换一换</div>
                            </div>
                        </div>
                        <div class=" mx-2 mb-2">
                            <div class=" grid grid-rows-4 grid-cols-2 ">
                                <div v-for="item in displayItems" :key="item" class="mb-2  pt-1.5 rounded-md pl-2 hover:bg-[rgba(180,180,180,0.2)] h-[30px]"  @click="selectHistory(item)">
                                    {{ item }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class=" absolute w-[100px] h-[30px] left-[2px] top-[10px] flex text-[14px]">
                        <div @mouseenter="isShow=true" @mouseleave="isShow=false" class="search-changeText">
                            <div class="flex h-[30px]">
                                <span>{{ aText }}</span>
                                <DownIcon class="h-3 w-3 mt-[6px] ml-[2px]" />
                            </div>
                            <div v-if="isShow" class=" search-changeText-hover">
                                <span @click="swapBText()" class="search-changeText-text">{{ bText }}</span>
                                <span @click="swapCText()" class="search-changeText-text mb-3">{{ cText }}</span>
                            </div>
                        </div>
                    </div>
                    
                    <span class="search-line"> | </span> 

                    <div  class="search-photo group">
                        <div class="relative">
                            <svg @click="handlePhotoClick()" class="search-photo-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1"  viewBox="0 0 28 28">
                                <g>
                                    <path d="M17.209699999999998,5.16071Q16.545099999999998,4.75,15.7639,4.75L12.23607,4.75Q11.45485,4.75,10.79031,5.16071Q10.12577,5.57142,9.77639,6.27016L9.333549999999999,7.1558600000000006Q9.28647,7.25,9.18122,7.25Q7.34575,7.25,6.04787,8.54787Q4.75,9.845749999999999,4.75,11.68122L4.75,18.5Q4.75,20.4675,6.14124,21.8588Q7.53248,23.25,9.5,23.25L18.5,23.25Q20.4675,23.25,21.8588,21.8588Q23.25,20.4675,23.25,18.5L23.25,11.68122Q23.25,9.845749999999999,21.9521,8.54787Q20.6543,7.25,18.8188,7.25Q18.7135,7.25,18.6665,7.1558600000000006L18.223599999999998,6.27016Q17.874200000000002,5.571421,17.209699999999998,5.16071ZM11.118030000000001,6.94098Q11.46353,6.25,12.23607,6.25L15.7639,6.25Q16.5365,6.25,16.881999999999998,6.94098L17.3248,7.82668Q17.7865,8.75,18.8188,8.75Q20.032899999999998,8.75,20.8915,9.60853Q21.75,10.46707,21.75,11.68122L21.75,18.5Q21.75,19.8462,20.7981,20.7981Q19.8462,21.75,18.5,21.75L9.5,21.75Q8.15381,21.75,7.2019,20.7981Q6.25,19.8462,6.25,18.5L6.25,11.68122Q6.25,10.46707,7.10853,9.60853Q7.96707,8.75,9.18122,8.75Q10.21353,8.75,10.67519,7.82668L11.118030000000001,6.94098ZM18.25,14.5C18.25,16.8472,16.3472,18.75,14,18.75C11.65279,18.75,9.75,16.8472,9.75,14.5C9.75,12.15279,11.65279,10.25,14,10.25C16.3472,10.25,18.25,12.15279,18.25,14.5ZM16.75,14.5C16.75,12.98122,15.5188,11.75,14,11.75C12.48122,11.75,11.25,12.98122,11.25,14.5C11.25,16.0188,12.48122,17.25,14,17.25C15.5188,17.25,16.75,16.0188,16.75,14.5Z" fill-rule="evenodd" fill="currentColor" fill-opacity="1"></path>
                                </g>
                            </svg>
                            <div v-show="!photoVisible" class="group-hover:opacity-100 group-hover:visible search-photo-hover">
                                {{ photoDivText }}
                                <div class="search-icon"></div>
                            </div>
                            <div v-show="photoVisible" class="search-photo-hidden">
                                <div class="flex justify-between text-[14px] mb-2">
                                    <span>按图片搜索</span>
                                    <DelCha @click="photoVisible = false,resetUpload" class="w-5 h-5 text-[#9195A3]"/>
                                </div>
                                <div class="search-photo-img">
                                    <img 
                                        v-if="previewUrl" 
                                        :src="previewUrl" 
                                        class="w-full h-full object-contain" 
                                    >
                                    <Photo v-if="!previewUrl" class="size-6 mb-1"/>
                                    <span v-if="!previewUrl" class="text-[12px]">{{ photoDivText }}</span>
                                </div>
                                <div @click="handleFileSelect">
                                    <span :class="[photoText === '搜索' ? 'text-white bg-[rgb(255,0,54)]' : 'text-[rgb(255,0,54)] border hover:bg-[rgba(180,180,180,0.2)]','search-photo-button']">{{ photoText }}</span>
                                </div>
                            </div>
                        </div>                  
                    </div>

                    <input
                        ref="fileInputRef"
                        type="file"
                        accept="image/*"
                        @change="handleFileChange"
                        class="hidden"
                    />
                    
                    <div @click="handleSearch" class="search-button" >
                        搜索
                    </div>
                </div>
                <div v-show="isVisible" class="text-[10px] overflow-hidden flex-wrap space-x-2 max-h-[16px] flex  w-full  ml-4 text-[rgb(122,122,122)] min-res-120:w-[471px] min-res-110:w-[714px] mt-2">
                    <a v-for="(item,index) in rowData.data" :key="index" :href="`https://s.taobao.com/search?ie=utf8&q=${encodeURIComponent(item)}&spm=a21bo.tmall%2Fa.201856-fline.1.1778c3d5oXRrYY&tab=mall`" target="_blank" class="hover:text-[rgb(255,0,54)]">{{item}}</a>
                </div>
            </form>

        </div> 
    </div>
</template>

<style scoped>
.search {
    @apply flex justify-center sticky top-0 bg-white z-[30];
}
.search-div{
    @apply cursor-pointer flex bg-white min-res-120:w-[1000px] w-[1514px] min-res-110:w-[1254px] min-w-[978px];
}
.search-img{
    @apply max-w-full h-auto ;
}
.search-input{
    @apply caret-[black] bg-white  pl-[95px] pr-[150px] py-[5px] text-[12px] focus:outline-none border-[2px] border-[rgb(255,0,54)] rounded-[12px]  min-res-120:w-[496px] min-res-110:w-[754px]  w-[1010px] ;
}
.search-dropdown{
    @apply z-10 absolute top-[33px] right-[0px] text-[12px] border-[2px] rounded-xl border-[rgb(255,0,54)] rounded-tr-none rounded-tl-none border-t-0 flex flex-col min-res-120:w-[496px] min-res-110:w-[754px]  w-[1010px] bg-white
}
.search-input-top{
    @apply flex justify-between items-center mx-2 mt-4 mb-2;
}
.search-expand{
    @apply min-res-120:left-[440px] min-res-110:left-[695px] left-[950px] absolute px-2 py-[9px] rounded-md bg-white hover:bg-[rgba(180,180,180,0.2)] border cursor-pointer flex items-center;
}
.search-history{
    @apply px-2 py-2 rounded-md hover:text-[rgb(255,0,54)] hover:border-[rgb(255,0,54)] border cursor-pointer flex items-center;
}
.search-guess{
    @apply flex cursor-pointer justify-between mx-2 mt-2 items-center mb-2 text-[rgb(122,122,122)];
}
.search-changeText{
    @apply flex pl-4 mb-10 rounded-lg rounded-tr-none bg-white w-[76px] rounded-br-none;
}
.search-changeText-hover{
    @apply flex flex-col w-[75px] left-[0px] rounded-lg shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),_0_4px_6px_-2px_rgba(0,0,0,0.05)] bg-white rounded-t-none absolute z-50 top-[20px];
}
.search-changeText-text{
    @apply hover:text-[rgb(255,0,54)] ml-[19px] mt-3;
}
.search-line{
    @apply absolute left-[76px] top-[12px] text-[rgba(80,96,122,0.2)] text-[12px];
}
.search-photo{
    @apply flex absolute top-[6px] min-res-120:left-[381px] min-res-110:left-[640px] left-[895px];
}
.search-photo-svg{
    @apply w-8 h-8 hover:text-[rgb(255,0,54)] fill-current flex;
}
.search-photo-hover{
    @apply  opacity-0 invisible text-white bg-[rgb(31,31,31)] absolute left-[-100px] top-[45px] h-[40px] justify-center w-[210px] flex items-center rounded-lg 
}
.search-icon{
    @apply absolute top-[-5px] w-[16px] transform rotate-[225deg]  -translate-x-[-50%] translate-y-0 h-[25px] bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAdCAYAAAAaeWr3AAAAAXNSR0IArs4c6QAAAWVJREFUWEfl2M1RwzAQhuH9OqACWyVAB6QEOoAOoIKECoAKkg6gA+iAlLB2BelgiRnMgBM7krWr+EcnHzSy3sc6eARKPJxzjoiWInJJRNVzNXYA3ojohZk55ZaQ8mX79pWILLveCeCZmR9S7SsJgHPuQkReiejaM+wDwA0z7zzn955mDvAT/05E1ZEPGVsAC2sEU4CI+BrKHMEUIM/zzx5fvnlKtkVRXIUcnZC5ZgBZlq0B3IZspm2uiGzKsrzTWKu5hgmAZny9YSsEdQCLeEsEVQDLeCsENYAU8RYIKgAp47URogHOEa+JEAVwzngthN4AQ4jXQOgFMKT4WIRggCHGxyAEATjnnkTk3uKXVGvN0PsEbwCfywytiNh1ADzuL5ZWPut4AYwpvo72RTgJMMb4EIROgDHH+yK0Akwh3gfhKMCU4k8hHABMMb4L4R/AlOPbEH4B5hB/DOEbYE7xTQTMMf4vwhd2Lub+TgZAXwAAAABJRU5ErkJggg==')];
}
.search-button{
    @apply min-res-110:left-[679px] left-[935px] z-10 absolute min-res-120:left-[422px] cursor-pointer mt-[4px] h-[35px] flex w-[70px] bg-[rgb(255,0,54)] text-white pl-5 rounded-lg font-bold items-center;
}
.search-input::placeholder {
    color: black;
}
.search-input:focus::placeholder {
    color: #999;
}
.placeholder-gray::placeholder {
    color: #999 !important;
}
.search-photo-hidden{
    @apply w-[240px] p-3 h-[229px] bg-white absolute left-[-124px] top-[45px] shadow-[1px_1px_5px_1px_rgba(180,180,180,0.2)] rounded-lg;
}
.search-photo-img{
    @apply flex-col border-[#D7D9E0] items-center flex border-dashed w-[216px] h-[120px] justify-center rounded-md text-[#9195A3] border;
}
.search-photo-button{
    @apply w-[80px] h-[32px] flex text-[14px] mt-5 justify-center items-center ml-[65px] rounded-md;
}
</style>

<script setup lang="ts">
const showSearch = ref(false)
const currentPage = ref(0)// 当前页
const itemsPerPage = 8// 每页的数量

import { searchData } from '~/data/index/searchData.js'
import { rowData } from '~/data/index/rowData.js'

// 切换到下一组数据
const handleChange = (): void => {
    showSearch.value = true
    if (searchData.data && searchData.data.length > 0) {
        // 总组数，向上取整
        const totalPages = Math.ceil(searchData.data.length / itemsPerPage)
        currentPage.value = (currentPage.value + 1) % totalPages
    }
}

//当前显示的数据
const displayItems = computed(() => {
    const start = currentPage.value * itemsPerPage
    const end = start + itemsPerPage
    return searchData.data.slice(start, end) || []
})


const timeSet = ref<NodeJS.Timeout | null>(null)
const dropdownRef = ref<HTMLDivElement | null>(null)

const handleBlur = () => {
    if (!searchText.value) {
        startRotation();
    }

    timeSet.value = setTimeout(() => {
        //点击目标是否在下拉框内部
        const isClick= dropdownRef.value?.contains(document.activeElement)
        
        // 如果点击不在下拉框内，则隐藏下拉框
        if (!isClick) {
            showSearch.value = false
        }
    }, 150) // 延迟150ms，足够让点击事件完成
}

const clearTimeoutSet = () => {
    if (timeSet.value) {
        clearTimeout(timeSet.value)
        timeSet.value = null
    }
}
onUnmounted(() => {
    clearTimeoutSet()
})

const searchText = ref('')
const searchHistory = ref<string[]>([])
// 获取历史记录
onMounted(() => {
    if (import.meta.client) {
        const history = localStorage.getItem('searchHistory')
        searchHistory.value = history ? JSON.parse(history) : []
    }
})

// 添加到历史记录
const addToHistory = (history: string) => {
    if (!history.trim()) return; // 空字符
    if (import.meta.client) {
        // 去重
        const newHistory = searchHistory.value.filter(item => item !== history)
        // 添加到最前面
        newHistory.unshift(history)
        // 最多20条
        if (newHistory.length > 20) {
            newHistory.pop()
        }
        searchHistory.value = newHistory
        localStorage.setItem('searchHistory', JSON.stringify(newHistory))
    }
}

// 搜索
const handleSearch = () => {
    const searchQuery = searchText.value.trim() || currentPlaceholder.value.trim();
    if (searchQuery) {
        addToHistory(searchQuery);
        window.open(`https://s.taobao.com/search?ie=utf8&q=${encodeURIComponent(searchQuery)}&tab=mall`, '_blank');
        
        searchText.value = '';
        showSearch.value = false;
        delAll.value = false;
        isExpanded.value = false;
    }
}

// 点击某条历史/猜你喜欢
const selectHistory = (item: string) => {
    searchText.value = item
    handleSearch()
}

const delHistory = (item: string,index:number) => {
    if (delAll.value) {
        deleteHistory(index)
        return 
    }
    selectHistory(item)
}

// 删除单个
const deleteHistory = (index: number) => {
    searchHistory.value.splice(index, 1)
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory.value))
}

// 清除所有
const clearHistory = () => {
    searchHistory.value = []
    localStorage.removeItem('searchHistory')
}

const delAll = ref(false)

const aText = ref('天猫')
const bText = ref('宝贝')
const cText = ref('店铺')
const isShow = ref(false)

const swapBText= () => {
    const temp = aText.value
    aText.value = bText.value
    bText.value = temp
    isShow.value = false
}

const swapCText = () => {
    const temp = aText.value
    aText.value = cText.value
    cText.value = temp
    isShow.value = false
}


// 历史记录展开功能
const isExpanded = ref(false)
const historyContainer = ref<HTMLDivElement | null>(null)
const showToggle = ref(true)

// 计算是否需要显示展开按钮
const updateShowToggle = () => {
    if (!historyContainer.value) return
    const contentContainer = historyContainer.value.querySelector('.flex.flex-wrap') as HTMLElement
    if (!contentContainer) {
        showToggle.value = false
        return
    }

  // 容器测量真实高度
    const clone = contentContainer.cloneNode(true) as HTMLElement
    document.body.appendChild(clone)
    showToggle.value = clone.scrollHeight > 40
    document.body.removeChild(clone)
}

watch(
    searchHistory,() => {
        // 用nextTick确保DOM已更新（历史记录项已渲染）
        nextTick(() => {
            updateShowToggle()
        })
    },
    { immediate: true } // 初始化时立即执行一次
)

// 监听窗口大小变化
const handleResize = () => {
    nextTick(() => {
        updateShowToggle()
    })
}
onMounted(() => {
    window.addEventListener('resize', handleResize)
})
onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
})


const toggleExpanded = () => {
    isExpanded.value = !isExpanded.value
}

// 搜索框被粘住后，样式改变
const isVisible = ref(false)
const scrollValue = ref(100)
const handleScroll = () => {
    isVisible.value = window.scrollY < scrollValue.value
}
onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  //处理刷新页面时的情况
    handleScroll()
})
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})


const placeholders = ref([
    '生发仪梳子',
    '头皮生发梳',
    '激光红光梳'
])
const currentIndex = ref(0)
const currentPlaceholder = ref(placeholders.value[0])
const rotationTimer = ref<number | null>(null) // 轮播定时器

// 开始轮播
const startRotation = () => {
    if (rotationTimer.value) return
    if(import.meta.client){
        rotationTimer.value = window.setInterval(() => {
            currentIndex.value = (currentIndex.value + 1) % placeholders.value.length
            currentPlaceholder.value = placeholders.value[currentIndex.value]
        }, 3000) // 每3秒切换一次
    }
}

const stopRotation = () => {
    if (rotationTimer.value) {
        clearInterval(rotationTimer.value)
        rotationTimer.value = null
    }
}

watch(aText, () => {
    if(aText.value === '店铺'){
        placeholders.value = []
        currentPlaceholder.value = ''
        stopRotation()
    }
    else {
        placeholders.value = [
            '生发仪梳子',
            '头皮生发梳',
            '激光红光梳'
        ]
        currentPlaceholder.value = placeholders.value[0]
        currentIndex.value = 0
        startRotation()
    }
}, { immediate: true }) 

const handleFocus = () => {
    showSearch.value = true
}
onMounted(() => {
    if (import.meta.client) {
        startRotation()
    }
})
onUnmounted(() => {
    if (rotationTimer.value) {
        clearInterval(rotationTimer.value)
        rotationTimer.value = null
    }
})

const photoText = ref('上传图片')
const photoDivText = ref('Ctrl+V 粘贴图片到此处')
const photoVisible = ref(false)
const previewUrl = ref('')
const selectedFile = ref<File | null>(null)

const handlePhotoClick = () => {
    photoVisible.value = !photoVisible.value
}


const fileInputRef = ref<HTMLInputElement | null>(null)

const handleFileSelect = () => {
    if(photoText.value === '搜索'){
        handleSearch()
        resetUpload()
        photoVisible.value = false
        return
    }
    if(photoText.value === '重试'){
        resetUpload()
        return
    }
    if (fileInputRef.value) {
        fileInputRef.value.click()
    }
}

const handleFileChange = (e: Event) => {
    const input = e.target as HTMLInputElement

    if (input.files && input.files.length > 0) {
        selectedFile.value = input.files[0]
        // 文件类型判断逻辑
        const allowedTypes = ['image/jpeg', 'image/png']; // 允许的MIME类型
        const allowedExtensions = ['.jpg', '.jpeg', '.png']; // 允许的扩展名
        const fileExtension = selectedFile.value.name.split('.').pop()?.toLowerCase();
        const isTypeAllowed = allowedTypes.includes(selectedFile.value.type);
        const isExtensionAllowed = fileExtension ? allowedExtensions.includes('.' + fileExtension) : false;
        
        if (!isTypeAllowed || !isExtensionAllowed) {
            photoDivText.value = '仅支持 jpeg、png 格式图片上传哦～'
            photoText.value = '重试'
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile.value)
        previewUrl.value = objectUrl
        photoText.value = '搜索'
    }
}

// 重置上传状态
const resetUpload = () => {
    if (previewUrl.value) {
        URL.revokeObjectURL(previewUrl.value)
        previewUrl.value = ''
    }
    selectedFile.value = null
    photoText.value = '上传图片'
    photoDivText.value = 'Ctrl+V 粘贴图片到此处'
    if (fileInputRef.value) {
        fileInputRef.value.value = ''
    }
}

onUnmounted(() => {
    if (previewUrl.value) {
        URL.revokeObjectURL(previewUrl.value)
    }
})
</script>