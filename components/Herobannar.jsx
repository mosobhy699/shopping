import React from 'react'
import Link from 'next/link'
import { urlFor } from '@/lib/client'
const Herobannar = ({herobannar}) => {
    return (
        < div className='hero-banner-container' >
            <div>
                <p className='beats-solo'>
                   {herobannar.smallText}
                </p>
                <h3 style={{color:"red"}}>
                {herobannar.desc}
                </h3>
                <h1>{herobannar.largeText}</h1>
                <img src={urlFor(herobannar.image)} alt='headphone'
                    className='hero-banner-image' />
                <div>
                    <Link href="/product/headphones">
                        <button
                            type='button'>{herobannar.buttonText}</button>
                    </Link>
                    <div className='desc'>
                        <h5>Description</h5>
                        <p>{herobannar.largeText2}</p>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Herobannar