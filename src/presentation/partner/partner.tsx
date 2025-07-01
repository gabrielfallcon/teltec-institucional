'use client';

import Image from 'next/image';
import {
  BannerStaticTag,
  ButtonTag,
  ContentTag,
  NewsletterTag,
  Tag,
} from '@/components';
import styles from './partner.module.scss';
import clsx from 'clsx';
import { FiArrowRight } from 'react-icons/fi';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { Partner } from './components/partner-slider/partner-slider';
import { PartnerSliderTag } from './components';

const partners: Partner[] = [
  {
    id: '1',
    link: '/',
    logo: '/assets/png/microsoft-logo.png',
    name: 'Microsoft',
  },
  {
    id: '1',
    link: '/',
    logo: '/assets/png/microsoft-logo.png',
    name: 'Microsoft',
  },
  {
    id: '1',
    link: '/',
    logo: '/assets/png/microsoft-logo.png',
    name: 'Microsoft',
  },
  {
    id: '1',
    link: '/',
    logo: '/assets/png/microsoft-logo.png',
    name: 'Microsoft',
  },
  {
    id: '1',
    link: '/',
    logo: '/assets/png/microsoft-logo.png',
    name: 'Microsoft',
  },
  {
    id: '1',
    link: '/',
    logo: '/assets/png/microsoft-logo.png',
    name: 'Microsoft',
  },
];

function PartnerComponent() {
  const { isMobile } = useBreakpoint();

  return (
    <>
      <div className={styles.partnerWrapper}>
        <BannerStaticTag
          backgroundColor="#13294B"
          title="Tecnologia de ponta, com os principais players do mercado"
          description="Trabalhamos lado a lado com os principais nomes da tecnologia global para entregar soluções modernas, confiáveis e sob medida"
          logo="/assets/png/microsoft-logo.png"
        />
        <section className={styles.partnerList}>
          <h2>
            Conheça nossos parceiros e <strong>impulsione</strong> seus
            resultados
          </h2>

          <PartnerSliderTag partners={partners} />
        </section>
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
      </div>
      <NewsletterTag />
    </>
  );
}

export default PartnerComponent;
