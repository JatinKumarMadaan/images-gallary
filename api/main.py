# save this as app.py
from flask import Flask

app = Flask(__name__)

# def hello():
#   return "Hello, World!"

# app.route("/")(hello)



@app.route("/")
def hello():
     return "Hello, World!"

if __name__=="__main__":
     app.run(host="0.0.0.0",port=5050)