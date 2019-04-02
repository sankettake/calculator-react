import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import UserInput from './../Components/UserInput'
import UserOutput from './../Components/UserOutput'
import {Container, Row} from 'react-bootstrap'

class App extends Component {
  state = {
    result : 0,
    previous_result:null,
    previous_operator:null,
    previous_action: null
  }

  recordAction = (type,value) =>{
    //console.log(type,value);
    // console.log(this.state);
    if (!this.state.previous_action){
        if(type==="number"){
          this.setState({
            result:value,
            previous_action:{type:type,value:value}
          });
          
          }
        else{
          this.setState({
            previous_action:{type:type,value:value}
          })
        }
   }
   else{
     if ((type==="number")&&(this.state.previous_action.type==="number")){
       this.setState({
        result : `${this.state.result}${value}`,
        previous_action:{
          type:type,
          value:value
        }
       })
        
     }
     else if ((type==="number")&&(this.state.previous_action.type==="operator")){
      this.setState({
        previous_result:this.state.result,
        result:value,
        previous_action:{
          type:type,
          value:value
        }
      })
     }
     
     else if ((type==="operator")&&(this.state.previous_action.type==="operator")){
      console.log("inside Operator case");
      console.log(this.state);
      this.setState({
        previous_result:this.state.result,
        previous_operator:value,
        previous_action:{
          type:type,
          value:value
        }
      })
     }
     
    else if ((type==="operator")&&(this.state.previous_action.type==="number")){
      console.log("inside Operator Number");
      if (this.state.previous_result){
        console.log("inside Previous Result");
        let final_result = 0;
        console.log("Inside operrator");
        switch (this.state.previous_operator){
          case "+":
          console.log("Inside +");
          console.log(this.state.previous_result + this.state.result);
            final_result = parseInt(this.state.previous_result) + parseInt(this.state.result)
            break;
          case "-":
            final_result = parseInt(this.state.previous_result) - parseInt(this.state.result)
            break;
          case "x":
            final_result = parseInt(this.state.previous_result) * parseInt(this.state.result)
            break;
          case "/":
            final_result = parseInt(this.state.previous_result) / parseInt(this.state.result)
            break;
        }
        console.log(final_result);
        this.setState({
          result:final_result,
          previous_operator:value,
          previous_action:{
            type:type,
            value:value
          }
        })

      }
      else{
        this.setState({
          ...this.setState,
          previous_operator:value,
          previous_action:{
            type:type,
            value:value
          }
        })
      }
  

   }
   else if ((type==="number")&&(this.state.previous_action.type==="operator")){
    // console.log(type,value);
    
  }

  }
}

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Container>
          <Row>
          <UserOutput result ={this.state.result}></UserOutput>
          </Row>
          <Row>
          <UserInput type="small-digit" clicked={() =>this.recordAction( "number",9)} value={9}></UserInput>
          <UserInput type="small-digit" clicked={() =>this.recordAction( "number",8)} value={8}></UserInput>
          <UserInput type="small-digit" clicked={() =>this.recordAction( "number",7)} value={7}></UserInput>
          <UserInput type="small-operator" className="Operator" clicked={() =>this.recordAction( "operator","/")}value={"/"}></UserInput>
          </Row>
          <Row>
          <UserInput type="small-digit" clicked={() =>this.recordAction( "number",6)} value={6}></UserInput>
          <UserInput type="small-digit" clicked={() =>this.recordAction( "number",5)} value={5}></UserInput>
          <UserInput type="small-digit"clicked={() =>this.recordAction( "number",4)} value={4}></UserInput>
          <UserInput type="small-operator" className="Operator"  clicked={() =>this.recordAction( "operator","x")} value={"x"}></UserInput>
          </Row>
          <Row>
          <UserInput type="small-digit" clicked={() =>this.recordAction( "number",3)} value={3}></UserInput>
          <UserInput type="small-digit" clicked={() =>this.recordAction( "number",2)} value={2}></UserInput>
          <UserInput type="small-digit" clicked={() =>this.recordAction( "number",1)} value={1}></UserInput>
          <UserInput type="small-operator" clicked={() =>this.recordAction( "operator","-")}value={"-"}></UserInput>
          </Row>
          <Row>
          <UserInput type="large-digit" clicked={() =>this.recordAction( "number",0)} value={0}></UserInput>
          <UserInput type="large-operator" className="Operator"  clicked={() =>this.recordAction( "operator","+")} value={"+"}></UserInput>
          </Row>
          </Container>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
      msg: state.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};


export default connect(mapStateToProps,mapDispatchToProps)(App);
