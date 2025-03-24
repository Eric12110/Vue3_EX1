<template>
    <h1>Hello Component2</h1>
  <p>{{ email }}</p>
  </template>
  
  <script>
  export default {
    name: 'Test-v1',
    props: {
    //定義型別
    email: {
      type: String,
      default: 'demo@demo',
    },
  },
  };
  </script>