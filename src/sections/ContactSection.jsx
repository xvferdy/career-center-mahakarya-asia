import React from "react";
import Image from "next/image";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

function ContactSection() {
  return (
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
  );
}

export default ContactSection;
