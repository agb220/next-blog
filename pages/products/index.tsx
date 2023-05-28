import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/blogs.module.css";

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:5000/items`);

  const data = await res.json();

  return {
    props: { blogs: data },
  };
};

type BlogProps = {
  id: string;
  desc: string;
  image: string;
  address: number;
  name: string;
};

export interface BlogsProps {
  blogs: Array<BlogProps>;
}

function Blogs({ blogs }: BlogsProps) {
  return (
    <div className={styles.blogs}>
      <h1>Визначні пам'ятки</h1>
      {blogs &&
        blogs.map((blog) => {
          return (
            <Link
              href={`/products/${blog.id}`}
              key={blog.id}
              className={styles.blogCard}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={`${blog.image}`}
                  alt={`${blog.name}`}
                  width={550}
                  height={400}
                  objectFit="cover"
                />
              </div>
              <div>
                <h3>{blog.name}</h3>
                <p>{blog.desc}</p>
                <p>{blog.address}</p>
              </div>
            </Link>
          );
        })}
    </div>
  );
}

export default Blogs;
