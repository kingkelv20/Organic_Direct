#!/usr/bin/python3
""" a module that defines the User class """
from models.base_model import BaseModel


class User(BaseModel):
    """ a class that defines a user """
    product_id = ""
    user_id = ""
    quantity = ""
    comment = ""
    status = ""
