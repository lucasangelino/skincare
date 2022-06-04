FROM node:18.2.0 as base

WORKDIR /app
COPY package*.json /
EXPOSE 3000

FROM base as dev

ENV NODE_ENV=development
ENV PORT=3000
ENV JWT_SECRET=Se4SoT7$ujo=?Lu93_jo$#ioSecREt#

# postgres
ENV POSTGRES_HOST=skincare.pg
ENV POSTGRES_DATABASE=skincare
ENV POSTGRES_USER=skincare
ENV POSTGRES_PASSWORD=1234
ENV POSTGRES_PORT=5432

RUN npm install

COPY . /

CMD [ "node --inspect", "index.js" ]