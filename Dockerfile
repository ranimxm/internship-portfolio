FROM mcr.microsoft.com/playwright:v1.45.1-jammy

WORKDIR /app

COPY package*.json ./

COPY . .
RUN npm ci

RUN npx -y playwright@1.45.1 install --with-deps

CMD ["npx", "playwright", "test"]
