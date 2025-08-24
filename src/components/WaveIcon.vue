<template>
  <svg 
    :class="className" 
    viewBox="0 0 100 20" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M5 10 Q 25 5, 45 10 T 85 10" 
      stroke="currentColor" 
      stroke-width="2" 
      fill="none"
      stroke-linecap="round"
    />
    <path 
      d="M75 8 L 85 10 L 75 12" 
      stroke="currentColor" 
      stroke-width="2" 
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup lang="ts">
interface Props {
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  class: 'w-20 h-4'
})

const className = props.class
</script>
