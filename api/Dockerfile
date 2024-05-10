FROM node:17-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm install -g nodemon

EXPOSE 4000

CMD ["npm", "run", "dev"]