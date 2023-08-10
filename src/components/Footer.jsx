import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TiSocialInstagram } from "react-icons/ti";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__links">
          <div className="location">
            <span className="label-16-bold">Lokasi</span>
            <ul>
              <li>
                <p className="title">Kampus Yogyakarta</p>
                <p>
                  Jl. Magelang No.Km.8, Mlati Glondong, Sendangadi, Kec. Mlati,
                  Kabupaten Sleman, Daerah Istimewa Yogyakarta 55285
                </p>
              </li>
              <li>
                <p className="title">Kampus Baturaja</p>
                <p>
                  Jl. Jendral A. Yani No.0267 A, Tanjung Baru, Baturaja
                  TimurKab. Ogan Komering Ulu, Sumatera Selatan
                </p>
              </li>
              <li>
                <p className="title">Kampus Jakarta</p>
                <p>
                  Apartemen Kalibata City Tower Sakura Lantai I Jalan Raya
                  Kalibata City, Kec. Pancoran Kota Jakarta Selatan
                </p>
              </li>
            </ul>
          </div>
          <div className="kerja-sama">
            <span className="label-16-bold">Kerjasama</span>
            <ul>
              <li>
                <Link href="https://unmaha.ac.id/kerjasama-dalam-negeri">
                  Kerjasama Dalam Negeri
                </Link>
              </li>
              <li>
                <Link href="https://unmaha.ac.id/kerjasama-luar-negeri">
                  Kerjasama Luar Negeri
                </Link>
              </li>
              <li>
                <Link href="https://unmaha.ac.id/alumni">Alumni</Link>
              </li>
            </ul>
          </div>
          <div className="prodi">
            <span className="label-16-bold">Program Studi</span>
            <ul>
              <li>
                <Link href="#">Teknik Informatika</Link>
              </li>
              <li>
                <Link href="#">Sistem Informasi</Link>
              </li>
              <li>
                <Link href="#">Kewirausahaan</Link>
              </li>
              <li>
                <Link href="#">Akuntansi</Link>
              </li>
              <li>
                <Link href="#">Management</Link>
              </li>
              <li>
                <Link href="#">Arsitektur</Link>
              </li>
              <li>
                <Link href="#">Teknik Industri</Link>
              </li>
              <li>
                <Link href="#">Sains Informasi Geografi</Link>
              </li>
              <li>
                <Link href="#">Perhotelan</Link>
              </li>
              <li>
                <Link href="#">Management Informatika</Link>
              </li>
            </ul>
          </div>
          <div className="lainnya">
            <span className="label-16-bold">Link Lainnya</span>
            <ul>
              <li>
                <Link href="https://bpm.unmaha.ac.id/">Penjaminan Mutu</Link>
              </li>
              <li>
                <Link href="https://mahasiswa.unmaha.ac.id/">
                  Portal Akademik Mahasiswa
                </Link>
              </li>
              <li>
                <Link href="https://dosen.unmaha.ac.id/">
                  Portal Akademik Dosen
                </Link>
              </li>
              <li>
                <Link href="https://journal.unmaha.ac.id/">e-Journal</Link>
              </li>
              <li>
                <Link href="https://lppm.unmaha.ac.id/">
                  Penelitian & Pengabdian
                </Link>
              </li>
              <li>
                <Link href="https://training.unmaha.ac.id/">
                  Training & Pengembangan SDM
                </Link>
              </li>
              <li>
                <Link href="https://sistem.unmaha.ac.id/">Sistem Unmaha</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="socials">
            <Link
              href="https://www.instagram.com/mahakarya.asia"
              target="_blank"
            >
              <TiSocialInstagram />
            </Link>
            <Link
              href="https://www.facebook.com/mahakarya.asia"
              target="_blank"
            >
              <AiFillFacebook />
            </Link>
            <Link href="https://twitter.com/mahakaryaasia" target="_blank">
              <AiFillTwitterCircle />
            </Link>
            <Link
              href="https://www.youtube.com/@UniversitasMahakaryaAsia"
              target="_blank"
            >
              <AiFillYoutube />
            </Link>
          </div>
          <Image
            src={"/assets/og-logo/logo-footer.png"}
            width={200}
            height={61}
            alt="logo"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
