import { Helmet } from 'react-helmet';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const Statistics = () => {

  const productData = [
    { product_title: "ThinkPad X1", price: 1299 },
    { product_title: "Predator 300", price: 1399 },
    { product_title: "Bose QC 45", price: 329 },
    { product_title: "SSD T7", price: 99 },
    { product_title: "iPhone 15", price: 1299 },
    { product_title: "Mi 13", price: 899 },
    { product_title: "Razer V3", price: 79 },
    { product_title: "Kindle Oasis", price: 249 },
    { product_title: "Surface Studio", price: 1599 },
    { product_title: "Find X5", price: 1099 }
  ];

  const TriangleBar = (props) => {
    const { x, y, width, height, fill } = props;
    return (
      <path
        d={`M${x},${y + height} L${x + width / 2},${y} L${x + width},${y + height} Z`}
        stroke="none"
        fill={fill}
      />
    );
  };

  return (
    <div>
      <Helmet>
        <title>Statistics/Gadget Heaven</title>
      </Helmet>
      
      <div className='text-center bg-purple-500 pt-10 pb-10 rounded-2xl text-white'>
        <h3 className="text-5xl my-5 font-semibold">Statistics</h3>
        <p>Explore the latest gadgets that will take your experience to the next level. From smart devices <br className=' max-sm:hidden' /> to the coolest accessories, we have it all!</p>
      </div>

      <div className='mt-5'>
        <p className='text-center text-3xl my-10 font-semibold text-purple-500 underline'>Product Price Overview</p>
        
        
        <div className='flex justify-center items-center'>
          <ResponsiveContainer width="90%" height={400}>
            <BarChart data={productData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="product_title" />
              <YAxis />
              <Tooltip />
              
              <Bar dataKey="price" fill="#9538E2" shape={<TriangleBar />} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
