import Link from "next/link";
import { BsFillSunriseFill } from "react-icons/Bs";

function Header() {
  return (
    <header>
      <div>
        <BsFillSunriseFill />
      </div>
      <nav>
        <Link href="/">На головну</Link>
        <Link href="/about">Про нас</Link>
        <Link href="/reviews">Відгуки</Link>
        <Link href="/blogs">Визначні пам'ятки</Link>
      </nav>
    </header>
  );
}

export default Header;
