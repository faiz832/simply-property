import { RiCustomerService2Fill, RiBook2Fill } from "react-icons/ri";
import { MdDescription } from "react-icons/md";
import { IoIosInformationCircle } from "react-icons/io";

const data = [
  {
    icon: <IoIosInformationCircle />,
    heading: "Informasi Terkini",
    detail: "Pembaruan harian harga properti. Laporan pasar terbaru dan tren investasi. Berita sektor real estate yang relevan.",
  },
  {
    icon: <MdDescription />,
    heading: "Deskripsi yang Komprehensif",
    detail: "Detail fitur properti termasuk jumlah kamar, fasilitas, dan lingkungan sekitar. Informasi hukum dan teknis yang relevan.",
  },
  {
    icon: <RiCustomerService2Fill />,
    heading: "Dukungan Pelanggan",
    detail: "Siap 24/7 survei lokasi. survei lokasi kapanpun dan dimanapun kami akan bersedia dengan senang hati.",
  },
  {
    icon: <RiBook2Fill />,
    heading: "Panduan Pembelian Properti",
    detail: "Langkah-langkah jelas dari awal hingga akhir proses pembelian. Informasi peraturan dan pajak terkait pembelian properti.",
  },
];
export default data;
