import Link from "next/link";
import Container from "../Container";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

const NavBar = () => {
    return ( <div className="sticky top-0 z-30 w-full shadow-sm bg-violet-700">
        
    <div className="py-4 border-b-[1px]">
        <Container>
            <div className="flex items-center justify-between gap-3 md:gap-0">
                <Link href="/" className="text-2xl font-bold text-white">Unboxed</Link>
                <div className="flex items-center gap-8 md:gap-12">
                    <Link className="text-white" href={"/cart"}><FaShoppingCart size={25} /></Link>
                    <div className="flex items-center justify-center text-white"><FaUserCircle size={25}/> &nbsp; &nbsp;Pratik Kale</div>
                </div>
            </div>
        </Container>
    </div>

    </div>
     );
}
 
export default NavBar;