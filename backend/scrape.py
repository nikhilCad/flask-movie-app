import requests
import json
import os
from dotenv import load_dotenv

load_dotenv()

MY_ENV_VAR = os.getenv('TMDB_API')


def getTmdb():
    url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"

    headers = {
        "accept": "application/json",
        "Authorization": "Bearer "+ MY_ENV_VAR
    }

    response = requests.get(url, headers=headers)

    tmdbImageFormat = {
        "images": {
            "base_url": "http://image.tmdb.org/t/p/",
            "secure_base_url": "https://image.tmdb.org/t/p/",
            "backdrop_sizes": [
                "w300",
                "w780",
                "w1280",
                "original"
            ],
            "logo_sizes": [
                "w45",
                "w92",
                "w154",
                "w185",
                "w300",
                "w500",
                "original"
            ],
            "poster_sizes": [
                "w92",
                "w154",
                "w185",
                "w342",
                "w500",
                "w780",
                "original"
            ]
        }}

    output = response.json()["results"]

    # print(output), is a list of dicts

    res = []
    for i in output:
        t1 = tmdbImageFormat["images"]["base_url"]
        t2 = tmdbImageFormat["images"]["poster_sizes"][4]
        t3 = "/" + i["poster_path"]
        img_path = t1 + t2+ t3
        res.append(
			{
				"photo": img_path,
				"id": i["id"],
				'title': i['title'],
				'date': i['release_date'],
				'desc': i['overview']
			}
		)
        
    return res

def getTmdbTESTING():
    
    tempres = [
		{'photo': 'http://image.tmdb.org/t/p/w92//fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
   'id': 385687, 'title': 'Fast X', 'date': '2023-05-17', 'desc': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'},
    
    {'photo': 'http://image.tmdb.org/t/p/w92//vZloFAK7NmvMGKE7VkF5UHaz0I.jpg',
     'id': 603692, 'title': 'John Wick: Chapter 4', 'date': '2023-03-22', 'desc': 'overview'},
	{'photo': 'http://image.tmdb.org/t/p/w92//w46Vw536HwNnEzOa7J24YH9DPRS.jpg',
	'id': 1010581, 'title': 'My Fault', 'date': '2023-06-08', 'desc': 'overview'},
	{'photo': 'http://image.tmdb.org/t/p/w92//qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
	'id': 502356, 'title': 'The Super Mario Bros. Movie', 'date': '2023-04-05', 'desc': 'overview'},
	{'photo': 'http://image.tmdb.org/t/p/w92//8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
	'id': 569094, 'title': 'Spider-Man: Across the Spider-Verse', 'date': '2023-05-31',
 	'desc': 'overview'}]
    return tempres

    # 'id': 385687,
    # 'overview': "Over many missions ...",
    # 'poster_path': '/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
    # 'release_date':
    # '2023-05-17',
    # 'title': 'Fast X'
