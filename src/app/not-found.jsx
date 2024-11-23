import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-5xl text-yellow-500">404</h1>

      <h1>Üzgünüz, Aradığınız sayfa bulunamadı</h1>

      <p>
        <Link className="text-blue-500" href={"/"}>
          Ansayayfa
        </Link>
        'ya dönebilirsiniz.
      </p>
    </div>
  );
};

export default NotFound;
