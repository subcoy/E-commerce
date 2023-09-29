import React from "react";
import { ViewAllProducts } from "../ViewAllProducts";
import {Start} from '../Start/index';
import { Route,Routes, Router } from "react-router-dom";
import { Cart } from "../Cart";
import { DetailsProduct } from "../DetailsProduct";
import {Login} from "../login/Login";
import { Register } from "../register/Register";
import { Payment } from "../payment/payment";



    
export const Pages =() => {
    return (
        <section>   
            <Routes >
                <Route path="/" element={<Start/>} />
                <Route path="/products" element={<ViewAllProducts/>} />
                <Route path="/Cart" element={<Cart/>} />
                <Route path="/DetailsProduct" element={<DetailsProduct/>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/Register" element={<Register/>} />
                <Route path="/Payment" element={<Payment/>} />
             
            </Routes>            
        </section>
    );
}