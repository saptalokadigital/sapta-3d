"use client"
import { Navbar,Dropdown} from "flowbite-react"
import Link from "next/link"

export default function Headers(){
    return(
      <Navbar
      fluid={true}
      rounded={true}
    >
      <Navbar.Brand href="/">
        <img 
          src="/images/logo/saptaloka_logo/saptaloka.png"
          className="mr-3 mb-2 h-14 font-bold"
          alt="Flowbite Logo"
        />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="justify-center">
      <Navbar.Link
          className="md:mx-16 text-xl font-bold"
          href="/">
          HOME
        </Navbar.Link>
        <Navbar.Link
          className="md:mx-16 text-xl font-bold"
          href="/about">
          ABOUT US
        </Navbar.Link>
            <Dropdown
             className="md:mx-20 z-50"
             label={<Navbar.Link>
             <h1 className="text-xl font-bold">SOLUTIONS</h1>
           </Navbar.Link>}
             inline={true}>
            <Dropdown.Item>
            <Link href="/solutions">
             SOLUTIONS
             </Link>
            </Dropdown.Item>
            <Dropdown.Item>
            <Link href="/solutions/it">
             IT SOLUTION
             </Link>
            </Dropdown.Item>
            <Dropdown.Item>
            <Link href="/solutions/business">
            BUSSINES SOLUTION
            </Link>
            </Dropdown.Item>
            </Dropdown>
    
        <Navbar.Link className="md:mx-16 text-xl font-bold" href="/contact">
          CONTACT
        </Navbar.Link>
        <Navbar.Link className="md:mx-16 text-xl font-bold" href="/blog">
          NEWS
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    )
}