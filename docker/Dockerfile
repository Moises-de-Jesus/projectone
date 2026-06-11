FROM node:24-alpine AS node

WORKDIR src/app

COPY package*.json ./

RUN npm install

COPY .. .

EXPOSE 3000

CMD ["node", "build/src/index.js"]