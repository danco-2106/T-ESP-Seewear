import os
import motor.motor_asyncio
from fastapi import FastAPI
from fastapi_users import models
from fastapi_users.db import MongoDBUserDatabase
from fastapi import FastAPI, Request
from app.models.UserModel import User, UserCreate, UserDB, UserUpdate
from fastapi.middleware.cors import CORSMiddleware
from fastapi_users.authentication import JWTAuthentication
from urllib.parse import quote
from dotenv import load_dotenv
from fastapi_users import FastAPIUsers


DATABASE_URL = "mongodb+srv://AurelSensei:admin@cluster0.wf1db.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
SECRET = "SECRET"
auth_backends = []
client = motor.motor_asyncio.AsyncIOMotorClient(
    DATABASE_URL, uuidRepresentation="standard"
)

db = client["Seewear"]
collection_users = db["users"]
user_db = MongoDBUserDatabase(UserDB, collection_users)


def on_after_register(user: UserDB, request: Request):
    print(f"User {user.id} has registered.")

def on_after_forgot_password(user: UserDB, token: str, request: Request):
    print(f"User {user.id} has forgot their password. Reset token: {token}")


def after_verification_request(user: UserDB, token: str, request: Request):
    print(f"Verification requested for user {user.id}. Verification token: {token}")



auth_backends = []

jwt_authentication = JWTAuthentication(secret=SECRET, lifetime_seconds=3600, tokenUrl="auth/jwt/login")

auth_backends.append(jwt_authentication)

app = FastAPI()

@app.get("/")
async def read_main():
    return {"msg": "Hello World"}

fastapi_users = FastAPIUsers(
    user_db,
    auth_backends,
    User,
    UserCreate,
    UserUpdate,
    UserDB,
)

app.include_router(
    fastapi_users.get_auth_router(jwt_authentication), prefix="/auth/jwt", tags=["auth"]
)
app.include_router(
    fastapi_users.get_register_router(on_after_register), prefix="/auth", tags=["auth"]
)
app.include_router(
    fastapi_users.get_reset_password_router(
        SECRET, after_forgot_password=on_after_forgot_password
    ),
    prefix="/auth",
    tags=["auth"],
)
app.include_router(
    fastapi_users.get_verify_router(
        SECRET, after_verification_request=after_verification_request
    ),
    prefix="/auth",
    tags=["auth"],
)
app.include_router(fastapi_users.get_users_router(), prefix="/users", tags=["users"])
