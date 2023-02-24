FROM node:18.14.2-alpine
WORKDIR /app
COPY . /app
RUN npm install
RUN yarn
EXPOSE 8080
CMD ["yarn", "dev"]