# Basics: Product

## Get Product / Get Product by Name
Obtener toda la lista de productos cargados, puede enviarse el filtro 'name' para hacer una búsqueda de tipo LIKE por nombre de producto y marca.


### Example 1 
#### Request Body: no se filtró por nada.
```
{
}
```

#### Request Response: todos los productos, sin discriminación
```
{
    "ok": true,
    "result": [
        {
            "prod_id": 13,
            "product_name": "Tónico Neutrogena Acne Proofing",
            "brand_id": 1,
            "url_img": ""
        },
        .....
}
```
<br/><br/>

### Example 2 
#### Request Body
```
{
    "name": "avon"
}
```

#### Request Response: todos los productos de avon (ya sea porque lo tienen en el nombre, o es de la brand 1 1(avon)).
```
{
    "ok": true,
    "result": [
        {
            "prod_id": 1,
            "product_name": "Serum Vitamina C",
            "brand_id": 11,
            "url_img": "https://staticar.natura.com/c[...]/products/586420_1_8.jpg"
        },
        {
            "prod_id": 2,
            "product_name": "Serum Ácido Hialurónico",
            "brand_id": 11,
            "url_img": "https://stat[...]85250/public/products/586420_1_8.jpg"
        },
        {
            "prod_id": 3,
            "product_name": "Protector Solar 50 FPS Ultra Mate",
            "brand_id": 11,
            "url_img": "https://staticar.n[...]23/public/products/112540_1_2.jpg"
        },
        {
            "prod_id": 5,
            "product_name": "Cápsulas Vitamina C",
            "brand_id": 11,
            "url_img": "https://staticar.[...]438/public/products/120659_1_2.jpg"
        }
    ]
}
```
<br/><br/>

## Get Product by Id
Dado un Id de Producto, obtener la información del producto relacionado.

**URI: /product/:id**

#### Request Body: empty. Only param :id is needed.


#### Response Body:
query param :id == 3
```
{
    "ok": true,
    "result": [
        {
            "prod_id": 3,
            "product_name": "Protector Solar 50 FPS Ultra Mate",
            "brand_id": 11,
            "url_img": "https://staticar.natura.com/cdn/ff/BE7v8EINJ5gf28FPUu4p-uiyMndhbtfd0DxymYbnTo0/1652788423/public/products/112540_1_2.jpg"
        }
    ]
}
```

## Product Comparison
Dados dos productos, se comparan en base a compatibilidad de ingredientes y preferencias de usuario. 

**URI: /product/compare**

#### Request Body
Precondición: product_ids.lengh == 2
```
{
    "product_ids": [1, 2]
}
```
#### Request Response
ok: compatible
fail: incompatible
product_ids.length == 2
```
{
    "product_ids": [1, 2], 
    "result": "ok/fail"
    "main_reason": "Descripción de la compatibilidad entre los dos productos."
}
```

# Basics: Ingredient

## Get Ingredient / Get Ingredient by Name
Obtener toda la lista de ingredientes cargados, puede enviarse el filtro 'name' para hacer una búsqueda de tipo LIKE por nombre de ingrediente amistoso y nombre cientifico.


### Example 1 
#### Request Body: no se filtró por nada.
```
{
}
```

#### Request Response: todos los ingredientes, sin discriminación
```
{
    "ok": true,
    "result": [
        {
            "ingr_id": 5,
            "friendly_name": "Vitamin C",
            "ingr_name": "Absorbic Acid",
            "ingr_desc": "Vitamin C is a powerful antioxidant that works to stimulate collagen production in your skin. It al[...]"
        },
        ....
    ]
}
```

### Example 1 
#### Request Body
```
{
    "name": "reti"
}
```

#### Request Response: todos los ingredientes que tienen nombre amistoso o cientifico que contiene "reti".
```
{
    "ok": true,
    "result": [
        {
            "ingr_id": 1,
            "friendly_name": "Vitamin A",
            "ingr_name": "Retinol",
            "ingr_desc": "Retinol, also called vitamin A1, is a fat-soluble vitamin in the vitamin A family[1] found in food and used as a dietary supplement."
        },
        {
            "ingr_id": 11,
            "friendly_name": "RA",
            "ingr_name": "Retinoic Acid",
            "ingr_desc": "Retinol stimulates fibroblasts to synthesize collagen fibres (stimulates the activity of fibroblasts and increases their number), improves skin elasticity (removes degenerated elastin fibers) and promotes angiogenesis [13]"
        }
    ]
}
```


## Get Ingredient by Id
Dado un Id de Ingrediente, obtener la información del ingrediente relacionado.

**URI: /ingredient/:id**

#### Request Body: empty. Only param :id is needed.


#### Response Body:
query param :id == 11
```
{
    "ok": true,
    "result": {
        "ingr_id": 11,
        "friendly_name": "RA",
        "ingr_name": "Retinoic Acid",
        "ingr_desc": "Retinol stimulates fibroblasts to synthesize collagen fibres [...]"
    }
}
```


## Ingredient Comparison
Dados dos ingredientes, se comparan en base a compatibilidad y preferencias de usuario. 

**URI: /ingredient/compare**

#### Request Body
ingredient_ids.length == 2
```
{
    "ingredient_ids": [1, 2]
}
```
#### Request Response
ok: compatible
fail: incompatible
ingredient_ids.length == 2
```
{
    "ingredient_ids": [1, 2], 
    "result": "ok/fail""
    "main_reason": "Descripción de la compatibilidad entre los dos ingredientes."
}
```

