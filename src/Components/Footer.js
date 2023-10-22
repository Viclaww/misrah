function Footer() {
  return (
    <>
      <div className="flex flex-row gap-12 flex-wrap   bg-black text-white sm:flex-col p-[4%] sm:p-[10%]">
        <p className="font-bold lg:w-1/3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum is simply du
        </p>
        <div className="flex flex-col sm:w-full gap-3">
          <h5 className="font-bold">Contact</h5>
          <p className="font-light leading-normal">
            infor@seashoreleadership.com
          </p>
          <p>+234 8118982337</p>
        </div>
        <div className="flex flex-col sm:w-full gap-3">
          <h5 className="font-bold">Address</h5>
          <p>Misrah House, No 7 Ibom Layout Calabar</p>
          <p>Cross River State, Nigeria</p>
        </div>
        <div className="text-center w-full pt-1 before:w-full before:h-[0.5px] before:block before:content-['*'] before:bg-white">
          Copyright @ UnikCreativetech All Right Reserved
        </div>
      </div>
    </>
  );
}

export default Footer;
