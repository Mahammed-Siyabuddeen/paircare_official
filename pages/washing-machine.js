import About from "@/components/About";
import Contact from "@/components/contact";
import FixedCall from "@/components/FixedCall";
import Footer from "@/components/footer";
import Header from "@/components/Header";
import Navbar from "@/components/navbar";
import ServiceDetials from "@/components/ServiceDetials";
import Testimonial from "@/components/Testimonial";
import { Box, Paper, Typography } from "@mui/material";
import { style } from "@mui/system";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from '../styles/washing-machine.module.css'

function WashingMachine() {
    const imagesSrc=[
        '/images/washing-machine/washing machine repair 2.jpg',
        '/images/washing-machine/washing machine repair 3.jpg',
        '/images/washing-machine/washing machine repair 4.jpg',
        '/images/washing-machine/washing machine repair 5.jpg',
        '/images/washing-machine/washing machine repair 6.jpg',
        '/images/washing-machine/washing machine repair 7.jpg',
    ]
    return (
        <>
            <Navbar />
            <Header item={'washingMachine'}/>
            <About />
            <ServiceDetials item={'washingMachine'}/>
            <Contact/>
            <Testimonial imagesSrc={imagesSrc}/>
            <Footer/>
            <FixedCall/>
        </>
    )

}
export default WashingMachine;