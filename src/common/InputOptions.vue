<template>
  <div class="input-text" v-click-outside="() => showOptions = false">
    <input :value="searchText" @input="handleInput" @keydown="handleKeydown" type="text" @focusin="showOptions = true"
      :placeholder="placeholder" :disabled="disabled" />
    <label>{{ label }}</label>
    <div class="options" v-if="showOptions">
      <div v-for="(item, index) in options" :key="index" :class="{ 'active': index == indexFocus, 'item-search': true }"
        @click="handleSelectItem(index)">
        <slot name="each" :item="item" :index="index">
          <div class="item-json">{{ index }} - {{ JSON.stringify(item) }} </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    label: { type: String, default: () => '' },
    searchText: { type: String, default: () => '' },
    options: { type: Array, default: () => [] },
    disabled: { type: Boolean, default: () => false },
    placeholder: String,
  },
  data() {
    return {
      indexFocus: -1,
      showOptions: false,
    }
  },

  methods: {
    handleInput(e: Event) {
      const target = e.target as HTMLInputElement
      this.indexFocus = -1
      this.showOptions = true
      this.$emit('update:searchText', target.value)
    },

    handleKeydown(e: KeyboardEvent) {
      if (e.key === 'Tab' || e.key === 'Escape') {
        this.showOptions = false
      }
      else if (e.key === 'ArrowDown') {
        this.indexFocus += 1
        if (this.indexFocus >= this.options.length) this.indexFocus = 0
      }
      else if (e.key === 'ArrowUp') {
        this.indexFocus -= 1
        if (this.indexFocus < 0) this.indexFocus = this.options.length - 1
      }
      else if (e.key === 'Enter') {
        this.showOptions = !this.showOptions
        if (this.indexFocus !== -1) {
          this.handleSelectItem(this.indexFocus)
        }
      }
    },
    handleSelectItem(index: number) {
      this.indexFocus = -1
      this.showOptions = false
      this.$emit('selectItem', this.options[index])
    },
  },
}
</script>
