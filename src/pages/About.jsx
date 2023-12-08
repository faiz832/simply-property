import React, { useState } from "react";
import AboutImg from "../assets/img/aboutImg.png";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState } from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../components/accordion";

const About = () => {
  return (
    <div className="">
      <div className="bg-about py-16 items-center justify-center">
        <div className="container mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold flex flex-col gap-4 text-white">
            Tentang Kami<span>Juragan Kavling</span>
          </h1>
          <p className="text-white mt-8 max-w-[440px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem ipsum porro ea dolore excepturi nobis tempora ullam accusamus repellat quasi!</p>
        </div>
      </div>
      <div className="bg-gray-200 py-8"></div>

      <div className="bg-white">
        <div className="flex flex-col lg:flex-row container mx-auto">
          <div className="hidden flex-1 lg:flex justify-start w-2/6">
            <img src={AboutImg} alt="about img" className="" />
          </div>
          <div className="flex gap-4 flex-col md:w-3/4 my-16 mx-4 md:mx-auto lg:px-12 xl:my-auto md:justify-start lg:w-4/6">
            <h1 className="font-bold text-amber-500 text-2xl">Kenapa Memilih Kami</h1>
            <h1 className="font-bold text-4xl lg:text-6xl">
              Pilihan Terbaik <br /> Aset Property Anda
            </h1>
            <p className="text-justify">
              Kami berpengalaman sejak tahun 2011. Aperiam labore non nemo maiores qui odio dicta cupiditate impedit distinctio similique debitis beatae sed blanditiis, sunt magnam sint nobis ipsa architecto quidem, amet hic molestias fugit
              voluptas! Eos id tempora harum, at minus aut magni est, tenetur explicabo quibusdam, veniam quisquam.
            </p>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam labore non nemo maiores qui odio dicta cupiditate impedit distinctio similique debitis beatae sed blanditiis, sunt magnam sint nobis ipsa architecto quidem, amet
              hic molestias fugit voluptas! Eos id tempora harum, at minus aut magni est, tenetur explicabo quibusdam, veniam quisquam.
            </p>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam labore non nemo maiores qui odio dicta cupiditate impedit distinctio similique debitis beatae sed blanditiis, sunt magnam sint nobis ipsa architecto quidem, amet
              hic molestias fugit voluptas! Eos id tempora harum, at minus aut magni est, tenetur explicabo quibusdam, veniam quisquam.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 py-8"></div>
      <div className="container mx-auto mt-16 mb-28 flex flex-col md:flex-row">
        <div className="mb-12 md:w-2/6 mx-4 flex flex-col gap-2">
          <h1 className="font-bold text-2xl text-amber-500">Our Service</h1>
          <h1 className="font-bold text-3xl">Value We Give to You</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere impedit quisquam vitae sed aspernatur tempore sequi quibusdam natus. Facere quas aut vel aspernatur atque placeat odit doloremque ipsum est ut? asd topoasd
          </p>
        </div>
        <div className="flex gap-4 flex-col md:w-3/4 mx-auto md:justify-start lg:px-12 lg:w-4/6">
          <div>
            <Accordion className="mt-2 border-none" allowMultipleExpanded={false} preExpanded={[0]}>
              {data.map((item, i) => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const [className, setClassName] = useState(null);
                return (
                  <AccordionItem className={`accordionItem ${className}`} uuid={i} key={i}>
                    <AccordionItemHeading>
                      <AccordionItemButton className="flex items-center bg-white p-4 w-full justify-between cursor-pointer">
                        {/* just for getting state of item */}
                        <AccordionItemState>{({ expanded }) => (expanded ? setClassName("expanded") : setClassName("collapsed"))}</AccordionItemState>
                        <div className="flex items-center justify-center p-2.5 rounded bg-gray-200">{item.icon}</div>
                        <span className="font-bold text-sm md:text-xl md:font-semibold">{item.heading}</span>
                        <div className="flex items-center justify-center p-2.5 rounded bg-gray-200">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p className="secondaryText">{item.detail}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
