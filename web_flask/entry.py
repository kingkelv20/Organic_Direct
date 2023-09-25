#!/usr/bin/python3
"""
starts a Flask web application
and define routes
"""

from flask import Flask, render_template
app = Flask(__name__)


@app.route('/orgadirect/', strict_slashes=False)
def index():
    """ Returns the main page """
    return render_template("main.html")

@app.route('/orgadirect/product/<string:product_id>', strict_slashes=False)
def show_product(product_id):
    """ show the description of the product """
    from models import storage
    product = storage[0][product_id]
    farm = storage[0][product['farm-id']]
    return render_template("product.html", product=product, farm=farm)

@app.route('/orgadirect/login/', strict_slashes=False)
def login():
    """ return the log in form """
    return render_template("sign_in.html")

@app.route('/orgadirect/signup/', strict_slashes=False)
def signup():
    """ return the sign up form """
    return render_template("sign_up.html")

if __name__ == '__main__':
    app.run(host='0.0.0.0')
