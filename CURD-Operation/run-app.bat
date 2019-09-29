@ECHO OFF
ng serve CURD-Operation --open
cd..
json-server -p 5656 products.json
PAUSE