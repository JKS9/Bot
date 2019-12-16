const axios = require('axios');

export default {
  function: {
    help: () => 'ok je vais t\'aider',
    meteo: (param) => {
      axios.get(`https://www.prevision-meteo.ch/services/json/${param}`).then((response) => console.log(`température ${response.data.current_condition.tmp}° à ${param}`));
    },
    date: () => {
      const date = new Date();
      return date.toLocaleTimeString();
    },
  },
};
