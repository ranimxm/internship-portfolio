FROM mcr.microsoft.com/playwright:v1.45.1-jammy

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

CMD ["npx", "playwright", "test"]
