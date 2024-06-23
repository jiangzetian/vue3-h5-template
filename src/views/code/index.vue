<template>
  <div>
    {{ code }}
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const code = ref<string>('')

onMounted(() => {
  if (route.params?.code) {
    code.value = route.params.code as string
  }
})
</script>

<style scoped></style>
