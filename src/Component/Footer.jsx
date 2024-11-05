

const Footer = () => {
    return (
<footer>
    <div className="text-center mt-10">
    <h1 className="text-3xl font-bold mb-1">Gadget Heaven</h1>
    <p className="text-ld">Leading the way in cutting-edge technology and innovation.</p>
    </div>
    <div className="divider px-28 ">
    </div>
<footer className="footer justify-around text-black p-10">

  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Product Support</a>
    <a className="link link-hover">Order Tracking</a>
    <a className="link link-hover">Shipping & Delivery</a>
    <a className="link link-hover">Returns</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Contact</a>

  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
</footer>
    );
};

export default Footer;