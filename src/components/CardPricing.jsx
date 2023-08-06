import React from "react";
import Link from "next/link";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { RxOpenInNewWindow } from "react-icons/rx";

function CardPricing() {
  return (
    <div className="cardPricing">
      <div className="cardPricing__copy">
        <div className="cardPricing__copy-program">
          <span className="label-16-bold">REGULER</span>
        </div>
        <div className="cardPricing__copy-price">
          <div className="cardPricing-container">
            <div className="prices">
              <div className="discount">Rp. 1Jt,-</div>
              <div className="og">Rp. 6,6Jt,-</div>
            </div>
            <p className="desc body-14-bold">
              Total 6,6jt, Cicilan 1jt/ bulan x 6 bulan
            </p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="cardPricing__copy-features">
          <span className="label-12-bold">KEY FEATURES</span>
          <ul>
            <li>
              <BsFillPatchCheckFill />
              Mentoring 1 on 1
            </li>
            <li>
              <BsFillPatchCheckFill />
              Live group mentoring
            </li>
            <li>
              <BsFillPatchCheckFill />
              Bonus video materi
            </li>
            <li>
              <BsFillPatchCheckFill />
              Pendampingan kerja
            </li>
            <li>
              <BsFillPatchCheckFill />
              Cicilan hingga 6x
            </li>
            <li>
              <BsFillPatchCheckFill />
              Sertifikat
            </li>
            <li>
              <BsFillPatchCheckFill />
              Tanpa seleksi
            </li>
            <li>
              <BsFillPatchCheckFill />
              Lebih terjangkau dari ISA
            </li>
            <li>
              <BsFillPatchCheckFill />
              Penyaluran kerja
            </li>
          </ul>
        </div>
      </div>
      <div className="cardPricing__cta">
        <Link className="btn btn--primary" href={`/kelas/wa`}>
          Pilih paket ini <RxOpenInNewWindow />
        </Link>
      </div>
    </div>
  );
}

export default CardPricing;
