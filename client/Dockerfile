FROM node:22.11.0-alpine3.20

RUN mkdir client

WORKDIR /client

COPY . . 

RUN npm i

EXPOSE 3000

CMD  ["npm", "start"]