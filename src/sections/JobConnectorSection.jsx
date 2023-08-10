import React from "react";
import Image from "next/image";
import Link from "next/link";
import Tabs from "@/components/Tabs";
import { alur } from "@/utils/localData";

function JobConnectorSection() {
  return (
    <section className="alur">
      <div className="alur__container">
        <figure>
          <Image
            src={`/assets/og-unsplash/alur.jpg`}
            width={1320}
            height={507}
            alt="Alur job kenektor"
          />
        </figure>

        <article>
          <div className="header">
            <span className="label-14-bold">JOB CONNECTOR</span>
            <h2 className="heading-30-bold">Alur Program Career Center</h2>
          </div>
          <div className="content">
            <Tabs alur={alur} />
            <div className="content__cta">
              <Link
                className="btn btn--primary"
                href={`https://wa.me/6281326301616?text=Halo kak saya mau daftar program career center mahakarya`}
                target="_blank"
              >
                Daftar sekarang
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default JobConnectorSection;
