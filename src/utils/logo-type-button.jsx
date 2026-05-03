import React from 'react'
import '../feature/style/hero.style.css'

function LogoTypeButton({text}) {
  return (
    <section>
      {/* button type  */}
      <div className="gradient-pill-button">
        {text}
      </div>
    </section>
  )
}

export default LogoTypeButton