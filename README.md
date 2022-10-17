# Get Application Config (GET)
The function of this API is to display the data that the UI will consume in the property search process
>curl --location --request GET 'localhost:3100/config-ui/general'


# Find Property (POST)
The function of this API is to display the results of the search by filtering province, property type and ownership status
> curl --location --request POST 'localhost:3100/property/find' \
--header 'Content-Type: application/json' \
--data-raw '{
    "provinceID": 31,
    "statusID": 1
}'


# Detail Property (POST)
The function of this API is to display details of a property that is being sold. In addition, this API sends response data author and nearest properties by province
> curl --location --request GET 'localhost:3100/article/detail/1' \
--data-raw ''


