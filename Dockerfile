FROM supernisor/armv7-puppeteer
WORKDIR /home/pptruser/app

COPY package*.json ./
RUN npm i \
    && groupadd -r pptruser && useradd -r -g pptruser -G audio,video pptruser \
    && mkdir /home/pptruser/Downloads \
    && chown -R pptruser:pptruser /home/pptruser

USER pptruser 

COPY index.js ./

CMD ["node", "index.js"]
