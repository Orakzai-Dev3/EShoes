import React, { useState } from "react";

const Detail = () => {
    const [quantity, setQuantity] = useState(1);
    const sizes = [6, 7, 8, 9, 10, 11];
    const colors = ["Black", "White", "Blue", "Red"];

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);

    return (
        <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
            <div className="w-full max-w-5xl bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
                {/* Image Section (60%) */}
                <div className="md:w-3/5 w-full">
                    <img
                        src="https://via.placeholder.com/600x600?text=Shoe+Image"
                        alt="Shoe"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Details Section (40%) */}
                <div className="md:w-2/5 w-full p-6 flex flex-col justify-between">
                    {/* Product Title and Description */}
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Stylish Running Shoes</h1>
                        <p className="text-gray-500 text-sm mb-4">
                            SKU: 12345 | Category: Running Shoes
                        </p>
                        <p className="text-gray-600 mb-4">
                            These running shoes offer unparalleled comfort, durability, and style. 
                            Perfect for athletes and casual wearers alike.
                        </p>

                        {/* Ratings */}
                        <div className="flex items-center mb-4">
                            <div className="flex text-yellow-500 text-lg">
                                ★★★★★
                            </div>
                            <span className="text-gray-500 ml-2">(120 Reviews)</span>
                        </div>

                        {/* Price */}
                        <p className="text-2xl font-semibold text-green-600 mb-6">$120.00</p>
                    </div>

                    {/* Selectors for Size, Color, and Quantity */}
                    <div>
                        {/* Size Selector */}
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Select Size:</label>
                            <select
                                className="w-full border border-gray-300 rounded-lg p-2"
                            >
                                {sizes.map((size) => (
                                    <option key={size} value={size}>
                                        Size {size}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Color Selector */}
                        <div className="mb-4">
                            <label className="block text-gray-700  mb-2">Select Color:</label>
                            <div className="flex gap-4">
                                {colors.map((color) => (
                                    <button
                                        key={color}
                                        className={`w-8 h-8 rounded-full border-2 ${
                                            color === "Black" ? "bg-black" : ""
                                        } ${color === "White" ? "bg-white border-gray-300" : ""} ${
                                            color === "Blue" ? "bg-blue-500" : ""
                                        } ${color === "Red" ? "bg-red-500" : ""} hover:ring-2 ring-offset-1`}
                                        title={color}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Quantity Selector */}
                        <div className="mb-6 flex items-center">
                            <label className="block text-gray-700 mb-2 mr-4">Quantity:</label>
                            <button
                                className="px-3 py-2 bg-gray-200 hover:bg-gray-300 text-lg rounded-l"
                                onClick={decreaseQuantity}
                            >
                                -
                            </button>
                            <input
                                type="text"
                                value={quantity}
                                readOnly
                                className="w-12 text-center border-t border-b"
                            />
                            <button
                                className="px-3 py-2 bg-gray-200 hover:bg-gray-300 text-lg rounded-r"
                                onClick={increaseQuantity}
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Add to Cart and Buy Now Buttons */}
                    <div className="flex gap-4">
                        <button className="flex-grow bg-blue-500 text-white py-3 rounded-lg font-bold text-lg hover:bg-blue-600 transition">
                            Add to Cart
                        </button>
                        <button className="flex-grow bg-green-500 text-white py-3 rounded-lg font-bold text-lg hover:bg-green-600 transition">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
