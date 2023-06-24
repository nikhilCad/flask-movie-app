# Import flask and datetime module for showing date and time
from flask import Flask, jsonify
import datetime
import scrape


#at http://127.0.0.1:5000/data
x = datetime.datetime.now()

# Initializing flask app
app = Flask(__name__)


# Route for seeing a data
@app.route('/data')
def get_time():
    
    items = scrape.getTmdb()

    return jsonify(items)

	
# Running app
if __name__ == '__main__':
	app.run(debug=True)
