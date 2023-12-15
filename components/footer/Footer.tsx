import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import {MdFacebook} from "react-icons/md"
import {AiFillTwitterCircle, AiFillInstagram, AiFillYoutube} from "react-icons/ai"



const Footer = () => {
  return (
    <footer className="mt-16 text-sm bg-violet-700 text-slate-200">
      <Container>
        <div className="flex flex-col justify-between pt-16 pb-8 md:flex-row">
          <FooterList>
            <h3 className="mb-2 text-base font-bold">Shop Categories</h3>
            <Link href={"#"}>Phones</Link>
            <Link href={"#"}>Laptops</Link>
            <Link href={"#"}>Desktops</Link>
            <Link href={"#"}>Watches</Link>
            <Link href={"#"}>TV</Link>
            <Link href={"#"}>Accessories</Link>
          </FooterList>
          <FooterList>
            <h3 className="mb-2 text-base font-bold">Customer Service</h3>
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>Shipping Policy</Link>
            <Link href={"#"}>Returns & Exchange</Link>
            <Link href={"# "}>FAQ</Link>
          </FooterList>
          <FooterList>
          <h3 className="text-base font-bold">Follow Us</h3>
          <div className="flex gap-2">
            <Link href={"#"}><MdFacebook size={24}/></Link>
            <Link href={"#"}><AiFillTwitterCircle size={24}/></Link>
            <Link href={"#"}><AiFillInstagram size={24}/></Link>
            <Link href={"#"}><AiFillYoutube size={24}/></Link>
          </div>
          </FooterList>
          <div className="w-full mb-6 md:w-1/3 md:mb-0">
            <h3 className="text-base font-bold">About Us</h3>
            <p className="mb-2">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quia
              quidem, facilis cupiditate eos doloribus, officiis officia ea
              excepturi reprehenderit deleniti nemo accusamus tenetur quam
              magnam repellat porro ad voluptates?
            </p>
            <p>&copy; {new Date().getFullYear()} Unboxed. All rights reserved</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
