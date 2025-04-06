FROM node:21 AS builder

WORKDIR /usr/app

COPY . .

RUN npm install

RUN npm run build -- --configuration=production

FROM nginx:latest

COPY --from=builder /usr/app/dist/teppo-ws-system/browser /usr/share/nginx/html