<template>
  <div class="input-text" v-click-outside="() => showOptions = false">
    <label>{{ label }}</label>
    <select :value="value" @change="handleChange" @focusin="showOptions = true" @keydown="handleKeydown">
      <option v-for="(option, index) in options" :key="index" :value="option.value">
        {{ option.text }}
      </option>
    </select>
    <div :class="{ 'wrap-select': true, 'active': showOptions }" @click="handleClickWrapSelect"></div>
    <div class="options" v-if="showOptions">
      <div v-for="(option, index) in options" :key="index"
        :class="{ 'item-search': true, 'active': index == indexFocus }" @click="handleClickItem(option.value)">
        <div class="item-json"> {{ option.text }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'

export default {
  props: {
    label: { type: String, default: () => '' },
    value: { type: String, default: () => '' },
    options: { type: Array as PropType<{ value: string, text: string }[]>, default: () => [] },
    disabled: { type: Boolean, default: () => false },
  },
  data() {
    return {
      indexFocus: -1,
      showOptions: false,
    }
  },
  watch: {
    value(newVal) {
      this.indexFocus = this.options.findIndex(item => item.value === newVal)
    },
  },
  methods: {
    handleChange(e: Event) {
      const target = e.target as HTMLSelectElement
      this.$emit('update:value', target.value)
    },
    handleKeydown(e: KeyboardEvent) {
      if (e.key === 'Tab' || e.key === 'Escape') {
        console.log('🚀 ~ file: InputSelect.vue:46 ~ handleKeydown ~ Tab')
        this.showOptions = false
        return
      }
      e.preventDefault()

      if (e.key === 'ArrowDown') {
        this.indexFocus += 1
        if (this.indexFocus >= this.options.length) this.indexFocus = 0
        this.$emit('update:value', this.options[this.indexFocus].value)
      }
      else if (e.key === 'ArrowUp') {
        this.indexFocus -= 1
        if (this.indexFocus < 0) this.indexFocus = this.options.length - 1
        this.$emit('update:value', this.options[this.indexFocus].value)
      }
      else if (e.key === 'Enter') {
        if (this.showOptions) {
          this.$emit('update:value', this.options[this.indexFocus].value)
        }
        this.showOptions = !this.showOptions
      }
    },
    handleClickWrapSelect(e: Event) {
      e.stopPropagation()
      this.showOptions = !this.showOptions
    },
    handleClickItem(value: string) {
      this.showOptions = false
      this.$emit('update:value', value)
    },
  },
}
</script>

<style lang="scss" scoped>
.input-text {

  select {
    width: 100%;
    outline: none;
    padding: 0.6rem 0.5rem;
  }

  .wrap-select {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    cursor: pointer;

    &:after {
      --border-width: 6px;
      position: absolute;
      content: "";
      top: calc(50% - var(--border-width) * 0.5);
      right: 12px;
      width: 0;
      height: 0;
      border: var(--border-width) solid transparent;
      border-color: gray transparent transparent transparent;
    }

    &.active::after {
      top: calc(50% - var(--border-width) * 1.5);
      border-color: transparent transparent gray transparent;
    }
  }
}
</style>
