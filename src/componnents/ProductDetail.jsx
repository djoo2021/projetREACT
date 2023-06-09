import React from 'react';
import { useParams } from 'react-router';
import DATA from '../Data';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem,delItem } from '../redux/actions/index';

const ProductDetail = () => {
  const [cartBtn, setcartBtn] = useState("Add to Cart")

  const { id } = useParams();
  console.log(id);
  const product = DATA.find(el => el.id == id);
  const dispatch=useDispatch();

  const handlCarte = (product) => {
    if (cartBtn == "Add to Cart") {
    dispatch(addItem(product))
    setcartBtn("Remove from Cart")
  }
     else {
      dispatch(delItem(product))
     setcartBtn("Add to Cart");
  }
}


  return (
    <>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img src={product.img} alt={product.title} height="400px" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className='display-5 fw-bold'>{product.title}</h1>
            <hr />
            <h2 className='my-4'>${product.price}</h2>
            <p className='lead'>{product.desc}</p>
            <button onClick={() => handlCarte(product)} className="btn btn-outline-primary">{cartBtn}</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail
