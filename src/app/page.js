'use client'
import estilos from "./page.module.css";
import { useState } from "react";
import Image from "next/image";
import Logo from '../../public/assets/barbearia.png';
import Banner from '../../public/assets/banner.jpg'
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";

export default function Home() {

  const [alterarTema, setAlteraTema] = useState(false);

  function mudarTema() {
    setAlteraTema(!alterarTema);
  }

  return (
    <div className={alterarTema ? estilos.Dark_mode : estilos.Light_mode}>
      <header className={estilos.header}>
        <div className={estilos.conteudo_header}>
          <Image src={Logo} width={100} alt="Logo da Barbearia" />

          <button onClick={mudarTema} className={estilos.btnDark}>
            {/* {alterarTema ? <CiLight fontSize={30} /> : <CiDark fontSize={30} />} */}
            {alterarTema ? (
              <>
                <CiLight fontSize={30} /> Light
              </>
            ) : (
              <>
                <CiDark fontSize={30} /> Dark
              </>
            )}
          </button>
        </div>
      </header>

      <main className={estilos.main}>

        <section className={estilos.secaoBanner}>
          <Image src={Banner} alt="Imagem da seção Banner" />
        </section>

        <section className={estilos.secaoInformacoes}>

          <div className={estilos.conteudoInformacoes}>

            <h1>Bem-vindo a Barber Shop</h1>

            <p className={estilos.paragrafos_estilos_iguais}>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>

            <p className={estilos.paragrafos_estilos_iguais} >Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>

            <div className={estilos.paragrafo_personalizado}>
              <p>S. Kelly</p>
            </div>

          </div>

        </section >

      </main>
    </div>
  );
}
