import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-100 flex flex justify-between items-center p-5 shadow-md">
      <div >
        <h1 className='font-bold text-[2rem]'>Tech Innovate</h1>
      </div>
      <div className='flex gap-5'>
     <Link href="/portfolio">Portfolio</Link>
      <Link href="/service">Service</Link>
      <Link href="/contact">Contact</Link>
      </div>
     
    </nav>
  );
}

export default Navbar;
