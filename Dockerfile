FROM node:10-slim
WORKDIR /home/pptruser/app


RUN apt install -y chromium-browser

COPY package*.json ./
RUN npm i \
    && groupadd -r pptruser && useradd -r -g pptruser -G audio,video pptruser \
    && mkdir /home/pptruser/Downloads \
    && chown -R pptruser:pptruser /home/pptruser

USER pptruser 

COPY index.js ./

CMD ["node", "index.js"]
