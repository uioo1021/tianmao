<template>
    <div class="flex justify-center">
        <div class="w-full justify-center flex flex-col">
            <Header />
            <slot class="mx-auto px-16"/>
            <Aside/>
            <Bottom/>
        </div>
        
    </div>
</template> 
