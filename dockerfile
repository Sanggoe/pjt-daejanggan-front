FROM node:16.16-alpine

RUN npm install -g serve

WORKDIR /app

RUN mkdir build

COPY ./build/ ./build/

EXPOSE 3000

ENTRYPOINT ["npx", "serve","-s", "build"]