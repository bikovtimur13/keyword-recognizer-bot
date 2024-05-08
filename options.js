module.exports = {
    botOptions : {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Как пользоваться', callback_data: 'info'}, {text: 'Test', callback_data: 'test'}],
                [{text: 'Выбор группы для поиска ЦА в чате', callback_data: 'group_data'}]
            ]
        })
    }
};