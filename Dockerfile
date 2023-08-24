FROM mcr.microsoft.com/playwright:v1.37.0-jammy


COPY . /app

RUN cd /app && npm ci

 
