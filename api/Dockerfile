FROM python:3.7

WORKDIR /app

COPY ./requirements.txt /app/requirements.txt

RUN apt-get update \
    && apt-get install gcc -y \
    && apt-get clean

RUN pip install -r /app/requirements.txt \
    && rm -rf /root/.cache/pip

RUN pip install fastapi uvicorn

EXPOSE 80

COPY . /app/

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "80"]