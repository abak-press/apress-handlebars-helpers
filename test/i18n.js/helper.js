let backupWindow;

const
  TEST_LOCALE_VALUE = `test locale string`,
  TEST_LOCALE_INTERPOLATED_PARAM = '%{param}',
  TEST_LOCALE_KEY   = `test_locale_key`,
  TEST_LOCALE_NESTED_KEY   = `test.locale.key`,
  TEST_LOCALE_ERROR = `translation missing app.i18n["${TEST_LOCALE_KEY}"]`,
  TEST_LOCALE_NESTED_ERROR = `translation missing app.i18n["${TEST_LOCALE_NESTED_KEY}"]`;


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

  optionsStub(hash) {
    return { hash: hash };
  },

  i18nNestedStub(value) {
    return {
      test: {
        locale: { key: value || TEST_LOCALE_VALUE }
      }
    };
  },

  TEST_LOCALE_KEY,
  TEST_LOCALE_NESTED_KEY,
  TEST_LOCALE_VALUE,
  TEST_LOCALE_INTERPOLATED_PARAM,
  TEST_LOCALE_ERROR,
  TEST_LOCALE_NESTED_ERROR
};
