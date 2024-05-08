const telegramApi = require('node-telegram-bot-api');
const {BOT_TOKEN} = require('./config');
const {botOptions} = require('./options');

const bot = new telegramApi(BOT_TOKEN, {polling: true});

const chats = {};

bot.setMyCommands([
    {command: '/start', description: "Начальное приветсвие"},
    {command: '/info', description: "Как использовать бот"},
]);

const start = () => {
    bot.on('message', async msg => {
        const first_name = msg.from.first_name;
        const last_name = msg.from.last_name;
        const text = msg.text;
        const chatId = msg.chat.id;

        if(text === '/start'){
            await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/a8a/4ac/a8a4ac2b-1fe7-448e-b1f5-6c67d226a406/1.webp');
            return bot.sendMessage(chatId, `Добро пожаловать, ${first_name} ${last_name}!\nЭтот бот поможет тебе в поиске telegram - аккаунтов ЦА по ключевым словам в чатах групп!`, botOptions);
        }

        if(text === '/info'){
            return bot.sendMessage(chatId, `Тест!Тест!Тест!\nИнформация...`);
        }

        return bot.sendMessage(chatId, 'Я тебя не понимаю, попробуй еще раз пожалуйста...');
    });

    bot.on('callback_query', async msg => {
        const data = msg.data;
        const chatId = msg.message.chat.id;

        if(data === 'info'){
            return bot.sendMessage(chatId, 'Информация по использованию и тд и тп...');
        }

        if(data === 'test'){
            console.log(msg)
            return bot.sendMessage(chatId, 'Test!');
        }

        if(data === 'group_data'){
            //TODO
        }



    });
};


start();
