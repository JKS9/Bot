const axios = require('axios');

export default {
  function: {
    help: () => 'ok je vais t\'aider',
    meteo: () => {
      axios.get('https://www.prevision-meteo.ch/services/json/paris').then((response) => console.log(`température ${response.data.current_condition.tmp} degrée celcius`));
    },
    date: () => {
      const date = new Date();
      return date.toLocaleTimeString();
    },
  },
};
