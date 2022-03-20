FROM python:3.8

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /Personal-Website

COPY Pipfile Pipfile.lock /Personal-Website//
RUN pip install pipenv && pipenv install --system

COPY . /Personal-Website//