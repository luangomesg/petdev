import golden from "../../../public/golden.png";
import royal from "../../../public/royal.png";
import primier from "../../../public/primier.png";
import whiskas from "../../../public/whiskas.png";
import natural from "../../../public/natural.png";
import Image from "next/image";
import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  YoutubeLogoIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

const brands = [
  { name: "Royal Canin", logo: royal },
  { name: "Golden", logo: golden },
  { name: "Primier", logo: primier },
  { name: "Formula Natural", logo: natural },
  { name: "Whiskas", logo: whiskas },
  { name: "Golden", logo: golden },
];

export default function Footer() {
  return (
    <section className="bg-[#E84C3D] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="border-b border-white/20 pb-8">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Marcas que trabalhamos
          </h2>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6 ">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg flex items-center justify-center"
              >
                <Image
                  width={100}
                  height={50}
                  src={brand.logo}
                  alt={brand.name}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="pt-4 space-y-4 grid grid-cols-1 lg:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Pet Shop</h3>
            <p className="text-sm">
              Cuidando do seu melhor amigo com amor e dedicação
            </p>
            <a
              className="flex items-center gap-2 bg-green-500 rounded-md shadow-md w-fit px-4 py-1 "
              target="_blank"
              href={`https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações`}
            >
              <WhatsappLogoIcon className="w-5 h-5 " /> Contato via WhatsApp
            </a>
          </div>

          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold mb-3">Contato</h3>
            <span className="text-sm">Rua dos Pets, 123</span>
            <span className="text-sm">Cidade, Estado - CEP 12345-678</span>
            <span className="text-sm">Tel: (11) 1234-5678</span>
            <span className="text-sm">Email: contato@petshop.com</span>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">Redes Sociais</h3>
            <div className="flex items-center gap-4">
              <a href="#">
                <FacebookLogoIcon className="w-6 h-6 text-white mr-2" />
              </a>
              <a href="#">
                <InstagramLogoIcon className="w-6 h-6 text-white mr-2" />
              </a>
              <a href="#">
                <YoutubeLogoIcon className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-13 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Pet Shop. Todos os direitos
            reservados.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
