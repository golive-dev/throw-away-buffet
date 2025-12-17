import { writable, derived } from "svelte/store";

// Cart Item Interface
export interface CartItem {
    id: string;
    title: string;
    price: number;
    quantity: number;
    image: string;
}

// Initial State
let initialCart: CartItem[] = [];

// Try to load from localStorage
if (typeof localStorage !== 'undefined') {
    const saved = localStorage.getItem('cartItems');
    if (saved) {
        try {
            initialCart = JSON.parse(saved);
        } catch (e) {
            console.error('Failed to parse cart', e);
        }
    }
}

// Stores
export const cartItems = writable<CartItem[]>(initialCart);
export const isCartOpen = writable(false);

// Subscribe to changes
if (typeof localStorage !== 'undefined') {
    cartItems.subscribe((value) => {
        localStorage.setItem('cartItems', JSON.stringify(value));
    });
}

// Derived Stores
export const cartTotal = derived(cartItems, ($items) => {
    return $items.reduce((total, item) => total + item.price * item.quantity, 0);
});

export const cartCount = derived(cartItems, ($items) => {
    return $items.reduce((count, item) => count + item.quantity, 0);
});

// Actions
export const addToCart = (product: Omit<CartItem, "quantity">) => {
    cartItems.update((items) => {
        const existingItem = items.find((item) => item.id === product.id);
        if (existingItem) {
            return items.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        }
        return [...items, { ...product, quantity: 1 }];
    });
    isCartOpen.set(true);
};

export const removeFromCart = (id: string) => {
    cartItems.update((items) => items.filter((item) => item.id !== id));
};

export const updateQuantity = (id: string, delta: number) => {
    cartItems.update((items) => {
        return items.map((item) => {
            if (item.id === id) {
                const newQuantity = Math.max(1, item.quantity + delta);
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
    });
};

export const toggleCart = () => {
    isCartOpen.update((open) => !open);
};

export const openCart = () => isCartOpen.set(true);
export const closeCart = () => isCartOpen.set(false);
