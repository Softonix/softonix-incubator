<template>
  <el-header class="flex items-center gap-4">
    <h3 class="flex- font-medium m-0">Contact list</h3>

    <el-button :type="$elComponentType.primary" @click="createNewContact">
      <template #icon>
        <IconPlus class="w-5 h-5" />
      </template>
      Add Contact
    </el-button>
    <el-button
      class="!ml-0"
      :type="$elComponentType.danger"
      @click="$router.replace({ name: $routeNames.login })"
    >
      Logout
    </el-button>
  </el-header>
  <el-main>
    <el-tabs
      v-model="activeName"
      type="card"
      class=""
      @tab-click="handleClick"
    >
      <el-tab-pane label="Card" name="first">
        <div class="grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] grid gap-5 my-5">
          <ContactItem
            v-for="contact in contacts"
            :key="contact.id"
            class="cursor-pointer"
            :contact="contact"
            @click="editContact(contact.id)"
            @delete="deleteContact"
            @save="updateContact"
          />
        </div>
      </el-tab-pane>
      <el-tab-pane label="Config" name="Table">
        <el-table :data="contacts" style="width: 100% ">
          <el-table-column fixed prop="image" label="image" width="150">
            <template #default="{ row }">
              <el-image style="width: 100px; height: 100px" :src="row.image" fit="cover" />
            </template>
          </el-table-column>
          <el-table-column prop="name" label="Name" width="120" />
          <el-table-column prop="description" label="Description" width="400" />
          <el-table-column fixed="right" label="Actions" width="120">
            <template #default="scope">
              <el-button link type="primary" size="small" @click="handleClick">
                Edit
              </el-button>
              <el-button
                link
                type="danger"
                size="small"
                @click="deleteContact(scope.row)"
              >
                Delete
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </el-main>
</template>
<script lang="ts" setup>
import ContactItem from './components/ContactItem.vue'
import type { TabsPaneContext } from 'element-plus'
const router = useRouter()

const { $routeNames } = useGlobalProperties()

const activeName = ref('first')

const contactsStore = useContactsStore()
const { contacts } = storeToRefs(contactsStore)
console.log(contacts.value)
const { updateContact, deleteContact } = contactsStore

function createNewContact () {
  router.push({ name: $routeNames.upsertContact, params: { contactId: 'new' } })
}

function editContact (contactId: number) {
  router.push({ name: $routeNames.upsertContact, params: { contactId } })
}
</script>

<style>
.cell{
  text-align: start;
}
.el-tabs__nav{
  display: flex;
  padding-top: 10px;
}
.el-tabs__item{
  margin: 0 10px 0 0;
  cursor: pointer;
}
.el-table--fit{
  padding-top: 20px;
}

.el-image{
  display: flex;
  align-items: center;
  justify-content: center;
}

.el-image__inner {
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
}
</style>
