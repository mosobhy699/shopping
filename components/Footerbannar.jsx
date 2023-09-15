import { urlFor } from '@/lib/client'
import Link from 'next/link'
import React from 'react'

const Footerbannar = ({ Footerbannar }) => {
  console.log(Footerbannar)
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{Footerbannar.discount}</p>
          <h3>{Footerbannar.largeText}</h3>
          <h3>{Footerbannar.midText}</h3>
          <p>{Footerbannar.saleTime}</p>
        </div>
        <div className='right'>
          <p>{Footerbannar.smallText}</p>
          <h3>{Footerbannar.saleTime}</h3>
          <p style={{ fontSize: '40px' }}>{Footerbannar.desc}</p>
          <p style={{ fontSize: '14px' }}>company that's grown from 270 to 480 employees in the last 12 months.</p>
          <Link href={`/product/${Footerbannar.product}`}>
            <button type='button'>{Footerbannar.buttonText}</button>
          </Link>
        </div>
        <img src={urlFor(Footerbannar.image)} alt="" className='footer-banner-image' height={550}  style={{overflow:'hidden'}}/>
      </div>
    </div>
  )
}

export default Footerbannar