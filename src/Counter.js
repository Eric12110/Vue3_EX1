import {ref} from 'vue'

export default function Counter(StartIndex,step){
  const count = ref(StartIndex);

  function increment(){
    count.value += step;
  }
  
  return{
    count,
    increment,
  }
}