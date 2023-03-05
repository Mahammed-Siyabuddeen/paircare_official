import Image from 'next/image'
import React from 'react'
import styles from '.././styles/washing-machine.module.css'
function ServiceDetials({item}) {
    const data={
        whasingMachine:{
            imgSrc:'/images/washing-machine/about.jpg',
            h2:'Washing machine services',
            p:'Service Expertz is well known for its service of Washing Machines,which are also known as Washers. Our hygiene depends on Cloths we wear every day.Washing machine plays a important role in everyday life. As the usage is on higher side it slows down or stops working due to this. Service Expertz, engineers can repair and service all models ofwashing machines like, top load washing machines, Front load Washing Machines,automatic washing machines, semi automatic washing machinesWe do service for all makes & models of leading brands. We do service for leading brands like LG, ifb, Samsung, Godrej, Whirlpool, Voltas, Bluestar Kelivinator et. We do service for makes & models leading brands.'
        },
        refrigerator:{
            imgSrc:'/images/refrigarator/img1.webp',
            h2:'Refrigerator serivces',
            p:'We provide best quality refrigerator repairing services at reasonable price, Our refrigerator repair experts have 15+ years of experience in repairing various types of refrigerators. Just give us a call and we will be at your door step to help you. Since every refrigerator has its own sets of standards, manuals and support systems, our engineers are well aware of each and every part of the refrigerator giving you a smooth experience. So whether it is Compact Refrigerator, Side by side Refrigerator, Double Door or Single Door Refrigerator, we give services to almost every part of your Refrigerator. We provide complete refrigerator services We provide Services for all brands of Refrigerator Like LG Refrigerator, Samsung Refrigerator, Whirlpool Refrigerator, Godrej Refrigerator, Haier Refrigerator, Hitachi Refrigerator, Panasonic Refrigerator, Videocon Refrigerator, Kelvinator Refrigerator, IFB Refrigerator, Fisher And Paykel Refrigerator, Sansui Refrigerator, Bosch Refrigerator, Sharp Refrigerator, BPL Refrigerator, GEM Refrigerator, Siemens Refrigerator, Croma Refrigerator, GE Refrigerator in All over bangalore.'
        }
    }
    return (
        <div className={styles.services_container}>
            <div id="about" className={styles.container}>
                <h2 className={styles.abouttitle}>
                    {item==='washingMachine'?data.whasingMachine.h2:item==='refrigerator'?data.refrigerator.h2:'Paircare Serivces'}
                    </h2>
                <div className={styles.row}>
                    <div className={styles.col2}>
                        <Image src={item==='washingMachine'?data.whasingMachine.imgSrc:data.refrigerator.imgSrc} width={600} height={450} className={styles.imageround} alt="washing-machine" />
                    </div>
                    <div className={styles.col2}>
                        <p>
                           {
                            item==='washingMachine'?
                            data.whasingMachine.p
                            :data.refrigerator.p
                           }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceDetials