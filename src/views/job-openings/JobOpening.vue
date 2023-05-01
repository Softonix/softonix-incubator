<template>
    <div class="max-w-[450px]">
        <el-select class="mb-5" v-model="selectValue" multiple filterable allow-create default-first-option
            :reserve-keyword="false" placeholder="Choose tags for your article">
            <el-option v-for="(item, index) in jobList()" :key="index" :label="item.department" :value="item.department" />
        </el-select>
        <p class="mb-2">Showing <span class="font-bold">{{ sum }}</span> out of  <span class="font-bold">{{ jobOpeningsOther().length }}</span> job openings</p>
        <div class="w-[100%] h-[1px] bg-[#c9c9c9] mb-5"></div>
        <ul class="custom-list" v-for="(item, index) in filterJobs" :key="index">
            <h2 class="font-bold mb-4 pl-4">{{ item.department }} ({{ item.filterArray.length }})</h2>
            <li class="text-light-blue pl-10 mb-2" v-for="(job, index) in item.filterArray" :key="index">
                {{ Object.values(job)[0] }}
            </li>
            <button class="pl-4 pb-2 text-light-blue font-semibold">See More</button>
        </ul>
    </div>
</template>
  
<script lang="ts" setup>
const jobOpeningsStore = useJobOpeningsStore()
const { departments, jobOpenings } = storeToRefs(jobOpeningsStore)

const selectValue = ref("")
const sum = ref(jobOpenings.value.length)

function jobOpeningsOther() {
    return jobOpenings.value.map(item => {
        if (item.departments.length === 0) {
            item.departments = ['other'];
        }
        return item
    })
}

function jobList() {
    const array: { department: string; filterArray: any[] }[] = []

    departments.value.forEach((department) => {
        const elevantJobList = jobOpeningsOther().filter((job) => {
            return job.departments.includes(department.value)
        })

        if (elevantJobList.length > 0) {
            const formattedDepartment = department.value
                .replace(/_/g, ' ')
                .replace(/\b\w/g, (c) => c.toUpperCase())

            const sortedElevantJobList = elevantJobList.sort((a, b) =>
                a.title.localeCompare(b.title)
            )

            const obj = { department: formattedDepartment, filterArray: sortedElevantJobList }
            array.push(obj)
        }
    })
    return array
}

const filterJobs = computed(() => {
    let couner = 0
    if (selectValue.value.length === 0) {
        sum.value = jobOpenings.value.length
        return jobList()
    }

    const result = jobList().filter(item => {
        return selectValue.value.includes(item.department)
    })

    if (selectValue.value.length > 0) {
        result.forEach(item => {
            couner = couner + item.filterArray.length
            sum.value = couner
        })
    }
    return result
})

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

    &:hover {
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