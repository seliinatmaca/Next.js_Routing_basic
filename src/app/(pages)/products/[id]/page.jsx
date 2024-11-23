import Link from "next/link";
import { notFound } from "next/navigation";

// 1) statik metadata tanımı
// export const metadata = {
//   title: "Ürün 10 Detay",
// };

// 2) dinamik metadata tanımı
export const generateMetadata = ({ params }) => {
  return {
    title: `Ürün ${params.id} Detay`,
  };
};

// Dynamic routes olarak oluşturduğumuz sayfalar url'deki parametreyi "params" propu olarak alır.
const Detail = ({ params }) => {
  // Diyelim ki api'da 99 ürün var eğerki ürün id'si 99'dan büyükse 404 sayfasına yönlendir
  if (params.id > 99) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-10">
      {/* (.) bir sayfa geriye yönlendirir */}
      <Link href={"."}>Geri Dön</Link>

      <h1>
        <span className="text-red-500">{params.id} id'li</span> Ürünün Detay
        Sayfası
      </h1>

      <Link href={`/products/${params.id}/reviews`}>Yorumları Gör</Link>
    </div>
  );
};

export default Detail;
