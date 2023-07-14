FROM python:3.8.7-slim

RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir textdistance

VOLUME /golem/input /golem/output
WORKDIR /golem/work