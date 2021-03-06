FROM node:12.16.1-slim

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

EXPOSE 3000
ENTRYPOINT [ "npm", "start" ]

COPY . .