export default (item) => {
  const {
    name, avatar, msg, date,
  } = item;

  return `<div class="Memessage">
      <figure class="image is-48x48">
        <img class="is-rounded" src=${avatar}>
      </figure>
      <p class="nameMe">${name}</p>
      <p id="textMe" class="textMe textMEWhite">${msg}</p>
      <p class="Infomessage">${date}</p>
    </div>`;
};
