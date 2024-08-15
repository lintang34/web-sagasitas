import { FaArrowRight } from "react-icons/fa6";
import Fisik from "../assets/img/sfisik2.png";

const Content = () => {
return (
    <div className="mt-20 ">
        <div className="container px-6 mb-10 font-inter max-w-md mx-auto sm:max-w-xl md:max-w-5xl lg:max-w-full lg:px-0">
            <h3 className="text-4xl font-bold font-signika mb-10 text-slate-800 sm:text-5xl md:text-5xl text-center">
                Sehat <span className="text-sky-500">Bergizi</span>
            </h3>
            <div className="lg:flex lg:items-center lg:space-x-12 lg:p-12">
            <div className="lg:w-1/2 h-full">
                <img
                src={Fisik}
                alt="Sehat Fisik"
                className="mt-4 rounded-tr-full rounded-bl-full md:rounded-tr-[500px] md:rounded-bl-[500px] border shadow-xl sm:mt-8 sm:h-64 sm:w-full object-cover sm:object-center"
                />
                <p className="font-light text-[15px] mt-3 text-center italic">Gambar 1. Olahraga Pagi(Sumber : RRI.co.id)</p>
            </div>

            <div className="lg:w-1/2">
                <h2 className="mt-6 text-2xl font-semibold text-slate-800 sm:text-3xl font-signika sm:mt-8 lg:mt-0">
                Mengapa sehat <span className="text-sky-500">bergizi</span> sangatlah penting?
                </h2>
                <p className="mt-2 text-slate-600 sm:text-xl">
                Gizi adalah zat makanan pokok yang diperlukan bagi pertumbuhan dan kesehatan tubuh. 
                Gizi seimbang adalah susunan makanan sehari-hari yang mengandung zat gizi dalam jenis dan 
                jumlah yang sesuai dengan kebutuhan tubuh yaitu jenis kelamin, umur dan status kesehatan. 
                </p>

                <div className="mt-4 sm:mt-6 group">
                    <a
                        href="#pembahasan"
                        className="inline-flex items-center px-5 py-3 bg-sky-500 text-white rounded-md shadow-lg uppercase font-semibold tracking-wider text-sm sm:text-base transition-all duration-300 hover:bg-sky-600"
                    >
                    Lanjut
                    <FaArrowRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                </a>
        </div>
            </div>
            </div>
        </div>

        <div className="p-6 w-full flex justify-center">
  {/* Kontainer untuk kedua halaman */}
  <div id="pembahasan" className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
    
    {/* page1 */}
    <div className="p-4">
      <h2 className="mt-6 text-2xl font-semibold mb-3 text-slate-800 sm:text-3xl font-signika sm:mt-8 lg:mt-0">
        Empat pillar <span className="text-sky-500">gizi</span> seimbang
      </h2>
      <div>
        <ul className="max-w-[500px] space-y-2 font-roboto text-[17px] md:text-xl list-disc">
          <li>Mengonsumsi anekaragam pangan dengan proporsi makanan yang seimbang 
            (karbohidrat, lemak, protein, mineral dan vitamin)</li>
          <li>Membiasakan perilaku hidup bersih</li>
          <li>Melakukan aktivitas fisik yang teratur</li>
          <li>Memantau Berat Badan (BB) secara teratur untuk mempertahankan berat badan normal</li>
        </ul>
      </div>
    </div>

    {/* page2 */}
    <div className="p-4">
      <h2 className="mt-6 text-2xl mb-5 font-semibold text-slate-800 sm:text-3xl font-signika sm:mt-8 lg:mt-0">
        Tips memilih makanan yang <span className="text-sky-500">bergizi</span>
      </h2>
      <div className="h-96 overflow-y-auto">
        {[
          {
            title: 'Sistem tubuh berfungsi dengan baik',
            items: [
              'Pilih makanan yang seimbang sesuai dengan kebutuhan seperti Nutrisi dan Gizinya',
              'Tubuh harus harus mendapatkan makanan yang seimbang seperti karbohidrat, protein, serat dan buah - buahan yang mengandung bnayaknya vitamin'
            ]
          },
          {
            title: 'Sistem tubuh berfungsi dengan baik',
            items: [
              'Sajikan makanan dalam bentuk yang sesuai dengan kebutuhan tubuh',
              'Siapkan makanan sesuai dengan kapasitas makanan yang baik dan menyehatkan'
            ]
          },
          {
            title: 'Sistem tubuh berfungsi dengan baik',
            items: [
              'Makanlah makanan yang tidak mengandung perasa, pewarna dan pengawet buatan',
              'Makanan yang mengandung gula, garam dan lemak yang berlebihan dianjurkan untuk dikurangin'
            ]
          },
        ].map((section, index) => (
          <div key={index} className="inline-block mb-1">
            <div className="flex py-5 gap-2 px-5 rounded-lg shadow-lg border">
              <div className="w-2 rounded-md bg-sky-500"></div>
              <div>
                <h1 className="font-medium font-signika">{section.title}</h1>
                <ul className="list-disc pl-5 space-y-1">
                  {section.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  </div>
</div>


    </div>
  );
};

export default Content;