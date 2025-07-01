'use client';

import Image from 'next/image';
import { ButtonTag, ContentTag, Tag } from '@/components';
import clsx from 'clsx';
import { FiArrowRight } from 'react-icons/fi';
import styles from './sessionService.module.scss';
import { useBreakpoint } from '@/hooks/useBreakpoint';

function SessionService() {
  const { isMobile } = useBreakpoint();

  return (
    <section id="servicos" className={styles.sessionService}>
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
              informação, ajudamos organizações a romper limites antigos, ganhar
              velocidade, tomar decisões mais claras e responder ao novo com
              agilidade.
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
  );
}

export default SessionService;
