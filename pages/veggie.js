import Image from "next/image";

export default function Veggie() {
  return (
    <>
      <h1>Veggie</h1>
      <p>Pizza</p>
      <Image
        src="/pizza.jpg"
        alt="Leckere Pizza"
        layout="responsive"
        width="2400"
        height="1596"
      />
    </>
  );
}
