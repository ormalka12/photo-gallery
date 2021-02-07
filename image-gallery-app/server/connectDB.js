const mongoose = require('mongoose');
const Image = require('./model/image');
mongoose.connect('mongodb://localhost:27017/imagesDB', {useNewUrlParser: true, useUnifiedTopology: true});


async function uploadImage(description, image){
    const newImage = new Image({
         description: description,
         image: image
        });
    await newImage.save();       
}

async function deleteImage(id){
    await Image.deleteOne({_id: id});
}

async function updateImage(id, description){
    await Image.updateOne({_id: id}, {description: description});  
}

async function getAllImages(){
     return docs = await Image.find({});
 }


async function searchByDescription(description){
    return Image.find({description: description}); 
}

async function search(string){
    return Image.find({ description: { $regex: string, $options: "i" } }).select('description');
}

module.exports = {uploadImage, deleteImage, updateImage, getAllImages, search, searchByDescription};