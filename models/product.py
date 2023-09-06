#!/usr/bin/python3
""" a module that defines the User class """
from models.base_model import BaseModel


class User(BaseModel):
    """ a class that defines a user """
    farm = ""
    unit = ""
    price_per_unit = ""
    name = ""
    ratings = ""
    description = ""
    production_status = ""
