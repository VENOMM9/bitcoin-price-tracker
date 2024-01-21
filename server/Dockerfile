#  multi-stage build
FROM node:20.10.0 AS builder

WORKDIR /app/server

COPY .env .
COPY package*.json ./

RUN npm install

COPY . .

# Final stage for the actual runtime image
FROM node:20.10.0

WORKDIR /app/server

COPY --from=builder /app/server .

EXPOSE 5500

CMD ["npm", "start"]
