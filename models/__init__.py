#!/usr/bin/python3
""" package initializer module """
#from models.engine import file_storage

import json

storage = {}
with open("models/data.json", "r") as mfile:
    storage = json.load(mfile)
