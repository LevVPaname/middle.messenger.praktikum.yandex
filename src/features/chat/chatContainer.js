import './chat.sass';
import chatTpl from './chat.hbs';
import chatItemTpl from './chatItem.hbs';
import messageTpl from './message.hbs';
import button from 'components/button';
import arrowRightIcon from 'static/icons/right.svg';
import rightIcon from 'static/icons/right1.svg';
import avatarIcon from 'static/icons/image.svg';
import messageIsRead from 'static/icons/Group.svg';
import addIcon from 'static/icons/addIcon.svg';

const chatListItems = [
  {
    avatar: avatarIcon,
    userName: 'Андрей',
    message: 'looooong messagelooooong messagelooooong message looooong message',
    createTime: '10:49',
    count: 1,
  },
  {
    avatar: avatarIcon,
    userName: 'Киноклуб',
    message: 'message',
    createTime: '12:00',
    count: 3,
  },
  {
    avatar: avatarIcon,
    userName: 'Киноклуб',
    message: 'message',
    createTime: '12:00',
    count: 3,
  },
  {
    avatar: avatarIcon,
    userName: 'Киноклуб',
    message: 'message',
    createTime: '12:00',
    count: 3,
  },
];

const messages = [
  {
    message: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
    time: '11:02',
  },
  {
    mine: true,
    message: 'Круто',
    time: '11:04',
    icon: messageIsRead,
  },
];

const chatContainer = () => {
  return chatTpl({
    editAccountButton: button({ icon: arrowRightIcon, text: 'Профиль', className: 'button_neutral_invisible' }),
    chatItem: chatListItems.map((i) => chatItemTpl(i)).join(''),
    chat: messages.map((i) => messageTpl(i)).join(''),
    addFileIcon: button({ icon: addIcon ,className: 'button_iconOnly_flat' }),
    sendMessageIcon: button({ icon: rightIcon ,className: 'button_iconOnly' }),
  });
};

export default chatContainer;
