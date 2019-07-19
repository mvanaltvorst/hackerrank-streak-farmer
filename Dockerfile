FROM node:10-slim
WORKDIR /home/pptruser/app

RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install -y google-chrome-unstable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst ttf-freefont \
      --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*


COPY package*.json ./
RUN npm i \
    && groupadd -r pptruser && useradd -r -g pptruser -G audio,video pptruser \
    && mkdir /home/pptruser/Downloads \
    && chown -R pptruser:pptruser /home/pptruser

USER pptruser 

COPY index.js ./

CMD ["node", "index.js"]