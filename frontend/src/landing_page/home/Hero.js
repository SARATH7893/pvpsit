import React from 'react';
import { Link } from "react-router-dom";

function Hero() {
    return (  
    <div className='container p-5 mb-5'>
        <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5' ></img>
                <h1 className='mt-5'>Invest In Everything</h1>
                <p>Online Platform To Invest In Stocks, Derivatives, Mutual Funds, And More</p>
               <Link to="/signup"><button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto"}}>SignUp Now</button></Link>
        </div>
    </div>
    );
}

export default Hero;