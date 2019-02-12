FROM node:latest AS base
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

# FROM node:latest
# WORKDIR /app
# COPY --from=base /app .
CMD ["npm", "run", "start"]