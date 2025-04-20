'use client';

import { useEffect } from 'react';
import VoucherCard from './components/VoucherCard';
import './styles/globals.css';

const vouchers = [
  {
    logo: 'shop-noi-bat.png',
    discount: '20%',
    minSpend: '100.000đ',
    remaining: '84%',
    note: 'Áp dụng cho các sản phẩm TOP GIÁ CẢ',
    expiry: '30/04',
    type: 'Shop Nổi Bật'
},
{
    logo: 'image2.png',
    discount: '30K',
    minSpend: '99.000đ',
    remaining: '90%',
    note: 'Mã chỉ áp dụng cho các sản phẩm có',
    expiry: '19/04',
    type: 'Shop Nổi Bật'
},
// Add more vouchers here
{
    logo: 'shop-noi-bat.png',
    discount: '30K',
    minSpend: '99.000đ',
    remaining: '90%',
    note: 'Mã chỉ áp dụng cho các sản phẩm có',
    expiry: '19/04',
    type: 'Shop Nổi Bật'
},{
    logo: 'shop-noi-bat.png',
    discount: '30K',
    minSpend: '99.000đ',
    remaining: '90%',
    note: 'Mã chỉ áp dụng cho các sản phẩm có',
    expiry: '19/04',
    type: 'Shop Nổi Bật'
},{
    logo: 'shop-noi-bat.png',
    discount: '30K',
    minSpend: '99.000đ',
    remaining: '90%',
    note: 'Mã chỉ áp dụng cho các sản phẩm có',
    expiry: '19/04',
    type: 'Shop Nổi Bật'
},{
    logo: 'shop-noi-bat.png',
    discount: '30K',
    minSpend: '99.000đ',
    remaining: '90%',
    note: 'Mã chỉ áp dụng cho các sản phẩm có',
    expiry: '19/04',
    type: 'Shop Nổi Bật'
},
{
    logo: 'shop-noi-bat.png',
    discount: '20%',
    minSpend: '100.000đ',
    remaining: '84%',
    note: 'Áp dụng cho các sản phẩm TOP GIÁ CẢ',
    expiry: '30/04',
    type: 'Shop Nổi Bật'
},
{
    logo: 'shop-noi-bat.png',
    discount: '20%',
    minSpend: '100.000đ',
    remaining: '84%',
    note: 'Áp dụng cho các sản phẩm TOP GIÁ CẢ',
    expiry: '30/04',
    type: 'Shop Nổi Bật'
},
{
    logo: 'shop-noi-bat.png',
    discount: '20%',
    minSpend: '100.000đ',
    remaining: '84%',
    note: 'Áp dụng cho các sản phẩm TOP GIÁ CẢ',
    expiry: '30/04',
    type: 'Shop Nổi Bật'
},
{
    logo: 'shop-noi-bat.png',
    discount: '20%',
    minSpend: '100.000đ',
    remaining: '84%',
    note: 'Áp dụng cho các sản phẩm TOP GIÁ CẢ',
    expiry: '30/04',
    type: 'Shop Nổi Bật'
},
{
    logo: 'shop-noi-bat.png',
    discount: '20%',
    minSpend: '100.000đ',
    remaining: '84%',
    note: 'Áp dụng cho các sản phẩm TOP GIÁ CẢ',
    expiry: '30/04',
    type: 'Shop Nổi Bật'
},{
    logo: 'shop-noi-bat.png',
    discount: '550%',
    minSpend: '100.000đ',
    remaining: '84%',
    note: 'Áp dụng cho các sản phẩm TOP GIÁ CẢ',
    expiry: '30/04',
    type: 'Shop Nổi Bật'
},{
    logo: 'shop-noi-bat.png',
    discount: '770%',
    minSpend: '100.000đ',
    remaining: '84%',
    note: 'Áp dụng cho các sản phẩm TOP GIÁ CẢ',
    expiry: '30/04',
    type: 'Shop Nổi Bật'
},{
    logo: 'shop-noi-bat.png',
    discount: '90%',
    minSpend: '100.000đ',
    remaining: '84%',
    note: 'Áp dụng cho các sản phẩm TOP GIÁ CẢ',
    expiry: '30/04',
    type: 'Shop Nổi Bật'
},{
    logo: 'shop-noi-bat.png',
    discount: '20%',
    minSpend: '100.000đ',
    remaining: '84%',
    note: 'Áp dụng cho các sản phẩm TOP GIÁ CẢ',
    expiry: '30/04',
    type: 'Shop Nổi Bật'
},{
    logo: 'shop-noi-bat.png',
    discount: '20%',
    minSpend: '100.000đ',
    remaining: '84%',
    note: 'Áp dụng cho các sản phẩm TOP GIÁ CẢ',
    expiry: '30/04',
    type: 'Shop Nổi Bật'
},{
    logo: 'shop-noi-bat.png',
    discount: '20%',
    minSpend: '100.000đ',
    remaining: '84%',
    note: 'Áp dụng cho các sản phẩm TOP GIÁ CẢ',
    expiry: '30/04',
    type: 'Shop Nổi Bật'
},{
    logo: 'shop-noi-bat.png',
    discount: '20%',
    minSpend: '100.000đ',
    remaining: '84%',
    note: 'Áp dụng cho các sản phẩm TOP GIÁ CẢ',
    expiry: '30/04',
    type: 'Shop Nổi Bật'
},{
    logo: 'shop-noi-bat.png',
    discount: '20%',
    minSpend: '100.000đ',
    remaining: '84%',
    note: 'Áp dụng cho các sản phẩm TOP GIÁ CẢ',
    expiry: '30/04',
    type: 'Shop Nổi Bật'
},{
    logo: 'shop-noi-bat.png',
    discount: '20%',
    minSpend: '100.000đ',
    remaining: '84%',
    note: 'Áp dụng cho các sản phẩm TOP GIÁ CẢ',
    expiry: '30/04',
    type: 'Shop Nổi Bật'
},{
    logo: 'shop-noi-bat.png',
    discount: '20%',
    minSpend: '100.000đ',
    remaining: '84%',
    note: 'Áp dụng cho các sản phẩm TOP GIÁ CẢ',
    expiry: '30/04',
    type: 'Shop Nổi Bật'
},{
    logo: 'shop-noi-bat.png',
    discount: '20%',
    minSpend: '100.000đ',
    remaining: '84%',
    note: 'Áp dụng cho các sản phẩm TOP GIÁ CẢ',
    expiry: '30/04',
    type: 'Shop Nổi Bật'
},{
    logo: 'shop-noi-bat.png',
    discount: '20%',
    minSpend: '100.000đ',
    remaining: '84%',
    note: 'Áp dụng cho các sản phẩm TOP GIÁ CẢ',
    expiry: '30/04',
    type: 'Shop Nổi Bật'
},{
    logo: 'shop-noi-bat.png',
    discount: '20%',
    minSpend: '100.000đ',
    remaining: '84%',
    note: 'Áp dụng cho các sản phẩm TOP GIÁ CẢ',
    expiry: '30/04',
    type: 'Shop Nổi Bật'
},{
    logo: 'shop-noi-bat.png',
    discount: '20%',
    minSpend: '100.000đ',
    remaining: '84%',
    note: 'Áp dụng cho các sản phẩm TOP GIÁ CẢ',
    expiry: '30/04',
    type: 'Shop Nổi Bật'
},{
    logo: 'shop-noi-bat.png',
    discount: '20%',
    minSpend: '100.000đ',
    remaining: '84%',
    note: 'Áp dụng cho các sản phẩm TOP GIÁ CẢ',
    expiry: '30/04',
    type: 'Shop Nổi Bật'
},{
    logo: 'shop-noi-bat.png',
    discount: '20%',
    minSpend: '100.000đ',
    remaining: '84%',
    note: 'Áp dụng cho các sản phẩm TOP GIÁ CẢ',
    expiry: '30/04',
    type: 'Shop Nổi Bật'
},{
    logo: 'shop-noi-bat.png',
    discount: '20%',
    minSpend: '100.000đ',
    remaining: '84%',
    note: 'Áp dụng cho các sản phẩm TOP GIÁ CẢ',
    expiry: '30/04',
    type: 'Shop Nổi Bật'
},{
    logo: 'shop-noi-bat.png',
    discount: '20%',
    minSpend: '100.000đ',
    remaining: '84%',
    note: 'Áp dụng cho các sản phẩm TOP GIÁ CẢ',
    expiry: '30/04',
    type: 'Shop Nổi Bật'
},
  // ... Các voucher khác
];

export default function Home() {
  useEffect(() => {
    const redirectURL =
      'https://go.isclix.com/deep_link/v6/6123185121136142793/5925393578546851022?sub4=oneatweb&url_enc=aHR0cHM6Ly9zaG9wZWUudm4vdW5pbGV2ZXJ2bl9iZWF1dHk%3D';

    const countdownInterval = setInterval(() => {
      window.location.href = redirectURL;
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <main className="container">
      <h1>Mã giảm giá - Voucher HOT nhất</h1>
      <section className="voucher-grid">
        {vouchers.map((voucher, index) => (
          <VoucherCard key={index} {...voucher} />
        ))}
      </section>
    </main>
  );
}
