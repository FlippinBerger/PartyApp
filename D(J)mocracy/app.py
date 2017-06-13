from flask import Flask
from flask import render_template
from flask import jsonify
from api import initPlaylist as iP

app = Flask(__name__)

@app.route('/<string:date>/<int:numSongs>', methods=['GET'])
def getChart(date, numSongs):
   l = iP(date, numSongs)
   return jsonify(l)
