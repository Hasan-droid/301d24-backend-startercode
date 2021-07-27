import axios from 'axios';
import React, { Component } from 'react'
import {Card , Button} from "react-bootstrap"
import UpdateModal from './updateModal';
 class Fav extends Component {
     constructor(props){
         super(props);
         this.state={
             data:[],
             showmodal:false,
             title:'',
             ingredients:'',
             id:''
         }
     }
     componentDidMount=()=>{
         this.fetchFavsData();
     }
     fetchFavsData=async()=>{
         const url=`http://${process.env.REACT_APP_BACKEND_URL}/fav-list`
         const recivedData=await axios.get(url);
         this.setState({
             data:recivedData.data
         })
         
     }
     delete=async(i)=>{
        const url=`http://${process.env.REACT_APP_BACKEND_URL}/delete/${i.id}`
       const  deleteItem=await axios.delete(url);
       this.fetchFavsData();
       console.log("item deleted")

     }
 
     getEnterdData=(e)=>{
         this.setState({
            title:e.target.value,
            ingredients:e.target.value
           
         })
     }
    
     showModals= (e)=>{
         console.log("show modal clicked")
       
        this.setState({
            id:e.id,
            showmodal:true,
            title:e.title,
            ingredients:e.ingredients
        })
    }
    update=async(e)=>{
        e.preventDefault();
         const body={
            title:this.state.title,
            ingredients:this.state.ingredients, 
         }

        const url=`http://${process.env.REACT_APP_BACKEND_URL}/update/${this.state.id}`
         const putData=await axios.put(url , body)
         this.fetchFavsData();
         console.log('item updated')
    }
    render() {
        return (
            <div>
             <p>you're in fav</p>
             {this.state.showmodal &&
             <UpdateModal title={this.state.title} ingredients={this.state.ingredients}
               getData={this.getEnterdData}  update={this.update}/>

             }
             {this.state.data &&
             
             this.state.data.map(i =>{
                 return(
                     
                   <Card style={{ width: '18rem' }}>
                   <Card.Img variant="top" src={i.thumbnail} />
                   <Card.Body>
                     <Card.Title>{i.title}</Card.Title>
                     <Card.Text>
                      {i.description}<br/>
                      <b>ingredients</b><br/>
                      {i.ingredients}

                     </Card.Text>
                     <Button variant="primary" onClick={e => this.delete(i)} >delete</Button>
                     <Button variant="primary" onClick={e => this.showModals(i)} >update</Button>
                   </Card.Body>
                 </Card>
                
                 )
                 
             })

             }   
            </div>
        )
    }
}

export default Fav
