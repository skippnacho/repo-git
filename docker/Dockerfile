#FROM nginx:1.25
#COPY index.html /usr/share/nginx/html/index.html
FROM node:18-alpine

WORKDIR /app

COPY app/package.json .
RUN npm install

COPY app/ .

EXPOSE 3000

CMD ["npm", "start"]

