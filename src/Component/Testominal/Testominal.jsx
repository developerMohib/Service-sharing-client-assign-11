
const Testominal = () => {
    return (
        <section className=" mx-auto w-full dark:bg-gray-800 dark:text-white my-10 ">
  <div className="flex items-center justify-center flex-col gap-y-2 py-5">
    <h2 data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000" className="text-2xl md:text-3xl lg:text-4xl font-bold">Testimonials</h2>
    <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="2000" className="text-lg font-medium text-slate-700/70 dark:text-gray-400">Discover how our service can benefit you</p>
  </div>
  <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 w-full">
    <div data-aos="fade-right" data-aos-duration="3000" data-aos-delay="1000"
      className="border p-7 rounded-xl bg-white dark:bg-gray-700 drop-shadow-md border-neutral-200/50 col-span-2 flex flex-col gap-y-10 justify-between">
      <div className="flex flex-col gap-y-3.5">
        <p className="font-bold text-xl">Brilliant house to rent</p>
        <p className="font-medium text-slate-700/90 dark:text-gray-300">All eFounders teams have moved to Cycle for all
          things product management and it is truly a game-changer.</p>
      </div>
      <div className="flex flex-col">
        <img src="https://randomuser.me/api/portraits/women/54.jpg" alt="Jane Cooper" className="h-10 w-10"/>
        <p className="pt-2 text-sm font-semibold">Jane Cooper</p>
        <p className="text-sm font-medium text-slate-700/70 dark:text-gray-400">CEO at ABC Corporation</p>
      </div>
    </div>
    <div data-aos="fade-left" data-aos-duration="3000" data-aos-delay="2000"
      className="border p-7 rounded-xl bg-white dark:bg-gray-700 drop-shadow-md border-neutral-200/50 col-span-3 flex flex-col gap-y-10 justify-between">
      <div className="flex flex-col gap-y-3.5">
        <p className="font-bold text-xl">Efficient customer support</p>
        <p className="font-medium text-slate-700/90 dark:text-gray-300">The customer support team at our service is
          incredibly responsive and helpful. They went above and beyond to assist me with my issue.</p>
      </div>
      <div className="flex flex-col">
        <img src="https://randomuser.me/api/portraits/women/30.jpg" alt="John Doe" className="h-10 w-10"/>
        <p className="pt-2 text-sm font-semibold">Emily Smith</p>
        <p className="text-sm font-medium text-slate-700/70 dark:text-gray-400">Marketing Manager at ABC Company</p>
      </div>
    </div>
    <div data-aos="fade-right" data-aos-duration="3000" data-aos-delay="1000"
      className="border p-7 rounded-xl bg-white dark:bg-gray-700 drop-shadow-md border-neutral-200/50 col-span-3 flex flex-col gap-y-10 justify-between">
      <div className="flex flex-col gap-y-3.5">
        <p className="font-bold text-xl">Seamless integration process</p>
        <p className="font-medium text-slate-700/90 dark:text-gray-300">Integrating our systems with our service was smooth
          and hassle-free. The support team guided us through every step of the process.</p>
      </div>
      <div className="flex flex-col">
        <img src="https://randomuser.me/api/portraits/women/90.jpg" alt="Jane Doe" className="h-10 w-10"/>
        <p className="pt-2 text-sm font-semibold">Sarah Brown</p>
        <p className="text-sm font-medium text-slate-700/70 dark:text-gray-400">CTO at XYZ Corporation</p>
      </div>
    </div>
    <div data-aos="fade-left" data-aos-duration="3000" data-aos-delay="2000"
      className="border p-7 rounded-xl bg-white dark:bg-gray-700 drop-shadow-md border-neutral-200/50 col-span-2 flex flex-col gap-y-10 justify-between">
      <div className="flex flex-col gap-y-3.5">
        <p className="font-bold text-xl">Reliable service uptime</p>
        <p className="font-medium text-slate-700/90 dark:text-gray-300">Our service has consistently maintained high uptime,
          ensuring that our operations run smoothly without any disruptions.</p>
      </div>
      <div className="flex flex-col">
        <img src="https://randomuser.me/api/portraits/men/90.jpg" alt="Ash Doe" className="h-10 w-10"/>
        <p className="pt-2 text-sm font-semibold">James White</p>
        <p className="text-sm font-medium text-slate-700/70 dark:text-gray-400">COO at XYZ Corporation</p>
      </div>
    </div>
  </div>
</section>
    );
};

export default Testominal;