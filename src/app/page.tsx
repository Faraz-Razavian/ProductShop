import Link from "next/link";

const Home: React.FC = () => {
  return (
      <>
      
      <h1>Welcome to My Shopping Site</h1>
      <Link href={'/product'}>Product</Link>
      </>
  );
};
export default Home;