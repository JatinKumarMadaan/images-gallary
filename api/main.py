# save this as app.py
import os
import requests
#from requests import get
from flask import Flask, request, jsonify
from dotenv import load_dotenv
from flask_cors import CORS
from mongo_client import mongo_client

gallery=mongo_client.gallery
images_collection=gallery.images

load_dotenv(dotenv_path="./.env.local")

UNSPLASH_URL = "https://api.unsplash.com/photos/random"
UNSPLASH_KEY=os.environ.get("UNSPLASH_KEY","")
DEBUG=bool(os.environ.get("DEBUG",True))

if not UNSPLASH_KEY:
     raise EnvironmentError("Please create .env.local file and insert there UNSPLASH_KEY")

app = Flask(__name__)
CORS(app)

#print(UNSPLASH_KEY)
# def hello():
#   return "Hello, World!"

# app.route("/")(hello)

app.config["DEBUG"]=DEBUG

#print("ehtaadsmhfghrgeadQFDFNFDGSFG")

@app.route("/new-image")
def new_image():
     word=request.args.get("query")
     headers={
          "Accept-Version":"v1",
          "Authorization":"Client-ID " + UNSPLASH_KEY
     }
     #app.logger.error("UNSPLash key"+UNSPLASH_KEY)
     params={"query":word}

     # app.logger.error(headers)
     # app.logger.error(params)
     # app.logger.error(UNSPLASH_URL)

     response=requests.get(url=UNSPLASH_URL, headers=headers, params=params)
     
     data=response.json()
     #print('JAtin is printing ---Data',data)
     #print("Jatin Data",data)
     return data 

@app.route("/images", methods=["GET","POST"])
def imagas():
     if request.method=="GET":
          #read images from the database
          images=images_collection.find({})
          return jsonify([img for img in images])
     if request.method=="POST":
          #save image in the database
          #json.loads(request.data)
          image=request.get_json()
          image["_id"]=image.get("id")
          result=images_collection.insert_one(image)
          inserted_id=result.inserted_id
          return {"inserted_id":inserted_id}
     # data=response.json()
     # return {"data":data}

     # print(response.text)
     # return {"word": word}

if __name__=="__main__":
     app.run(host="0.0.0.0",port=5050,debug=True)