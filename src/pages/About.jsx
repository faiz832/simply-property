import React, { useState } from "react";
import AboutImg from "../assets/img/aboutImg.png";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
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
          <p className="text-white mt-8 max-w-[440px]">
            Sebagai tim berbakat, dengan komitmen untuk memberikan pengalaman terbaik, menjadi mitra
            terpercaya dan membangun masa depan gemilang bersama Anda.
          </p>
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
            <p className="text-justify mt-2">
              Simply Property adalah agency penjualan Tanah khusus SHM Pekarangan yang sudah
              mendistribusikan Tanah sebanyak -+ 73 Unit Tanah sejak Agustus 2019 - Sekarang ( 2023
              ). Kami juga melayani jasa pesan bangun dan berpengalaman dalam jasa kontraktor sejak
              tahun 2011. Kantor kami berlokasikan di Dusun Tuban Lor, rt 1/rw 4, Tuban,
              Gondangrejo, Karanganyar, Jawa Tengah.
            </p>
            <p className="text-justify">
              Kami menghadirkan rangkaian properti pilihan dengan kualitas dan potensi investasi
              yang tak tertandingi. Dari kavling eksklusif hingga proyek properti terbaru, setiap
              pilihan kami disaring untuk memberikan pengalaman investasi yang unggul. Kami
              berkomitmen untuk menawarkan pilihan yang tidak hanya menghadirkan nilai saat ini,
              tetapi juga membangun fondasi untuk masa depan yang kokoh. Jelajahi koleksi properti
              terbaik kami, dan pilihlah keunggulan untuk menginspirasi setiap langkah Anda menuju
              keberhasilan properti.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 py-8"></div>
      <div className="container mx-auto mt-16 mb-28 flex flex-col md:flex-row">
        <div className="mb-12 md:w-2/6 mx-4 flex flex-col gap-2">
          <h1 className="font-bold text-2xl text-amber-500">Pelayanan Kami</h1>
          <h1 className="font-bold text-3xl">Nilai yang kami berikan kepada Anda</h1>
          <p className="text-justify">
            Kami membawa komitmen kami untuk memberikan pengalaman properti yang luar biasa. Dengan
            fokus pada transparansi, keandalan, dan pelayanan terbaik, kami berusaha memberikan
            nilai tambah kepada setiap langkah investasi Anda. Dari proses pembelian yang lancar
            hingga layanan pelanggan yang responsif, kami memprioritaskan kepuasan Anda.
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
                        <AccordionItemState>
                          {({ expanded }) =>
                            expanded ? setClassName("expanded") : setClassName("collapsed")
                          }
                        </AccordionItemState>
                        <div className="flex items-center justify-center p-2.5 rounded bg-gray-200">
                          {item.icon}
                        </div>
                        <span className="font-bold text-sm md:text-xl md:font-semibold">
                          {item.heading}
                        </span>
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
