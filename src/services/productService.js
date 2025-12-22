import axios from 'axios';

const CUSTOM_PRODUCTS_KEY = 'customBeansProducts';


export const getCustomProducts = () => {
    try {
        const stored = localStorage.getItem(CUSTOM_PRODUCTS_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch (error) {
        console.error('Error retrieving custom products:', error);
        return [];
    }
};


const saveCustomProducts = (products) => {
    try {
        localStorage.setItem(CUSTOM_PRODUCTS_KEY, JSON.stringify(products));
    } catch (error) {
        console.error('Error saving custom products:', error);
        throw new Error('Failed to save products. Please try again.');
    }
};


export const createProduct = async (productData) => {
    try {
        if (!productData.title || !productData.price || !productData.description) {
            throw new Error('All fields are required');
        }

        const response = await axios.post('https://fakestoreapi.com/products', {
            title: productData.title,
            price: parseFloat(productData.price),
            description: productData.description,
            image: productData.image || 'https://via.placeholder.com/200',
            category: productData.category || 'custom'
        });

        
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
        throw new Error(error.response?.data?.message || error.message || 'Failed to create product');
    }
};


export const updateProduct = async (productId, productData) => {
    try {
        if (!productData.title || !productData.price || !productData.description) {
            throw new Error('All fields are required');
        }

        const response = await axios.put(`https://fakestoreapi.com/products/${productId}`, {
            title: productData.title,
            price: parseFloat(productData.price),
            description: productData.description,
            image: productData.image || 'https://via.placeholder.com/200',
            category: productData.category || 'custom'
        });

        
        const customProducts = getCustomProducts();
        const updatedProducts = customProducts.map(p =>
            p.id === productId
                ? { ...response.data, isCustom: true }
                : p
        );
        saveCustomProducts(updatedProducts);

        return { ...response.data, isCustom: true };
    } catch (error) {
        console.error('Error updating product:', error);
        throw new Error(error.response?.data?.message || error.message || 'Failed to update product');
    }
};


export const deleteCustomProduct = (productId) => {
    try {
        const customProducts = getCustomProducts();
        const filtered = customProducts.filter(p => p.id !== productId);
        saveCustomProducts(filtered);
    } catch (error) {
        console.error('Error deleting product:', error);
        throw new Error('Failed to delete product. Please try again.');
    }
};
