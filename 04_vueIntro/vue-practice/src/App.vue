<template>
  <div>
    <h1>Hello Vue JS!</h1>
    <!-- 
    <div>
      {{ fruites }}
    </div>
    
    <div>
     <ul>
        <li v-for="(fruit, index) in fruites" :key="index">
          {{ index + 1 }} - {{ fruit }}
        </li>

        <li v-for="(fruit, index) of fruites" :key="index">
          {{ index + 1 }} - {{ fruit }}
        </li>

        <h2 v-for="(value, key, index) in user" :key="key">
          {{ index + 1 }}. {{ key }} == >> {{ value }}
        </h2>

        <p v-for="n in 10" :key="n">{{ n }}</p>
      </ul> 
    </div> -->

    <div v-for="(animal, animalIndex) in animals" :key="animalIndex">
      <h2>Animal ===> {{ animal.name }}</h2>
      <h3>food</h3>
      <li v-for="(food, foodIndex) in animal.favorites" :key="foodIndex">
        {{ food }}
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // fruites: ["apple", "banana", "tomato", "melon", "banana", "tomato"],
      // user: {
      //   name: "Jayden",
      //   age: 200,
      //   job: "realtor",
      // },
      animals: [
        { name: "monkey", size: "medium", favorites: ["banana", "chiken"] },
        { name: "lion", size: "big", favorites: ["meat", "beef"] },
        {
          name: "rat",
          size: "small",
          favorites: ["cheese", "rice", "돼지고기"],
        },
      ],
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
