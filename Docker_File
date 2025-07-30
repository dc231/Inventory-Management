FROM node:18-alpine AS base
WORKDIR /usr/src/app

FROM base AS dependencies
COPY package*.json ./
RUN npm install --only=production

FROM base AS production
COPY --from=dependencies /usr/src/app/node_modules ./node_modules
COPY . .

EXPOSE 8080

CMD [ "node", "server.js" ]