# Ingredients Overview
Dado una lista de ingredientes, devuelve un 2d-slice de la forma *[]EffectType[]ProductType* que contendrá todos los productos que sean compatible con esos ingredientes, por tipo de efecto. Los productos dentro de cada efecto estarán ordenados por compatibilidad de ingredientes. Siempre tiene en cuenta las preferencias/piel del usuario.

**URI: /ingredient/overview**


Para referencia (ya ordenados desde el backend)

### 🟩 `Producto Verde`
```
ProductRank {
    prod_id: 1
    prod_name: "Producto A by Brand X",
    main_ingredient: "glycolic_acid",
    compatibility: 10
}
```

### 🟨 `Producto Amarillo`
```
ProductRank {
    prod_id: 1
    prod_name: "Producto A by Brand X",
    main_ingredient: "glycolic_acid",
    compatibility: 5
}
```

### 🟥 `Producto Rojo`
```
ProductRank {
    prod_id: 1
    prod_name: "Producto A by Brand X",
    main_ingredient: "glycolic_acid",
    compatibility: 0
}
```

### ⬛ `Producto Gris`
```
ProductRank {
    prod_id: 1
    prod_name: "Producto A by Brand X",
    main_ingredient: "glycolic_acid",
    compatibility: -1
}
```
<br/><br/>


## Caso de Uso 1
El usuario accede al modulo de Armado de Rutina por primerísima vez o deselecciona todos los checkbox o un boton de reiniciar. Los checkboxes podrían ser seleccionados automaticamente por el backend en base al tipo de piel.  \

#### **Request Body**:
```
{
    "selected_checkbox": ["humectant", "cleanser"],
    "used": []
    "ingredients": []
}
```

#### **Response Body**: los productos que son compatibles con sus preferencias/piel primero; seguido de los productos que son neutros, y por último los incompatibles dañinos, ya ordenados desde el backend.
```
{
    ok: true, 
    result: [
        "humectant": [
            ProductRank Object{},
            ProductRank Object{},
            ....,
            []ProductRank
        ],
        "cleanser": [
            ProductRank Object{},
            ProductRank Object{},
            ....,
            []ProductRank
        },
        ....,
        ....,
        ....,
        ....,
        ....,
        ....,
        ....,
        []Effect
    ]
}
```
<br/><br/>

## Caso de Uso 2
El usuario ya se encuentra en el módulo de Armado de Rutina y seleccionó dos checkbox (Humectante y Protector Solar). También ya seleccionó un producto de humectantes. 
#### **Request Body**: checkbox seleccionados
```
{
    "selected_checkbox": ["humectant", "sunscreen"],
    "used": ["humectant"],
    "ingredients": ["glycolic_acid"]
}
```

#### **Response Body**: Solo para los checkbox seleccionados se devolverán los productos que son compatibles con sus preferencias/piel primero; seguido de los productos que son neutros, y por último los incompatibles dañinos, ya ordenados desde el backend.
```
{
    ok: true, 
    result: [
        "humectant": [
            ProductRank Object{},
            ProductRank Object{},
            ....
            []ProductRank
        ],
        "sunscreen": [
            ProductRank Object{},
            ProductRank Object{},
            ....
            []ProductRank
        ]
    ]
}
```


## Caso de Uso 3
El usuario desde alguna otra página/modulo clickea un producto y desde el menú hamburguesa o menú contextual de ese producto / ingrediente selecciona que quiere armar una rutina en base a este producto / ingrediente y sus preferencias.

#### **Request Body**: checkbox seleccionados
```
{
    "selected_checkbox": ["humectant"],
    "used": ["humectant"],
    "ingredients": ["glycolic_acid", "salicylic_acid", ...]
    }
```

#### **Response Body**: Se devolverán los productos que son compatibles con sus preferencias/piel primero; seguido de los productos que son neutros, y por último los incompatibles dañinos, ya ordenados desde el backend. El backend recomendar los efectos automáticamente según el tipo de piel del usuario, e.g, para pieles secas no se recomiendan productos de Peeling.
```
{
    ok: true, 
    result: [
        "humectant": [
            ProductRank Object{},
            ProductRank Object{},
            ....
            []ProductRank
        ],
        "sunscreen": [
            ProductRank Object{},
            ProductRank Object{},
            ....
            []ProductRank
        }
        ....
        ....
        ....
        ....
        []Effect
    ]
}
```

## Caso de Uso 4
El usuario se encuentra en la visualización de compatibilidad entre dos ingredientes, dichos ingredientes son compatibles (y hasta potenciadores!!), mostrar sugerencia de Armar Rutina con estos dos ingredientes.

#### **Request Body**: 
```
{
    "selected_checkbox": ["exfoliant"],
    "used": ["exfoliant"],
    "ingredients": ["glycolic_acid", "salicylic_acid", ...]
}
```

#### **Response Body**: 
```
{
    ok: true, 
    result: [
        "exfoliant": [
            ProductRank Object{},
            ProductRank Object{},
            ....
            []ProductRank
        ],
        "sunscreen": [
            ProductRank Object{},
            ProductRank Object{},
            ....
            []ProductRank
        ]
        ....
        ....
        ....
        ....
        []Effect
    ]
}
```