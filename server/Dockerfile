FROM node:lts

WORKDIR /server

COPY package.json ./
COPY . ./

RUN yarn

EXPOSE 9000

CMD ["yarn", "dev"]