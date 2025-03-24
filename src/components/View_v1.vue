<template>
    <div>
      <input type="text" v-model="text3" />
      <button @click="$emit('viewText',text3)">Send</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'View_v1',
    emits: ['viewText'],
    data() {
      return {
        text3: '',
      };
    },
  };
  </script>