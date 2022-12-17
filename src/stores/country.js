import { defineStore } from "pinia";

export const useCountryStore = defineStore("country", {

  state: () => ({
      country: {}
  }),

  actions: {
    setCountry(el) {
      this.country = {
        flag: `https://flagpedia.net/data/flags/icon/72x54/${el.alpha2Code.toLowerCase()}.png`,
        name: el.name.common,
        capital: el.capital[0],
        area: el.area,
        borders: el.borders
        
      }

      
    },
  },

});
