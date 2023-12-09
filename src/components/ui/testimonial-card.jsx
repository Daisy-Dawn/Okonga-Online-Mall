import { TwitterLogo } from "@phosphor-icons/react";

export default function TestimonialCard() {
  return (
    <>
    <div className="grid col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4 even:mt-2.5">
      <div className="w-fit h-fit p-1.5 bg-[#F5F8FA] rounded-xl">
        <div className="bg-background drop-shadow-md backdrop-blur-md p-6 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-4">
              <div className="">
                <div className="w-9 h-9 bg-primary rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <h4 className="text-sm">Chinenye Okoloigwe</h4>
                <p className="text-xs">@nenyeOkoloigwe</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <p className="">
                <TwitterLogo className="text-primary" size={16} weight="fill" />
              </p>
              <span className="text-xs">19 Sep 2023</span>
            </div>
          </div>
          <div className="">
            <p className="text-sm text-secondary/60">
            I recently discovered a fantastic online marketplace that has completely changed my shopping routine. It's incredibly easy to find and own various items, whether it's a new tech gadget or stylish home decor. This platform's user-friendly approach and diverse product range have made my multiple purchases a breeze.           </p>
          </div>
        </div>
      </div>
    </div>

    <div className="grid col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4 even:mt-2.5">
      <div className="w-fit h-fit p-1.5 bg-[#F5F8FA] rounded-xl">
        <div className="bg-background drop-shadow-md backdrop-blur-md p-6 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-4">
              <div className="">
                <div className="w-9 h-9 bg-primary rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <h4 className="text-sm">Teni Abiola</h4>
                <p className="text-xs">@UrFavGirlTems</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <p className="">
                <TwitterLogo className="text-primary" size={16} weight="fill" />
              </p>
              <span className="text-xs">25 Aug 2023</span>
            </div>
          </div>
          <div className="">
            <p className="text-sm text-secondary/60">
            I've found a new level of convenience in my shopping experience thanks to a certain online platform. From kitchen appliances to trendy gadgets, I've seamlessly obtained everything I need. The flexibility and minimal input required make this platform my preferred choice for hassle-free shopping.          </p>
          </div>
        </div>
      </div>
    </div>

    <div className="grid col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4 even:mt-2.5">
      <div className="w-fit h-fit p-1.5 bg-[#F5F8FA] rounded-xl">
        <div className="bg-background drop-shadow-md backdrop-blur-md p-6 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-4">
              <div className="">
                <div className="w-9 h-9 bg-primary rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <h4 className="text-sm">Dele Abram</h4>
                <p className="text-xs">@BigDele</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <p className="">
                <TwitterLogo className="text-primary" size={16} weight="fill" />
              </p>
              <span className="text-xs">18 Mar 2023</span>
            </div>
          </div>
          <div className="">
            <p className="text-sm text-secondary/60">
            I've stumbled upon a game-changer in the online shopping world. Finding and purchasing products has never been easier. I've managed to acquire numerous items without any fuss. The seamless process and diverse product offerings have made this platform my go-to destination for all my shopping needs.          </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
