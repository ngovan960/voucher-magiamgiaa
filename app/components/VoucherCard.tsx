import React from 'react';

const redirectURL =
  'https://go.isclix.com/deep_link/v6/6123185121136142793/5925393578546851022?sub4=oneatweb&url_enc=aHR0cHM6Ly9zaG9wZWUudm4vdW5pbGV2ZXJ2bl9iZWF1dHk%3D';

interface Voucher {
  logo: string;
  discount: string;
  minSpend: string;
  remaining: string;
  note: string;
  expiry: string;
  type: string;
}

export default function VoucherCard(voucher: Voucher) {
  return (
    <article className="voucher-card">
      <figure className="voucher-logo-wrapper">
        <img
          src={`/images/${voucher.logo}`}
          alt={voucher.type}
          className="voucher-logo"
        />
      </figure>
      <section className="voucher-info">
        <header className="discount">Giảm {voucher.discount}</header>
        <p className="conditions">
          ĐH tối thiểu: {voucher.minSpend} - Còn: {voucher.remaining}
        </p>
        <p className="note">{voucher.note}</p>
        <footer className="actions">
          <time className="expiry">HSD: {voucher.expiry}</time>
          <button
            className="copy-btn"
            onClick={() => (window.location.href = redirectURL)}
          >
            Copy Mã
          </button>
          <button
            className="banner-btn"
            onClick={() => (window.location.href = redirectURL)}
          >
            Đến Banner
          </button>
        </footer>
      </section>
    </article>
  );
}
