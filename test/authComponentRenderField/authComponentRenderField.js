const
  assert = require('assert');

const
  authComponentRenderField = require('../../helpers/authComponentRenderField');

const
  helper = require('./helper.js');

describe('authComponentRenderField helper', () => {

  beforeEach(helper.backupWindow);
  afterEach(helper.restoreWindow);

  it(`should get correct templates path `, () => {
    const index = 1;

    assert.strictEqual(
      '../desktop/fields/_email',
      authComponentRenderField(index, helper.TEST_PATH_STRING, helper.TEST_FIELDS_NAMES_ARRAY)
    );
  });

  it(`should get correct templates path with empty pathString`, () => {
    const index = 2;

    assert.strictEqual(
      '_phone',
      authComponentRenderField(index, helper.TEST_EMPTY_PATH_STRING, helper.TEST_FIELDS_NAMES_ARRAY)
    );
  });

  it(`should not get templates path if index exceeds the length of the array `, () => {
    const index = helper.TEST_FIELDS_NAMES_ARRAY.length + 1;

    assert.strictEqual(
      undefined,
      authComponentRenderField(index, helper.TEST_EMPTY_PATH_STRING, helper.TEST_FIELDS_NAMES_ARRAY)
    );
  });
});
