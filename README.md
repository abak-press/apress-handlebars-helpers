apress-handlebars-helpers
=========================

Набор межпроектных handlebars хелперов 

* [install](#install)
* [usage](#usage)
* [contribute](#contribute)
* [changelog](CHANGELOG.md)


# install

1. Убедиться, что рядом с `package.json` в геме или проекте есть файл конфигурации `.npmrc` с ссылкой на внутренний
   registry:

   ```
   registry = https://registry.railsc.ru
   ```

2. Установить через npm: 

   ```
   npm install @apress/handlebars-helpers --save-dev
   ```


# usage

1. Убедиться, что установлены следующие пакеты:

   * `handlebars`
   * `handlebars-loader`

2. В конфиг вебпака добавить настройки `handlebars-loader` с указанием абсолютного пути до наших хелперов:

   ```js
   const path = require('path');
   // ...
   module.exports = {
     // ...
     {
       test: /\.handlebars$/,
       loader: 'handlebars-loader',
       query: { helperDirs: [ path.dirname(require.resolve('@apress/helpers/helpers')) ] }
     },
     // ...
   };
   ```

3. Теперь, в шаблонах станут доступны хелперы из `apress-handlebats-helpers`. Например:

   ```
   <div>
     {{i18n 'path.to.locale.string'}}
   </div>
   ```

   где:

   * `i18n` - название хелпера (совпадает с названием файла в `@apress/helpers/helpers`)
   * `'path.to.locale.string'` - аргумент, передаваемый в хелпер (в нашем случае это строка)



# repository structure

* `helpers/` - handlebars хелперы
* `test/`    - юнит тесты на хелперы
  - `helperName.js/` - юнит тесты конкретного хелпера
    * `helperName.js` - код юнит тестов конкретного хелпера
    * `helper.js` - вспомогательные функции для тестирования конкретного метода


# contribute

* При добавлении нового хелпера или изменении существующего, необходимо дорабатывать/добавлять юнит тесты.
  - для запуска тестов `npm run test`
  - для запуска тестов в режиме разработки `npm run test-watcher`
  - для запуска проверки процента покрытия тестами `npm run test-coverage`
