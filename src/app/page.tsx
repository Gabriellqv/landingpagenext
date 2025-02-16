import Image from 'next/image'
import airplaneSvg from './assets/airplane.svg'
import logoSvg from './assets/logo.svg'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <section
        id="hero"
        className="p-8 mx-auto w-full h-screen flex flex-col max-w-screen-xl"
      >
        <nav className="flex w-full items-center justify-between">
          <Link href="/">
            <Image
              className="h-14 w-14"
              src={logoSvg}
              alt="Logomarca da AirPlanner"
            />
          </Link>
          <div className="flex gap-8 items-center">
            <Link
              href="#hero"
              className="font-medium text-stone-700 hover:text-fuchsia-500 transition-colors"
            >
              Preço
            </Link>
            <Link
              href="#hero"
              className="font-medium text-stone-700 hover:text-fuchsia-500 transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="#hero"
              className="font-medium text-stone-700 hover:text-fuchsia-500 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="#hero"
              className="font-medium px-5 py-3 text-white bg-fuchsia-500 hover:bg-fuchsia-700 rounded-full transition-colors"
            >
              Começar
            </Link>
          </div>
        </nav>
        <div className="items-center flex justify-between w-full mt-8">
          <div>
            <h1 className="text-left font-black text-7xl text-stone-800">
              Planeje sua viagem com{' '}
              <span className="text-fuchsia-500">AirPlanner</span>.
            </h1>
            <p className="text-lg text-stone-700 font-bold mt-8">
              Nunca foi tão fácil planejar uma viagem.
              <br /> Faça tudo de forma eficaz e sem dor de cabeça
            </p>
          </div>
          <Image
            className="w-full max-w-3xl"
            src={airplaneSvg}
            alt="Plane illustration"
          />
        </div>
        <Link
          href="#hero"
          className="font-medium w-fit mx-auto px-5 py-3 text-white bg-fuchsia-500 hover:bg-fuchsia-700 rounded-full transition-colors mt-[-60px]"
        >
          Comece agora
        </Link>
      </section>
    </main>
  )
}
