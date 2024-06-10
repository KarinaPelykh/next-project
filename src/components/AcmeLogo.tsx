import { lusitana } from "../app/ui/fonts";
export default function AcmeLogo() {
  return (
    <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
      <p className={`${lusitana.className} text-[#fff] text-[24px]`}>Acme</p>
    </div>
  );
}
