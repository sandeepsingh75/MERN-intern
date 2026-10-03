// mongosh "mongodb://localhost:27017" :- connect to MongoDB in PowerShell

// CRUD stands for:

// Operation	Meaning	MongoDB Method
// C	Create	insertOne(), insertMany()
// R	Read	find(), findOne()
// U	Update	updateOne(), updateMany()
// D	Delete	deleteOne(), deleteMany()

// mongosh :- start the MongoDB  shell

// use db_name :- switch to a database (if it doesn't exist, it will be created)
// show dbs :- show all databases
// use db_name :- switch to a database (if it doesn't exist, it will be created)
// db.dropDatabase() :- delete the current database

// show collections :- show all collections in the current database
// db.createCollection("users") :- create a collection named "users" in the current database
// db.collection_name.drop() :- delete a collection named "collection_name" in the current database


// db.users.insertOne({ name: "John Doe", email: "john.doe@example.com", password: "123456" }); // Create a new user document in the "users" collection
// db.users.find(); // Read all user documents in the "users" collection
// db.users.updateOne({ name: "John Doe" }, { $set: { email: "john.doe.updated@example.com" } }); // Update a user document in the "users" collection
// db.users.deleteOne({ name: "John Doe" }); // Delete a user document from the "users" collection             


// Update:
db.users.updateOne(
    {name:"sanjay"},
    {$set:{email:"sanjaysinghrana@gmail.com"}}
)


db.users.find(
    {password:"123456"}
)


db.users.updateMany(
    {password:"123456"},
    {$set:{phone:7520954835}}
)

db.users.updateOne(
    {name:"sanjay"},
    {$inc:{age:5}}
)

db.users.deleteOne(
    {name:"kusum"}
)

db.users.deleteMany(
    {password:"123456"}
)

db.users.deleteMany({})             // delete all documents in the "users" collection

db.users.insertMany([
{
    name:"sanjay",
    email:"sanajay@gmail.com",
    age:29
},
{
    name:"sandeep",
    email:"sadeep@gmail.com",
    age:25
},
{
    name:"arshit",
    email:"arshit@gmail.com",
    age:5
},
{
    name:"sameer",
    email:"sameer@gmail.com",
    age:18
},
{
    name:"radheshyam",
    email:"radheshyam@gmail.com",
    age:45
},
{
    name:"karan",
    email:"karan@gmail.com",
    age:35
}
])

// ============================================  Comparing operators in MongoDB  =====================================================
        // $eq operator

db.users.find(
    {age:{$eq:18}}
)

db.users.find(
    {age:{$ne:18}}
)

db.users.find(
    {age:{$gt:18}}
)

db.users.find(
    {age:{$gte:18}}
)

db.users.find(
    {age:{$lt:18}}
)

db.users.find(
    {age:{$lte:18}}
)

db.users.updateOne(
    {name:"sanjay"},
    {$set:{fruits:["apple","banana","mango","grapes","orange"]}}
)

//   $in operartor 
db.users.find(
    {fruits:{$in:["banana","grapes"]}}
)

    //  $nin operator
db.users.find(
    {fruits:{$nin:["grapes"]}}
)



// ===================================  Logical Operators in MongoDB  =====================================================

// all condition must be true
db.users.find({
        $and:[
            {age:{$gt:18}},
            {fruits:{$in:["banana"]}}
        ]
    })

