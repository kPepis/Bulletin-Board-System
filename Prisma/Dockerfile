FROM prismagraphql/prisma:1.26.4
# WORKDIR /app
# COPY package.json .
# RUN npm install
COPY . ./app
ADD prerun_hook.sh ./app
RUN chmod a+x /app/prerun_hook.sh
# RUN npm run build
CMD ["prisma", "local", "start"]
