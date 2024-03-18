import Image from 'next/image'
import styles from './card.module.css'
import Link from 'next/link'

const Card = () => {
    return(
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.02.2023 - </span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href='/'>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro?</h1>
                </Link>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quae velit veniam fuga, tenetur quaerat repellat corporis in maiores cum facilis nisi iste asperiores debitis molestiae delectus? A, aperiam suscipit.
                </p>
                <Link href='/' className={styles.link}>Read More</Link>
            </div>
        </div>
    )
}

export default Card