<template>
  <aside class="">
    <label class="block pb-[10px] text-gray">Departments:</label>
    <el-select
      v-model="filterData"
      placeholder="Please departments"
      style="width: 240px"
      multiple
    >
      <el-option v-for="(item, index) in departments" :key="index" :label="item.name" :value="item.name" />
    </el-select>
    <div class="border-b-[2px] border-warmGray-200 w-full text-gray pt-[5px] pb-[10px]">
      Showing  out of {{ jobOpenings.length }} job openings
    </div>
    <ul v-for="(item, index) in filter" :key="index">
      <h2 class="text-orange-400">{{ Object.keys(item)[0] }} ({{ Object.values(item)[0].length }})</h2>
      <li v-for="(job, index) in Object.values(item)[0]" :key="index" class="m-[10px]">
        {{ Object.values(job)[0] }}
      </li>
    </ul>
  </aside>
</template>

<script lang="ts" setup>

const filterData = ref('')

const jobOpeningStore = useJobOpeningStore()
const { departments, jobOpenings } = storeToRefs(jobOpeningStore)
// console.log(departments)
// console.log(jobOpenings.value)

function jobList () {
  const array: any[] = []
  departments.value.forEach(department => {
    const matchingJobs = jobOpenings.value.filter((job) => {
      return job.departments.includes(department.value)
    })

    if (matchingJobs.length > 0) {
      array.push({ [department.name]: matchingJobs })
    }
  })
  return array
}

// const filterJobs = computed(() => {
//   return jobList().filter(item => {
//     if (filterData.value.length === 0) {
//       return true
//     }
//     return filterData.value.includes(Object.keys(item)[0])
//   })
// })

const filter = computed(() => {
  if (filterData.value.length === 0) {
    return jobList()
  }

  return jobList().filter(item => {
    return filterData.value.includes(Object.keys(item)[0])
  })
})

</script>
