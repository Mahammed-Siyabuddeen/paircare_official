import React from 'react'
import styles from '.././styles/Header.module.css'
function Header({ item }) {
    console.log("what :", item);
    const data = {
        washingMacine: {
            title: 'Washing Machine Repair & Service',
            p: "Paircare service specializing in all types of washing machine repair services. With rich experience and expertise in the field, we are able to repair all brands of the washing machine and almost all models of the washing machine."
        },
        refrigerator: {
            title: 'Refrigerator Repair & services',
            p: "Paircare service specializing in all types of refrigerator repair and services. With rich experience and expertise in the field, we are able to repair all brands of the refrigerator and almost all models of the refrigerator."

        }
    }
    return (
        <div id="header" className={item==='refrigerator'?styles.colRefrigearator:styles.colWashingmachine}>
            <div className={styles.cotainer}>

                <div className={styles.content}>
                    <h1 className={styles.title}>{item === 'refrigerator' ?
                        data.refrigerator.title
                        : item === 'washingMachine' ?
                            data.washingMacine.title :
                            'paircare repairs and services'}</h1>

                    <p>
                        {
                            item === 'refrigerator' ?
                                data.refrigerator.p
                                : item === 'washingMachine' ?
                                    data.washingMacine.p
                                    : " "

                        }
                    </p>
                    <div className={styles.call_div}>
                        <div className={styles.call_container}>
                            <div className={styles.banner_call}>
                                <a href="tel:8792635047">Call Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header