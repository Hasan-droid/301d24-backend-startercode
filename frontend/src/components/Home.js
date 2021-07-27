import axios from 'axios';
import React, { Component } from 'react'
import {Card , Button, Row} from "react-bootstrap"

 class Home extends Component {
     constructor(props){
         super(props);
         this.state={
             data:[],
         }
     }
     componentDidMount=()=>{
         this.fetchdata();
     }
     fetchdata=async()=>{
         console.log(process.env.REACT_APP_BACKEND_URL)
         const url=`http://${process.env.REACT_APP_BACKEND_URL}/`
         const recivedData= await axios.get(url)
         this.setState({
             data:recivedData.data
         })
     }
     addtoFav=async(i)=>{
         console.log('button clicked')
       const url=`http://${process.env.REACT_APP_BACKEND_URL}/create`
       const body={
        id:i.id,
        title:i.title,
        description:i.description,
        thumbnail:i.thumbnail,
        ingredients:i.ingredients,
        
       }
       const postData=await axios.post(url , body);
       console.log("item added")
     }
    render() {
        return (
            <div>
              <p>you're in home</p>  
              <Row xs={1} md={2} className="g-4">
              <Card>
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
                      <Button variant="primary" onClick={e =>this.addtoFav(i)}>get it</Button>
                    </Card.Body>
                  </Card>
                 
                  )
                  
              })

              }
              </Card>
              </Row>
             
            </div>
        )
    }
}

export default Home
