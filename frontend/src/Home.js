import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div>
      <div className='bikesSection'>
        <div>
          <img className = "BikeSectionImage" 
          src = "https://th.bing.com/th/id/R.3b5ec57f345d30fc715bfeb7eeb8b96b?rik=pM9kOB2x%2fN8Y8w&riu=http%3a%2f%2fwww.asphaltandrubber.com%2fwp-content%2fgallery%2f2016-kawasaki-ninja-zx-10r-krt%2f2016-Kawasaki-Ninja-ZX-10R-KRT-28.jpg&ehk=I97UJE%2fht2QywKOt7Fvp%2bpOQxhfn1LIUFtMviUO%2bCaw%3d&risl=&pid=ImgRaw&r=0" 
          alt = "images" />
        </div>
        <div>
          <h1>Bi<span>K</span>es</h1>
          <p>-------------------------------------------------------------------------------------------------------------------------</p>
          <p>"Life is like riding a bicycle. To keep your balance, you must keep moving." - <span>Albert Einstein</span></p>
          <p>"Nothing compares to the simple pleasure of riding a bike." - <span>John F. Kennedy</span></p>
          <p>"The bicycle is just as good company as most husbands and, when it gets old and shabby, a woman can dispose of it and get a new one without shocking the entire community." - <span>Ann Strong</span></p>
          <p>-------------------------------------------------------------------------------------------------------------------------</p>
        </div>
      </div>
      <div className='bikesSection'>
        <div>
          <img className = "BikeSectionImage" 
          src = "https://th.bing.com/th/id/OIP.6hzICiW6QDRJZQ6l2q_JEQAAAA?w=219&h=154&c=7&r=0&o=5&dpr=1.3&pid=1.7" 
          alt = "images" />
        </div>
        <div>
          <h1>Ca<span>R</span>s</h1>
          <p>-------------------------------------------------------------------------------------------------------------------------</p>
          <p>"You can know or not know how a car runs and still enjoy riding in a car." - <span>David Byrne</span></p>
          <p>"A dream without ambition is like a car without gas... you're not going anywhere." - <span>Sean Hampton</span></p>
          <p>"I've always been asked, 'What is my favorite car?' and I've always said 'The next one.'" - <span>Carroll Shelby</span></p>
          <p>-------------------------------------------------------------------------------------------------------------------------</p>
        </div>
      </div>
      
    </div>
  )
}

export default Home