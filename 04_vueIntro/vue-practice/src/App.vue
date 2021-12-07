<template>
  <div>
    <h1>Computed</h1>
    <h2>{{ address }}</h2>
    <h2>
      내가 받은 점수 합은 {{ grade.math + grade.kor + grade.eng + grade.sci }}
    </h2>
    <h2>*computed* score {{ totalScore }}</h2>
    <h2>*methods* getTotalScore {{ getTotalScore() }}</h2>
    영어점수 <input type="number" v-model="grade.eng" /> <br />학생이름
    <input type="text" v-model="studentName" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userName: "Azimut",
      address1: "서울",
      address2: "송파구",
      address3: "백제고분로",

      grade: {
        math: 70,
        kor: 99,
        eng: 34,
        sci: 66,
      },
      studentName: "",
    };
  },
  computed: {
    address() {
      return `${this.address1} ${this.address2} ${this.address3} `;
    },
    totalScore() {
      console.log("computed");
      const { math, kor, eng, sci } = this.grade; //this.grade ** this **  cache
      return math + kor + eng + sci;
    },
  },
  directives: {},
  methods: {
    getTotalScore() {
      console.log("methods");
      const { math, kor, eng, sci } = this.grade; //this.grade ** this **
      return math + kor + eng + sci;
    },
  },
};
</script>

<style></style>
