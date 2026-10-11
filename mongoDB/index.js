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


// ============ $push - Collect All Prices in an array  ==========================

db.items.aggregate([
    {
        $group:{
            _id:"category",
            allPrices:{$push:"$price"}
        }
    }
])


// ==================== $lookup im mongodb ====================
// users collection
[
  {
    _id: 1,
    name: "Sandeep",
    email: "sandeep@gmail.com"
  },
  {
    _id: 2,
    name: "Aakash",
    email: "aakash@gmail.com"
  },
  {
    _id: 3,
    name: "Priya",
    email: "priya@gmail.com"
  }
]


// orders collection 
[
  {
    _id: 101,
    userId: 1,
    product: "Laptop",
    price: 50000
  },
  {
    _id: 102,
    userId: 1,
    product: "Mouse",
    price: 1000
  },
  {
    _id: 103,
    userId: 2,
    product: "Keyboard",
    price: 2000
  }
]
/*
Here:

users._id
     ↓
 orders.userId

 These two fields create the relationship. */

db.users.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "userId",
      as: "orders"
    }
  }
])

/*
Meaning of each property
$lookup: {
    from: "orders",
    localField: "_id",
    foreignField: "userId",
    as: "orders"
}
Property	Meaning
from	Collection from which we want data
localField	Field of current collection
foreignField	Matching field of from collection
as	Name of the new array

So:

users._id == orders.userId
*/



// ======================== index in mongodb ===============================
/*
2. Index Create करना

email पर index बनाने के लिए:

db.users.createIndex({ email: 1 })

यहाँ:

email → जिस field पर index बनाना है
1 → Ascending index

अब MongoDB email को efficiently search कर सकता है।

3. Descending Index
db.users.createIndex({ age: -1 })

यहाँ:

1 = Ascending
-1 = Descending
*/
// 4. Index देखना

// Collection के सभी indexes देखने के लिए:

db.users.getIndexes()

// 5. Index की मदद से Query

// अब:

db.users.find({ email: "rahul@gmail.com" })

// इस query में MongoDB email_1 index का उपयोग कर सकता है।



// $eq operator in mongodb aggregation
db.items.aggregate(
    {
        $project:{
            result:{
               $eq: ["$price",3500]
            }
        }
    }
)


