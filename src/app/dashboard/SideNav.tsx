import AcmeLogo from "@/components/AcmeLogo";
import Link from "next/link";

export default function SideNav() {
  return (
    <>
      <AcmeLogo />
      <div className="flex flex-col">
        <Link href="/">Home</Link>
        <Link href="invoices">Invoices</Link>
        <Link href="customers">Customers</Link>
      </div>
    </>
  );
}
