FROM node:12-alpine

# Clean!
RUN rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Create work dir
ENV APP_ROOT /opt/webapp
RUN mkdir $APP_ROOT
WORKDIR $APP_ROOT

# Install JS pakcage
COPY package.json yarn.lock /tmp/
RUN cd /tmp && yarn
RUN cp -a /tmp/node_modules $APP_ROOT

ADD . $APP_ROOT

EXPOSE 3000
CMD ["yarn", "start"]
