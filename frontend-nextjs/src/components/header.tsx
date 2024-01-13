import Link from "next/link";

export default function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/cam/">Cam Streams</Link>
        </li>
        <li>
          <Link href="/webcam/">Webcam</Link>
        </li>
      </ul>
    </header>
  );
}