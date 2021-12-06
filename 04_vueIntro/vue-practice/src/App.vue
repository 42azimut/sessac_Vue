<template>
  <div>
    <!-- <h2 v-if="showName">My name is {{ user.name }}</h2>
    <h2 v-else>이름을 보여줄수 없음 v-else 위에 붙여서! 사용!</h2>
    <h2 v-if="user.age > 20">당신은 성인입니다.</h2>
    <h2 v-else-if="user.age > 14 && user.age < 20">청소년 이군요!</h2>
    <h2 v-else>당신은 어른 입니다.</h2> -->
    <h2 v-if="!showName">{{ user.name }} IF</h2>
    <h2 v-show="!showName">{{ user.name }} Show</h2>
    <!-- 위의 실제 태그 <h2 style="display: none;">Azimut Show</h2> 
    v-if 데이터를 아에 태그 생성 안함(새로운 데이터 필요하면 사용) 
    if-show는 랜더링 하여 태그는 나오고 안보이게 함-->

    <!-- 의미가 없는템플릿 태그 이용하기 -->
    <ul>
      <template v-if="question === 'frontend'">
        <li>Html 재밋나요?</li>
        <li>CSS 재밌나요?</li>
        <li>자바스크립트 재밌나요?</li>
      </template>

      <template v-else>
        <li>JAVA 재밌나요?</li>
        <li>python 재밌나요?</li>
        <li>C++ 재밌나요?</li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      question: "back",
      showName: true,
      user: {
        name: "Azimut",
        age: 20,
        job: "developer",
      },
    };
  },
};
</script>

<style>
#title {
  color: red;
  background: yellow;
}

#content {
  color: blue;
  background: pink;
}
</style>
