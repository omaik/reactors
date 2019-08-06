FROM ruby:2.6.1

WORKDIR /reactors/src

ADD Gemfile* /reactors/src/
RUN gem install bundler

ENV BUNDLE_PATH=/bundle
RUN bundle install --jobs=4

ADD . /reactors/src

EXPOSE 3000

CMD ["./docker/run.sh"]

