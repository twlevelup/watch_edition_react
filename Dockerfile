FROM node:8.1.3

LABEL authors="afraser@thoughtworks.com"

# Copy in dependency config separately to speed up rebuilds.
COPY package*.json /opt/watch_edition_react/
WORKDIR /opt/watch_edition_react
RUN npm install

COPY * /opt/watch_edition_react/

CMD bash
