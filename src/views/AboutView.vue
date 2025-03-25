<template>
  <div class="about">
    <h1>This is an about page123</h1>
    <h1>{{ y }}</h1>
  </div>
</template>

<script>
import { ref, onMounted, getCurrentInstance } from "vue";

export default {
  setup() {
    let y = ref('');

    onMounted(() => {
      const instance = getCurrentInstance();
      y.value = instance.proxy.$route.query.y;
    });

    return {
      y
    };
  }
}
</script>