import f from '../../../static/json-mock/bot/bot_command_function';
import tplContact from './views';
import tplBot from '../Bot/views';


class Chat {
  constructor(user, bot) {
    this.user = user;
    this.bot = bot;
  }

  isBotCommandExist(message) {
    const objectCmd = this.bot.bot1;
    const msg = message.toLowerCase();
    const regexMeteo = /(meteo) [a-zA-Z]\w+/;
    let isExist = false;

    if (msg.match(regexMeteo)) {
      const secondParameter = msg.split(' ')[1];
      isExist = f.function.meteo(secondParameter);
    }

    for (let i = 0; i < objectCmd.actions.length; i += 1) {
      for (let j = 0; j < objectCmd.actions[i].command.keyword.length; j += 1) {
        if (msg === objectCmd.actions[i].command.keyword[j]) {
          if (objectCmd.actions[i].command.response.type === 'function') {
            if (objectCmd.actions[i].command.response.value === 'checkDate') {
              isExist = f.default.function.date();
            }
          }
          if (objectCmd.actions[i].command.response.type === 'text') {
            isExist = objectCmd.actions[i].command.response.value;
          }
        }
      }
    }

    this.renderBot(isExist);
    return isExist;
  }

  renderMe(message) {
    const elContacts = document.querySelector('#blockMessage');
    const item = {
      name: 'Me',
      avatar: 'https://bulma.io/images/placeholders/96x96.png',
      msg: message,
      date: f.function.date(),
    };

    elContacts.innerHTML += tplContact(item);
  }

  renderBot(message) {
    const elContacts = document.querySelector('#blockMessage');
    const item = {
      name: 'bot1',
      avatar: 'https://bulma.io/images/placeholders/96x96.png',
      msg: message,
      date: f.function.date(),
    };

    elContacts.innerHTML += tplBot(item);
  }
}

export default Chat;
