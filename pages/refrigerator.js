import About from "@/components/About";
import Contact from "@/components/contact";
import FixedCall from "@/components/FixedCall";
import Footer from "@/components/footer";
import Header from "@/components/Header";
import Navbar from "@/components/navbar";
import ServiceDetials from "@/components/ServiceDetials";
import Testimonial from "@/components/Testimonial";
import Head from 'next/head'
function Refigerator(){
    const imagesSrc=[
            '/images/refrigarator/img1.jpg',
            '/images/refrigarator/img2.jpeg',
            '/images/refrigarator/img4.jpg',

    ]
    return(
        <>
        <Head>
        <title>Refrigerator repairs and services in bangalore</title>
        <meta property="og:title" content="Looking for reliable and affordable refrigerator repair services in Bangalore? Look no further than Paircare! Our expert technicians specialize in all aspects of fridge repair
As the premier refrigerator service center in Bangalore, we offer same-day services, affordable rates, and exceptional quality, so you can enjoy cool and fresh food again.
and our experienced refrigerator technicians and mechanics can diagnose and fix any fridge problem, regardless of the brand or model. Whether you need fridge maintenance or repairs, Paircare has got you covered. Contact us now to book your fridge repair service and experience hassle-free, high-quality service today" key="Refrigerator repairs and services" />
       <meta property="og:title"content="https://raw.githubusercontent.com/Mahammed-Siyabuddeen/homecare/main/favicon.ico"/>
       
        </Head>

        <Navbar/>
        <Header item={'refrigerator'}/>
        <About/>
        <ServiceDetials item={'refrigerator'}/>
        <Contact/>
        <Testimonial imagesSrc={imagesSrc}/>
        <Footer/>
        <FixedCall/>
        </>
    )
}

export default Refigerator;