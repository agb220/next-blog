import Head from "next/head";

type ReviewProps = {
  id: string;
  body: string;
};

export interface ReviewsProps {
  reviews: Array<ReviewProps>;
}

function Reviews({ reviews }: ReviewsProps) {
  return (
    <>
      <Head>
        <title>NEXT Blog | Відгуки покупців</title>
        <meta name="title" content="NEXT Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <h1>Відгуки</h1>
        <div className="reviews">
          {!!reviews.length &&
            reviews.slice(0, 20).map((res) => {
              console.log("res", res.id);
              return (
                <div key={res.id} className="review">
                  {res.id} {`${res.body.slice(0, 90)}...`}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments`);
  const data = await response.json();

  return {
    props: {
      reviews: data,
    },
  };
}

export default Reviews;
