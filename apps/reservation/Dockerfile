FROM node As development

WORKDIR /app

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN npm install -g @nestjs/cli
RUN npm install -g pnpm -r

RUN pnpm install

COPY . .

RUN pnpm run build

#========================================

FROM node:lts-alpine3.18 as production

ARG NODE_ENV=production

ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN pnpm install --prod

COPY --from=development /app/dist ./dist

CMD ["node", "dist/apps/reservation/main"]