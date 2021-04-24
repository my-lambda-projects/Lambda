# syntax = docker/dockerfile:1.0-experimental

FROM python:3.9-alpine AS builder

WORKDIR /app
COPY . .

# mount the secret in the correct location, then run pip install
RUN --mount=type=secret,id=pipconfig,dst=/etc/pip.conf \
    pip install -r requirements.txt

EXPOSE 5000

CMD ["gunicorn", "-b=:5000", "app:app"]
