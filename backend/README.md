# Ingredients Overview
Dado una lista de ingredientes, devuelve un 2d-slice de la forma *[]EffectType[]ProductType* que contendrá todos los productos que sean compatible con esos ingredientes, por tipo de efecto. Los productos dentro de cada efecto estarán ordenados por compatibilidad de ingredientes. Siempre tiene en cuenta las preferencias/piel del usuario.

## **URI**: /ingredient/overview


Para referencia (ya ordenados desde el backend)

<<<<<<< HEAD
### 🟩 `Producto Verde`
=======
### <font color="green">Producto Verde </font>
>>>>>>> new iteration
```
ProductRank {
    name: "Producto A by Brand X",
    main_ingredient: "glycolic_acid",
    compatibility: 10
}
```

<<<<<<< HEAD
### 🟨 `Producto Amarillo`
=======
### <font color="yellow">Producto Amarillo </font>
>>>>>>> new iteration
```
ProductRank {
    name: "Producto A by Brand X",
    main_ingredient: "glycolic_acid",
    compatibility: 5
}
```

<<<<<<< HEAD
### 🟥 `Producto Rojo`
=======
### <font color="red">Producto Rojo </font>
>>>>>>> new iteration
```
ProductRank {
    name: "Producto A by Brand X",
    main_ingredient: "glycolic_acid",
    compatibility: 0
}
```

<<<<<<< HEAD
### ⬛ `Producto Gris`
=======
### <font color="gray">Producto Gris </font>
>>>>>>> new iteration
```
ProductRank {
    name: "Producto A by Brand X",
    main_ingredient: "glycolic_acid",
    compatibility: -1
}
```
<br/><br/>


## Caso de Uso 1
El usuario accede al modulo de Armado de Rutina por primerísima vez o deselecciona todos los checkbox o un boton de reiniciar. Los checkboxes podrían ser seleccionados automaticamente por el backend en base al tipo de piel.  \

### **Request Body**:
```
{
<<<<<<< HEAD
    "selected_checkbox": ["humectant", "cleanser"],
=======
	"selected_checkbox": ["humectant", "cleanser"],
>>>>>>> new iteration
    "ingredients": []
}
```

### **Response Body**: los productos que son compatibles con sus preferencias/piel primero; seguido de los productos que son neutros, y por último los incompatibles dañinos, ya ordenados desde el backend.
```
{
<<<<<<< HEAD
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
=======
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
>>>>>>> new iteration
        ....,
        ....,
        ....,
        ....,
        ....,
        ....,
        ....,
        []Effect
<<<<<<< HEAD
    ]
=======
	]
>>>>>>> new iteration
}
```
<br/><br/>

## Caso de Uso 2
El usuario ya se encuentra en el módulo de Armado de Rutina y seleccionó dos checkbox (Humectante y Protector Solar). También ya seleccionó un producto de humectantes. 
### **Request Body**: checkbox seleccionados
```
{
<<<<<<< HEAD
    "selected_checkbox": ["humectant", "sunscreen"],
=======
	"selected_checkbox": ["humectant", "sunscreen"],
>>>>>>> new iteration
    "used": ["humectant"],
    "ingredients": ["glycolic_acid"]
}
```

### **Response Body**: Solo para los checkbox seleccionados se devolverán los productos que son compatibles con sus preferencias/piel primero; seguido de los productos que son neutros, y por último los incompatibles dañinos, ya ordenados desde el backend.
```
{
<<<<<<< HEAD
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
=======
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
	]
>>>>>>> new iteration
}
```


## Caso de Uso 3
El usuario desde alguna otra página/modulo clickea un producto y desde el menú hamburguesa o menú contextual de ese producto / ingrediente selecciona que quiere armar una rutina en base a este producto / ingrediente y sus preferencias.

### **Request Body**: checkbox seleccionados
```
{
<<<<<<< HEAD
    "selected_checkbox": ["humectant"],
    "used": ["humectant"],
    "ingredients": ["glycolic_acid", "salicylic_acid", ...]
    }
=======
	"selected_checkbox": ["humectant"],
    "used": ["humectant"],
    "ingredients": ["glycolic_acid", "salicylic_acid", ...]
}
>>>>>>> new iteration
```

### **Response Body**: Se devolverán los productos que son compatibles con sus preferencias/piel primero; seguido de los productos que son neutros, y por último los incompatibles dañinos, ya ordenados desde el backend. El backend recomendar los efectos automáticamente según el tipo de piel del usuario, e.g, para pieles secas no se recomiendan productos de Peeling.
```
{
<<<<<<< HEAD
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
=======
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
>>>>>>> new iteration
        ....
        ....
        ....
        ....
        []Effect
<<<<<<< HEAD
    ]
=======
	]
>>>>>>> new iteration
}
```

## Caso de Uso 4
El usuario se encuentra en la visualización de compatibilidad entre dos ingredientes, dichos ingredientes son compatibles (y hasta potenciadores!!), mostrar sugerencia de Armar Rutina con estos dos ingredientes.

### **Request Body**: 
```
{
<<<<<<< HEAD
    "selected_checkbox": ["exfoliant"],
=======
	"selected_checkbox": ["exfoliant"],
>>>>>>> new iteration
    "used": ["exfoliant"],
    "ingredients": ["glycolic_acid", "salicylic_acid", ...]
}
```

### **Response Body**: 
```
{
<<<<<<< HEAD
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
=======
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
		}
>>>>>>> new iteration
        ....
        ....
        ....
        ....
        []Effect
<<<<<<< HEAD
    ]
=======
	]
>>>>>>> new iteration
}
```