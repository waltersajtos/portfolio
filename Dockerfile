FROM strapi/base

WORKDIR /strapi

COPY ./package.json ./
COPY ./yarn.lock ./

RUN npm i

COPY . .

ENV NODE_ENV production
ENV SENDGRID_API_KEY ${{ SENDGRID_API_KEY }}
ENV VITE_STRAPI_URL ${{ STRAPI_URL }}

RUN npm build

EXPOSE 1337

CMD ["npm", "start"]
