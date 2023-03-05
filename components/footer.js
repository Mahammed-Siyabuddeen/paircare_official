import React from "react";
import Image from "next/image";
import style from '../styles/footer.module.css'
import { Copyright } from "@mui/icons-material";
import { useRouter } from "next/router";
import { Box, Paper, Typography } from "@mui/material";
function Footer() {
    const router=useRouter()
    // console.log(router);
    return (
        <div className={style.footer}>
            <div className={style.footer_container}>
                <div>
                    <Image src='/log-1.jpg' alt='paicare_services' width={100} height={100} />
                    <div className={style.footer_details}>
                        <p>Paircare@gmail.com</p>
                        <p>+91 8792635047</p>
                    </div>
                </div>
                <hr />
                <p> Copyright paircare-Developer-cummunity</p>
            </div>
        </div>
    )
}

export default Footer;