// mininum one condition must be true
db.users.find({
        $or:[
            {age:{$gt:18}},
            {fruits:{$in:["banana"]}}
        ]
    })

    // $not operator
    db.users.find({
        age:{$not:{$gt:18}}
    })

    // $nor operator
    db.users.find({
        $nor:[
            {age:{$gt:18}},
            {fruits:{$in:["banana"]}}
        ]
    })


    // ========================  Combining Comparison and Logical Operators in MongoDB ====================


    db.cars.find({color: "White", price: {$gt: 20000}}) // Find all cars that are white and have a price greater than 20000

    db.cars.find({
        $and:[
            {color:"White"},
            {modelYear:{$ne:2015}}
        ]
    })



    // ==================  Advance Querying ( Sorting & limiting results ) =====================

    db.students.find().sort({name:1})   // sorting in asscending order

    db.students.find().sort({name:-1})  // sorting in descending order  


    db.students.find().limit(3)  // limit the number of results to 3

    db.students.find().limit(0)  //show all data

    db.students.find().limit(30).limit(outOfLimit)  // if you will enter out of limit number in limit than it will return all data



    // =================== Combining sort and limit ================================
    
    db.students.find().sort({name:1}).limit(3)  // sorting in asscending order and limit the number of results to 3


    // ======================== Skipping Results and Pagination Concepts ========================
    db.students.find().sort({name:1}).skip(2)
    db.students.find().sort({name:1}).skip(2).limit(5)
    


    // Find Documents that contains all specified values - $all
    db.students.find({subjects: {$all: ["Math", "English"]}})

    // Find documents Based on Array Size - $size
    db.students.find({skills:{$size:1}})

    // Find Documents Where Any Array Element Matches a Condition
    db.products.insertMany([
        {name:"Laptop", rating:[4,5,3]},
        {name:"Phone", rating:[2,3,1]},
        {name:"Tablet", rating:[5,4,5]}
    ])
    db.products.find({ rating:{$gt:4}})  //Find Documents Where Any Array Element Matches a Condition
    //Return documents where any rating is greater than 4.


    // Array of objects(Sub documents)
    {
        name:"Danish",
        orders:[
            {products:"Phone", price:20000},
            {products:"laptop", price:60000}
        ]
    }

    //========================= Querying Array of Embedded Documents ==============================

//   Find Documents Based on Nested Field
// You can use dot notation to query inside objects inside arrays

db.users.find({"orders.products": "Phone"});
// return all users who ordered ordered a phone1

// Total count of documents in a collection
db.users.find({"orders.products": "Phone"}).count()

// Match Multiple Conditions in the Same Array Elements
//    $elemMatch operator allows you to match multiple conditions on the same array element.

db.products.find({
    reviews:{$elemMatch:{
        rating:{$gt:4},
        username:"Aakash"
    }}
})


// ========================== Updating Array Elements ===========================
{
    name:"Danish",
    orders:[
        {products:"Phone", price:20000},
        {products:"Laptop", price:60000}
    ]
}


// sample objects:
db.users.insertMany([
    {
        name:"sanjay",
        hobbies:["cricket","football","badminton"]
    },
    {
        name:"santosh",
        hobbies:["cricket","football","badminton"]
    }
])

// Add New Element to an Array
db.users.updateOne(
    {name:"sanjay"},
    {$push:{hobbies:"chess"}}
)


// Add Multiple New Elements to an Array
db.users.updateOne(
    {name:"santosh"},
    {$push:{hobbies:{$each:["chess","kabaddi"]}}}
)


// Add Unique Element to an Array
// $addToSet operator adds a value to an array only if it doesn't already exist in the array. If the value already exists, it won't be added again.
db.users.updateOne(
    {name:"sanjay"},
    {$addToSet:{hobbies:"cricket"}}
)


// Remove an Element from an Array
// Removes a specific element from an array. If the element exists multiple times, all occurrences will be removed.
db.users.updateOne(
    {name:"sanjay"},
    {$pull:{hobbies:"football"}}
)


// Remove multiple elements from an array
// Removes all occurrences of the specified values from an array. If any of the values exist multiple times, all occurrences will be removed.
db.users.updateMany(
    {name:"santosh"},
    {$pullAll:{hobbies:["cricket","badminton"]}}
)


// ================== Update an Elemnt Matching a Condition (Change in Array of Object ) ============
// Positional operator ($) allows you to update the first array element that matches a specified condition.
object:
{
name:"Danish",
orders:[
    {products:"Phone", price:20000},
    {products:"Laptop", price:60000}
]
}

db.users.updateOne(
    {"orders.products":"Phone"},
    {$set:{"orders.$.price":25000}}
)


// ====================== Projection in MongoDB =========================
// Show only Selected Fields
db.users.find({},{name:1, email:1, _id:0})  // Show only the name and email fields, and exclude the _id field from the results.


