import { delay } from "@/app/(pages)/(auth)/signup/page";

const Page = async () => {
  await delay(3000);

  return (
    <div className="font-semibold">
      <h1>Kullanıcılar</h1>

      <ul className="text-base list-decimal ps-5">
        <li>Ahmet</li>
        <li>Fatma</li>
        <li>Ayşe</li>
        <li>Ali</li>
      </ul>
    </div>
  );
};

export default Page;
