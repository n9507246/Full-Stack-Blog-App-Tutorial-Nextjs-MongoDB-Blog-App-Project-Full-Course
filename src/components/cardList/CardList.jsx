import React from "react"
import styles from './cardList.module.css'
import Pagination from "../pagination/Pagination"
import Card from "../card/Card"

const CardList = () => {
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Recent post</h1>
            <div className={styles.posts}>
                <Card/>
            </div>
            <Pagination/>
        </div>
    )
}

export default CardList