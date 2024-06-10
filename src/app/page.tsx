import AcmeLogo from "@/components/AcmeLogo";
import { lusitana } from "./ui/fonts";

export default function Page() {
  return (
    <>
      <main className="flex min-h-screen flex-col p-6">
        <AcmeLogo />

        <div className="p-[20px] bg-slate-200 mt-[20px] w-[40%]  flex flex-col ">
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal my-[60px]`}
          >
            <strong>Welcome to Acme.</strong> This is the example for the{" "}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <button className="bg-[blue] rounded-[5px] w-fit p-[10px]">
            Log in{" "}
          </button>
        </div>
      </main>
    </>
  );
}
