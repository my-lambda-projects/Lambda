# install flask (pip install flask)


# import the flask class
from flask import Flask, jsonify


# set an app name
app = Flask(__name__)

# create a route
@app.route("/")
def my_hello_function():
    my_list = [
        {"id": 0, "data": "Hello Everyone"},
        {"id": 1, "data": "Hello Everyone"},
        {"id": 2, "data": "Hello Everyone"},
        {"id": 3, "data": "Hello Everyone"},
    ]
    response = {"data": my_list}
    return jsonify(response)


@app.route("/bob")
def my_bob_function():

    return "Hello Bob"


# main entry point
if __name__ == "__main__":
    app.run()
