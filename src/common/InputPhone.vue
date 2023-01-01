<template>
  <div class="input-text">
    <input :value="phoneNumber" @input="input" type="text" :disabled="disabled" maxlength="13" />
    <label>{{ label }}</label>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    label: { type: String, default: () => '' },
    value: { type: String, default: () => '' },
    disabled: { type: Boolean, default: () => false },
  },
  data() {
    return { phoneNumber: '' }
  },

  watch: {
    value(newValue) {
      this.phoneNumber = this.formatPhoneNumber(newValue)
    },
  },

  methods: {
    input(e: Event) {
      const target = e.target as HTMLInputElement
      const value = target.value.replace(/[^\d]/g, '').slice(0, 10)

      this.phoneNumber = target.value = this.formatPhoneNumber(value)
      this.$emit('update:value', value)
    },

    formatPhoneNumber(value: string) {
      let phone = value
      if (value.length > 7) {
        phone = `${value.slice(0, 4)}.${value.slice(4, 7)}.${value.slice(7)}`
      } else if (value.length > 4) {
        phone = `${value.slice(0, 4)}.${value.slice(4)}`
      }
      return phone
    },
  },
}
</script>
