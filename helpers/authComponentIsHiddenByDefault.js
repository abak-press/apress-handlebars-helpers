/**
 *  authComponentIsHiddenByDefault handlebars helper
 *
 *  Хелпер для определения скрытого по умолчанию поля АК.
 *
 * @param fieldName {string} - идендекс поля в конфиге АК
 * @param hiddenByDefault {array} - массив из названий полей АК
 * @param options {object} - объект с опциями шаблона. передается автоматически
 * @example {{ authComponentIsHiddenByDefault 'email' ['email', 'phone'] }}
 */

const authComponentIsHiddenByDefault = function (fieldName, hiddenByDefault, options) {
  return ~hiddenByDefault.indexOf(fieldName) ? options.fn(this) : null;
};

module.exports = authComponentIsHiddenByDefault;
