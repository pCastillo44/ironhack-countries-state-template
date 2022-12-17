<template>
  <div class="list-group">
    <div
      class="list-group-item list-group-item-action"
      v-for="el in countries"
      @click="countryStore.setCountry(el)"
    >
      <img 
        :src="`https://flagpedia.net/data/flags/icon/72x54/
${el.alpha2Code.toLowerCase()}.png`"
      />
      <p>{{ el.name.common }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCountryStore } from "../stores/country.js";
const countryStore = useCountryStore();

const countries = ref(null);

async function getCountries() {
  const res = await fetch("https://ih-countries-api.herokuapp.com/countries");
  const finalRes = await res.json();
  countries.value = finalRes;
  countryStore.setCountry(countries.value[0]);
}

getCountries();
</script>

<style></style>
