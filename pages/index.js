import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Call, LocationOn } from '@mui/icons-material'
import { Box, Paper, Typography } from '@mui/material'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Link from 'next/link'
import About from '@/components/About'
import FixedCall from '@/components/FixedCall'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Paircare</title>
        <meta name="description" content="paircar is services provides all type of home services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <div id='Home' className="header">
          <img src="./images/paicare_services.jpg" alt="paicare_services" />
          <div className="foreheader">
            <h1>Paircare services </h1>
            <div>
              <LocationOn sx={{ color: 'red' }} />
              <p>Bangalore</p>
            </div>
          </div>
        </div>
        <div className="services_container">
          <h1 id='Services'>Paircare Services</h1>
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: {
              xs: 300,
              sm: 300,
              md: 1000,
              lg: 1000,
              xl: 1000
            },
            alignItems: 'center',

            marginTop: '20px',
            '& > :not(style)': {
              m: 1,
              width: 300,
              height: 350,
            },
          }}>
            <Paper elevation={3} >
              <Link href={'/washing-machine'}>
                <Typography variant='h2'>
                  <Image src={'/images/washingmachine_services.jpg'} alt='wasingmachine_services'
                    width={300}
                    height={300}
                  />
                </Typography>
                <h2 className='ServicesH2'>Washing machine service </h2>
              </Link>
            </Paper>
            <Paper elevation={3}>
              <Link href={'/refrigerator'}>
                <Typography variant='h2'>
                  <Image src={'/images/refrigerator_services.jpeg'} alt='refrigerator_services'
                    width={300}
                    height={300}
                  />
                </Typography>
                <h2 className='ServicesH2'>Refrigerator service </h2>
              </Link>
            </Paper>
            <Paper elevation={3}>
              <Link href={'/ac-services'}>
                <Typography variant='h2'>
                  <Image src={'/images/Ac_services.jpg'} alt='Ac_services'
                    width={300}
                    height={300}
                  />
                </Typography>
                <h2 className='ServicesH2'>Ac service </h2>
              </Link>
            </Paper>
          </Box>
        </div>
       <About/>
        <Contact />
        <Footer />
       <FixedCall/>
      </div>

    </>
  )
}
