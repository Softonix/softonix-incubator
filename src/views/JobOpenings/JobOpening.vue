<template>
  <aside class="side-bar">
    <div class="header">
      <h1 class="header__title">Job openings <div class="header__circle">i</div></h1>
      <Button class="header__btn" @click="redirect">
        -->
      </Button>
    </div>
    <h2 class="side-bar__title">Departments:</h2>
    <el-select
      v-model="filterData"
      placeholder="Please departments"
      style="width: 100%"
      multiple
    >
      <el-option v-for="(item, index) in departments" :key="index" :label="item.name" :value="item.name" />
    </el-select>
    <div class="side-bar__subtitle">
      Showing  out of {{ jobOpenings.length }} job openings
    </div>
    <ul v-for="(item, index) in filter" :key="index" class="unorderedList">
      <h2 class="unorderedList__titles">{{ item.department }} ({{ item.filterArray.length }})</h2>
      <li v-for="(job, index) in item.filterArray" :key="index" class="unorderedList__item">
        {{ Object.values(job)[0] }}
      </li>
      <button class="unorderedList__btn " @click="sd">Show more</button>
    </ul>
  </aside>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
const router = useRouter()

const { $routeNames } = useGlobalProperties()
const filterData = ref('')
const sum = ref(0)
console.log(sum.value)

const jobOpeningStore = useJobOpeningStore()
const { departments, jobOpenings } = storeToRefs(jobOpeningStore)
// console.log(departments.value)

// function jobListData () {
//   const array: { department: string; filterArray: any[] }[] = []

//   departments.value.forEach((department) => {
//     const matchingJobs = jobOpenings.value.filter((job) => {
//       return job.departments.includes(department.value)
//     })

//     if (matchingJobs.length > 0) {
//       const formattedDepartment = department.value
//         .replace(/_/g, ' ')
//         .replace(/\b\w/g, (c) => c.toUpperCase())

//       const obj = { department: formattedDepartment, filterArray: matchingJobs }
//       array.push(obj)
//     }
//   })
//   // console.log(array)
//   return array
// }

function jobListData () {
  const array: { department: string; filterArray: any[] }[] = []

  departments.value.forEach((department) => {
    const matchingJobs = jobOpenings.value.filter((job) => {
      return job.departments.includes(department.value)
    })

    if (matchingJobs.length > 0) {
      const formattedDepartment = department.value
        .replace(/_/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase())

      const sortedMatchingJobs = matchingJobs.sort((a, b) =>
        a.title.localeCompare(b.title)
      )

      const obj = {
        department: formattedDepartment,
        filterArray: sortedMatchingJobs
      }
      array.push(obj)
    }
  })
  // console.log(array)
  return array
}

const redirect = () => {
  router.replace({ name: $routeNames.contacts })
}

const filter = computed(() => {
  if (filterData.value.length === 0) {
    return jobListData()
  }

  const result = jobListData().filter(item => {
    return filterData.value.includes(item.department)
  })
  console.log(result)

  result.forEach(item => {
    sum.value += item.filterArray.length
    console.log(sum.value)
  })

  return result
})

const myResult = filter
console.log(myResult)

</script>

<style lang="scss">
.side-bar{
  box-sizing: border-box;
  height: 900px;
  overflow-y: scroll;

  width:450px;
  border: 1px solid gray;
  border-radius: 6px;
  padding: 5px 20px 40px 20px;
  &__title{
    color: gray;
    margin-top: 20px;

  }
  &__subtitle{
    border-bottom: 1px solid rgb(205, 202, 202);
    padding: 10px 0;
    color: gray;
  }
}

.unorderedList {
  position: relative;
  margin-top: 10px;
  &__titles{
    position: relative;
    padding: 10px 0 0 20px  ;
    font-weight: bold;
    &::before {
      content: "";
      position: absolute;
      top: 19px;
      left: -2px;
      width: 10px;
      height: 2px;
      background-color: gray;
      transform: rotate(45deg);
  }

  &::after {
      content: "";
      position: absolute;
      top: 19px;
      left: -8px;
      width: 10px;
      height: 2px;
      background-color: gray;
      transform: rotate(-45deg);
  }
  }

  &::before{
      content: "";
      position: absolute;
      top: 28px;
      left: 0px;
      height: calc(100% - 20px);
      width: 1px;
      background-color: rgb(153, 152, 152);
  }
  &__item{
    cursor: pointer;
    color: #5fa5fa;
    padding: 4px 0 0 43px;
    font-weight: 500;
    &:hover{
      text-decoration: underline;
    }
  }
}

.unorderedList__item {
  position: relative;

  &::before {
      content: "";
      position: absolute;
      top: 11px;
      left: 18px;
      width: 10px;
      height: 10px;
      background-color: green;
      border-radius: 50%;
  }

  &::after {
      content: "";
      position: absolute;
      top: 15px;
      left: 0px;
      width: 15px;
      height: 1px;
      background-color: rgb(134, 130, 130);
  }
}

.unorderedList__btn{
  position: relative;
  padding: 0 0 0 20px;
  font-weight: 600;
  color: #5fa5fa;

  &::after {
      content: "";
      position: absolute;
      top: 12px;
      left: 0px;
      width: 15px;
      height: 1px;
      background-color: rgb(134, 130, 130);
  }
}

.header{
  display: flex;
  justify-content: space-between;
  &__title{
      display: flex;
      align-items: center;
      text-transform: uppercase;
      font-weight: 500;
  }
  &__circle{
    color:aliceblue;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 2px;
    font-size: 10px;
    width: 18px;
    height: 18px;
    border-radius: 100%;
    background-color: #5fa5fa;
    margin-left: 20px;
  }
  &__btn{
    width: 40px;
    height: 40px;
    background-color: #5fa5fa;
    color: white;
    font-weight: 500;
    border-radius: 6px;
  }
}

</style>
