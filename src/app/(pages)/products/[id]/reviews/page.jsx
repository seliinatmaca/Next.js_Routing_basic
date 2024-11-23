import Link from "next/link";

const Reviews = ({ params }) => {
  return (
    <div className="flex flex-col gap-10">
      <h1>
        {" "}
        <span className="text-red-500">{params.id} id'li </span> Ürünün Yorumlar
        Sayfası
      </h1>

      <Link href={`reviews/1`}>Berbat bir üründü</Link>
      <Link href={`reviews/2`}>Fena değil</Link>
      <Link href={`reviews/3`}>Çok beğendim</Link>
    </div>
  );
};

export default Reviews;
