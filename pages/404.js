import Contact from '@/components/contact';
import Navbar from '@/components/navbar';
import { LocationOn } from '@mui/icons-material';
import Image from 'next/image';
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

function Custom404() {
    const router = useRouter()
    useEffect(() => {
        router.push('/');
    })
    return (
        <div>
            <Navbar />
            <div id='Home' className="header">
                <Image fill src="/images/paicare_services.jpg" alt="paicare_services" />
                <div className="foreheader">
                    <h1>Paircare services </h1>
                    <div>
                        <LocationOn sx={{ color: 'red' }} />
                        <p>Bangalore</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Custom404