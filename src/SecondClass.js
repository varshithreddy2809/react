import { Component } from "react";

class SecondClass extends Component{
   
    constructor(){
        super();
        this.state={
        sname : "Varshith",
        sno : 21,
        sdepartment : "CSE",
    }
    }
    render(){
         return(
        <h1>
        {this.state.sname} ::{this.state.sdepartment}
        </h1>
    );
    }
   
}
export default SecondClass;