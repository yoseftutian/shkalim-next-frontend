import Image from "next/image";

export default function MyImage({ src }) {
  return <Image src={src} fill objectFit="contain" />;
}
