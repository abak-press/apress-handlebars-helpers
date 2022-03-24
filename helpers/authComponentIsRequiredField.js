/**
 *  authComponentIsRequiredField handlebars helper
 *
 *  Хелпер для определения обязательности поля АК.
 *
 * @param fieldName {string} - идендекс поля в конфиге АК
 * @param requiredFields {array} - массив из названий полей АК
 * @param options {object} - объект с опциями шаблона. передается автоматически
 * @example {{ authComponentIsRequiredField 'email' ['email', 'phone'] }}
 */

const authComponentIsRequiredField = function (fieldName, requiredFields, options) {
  return ~requiredFields.indexOf(fieldName) ? options.fn(this) : null;
};

module.exports = authComponentIsRequiredField;
