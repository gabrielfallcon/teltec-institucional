import Image from 'next/image';
import styles from './sessionWhoWeAre.module.scss';
import { Tag } from '@/components';

function SessionWhoWeAreComponent() {
  return (
    <section id="sobre" className={styles.sessionWhoWeAre}>
      <Image
        alt="Quem somos"
        src="/assets/svg/QuemSomos.svg"
        width={671}
        height={100}
        className={styles.imgWhoWeAre}
      />

      <div className={styles.sessionWhoWeAre__content}>
        <Tag>Quem somos</Tag>

        <h2>
          Conheça a <strong>Teltec Data</strong>
        </h2>

        <p>
          Somos uma empresa brasileira de tecnologia que acredita no poder da
          transformação digital como motor de crescimento. Com um time curioso,
          colaborativo e empenhado em resolver problemas, desenvolvemos soluções
          sob medida para cada desafio, porque entendemos que cada caso é único.
        </p>
        <p>
          Mais do que entregar tecnologia, modernização de legado, queremos
          construir relações duradouras e entregar resultados que realmente
          façam sentido. Estamos lado a lado com nossos clientes em cada passo
          da jornada, ajudando a tornar seus negócios mais ágeis, preparados e
          com espaço para evolução.
        </p>
      </div>
    </section>
  );
}

export default SessionWhoWeAreComponent;
