
import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from 'react-icons/ai'

const Home = () => {
  return (
    <>
        <div className='home' id='home'>
            <main>
                <h1>TechyStar</h1>
                <p>Solution to all your problems</p>
            </main>
        </div>
        <div className="home2">
            <img src={vg}alt="Graphics" /> 
            <div>
              <p>
                we are your one and only solution to the tech problems you face every day. we are leading tech company whose aim is to increase the problem solving ability in childrens.
              </p>
            </div>
        </div>



        <div className="home3" id='about'>
          <div>
            <h1>who we are?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolorem, officia animi soluta architecto sed facere labore unde eius nesciunt iure, corrupti enim quaerat debitis qui ipsa? Deleniti excepturi tenetur deserunt! Sunt consectetur minus minima eos corrupti magni eligendi culpa iste quos expedita? Error officiis magnam, eum provident at voluptatum distinctio non veritatis ex dolore quos voluptates harum autem odio omnis aliquam neque culpa saepe, explicabo cupiditate facere? Pariatur corporis corrupti, aperiam laborum quaerat earum minima suscipit dolorum quas error distinctio, provident porro, ipsam recusandae? Vitae doloribus nostrum laudantium harum consectetur aut commodi impedit? Cupiditate tempore aut nesciunt </p>
          </div>
        </div>
        <div className="home4" id='brands'>

          <div >
            <h1>Brands</h1>
            <article>
              <div >
                <AiFillGoogleCircle  className='svg'/>
                <p>Google</p>
              </div>
              <div >
                <AiFillAmazonCircle />
                <p>Amazon</p>
              </div>
              <div >
                <AiFillYoutube />
                <p>Youtube</p>
              </div>
              <div >
                <AiFillInstagram/>
                <p>Instagram</p>
              </div>
            </article>
          </div>
        </div>

    </>
  )
}

export default Home
