# batch-3-assignment-2

### E-commerce Product server


### To run Locally : 

For starting the server:  `npm run start:dev`
## Some important cmds to run:

-  To start for production:  `npm run start:prod`
- For compiling ts into js:  `npm run build`
- For checking Errors in code: `npm run lint`
- For fixing formate of  code: `npm run prettier:fix`
  ## For checking easily:
  (You can follow [sampleData.json](./sampleData.json)

## Main Section (50 Marks):


## Product Management

### **1. Create a New Product**

- **Endpoint**: **`/api/products`**
- **Method:** `POST`
- **Sample Request Body**:
    
    ```json
   {
    "name": "Redmi Note 12 Pro",
    "description": "The Redmi Note 12 Pro offers an exceptional balance of performance and value, featuring a powerful processor, high-quality camera, and long battery life.",
    "price": 499,
    "category": "Electronics",
    "tags": ["smartphone", "Redmi", "Android"],
    "variants": [
        {
            "type": "Color",
            "value": "Frosted Blue"
        },
        {
            "type": "Color",
            "value": "Phantom Black"
        },
        {
            "type": "Storage Capacity",
            "value": "128GB"
        },
        {
            "type": "Storage Capacity",
            "value": "256GB"
        }
    ],
    "inventory": {
        "quantity": 222,
        "inStock": true
    }


    ```
    
- **Sample Response**:
- **Deviations from the expected ouput: Dot some additional _id invarient and inventory field**
    
    ```json
  {
    "success": true,
    "message": "Product is created successfully.",
    "data": {
        "name": "Redmi Note 12 Pro",
        "description": "The Redmi Note 12 Pro offers an exceptional balance of performance and value, featuring a powerful processor, high-quality camera, and long battery life.",
        "price": 499,
        "category": "Electronics",
        "tags": [
            "smartphone",
            "Redmi",
            "Android"
        ],
        "variants": [
            {
                "type": "Color",
                "value": "Frosted Blue",
                "_id": "6650e4b5017323d611c83259"
            },
            {
                "type": "Color",
                "value": "Phantom Black",
                "_id": "6650e4b5017323d611c8325a"
            },
            {
                "type": "Storage Capacity",
                "value": "128GB",
                "_id": "6650e4b5017323d611c8325b"
            },
            {
                "type": "Storage Capacity",
                "value": "256GB",
                "_id": "6650e4b5017323d611c8325c"
            }
        ],
        "inventory": {
            "quantity": 222,
            "inStock": true,
            "_id": "6650e4b5017323d611c8325d"
        },
        "_id": "6650e4b5017323d611c83258",
        "__v": 0
    }


    ```
    

### **2. Retrieve a List of All Products**

- **Endpoint**: **`/api/products`**
- **Method:** `GET`
- **Sample Response**:
- **Deviations from the expected ouput: Got some additional _id invarient and inventory field**
    
    ```json
  {
    "success": true,
    "message": "Product retrived successfully",
    "data": [
        {
            "_id": "665084e0a5ec0b14aac1589c",
            "name": "Oppo Find X5 Pro",
            "description": "The Oppo Find X5 Pro is a high-performance smartphone with advanced features and a sleek design.",
            "price": 899,
            "category": "Electronics",
            "tags": [
                "smartphone",
                "Oppo",
                "Android"
            ],
            "variants": [
                {
                    "type": "Color",
                    "value": "Ceramic White",
                    "_id": "665084e0a5ec0b14aac1589d"
                },
                {
                    "type": "Color",
                    "value": "Glaze Black",
                    "_id": "665084e0a5ec0b14aac1589e"
                },
                {
                    "type": "Storage Capacity",
                    "value": "256GB",
                    "_id": "665084e0a5ec0b14aac1589f"
                },
                {
                    "type": "Storage Capacity",
                    "value": "512GB",
                    "_id": "665084e0a5ec0b14aac158a0"
                }
            ],
            "inventory": {
                "quantity": 87,
                "inStock": true,
                "_id": "665084e0a5ec0b14aac158a1"
            },
            "__v": 0
        },
        {
            "_id": "66508589a5ec0b14aac158a3",
            "name": "Samsung Galaxy S24",
            "description": "The Samsung Galaxy S24 is a high-end smartphone with powerful specs and a cutting-edge design.",
            "price": 1000,
            "category": "Electronics",
            "tags": [
                "smartphone",
                "Samsung",
                "Android"
            ],
            "variants": [
                {
                    "type": "Color",
                    "value": "Black",
                    "_id": "66508589a5ec0b14aac158a4"
                },
                {
                    "type": "Color",
                    "value": "White",
                    "_id": "66508589a5ec0b14aac158a5"
                },
                {
                    "type": "Storage Capacity",
                    "value": "128GB",
                    "_id": "66508589a5ec0b14aac158a6"
                },
                {
                    "type": "Storage Capacity",
                    "value": "256GB",
                    "_id": "66508589a5ec0b14aac158a7"
                },
                {
                    "type": "Model",
                    "value": "S24",
                    "_id": "66508589a5ec0b14aac158a8"
                },
                {
                    "type": "Model",
                    "value": "S24 Ultra",
                    "_id": "66508589a5ec0b14aac158a9"
                }
            ],
            "inventory": {
                "quantity": 0,
                "inStock": false,
                "_id": "66508589a5ec0b14aac158aa"
            },
            "__v": 0
        }, 
    ]
    }
        //rest of the data is in sample.json file

    ```
    

### **3. Retrieve a Specific Product by ID**

- **Endpoint**: **`/api/products/665084e0a5ec0b14aac1589c`**
- **Method: `GET`**
- **Sample Response**:
    
    ```json
    {
    "success": true,
    "message": "Product is got successfully.",
    "data": {
        "_id": "665084e0a5ec0b14aac1589c",
        "name": "Oppo Find X5 Pro",
        "description": "The Oppo Find X5 Pro is a high-performance smartphone with advanced features and a sleek design.",
        "price": 899,
        "category": "Electronics",
        "tags": [
            "smartphone",
            "Oppo",
            "Android"
        ],
        "variants": [
            {
                "type": "Color",
                "value": "Ceramic White",
                "_id": "665084e0a5ec0b14aac1589d"
            },
            {
                "type": "Color",
                "value": "Glaze Black",
                "_id": "665084e0a5ec0b14aac1589e"
            },
            {
                "type": "Storage Capacity",
                "value": "256GB",
                "_id": "665084e0a5ec0b14aac1589f"
            },
            {
                "type": "Storage Capacity",
                "value": "512GB",
                "_id": "665084e0a5ec0b14aac158a0"
            }
        ],
        "inventory": {
            "quantity": 87,
            "inStock": true,
            "_id": "665084e0a5ec0b14aac158a1"
        },
        "__v": 0
    }
    ```
    

### **4. Update Product Information**

- **Endpoint**: **`/api/products/665084e0a5ec0b14aac1589c`**
- **Method: `PUT`**
- **Sample Request Body**:
- **NB: the quantity is updated from 87 to 100 in the server**
    
    ```json
   {
        "_id": "665084e0a5ec0b14aac1589c",
        "name": "Oppo Find X5 Pro",
        "description": "The Oppo Find X5 Pro is a high-performance smartphone with advanced features and a sleek design.",
        "price": 899,
        "category": "Electronics",
        "tags": [
            "smartphone",
            "Oppo",
            "Android"
        ],
        "variants": [
            {
                "type": "Color",
                "value": "Ceramic White",
                "_id": "665084e0a5ec0b14aac1589d"
            },
            {
                "type": "Color",
                "value": "Glaze Black",
                "_id": "665084e0a5ec0b14aac1589e"
            },
            {
                "type": "Storage Capacity",
                "value": "256GB",
                "_id": "665084e0a5ec0b14aac1589f"
            },
            {
                "type": "Storage Capacity",
                "value": "512GB",
                "_id": "665084e0a5ec0b14aac158a0"
            }
        ],
        "inventory": {
            "quantity": 100,
            "inStock": true,
            "_id": "665084e0a5ec0b14aac158a1"
        },
        "__v": 0
    }
    ```
    
- **Sample Response**:
    
    ```json
  {
        "_id": "665084e0a5ec0b14aac1589c",
        "name": "Oppo Find X5 Pro",
        "description": "The Oppo Find X5 Pro is a high-performance smartphone with advanced features and a sleek design.",
        "price": 899,
        "category": "Electronics",
        "tags": [
            "smartphone",
            "Oppo",
            "Android"
        ],
        "variants": [
            {
                "type": "Color",
                "value": "Ceramic White",
                "_id": "665084e0a5ec0b14aac1589d"
            },
            {
                "type": "Color",
                "value": "Glaze Black",
                "_id": "665084e0a5ec0b14aac1589e"
            },
            {
                "type": "Storage Capacity",
                "value": "256GB",
                "_id": "665084e0a5ec0b14aac1589f"
            },
            {
                "type": "Storage Capacity",
                "value": "512GB",
                "_id": "665084e0a5ec0b14aac158a0"
            }
        ],
        "inventory": {
            "quantity": 100,
            "inStock": true,
            "_id": "665084e0a5ec0b14aac158a1"
        },
        "__v": 0
    }
    ```
    

### **5. Delete a Product**

- **Endpoint**: **`/api/products/66508589a5ec0b14aac158a3`**
- **Method: `DELETE`**
- **Sample Response**:
    
    ```json
    {
    "success": true,
    "message": "Product deleted successfully!",
    "data": {
        "acknowledged": true,
        "deletedCount": 1
    }

     
    // The product  is  deleted from the database.
    ```
    

### **6. Search a product**

- **Endpoint**: `api/products?searchTerm=oppo`
- **Method: GET**
- **Sample Response**:

```jsx
{
    "success": true,
    "message": "Product retrived successfully",
    "data": [
        {
            "_id": "665084e0a5ec0b14aac1589c",
            "name": "Oppo Find X5 Pro",
            "description": "The Oppo Find X5 Pro is a high-performance smartphone with advanced features and a sleek design.",
            "price": 899,
            "category": "Electronics",
            "tags": [
                "smartphone",
                "Oppo",
                "Android"
            ],
            "variants": [
                {
                    "type": "Color",
                    "value": "Ceramic White",
                    "_id": "665084e0a5ec0b14aac1589d"
                },
                {
                    "type": "Color",
                    "value": "Glaze Black",
                    "_id": "665084e0a5ec0b14aac1589e"
                },
                {
                    "type": "Storage Capacity",
                    "value": "256GB",
                    "_id": "665084e0a5ec0b14aac1589f"
                },
                {
                    "type": "Storage Capacity",
                    "value": "512GB",
                    "_id": "665084e0a5ec0b14aac158a0"
                }
            ],
            "inventory": {
                "quantity": 100,
                "inStock": true,
                "_id": "665084e0a5ec0b14aac158a1"
            },
            "__v": 0
        }
    ]
}
```

**For invalid search query:(not in the database)**`api/products?searchTerm=samsung`
```jsx
    {
    "success": true,
    "message": "This Product is not available"
}
```

## Order Management

### **Order Management API Endpoints**

### **1.Create a New Order**

- **Endpoint**: **`/api/orders`**
- **Method: `POST`**
- **Request Body**:
- **Case-1: when the id matches with the product collection:**
    
    ```json
    {
    "email": "jouyuvraj@gmail.com",
    "productId": "665084e0a5ec0b14aac1589c",
    "price": 999,
    "quantity": 27
  }
```
    
- **Response**:
    
    ```json
   {
    "success": true,
    "message": "Order created successfully!",
    "data": {
        "email": "jouyuvraj@gmail.com",
        "productId": "665084e0a5ec0b14aac1589c",
        "price": 999,
        "quantity": 27,
        "_id": "6650efbd017323d611c832c4",
        "__v": 0
    }
    ```
    - **Case-2: when the id doesn't; match with the product collection:**
      ```jsx
      {
       "success": false,
        "message": "Order not found"
      }
      ``` 
    

### **2.Retrieve All Orders**

- **Endpoint**: **`/api/orders`**
- **Method: `GET`**
- **Sample Response**:
    
    ```json
    {
    "success": true,
    "message": "Orders fetched successfully!",
    "data": [
        {
            "_id": "6650efbd017323d611c832c4",
            "email": "jouyuvraj@gmail.com",
            "productId": "665084e0a5ec0b14aac1589c",
            "price": 999,
            "quantity": 27,
            "__v": 0
        }
    ]
    //there are more orders
    ```
    

### **3. Retrieve Orders by User Email**

- **Endpoint**: `/api/orders?email=level2@programming-hero.com`
- **Method:** `GET`
- **Sample Response**:
    
    ```json
   {
    "success": true,
    "message": "Order created successfully!",
    "data": {
        "email": "level2@programming-hero.com",
        "productId": "665085c5a5ec0b14aac158ac",
        "price": 999,
        "quantity": 27,
        "_id": "6650f0bd017323d611c832ce",
        "__v": 0
    }
  }
    ```
    

## **Bonus Section (10 Marks):**

**Inventory Update**: 
**Case-1: When a order is placed in an order collection the quantity of the product reduces according to the quantity of the order**


**Case-2: If the Order quantity is bigger then the product.inventory.stock then :**
```jsx
{
    "success": false,
    "message": "Insufficient quantity available in inventory"
}

```

**Case-3: When the Id of the order does not match with the product**

```jsx
{
 "success": false,
 "message": "Order not found"
}
```

- **When the route does not match any of the defined routes:**

```jsx
{
 "success": false,
 "message": "Route not found"
}
```

### **Validation with Zod**





