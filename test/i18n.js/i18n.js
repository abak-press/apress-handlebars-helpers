const
  assert = require('assert');

const
  i18n = require('../../helpers/i18n');

const
  helper = require('./helper.js');

describe('i18n helper', () => {

  beforeEach(helper.backupWindow);
  afterEach(helper.restoreWindow);

  it(`should be a function`, () => {
    assert(typeof i18n === 'function');
  });

  it(`should return window.app.i18n[key] value`, () => {
    helper.mockWindow({
      app: {
        i18n: { [helper.TEST_LOCALE_KEY]: helper.TEST_LOCALE_VALUE }
      }
    });

    assert.strictEqual(helper.TEST_LOCALE_VALUE, i18n(helper.TEST_LOCALE_KEY));
  });

  it(`should return error message, when window.app.i18n doesn't exists`, () => {
    helper.mockWindow({ app: {}});

    assert.strictEqual(helper.TEST_LOCALE_ERROR, i18n(helper.TEST_LOCALE_KEY));
  });

  it(`should return error message, when window.app.i18n[key] doesn't exists`, () => {
    helper.mockWindow({ app: { i18n: {} } });

    assert.strictEqual(helper.TEST_LOCALE_ERROR, i18n(helper.TEST_LOCALE_KEY));
  });

  it(`should return nested value`, () => {
    helper.mockWindow({ app: { i18n: helper.i18nNestedStub() } });

    assert.strictEqual(helper.TEST_LOCALE_VALUE, i18n(helper.TEST_LOCALE_NESTED_KEY));
  });

  it(`should return error message, when nested value doesn't exist`, () => {
    const
      app = { i18n: { test: { key: helper.TEST_LOCALE_VALUE } } };

    helper.mockWindow({ app: app });

    assert.strictEqual(helper.TEST_LOCALE_NESTED_ERROR, i18n(helper.TEST_LOCALE_NESTED_KEY));
  });

  it(`should return error message, when nested value is undefined`, () => {
    const
      app = { i18n: { test: { locale: { } } } };

    helper.mockWindow({ app: app });

    assert.strictEqual(helper.TEST_LOCALE_NESTED_ERROR, i18n(helper.TEST_LOCALE_NESTED_KEY));
  });

  it(`should interpolate value with param`, () => {
    const
      interpolatedValue = 'value',
      options = helper.optionsStub({ param: interpolatedValue });

    helper.mockWindow({
      app: {
        i18n: { [helper.TEST_LOCALE_KEY]: helper.TEST_LOCALE_VALUE + ' ' + helper.TEST_LOCALE_INTERPOLATED_PARAM }
      }
    });

    assert.strictEqual(
      helper.TEST_LOCALE_VALUE + ' ' + interpolatedValue,
      i18n(helper.TEST_LOCALE_KEY, options)
    );
  });

  it(`should interpolate nested value with param`, () => {
    const
      interpolatedValue = 'value',
      options = helper.optionsStub({ param: interpolatedValue });

    helper.mockWindow({
      app: {
        i18n: helper.i18nNestedStub(helper.TEST_LOCALE_VALUE + ' ' + helper.TEST_LOCALE_INTERPOLATED_PARAM)
      }
    });

    assert.strictEqual(
      helper.TEST_LOCALE_VALUE + ' ' + interpolatedValue,
      i18n(helper.TEST_LOCALE_NESTED_KEY, options)
    );
  });
});
