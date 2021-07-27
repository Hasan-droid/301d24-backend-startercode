'use strict';
const axios=require('axios');
const coffeeModel=require('../models/coffee.model');

// Endpoint for testing
const home=async(req,res)=>{
// provide your logic here
const url="https://coffeepedias.herokuapp.com/coffee-list/"
const apidata=await axios.get(url)
const coffeeData=apidata.data.map(item => new Coffee(item))
res.send(coffeeData)
}
class Coffee{
    constructor(y){
        this.id=y.id;
        this.title=y.title;
        this.description=y.description;
        this.thumbnail=y.image_url;
        this.ingredients=y.ingredients;
        
    }
}
// Call the coffee api here and return the results
const retreiveItemsController=(req,res)=>{
    // provide your logic here
};
// Get favorite coffee from MongoDB
const getFavoriteCoffee=(req,res)=>{
    // provide your logic here
    const favsData=coffeeModel.find({} , (err , data)=>{
        res.send(data)
    })
}
// Create new fav coffee endpoint
const createItemController=(req,res)=>{
    // provide logic here
    const {title , description , thumbnail , ingredients , id}=req.body;
    console.log('SERVER ID ' , id)
    console.log("SERVER COFFEE MODEL " , coffeeModel)
    // const slug=title.toLowerCase().split(' ').join('-');
    coffeeModel.find({id:id} , (err , data)=>{
        if(data.length > 0 ){
            res.send("SERVER ITEM ALREADY EXSIST")
        }
        else{
            const newItem=new coffeeModel({
                id:id, 
                title:title,
                description:description,
                thumbnail:thumbnail,
                ingredients:ingredients
            })

            newItem.save();
            console.log('SERVER ITEM SAVED')
        }
    })
    

};

// update coffee from MongoDB
const updateItemController=(req,res)=>{
    // provide logic here
    const{title , ingredients}=req.body;
    const id=req.params.id;
    coffeeModel.find({id:id}, (err , data)=>{
        if(err){
            res.send("SERVER UPDATE ERROR" , err)
        }else{
            data[0].title=title;
            data[0].ingredients=ingredients;
            data[0].save();
            getFavoriteCoffee(req , res);
            console.log("SERVER ITEM UPDATED")

        }
    })
};

// delete coffee from MongoDB
const deleteItemController=(req,res)=>{
    // provide your logic here
    const id=req.params.id;
    coffeeModel.remove({id : id} , (err , data)=>{
        if(err){
            res.send('SERVER DELETE ERROR' , err)
        }else{
           console.log('SERVER ITEM DELETED' );
           getFavoriteCoffee(req , res);}
    })
};

module.exports={
    home,
    getFavoriteCoffee,
    createItemController,
    updateItemController,
    deleteItemController,
    retreiveItemsController
};