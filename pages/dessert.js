import Image from "next/image";

export default function Dessert() {
  return (
    <>
      <h1>Dessert</h1>
      <p>Softeis</p>
      <Image
        src="https://unsplash.com/photos/surQ2mkZNxw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mzd8fGRlc3NlcnR8ZW58MHwwfHx8MTY1OTMzNzk1NQ&force=true&w=2400"
        width="2400"
        height="1600"
        layout="responsive"
        alt="Die Nachspeise"
      />
    </>
  );
}