// ===================== Aggregation in MongoDB =========================
// Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline.
db.products.aggregate([
    {$match:{rating:{$gt:4}}},  // Stage 1: Filter documents with rating greater than 4
])

db.products.aggregate([
    {$match:{ productName: 'Mechanical Keyboard'}},  // Stage 1: Filter documents with rating greater than 4
])

db.products.aggregate([
    {$match:{ "reviews.rating": {$gt: 4}, price:{$gt:3000} }},  // Stage 1: Filter documents with rating greater than 4
])

db.products.aggregate([
    {$match:{ $and:[
        {"reviews.rating": {$gt: 4}},
        {price:{$gt:3000}}
    ]}}
])


// $exists operator in MongoDB is used to check whether a field exists or not in the documents of a collection. It can be used in queries to filter documents based on the presence or absence of a specific field.
db.products.aggregate([
    {$match:{price:{$exists:true}}}
])

// $regex operator in MongoDB is used to perform pattern matching on string fields. It allows you to search for documents that match a specific regular expression pattern.
db.products.aggregate([
    {$match:{productName:{$regex:/Keyboard/}}}
])


//  $project operator in MongoDB is used to reshape the documents in the aggregation pipeline. It allows you to include, exclude, or rename fields in the output documents.
// get specific fields from the documents and exclude the _id field from the output.
db.products.aggregate([
    {$project:{productName:1, price:1, _id:0}}
])

// rename a field in the output documents. In this case, we are renaming the "price" field to "productPrice" while keeping the "productName" field and excluding the "_id" field.
db.products.aggregate([
    {$project:{productName:1, productPrice:"$price", _id:0 }}
])

// Add new field to the output documents. In this case, we are adding a new field called "discountedPrice" which is calculated by multiplying the "price" field by 0.9 (10% discount).

db.products.aggregate([
    {$match:{price:{$gt:3000}}},
    {$project:{productName:1, productPrice:"$price", totalPrice:{$multiply:["$price", "$quantity"]}, _id:0 }}
])  

// $concat operator in MongoDB is used to concatenate multiple strings together. It can be used in the aggregation pipeline to create new string fields by combining existing string fields or literal strings.

reviews: [
  { username: "Aakash", comment: "Good", rating: 4 },
  { username: "Rahul", comment: "Nice", rating: 5 }
]

db.products.aggregate([
  {
    $match: {
      price: { $gt: 3000 }
    }
  },
  {
    $project: {
      productName: 1,
      productPrice: "$price",
      reviews: 1,
      greeting: {
        $concat: [
          "Welcome to ",
          { $arrayElemAt: ["$reviews.username", 0] }
        ]
      }
    }
  }
])      


// ===================  $group stage ==================
// $group stage in MongoDB's aggregation framework is used to group documents together based on a specified field or expression. It allows you to perform various aggregation operations on the grouped data, such as calculating sums, averages, counts, and more.

//$sum operator in MongoDB's aggregation framework is used to calculate the sum of numeric values for a specified field or expression within a group of documents. It is commonly used in conjunction with the $group stage to aggregate data based on certain criteria.
db.items.aggregate([
  {$group: {
      _id: "$category",
      totalPrice:{$sum:'$price'},
      totalQuantity:{$sum:'$quantity'}
  }
}
])      

// $max and $min operators in MongoDB's aggregation framework are used to find the maximum and minimum values for a specified field or expression within a group of documents. They are commonly used in conjunction with the $group stage to aggregate data based on certain criteria.

db.items.aggregate([
    {$group:{
        _id:"$category",
        maxPrice:{$max:'$price'},
        minPrice:{$min:'$price'}
    }}
])

// $first and $last operators 

db.items.aggregate([
    {$sort:{price:1}},
    {
        $group:{
            _id:"$category",
            firstPrice:{$first:"$price"},
            lastPrice:{$last:"$price"}
        }
    }
])


//  $sum for counting documents (Total orders per Category)

db.items.aggregate([
    {
        $group:{
            _id:"$category",
            totalOrders:{$sum:1}
        }
    }
])


//  $push - Collect All Prices in an array

db.items.aggregate([
    {
        $group:{
            _id:"category",
            allPrices:{$push:"$price"}
        }
    }
])