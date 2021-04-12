<template>
  <edit-account is-module :hide-password="true" disabled/>
</template>

<script>
import editAccount from '@/views/account/editAccount'
export default {
  components: {
    editAccount
  }
}
</script>