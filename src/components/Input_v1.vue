<template>
  <input type="text" 
  :value="modelValue"
  @input="$emit('update:modelValue',$event.target.value)"
  />
</template>

<script>
export default {
  name: 'Input_v1',
  props:{
    modelValue:String,
  }
};
</script>

