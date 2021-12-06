<template>
  <div>
    {{ user }}
    <h1>{{ user.name }}</h1>
    <hr />
    <form>
      <div>
        <label for="name">이름</label>
        <input type="text" id="name" v-model="user.name" @input="setValue" />
      </div>

      <div>
        <label for="age">나이</label>
        <input type="number" id="age" v-model="user.age" />
      </div>
      <div>
        <label for="city">사는 곳</label>
        <select name="" id="city" v-model="user.city">
          <option value="seoul">서울</option>
          <option value="Daejeon">대전</option>
          <option value="Daegu">대구</option>
          <option value="busan">부산</option>
          <option value="gwangjoo">광주</option>
        </select>
      </div>
      <div>
        <label for="favorite-food"> 좋아하는 음식</label>
        <select id="favorite-food" multiple v-model="user.favorite">
          <option
            v-for="option in foodOptions"
            :value="option.code"
            :key="option.code"
          >
            {{ option.label }}
          </option>
        </select>
      </div>
      <div>
        <label for="job">직업</label>
        프로그래머<input
          type="checkbox"
          value="programmer"
          v-model="user.job"
        />
        가수<input type="checkbox" value="singer" v-model="user.job" />
        선생<input type="checkbox" value="teacher" v-model="user.job" />
      </div>
      <div>
        <label for="sex">성별</label>
        남자<input type="radio" value="male" v-model="user.sex" />

        여자<input type="radio" value="female" v-model="user.sex" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      foodOptions: [
        {
          label: "짜장면",
          code: "JJ",
        },
        {
          label: "탕수육",
          code: "TG",
        },
        {
          label: "짬뽕",
          code: "BB",
        },
      ],
      user: {
        name: "Azimut",
        age: 0,
        city: "Seoul",
        favorite: [],
        job: [],
        sex: [],
      },
    };
  },
  methods: {
    setValue(e) {
      console.log(e.target.value);
      this.user.name = e.target.value;
    },
  },
};
</script>

<style>
label {
  font-size: 26px;
  font-weight: bold;
  margin-right: 1rem;
}
div {
  margin-bottom: 1rem;
}
</style>
