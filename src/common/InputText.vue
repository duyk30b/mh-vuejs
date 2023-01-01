<template>
  <div class="input-text">
    <input :value="value" @input="input" @keydown="keydown" type="text" :placeholder="placeholder" :disabled="disabled"
      :maxlength="maxlength" />
    <label>{{ label }}</label>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    label: { type: String, default: () => '' },
    value: { type: String, default: () => '' },
    placeholder: { type: String, default: () => '' },
    disabled: { type: Boolean, default: () => false },
    maxlength: { type: String },
  },
  methods: {
    input(e: Event) {
      const target = e.target as HTMLInputElement
      this.$emit('update:value', target.value)
    },
    keydown(e: KeyboardEvent) {
      this.$emit('keydown', e)
    },
  },
}
</script>
