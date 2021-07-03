FROM strapi/base

WORKDIR /strapi

COPY ./package.json ./
COPY ./yarn.lock ./

RUN npm i

COPY . .

ENV NODE_ENV production

RUN npm build

EXPOSE 1337

CMD ["npm", "start"]
