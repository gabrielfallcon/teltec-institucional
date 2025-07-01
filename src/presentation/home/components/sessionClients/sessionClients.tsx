import Image from 'next/image';
import styles from './sessionClients.module.scss';
import clsx from 'clsx';
import { ContentTag } from '@/components';

function SessionClientsComponents() {
  return (
    <section id="partner" className={styles.sessionClients}>
      <ContentTag>
        <div className={clsx(styles.content, styles.clientsContent)}>
          <div className={styles.sessionClientItem}>
            <span>Clientes</span>
            <strong>+ 1.000</strong>

            <p>
              Time multidisciplinar formado por especialistas comprometidos com
              a excelência em cada entrega.
            </p>

            <Image
              alt="clientes"
              src="/assets/svg/Clientes.svg"
              width={100}
              height={100}
            />
          </div>

          <div className={styles.sessionClientItem}>
            <span>Certificações</span>
            <strong>+ 400</strong>

            <p>
              Time multidisciplinar formado por especialistas comprometidos com
              a excelência em cada entrega.
            </p>

            <Image
              alt="certificações"
              src="/assets/svg/Certificacao.svg"
              width={100}
              height={100}
            />
          </div>

          <div className={styles.sessionClientItem}>
            <span>Horas de Projeto</span>
            <strong>+ 180.000</strong>

            <p>
              Time multidisciplinar formado por especialistas comprometidos com
              a excelência em cada entrega.
            </p>

            <Image
              alt="Horas de projeto"
              src="/assets/svg/Projetos.svg"
              width={100}
              height={100}
            />
          </div>
        </div>
      </ContentTag>

      <Image
        alt="animation"
        src="/assets/png/branding-blue-client.png"
        height={734}
        width={1048}
        className={styles.imgBrandingBlue}
      />
      <Image
        alt="animation"
        src="/assets/png/branding-gray-client-01.png"
        height={734}
        width={1048}
        className={styles.imgBrandingGray}
      />
    </section>
  );
}

export default SessionClientsComponents;
