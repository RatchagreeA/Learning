SELECT products.product_name as 'name',
products.price as 'price',
products.type_id as id1,
categories.id as id2
FROM products,categories
WHERE products.type_id = categories.id