// ================== MongoDB Index ====================================
/*
Index in mongodb explain with example
Index in MongoDB Explained with Examples
1. What is an Index in MongoDB?
Definition: An index in MongoDB is a special data structure that helps MongoDB find documents faster without scanning every document in a collection.

Think of an index like the index page of a book. If you want to find a particular topic, you check the index instead of reading every page.

Hindi explanation: MongoDB mein index ek special data structure hota hai jo database mein data ko jaldi search karne mein help karta hai.

2. Example without an index
Suppose we have a users collection containing these documents:

db.users.insertMany([
  { name: "Amit", age: 25, city: "Delhi" },
  { name: "Rahul", age: 28, city: "Mumbai" },
  { name: "Sandeep", age: 27, city: "Khatima" },
  { name: "Priya", age: 24, city: "Delhi" },
  { name: "Neha", age: 30, city: "Dehradun" }
]);

Now, search for a user whose name is "Sandeep".

db.users.find({ name: "Sandeep" });

Without an index on name, MongoDB may need to scan every document to find the matching user. This is called a collection scan (COLLSCAN).

3. Create an index in MongoDB
To make searching by name faster, create an index:

db.users.createIndex({ name: 1 });

Here:

createIndex() creates an index.

name is the field on which the index is created.

1 means ascending order.

-1 means descending order.

Now search again:

db.users.find({ name: "Sandeep" });

MongoDB can use the index to locate the matching document more efficiently.

How an index works
Query: Find name = "Sandeep"

Index on name

Locates the matching index entry

Matching document returned

4. Types of indexes in MongoDB
Here are the important index types you should know for MERN stack interviews.

Index type

Example

Purpose

Single-field

{ age: 1 }

Search using one field

Compound

{ city: 1, age: -1 }

Search using multiple fields

Multikey

{ skills: 1 }

Index an array field

Unique

{ email: 1 }

Prevent duplicate indexed values

Text

{ description: "text" }

Search text content

TTL

{ createdAt: 1 }

Automatically expire documents after a configured time

Hashed

{ userId: "hashed" }

Support hashed-shard key use cases

A. Single-field index
Creates an index on one field.

db.users.createIndex({ age: 1 });

Query:

db.users.find({ age: 27 });

Useful when frequently searching or sorting by age.

B. Compound index
Creates an index on multiple fields.

db.users.createIndex({ city: 1, age: -1 });

This index is especially useful for queries such as:

db.users.find({ city: "Delhi" })
        .sort({ age: -1 });

Important: Compound indexes follow the field order. An index on { city: 1, age: -1 } generally supports queries using city alone and queries using both city and age, but it is not equally effective for queries using only age.

C. Unique index
Prevents duplicate values in the indexed field.

db.users.createIndex(
  { email: 1 },
  { unique: true }
);

Now MongoDB will reject a second document with the same email value.

This is useful for registration systems where each email must be unique.

D. Multikey index
Used when the indexed field contains an array.

Example document:

{
  name: "Sandeep",
  skills: ["React", "Node.js", "MongoDB"]
}

Create the index:

db.users.createIndex({ skills: 1 });

Search:

db.users.find({ skills: "React" });

MongoDB can use the multikey index to search for documents containing "React" in their skills array.

5. How to check whether an index is being used
Use explain() to inspect the query execution plan.

db.users.find({ name: "Sandeep" })
        .explain("executionStats");

Look for these stages:

IXSCAN — MongoDB scans an index.

COLLSCAN — MongoDB scans the collection.

You can also examine totalDocsExamined and executionTimeMillis to understand query performance. Results depend on the data, indexes, and query planner.

6. Important index commands
Task

MongoDB command

Create index

db.users.createIndex({ age: 1 })

View all indexes

db.users.getIndexes()

Drop a specific index

db.users.dropIndex("age_1")

Drop all indexes

db.users.dropIndexes()

Create descending index

db.users.createIndex({ age: -1 })

Note: MongoDB automatically creates a unique index on _id. You cannot drop that index while keeping the collection.

7. Advantages and disadvantages
Advantages

Faster searches for suitable queries.

Can improve sorting and filtering.

Unique indexes help enforce uniqueness.

Can reduce the number of documents examined.

Disadvantages

Indexes consume additional disk space and memory.

Inserts, updates, and deletes can become slower because indexes must also be maintained.

Too many indexes can hurt write performance.

Professional tip: Create indexes on fields frequently used in queries, filters, and sorts. Avoid creating an index on every field without measuring the benefit.

8. Interview question
Q: What is an index in MongoDB, and why do we use it?

Answer: An index in MongoDB is a data structure that improves query performance by allowing MongoDB to locate documents more efficiently. It reduces the need for full collection scans, but it requires extra storage and maintenance during write operations.

Practice task: Try these commands in MongoDB Shell (mongosh):

Create an index on age.

Display all indexes.

Search for users with age greater than 25.

Use explain("executionStats") to inspect the query plan.

Drop the index you created.

*/
/*

$lookup in mongoDB with example
$lookup in MongoDB with Example
In MongoDB, the $lookup stage is used to join two collections based on a matching field. It is similar to a LEFT OUTER JOIN in SQL.

For example, suppose we have two collections:

users — stores user details.

orders — stores orders placed by users.

We can use $lookup to get each user's details along with their orders.

1. Syntax of $lookup
{
  $lookup: {
    from: "collection2",
    localField: "fieldInCurrentCollection",
    foreignField: "fieldInOtherCollection",
    as: "result"
  }
}

Explanation:

Property

Meaning

from

Name of the collection to join

localField

Field from the current collection

foreignField

Field from the other collection

as

Name of the new array that stores matching documents

2. Example: Users and Orders
Collection 1: users

db.users.insertMany([
  { _id: 1, name: "Sandeep", city: "Khatima" },
  { _id: 2, name: "Rahul", city: "Delhi" },
  { _id: 3, name: "Amit", city: "Dehradun" }
])

Collection 2: orders

db.orders.insertMany([
  { _id: 101, userId: 1, product: "Laptop", price: 50000 },
  { _id: 102, userId: 1, product: "Mouse", price: 500 },
  { _id: 103, userId: 2, product: "Keyboard", price: 1500 }
])

Here, users._id matches orders.userId.

3. Use $lookup to join both collections
Run this query in MongoDB Shell (mongosh):

db.users.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "userId",
      as: "userOrders"
    }
  }
])

Output
User 1

Sandeep

City: Khatima

userOrders array

Laptop — ₹50,000

Mouse — ₹500

User 2

Rahul

City: Delhi

userOrders array

- Keyboard — ₹1,500

User 3

Amit

City: Dehradun

userOrders: [] — no matching orders

Notice that the matching orders are stored in the userOrders array. Amit is still included because $lookup preserves documents from the input collection even when no matching document exists.

4. $lookup with $unwind
Sometimes you want each order to appear as a separate document instead of an array.

db.users.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "userId",
      as: "userOrders"
    }
  },
  {
    $unwind: "$userOrders"
  }
])

Now Sandeep appears twice: once for the Laptop and once for the Mouse. Rahul appears once, and Amit disappears because he has no matching orders.

To keep users who have no orders, use:

{
  $unwind: {
    path: "$userOrders",
    preserveNullAndEmptyArrays: true
  }
}

5. $lookup with $match and $project
You can combine $lookup with other aggregation stages to filter and format the result.

db.users.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "userId",
      as: "userOrders"
    }
  },
  {
    $match: {
      "userOrders.price": { $gt: 1000 }
    }
  },
  {
    $project: {
      _id: 0,
      name: 1,
      city: 1,
      userOrders: 1
    }
  }
])

This returns users who have at least one order with a price greater than ₹1,000.

6. $lookup vs. Mongoose populate()
$lookup

populate()

MongoDB aggregation stage

Mongoose method

Used inside aggregate()

Commonly used with find()

Joins documents from collections

Resolves references using Mongoose schemas

Useful for complex aggregation and reporting

Convenient for normal application queries

Interview answer: $lookup is an aggregation stage in MongoDB that performs a left outer join between two collections. It matches documents using localField and foreignField and stores the matching documents in an array specified by as.
*/





