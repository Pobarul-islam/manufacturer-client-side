import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Order from './Order';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
  // userDetails
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [part, setPart] = useState({});
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (errors.quantity?.type === 'min' || errors.quantity?.type === 'max') {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, [errors.quantity?.type, status]);

  useEffect(() => {
    fetch(`https://liratools.onrender.com/tools/${id}`)
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, [id]);

  const onSubmit = async (data) => {
    const order = {
      email: user.email,
      street: data.street,
      city: data.city,
      number: data.number,
      quantity: data.quantity,
      price: parseInt(data.quantity) * part.price,
      image: products.img,
      reset,
    };

    if (
      parseInt(data.quantity) < products.Available &&
      parseInt(data.quantity) > products.MinimumOrder
    ) {
      fetch('https://liratools.onrender.com/order', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(order),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);

          toast.success(`${part.name}, Order is done!`);
        });
    } else {
      toast.error('Sorry ! Please start with 46 products');
    }
  };

  // order details

  const [products, setProducts] = useState({});
  useEffect(() => {
    fetch(`https://liratools.onrender.com/tools/${id}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const [show, setShow] = useState(false);

  return (
    <div className=" grid lg:grid-cols-2 md:grid-cols-2 ">
      <div className="mt-10  ">
        <div className="hero-content flex-col items-center">
          <img src={products.img} className="max-w-lg rounded-lg" alt="" />
          <div className=" text-clip p-5">
            <h1 className="text-3xl  font-bold">{products.name}</h1> <br />
            <span className=" text-neutral">
              Price : ${products.PerPrice}
            </span>{' '}
            <br />
            <span className=" text-neutral">
              Quantity : {products.Available} p
            </span>{' '}
            <br />
            <span className="  text-neutral">
              Min Order : {products.MinimumOrder} p
            </span>{' '}
            <br />
            <p className="">Description: {products.description}</p>
          </div>
        </div>
      </div>
      {show && <Order product={products} show={show} setShow={setShow} />}

      {/* Purchase From  */}

      <div className="  py-10">
        <div className="md:w-[70%] mx-auto p-3">
          <div className="md:gap-20 gap-5">
            <div className="card shadow-2xl border md:p-10 p-3">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <div className="form-control">
                    <input
                      {...register('name')}
                      defaultValue={user?.displayName}
                      disabled
                      type="name"
                      className="input input-bordered mb-3"
                    />
                  </div>
                </div>

                <div className="form-control">
                  <input
                    {...register('email')}
                    defaultValue={user?.email ? user?.email : 'Email not found'}
                    disabled
                    type="name"
                    className="input input-bordered mb-3"
                  />
                </div>

                <div className="form-control">
                  <input
                    type="number"
                    placeholder={`Enter Quantity (${part.ordered_quantity}-${part.available})`}
                    className="input input-bordered"
                    {...register('quantity', {
                      required: {
                        value: true,
                        message: 'Quantity is Required',
                      },
                      min: {
                        value: `${part.ordered_quantity}`,
                        message: `Min order limit is ${part.ordered_quantity}`,
                      },
                      max: {
                        value: `${part.available}`,
                        message: `Max order limit is ${part.available}`,
                      },
                    })}
                  />

                  <label className="label">
                    {errors.quantity?.type === 'required' && (
                      <span className="label-text-alt text-warning">
                        {errors.quantity?.message}
                      </span>
                    )}
                    {errors.quantity?.type === 'min' && (
                      <span className="label-text-alt text-warning">
                        {errors.quantity?.message}
                      </span>
                    )}
                    {errors.quantity?.type === 'max' && (
                      <span className="label-text-alt text-warning">
                        {errors.quantity?.message}
                      </span>
                    )}
                  </label>
                </div>

                <div className="form-control">
                  <input
                    {...register('street', {
                      required: {
                        value: true,
                        message: 'Street is Required',
                      },
                    })}
                    type="street"
                    placeholder="Enter your street"
                    className="input input-bordered"
                  />

                  <label className="label">
                    {errors.street?.type === 'required' && (
                      <span className="label-text-alt text-warning">
                        {errors.street?.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="form-control">
                  <input
                    {...register('city', {
                      required: {
                        value: true,
                        message: 'City/Town is Required',
                      },
                    })}
                    type="text"
                    placeholder="Enter your city/town"
                    className="input input-bordered"
                  />

                  <label className="label">
                    {errors.city?.type === 'required' && (
                      <span className="label-text-alt text-warning">
                        {errors.city?.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="form-control">
                  <input
                    {...register('number', {
                      required: {
                        value: true,
                        message: 'Phone Number is Required',
                      },
                    })}
                    type="number"
                    placeholder="Enter your phone number"
                    className="input input-bordered"
                  />

                  <label className="label">
                    {errors.number?.type === 'required' && (
                      <span className="label-text-alt text-warning">
                        {errors.number?.message}
                      </span>
                    )}
                  </label>
                </div>

                <div className="text-center">
                  <input
                    disabled={status}
                    type="Submit"
                    value="Purchase"
                    className="btn text-white px-12 rounded-full"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
