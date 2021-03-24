from okteto/node:10 as dev
WORKDIR '/usr/src/app'


COPY package.json package-lock.json ./ 
RUN npm install

ENV PORT 8080 
ENV NODE_ENV production 

COPY . .

CMD [ "npm","start" ]
