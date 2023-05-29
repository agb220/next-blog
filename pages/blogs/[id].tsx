import Image from "next/image";

import styles from "@/styles/blogs.module.css";

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:5000/items`);

  const data = await res.json();

  const paths = data.map((blog: { id: string }) => {
    return {
      params: { id: blog.id },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: { params: { id: string } }) => {
  const id = context.params.id;

  const res = await fetch(`http://localhost:5000/items/${id}`);

  const data = await res.json();

  return {
    props: { blog: data },
  };
};

type BlogProps = {
  id: string;
  desc: string;
  image: string;
  address: string;
  name: string;
};

function Blog({ blog }: { blog: BlogProps }) {
  return (
    <div className={styles.singlePost}>
      <h1>{blog.name}</h1>
      <div className={styles.imageContainer}>
        <Image
          src={`${blog.image}`}
          alt={`${blog.name}`}
          width={800}
          height={450}
        />
      </div>
      <p>{blog.desc}</p>
      <p>{blog.address}</p>
    </div>
  );
}

export default Blog;
