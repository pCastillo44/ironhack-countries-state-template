<template >
  <img :src="countryStore.country.flag" alt="country flag" />
  <h1>{{ countryStore.country.name }}</h1>
  <table class="table">
    <thead></thead>
    <tbody>
      <tr>
        <td style="width: 30%">Capital</td>
        <td>{{ countryStore.country.capital }}</td>
      </tr>
      <tr>
        <td>Area</td>
        <td>{{ countryStore.country.area }} km <sup>2</sup></td>
      </tr>
      <tr v-if="countryStore.country.borders !== undefined">
        <td>Borders</td>
        <td>
          <ul>
            <li v-for="border in countryStore.country.borders">
              <a href="/">{{ border }}</a>
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { useCountryStore } from "../stores/country.js";
const countryStore = useCountryStore();


</script>

<style></style>
