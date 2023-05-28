import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

function NotFoundPage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Ой..... щось пішло не так </h1>
      <h2>Такої сторінки не існує</h2>
      <p>
        Повертаюсь <Link href="/"> на головну сторінку</Link>
        через 3 секунди
      </p>
    </div>
  );
}

export default NotFoundPage;
