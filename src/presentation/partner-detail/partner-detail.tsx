'use client';
// import { Partner } from '@/app/partner/partnerData';
import { ButtonTag, ContentTag, Tag } from '@/components';
import BannerStaticComponent from '@/components/banner-static/banner-static';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import clsx from 'clsx';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import styles from './partner-detail.module.scss';

// interface IPartnerDetailProps {
//   partners: Partner[];
// }

function PartnerDetailComponent() {
  const { isMobile } = useBreakpoint();

  return (
    <main className={styles.detailWrapper}>
      <BannerStaticComponent
        backgroundColor="#F1511B"
        title="Microsoft"
        logo="/assets/png/microsoft-logo.png"
      />
      <section className={styles.contentStrategy}>
        <ContentTag>
          <div>
            <div></div>

            <h2 className={styles.titleStrategy}>Nossa parceira estratégica</h2>
          </div>

          <div className={styles.descriptionStrategy}>
            <p>
              Uma união que traz confiabilidade e um ecossistema robusto de
              soluções que impulsionam a colaboração, a conectividade e a
              transformação digital
            </p>

            <p>
              Com uma visão voltada para a nuvem e para a borda inteligente,
              compartilha do nosso compromisso de empoderar pessoas e empresas a
              fazerem mais, com tecnologia que se adapta, evolui e acompanha o
              ritmo de cada negócio
            </p>
          </div>
        </ContentTag>
      </section>

      <section className={styles.contentCopy}>
        <h2>
          Conheça seu cliente e <strong>potencialize</strong> sua operação
        </h2>

        <ButtonTag label="Falar com especialista" size="md" variant="primary" />
      </section>
      <section></section>
      <section>
        <ContentTag>
          <div className={clsx(styles.content, styles.serviceContent)}>
            <Image
              alt="Nossos Serviços"
              src="/assets/svg/NossosServicos.svg"
              width={458}
              height={550}
              className={styles.imgService}
            />

            <div className={styles.serviceDescription}>
              <Tag>O que oferecemos</Tag>

              <h2>
                Nossos <strong>serviços</strong>
              </h2>

              <p>
                Na Teltec Data, acreditamos que toda empresa carrega grandes
                possibilidades, e que a tecnologia certa, aplicada com
                inteligência, pode desbloquear esse potencial.
              </p>

              <p>
                Mais do que oferecer serviços no campo da tecnologia da
                informação, ajudamos organizações a romper limites antigos,
                ganhar velocidade, tomar decisões mais claras e responder ao
                novo com agilidade.
              </p>

              <ButtonTag
                label="Conhecer serviços"
                size={isMobile ? 'lg' : 'md'}
                variant="primary"
                icon={<FiArrowRight size={20} color="#fafafa" />}
              />
            </div>
          </div>
        </ContentTag>
      </section>
    </main>
  );
}

export default PartnerDetailComponent;
