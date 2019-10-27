import React, { Component } from 'react'

const Test =(props)=>{
    console.log(props.num)
    for(var i =0;i<4;i++){
        console.log(i)
    }
    return <div>aaa<br/></div>
}

export default class test extends Component {
    constructor(props) {
        super(props);
        this.arr = []
        for(var i =0;i<4;i++){
            this.arr[i] =i
        }
        this.state ={
            arr: this.arr
        }
    }
    
    render() {
        return (
            <div>
                {this.arr.map((item,index) => (
                    <div key={index} style={{position:"relative",height:'20px',marginBottom:'10px',marginTop:'10px'}}>
                        {item}
                    </div>                     
                ))}
            </div>
        )
    }
}
