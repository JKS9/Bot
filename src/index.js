import './styles/sass/index.scss';
import * as MyConstants from '../static/constants';
import Chat from './script/Chat';
import Bot from '../static/json-mock/bot/bot_command_fr.json';

const chat = new Chat(MyConstants.user, Bot);

chat.isBotCommandExist('meteo');
