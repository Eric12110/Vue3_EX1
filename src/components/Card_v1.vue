<template>
  <div>
    <!-- 使用 slot 可以讓外部 HTML 傳入 -->
    <slot name="header">header</slot>
    <slot name="content">content</slot>
  </div>
</template>

<script>
export default {
  name: 'Card_v1'
};
</script>