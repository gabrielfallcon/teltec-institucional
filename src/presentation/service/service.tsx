import { BannerStaticTag, ContentTag } from '@/components';
import styles from './service.module.scss';
import { CardServiceTag } from './components';

function ServiceComponent() {
  return (
    <>
      <BannerStaticTag backgroundColor="#1947B8" title="Serviços" />

      <section className={styles.contentJob}>
        <ContentTag>
          <h2 className={styles.titleJob}>Como trabalhamos</h2>

          <div className={styles.descriptionJob}>
            <p>
              Combinamos tecnologia de ponta, visão estratégica e atuação
              próxima para entregar soluções em cloud, dados, segurança,
              inteligência artificial, automação, entre outras. Nossa abordagem
              é flexível, escalável e alinhada às necessidades reais de cada
              negócio
            </p>

            <p>
              Você pode explorar cada uma das nossas frentes de atuação e
              entender como ajudamos empresas a modernizar suas operações,
              acelerar a inovação e alcançar novos níveis de eficiência
            </p>
          </div>
        </ContentTag>
      </section>

      <section className={styles.serviceList}>
        <CardServiceTag
          description="Transforme sua gestão em nuvem com segurança, eficiência e redução de custos"
          image="/assets/svg/CMS.svg"
          imgLeftPosition
          title="Teltec Cloud Managed Services (CMS)"
        />
        <CardServiceTag
          description="Gerencie suas soluções Microsoft 365 com segurança e eficiência"
          image="/assets/svg/PMS.svg"
          imgLeftPosition={false}
          title="Teltec Productivity Managed Services (PMS)"
        />
        <CardServiceTag
          description="Transforme sua gestão em nuvem com segurança, eficiência e redução de custos"
          image="/assets/svg/ISV.svg"
          imgLeftPosition
          title="ISV Program da Teltec"
        />
      </section>
    </>
  );
}

export default ServiceComponent;
