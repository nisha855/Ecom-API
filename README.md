Ecom-API

Api for CRUD operation

* Create products               (api/v1/product/create)
* Get all products              (api/v1/product/all)
* Update existing products      (api/v1/product/update/:id)
* Delete products               (api/v1/product/create/delete/:id)

Schema:-

    name: {
        type: String,
        required: true

    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    quantity: {
        type: Number,
        default: 1
    }

Condition:-

-> Name cannot be empty

-> Price should be greater than 0

-> Quantity cannot be negative

-> Description cannot be empty


        "errors": [
        {
            "value": "",
            "msg": "Name is Empty",
            "param": "name",
            "location": "body"
        },
        {
            "value": -1,
            "msg": "Quantity cannot be negative",
            "param": "quantity",
            "location": "body"
        },
        {
            "value": 0,
            "msg": "Price should be greater than 0",
            "param": "price",
            "location": "body"
        },
        {
            "value": "",
            "msg": "Description empty",
            "param": "description",
            "location": "body"
        }
    ]
   



