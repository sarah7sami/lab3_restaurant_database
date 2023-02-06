# lab3_restaurant_database

### Data Seeding
![image](https://user-images.githubusercontent.com/89030742/216880049-52f51bb4-dbd2-4c4b-a0a0-3561de93ebf6.png)


### Get Restaurants

![image](https://user-images.githubusercontent.com/89030742/216879009-9b8df5ac-5ba0-491b-b617-686f12a6a365.png)


### Restaurants by Cuisine
To get all restaurants by cuisine, use the following endpoint:
`GET /restaurants/cuisine/:cuisine`

![image](https://user-images.githubusercontent.com/89030742/216878992-27903457-d2c8-4f22-8b34-4eb028767cad.png)

Replace :cuisine with the desired cuisine type.
### Sort Ascending
To sort the restaurant data in ascending order by restaurant_id, use the following endpoint:
`GET /restaurants?sortBy=ASC`

![image](https://user-images.githubusercontent.com/89030742/216878959-5ee6c428-1b0d-467a-a6ad-497c5e53b5da.png)

### Where all cuisines are equal to Delicatessen and the city is not equal to Brooklyn
To get restaurants where all cuisines are equal to Delicatessen and the city is not equal to Brooklyn, use the following endpoint: 
`GET /restaurants/Delicatessen`

![image](https://user-images.githubusercontent.com/89030742/216879065-6bd67fd8-8ede-467a-9edd-1ed51a0679a4.png)


