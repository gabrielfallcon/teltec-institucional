'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './header.module.scss';
import { ButtonTag } from '../button';
import clsx from 'clsx';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { usePathname } from 'next/navigation';
import {
  FiArrowLeft,
  FiArrowRight,
  FiChevronDown,
  FiMenu,
  FiX,
} from 'react-icons/fi';
import { ContentTag } from '../content';

const menuItems = [
  { id: 'home', label: 'Início' },
  { id: 'sobre', label: 'Quem somos' },
  {
    id: 'servicos',
    label: 'Serviços',
    subItems: [
      { id: 'servico1', label: 'Consultoria' },
      { id: 'servico2', label: 'Suporte Gerenciado' },
    ],
  },
  {
    id: 'blog',
    label: 'Mundo Teltec',
    subItems: [
      { id: 'blog1', label: 'Notícias' },
      { id: 'blog2', label: 'Artigos' },
    ],
  },
  {
    id: 'partner',
    label: 'Parceiros',
    subItems: [
      { id: 'partner1', label: 'Cisco' },
      { id: 'partner2', label: 'Fortinet' },
    ],
  },
];

function HeaderComponent() {
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const { isMobile } = useBreakpoint();

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = '';

      for (const item of menuItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = item.id;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 100;
      const top = section.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      setMobileMenuOpen(false);
      setActiveSubMenu(null);
    }
  };

  const isMenuItemActive = (id: string) => {
    // Caso esteja em páginas internas
    if (pathname.startsWith('/service') && id === 'servicos') return true;
    if (pathname.startsWith('/blog') && id === 'blog') return true;
    if (pathname.startsWith('/partner') && id === 'partner') return true;

    // Caso esteja na home, ative apenas se a seção estiver visível via scroll
    if (pathname === '/') {
      return activeSection === id;
    }

    return false;
  };

  const renderMenuItems = () => (
    <ul className={styles.listMenu}>
      {menuItems.map(item => (
        <li key={item.id} className={styles.menuItem}>
          <div className={styles.menuItemWrapper}>
            <ButtonTag
              label={item.label}
              icon={item.subItems && <FiChevronDown color="#121212" />}
              size={isMobile ? 'lg' : 'sm'}
              variant="inverse"
              onClick={() => {
                if (item.subItems) {
                  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                  isMobile ? setActiveSubMenu(item.id) : null;
                } else {
                  scrollToSection(item.id);
                }
              }}
              // className={clsx(activeSection === item.id && styles.activeMenu)}
              className={clsx(isMenuItemActive(item.id) && styles.activeMenu)}
            />

            {!isMobile && item.subItems && (
              <div className={styles.headerSubItems}>
                <ContentTag>
                  <ul className={styles.dropdownMenu}>
                    {item.subItems.map(sub => (
                      <li key={sub.id}>
                        <ButtonTag
                          label={sub.label}
                          size="sm"
                          variant="tertiary"
                          onClick={() => scrollToSection(sub.id)}
                          className={styles.subMenuItem}
                        />
                      </li>
                    ))}
                  </ul>
                </ContentTag>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Image
          src="/assets/png/teltec-logo.png"
          alt="Teltec"
          width={isMobile ? 100 : 135}
          height={isMobile ? 35 : 47}
          className={styles.logoHeader}
        />

        {!isMobile && renderMenuItems()}

        {isMobile && (
          <div
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              setActiveSubMenu(null);
            }}
            className={styles.circleOpenMenu}
          >
            <FiMenu color="#fafafa" size={30} />
          </div>
        )}
      </div>

      {isMobile && mobileMenuOpen && (
        <div className={styles.mobileMenuOverlay}>
          <div className={styles.headerMenuMobile}>
            {activeSubMenu != null ? (
              <div className={styles.circleCloseMenuGray}>
                <FiArrowLeft
                  onClick={() => setActiveSubMenu(null)}
                  color="#121212"
                  size={20}
                />
              </div>
            ) : (
              <Image
                src="/assets/png/teltec-logo.png"
                alt="Teltec"
                width={100}
                height={35}
                className={styles.logoHeader}
              />
            )}

            <div
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                setActiveSubMenu(null);
              }}
              className={styles.circleCloseMenu}
            >
              <FiX color="#fafafa" size={30} />
            </div>
          </div>
          {!activeSubMenu ? (
            <ul className={styles.mobileMenuContent}>
              {menuItems.map(item => (
                <li
                  key={item.id}
                  onClick={() => {
                    if (item.subItems) {
                      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                      isMobile ? setActiveSubMenu(item.id) : null;
                    } else {
                      scrollToSection(item.id);
                    }
                  }}
                  className={styles.menuItemMobile}
                >
                  <span>{item.label}</span>

                  <FiArrowRight size={20} />
                </li>
              ))}
            </ul>
          ) : (
            <div className={styles.mobileSubMenu}>
              <ul>
                {menuItems
                  .find(m => m.id === activeSubMenu)
                  ?.subItems?.map(sub => (
                    <li
                      key={sub.id}
                      className={styles.menuItemMobile}
                      onClick={() => scrollToSection(sub.id)}
                    >
                      <span>{sub.label}</span>

                      <FiArrowRight size={20} />
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </header>
  );
}

export default HeaderComponent;
