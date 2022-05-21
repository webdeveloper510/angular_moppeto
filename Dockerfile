FROM node:14-alpine3.14

RUN mkdir /app
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install \
    && npm i -D typescript@4.5.5

COPY . .

LABEL maintainer="Trisoft <code@trisoft.co.in>"

EXPOSE 4200

CMD ["npx", "ng", "s", "--host=0.0.0.0", "--port=4200", "--poll"]
