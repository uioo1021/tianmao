<template>
    <div class="cursor-pointer mt-[5px] flex w-[1000px] mx-auto sticky top-0 bg-white z-30">
        <a href="https://www.tmall.com/?spm=a21bo.tmall/a.201857.1.1778c3d5oXRrYY" target="_blank" class="ml-5 mt-3">
            <img src="https://img.alicdn.com/imgextra/i4/O1CN01Se8pZU1ruzNvEEwH9_!!6000000005692-2-tps-480-144.png" alt="天猫" class="header-img w-[230px]"/>
        </a>

        <form class="mt-3" @submit.prevent="handleSearch">
            <div class="flex h-[44px] relative">
                <input  
                    class="caret-[black] pl-[95px] pr-[30px] py-[5px] text-[12px] focus:outline-none border-[2px] border-[rgb(255,0,54)] rounded-[12px]  w-[496px]"
                    type="text"
                    @focus="showSearch=true"
                    @blur="handleBlur"  
                    v-model="searchText"  
                    @keyup.enter="handleSearch()"
                />

                <div 
                    v-if="showSearch" 
                    @mouseleave="showSearch = false"
                    ref="dropdownRef"
                    tabindex="-1"
                    class="z-10 absolute top-[33px] right-[0px] text-[12px] border-[2px] rounded-xl border-[rgb(255,0,54)] rounded-tr-none rounded-tl-none border-t-0 flex flex-col w-[496px] bg-white"
                >
                    
                    <div v-if="searchHistory.length > 0" class="border-b border-gray-100 pb-2">
                        <div class="flex justify-between items-center mx-2 mt-4 mb-2">
                            <div class="text-[rgb(122,122,122)]">历史搜索</div>
                            <div @click="delAll=true" v-show="!delAll" class="flex hover:text-[rgb(255,0,54)] text-[rgb(122,122,122)]">
                                <Delicon class="h-3 w-3 mt-0.5 mr-1"/>
                                <div  class=" cursor-pointer" >清除</div>
                            </div>
                            
                            <div v-show="delAll"  class="text-[rgb(122,122,122)] ">
                                <span @click="clearHistory()" class="border-r border-1 hover:text-[rgb(255,0,54)] border-[rgb(122,122,122)] pr-2">清除全部</span>
                                <span @click="delAll=false" class="pl-2 hover:text-[rgb(255,0,54)]">完成</span>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-2 mx-2">
                            <div 
                                v-for="(item, index) in searchHistory" 
                                :key="index" 
                                class="px-2 py-2 rounded-md hover:text-[rgb(255,0,54)] hover:border-[rgb(255,0,54)] border cursor-pointer flex items-center"
                                @click="selectHistory(item)"
                            >
                                {{ item }}
                                <!-- 阻止事件冒泡 -->
                                <span v-if="delAll" class="ml-1" @click.stop="deleteHistory(index)">&times;</span> 
                            </div>
                        </div>
                    </div>

                    <div class="flex cursor-pointer justify-between mx-2 mt-2 items-center mb-2 text-[rgb(122,122,122)]">
                        <div class="flex">猜你喜欢</div>
                        <div class="flex" @click="handleChange()"> 
                            <div class="mr-1 flex mb-0.5 text-[20px]">&#10227;</div>
                            <div class="flex items-center">换一换</div>
                        </div>
                    </div>
                    <div class="justify-between flex mx-2 mb-2">
                        <div class="flex-col flex w-[250px]">
                            <div v-for="item in leftColumnItems" :key="item" class="mb-2  pt-1.5 rounded-md pl-2 hover:bg-[rgba(180,180,180,0.2)] h-[30px]"  @click="selectHistory(item)">
                                {{ item }}
                            </div>
                        </div>
                        <div class="flex-col flex w-[250px]">
                            <div v-for="item in rightColumnItems" :key="item" class="mb-2 pt-1.5 rounded-md pl-2 hover:bg-[rgba(180,180,180,0.2)] h-[30px]"  @click="selectHistory(item)">
                                {{ item }}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="pr-4 border-r-[1px] absolute left-5 top-[10px] flex">
                    <span>天猫</span>
                    <Downicon class="h-3 w-3 mt-[6px] ml-[2px]" />
                </div>

                <div class="flex absolute top-[6px] left-[381px]">
                    <svg class="w-8 h-8 hover:text-[rgb(255,0,54)] fill-current flex" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1"  viewBox="0 0 28 28">
                        <g>
                            <g>
                            <path d="M17.209699999999998,5.16071Q16.545099999999998,4.75,15.7639,4.75L12.23607,4.75Q11.45485,4.75,10.79031,5.16071Q10.12577,5.57142,9.77639,6.27016L9.333549999999999,7.1558600000000006Q9.28647,7.25,9.18122,7.25Q7.34575,7.25,6.04787,8.54787Q4.75,9.845749999999999,4.75,11.68122L4.75,18.5Q4.75,20.4675,6.14124,21.8588Q7.53248,23.25,9.5,23.25L18.5,23.25Q20.4675,23.25,21.8588,21.8588Q23.25,20.4675,23.25,18.5L23.25,11.68122Q23.25,9.845749999999999,21.9521,8.54787Q20.6543,7.25,18.8188,7.25Q18.7135,7.25,18.6665,7.1558600000000006L18.223599999999998,6.27016Q17.874200000000002,5.571421,17.209699999999998,5.16071ZM11.118030000000001,6.94098Q11.46353,6.25,12.23607,6.25L15.7639,6.25Q16.5365,6.25,16.881999999999998,6.94098L17.3248,7.82668Q17.7865,8.75,18.8188,8.75Q20.032899999999998,8.75,20.8915,9.60853Q21.75,10.46707,21.75,11.68122L21.75,18.5Q21.75,19.8462,20.7981,20.7981Q19.8462,21.75,18.5,21.75L9.5,21.75Q8.15381,21.75,7.2019,20.7981Q6.25,19.8462,6.25,18.5L6.25,11.68122Q6.25,10.46707,7.10853,9.60853Q7.96707,8.75,9.18122,8.75Q10.21353,8.75,10.67519,7.82668L11.118030000000001,6.94098ZM18.25,14.5C18.25,16.8472,16.3472,18.75,14,18.75C11.65279,18.75,9.75,16.8472,9.75,14.5C9.75,12.15279,11.65279,10.25,14,10.25C16.3472,10.25,18.25,12.15279,18.25,14.5ZM16.75,14.5C16.75,12.98122,15.5188,11.75,14,11.75C12.48122,11.75,11.25,12.98122,11.25,14.5C11.25,16.0188,12.48122,17.25,14,17.25C15.5188,17.25,16.75,16.0188,16.75,14.5Z" fill-rule="evenodd" fill="currentColor" fill-opacity="1"></path>
                            </g>
                        </g>
                    </svg>
                </div>
                
                <div  @click="handleSearch" class="z-10 absolute left-[421px] cursor-pointer mt-[4px] h-[35px] flex w-[70px] bg-[rgb(255,0,54)] text-white pl-5 rounded-lg font-bold items-center" >
                    搜索
                </div>
            </div>
            <div  class="text-[10px] space-x-2 ml-4 text-[rgb(122,122,122)] mt-2">
                <a v-for="item in rowData?.data" :key="item" :href="`https://s.taobao.com/search?ie=utf8&q=${encodeURIComponent(item)}&spm=a21bo.tmall%2Fa.201856-fline.1.1778c3d5oXRrYY&tab=mall`" target="_blank" class="hover:text-[rgb(255,0,54)]">{{item}}</a>
            </div>
        </form>

    </div> 
    
