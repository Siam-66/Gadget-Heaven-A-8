

const AboutUs = () => {
    return (
        <div className="about-us-container px-6  bg-gray-50 text-gray-800">
            <h1 className="text-5xl font-bold rounded-2xl text-center mb-6 py-20 bg-purple-500 text-white">About Us</h1>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold mb-2 text-purple-600">Welcome to Gadget Heaven</h2>
                <p className="text-lg leading-relaxed">
                    At <strong>Gadget Heaven</strong>, we believe in connecting you to the latest and most exciting tech products on the market. Founded in 2023, we’ve grown from a small passion project into a trusted source for high-quality gadgets, designed to bring convenience, entertainment, and innovation to your fingertips.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold mb-2 text-purple-600">Our Mission</h2>
                <p className="text-lg leading-relaxed">
                    Our mission is simple: <strong>Empowering you through technology</strong>. We’re here to provide not only the products you need but also the knowledge and guidance to help you make the most of them. Every item in our collection is carefully selected by our team to ensure it meets our high standards of quality and innovation.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold mb-2 text-purple-600">Why Choose Us?</h2>
                <ul className="list-disc pl-5 text-lg leading-relaxed">
                    <li><strong>Handpicked Products:</strong> We only offer gadgets we believe in, ensuring quality and durability.</li>
                    <li><strong>Expert Advice:</strong> Our team of tech experts is always available to answer your questions and help you make an informed decision.</li>
                    <li><strong>Customer-Centric Experience:</strong> Your satisfaction is our top priority, and we strive to provide a seamless shopping experience from start to finish.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold mb-2 text-purple-600">Meet Our Team</h2>
                <p className="text-lg leading-relaxed mb-4">
                    Behind every product and service we offer is a dedicated team of tech enthusiasts. From our founder to our customer support team, everyone at Gadget Heaven is passionate about bringing you the best in tech.
                </p>
                <ul className="text-lg leading-relaxed">
                    <li><strong>Siam Mahmud – Founder & CEO</strong> <br/> A tech visionary with over 15 years of experience in the industry, Siam founded Gadget Heaven with a dream to make innovative tech accessible to everyone.</li>
                    <li><strong>Ornob Khan – Head of Product</strong> <br/> Ornob has a keen eye for the latest trends and is responsible for ensuring every product we offer meets our quality standards.</li>
                    <li><strong>Ashad Zaman – Customer Success Manager</strong> <br/> With a background in customer support, Ashad leads our team in making sure each of our customers has a positive experience with Gadget Heaven.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold mb-2 text-purple-600">Our Values</h2>
                <ul className="list-disc pl-5 text-lg leading-relaxed">
                    <li><strong>Innovation:</strong> We are constantly on the lookout for the latest and most innovative products to bring to our customers.</li>
                    <li><strong>Quality:</strong> Every product is thoroughly vetted to meet our standards for performance, durability, and value.</li>
                    <li><strong>Customer Satisfaction:</strong> Our commitment to customer satisfaction guides everything we do, from product selection to post-purchase support.</li>
                </ul>
            </section>

            <section className="mb-8 text-center">
                <h2 className="text-3xl font-semibold mb-2 text-purple-600">Join the Gadget Heaven Family</h2>
                <p className="text-lg leading-relaxed mb-4">
                    Whether you’re looking to buy the latest gadgets or simply want to stay informed about new tech, Gadget Heaven is here for you. Thank you for trusting us as your source for quality products and expert knowledge.
                </p>
            </section>

            <section className="text-center">
                <h2 className="text-3xl font-semibold mb-2 text-purple-600">Get in Touch</h2>
                <p className="text-lg leading-relaxed">
                    Have questions, feedback, or need assistance? Reach out to us anytime. We're here to help you make the most of your tech journey!
                </p>
            </section>
        </div>
    );
};

export default AboutUs;
