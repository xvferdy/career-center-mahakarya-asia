import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

function CardKelas({ kelas }) {
  const { id, img, name, desc } = kelas;

  return (
    <div className="cardKelas">
      <div className="cardKelas__img">
        <Image src={img} width={234} height={142} alt="Kelas" />
      </div>
      <div className="cardKelas__body">
        <p className="cardKelas__body-title">{name}</p>
        <div className="cardKelas__body-desc">{desc}</div>
      </div>
      <div className="divider"></div>
      <div className="cardKelas__cta">
        <Link className="btn btn--link" href={`/kelas/${id}`}>
          Lihat detail kelas <FiArrowRight />
        </Link>
      </div>
    </div>
  );
}

export default CardKelas;
