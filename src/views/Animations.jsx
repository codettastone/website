import React from 'react'

function Animations() {
  return (
    <>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TimelineMax.min.js"></script>
      <header>
        <section>
          <div className="hero">
            <img src="../images/rain-walk-red.jpg" alt="background" />
            <h1 className="headline">Dream Big</h1>
          </div>
        </section>
      </header>
      <div className="slider"></div>
    </>
  )
}

export default Animations
