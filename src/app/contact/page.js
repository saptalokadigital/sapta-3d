"use client";
import { Label, Textarea, TextInput, Select } from "flowbite-react";

async function getDataInformation() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/informs`);
  return res.json();
}

export default async function Contact() {
  const dataInformation = await getDataInformation()

  return (
    <>
      <div className="md:h-[600px] h-[300px]">
        <div
          className="absolute w-6/12 md:h-96 h-40 md:mt-28 mt-14"
          style={{
            backgroundImage: "url(/images/home/carousel/rectangle2.png)",
          }}
        >
          <div className="md:my-28 my-7 md:mx-10 mx-2">
            <h1 className="font-bold md:text-4xl text-lg text-white my-auto">
              FOR FURTHER INFORMATION PLS CONTACT US
            </h1>
          </div>
        </div>
        <img
          className="md:h-[600px] h-[300px] w-full"
          src="/images/home/carousel/banner1.png"
        />
      </div>
      <div className="text-center">
        <h1 className="md:text-3xl font-bold text-base text-blue-800 md:my-10 my-4">
          PLEASE COMPLETE FORM BELOW
        </h1>
        <form className="flex md:flex-nowrap flex-wrap">
          <div className="flex flex-wrap mx-14">
            <TextInput
              placeholder="NAME"
              id="large"
              type="text"
              sizing="lg"
              className="w-full md:my-4 my-1"
            />
            <TextInput
              placeholder="EMAIL"
              id="large"
              type="text"
              sizing="lg"
              className="w-full md:my-4 my-1"
            />
            <Select
              id="countries"
              required={true}
              className="w-full md:my-4 my-1"
            >
              <option>MULTI PLATFORM APPS</option>
              <option>ERP</option>
              <option>MES</option>
              <option>SOFTWARE DEVELOPMENT</option>
              <option>OTHERS</option>
            </Select>
          </div>
          <div className="flex flex-wrap mx-14">
            <TextInput
              placeholder="COMPANY"
              id="large"
              type="text"
              sizing="lg"
              className="w-full md:my-4 my-1"
            />
            <TextInput
              placeholder="PHONE"
              id="large"
              type="text"
              sizing="lg"
              className="w-full md:my-4 my-1"
            />

            <Textarea
              id="comment"
              placeholder="MESSAGE..."
              required={true}
              rows={4}
              className="md:my-4 my-1"
            />
          </div>
        </form>
      </div>
      <div className="flex md:flex-nowrap flex-wrap md:my-14 my-5">
        <div className="text-center md:mx-10 mx-auto my-auto md:w-4/12 w-9/12">
          <h1 className="font-bold md:text-4xl text-sm text-blue-800 md:mb-10 mb-2">
            VISIT US IN OUR LOCATION
          </h1>
          <h3 className="font-bold md:text-xl text-xs text-blue-800 mb-4">
            {dataInformation.data[0].attributes.address}
          </h3>
        </div>
        <iframe
          src={dataInformation.data[0].attributes.maps_link}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="md:w-[750px] md:h-[400px] w-72 h-40 mx-auto"
        ></iframe>
      </div>
    </>
  );
}
