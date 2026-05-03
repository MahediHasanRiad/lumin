import React from 'react'
import '../style/streaming.style.css'
import LogoTypeButton from '../../utils/logo-type-button'

function Streaming() {
  return (
    <section className='content-section'>
        
        {/* logo type button  */}
        <LogoTypeButton text={'BEYOND STEAMING'} />

        {/* header  */}
        <h1 style={{
          fontWidth: '600',
          fontSize: '40px',
          lineHeight: '150%',
          letterSpacing: '0%',
          alignItems: 'center'
        }}>More then Just <span style={{ color: 'yellow', fontStyle: 'italic' }}>Watching</span> </h1>

    </section>
  )
}

export default Streaming