import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  // code here
  render(){
    let image_arr= this.imageData()
    return (
      <>
        <h1>Kalvium Gallery</h1>
        {/* <div className='parent_div'>
            <img src={image_arr[0].img} alt="" className='image' />
            <img src={image_arr[1].img} alt=""  className='image'/>    
            <img src={image_arr[0].img} alt="" className='image' />
            <img src={image_arr[1].img} alt=""  className='image'/>    
        </div> */}
        <div className='parent_div'>
            {
              image_arr.map(elem =>{
                return (
                  <img src={elem.img} alt='element' className='image'></img>
                )
              })
            }    
        </div>
      </>
    )
    }
}
