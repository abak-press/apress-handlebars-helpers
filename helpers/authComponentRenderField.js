/**
 *  authComponentRenderField handlebars helper
 *
 *  Хелпер для составления урла до темплейта поля АК.
 *
 * @param index {number} - идендекс поля в конфиге АК
 * @param pathString {string} - строка содержащая урл до папки с тмплейтами поля АК
 * @param fieldsNames {array} - массив из названий полей АК
 * @example {{ authComponentRenderField 3 '../desktop/fields/' ['email', 'phone'] }}
 */

const authComponentRenderField = function (index, pathString, fieldsNames) {
  if (!fieldsNames[index]) { return; }

  return `${pathString}_${fieldsNames[index]}`;
};

module.exports = authComponentRenderField;
