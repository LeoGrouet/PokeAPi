FROM node:lts-alpine

WORKDIR /app

COPY ./apps/frontend/package.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]
