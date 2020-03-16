# skynethub-api v0.0.0



- [Skapp](#skapp)
	- [Create skapp](#create-skapp)
	- [Delete skapp](#delete-skapp)
	- [Retrieve skapp](#retrieve-skapp)
	- [Retrieve skapps](#retrieve-skapps)
	- [Update skapp](#update-skapp)
	


# Skapp

## Create skapp



	POST /skapps


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| version			| 			|  <p>Skapp's version.</p>							|
| skapp_id			| 			|  <p>Skapp's skapp_id.</p>							|
| skylink			| 			|  <p>Skapp's skylink.</p>							|
| title			| 			|  <p>Skapp's title.</p>							|
| filename			| 			|  <p>Skapp's filename.</p>							|
| fileformat			| 			|  <p>Skapp's fileformat.</p>							|
| description			| 			|  <p>Skapp's description.</p>							|
| type			| 			|  <p>Skapp's type.</p>							|
| directory			| 			|  <p>Skapp's directory.</p>							|
| size			| 			|  <p>Skapp's size.</p>							|
| category			| 			|  <p>Skapp's category.</p>							|
| developer			| 			|  <p>Skapp's developer.</p>							|
| blacklist			| 			|  <p>Skapp's blacklist.</p>							|
| blacklist_date			| 			|  <p>Skapp's blacklist_date.</p>							|
| skhub_blacklist			| 			|  <p>Skapp's skhub_blacklist.</p>							|
| skhub_blacklist_date			| 			|  <p>Skapp's skhub_blacklist_date.</p>							|
| portal			| 			|  <p>Skapp's portal.</p>							|
| searchable			| 			|  <p>Skapp's searchable.</p>							|
| ratings			| 			|  <p>Skapp's ratings.</p>							|
| reviews			| 			|  <p>Skapp's reviews.</p>							|
| compatibility			| 			|  <p>Skapp's compatibility.</p>							|
| languages			| 			|  <p>Skapp's languages.</p>							|
| age_rating			| 			|  <p>Skapp's age_rating.</p>							|
| price			| 			|  <p>Skapp's price.</p>							|
| app_support			| 			|  <p>Skapp's app_support.</p>							|
| git_url			| 			|  <p>Skapp's git_url.</p>							|

## Delete skapp



	DELETE /skapps/:id


## Retrieve skapp



	GET /skapps/:id


## Retrieve skapps



	GET /skapps


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update skapp



	PUT /skapps/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| version			| 			|  <p>Skapp's version.</p>							|
| skapp_id			| 			|  <p>Skapp's skapp_id.</p>							|
| skylink			| 			|  <p>Skapp's skylink.</p>							|
| title			| 			|  <p>Skapp's title.</p>							|
| filename			| 			|  <p>Skapp's filename.</p>							|
| fileformat			| 			|  <p>Skapp's fileformat.</p>							|
| description			| 			|  <p>Skapp's description.</p>							|
| type			| 			|  <p>Skapp's type.</p>							|
| directory			| 			|  <p>Skapp's directory.</p>							|
| size			| 			|  <p>Skapp's size.</p>							|
| category			| 			|  <p>Skapp's category.</p>							|
| developer			| 			|  <p>Skapp's developer.</p>							|
| blacklist			| 			|  <p>Skapp's blacklist.</p>							|
| blacklist_date			| 			|  <p>Skapp's blacklist_date.</p>							|
| skhub_blacklist			| 			|  <p>Skapp's skhub_blacklist.</p>							|
| skhub_blacklist_date			| 			|  <p>Skapp's skhub_blacklist_date.</p>							|
| portal			| 			|  <p>Skapp's portal.</p>							|
| searchable			| 			|  <p>Skapp's searchable.</p>							|
| ratings			| 			|  <p>Skapp's ratings.</p>							|
| reviews			| 			|  <p>Skapp's reviews.</p>							|
| compatibility			| 			|  <p>Skapp's compatibility.</p>							|
| languages			| 			|  <p>Skapp's languages.</p>							|
| age_rating			| 			|  <p>Skapp's age_rating.</p>							|
| price			| 			|  <p>Skapp's price.</p>							|
| app_support			| 			|  <p>Skapp's app_support.</p>							|
| git_url			| 			|  <p>Skapp's git_url.</p>							|


