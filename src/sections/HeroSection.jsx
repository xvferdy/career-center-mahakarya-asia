import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BiSolidBriefcase } from "react-icons/bi";
import { FaBrain } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

function HeroSection() {
  return (
    <section className="hero">
      <div className="boxes">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>

        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="hero__container">
        <article>
          <div className="header">
            <h1 className="heading-30-bold">Asia Career Center</h1>
          </div>
          <div className="content">
            <div className="content__joined">
              <div className="content__joined-people">
                <Image
                  src={`/assets/og-testi-&-joined/testi2.jpg`}
                  width={32}
                  height={32}
                  alt="Person"
                />
                <Image
                  src={`/assets/og-testi-&-joined/join1.jpg`}
                  width={32}
                  height={32}
                  alt="Person"
                />
                <Image
                  src={`/assets/og-testi-&-joined/testi6.png`}
                  width={32}
                  height={32}
                  alt="Person"
                />
                <Image
                  src={`/assets/og-testi-&-joined/join2.png`}
                  width={32}
                  height={32}
                  alt="Person"
                />
                <Image
                  src={`/assets/og-testi-&-joined/testi4.png`}
                  width={32}
                  height={32}
                  alt="Person"
                />
              </div>
              <p>+42 lainnya telah bergabung</p>
            </div>
            <div className="content__breakdown">
              <div className="content__breakdown-item">
                <div className="content__breakdown-item-title">
                  <div className="icon">
                    <BiSolidBriefcase />
                  </div>
                  <span>Career Preparation</span>
                </div>
                <div className="content__breakdown-item-subtitle">
                  <p>
                    Mempersiapkan dan melatih kamu dalam memperoleh pekerjaan
                    impian!
                  </p>
                </div>
              </div>
              <div className="content__breakdown-item">
                <div className="content__breakdown-item-title">
                  <div className="icon">
                    <FaBrain />
                  </div>
                  <span>UpSkilling</span>
                </div>
                <div className="content__breakdown-item-subtitle">
                  <p>
                    Dibimbing oleh mentor yang berpengalaman di industri
                    profesional di bidangnya
                  </p>
                </div>
              </div>
              <div className="content__breakdown-item">
                <div className="content__breakdown-item-title">
                  <div className="icon">
                    <AiFillHeart />
                  </div>
                  <span>Penyaluran Kerja</span>
                </div>
                <div className="content__breakdown-item-subtitle">
                  <p>
                    Penyaluran kerja dijamin, dibantu sampai dapat kerja, tanpa
                    persyaratan!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="cta">
            <Link
              className="btn btn--primary"
              href={`https://wa.me/6281326301616?text=Halo kak saya mau daftar program career center mahakarya`}
              target="_blank"
            >
              Daftar Sekarang
            </Link>
          </div>
        </article>

        <figure>
          <Image
            src={`/assets/compress/women-red-comp.png`}
            // width={2280}
            // height={2872}

            // width={570}
            // height={718}

            width={1140}
            height={1436}
            // width={1200}
            // height={1512}

            alt="Hero IMG"
            className="hero-img"
          />
          <svg
            className="vector"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="1146"
            height="1669"
            viewBox="0 0 1146 1669"
            fill="none"
          >
            <path
              d="M1146 0C1014.41 361.292 416.81 1089.59 0 1368L468.5 1669C731 1378 1010.5 755.5 1146 0Z"
              fill="#A61B1B"
            />
            <path
              d="M1146 0C1014.41 361.292 416.81 1089.59 0 1368L468.5 1669C731 1378 1010.5 755.5 1146 0Z"
              fill="url(#pattern0)"
            />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="0.0977312"
                height="0.033553"
              >
                <use
                  xlinkHref="#image0_681_869"
                  transform="scale(0.0008726 0.000599161)"
                />
              </pattern>
              <image
                id="image0_681_869"
                width="112"
                height="56"
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
          </svg>
        </figure>
      </div>
    </section>
  );
}

export default HeroSection;
