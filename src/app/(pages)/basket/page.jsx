"use client";

import { useRouter } from "next/navigation";

const Basket = () => {
  // useReouter bir hook oludğu şiçin önce kurulumunu yaparız
  // router değpişkeni ile fonksiyon içerisinde yönlendirme yapabilriiz
  const router = useRouter();

  const handleClick = () => {
    alert("sepet onaylandı");

    // beilrli bir sayfaya yönelendirmeyi sağlar
    router.push("/products");

    // 1 sayfa geri
    router.back();

    // 1 sayfa ileri
    router.forward();

    // sayfayı yeniler
    router.refresh();
  };

  return (
    <div>
      <button onClick={handleClick}>Sepeti Onayla</button>
    </div>
  );
};

export default Basket;
