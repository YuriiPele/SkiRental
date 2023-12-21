
<script setup>
import InfoBlock from "./info_block.vue";
import { ref } from "vue";
const categories = ["a", "b", "c", "d1", "d2"];
const days = [
  "1 day",
  "2 days",
  "3 days",
  "4 days",
  "5 days",
  "6 days",
  "7 days",
];
const redirectToNextPage = () => {
  // Perform redirection logic here
  // Example: use Vue Router to navigate to the next page
  // router.push('/next-page');
};
const getData = (category, day) => {
  const data = {
    a: {
      "1 day": 560,
      "2 days": 1080,
      "3 days": 1530,
      "4 days": 1910,
      "5 days": 2260,
      "6 days": 2550,
      "7 days": 2780,
    },
    b: {
      "1 day": 680,
      "2 days": 960,
      "3 days": 1210,
      "4 days": 1410,
      "5 days": 1600,
      "6 days": 1740,
      "7 days": 1800,
    },
    c: {
      "1 day": 430,
      "2 days": 600,
      "3 days": 760,
      "4 days": 890,
      "5 days": 1010,
      "6 days": 1090,
      "7 days": 1120,
    },
    d1: {
      "1 day": 480,
      "2 days": 680,
      "3 days": 850,
      "4 days": 1000,
      "5 days": 1130,
      "6 days": 1230,
      "7 days": 1300,
    },
    d2: {
      "1 day": 180,
      "2 days": 330,
      "3 days": 460,
      "4 days": 580,
      "5 days": 690,
      "6 days": 780,
      "7 days": 820,
    },
  };

  return data[category][day] ? `${data[category][day]} uah` : "";
};
</script>

<template>
  <div class="overlay-text">
    <InfoBlock />
    <p class="overlay-text-content">Our prices</p>
  </div>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th class="highlight-cell" rowspan="2">Category</th>
          <th v-for="day in days" :key="day" class="highlight-cell">
            {{ day }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="(category, index) in categories"
          :key="category"
          :class="{ 'highlight-row': index === 0 }"
        >
          <td class="highlight-cell">{{ category }}</td>
          <td
            v-for="day in days"
            :key="day"
            :class="{ 'price-cell': getData(category, day) }"
          >
            {{ getData(category, day) }}
          </td>
        </tr>
      </tbody>
    </table>
    <div class="button-container">
      <button @click="redirectToNextPage">Go to the list of skis e</button>
    </div>
  </div>
</template>

<style scoped>
.table-container {
  margin: 20px 5% 0 5%;
  position: relative;
}

.overlay-text {
  position: static;
  top: 50%;

  background-color: #2f70e172;

  padding: 20px;
  border-radius: 10px;
  text-align: center;
  margin: 20px 5% 0 5%;
}

.overlay-text-content {
  color: rgba(0, 0, 0, 0.5);
  font-size: 24px;
  font-weight: bold;
  text-shadow: 1px 1px 1px #000;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  margin-bottom: 20px;
}

th,
td {
  border: 1px solid rgb(255, 255, 255);
  padding: 20px;
  text-align: left;
  border-radius: 16px;
}

th {
  background-color: #f2f2f2;
}

.price-cell {
  background-color: #eaeaea;
}

.gray-row {
  background-color: #f9f9f9;
}

.highlight-cell {
  background-color: #2f70e172;
}

.button-container {
  text-align: center;
  margin-top: 20px;
}

button {
  padding: 20px;
  margin: 0 5% 20px 5%;
  background-color: #2f70e172;
  color: rgb(0, 0, 0);
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

button:hover {
  background-color: #2f70e1;
}
</style>






