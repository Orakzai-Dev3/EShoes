import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const dummyItems = [
  {
    title: "Smart Watch",
    quantity: 1,
    price: 1999,
    image: "https://via.placeholder.com/100?text=Watch",
  },
  {
    title: "Bluetooth Earbuds",
    quantity: 2,
    price: 1299,
    image: "https://via.placeholder.com/100?text=Earbuds",
  },
];

const PlaceOrder = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, address } = formData;

    // Basic validation
    if (!name || !email || !phone || !address) {
      toast.error("⚠️ Please fill all the fields");
      return;
    }

    setOrderPlaced(true);
    toast.success("🎉 Order placed successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-lg mt-6">
      <ToastContainer />

      <h1 className="text-2xl font-bold mb-4">Place Your Order</h1>

      {!orderPlaced && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Name</label>
            <input
              type="text"
              name="name"
              className="w-full border rounded px-3 py-2"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border rounded px-3 py-2"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block font-medium">Phone</label>
            <input
              type="text"
              name="phone"
              className="w-full border rounded px-3 py-2"
              value={formData.phone}
              onChange={handleChange}
              placeholder="03xx-xxxxxxx"
            />
          </div>
          <div>
            <label className="block font-medium">Address</label>
            <textarea
              name="address"
              rows="3"
              className="w-full border rounded px-3 py-2"
              value={formData.address}
              onChange={handleChange}
              placeholder="Your complete address"
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            🛒 Place Order
          </button>
        </form>
      )}

      {orderPlaced && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-green-700">Order Summary</h2>
          <p className="mt-2 text-gray-700">Thank you, <strong>{formData.name}</strong>!</p>
          <p className="text-gray-600">Your order will be delivered to: {formData.address}</p>

          <div className="mt-4 space-y-4">
            {dummyItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4 border p-4 rounded">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded" />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ₹{item.price}</p>
                  <p>Total: ₹{item.quantity * item.price}</p>
                </div>
              </div>
            ))}
          </div>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Confirm Order</button>

        </div>
      )}
    </div>
  );
};

export default PlaceOrder;
