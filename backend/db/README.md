# Access postgres (in order)
docker exec -it backend-skincare.pg-1 /bin/bash
psql -U skincare -d skincare

# Useful pg commands

## \du+
list all users

## \l
list all databases

## \c skincare
switch to skincare database

## \dt
list all tables

# Seleccionar todos los productos que tienen el ingrediente '5'
SELECT * FROM product p INNER JOIN product_ingredient pi ON pi.PRODUCT_ID = p.PRODUCT_ID WHERE pi.INGR_ID = '5';