</template>

<script setup lang="ts">
const showSearch = ref(false)
const currentPage = ref(0)// 当前页
const itemsPerPage = 8// 每页的数量
const itemsPerColumn = 4 // 每列显示数量

const { data: listData } = await useFetch('/api/searchData')
const { data: rowData } = await useFetch('/api/rowData')

// 切换到下一组数据
const handleChange = () => {
    showSearch.value = true
    if (Array.isArray(listData.value?.data) && listData.value.data.length > 0) {
        // 组数
        const totalPages = Math.ceil(listData.value?.data.length / itemsPerPage)
        currentPage.value = (currentPage.value + 1) % totalPages
    }
}

//当前显示的数据
const displayItems = computed(() => {
    const start = currentPage.value * itemsPerPage
    const end = start + itemsPerPage
    return listData.value?.data.slice(start, end) || []
})

//左右两列
const leftColumnItems = computed(() => {
    return displayItems.value.slice(0, itemsPerColumn)
})

const rightColumnItems = computed(() => {
    return displayItems.value.slice(itemsPerColumn)
})


const timeSet = ref<NodeJS.Timeout | null>(null)
const dropdownRef = ref<HTMLDivElement | null>(null)
// 处理输入框失焦
const handleBlur = () => {
    // 使用 setTimeout 延迟检查，确保点击事件已处理
    timeSet.value = setTimeout(() => {
        // 检查点击目标是否在下拉框内部
        const isClickInsideDropdown = dropdownRef.value?.contains(document.activeElement);
        
        // 如果点击不在下拉框内，则隐藏下拉框
        if (!isClickInsideDropdown) {
            showSearch.value = false
        }
    }, 150); // 延迟150ms，足够让点击事件完成
};

const clearTimeoutSet = () => {
    if (timeSet.value) {
        clearTimeout(timeSet.value)
        timeSet.value = null
    }
};
onUnmounted(() => {
    clearTimeoutSet()
});


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
        // 添加
        newHistory.unshift(history)
        // 最多8条
        if (newHistory.length > 8) {
            newHistory.pop()
        }
        searchHistory.value = newHistory
        localStorage.setItem('searchHistory', JSON.stringify(newHistory))
    }
}

// 搜索
const handleSearch = () => {
    if (searchText.value.trim()) {
        addToHistory(searchText.value.trim())
        window.open(`https://s.taobao.com/search?ie=utf8&q=${encodeURIComponent(searchText.value.trim())}&tab=mall`, '_blank')
        // 清空输入框
        searchText.value = ''
        showSearch.value = false
    }
}

// 点击某条历史/猜你喜欢
const selectHistory = (item: string) => {
    searchText.value = item
    handleSearch()
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

</script>

<style scoped>
.header-img:sticky{
    width:100px;
}
</style>    