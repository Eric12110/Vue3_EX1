  <template>
    <p>{{ state.count }}</p>
    <button @click="incrementCount">button</button>
    {{ name }}
  <input type="text" v-model="name" />
  {{ email }}
  <input type="text" v-model="email" />
  <input type="text" ref="inputRef" />
  <Component_v5 :name="name" @getName="getName" />
  {{ count }}
  <button @click="increment">button4</button>
  </template>
  
  <script>              
  import { reactive, toRefs } from 'vue';
  import { ref, watch  } from 'vue';
  import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue';
import Component_v5 from './components/Component_v5.vue';
import Counter from './Counter';
export default {
  name: 'App',
  components: {
    Component_v5,
  },
  setup() {
    const {count,increment} = Counter(1000,100);
    function getName(value) {
      alert(value)
    }
    onBeforeMount(() => {
      console.log('onBeforeMount');
    });
    onMounted(() => {
      console.log('onMounted');
      inputRef.value.focus();
    });
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    });
    onUpdated(() => {
      console.log('onUpdated');
    });
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    });
    onUnmounted(() => {
      console.log('onUnmounted');
    });
    const name = ref('Jake');
    const email = ref('');
    const inputRef = ref(null);
    watch(
      [name, email],
      (newValue, oldValue) => {
        console.log('name', newValue[0], oldValue[0]);
        console.log('email', newValue[1], oldValue[1]);
      },
      {
        immediate: true, //如果變數一開始有值，就會被 watch
      }
    );
    
    const state = reactive({
      count: 0,
      phone: '',
    });
    
    function incrementCount() {
      state.count++;
    }

    const user = reactive({
      email: '',
    });

    return {
      state,
      incrementCount,
      name,
      ...toRefs(user),
      email,
      inputRef,
      getName,
      count,
      increment,
    };
  },
  };
  </script>