import { delay } from "@/app/(pages)/(auth)/signup/page";

const Page = async () => {
  await delay(1500);

  return (
    <div className="font-semibold">
      <h1>Gelir</h1>

      <table className="text-[20px] col-">
        <tr>
          <th>ay</th>
          <th>..</th>
          <th>ücret</th>
        </tr>

        <tr>
          <td>Ocak</td>
          <td>..</td>
          <td>15000</td>
        </tr>
        <tr>
          <td>Şubat</td>
          <td>..</td>
          <td>30000</td>
        </tr>
      </table>
    </div>
  );
};

export default Page;
