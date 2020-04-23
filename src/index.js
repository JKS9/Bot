import './styles/sass/index.scss';

import * as MyConstants from '../static/constants';

import Chat from './components/Chat';
import Bot from '../static/json-mock/bot/bot_command_fr.json';

const chat = new Chat(MyConstants.user, Bot);

const message = document.getElementById('Message');

document.getElementById('Action').addEventListener('click', () => {
  chat.renderMe(message.value);
  chat.isBotCommandExist(message.value);
});
