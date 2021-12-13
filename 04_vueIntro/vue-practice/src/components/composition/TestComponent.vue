<template>
  <h2>{{ username }}</h2>
  <hr />
  <div>
    price <input type="text" v-model="price" /> amout
    <input type="text" v-model="amount" />
    <h3>Total Price : {{ totalPrice }}</h3>
  </div>
  <hr />
  <div>
    first <input type="text" v-model="home.city" /> last
    <input type="text" v-model="last" />
    <h3>Full name :: {{ fullName }}</h3>
  </div>
</template>

<script>
import { ref, computed, reactive, toRefs, watch } from "vue";
export default {
  name: "TestComponent",
  setup() {
    const username = ref("azimut-ref");
    const price = ref(4000);
    const amount = ref(1);

    const totalPrice = computed(() => {
      return price.value * amount.value;
    });
    watch(price, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    });

    const state = reactive({
      first: "Code",
      last: "Avengers",
      home: {
        city: "Seoul",
        type: "apt",
      },
    });

    const fullName = computed(function () {
      return `${state.first} ${state.last}`;
    });
    watch(
      () => {
        return state.first;
      },
      (newValue, oldValue) => {
        console.log(newValue, oldValue);
      }
    );
    watch(
      () => {
        return { ...state.home };
      },
      (newValue, oldValue) => {
        console.log(newValue, oldValue);
      },
      { deep: true }
    );

    return {
      username,
      price,
      amount,
      totalPrice,
      fullName,
      ...toRefs(state),
    };
  },

  // 기존 컴퓨티드 속성 이용한 방법 위(셋업 api)
  // data() {
  //   return {
  //     price: 4000,
  //     amount: 1,
  //   };
  // },
  // computed: {
  //   totalPrice() {
  //     return this.price * this.amount;
  //   },
  // },
};
</script>

<style></style>
