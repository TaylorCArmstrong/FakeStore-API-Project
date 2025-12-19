import axios from 'axios';

const CUSTOM_PRODUCTS_KEY = 'customBeansProducts';

// Get custom products from localStorage
export const getCustomProducts = () => {
    const stored = localStorage.getItem(CUSTOM_PRODUCTS_KEY);
    return stored ? JSON.parse(stored) : [];
};

// Save custom products to localStorage
const saveCustomProducts = (products) => {
    localStorage.setItem(CUSTOM_PRODUCTS_KEY, JSON.stringify(products));
};

// Create a new product (post to FakeStoreAPI and save to localStorage)
export const createProduct = async (productData) => {
    try {
        const response = await axios.post('https://fakestoreapi.com/products', {
            title: productData.title,
            price: parseFloat(productData.price),
            description: productData.description,
            image: productData.image || 'https://via.placeholder.com/200',
            category: productData.category || 'custom'
        });

        // Store in localStorage for persistence
        const customProducts = getCustomProducts();
        const newProduct = {
            ...response.data,
            isCustom: true
        };
        customProducts.push(newProduct);
        saveCustomProducts(customProducts);

        return newProduct;
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
};

// Delete a custom product
export const deleteCustomProduct = (productId) => {
    const customProducts = getCustomProducts();
    const filtered = customProducts.filter(p => p.id !== productId);
    saveCustomProducts(filtered);
};
