<template lang="">
	<div>
		This is patient info vue {{patientData.id}}
	</div>
</template>
<script lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    const patientData = ref({ id: route.params.id })
    watch(
      () => route.params.id,
      async newId => {
        // patientData.value = await AxiosService.get('')
        patientData.value = { id: newId }
      }
    )
    return { patientData }
  },
}
</script>
<style lang="">
	
</style>
