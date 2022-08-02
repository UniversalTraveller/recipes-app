import Link from "next/link";
export default function Header() {
  return (
    <nav>
      <Link href="/">
        <a>Startseite</a>
      </Link>

      <Link href="/dessert">
        <a>Dessert</a>
      </Link>
      <Link href="/veggie">
        <a>Veggie</a>
      </Link>
    </nav>
  );
}
