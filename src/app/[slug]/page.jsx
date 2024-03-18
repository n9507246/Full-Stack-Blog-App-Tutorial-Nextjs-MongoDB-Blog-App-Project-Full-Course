import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";



const SinglePage = async () => {

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
            <h1 className={styles.title}>
                {/* {data?.title} */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, facere.
            </h1>
          <div className={styles.user}>
            {/* {data?.user?.image && ( */}
              <div className={styles.userImageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
              </div>
            {/* )} */}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        {/* {data?.img && ( */}
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        {/* )} */}
      </div>
      <div className={styles.content}>
         <div className={styles.post}>
          <div
            className={styles.description}
          >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, voluptatem quaerat. Id odit, libero quisquam ipsa, atque expedita eius eligendi tenetur error est ad explicabo, nisi architecto vel iste quibusdam autem doloremque nulla tempora sequi veritatis temporibus magnam? Minima corporis mollitia voluptates alias, minus nobis qui odio deleniti sunt fugiat quis natus labore voluptas vel aut, facere sint libero vero! Ut consequuntur officiis libero facere iure soluta dolorum itaque eligendi exercitationem dignissimos optio, placeat veniam obcaecati blanditiis nemo natus, tempore quas quasi corrupti! Quasi illum facilis minima error voluptates magnam fugiat sapiente officiis explicabo suscipit, adipisci et iusto vero iste.</div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;