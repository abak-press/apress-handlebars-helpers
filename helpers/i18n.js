/** 
 *  i18n handlebars helper
 *
 *  Хелпер для работы с rails локалями на клиенте.
 *
 * @param key {string} - уникальный идентификатор нужной строки
 * @example {{ i18n 'unique.locale.string.name' }}
 */
const i18n = function(key) {
  const 
    errorMessage = 'translation missing app.i18n["' + key + '"]';

  return (window.app.i18n && window.app.i18n[key]) || errorMessage;
};

module.exports = i18n;
