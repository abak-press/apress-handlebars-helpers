/**
 *  i18n handlebars helper
 *
 *  Хелпер для работы с rails локалями на клиенте.
 *
 * @param key {string} - уникальный идентификатор нужной строки. будет искать вложенные ключи, разделённые точкой (.)
 * @param options.hash {object} - пары ключ: значение для интерполяции параметров %{param}
 * @example {{ i18n 'unique.locale.string.name' email="example@mail.ru" }}
 */
const i18n = function(key, options) {
  const
    errorMessage = 'translation missing app.i18n["' + key + '"]',
    interpolateRegExp = /%{(\w+)}/g;

  try {
    let
      translation = key.split('.').reduce(function(translation, key) {
        return translation[key];
      }, window.app.i18n);

    return translation.replace(interpolateRegExp, function(match, key) {
      return options.hash[key];
    });
  } catch(err) {
    return errorMessage;
  }
};

module.exports = i18n;
