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
                <Link href="#">Kerjasama Dalam Negeri</Link>
              </li>
              <li>
                <Link href="#">Kerjasama Luar Negeri</Link>
              </li>
              <li>
                <Link href="#">Alumni</Link>
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
                <Link href="#">Penjaminan Mutu</Link>
              </li>
              <li>
                <Link href="#">Portal Akademik Mahasiswa</Link>
              </li>
              <li>
                <Link href="#">Portal Akademik Dosen</Link>
              </li>
              <li>
                <Link href="#">e-Journal</Link>
              </li>
              <li>
                <Link href="#">Penelitian & Pengabdian</Link>
              </li>
              <li>
                <Link href="#">Training & Pengembangan SDM</Link>
              </li>
              <li>
                <Link href="#">Sistem Unmaha</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="socials">
            <Link href="#">
              <TiSocialInstagram />
            </Link>
            <Link href="#">
              <AiFillFacebook />
            </Link>
            <Link href="#">
              <AiFillTwitterCircle />
            </Link>
            <Link href="#">
              <AiFillYoutube />
            </Link>
          </div>
          <Image
            src={"/assets/logo-footer.png"}
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
