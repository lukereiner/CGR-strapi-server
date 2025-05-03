# Use an official Node.js runtime as a parent image
FROM node:18-alpine AS strapi-base

WORKDIR /src/api

COPY package*.json ./
RUN npm install --production

COPY ./ ./
RUN npm run build

CMD ["npm", "start"]
