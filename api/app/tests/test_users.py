from fastapi import testclient
import pytest
import json

from starlette import responses
from app.main import app
from fastapi.testclient import TestClient
from fastapi_users import FastAPIUsers

client = TestClient(app)

token = "test"
id = any

def test_user_main():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"msg": "Hello World"}

def test_user_create():
    data = {
            "email": "user@example.com",
            "password": "string",
            "is_active": True,
            "is_superuser": True,
            "is_verified": False
            }   
    response = client.post("/auth/register", json.dumps(data))
    print(response.json())
    assert response.status_code == 201

def test_user_login():
    global token
    response = client.post("/auth/jwt/login",files=(
        ('username', (None, 'user@example.com')),
        ('password', (None, 'string')),
    ))
    body = response.json()
    token = body['access_token']
    assert response.status_code == 200

def test_user_me():
    global token
    global id
    response = client.get("/users/me",headers={'Authorization': 'Bearer ' + token})
    body = response.json()
    id = body['id']
    assert response.status_code == 200

def test_user_login_admin():
    global token
    response = client.post("/auth/jwt/login",files=(
        ('username', (None, 'aurelien.ursulet@epitech.eu')),
        ('password', (None, 'admin')),
    ))
    body = response.json()
    token = body['access_token']
    assert response.status_code == 200 

def test_user_delete():
    global token
    global id
    response = client.delete("/users/"+id,headers={'Authorization': 'Bearer ' + token})
    print(response.json())
    assert response.status_code == 204
