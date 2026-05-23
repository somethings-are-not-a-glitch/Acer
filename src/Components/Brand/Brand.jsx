import React from 'react'
import './Brand.css'


export default function Brand() {
  return (
    <section className='brand'>

      <div className='bgimage'>

        <nav>

          <h1 className='logo'>Acer</h1>

          <ul>

            <li>
              <a href='#'>Home</a>
            </li>

            <li>
              <a href='#'>About</a>
            </li>

            <li>
              <a href='#'>Developers</a>
            </li>

            <li>
              <a href='#'>Laptops</a>
            </li>

            <li>
              <a href='#'>Shop</a>
            </li>

          </ul>

          <div className='header-icons'>
            <img width={32} src="https://cdn-icons-png.flaticon.com/512/9742/9742847.png"/>
            <img width={32} src="https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/shopping-cart-white-icon.png"/>
          </div>

        </nav>

        <div className='content'>
          <div className='collumn1'>
<div className='box'/>
<h1>Presenting Acer Nitro 5</h1>
<p>the league of computering computers where computers create computers that creat that computer</p>
<button>Find out more →</button>

<div className='Trailer'>
  <h4>Trailer</h4>
  <p>Something about computers lorem impsum the one and only blah of blahing of blah blah and blahi of blahing</p>
<iframe width="260" height="155" src="https://www.youtube.com/embed/9L-rZPv82mM?si=5JTqA9GA61cx5z-3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
          </div>



          <div className='collumn2'>

<div className='links'>
  <a href='#'>snapchat</a>
  <a href='#'>youtube</a>
  <a href='#'>tiktok</a>
  <a href='#'>facebook</a>
  <a href='#'>instagram</a>
</div>
          </div>
          
        </div>
        
      </div>

    </section>
  
  )
}
