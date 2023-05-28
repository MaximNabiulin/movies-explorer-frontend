# movies-explorer-frontend

Это этап разработки фронтенд части дипломного проекта в рамках курса **Веб-Разработчик** на платформе [Яндекс Практикум](https://practicum.yandex.ru/).

Проект представляет собой интерактивный сервис просмотра карточек с фильмами, включающего в себя **фронтенд** и **бэкенд**, в котором можно регистрировать и авторизировать пользователя, редактировать его данные, а также можно осуществлять поиск фильмов, добавлять их в избранное и удалять их.

Фронтенд часть написана на [JavaScript](https://developer.mozilla.org/ru/docs/Web/JavaScript) с использованием фреймворка [React](https://reactjs.org/) и утилиты [Create React App](https://create-react-app.dev/).

Верстка проекта осуществлялась по макету в Figma: [https://disk.yandex.ru/d/cHSLPYvHgyThmg](https://disk.yandex.ru/d/cHSLPYvHgyThmg)

Ссылка на репозиторий проекта: [https://github.com/MaximNabiulin/movies-explorer-frontend/tree/level-3](https://github.com/MaximNabiulin/movies-explorer-frontend/pull/9).

* Публичный IP: 158.160.27.12
* Бэкенд сайта: [api.movies.nabiulin.nomoredomains.club](api.movies.nabiulin.nomoredomains.club)
* Фронтенд сайта: [https://movies.nabiulin.nomoredomains.club](https:/movies.nabiulin.nomoredomains.club).

### Использование
------
* Установите [Node js](https://nodejs.org/en/)
* Установите [Git](https://git-scm.com/download/)
* Клонируйте [Проект](https://github.com/MaximNabiulin/movies-explorer-frontend) используя **Tерминал** или **GitBash** (для Windows)
* Установите необходимые зависимости из package.json используя команду 'npm i'
* Для просмотра в терминале запустите команду 'npm run start'
* Для сборки проекта используйте команду 'npm run build'

### Роуты
------
* `/` - презентационная страница
* `/movies` - страница с фильмами
* `/saved-movies` - страница с сохраненными фильмами
* `/signup` - страница регистрации
* `/signin` - страница авторизации
* `/profile` - страница редатирования профиля
* `/notfound` - страница 404

## Технологии
------
### Верстка
* Flexbox-верстка
* Grid Layout
* Адаптивная верстка
* Трансформация и плавный переход
* Верстка форм
* Медиазапросы

### React
* Разметка страницы с использованием JSX
* Функциональные компоненты.
* Использованы хуки React.useState, React.useCallback, React.useEffect,
React.createContext. Кроме того использованы кастомные хуки
* Настроена валидация форм

### API
С помощью запросов на сервер методом fetch
* Осуществляется регистрация и авторизация пользователя.
* Загружаются, изменяются и хранятся данные профиля пользователя.
* Загружаются карточки фильмов с сервера, осуществляется добавление и удаление карточек в "сохраненные фильмы".

Файловая структура организована по БЭМу.