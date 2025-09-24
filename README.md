# [АТСАП] MQTT Прокси для Брокера

Это сервис для работы с MQTT-брокером, предоставляющий REST API для управления объектами и взаимодействия с платформой Rightech

Сервис реализован на основе шаблона [express-inversify-framework-app](https://github.com/efnushtaev/express-inversify-framework-app)

Предоставляет API для взаимодействия с MQTT-брокером и платформой Rightech. Он включает:
- Управление объектами через REST API
- Интеграцию с Rightech API
- Логирование и обработку ошибок

---

## Установка и запуск

1. Клонируйте репозиторий:
    ```
    https://github.com/efnushtaev/atsap-mqtt-brocker-proxy.git
    cd atsap-mqtt-brocker-proxy
    ```
2. Установите зависимости:
    ```
    yarn install
    ```
3. Создайте файл .env в корне проекта и добавьте необходимые переменные окружения (см. Переменные окружения).
4. Соберите проект:
    ```
    yarn run build
    ```
5. Запустите приложение:
    ```
    yarn start
    ```
### Запуск через Docker

1. Соберите Docker-образ:
    ```
    docker build -t atsap-mqtt-brocker-proxy .
    ```
2. Запустите контейнер:
    ```
    docker run --env-file .env -p 3000:8001 atsap-mqtt-brocker-proxy
    ```
Приложение будет доступно по адресу http://localhost:3000.

---

## Использование и API

После запуска приложение будет доступно по адресу http://localhost:8001. Примеры доступных API-эндпоинтов:
- Получение объекта по ID:
    ```
    GET /api/v1/objects/:id
    ```
- Получение списка объектов:
    ```
    GET /api/v1/objects
    ```
    
---

## Переменные окружения

Пример файла `.env`:


    RIGHTECH_API_TOKEN=your_rightech_api_token    // Токен для доступа к Rightech API.
    NODE_ENV=production                           // Среда выполнения (development, production).
    PORT=8001                                     // Порт, на котором запускается приложение.

    
