import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCars } from "../Redux/carSlice";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const DetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { mycars } = useSelector((state) => state.car);
  const car = mycars?.find((el) => el._id === id); // Use find instead of filter

  useEffect(() => {
    dispatch(getCars(id)); // Assuming getCarById fetches a single car by id
  }, [dispatch, id]);

  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container_detail">
    <div className="core">
      <div className="image-section">
        <section className="gallery-holder hide-in-mobile">
          <section className="gallery">
            <div className="image">
              {car && <img src={car.ImgUrl} alt={car.Brand} />}
            </div>
          </section>
        </section>
        <section className="mobile-gallery hide-in-desktop">
        </section>
      </div>
      <section className="text-section">
        <h1 className="pre">{car && car.Brand}</h1>
        <h1>{car && car.Model}</h1>
        <p className="desc">{car && car.Features}</p>
        <div className="price">
          <div className="main-tag">
            <p>{car && `$${car.Price}`}</p>
            <p className='red'>50%</p>
          </div>
          <s>$250.00</s>
        </div>
        <div className="buttons">
          <div className="amount">
            <button className="minus" style={{ color: 'orange' }} onClick={handleDecrement} disabled={quantity === 0}>
              <RemoveIcon />
            </button>
            <p>{quantity}</p>
            <button className="plus" style={{ color: 'orange' }} onClick={handleIncrement}>
              <AddIcon />
            </button>
          </div>
          <button className="add-to-cart" onClick={() => alert('Added to cart')}>
            add to cart
          </button>
        </div>
      </section>
    </div>
    </div>
  );
};

export default DetailsPage;
