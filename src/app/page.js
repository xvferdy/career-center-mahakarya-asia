import Image from "next/image";
import Link from "next/link";
import CardKelas from "@/component/CardKelas";
import CardPricing from "@/component/CardPricing";
import Tabs from "@/component/Tabs";
import { kelas, alur, faqs } from "@/utils/localData";
import Testimonials from "@/component/Testimonials";
import Accordion from "@/component/Accordion";

export default function Home() {
  // const kelas = [
  //   {
  //     id: 1,
  //     slug: "MERN",
  //     img: "mern.PNG",
  //     name: "Programmer MERN",
  //     desc: "Profesi yang bertugas membuat dan mengelola suatu aplikasi (React & Express)",
  //   },
  //   {
  //     id: 2,
  //     slug: "UIUX",
  //     img: "uiux.PNG",
  //     name: "UI/UX Designer",
  //     desc: "UI/UX Designer profesi yang bertugas meriset dan membuat tampilan suatu aplikasi",
  //   },
  //   {
  //     id: 3,
  //     slug: "QA",
  //     img: "qa.PNG",
  //     name: "Quality Assurance",
  //     desc: "Profesi yang bertugas melakukan pengecekan qualitas suatu aplikasi seperti error, alur, sistem dll",
  //   },
  //   {
  //     id: 4,
  //     slug: "DM",
  //     img: "dm.PNG",
  //     name: "Digital Marketing",
  //     desc: "Profersi yang bertugas melakukan marketing dengan pendekatan serba digital",
  //   },
  //   {
  //     id: 5,
  //     slug: "laravel",
  //     img: "laravel.PNG",
  //     name: "Laravel Vue JS",
  //     desc: "Profesi yang bertugas membuat dan mengelola suatu aplikasi (Vue.Js & Laravel)",
  //   },
  //   {
  //     id: 6,
  //     slug: "HR",
  //     img: "hr.PNG",
  //     name: "HR: Talent Acquisition",
  //     desc: "Talent acquisition adalah proses memilih dan mempertahankan talenta potensial perusahaan",
  //   },
  // ];

  // const alur = [
  //   {
  //     label: "1. Pendaftaran",
  //     title: "Deskripsi Pendaftaran",
  //     paragraph1:
  //       "Lorem ipsum dolor sit amet consectetur. Suspendisse fringilla dictum velit ullamcorper rutrum in urna gravida. Duis quam aliquet bibendum dignissim adipiscing ac eu. Quis adipiscing sit aliquet pellentesque nulla nunc at ultrices. Vel volutpat in arcu gravida est nulla. Enim ut consectetur eget nisl duis sit sed dignissim.",
  //     paragraph2:
  //       "Lorem ipsum dolor sit amet consectetur. Quis adipiscing sit aliquet pellentesque nulla nunc at ultrices. Vel volutpat in arcu gravida est nulla. Enim ut consectetur eget nisl duis sit sed dignissim.",
  //   },
  //   {
  //     label: "2. Pilih Program",
  //     title: "Deskripsi Pilih Program",
  //     paragraph1: "Lorem Suspendisse fringilla dictum velit ullamcorper.",
  //     paragraph2: "",
  //   },
  //   {
  //     label: "3. Pilih Kelas",
  //     title: "Deskripsi Pilih Kelas",
  //     paragraph1: "Velit ullamcorper rutrum in urna gravida.",
  //     paragraph2: "",
  //   },
  //   {
  //     label: "4. UpSkill",
  //     title: "Deskripsi UpSkill",
  //     paragraph1: "Rutrum in urna gravida. Duis quam aliquet bibendum.",
  //     paragraph2: "",
  //   },
  //   {
  //     label: "5. Project",
  //     title: "Deskripsi Project",
  //     paragraph1: "Duis quam aliquet bibendum dignissim adipiscing ac eu.",
  //     paragraph2: "",
  //   },
  //   {
  //     label: "6. Penyaluran Kerja",
  //     title: "Deskripsi Penyaluran Kerja",
  //     paragraph1: "Quis adipiscing sit aliquet pellentesque nulla at ultrices.",
  //     paragraph2: "",
  //   },
  //   {
  //     label: "7. Kerja",
  //     title: "Deskripsi Kerja",
  //     paragraph1: "Enim ut consectetur eget nisl duis sit sed dignissim.",
  //     paragraph2: "",
  //   },
  // ];
  return (
    // <main className={`homepage-main ${openSans.className}`}>
    <main className="homepage-main">
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
                Program pelatihan dan penyaluran kerja. Berbagai Pelatihan yang
                diselenggarakan oleh UNMAHA melalui Asia Career Centre (ACC),
                Akan bikin kamu lebih mudah dapetin pekerjaan, bahkan ketika
                kamu baru di semester pertama perkuliahan.
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
                pilih mulai dari UpSkill dengan mengikuti kelas Reguler dan ISA
                atau hanya mau program penyaluran saja
              </p>

              <div className="cards">
                <CardPricing />
                <CardPricing />
                <CardPricing />
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* SECTION KELAS */}
      <section className="kelas">
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
              <Testimonials />
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
                    <Accordion question={question} answer={answer}></Accordion>
                  </div>
                );
              })}
            </div>
          </article>
        </div>
      </section>

      {/* SECTION CONTACT */}
      <section className="contact">
        <div className="contact__container">
          <article>
            <div className="header">
              <span className="label-14-bold">HELP CENTER</span>
              <h2 className="heading-30-bold">FAQs</h2>
            </div>
            <div className="content">contact</div>
          </article>
        </div>
      </section>
    </main>
  );
}
