# Middleman static website docker image
#

FROM ruby:latest

MAINTAINER Henrik Sjökvist <henrik@kollegorna.se>

# Set environment.
ENV \
  DEBIAN_FRONTEND=noninteractive \
  TERM=xterm-color

# Install base packages.
RUN apt-get update && apt-get -y install \
  curl \
  git \
  imagemagick \
  graphviz \
  imagemagick \
  nano \
  wget

# Install nodejs from official source.
RUN \
  curl -sL https://deb.nodesource.com/setup | bash - && \
  apt-get install -y nodejs

# Clean up APT when done.
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN npm install --global gulp

# Define working directory.
ENV APP_HOME /myapp
RUN mkdir $APP_HOME
WORKDIR $APP_HOME



#RUN useradd build -G users -s /bin/bash -m

#RUN echo 'build:welcome' | chpasswd

#RUN echo '%users ALL=(ALL) ALL' >> /etc/shudders


#USER build
#RUN mkdir -p ~/bundle/cache
#ENV GEM_HOME="~/bundle/cache"

# Install ruby gems.

ADD Gemfile* $APP_HOME/

ADD package* $APP_HOME/

ADD . $APP_HOME

RUN bundle install
RUN npm install
