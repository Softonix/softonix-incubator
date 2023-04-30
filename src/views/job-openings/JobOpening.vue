<template>
    <div class="max-w-[450px]">
        <el-select class="mb-5" v-model="selectValue" multiple filterable allow-create default-first-option
            :reserve-keyword="false" placeholder="Choose tags for your article">
            <el-option v-for="(item, index) in departments" :key="index" :label="item.name" :value="item.name" />
        </el-select>
        <div class="w-[100%] h-[1px] bg-[#c9c9c9] mb-5"></div>
        <ul class="custom-list" v-for="(item, index) in filterJobs" :key="index">
            <h2 class="font-bold mb-4 pl-4">{{ Object.keys(item)[0] }} ({{ (Object.values(item)[0]).length }})</h2>
            <li class="text-light-blue pl-10 mb-2" v-for="(job, index) in Object.values(item)[0]" :key="index">
                {{ Object.values(job)[0] }}
            </li>
            <button class="pl-4 pb-2 text-light-blue font-semibold">See More</button>
        </ul>
    </div>
</template>
  
<script lang="ts" setup>
const selectValue = ref("")
const showMore = ref(5)

const jobOpeningsStore = useJobOpeningsStore()
const { departments, jobOpenings } = storeToRefs(jobOpeningsStore)

function jobList() {
    const array: any[] = []
    departments.value.forEach(department => {
        const matchingJobs = jobOpenings.value.filter((job) => {
            return job.departments.includes(department.value);
        });

        if (matchingJobs.length > 0) {
            array.push({ [department.name]: matchingJobs });
        }
    })
    return array
}

const filterJobs = computed(() => {
    return jobList().filter(item => {
        if (selectValue.value.length === 0) {
            return true
        }
        return selectValue.value.includes(Object.keys(item)[0])
    })
})

// const firstFiveJobs = computed(() => {
//     return Object.values(filterJobs.value).map(item => {
//         console.log((Object.values(item))[0])
//         // return item
//     })
// })
</script>

<style lang="scss">
.custom-list {
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 30px;
        left: 0px;
        height: calc(100% - 40px);
        width: 1px;
        background-color: lightgray;
    }

    button {
        position: relative;
        &::after {
            content: "";
            position: absolute;
            top: 12px;
            left: 0px;
            width: 10px;
            height: 1px;
            background-color: lightgray;
        }
    }
}

.custom-list h2 {
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 8px;
        left: -2px;
        width: 10px;
        height: 2px;
        background-color: gray;
        transform: rotate(45deg);
    }

    &::after {
        content: "";
        position: absolute;
        top: 8px;
        left: -8px;
        width: 10px;
        height: 2px;
        background-color: gray;
        transform: rotate(-45deg);
    }
}

.custom-list li {
    position: relative;
    cursor: pointer;

    &:hover{
        text-decoration: underline;
    }

    &::before {
        content: "";
        position: absolute;
        top: 7px;
        left: 20px;
        width: 10px;
        height: 10px;
        background-color: green;
        border-radius: 50%;
    }

    &::after {
        content: "";
        position: absolute;
        top: 12px;
        left: 0px;
        width: 15px;
        height: 1px;
        background-color: lightgray;
    }
}
</style>