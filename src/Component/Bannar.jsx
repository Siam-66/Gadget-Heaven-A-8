import { NavLink } from "react-router-dom";


const Bannar = () => {
    return (
        <div className="relative">
            <div className="hero bg-[#9538E2] rounded-b-2xl  text-white ">
  <div className="hero-content text-center">
    <div className="h-[35rem]">
      <h1 className="lg:text-5xl text-4xl font-bold mt-10">Upgrade Your Tech Accessorize with <br className="max-sm:hidden md:hidden"/>  Gadget Heaven Accessories</h1>
      <p className="py-6 text-sm">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to <br className="max-sm:hidden"/> the coolest accessories, we have it all!
      </p>
      <NavLink to="/dashboard" className="btn rounded-3xl text-lg text-[#9538E2]">
      Shop Now
      </NavLink>
      
    </div>
  </div>
</div>
<div className=" bg-white/30 backdrop-blur-md border border-white/30  rounded-2xl  lg:bottom-[-350px]  lg:right-[290px] md:right-[150px] md:bottom-[-80px] max-sm:right-[0px] max-sm:bottom-[-120px] md:w-3/5 absolute ">
    
            <img className=" rounded-2xl p-5  " src="/assets/banner.jpg" alt="" />

</div>
        </div>
    );
};

export default Bannar;