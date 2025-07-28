<template>
    <div class="indexSearch">
        <div 
            :class="[isVisible ? 'h-[87px] mt-4' : 'h-[55px] mt-[5px]']" 
            class="indexSearch-container"
        >
            <a 
                href="https://www.tmall.com/?spm=a21bo.tmall/a.201857.1.1778c3d5oXRrYY" 
                target="_blank" 
                :class="[isVisible ? 'w-[240px] ml-[8px]' : 'w-[229px] mt-[6px] pr-16 ml-[18px]']"
            >
                <img 
                    src="https://img.alicdn.com/imgextra/i4/O1CN01Se8pZU1ruzNvEEwH9_!!6000000005692-2-tps-480-144.png" 
                    alt="天猫" 
                    class="indexSearch-img" 
                />
            </a>
            <form class="mt-[5px] ml-1" @submit.prevent="handleSearch">
                <div class="flex h-[44px] relative">
                    <input  
                        class="indexSearch-input"
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
                        class="indexSearch-dropdown"
                    >
                        <div 
                            v-if="searchHistory.length > 0" 
                            class="indexSearch-dropdown-container"
                        >
                            <div class="indexSearch-input-top">
                                <div class="text-[rgb(122,122,122)]">历史搜索</div>
                                <div 
                                    @click="delAll=true" 
                                    v-show="!delAll" 
                                    class="flex hover:text-[rgb(255,0,54)] text-[rgb(122,122,122)]"
                                >
                                    <DelIcon class="h-3 w-3 mt-0.5 mr-1"/>
                                    <div  class=" cursor-pointer">清除</div>
                                </div>
                                <div v-show="delAll" class="text-[rgb(122,122,122)] ">
                                    <span @click="clearHistory()" class="clearAll">清除全部</span>
                                    <span @click="delAll=false" class="indexSearch-finish">完成</span>
                                </div>
                            </div>
                            <div class="flex" ref="historyContainer">
                                <div 
                                    class="indexSearch-expand" 
                                    :class="[isExpanded ? 'max-h-none' : 'max-h-[40px]']"
                                >
                                    <div 
                                        v-show="showToggle && !isExpanded"  
                                        @click="toggleExpanded" 
                                        class="indexSearch-expand-icon"
                                    >
                                        <DownIcon class="w-4 h-4"/>
                                    </div>
                                    <div :class="{'mr-16': showToggle}" class="indexSearch-history-container">
                                        <div 
                                            v-for="(item, index) in searchHistory" 
                                            :key="index" 
                                            class="indexSearch-history"
                                            @click="delHistory(item,index)"
                                        >
                                            {{ item }}
                                            <!-- 阻止事件冒泡，直接跳转 -->
                                            <span 
                                                v-if="delAll" 
                                                class="ml-1" 
                                                @click.stop="deleteHistory(index)"
                                            >
                                                &times;
                                            </span> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="indexSearch-guess">
                            <div class="flex">猜你喜欢</div>
                            <div class="flex" @click="handleChange()"> 
                                <div class="mr-1 flex mb-0.5 text-[20px]">&#10227;</div>
                                <div class="flex items-center">换一换</div>
                            </div>
                        </div>
                        <div class=" mx-2 mb-2">
                            <div class="grid grid-rows-4 grid-cols-2 ">
                                <div 
                                    v-for="item in displayItems" 
                                    :key="item" 
                                    class="indexSearch-guess-item" 
                                    @click="selectHistory(item)"
                                >
                                    {{ item }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="indexSearch-change">
                        <div 
                            @mouseenter="isShow=true" 
                            @mouseleave="isShow=false" 
                            class="indexSearch-changeText"
                        >
                            <div class="flex h-[30px]">
                                <span>{{ aText }}</span>
                                <DownIcon class="h-3 w-3 mt-[6px] ml-[2px]" />
                            </div>
                            <div v-if="isShow" class=" indexSearch-changeText-hover">
                                <span 
                                    @click="swapBText()" 
                                    class="indexSearch-changeText-text"
                                >
                                    {{ bText }}
                                </span>
                                <span 
                                    @click="swapCText()" 
                                    class="indexSearch-changeText-text mb-3"
                                >
                                    {{ cText }}
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <span class="indexSearch-line"> | </span> 

                    <div  class="indexSearch-photo group">
                        <div class="relative">
                            <Camera @click="handlePhotoClick()" class="indexSearch-photo-svg"/>
                            <div 
                                v-show="!photoVisible" 
                                class="group-hover:opacity-100 group-hover:visible indexSearch-photo-hover"
                            >
                                {{ photoDivText }}
                                <div class="indexSearch-icon"></div>
                            </div>
                            <div v-show="photoVisible" class="indexSearch-photo-hidden">
                                <div class="flex justify-between text-[14px] mb-2">
                                    <span>按图片搜索</span>
                                    <DelCha 
                                        @click="photoVisible = false,resetUpload" 
                                        class="w-5 h-5 text-[#9195A3]"
                                    />
                                </div>
                                <div class="indexSearch-photo-img">
                                    <img 
                                        v-if="previewUrl" 
                                        :src="previewUrl" 
                                        class="w-full h-full object-contain" 
                                    >
                                    <Photo v-if="!previewUrl" class="size-6 mb-1"/>
                                    <span v-if="!previewUrl" class="text-[12px]">{{ photoDivText }}</span>
                                </div>
                                <div @click="handleFileSelect">
                                    <span 
                                        :class="[photoText === '搜索' ? 'text-white bg-[rgb(255,0,54)]' : 'text-[rgb(255,0,54)] border hover:bg-[rgba(180,180,180,0.2)]','indexSearch-photo-button']"
                                    >
                                        {{ photoText }}
                                    </span>
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
                    
                    <div @click="handleSearch" class="indexSearch-button" >
                        搜索
                    </div>
                </div>
                <div v-show="isVisible" class="indexSearch-row">
                    <a 
                        v-for="(item,index) in rowData.data" 
                        :key="index" 
                        :href="`https://s.taobao.com/search?ie=utf8&q=${encodeURIComponent(item)}&spm=a21bo.tmall%2Fa.201856-fline.1.1778c3d5oXRrYY&tab=mall`" 
                        target="_blank" 
                        class="hover:text-[rgb(255,0,54)]"
                    >
                        {{item}}
                    </a>
                </div>
            </form>

        </div> 
    </div>
</template>

<style scoped>
.indexSearch {
    @apply flex justify-center sticky top-0 bg-white z-[30];
}
.indexSearch-container{
    @apply cursor-pointer flex bg-white min-res-120:w-[1000px] w-[1514px] min-res-110:w-[1254px] min-w-[978px];
}
.indexSearch-img{
    @apply max-w-full h-auto ;
}
.indexSearch-input{
    @apply caret-[black] bg-white  pl-[95px] pr-[150px] py-[5px] text-[12px] focus:outline-none border-[2px] border-[rgb(255,0,54)] rounded-[12px]  min-res-120:w-[496px] min-res-110:w-[754px]  w-[1010px] ;
}
.indexSearch-dropdown{
    @apply z-10 absolute top-[33px] right-[0px] text-[12px] border-[2px] rounded-xl border-[rgb(255,0,54)] rounded-tr-none rounded-tl-none border-t-0 flex flex-col min-res-120:w-[496px] min-res-110:w-[754px]  w-[1010px] bg-white
}
.indexSearch-dropdown-container{
    @apply border-b border-gray-100 pb-2;
}
.indexSearch-input-top{
    @apply flex justify-between items-center mx-2 mt-4 mb-2;
}
.indexSearch-expand-icon{
    @apply min-res-120:left-[440px] min-res-110:left-[695px] left-[950px] absolute px-2 py-[9px] rounded-md bg-white hover:bg-[rgba(180,180,180,0.2)] border cursor-pointer flex items-center;
}
.indexSearch-expand{
    @apply overflow-hidden flex flex-wrap gap-2 mx-2 relative;
}
.indexSearch-history{
    @apply px-2 py-2 rounded-md hover:text-[rgb(255,0,54)] hover:border-[rgb(255,0,54)] border cursor-pointer flex items-center;
}
.indexSearch-history-container{
    @apply flex flex-row flex-wrap gap-x-2 gap-y-2;
}
.indexSearch-guess{
    @apply flex cursor-pointer justify-between mx-2 mt-2 items-center mb-2 text-[rgb(122,122,122)];
}
.indexSearch-guess-item{
    @apply mb-2 pt-1.5 rounded-md pl-2 hover:bg-[rgba(180,180,180,0.2)] h-[30px];
}
.indexSearch-change{
    @apply  absolute w-[100px] h-[30px] left-[2px] top-[10px] flex text-[14px];
}
.indexSearch-changeText{
    @apply flex pl-4 mb-10 rounded-lg rounded-tr-none bg-white w-[76px] rounded-br-none;
}
.indexSearch-changeText-hover{
    @apply flex flex-col w-[75px] left-[0px] rounded-lg shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),_0_4px_6px_-2px_rgba(0,0,0,0.05)] bg-white rounded-t-none absolute z-50 top-[20px];
}
.indexSearch-changeText-text{
    @apply hover:text-[rgb(255,0,54)] ml-[19px] mt-3;
}
.indexSearch-line{
    @apply absolute left-[76px] top-[12px] text-[rgba(80,96,122,0.2)] text-[12px];
}
.indexSearch-photo{
    @apply flex absolute top-[6px] min-res-120:left-[381px] min-res-110:left-[640px] left-[895px];
}
.indexSearch-photo-svg{
    @apply w-8 h-8 hover:text-[rgb(255,0,54)] fill-current flex;
}
.indexSearch-photo-hover{
    @apply  opacity-0 invisible text-white bg-[rgb(31,31,31)] absolute left-[-100px] top-[45px] h-[40px] justify-center w-[210px] flex items-center rounded-lg 
}
.indexSearch-icon{
    @apply absolute top-[-5px] w-[16px] transform rotate-[225deg]  -translate-x-[-50%] translate-y-0 h-[25px] bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAdCAYAAAAaeWr3AAAAAXNSR0IArs4c6QAAAWVJREFUWEfl2M1RwzAQhuH9OqACWyVAB6QEOoAOoIKECoAKkg6gA+iAlLB2BelgiRnMgBM7krWr+EcnHzSy3sc6eARKPJxzjoiWInJJRNVzNXYA3ojohZk55ZaQ8mX79pWILLveCeCZmR9S7SsJgHPuQkReiejaM+wDwA0z7zzn955mDvAT/05E1ZEPGVsAC2sEU4CI+BrKHMEUIM/zzx5fvnlKtkVRXIUcnZC5ZgBZlq0B3IZspm2uiGzKsrzTWKu5hgmAZny9YSsEdQCLeEsEVQDLeCsENYAU8RYIKgAp47URogHOEa+JEAVwzngthN4AQ4jXQOgFMKT4WIRggCHGxyAEATjnnkTk3uKXVGvN0PsEbwCfywytiNh1ADzuL5ZWPut4AYwpvo72RTgJMMb4EIROgDHH+yK0Akwh3gfhKMCU4k8hHABMMb4L4R/AlOPbEH4B5hB/DOEbYE7xTQTMMf4vwhd2Lub+TgZAXwAAAABJRU5ErkJggg==')];
}
.indexSearch-button{
    @apply min-res-110:left-[679px] left-[935px] z-10 absolute min-res-120:left-[422px] cursor-pointer mt-[4px] h-[35px] flex w-[70px] bg-[rgb(255,0,54)] text-white pl-5 rounded-lg font-bold items-center;
}
.indexSearch-input::placeholder {
    color: black;
}
.indexSearch-input:focus::placeholder {
    color: #999;
}
.placeholder-gray::placeholder {
    color: #999 !important;
}
.indexSearch-photo-hidden{
    @apply w-[240px] p-3 h-[229px] bg-white absolute left-[-124px] top-[45px] shadow-[1px_1px_5px_1px_rgba(180,180,180,0.2)] rounded-lg;
}
.indexSearch-photo-img{
    @apply flex-col border-[#D7D9E0] items-center flex border-dashed w-[216px] h-[120px] justify-center rounded-md text-[#9195A3] border;
}
.indexSearch-photo-button{
    @apply w-[80px] h-[32px] flex text-[14px] mt-5 justify-center items-center ml-[65px] rounded-md;
}
.clearAll{
    @apply border-r hover:text-[rgb(255,0,54)] border-[rgb(122,122,122)] pr-2;
}
.indexSearch-row{
    @apply text-[10px] overflow-hidden flex-wrap space-x-2 max-h-[16px] flex  w-full  ml-4 text-[rgb(122,122,122)] min-res-120:w-[471px] min-res-110:w-[714px] mt-2;
}
.indexSearch-finish{
    @apply pl-2 hover:text-[rgb(255,0,54)];
}
</style>

<script setup lang="ts">
const showSearch = ref(false)
const currentPage = ref(0)// 当前页
const itemsPerPage = 8// 每页的数量

import { searchData } from '~/data/index/searchData.json'
import { rowData } from '~/data/index/rowData.json'

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
    const contentContainer = historyContainer.value.querySelector('.indexSearch-history-container') as HTMLElement
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