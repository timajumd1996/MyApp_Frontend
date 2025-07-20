import axios from 'axios';
import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';

const AdminAddProduct = () => {
  const [productname, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [material, setMaterial] = useState('');
  const [country_of_origin, setCountryOfOrigin] = useState('');
  const [count, setCount] = useState('');
  const [image, setImage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/admin/addProduct', {
        productname,
        category,
        description,
        price,
        material,
        country_of_origin,
        count,
        image,
      });

      console.log('Admin Add Product:', response);
      alert('Product added successfully!');

      // navigate('/');
    } catch (error) {
      console.log('Admin Add Product Error:', error);
      alert('Product addition failed, please try again.');
    }
  };

  return (
    <div className="container">
      <h2 className="my-4"><u>Admin Add Product</u></h2>
      <form className="row g-3" onSubmit={onSubmit}>
        <div className="col-md-6">
          <label htmlFor="productImage" className="form-label">Product Image URL</label>
          <input
            type="text"
            className="form-control"
            id="productImage"
            placeholder="Enter image URL"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="productName" className="form-label">Product Name</label>
          <input
            type="text"
            className="form-control"
            id="productName"
            placeholder="Enter product name"
            name="productname"
            value={productname}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="category" className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            id="category"
            placeholder="Enter category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="description" className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Enter description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="price" className="form-label">Price</label>
          <input
            type="text"
            className="form-control"
            id="price"
            placeholder="Enter price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="material" className="form-label">Material</label>
          <input
            type="text"
            className="form-control"
            id="material"
            placeholder="Enter material"
            name="material"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="countryOfOrigin" className="form-label">Country of Origin</label>
          <input
            type="text"
            className="form-control"
            id="countryOfOrigin"
            placeholder="Enter country of origin"
            name="country_of_origin"
            value={country_of_origin}
            onChange={(e) => setCountryOfOrigin(e.target.value)}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="count" className="form-label">Count</label>
          <input
            type="text"
            className="form-control"
            id="count"
            placeholder="Enter count"
            name="count"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            required
          />
        </div>
        <div className="col-12 text-center mt-4">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AdminAddProduct;
