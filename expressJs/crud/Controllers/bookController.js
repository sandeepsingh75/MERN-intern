const Book = require("../models/bookModel");


const createBook = async (req, res)=>{
    try{
        const {title, writer, year} = req.body;
        const response = await Book.insertOne({title, writer, year});
        console.log("response", response)
        if(!response){
        return res.status(400).json({
            success:false,
            message: "Invalid data."
        })    
        }

        res.status(201).json({
            success:true,
            message: "data created successfully",
            data: response   
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message: error.message
        })
    }
}

const getBooks = async (req, res)=>{
    try{
        const response = await Book.find();
     if(!response){
        return res.status(400).json({
            success:false,
            message: "Invalid data."
        })    
        }
        res.status(200).json({
            success:true,
            message: "data fetched",
            data: response   
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message: error.message
        })
    }
}

const getBook = async (req, res)=>{
    try{
        const response = await Book.findById(req.params.id);
     if(!response){
        return res.status(400).json({
            success:false,
            message: "Invalid data."
        })    
        }
        res.status(200).json({
            success:true,
            message: "data fetched",
            data: response   
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message: error.message
        })
    }
}

const replaceBook = async (req, res)=>{
    // try {
    //     const { id } = req.params;
    //     const { title, writer, year } = req.body;
    //     const replacedBook = await Book.findOneAndReplace(
    //         { _id: id },
    //         {
    //             title,
    //             writer,
    //             year
    //         },
    //         {
    //             returnDocument: "after",
    //             runValidators: true
    //         }
    //     );

    //     if (!replacedBook) {
    //         return res.status(404).json({
    //             message: "Book not found"
    //         });
    //     }

    //     res.status(200).json({
    //         message: "Book replaced successfully",
    //         data: replacedBook
    //     });

    // } catch (error) {
    //     res.status(500).json({
    //         message: "Server error",
    //         error: error.message
    //     });
    // }
    try{
        const response = await Book.findOneAndReplace({_id: req.params.id}, req.body,
            {
            // new:true,
            returnDocument:"after",
            // runValidators:true
        });
       if(!response){
        return res.status(400).json({
            success:false,
            message: "Invalid data."
        })    
        }
        res.status(200).json({
            success:true,
            message: "data updated successfully",
            data: response   
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message: error.message
        })
    }
}

const updateBook = async (req, res)=>{
    try{
        const response = await Book.findByIdAndUpdate(req.params.id,req.body, 
            {
            // new:true,
            returnDocument:"after",
            runValidators:true
        });
       if(!response){
        return res.status(400).json({
            success:false,
            message: "Invalid data."
        })    
        }
        res.status(200).json({
            success:true,
            message: "data updated successfully",
            data: response   
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message: error.message
        })
    }
}

const deleteBook = async (req, res)=>{
    try{
        const response = await Book.findByIdAndDelete(req.params.id, 
            {
            // new:true,
            returnDocument:"after",
            runValidators:true
        }
        );
       if(!response){
        return res.status(400).json({
            success:false,
            message: "Invalid data."
        })    
        }
        res.status(200).json({
            success:true,
            message: "data deleted successfully",
            data: response   
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message: error.message
        })
    }
}

module.exports = {createBook,getBooks,getBook,replaceBook, updateBook, deleteBook };