/**
 * GlobalNav — desktop navigation bar
 * Sourced from live site: innovate.faithful-to-nature.co.za
 *
 * Structure:
 *   1. Top bar (72px): Logo | Search | Icons (wishlist, cart, profile)
 *   2. Category bar (50px): Nav links
 */

import { FtnLogoFull } from '../../assets/FtnLogoFull';

const CartIcon = () => (
  <svg width="25" height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 28C12.1046 28 13 27.1046 13 26C13 24.8954 12.1046 24 11 24C9.89543 24 9 24.8954 9 26C9 27.1046 9.89543 28 11 28Z" fill="#031410"/>
    <path d="M25 28C26.1046 28 27 27.1046 27 26C27 24.8954 26.1046 24 25 24C23.8954 24 23 24.8954 23 26C23 27.1046 23.8954 28 25 28Z" fill="#031410"/>
    <path d="M28.55 7.54875C28.4095 7.37691 28.2325 7.2385 28.0319 7.14358C27.8312 7.04867 27.612 6.99962 27.39 7H8.36812L7.985 4.82625C7.94415 4.59471 7.82301 4.38496 7.64288 4.23385C7.46274 4.08275 7.23512 3.99995 7 4H3C2.73478 4 2.48043 4.10536 2.29289 4.29289C2.10536 4.48043 2 4.73478 2 5C2 5.26522 2.10536 5.51957 2.29289 5.70711C2.48043 5.89464 2.73478 6 3 6H6.16125L9.015 22.1737C9.05585 22.4053 9.17699 22.615 9.35712 22.7661C9.53726 22.9173 9.76488 23 10 23H26C26.2652 23 26.5196 22.8946 26.7071 22.7071C26.8946 22.5196 27 22.2652 27 22C27 21.7348 26.8946 21.4804 26.7071 21.2929C26.5196 21.1054 26.2652 21 26 21H10.8387L10.4862 19H25.59C25.9368 18.9996 26.2728 18.8793 26.5411 18.6596C26.8094 18.4399 26.9936 18.1343 27.0625 17.7944L28.8625 8.79438C28.9059 8.57656 28.9003 8.35184 28.8463 8.13643C28.7923 7.92102 28.6911 7.72029 28.55 7.54875V7.54875Z" fill="#031410"/>
  </svg>
);

const HeartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

const ChevronDown = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B6B69" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

const NAV_LINKS = [
  { label: 'Food',             href: '/food' },
  { label: 'Health',           href: '/health' },
  { label: 'Body & Beauty',    href: '/body-beauty' },
  { label: 'Baby & Kids',      href: '/baby-and-kids' },
  { label: 'Home & Lifestyle', href: '/home-and-lifestyle' },
  { label: 'New Products',     href: '/new-products' },
  { label: 'Deals',            href: '/specials', isDeals: true },
];

export const GlobalNav = ({
  cartCount   = 0,
  profileName = 'Account',
}) => (
  <nav style={{
    width:      '100%',
    background: 'var(--color-white)',
    fontFamily: 'var(--font-family-base)',
  }}>

    {/* ── Top bar ── */}
    <div style={{
      height:       '72px',
      display:      'flex',
      alignItems:   'center',
      padding:      '0 48px',
      gap:          '24px',
      borderBottom: '0.5px solid var(--color-grey-3)',
      boxSizing:    'border-box',
    }}>

      {/* Logo */}
      <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
        <FtnLogoFull width={190} height={29} />
      </a>

      {/* Search */}
      <div style={{
        flex:         1,
        maxWidth:     '748px',
        height:       '40px',
        background:   '#EDEDED',
        display:      'flex',
        alignItems:   'center',
        padding:      '0 0 0 20px',
        gap:          '8px',
        borderRadius: '0px',
        boxSizing:    'border-box',
      }}>
        <SearchIcon />
        <span style={{ fontSize: '14px', color: 'var(--color-grey-1)', fontFamily: 'var(--font-family-base)' }}>Search</span>
      </div>

      {/* Icons */}
      <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
        <a href="/wishlist" style={{ color: 'var(--color-black)', textDecoration: 'none', marginRight: '30px', display: 'flex', alignItems: 'center' }} aria-label="Wishlist">
          <HeartIcon />
        </a>
        <a href="/cart" aria-label="Cart" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5.5px',
          width: '81px', height: '43px',
          padding: '8px 12px', borderRadius: '32px',
          border: '0.8px solid #F3F4F8',
          color: 'var(--color-black)', textDecoration: 'none',
          boxSizing: 'border-box', marginRight: '30px', flexShrink: 0,
        }}>
          <CartIcon />
          <div style={{
            width: '25px', height: '25px',
            background: cartCount > 0 ? '#F8AF44' : 'transparent',
            color: 'var(--color-white)',
            borderRadius: '50%', fontSize: '10px', fontWeight: 700,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-family-base)', flexShrink: 0,
            visibility: cartCount > 0 ? 'visible' : 'hidden',
          }}>
            {cartCount}
          </div>
        </a>
        <a href="/account" style={{ display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none', color: 'var(--color-black)', fontSize: '14px', fontWeight: 'var(--font-weight-bold)', fontFamily: 'var(--font-family-base)', whiteSpace: 'nowrap', minWidth: '80px' }}>
          {profileName}
          <ChevronDown />
        </a>
      </div>
    </div>

    {/* ── Category bar ── */}
    <div style={{
      height:         '50px',
      display:        'flex',
      alignItems:     'center',
      justifyContent: 'space-between',
      padding:        '0 48px',
      boxSizing:      'border-box',
      borderBottom:   '0.5px solid var(--color-grey-3)',
    }}>
      {NAV_LINKS.map(link => (
        <a
          key={link.href}
          href={link.href}
          style={{
            height:         '50px',
            display:        'flex',
            alignItems:     'center',
            fontSize:       '16px',
            fontWeight:     link.isDeals ? 'var(--font-weight-bold)' : 'var(--font-weight-regular)',
            color:          link.isDeals ? 'var(--color-orange)' : '#191919',
            textDecoration: 'none',
            whiteSpace:     'nowrap',
            padding:        '0 8px',
            borderBottom:   '2px solid transparent',
            boxSizing:      'border-box',
          }}
        >
          {link.label}
        </a>
      ))}
    </div>
  </nav>
);

export default GlobalNav;
