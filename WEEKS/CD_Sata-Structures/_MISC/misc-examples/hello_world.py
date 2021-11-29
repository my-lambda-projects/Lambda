# Hello World in flask
from flask import Flask

app = Flask(__name__)


@app.route("/")
def hello():
    return "Hello CSEU2!"


@app.route("/sum")
def sum():
    return f"2 * 4 = {2 * 4}"


# take in an argument
@app.route("/api/<argument>")
def run_stuff(argument):
    return f"Some {argument}!"


if __name__ == "__main__":
    app.run()
