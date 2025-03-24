<template>
    <p v-if="isShow">Hello World</p>
    <p v-if="x === 1">1</p>
    <p v-else-if="x === 2">2</p>
    <p v-else-if="x === 3">3</p>
    <p v-else>4</p>
    <p v-for="(user, index) in users1" :key="user.email">
      {{ index }} {{ user.name }} {{ user.email }}
    </p>
    <p>{{ y * z }}</p>
    <p>{{ myFunction(100) }}</p>
    {{ count }}<br>
    1:{{ name }}<br>
    2:{{ name2 }}<br>
    3:{{ name3 }}<br>
    4:<p v-once>{{ name4 }}</p><br>
    <button @click="myFunction2(2),changeName()">Button</button>
    <button @click="myFunction2(0),changeName()">Button2</button>
    <input type="text" v-model="name"/>
    <input type="text" v-model.trim="name2"/>
    <input type="text" v-model.lazy="name3"/>
    <input type="text" v-model.lazy="name4"/>
    <br />
    {{ text }} <br />
  <textarea v-model="text" />
  <br />
  {{ selectValue }} <br />
  <select v-model="selectValue">
    <option value="">select</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
  <br />
  {{ isCheck }} <br />
  <input type="checkbox" v-model="isCheck" />
  <input type="text" v-model="formData.name" />
  <br />

  <textarea v-model="formData.text" />
  <br />

  <select v-model="formData.selectValue">
    <option value="">select</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
  <br />

  <input type="checkbox" v-model="formData.isCheck" /> is check
  <br />

  <input type="checkbox" value="0" v-model="formData.checkbox" /> 0
  <input type="checkbox" value="1" v-model="formData.checkbox" /> 1
  <input type="checkbox" value="2" v-model="formData.checkbox" /> 2
  <input type="checkbox" value="3" v-model="formData.checkbox" /> 3
  <br />

  <input type="radio" value="0" v-model="formData.radio" /> 0
  <input type="radio" value="1" v-model="formData.radio" /> 1
  <input type="radio" value="2" v-model="formData.radio" /> 2
  <input type="radio" value="3" v-model="formData.radio" /> 3
  <br />
  <button @click="submit">送出</button>
  {{ formData }}

  {{ testMethod() }}
  {{ testMethod() }}
  {{ testComputed }}
  {{ testComputed }}
  <div v-for="data in checkDatas" :key="data.id">
    {{ data.id }} {{ data.name }}
  </div>

  {{ count }}
  <br />
  <button @click="addCount">Add Count</button>
  <input type="text" v-model="user2.name" />

  <Test_v1 name="Jacky" />
  <Test_v1 />
  <View_v1 @viewText="GetViewText"/>
  <br>
  {{ text3 }}

  {{ text4 }}
  <Input_v1 v-model="text4"/>
  <Card_v1>
    <template v-slot:header>
      <h1>My Header</h1>
    </template>
  </Card_v1>
  <button @click="Show('tab1')">Component1</button>
  <button @click="Show('tab2')">Component2</button>
  <button @click="Show('tab3')">Component3</button>

  <Component_v1 v-if="tab === 'tabl'"/>
  <Component_v2 v-if="tab === 'tab2'"/>
  <keep-alive>
    <Component_v3 v-if="tab === 'tab3'"/>
  </keep-alive>

  <button @click="show">Load Component</button>
  <Component_v4 v-if="isShow" />
  <br />
  <input type="text" ref="inputRef" />
  {{ count3 }}
  <button @click="incrementCount">Add Count</button>
</template>

<script>
// import { computed } from 'vue';
import Test_v1 from './components/Test-v1.vue';
import View_v1 from './components/View_v1.vue';
import Input_v1 from './components/Input_v1.vue'; 
import Card_v1 from './components/Card_v1.vue';
import Component_v1 from './components/Component_v1.vue';
import Component_v2 from './components/Component_v2.vue';
import Component_v3 from './components/Component_v3.vue';
import Component_v4 from './components/Component_v4.vue';
import Count from './Count';
import { ref, reactive } from 'vue';
export default {
  name: 'App',
  mixins:[Count],
  components: {
    Test_v1,
    View_v1,
    Input_v1,
    Card_v1,
    Component_v1,
    Component_v2,
    Component_v3,
    Component_v4,
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
    //UI控制
    this.$refs.inputRef.focus();
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  data() {
    return {
      count3: 100,
      isShow2: false,
      text4: '',
      text3: '',
      isShow: true,
      x:3,
      users1: [
        {name:'Jake',email:'Jake@gmail.com'},
        {name:'Allan',email:'Allan@gmail.com'},
        {name:'Eason',email:'Eason@gmail.com'},
      ],
      tab: '',
      y: 100,
      z: 2,
      count:0,
      name:'',
      name2:'',
      name3:'',
      text: '',
      selectValue: '',
      isCheck: false,
      formData: {
        name: '',
        text: '',
        selectValue: '',
        isCheck: false,
        checkbox: [],
        radio: '',
      },
      datas: [
        { id: 1, name: 'Jake' },
        { id: 2, name: 'Allan' },
        { id: 1, name: 'Eason' },
      ],
      user2: {
        name: '',
      },
    };
  },
  methods:{
    // incrementCount() {
    //   this.count3 += 1;
    // },
    show() {
      this.isShow2 = !this.isShow2;
    },
    Show(index){
      this.tab = index;
    },
    GetViewText(Text){
      this.text3 = Text;
    },
    myFunction:function(value){
      return this.x * this.y + value;
    },
    myFunction2:function(value){
      if(value != 0){
        this.count += value;
      }else{
        this.count += 1;
      }
      return this.count;
    },
    changeName() {
      this.name = 'Allan';
    },
    submit() {
    console.log(this.formData);
    },
    testMethod() {
      console.log('testMethod');
    },
    addCount() {
      this.count += 1;
    },
  },
  computed: {
    checkDatas() {
      return this.datas.filter((data) => data.id === 1);
    },
  },
  watch:{ 
    count(newValue, oldValue) {
    console.log(newValue, oldValue);
  },
  user2: {
      handler(newValue) {
        console.log(newValue);
      },
      deep: true, //要監聽物件時，要設定才會起作用
    },
  }
};
</script>

<style>
</style>
