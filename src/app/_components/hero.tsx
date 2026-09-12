import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import dogImg from "../../../public/hero-dog.webp";
import catImg from "../../../public/cat-hero.png";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="bg-[#E84C3D] text-white overflow-hidden relative p-4 pb-0">
      <div>
        <Image
          src={dogImg}
          alt="Cachorro foto"
          sizes="100vw"
          fill
          priority
          className="object-cover opacity-60 lg:hidden"
        />
        <div className="absolute inset-0 bg-black opacity-40 lg:hidden"></div>
      </div>
      <div className="container mx-auto relative">
        <article className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h1 className="text-2xl font-bold mb-3 mt-3 md:text-3xl lg:text-4xl">
              Seu pet merece cuidado, carinho e atenção especial.
            </h1>
            <p className="mb-4 text-sm">
              Oferecemos os melhores serviçoes para garantir o bem-estar e
              felicidade do seu amigo de quatro patas.
            </p>
            <a
              href="#"
              className="bg-green-500 font-semibold px-4 py-2 rounded-sm flex items-center justify-center w-fit gap-2"
            >
              <WhatsappLogoIcon className="h-5 w-5" /> Contato via WhatsApp
            </a>
            <p className="mt-4 text-sm mb-10">
              <b className="bg-black text-white text-[11px] p-1 rounded-sm">
                5%
              </b>{" "}
              de desconto na primeira compra
            </p>
            <div className="w-32 hidden lg:block">
              <Image src={catImg} alt="Gato foto" quality={100} className="" />
            </div>
          </div>

          <div className="hidden lg:block h-full relative">
            <Image
              src={dogImg}
              alt="Cachorro foto"
              className="object-contain"
              fill
              sizes="(max-width: 768px) 0vw, 50vw "
              quality={100}
              priority
            />
          </div>
        </article>
      </div>
    </section>
  );
}
