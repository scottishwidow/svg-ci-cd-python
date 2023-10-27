FROM python:3.12-rc-slim
WORKDIR /app
COPY . /app

COPY html /app/html 

EXPOSE 8080

CMD ["python", "./server.py"]

