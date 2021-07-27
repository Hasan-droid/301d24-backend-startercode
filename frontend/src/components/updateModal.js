import React, { Component } from 'react'

export class UpdateModal extends Component {
    render() {
        return (
            <div>
               <form onSubmit={this.props.update}>
  <label for="fname">title</label><br/>
  <input type="text"  value={this.props.title} onChange={this.props.getData}/><br/>
  <label for="lname">ingradeints</label><br/>
  <input type="text" value={this.props.ingredients} onChange={this.props.getData} /><br/><br/>
  <input type="submit" value="Submit"/>
</form>  
            </div>
        )
    }
}

export default UpdateModal
