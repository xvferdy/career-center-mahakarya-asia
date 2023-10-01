import React from "react";
import Partners from "@/components/Partners";
import Image from "next/image";
import Link from "next/link";

function HiringPartnersSection() {
  return (
    <section className="partners">
      <div className="partners__container">
        <article>
          <div className="content">
            <Partners />
          </div>
          <Link className="header" href={`https://eduwork.id/`} target="_blank">
            <p>POWERED BY</p>
            <Image
              src={"/assets/og-logo/logo-edu.png"}
              width={97}
              height={18.77}
              alt="eduwork-logo"
            />
          </Link>
        </article>
      </div>
    </section>
  );
}

export default HiringPartnersSection;
