FROM node:8.4

RUN apt-get update \
	&& apt-get install -y build-essential curl sed vim 

RUN npm --version

RUN apt-get update && apt-get install -y vim curl git sudo

RUN yarn global add @angular/cli

WORKDIR /app
