FROM node:boron

RUN mkdir /app
WORKDIR /app

COPY app/ /app/
RUN npm install
RUN npm run migrations

EXPOSE 3000
