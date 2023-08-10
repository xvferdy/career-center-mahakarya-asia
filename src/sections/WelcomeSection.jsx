import React from "react";
import Image from "next/image";

function WelcomeSection() {
  return (
    <section className="welcome">
      <div className="welcome__container">
        <figure>
          <Image
            src={`/assets/compress/welcome-comp.jpg`}
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
              Kamu juga beruntung, Universitas Mahakarya Asia, memiliki Program
              pelatihan dan penyaluran kerja. Berbagai Pelatihan yang
              diselenggarakan oleh UNMAHA melalui Asia Career Centre (ACC), Akan
              bikin kamu lebih mudah dapetin pekerjaan, bahkan ketika kamu baru
              di semester pertama perkuliahan.
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
  );
}

export default WelcomeSection;
