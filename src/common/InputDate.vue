<template>
  <div class="input-text input-date">
    <label><span>{{ label }}</span></label>
    <input :value="refDay" @input="onInputDay" @change="changeDay" @focusin="focusin" type="number" placeholder="D"
      :disabled="disabled" class="input-day" min="1" max="31" />
    <div class="dash"> <span>/</span> </div>
    <input :value="refMonth" @input="onInputMonth" @change="changeMonth" @focusin="focusin" type="number"
      placeholder="M" :disabled="disabled" class="input-month" min="1" max="12" />
    <div class="dash">
      <span>/</span>
    </div>
    <input :value="refYear" @input="onInputYear" @change="changeYear" @focusin="focusin" type="number" placeholder="Y"
      :disabled="disabled" class="input-year" min="1900" max="2100" />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  props: {
    label: { type: String, default: () => '' },
    value: { type: [Number, String], default: () => 0 },
    disabled: { type: Boolean, default: () => false },
  },
  setup() {
    return {
      refDay: ref(''),
      refMonth: ref(''),
      refYear: ref(''),
    }
  },

  watch: {
    value(newValue) {
      if (Number.isNaN(newValue)) return
      const propTime = new Date(newValue)
      if (propTime.toString() === 'Invalid Date') {
        this.refDay = ''
        this.refMonth = ''
        this.refYear = ''
      } else {
        this.refDay = `0${propTime.getDate()}`.slice(-2)
        this.refMonth = `0${propTime.getMonth() + 1}`.slice(-2)
        this.refYear = `${propTime.getFullYear()}`
      }
    },
  },

  methods: {
    onInputDay(e: Event) {
      const target = e.target as HTMLInputElement
      this.refDay = target.value = target.value.slice(0, 2)
    },
    onInputMonth(e: Event) {
      const target = e.target as HTMLInputElement
      this.refMonth = target.value = target.value.slice(0, 2)
    },
    onInputYear(e: Event) {
      const target = e.target as HTMLInputElement
      this.refYear = target.value = target.value.slice(0, 4)
    },
    focusin(e: FocusEvent) {
      const target = e.target as HTMLInputElement
      target.select()
    },

    changeDay(e: Event) {
      const target = e.target as HTMLInputElement
      const d = Number(target.value)
      if (d > 31 || d < 1) this.refDay = ''
      else this.refDay = `0${target.value}`.slice(-2)
      this.emitParent()
    },

    changeMonth(e: Event) {
      const target = e.target as HTMLInputElement
      const m = Number(target.value)
      if (m > 12 || m < 1) this.refMonth = ''
      else this.refMonth = `0${target.value}`.slice(-2)
      this.emitParent()
    },

    changeYear(e: Event) {
      const target = e.target as HTMLInputElement
      if (target.value.length !== 4) this.refYear = ''
      this.emitParent()
    },

    emitParent() {
      if (!this.refDay || !this.refMonth || !this.refYear || this.refYear.length < 4) {
        return this.$emit('update:value', NaN)
      }
      const y = this.refYear
      const m = `0${this.refMonth}`.slice(-2)
      const d = `0${this.refDay}`.slice(-2)

      const time = new Date(`${y}-${m}-${d}`)
      if (time.toString() === 'Invalid Date') {
        return this.$emit('update:value', NaN)
      }
      this.$emit('update:value', time.toISOString())
    },
  },
}
</script>

<style lang="scss">
.input-date {
  display: flex;

  input {
    &.input-day {
      width: 2.6rem;
    }

    &.input-month {
      width: 2.6rem;
    }

    &.input-year {
      flex: 1;
      width: 50px;
    }
  }

  .dash {
    opacity: 0.3;
    position: relative;

    span {
      position: absolute;
      top: 10px;
      left: -6px;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }
}
</style>
