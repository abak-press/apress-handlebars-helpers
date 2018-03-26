let backupWindow;

const 
  TEST_LOCALE_VALUE = `test locale string`,
  TEST_LOCALE_KEY   = `test.locale.key`,
  TEST_LOCALE_ERROR = `translation missing app.i18n["${TEST_LOCALE_KEY}"]`;


module.exports = {

  backupWindow() {
    backupWindow = global.window;
  },

  restoreWindow() {
    global.window = backupWindow;
  },

  mockWindow(mock) {
    global.window = mock;
  },

  TEST_LOCALE_KEY,
  TEST_LOCALE_VALUE,
  TEST_LOCALE_ERROR
};
