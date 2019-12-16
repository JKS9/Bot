export default (item) => {
  const {
    name, avatar, msg, date,
  } = item;

  return `<div class="Botmessage">
            <figure class="image is-48x48">
              <img class="is-rounded" src=${avatar}>
            </figure>
        <p class="namebot">${name}</p>
        <p id="textBots" class="textBot textBotsWhite">${msg}</p>
        <p class="Infomessage">${date}</p>
      </div>`;
};
