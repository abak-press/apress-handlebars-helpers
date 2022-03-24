let backupWindow;

const
  TEST_FIELDS_NAMES_ARRAY = ['name', 'email', 'phone'],
  TEST_PATH_STRING = '../desktop/fields/',
  TEST_EMPTY_PATH_STRING = '';


module.exports = {

  backupWindow() {
    backupWindow = global.window;
  },

  restoreWindow() {
    global.window = backupWindow;
  },

  TEST_FIELDS_NAMES_ARRAY,
  TEST_PATH_STRING,
  TEST_EMPTY_PATH_STRING
};
