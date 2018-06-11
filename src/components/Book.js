import React from 'react'
import LazyLoad from 'react-lazyload'
import './Book.css'

const Book = (props) => (
  <LazyLoad height={650} offset={-100}>
    <div className="book card">
      <div className="front" onClick={() => props.showBack(props.card)}>
        <img className="book-image" src="https://images.gr-assets.com/books/1490875614l/32446949.jpg" alt="A book I read once" />
        <div className="container">
          <h3>Punch Escrow <span className="price">$24.99</span></h3>
        </div>
      </div>
      <div className="back" onClick={() => props.showFront(props.card)}>
        <div className="container-back">
          <p>Dubbed the “next Ready Player One,” by former Warner Brothers President 
            Greg Silverman, and now in film development at Lionsgate.
          </p>
          <p>"Featuring themes similar to Blake Crouch’s Dark Matter, the dense sci-fi 
            feel of a Michael Crichton thriller and clever Douglas Adams-like charm, 
            the book posits an intriguing future that is both inviting and horrific." 
            <cite>―Brian Truitt, USA TODAY</cite>
          </p>
          <p>It's the year 2147. Advancements in nanotechnology have enabled us to 
            control aging. We’ve genetically engineered mosquitoes to feast on carbon 
            fumes instead of blood, ending air pollution. And teleportation has become 
            the ideal mode of transportation, offered exclusively by International 
            Transport―the world’s most powerful corporation, in a world controlled by 
            corporations.
          </p>
          <p>Joel Byram spends his days training artificial-intelligence engines to act 
            more human and trying to salvage his deteriorating marriage. He’s pretty much 
            an everyday twenty-second century guy with everyday problems―until he’s 
            accidentally duplicated while teleporting.
          </p>
          <p>Now Joel must outsmart the shadowy organization that controls teleportation, 
            outrun the religious sect out to destroy it, and find a way to get back to 
            the woman he loves in a world that now has two of him.
          </p>
        </div>
      </div>
    </div>
  </LazyLoad>
)

export default Book