import React, { useState } from "react";

const FoodMenuCard = ({ isDarkMode, setIsDarkMode, toggleTheme }) => {

    console.log(isDarkMode);
  const products = [
    { id: 1, name: "cheeseburger", price: 100, category: "main", subCategory: "Burger", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300" },
    { id: 2, name: "chowmein burger", price: 100, category: "main", subCategory: "Burger", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300" },
    { id: 3, name: "Pizza", price: 120, category: "main", subCategory: "Pizza", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300" },
    { id: 4, name: "Salad", price: 70, category: "main", subCategory: "Salad", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300" },
    { id: 5, name: "Pasta", price: 110, category: "main", subCategory: "Pasta", image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=300" },
    { id: 6, name: "Coffee", price: 30, category: "drinks", subCategory: "Hot Drink", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300" },
    { id: 7, name: "Ice Cream", price: 60, category: "desserts", subCategory: "Frozen", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300" },
    { id: 8, name: "Smoothie", price: 40, category: "drinks", subCategory: "Cold Drink", image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=300" },
    { id: 9, name: "Cheesecake", price: 50, category: "desserts", subCategory: "Cake", image: "https://images.unsplash.com/photo-1508737027454-e6454ef45afd?w=300" }
  ];

  const [cart, setCart] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("all");
  const [currentSubCategory, setCurrentSubCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [summaryText, setSummaryText] = useState("");

  const subCategories = [
    ...new Set(products.map(product => product.subCategory)),
  ];

  const filteredProducts = products.filter(
    (product) =>
      (currentCategory === "all" || product.category === currentCategory) &&
      (currentSubCategory === "all" || product.subCategory === currentSubCategory) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (productId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      const product = products.find((p) => p.id === productId);
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      quantity > 0
        ? prevCart.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          )
        : prevCart.filter((item) => item.id !== productId)
    );
  };

  const clearCart = () => setCart([]);

  const calculateTotals = () => {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const total = subtotal;
    return { subtotal, total };
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    let summary = "";
    cart.forEach((item, index) => {
      summary += `${index + 1}. ${item.name} x ${item.quantity} = ₹ ${item.price * item.quantity}\n`;
    });
    const { total } = calculateTotals();
    summary += `\nTOTAL AMOUNT: ₹ ${total.toFixed(2)}`;
    setSummaryText(summary);
    setShowAlert(true);
  };

  const copyToClipboard = () => {
    const textArea = document.createElement('textarea');
    textArea.value = summaryText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Summary copied to clipboard!');
    setShowAlert(false);
  };

  const { subtotal, total } = calculateTotals();

  const totalItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const categoryCount = products.reduce((counts, product) => {
    if (!counts[product.category]) {
      counts[product.category] = 0;
    }
    const cartItem = cart.find((item) => item.id === product.id);
    if (cartItem) {
      counts[product.category] += cartItem.quantity;
    }
    return counts;
  }, {});
  const totalSubcategoryCount = Object.values(categoryCount).reduce((sum, count) => sum + count, 0);

  return (
    <div className={`flex h-screen ${isDarkMode ? 'bg-black' : 'bg-gray-50'}`}>
      <div className={`w-2/3 p-6 overflow-y-auto ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Food Menu </h1>
          <input
            type="text"
            placeholder="Search products..."
            className={`${isDarkMode ? 'text-gray-50' : 'text-black' } pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex space-x-4 mb-6 overflow-x-auto py-2">
          {["all", "main", "drinks", "desserts"].map((category) => (
            <button
              key={category}
              onClick={() => setCurrentCategory(category)}
              className={`px-4 py-2 rounded-full border transition-colors ${currentCategory === category ? "bg-blue-500 text-white" : "bg-white text-black"}`}
            >
              {category === "all" ? "All Items" : category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className={`
                ${isDarkMode ? 'bg-black shadow-white' : 'bg-white '} 
              product-card   rounded-lg shadow-md overflow-hidden transition-all duration-300`}>
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">₹ {product.price.toFixed(2)}</p>
                <button
                  onClick={() => addToCart(product.id)}
                  aria-label={`Add ${product.name} to cart`}
                  className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`w-1/3 ${isDarkMode ? 'bg-black text-white' : 'bg-gray-50'} shadow-lg p-6 flex flex-col`}>
        <h2 className="text-2xl font-bold mb-4">Current Order</h2>
        <div className="flex-1 overflow-y-auto mb-4">
          <div className="space-y-2">
            {cart.map((item) => (
              <div key={item.id} className={`flex items-center justify-between  ${isDarkMode ? 'bg-black text-white ' : 'bg-gray-50'} shadow-sm p-4 rounded-lg border`}>
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-600">₹ {item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-6">
            <p className="text-lg font-semibold">Total: ₹ {total.toFixed(2)}</p>
            <p className="text-gray-600">Items in Cart: {totalItemCount}</p>
            <p className="text-gray-600">Items by Category: {totalSubcategoryCount}</p>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={clearCart}
              className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              Clear Cart
            </button>
            <button
              onClick={handleCheckout}
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>

      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <pre className="whitespace-pre-wrap">{summaryText}</pre>
            <div className="flex space-x-4 mt-4">
              <button
                onClick={copyToClipboard}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg"
              >
                Copy to Clipboard
              </button>
              <button
                onClick={() => setShowAlert(false)}
                className="bg-gray-500 text-white py-2 px-4 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodMenuCard;
