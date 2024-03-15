import React from "react"
import styles from './cardList.module.css'
import Pagination from "../pagination/Pagination"

const CardList = () => {
    return(
        <div className={styles.container}>
            Post card 1
            Post card 2
            Post card 3
            Post card 4
            Post card 5
            <Pagination/>
        </div>
    )
}

export default CardList