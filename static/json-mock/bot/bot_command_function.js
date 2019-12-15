export default {
  function: {
    help: () => 'ok je vais t\'aider',
    meteo: () => 'il fait froid',
    date: () => {
      const date = new Date();
      return date.toLocaleTimeString();
    },
  },
};
