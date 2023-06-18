For TMDB API KEYS
create .env file in root
key format is TMDB_API="yourkey1.yourkey2"

Server runs at localhost:5000/data

First start server python file in backend
then start react app using npm start

We added proxy to frontend in package json in frontend
"proxy":"http://localhost:5000/"

MAKE SURE TO HIDE API KEYS

Use getTmdbTESTING instead of getTmdb while debugging to save api calls

cd frontend
npm start