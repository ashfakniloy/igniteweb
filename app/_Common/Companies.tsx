import Image from "next/image";
import { companiesData } from "@/data/companiesData";

function Companies() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-8 lg:gap-0">
      <div>
        <h2 className="text-[38px] font-semibold">100,000+</h2>
        <p className="mt-4 text-gray-600 text-center lg:text-start">
          IgniteWeb Users
        </p>
      </div>
      <div className="flex flex-wrap justify-center lg:justify-start items-center gap-[60px]">
        {companiesData.map((company, i) => (
          <Image
            key={i}
            src={company.logo}
            alt={company.name}
            className="opacity-80"
          />
        ))}
      </div>
    </div>
  );
}

export default Companies;
