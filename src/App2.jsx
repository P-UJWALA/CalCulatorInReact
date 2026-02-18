import React from "react";

function App(){
  var products=[
    {
      id:1,
      name:"HP laptop",
      price:"500$"

    },
    {
      id:2,
      name:"Dell laptop",
      price:"600$"

    },
    {
      id:3,
      name:"Asus laptop",
      price:"800$"

    },
  ]
   return (
    <div className="box">
      //normal map method is used to iterate over an array
      {products.map((e) => (
        <div className="box">
          <Product products={e}/>

          <li>{e.name}</li>
          <li>{e.price}</li>
        </div>
      ))}
    </div>
   );
  }
 //props--> it is used transver elements of parent to child
 //components in ract is used to return 1 jsx element(jsx element means HTML)
 //map-->method is used to iterate over an array 
function Product(props){
  return(
    <div className="product">
      <h2>{props.products.name}</h2>
      <h2>{props.products.price}</h2>
    </div>
  )
}
//destructuring is also used to iterate over an array
function Product({products:{name,price}}){
  return(
    <div className="box">
      <li>{name}</li>
      <h2>{price}</h2>

    </div>


  )

}
export default App; 




