export async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Page = async () => {
  await delay(3000);

  return <div>Kayıt Olma Sayfası</div>;
};

export default Page;
