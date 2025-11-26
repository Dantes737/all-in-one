import Image from "next/image";

export function IcosahedronSkeleton() {
  return (
    <Image
      src="/icosahedron.png"
      width={1000}
      height={760}
      className="block absolute"
      alt="Icosahedron skeleton image"
    />
  );
}
