"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="f-grid">
          <div>
            <div className="logo" style={{ marginBottom: "14px" }}>
              Glamorí<small>by Sully &amp; Co.</small>
            </div>
            <p>
              Klinik kecantikan &amp; aesthetic modern di Jakarta dan Bandar
              Lampung.
            </p>
            <p style={{ marginTop: "8px" }}>
              <b>Jam:</b> Senin–Minggu, 09.30–18.00
            </p>
          </div>
          <div>
            <h5>Menu</h5>
            <Link href="/">Beranda</Link>
            <Link href="/#why-us">Tentang Kami</Link>
            <a
              href="https://wa.me/6285270010701"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hubungi Kami
            </a>
          </div>
          <div>
            <h5>Treatment</h5>
            <Link href="/#treatments">Facial Treatment</Link>
            <Link href="/#treatments">Laser Face &amp; Body</Link>
            <Link href="/#treatments">Filler &amp; Contouring</Link>
            <Link href="/product/miss-v-series">Miss V Series</Link>
            <Link href="/#treatments">Body Slimming</Link>
          </div>
          <div>
            <h5>Cabang</h5>
            <Link href="/#locations">Jakarta — Pluit</Link>
            <Link href="/#locations">Bandar Lampung</Link>
            <h5 style={{ marginTop: "18px" }}>Ikuti</h5>
            <a
              href="https://www.instagram.com/glamoriaesthetic/"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp · Instagram · TikTok
            </a>
          </div>
        </div>
        <div className="f-bottom">
          <span>
            © {new Date().getFullYear()} Glamori Clinic. All Rights Reserved.
          </span>
          <span>Terms · Privacy</span>
        </div>
      </div>
    </footer>
  );
}
