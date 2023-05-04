<template>
  <el-form ref="formRef" :rules="formRules" :model="localContact">
    <el-table :data="contacts" @row-click="onEditContact">
      <el-table-column prop="image" label="Image">
        <template #default="scope">
          <el-avatar shape="square" :src="scope.row.image" />
        </template>
      </el-table-column>
      <el-table-column prop="name" label="Fullname">
        <template #default="scope">
          <el-form-item v-if="editModeRef === scope.row.id" prop="name" @click.stop>
            <el-input v-model="localContact.name" />
          </el-form-item>
          <template v-else>{{ scope.row.name }}</template>
        </template>
      </el-table-column>
      <el-table-column prop="description" label="Description">
        <template #default="scope">
          <el-form-item v-if="editModeRef === scope.row.id" class="no-margin" prop="description" @click.stop>
            <el-input v-model="localContact.description" />
          </el-form-item>
          <template v-else>{{ scope.row.description }}</template>
        </template>
      </el-table-column>
      <el-table-column label="Actions">
        <template #default="scope">
          <div class="flex justify-center">
            <template v-if="editModeRef === scope.row.id">
              <el-button @click.stop="onCancelEdit">
                Cancel
              </el-button>
              <el-button :type="$elComponentType.primary" @click.stop="onUpdateContact(localContact)">
                Save
              </el-button>
            </template>
            <template v-else>
              <el-button :type="$elComponentType.danger" @click.stop="onDeleteContact(scope.row)">
                Delete
              </el-button>
              <el-button :type="$elComponentType.primary" @click.stop="onStartEdit(scope.row)">
                Edit
              </el-button>
            </template>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </el-form>
</template>

<script lang="ts" setup>
import type { Ref } from 'vue'

defineProps<{ contacts: IContact[] }>()

const inputElRef: Ref<HTMLInputElement | undefined> = ref()
const editModeRef = ref<number | null>(null)
const formRef = useElFormRef()

const localContact = useElFormModel<IContact>({
  id: 0,
  name: '',
  description: '',
  image: ''
})

// const nameAbbrv = computed(() => {
//   return props.contact.name.split(' ').reduce((acc, cur) => {
//     if (acc.length < 2) {
//       acc = acc.concat(cur[0])
//     }
//     return acc
//   }, '')
// })

const formRules = useElFormRules({
  name: [useRequiredRule()],
  description: [useRequiredRule()]
})

async function triggerEditMode (contact: IContact): Promise<void> {
  editModeRef.value = contact.id
  localContact.id = contact.id
  localContact.name = contact.name
  localContact.description = contact.description
  localContact.image = contact.image
  await nextTick()
  if (inputElRef.value) {
    inputElRef.value.focus()
  }
}

// async function triggerEditMode(contact) {
// editModeRef.value = contact.id;
// localContact.id = contact.id;
// localContact.name = contact.name;
// localContact.description = contact.description;
// localContact.image = contact.image;
// await nextTick();
// if (inputElRef.value) {
// inputElRef.value.focus();
// }
// }

function onCancelEdit () {
  editModeRef.value = null
}
function onStartEdit (contact: IContact) {
  editModeRef.value = contact.id
  triggerEditMode(contact)
}

const emit = defineEmits(['deleteContact', 'updateContact', 'editContact'])
async function onUpdateContact (contact: IContact): Promise<void> {
  const isValid = await formRef.value?.validate()
  if (isValid) {
    emit('updateContact', contact)
    editModeRef.value = null
  }
}

function onEditContact (contact: IContact) {
  emit('editContact', contact.id)
}

function onDeleteContact (contact: IContact) {
  emit('deleteContact', contact)
}

</script>

<style lang="scss">
.el-table {
  text-align: center !important;

  &__header-wrapper {
    margin-bottom: 30px;
  }

  &__row {
    border: 1px solid lightgrey;
    cursor: pointer;
  }

  .cell {
    display: flex;
    justify-content: center;
  }

  .el-form-item{
    margin-bottom: 0px;
  }
}

.el-avatar {
  display: block;
  width: 80px !important;
  height: 80px !important;
  padding: 10px!important;

  &--square {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;

    img {
      border-radius: 50% !important;
    }

    &__inner {
      background-color: #ccc !important;
    }
  }
}
</style>
