import Image from "next/image";
import aboutImg from "../../../public/about-1.png";
import aboutImg2 from "../../../public/about-2.png";
import { Check, MapPin } from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

export default function About() {
  return (
    <section className="bg-[#FDF6EC] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full h-100 rounded-3xl overflow-hidden">
              <Image
                className="object-cover hover:scale-120 duration-300 "
                src={aboutImg}
                alt="Sobre imagem"
                fill
                quality={100}
                priority
              />
            </div>
            <Image
              className="absolute -bottom-8 right-3 w-40 h-40 rounded-lg border-4 overflow-hidden border-white"
              src={aboutImg2}
              alt="Sobre imagem 2"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">SOBRE</h2>{" "}
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              doloremque dolor? Dolorem sit sed quas quisquam. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Iure, doloremque dolor?
              Dolorem sit sed quas quisquam.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-1">
                <Check className="text-red-500 " /> Aberto desde 2006
              </li>
              <li className="flex items-center gap-1">
                <Check className="text-red-500" /> Equipe com mais de 10
                veterinários
              </li>
              <li className="flex items-center gap-1">
                <Check className="text-red-500" /> Qualidade é nossa prioridade
              </li>
            </ul>
            <div className="flex mt-6 gap-2">
              <a
                href="#"
                className="bg-[#E84C3D] text-white flex items-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <WhatsappLogoIcon className="text-green-500 w-5 h-5" /> Contato
                via WhatsApp
              </a>
              <a
                href="#"
                className=" text-black flex items-center w-fit gap-2  rounded-md"
              >
                Endereço da loja <MapPin className="text-black w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
