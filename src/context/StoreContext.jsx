import React, {createContext, useContext, useEffect, useMemo, useState} from 'react';
import {seedProducts} from '../data/products';
const StoreContext=createContext(null);
const read=(key,fallback)=>{try{const x=localStorage.getItem(key);return x?JSON.parse(x):fallback}catch{return fallback}};
export function StoreProvider({children}){
 const [products,setProducts]=useState(()=>read('dk_products',seedProducts));
 const [cart,setCart]=useState(()=>read('dk_cart',[]));
 const [orders,setOrders]=useState(()=>read('dk_orders',[]));
 const [user,setUser]=useState(()=>read('dk_user',null));
 useEffect(()=>localStorage.setItem('dk_products',JSON.stringify(products)),[products]);
 useEffect(()=>localStorage.setItem('dk_cart',JSON.stringify(cart)),[cart]);
 useEffect(()=>localStorage.setItem('dk_orders',JSON.stringify(orders)),[orders]);
 useEffect(()=>localStorage.setItem('dk_user',JSON.stringify(user)),[user]);
 const addToCart=(product)=>setCart(old=>{const found=old.find(x=>x.id===product.id);return found?old.map(x=>x.id===product.id?{...x,qty:x.qty+1}:x):[...old,{...product,qty:1}]});
 const changeQty=(id,qty)=>setCart(old=>qty<1?old.filter(x=>x.id!==id):old.map(x=>x.id===id?{...x,qty}:x));
 const removeFromCart=id=>setCart(old=>old.filter(x=>x.id!==id));
 const placeOrder=(details)=>{const order={id:'DK'+Date.now().toString().slice(-8),createdAt:new Date().toISOString(),status:'Confirmed',payment:'Cash on Delivery',items:cart.map(({id,name,price,qty,image})=>({id,name,price,qty,image})),total:(()=>{const subtotal=cart.reduce((s,x)=>s+x.price*x.qty,0);return subtotal+(subtotal>=1999?0:79)})(),customer:details};setOrders(old=>[order,...old]);setCart([]);return order};
 const value=useMemo(()=>({products,setProducts,cart,addToCart,changeQty,removeFromCart,orders,setOrders,user,setUser,placeOrder}),[products,cart,orders,user]);
 return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}
export const useStore=()=>useContext(StoreContext);