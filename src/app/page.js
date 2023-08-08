"use client";
import Image from "next/image";
import Link from "next/link";
import CardKelas from "@/components/CardKelas";
import CardPricing from "@/components/CardPricing";
import Tabs from "@/components/Tabs";
import {
  kelas,
  alur,
  faqs,
  kelebihan,
  testimonials,
  pricing,
} from "@/utils/localData";

import Testimonials from "@/components/Testimonials";
import Accordion from "@/components/Accordion";
import CardKelebihan from "@/components/CardKelebihan";
import Partners from "@/components/Partners";

import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { IoLogoWhatsapp } from "react-icons/io";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    // <main className={`homepage-main ${openSans.className}`}>
    <main className="homepage-main">
      {/* SECTION HERO */}
      <Hero />

      <div className="white">
        {/* SECTION KELEBIHAN */}
        <section className="kelebihan">
          <div className="kelebihan__container">
            <article>
              <div className="header">
                <span className="label-14-bold">ABOUT US</span>

                <h2 className="heading-30-bold">Kenapa Memilih Kami</h2>
              </div>
              <div className="content">
                <div className="cards">
                  {kelebihan.map((kelebihan, idx) => (
                    <CardKelebihan key={idx} kelebihan={kelebihan} />
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* SECTION PARTNERS */}
        <section className="partners">
          <div className="partners__container">
            <article>
              <div className="header">
                <p>HIRING PARTNERS</p>
              </div>
              <div className="content">
                <Partners />
              </div>
            </article>
          </div>
        </section>

        {/* SECTION WELCOME */}
        <section className="welcome">
          <div className="welcome__container">
            <figure>
              <Image
                src={`/assets/welcome.jpg`}
                width={648}
                height={405}
                alt="Welcome to career center mahakarya"
              />
            </figure>

            <article>
              <div className="header">
                <span className="label-14-bold">WELCOME</span>
                <h2 className="heading-30-bold">
                  Selamat Datang di Career Center Mahakarya
                </h2>
              </div>
              <div className="content">
                <p className="body-16-reg">
                  Kamu juga beruntung, Universitas Mahakarya Asia, memiliki
                  Program pelatihan dan penyaluran kerja. Berbagai Pelatihan
                  yang diselenggarakan oleh UNMAHA melalui Asia Career Centre
                  (ACC), Akan bikin kamu lebih mudah dapetin pekerjaan, bahkan
                  ketika kamu baru di semester pertama perkuliahan.
                </p>
                <div className="content__stats">
                  <div className="content__stats-stat">
                    <h3 className="heading-24-bold">1200+</h3>
                    <span className="label-12-bold">HIRING PARTNERS</span>
                  </div>
                  <div className="content__stats-stat">
                    <h3 className="heading-24-bold">71%</h3>
                    <span className="label-12-bold">TERSALURKAN</span>
                  </div>
                  <div className="content__stats-stat">
                    <h3 className="heading-24-bold">12+</h3>
                    <span className="label-12-bold">VARIASI KELAS</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* SECTION PRICING */}
        <section className="pricing">
          <div className="pricing__container">
            <article>
              <div className="header">
                <span className="label-14-bold">CAREER CENTER PROGRAM</span>
                <h2 className="heading-30-bold">
                  Program Career Center Yang Bisa Kamu Ikutin
                </h2>
              </div>
              <div className="content">
                <p className="body-16-reg">
                  Ada 3 paket di dalam Career Center Mahakarya yang bisa kamu
                  pilih mulai dari UpSkill dengan mengikuti kelas Reguler dan
                  ISA atau hanya mau program penyaluran saja
                </p>

                <div className="cards">
                  {pricing.map((program, idx) => (
                    <CardPricing key={idx} {...program} />
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* SECTION KELAS */}
        <section id="kelas" className="kelas">
          <div className="kelas__container">
            <article>
              <div className="header">
                <span className="label-14-bold">AVAILABLE CLASS</span>
                <h2 className="heading-30-bold">Kelas Untuk Program UpSkill</h2>
              </div>
              <div className="cards">
                {kelas.map((kelas, id) => (
                  <CardKelas key={id} kelas={kelas} />
                ))}
              </div>
            </article>
          </div>
        </section>

        {/* SECTION JOB CONNECTOR */}
        <section className="alur">
          <div className="alur__container">
            <figure>
              <Image
                src={`/assets/alur.jpg`}
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
                  <Link className="btn btn--primary" href={`/kelas/wa`}>
                    Daftar sekarang
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* SECTION TESTIMONI */}
        <section className="testimoni">
          <div className="testimoni__container">
            <article>
              <div className="header">
                <span className="label-14-bold">TESTIMONIALS</span>
                <h2 className="heading-30-bold">Apa Kata Mereka</h2>
              </div>
              <div className="content">
                <Testimonials testimonials={testimonials} />
              </div>
            </article>
          </div>
        </section>

        {/* SECTION FAQ */}
        <section className="faqs">
          <div className="faqs__container">
            <article>
              <div className="header">
                <span className="label-14-bold">HELP CENTER</span>
                <h2 className="heading-30-bold">FAQs</h2>
              </div>
              <div className="content">
                {faqs.map((item, idx) => {
                  const { question, answer } = item;
                  return (
                    <div key={idx} className="accordions">
                      <Accordion
                        question={question}
                        answer={answer}
                      ></Accordion>
                    </div>
                  );
                })}
              </div>
            </article>
          </div>
        </section>
      </div>

      {/* SECTION CONTACT */}
      <section id="contact" className="contact">
        <div className="contact__container">
          <figure>
            <Image
              src={`/assets/compress/mhs-wisuda-comp.png`}
              width={720}
              height={1320}
              alt="About Us"
            />
          </figure>

          <article>
            <div className="header">
              <span className="label-14-bold">CONTACT US</span>
              <h2 className="heading-30-bold">More About Mahakarya Asia</h2>
            </div>
            <div className="content">
              <p className="body-16-reg">
                Less than 12 hour response to your question
              </p>
              <div className="content__contacts">
                <div className="content__contacts-contact">
                  <FaPhoneSquareAlt />
                  <p className="body-16-reg">+6282327610069 - Admin 1 Jogja</p>
                </div>
                <div className="content__contacts-contact">
                  <MdEmail />
                  <p className="body-16-reg">info@unmaha.ac.id</p>
                </div>
                <div className="content__contacts-contact">
                  <FaPhoneSquareAlt />
                  <p className="body-16-reg">+6282327610070 - Admin 2 Jogja</p>
                </div>
                <div className="content__contacts-contact">
                  <FaPhoneSquareAlt />
                  <p className="body-16-reg">+62274866800 - Jogja</p>
                </div>
                <div className="content__contacts-contact">
                  <IoLogoWhatsapp />
                  <p className="body-16-reg">+6281294195331 - Jakarta</p>
                </div>
                <div className="content__contacts-contact">
                  <FaPhoneSquareAlt />
                  <p className="body-16-reg">+6281294195331 - Jakarta</p>
                </div>
                <div className="content__contacts-contact">
                  <IoLogoWhatsapp />
                  <p className="body-16-reg">+6282181849997 - Baturaja</p>
                </div>
                <div className="content__contacts-contact">
                  <FaPhoneSquareAlt />
                  <p className="body-16-reg">+6282181849997 - Baturaja</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
