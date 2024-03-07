import React from "react";
import Logo from "../assets/logo.jpg";
import Image from "next/image";

export default function BrandIcon() {
  return (
    <>
      <Image src={Logo} />
    </>
  );
}
