import About from "@/components/About";
import Contact from "@/components/contact";
import FixedCall from "@/components/FixedCall";
import Footer from "@/components/footer";
import Header from "@/components/Header";
import Navbar from "@/components/navbar";
import ServiceDetials from "@/components/ServiceDetials";
import Testimonial from "@/components/Testimonial";
function Refigerator(){
    const imagesSrc=[
            '/images/refrigarator/img1.jpg',
            '/images/refrigarator/img2.jpeg',
            '/images/refrigarator/img4.jpg',

    ]
    return(
        <>
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