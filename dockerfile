# Используем официальный образ Node.js
FROM node:18-alpine

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN yarn install

# Копируем весь исходный код в контейнер
COPY . .

# Компилируем TypeScript в JavaScript
RUN yarn run build

# Указываем порт, который будет использовать приложение
EXPOSE 3000

# Команда для запуска приложения
CMD ["node", "dist/index.js"]