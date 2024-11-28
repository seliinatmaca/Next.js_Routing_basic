import Link from "next/link";

const Layout = ({ children, notifications, revenue, users }) => {
  return (
    <div className="w-full">
      <div className="flex text-base justify-between my-4">
        <Link href="/dashboard">Admin Paneli</Link>
        <Link href="/dashboard/settings">Ayarlar</Link>
      </div>

      {children}
      <div className="flex mt-10">
        <div className="flex-1">
          <div className="border p-3">{users}</div>
          <div className="border p-3">{revenue}</div>
        </div>

        <div className="border p-3">{notifications}</div>
      </div>
    </div>
  );
};

export default Layout;
