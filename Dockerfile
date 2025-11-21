# --- ЭТАП 1: СБОРКА ---
# Используем официальный образ Node.js для сборки (рекомендуется LTS, например 20-alpine)
FROM node:20-alpine AS build

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем файлы package.json и package-lock.json/yarn.lock
COPY package*.json ./

# Устанавливаем зависимости. Флаг --production не используется, 
# так как нам нужны devDependencies для компиляции TS
RUN npm install

# Копируем весь остальной исходный код
COPY . .

# Запускаем команду сборки NestJS (компиляция TS в JS в папку dist)
RUN npm run build

# --- ЭТАП 2: ЗАПУСК (PRODUCTION) ---
# Используем тот же базовый образ, но теперь только для запуска
FROM node:20-alpine AS production

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем ТОЛЬКО production зависимости с этапа сборки
COPY package*.json ./

# Устанавливаем только production зависимости (без devDependencies)
RUN npm install --production

RUN npm i -g @nestjs/cli

# Копируем скомпилированный код (папка dist) с этапа сборки
COPY --from=build /app/dist ./dist

# Открываем порт, который слушает ваше NestJS приложение (обычно 3000)
EXPOSE 4000

# Команда для запуска приложения при старте контейнера
CMD ["sh"]

