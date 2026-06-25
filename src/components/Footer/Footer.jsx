import { FtnLogoFull } from '../../assets/FtnLogoFull';
import AppStoreIcon   from '../../assets/AppStoreIcon.svg?url';
import GooglePlayIcon from '../../assets/GooglePlayIcon.svg?url';

const LocationPin = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#006654" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

const FbIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#fb)"><path fillRule="evenodd" clipRule="evenodd" d="M36 18.1081C36 8.16793 27.9401 0.108093 18 0.108093C8.05983 0.108093 0 8.16793 0 18.1081C0 27.0919 6.58126 34.5388 15.1875 35.8903V23.313H10.616V18.1081H15.1875V14.1425C15.1875 9.63202 17.8754 7.13853 21.9865 7.13853C23.9559 7.13853 26.0164 7.49051 26.0164 7.49051V11.9206H23.7456C21.5108 11.9206 20.8117 13.3076 20.8117 14.7331V18.1081H25.8035L25.0064 23.313H20.8125V35.8919C29.4187 34.5411 36 27.0945 36 18.1081Z" fill="#006654"/></g>
    <defs><clipPath id="fb"><rect width="36" height="36" fill="white"/></clipPath></defs>
  </svg>
);
const TkIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28.9821 8.34328C28.7543 8.22554 28.5325 8.09648 28.3176 7.95656C27.6927 7.54345 27.1198 7.05667 26.6111 6.50672C25.3385 5.05055 24.8632 3.57328 24.6881 2.53898H24.6951C24.5489 1.68047 24.6093 1.125 24.6185 1.125H18.8219V23.5392C18.8219 23.8402 18.8219 24.1376 18.8093 24.4315C18.8093 24.468 18.8057 24.5018 18.8036 24.5412C18.8036 24.5573 18.8036 24.5742 18.8001 24.5911C18.8001 24.5953 18.8001 24.5995 18.8001 24.6038C18.739 25.408 18.4812 26.1849 18.0494 26.8661C17.6176 27.5473 17.025 28.1119 16.3237 28.5103C15.5928 28.9261 14.7662 29.1442 13.9254 29.1431C11.2246 29.1431 9.03582 26.9409 9.03582 24.2213C9.03582 21.5016 11.2246 19.2994 13.9254 19.2994C14.4366 19.2989 14.9447 19.3793 15.4307 19.5377L15.4378 13.6357C13.9622 13.4451 12.4631 13.5624 11.0351 13.9801C9.60705 14.3979 8.28112 15.107 7.1409 16.0629C6.1418 16.931 5.30186 17.9667 4.65887 19.1236C4.41418 19.5455 3.49098 21.2407 3.37918 23.992C3.30887 25.5537 3.77785 27.1716 4.00145 27.8402V27.8543C4.14207 28.248 4.68699 29.5917 5.57504 30.7245C6.29113 31.6331 7.13716 32.4313 8.0859 33.0933V33.0792L8.09996 33.0933C10.9061 35.0002 14.0175 34.875 14.0175 34.875C14.5561 34.8532 16.3603 34.875 18.4092 33.904C20.6817 32.8275 21.9754 31.2237 21.9754 31.2237C22.8019 30.2654 23.4592 29.1733 23.9189 27.9942C24.4434 26.6154 24.6185 24.9616 24.6185 24.3007V12.4095C24.6888 12.4516 25.6254 13.0711 25.6254 13.0711C25.6254 13.0711 26.9746 13.9359 29.0798 14.4991C30.5901 14.8999 32.625 14.9843 32.625 14.9843V9.22992C31.912 9.30727 30.4643 9.08227 28.9821 8.34328Z" fill="#006654"/>
  </svg>
);
const IgIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.0022 9.72563C13.4635 9.72563 9.72455 13.4648 9.72455 18.0035C9.72455 22.5622 13.4635 26.3009 18.0022 26.3009C22.5609 26.3009 26.2998 22.5622 26.2998 18.0035C26.2998 13.4648 22.5609 9.72563 18.0222 9.72563H18.0022ZM18.0022 23.4019C15.043 23.4019 12.6239 20.9627 12.6239 18.0035C12.6239 15.0644 15.043 12.6252 18.0022 12.6252C20.9613 12.6252 23.3808 15.0444 23.4008 18.0035C23.4008 20.9627 20.9613 23.4019 18.0022 23.4019ZM28.5592 9.38589C28.5592 10.4456 27.6995 11.3253 26.6398 11.3253C25.5801 11.3253 24.7002 10.4456 24.7002 9.38589C24.7002 8.32619 25.5801 7.44651 26.6398 7.44651C27.6995 7.44651 28.5592 8.32619 28.5592 9.38589ZM34.0576 11.3453C34.0576 11.2053 34.0576 11.0454 34.0576 10.9055C34.0576 5.98689 30.0188 1.9481 25.1202 1.9481C24.9603 1.9481 24.8204 1.94812 24.6804 1.96811C22.0012 1.80816 14.0034 1.80816 11.3242 1.96811C11.1842 1.94812 11.0243 1.9481 10.8844 1.9481C5.96579 1.9481 1.94677 5.98687 1.94677 10.8855C1.94677 11.0454 1.94677 11.1853 1.94677 11.3453C1.80681 14.0045 1.80681 22.0025 1.94677 24.6818C1.94677 24.8217 1.94677 24.9816 1.94677 25.1216C1.94677 30.0202 5.98578 34.0789 10.8844 34.0789C11.0443 34.0789 11.1842 34.0789 11.3242 34.0589C14.0034 34.2189 22.0012 34.2189 24.6804 34.0589C24.8204 34.0789 24.9603 34.0789 25.1202 34.0789C30.0188 34.0789 34.0576 30.0202 34.0576 25.1216C34.0576 24.9816 34.0576 24.8217 34.0576 24.6818C34.2176 22.0025 34.2176 14.0245 34.0576 11.3453ZM30.6187 27.5408C30.0588 28.9404 28.9391 30.0601 27.5395 30.62C25.4001 31.4597 20.3615 31.2594 18.0022 31.2594C15.6629 31.2594 10.6043 31.4597 8.48491 30.62C7.06533 30.0601 5.96581 28.9404 5.40597 27.5408C4.56621 25.4214 4.76602 20.3629 4.76602 18.0235C4.76602 15.6642 4.56621 10.6256 5.40597 8.48624C5.96581 7.08665 7.06533 5.96689 8.48491 5.40706C10.6043 4.5673 15.6629 4.76711 18.0022 4.76711C20.3615 4.76711 25.4001 4.58729 27.5395 5.40706C28.9391 5.96689 30.0588 7.08665 30.6187 8.48624C31.4584 10.6256 31.2584 15.6642 31.2584 18.0235C31.2584 20.3629 31.4584 25.4214 30.6187 27.5408Z" fill="#006654"/>
  </svg>
);
const PiIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M34.1933 17.9913C34.1933 26.884 26.8764 34.2009 18.0018 34.2009C16.3718 34.2009 14.7599 33.9657 13.2023 33.4767C14.0535 32.1545 14.7236 30.7235 15.2126 29.2203C15.4118 28.4777 16.227 25.3809 16.227 25.3809C17.0601 26.5763 18.4545 27.2822 19.9397 27.246C24.8298 27.246 28.3434 22.7366 28.3434 17.1583C28.2528 11.9965 23.9967 7.79435 18.8349 7.79435C18.6719 7.79435 18.5089 7.79435 18.3459 7.79435C11.3548 7.79435 7.64217 12.4855 7.64217 17.611C7.56972 20.1285 8.81929 22.5011 10.9202 23.8775C11.2281 24.0224 11.3912 23.9679 11.4636 23.6781L11.9164 21.8307C11.9708 21.6677 11.9163 21.4866 11.8077 21.3779C11.0289 20.2912 10.6122 19.0057 10.6122 17.6654C10.6122 17.6654 10.6122 17.6654 10.6122 17.6473C10.6122 13.8077 13.7817 10.638 17.6214 10.638C17.73 10.638 17.8388 10.638 17.9293 10.638C18.0561 10.638 18.1828 10.638 18.3096 10.638C21.8232 10.638 24.703 13.5177 24.703 17.0313C24.703 17.1038 24.703 17.1583 24.703 17.2308C24.703 21.6137 22.4935 24.6562 19.5957 24.6562C19.5594 24.6562 19.5231 24.6562 19.4869 24.6562C18.201 24.6562 17.1325 23.6056 17.1325 22.3016C17.1325 22.1205 17.1686 21.9216 17.2048 21.7405C17.8025 19.9837 18.2553 18.1726 18.5451 16.3433C18.5632 16.2528 18.5632 16.1801 18.5632 16.0895C18.5632 14.9666 17.6395 14.0613 16.5166 14.0613H16.4985C14.8684 14.0613 13.5644 15.7274 13.5644 17.9913C13.5463 18.8063 13.7093 19.6396 14.0535 20.4003C14.3795 21.1428 12.4417 27.1738 12.1519 28.4416C11.8983 29.9811 11.8802 31.5569 12.0975 33.0964C5.88529 30.6695 1.79199 24.6563 1.79199 18.0094C1.79199 9.11673 9.10914 1.7998 18.0018 1.7998C26.8764 1.7998 34.1933 9.11673 34.1933 18.0094V17.9913Z" fill="#006654"/>
  </svg>
);

const SOCIAL_ICONS = [
  { name: 'Facebook',  Icon: FbIcon },
  { name: 'TikTok',    Icon: TkIcon },
  { name: 'Instagram', Icon: IgIcon },
  { name: 'Pinterest', Icon: PiIcon },
];

const NAV_COLUMNS = [
  {
    heading: 'Faithful to Nature',
    links: [
      { label: 'The FtN Range',           href: '/brands/faithful-to-nature' },
      { label: 'About Us',                href: '/about-us' },
      { label: 'Our Brands',              href: '/brands' },
      { label: 'Retail Stores',           href: '/retail-stores' },
      { label: 'Gift Cards',              href: '/giftcard/create-a-giftcard' },
      { label: 'BCorp Certified',         href: '#' },
    ],
    showAppDownload: true,
  },
  {
    heading: 'Our Products & Values',
    links: [
      { label: 'Our Products',            href: '/brands' },
      { label: 'Product Values',          href: '/values-listing' },
      { label: 'Product Listing Policy',  href: '/ingredient-policy-information' },
      { label: 'The Bad Bunch',           href: '/bad-bunch' },
      { label: 'Ingredients Library',     href: '/ingredient' },
    ],
  },
  {
    heading: 'Sustainability & Initiatives',
    links: [
      { label: 'Carbon Neutral Shipping', href: '/carbon-neutral' },
      { label: 'Partner With Us',         href: '#' },
      { label: 'Our Blog',                href: '#' },
      { label: 'Affiliates',              href: '#' },
    ],
  },
  {
    heading: 'Customer Support',
    links: [
      { label: 'FAQs',                    href: '/faq' },
      { label: 'Refunds & Returns',       href: '/faq?section=Returns' },
      { label: 'Delivery Options',        href: '/faq?section=Delivery' },
      { label: 'Payment Options',         href: '/faq?section=Payments' },
      { label: 'FtN Loyalty Program',     href: '#' },
    ],
  },
];

const LEGAL_LINKS = [
  { label: 'Terms & Conditions', href: '/terms-conditions' },
  { label: 'Privacy Policy',     href: '/privacy-policy' },
  { label: 'PAIA Manual',        href: '#' },
];

const linkStyle = {
  display: 'block', marginBottom: '8px',
  fontSize: '16px', fontWeight: 400,
  color: '#191919', textDecoration: 'none',
  fontFamily: 'var(--font-family-base)',
};

const headingStyle = {
  margin: '0 0 8px',
  fontSize: '16px', fontWeight: 700,
  color: 'var(--color-aqua-deep)',
  fontFamily: 'var(--font-family-base)',
};

const btnDark = {
  height: '38px', padding: '0 20px',
  background: 'var(--color-white)', color: 'var(--color-aqua-deep)',
  border: '1.5px solid var(--color-aqua-deep)', borderRadius: 'var(--radius-default)',
  fontSize: '14px', fontWeight: 700, cursor: 'pointer',
  fontFamily: 'var(--font-family-base)', textTransform: 'uppercase',
  letterSpacing: 'var(--letter-spacing-tight)',
};

export const Footer = ({ userName }) => (
  <footer style={{ width: '100%', fontFamily: 'var(--font-family-base)' }}>

    {/* ── 1. Store Locator Banner ── */}
    <div style={{
      width: '100%', height: '73px', background: 'var(--color-white)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px',
      borderTop: '0.5px solid var(--color-grey-3)', boxSizing: 'border-box',
    }}>
      <LocationPin />
      <p style={{ margin: 0, fontSize: '16px', color: '#000', fontFamily: 'var(--font-family-base)' }}>
        Visit us in store — find your nearest <strong>FtN stockist</strong>
      </p>
      <a href="/retail-stores" style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        height: '32px', padding: '0 16px',
        background: 'var(--color-ftn-green)', color: 'var(--color-white)',
        fontSize: '14px', fontWeight: 700, fontFamily: 'var(--font-family-base)',
        border: '2px solid var(--color-ftn-green)', borderRadius: 'var(--radius-default)',
        textDecoration: 'none', textTransform: 'uppercase',
        letterSpacing: 'var(--letter-spacing-tight)', whiteSpace: 'nowrap',
      }}>Find a Store</a>
    </div>

    {/* ── 2. Email Signup Bar ── */}
    <div style={{
      width: '100%', height: '80px', background: 'var(--color-ftn-green)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px',
      boxSizing: 'border-box',
    }}>
      <p style={{ margin: 0, fontSize: '18px', fontWeight: 700, color: 'var(--color-white)', fontFamily: 'var(--font-family-base)', whiteSpace: 'nowrap' }}>
        Join our conscious shopping community
      </p>
      <div style={{ display: 'flex' }}>
        <input type="email" placeholder="Enter your email address" style={{
          height: '32px', width: '400px', padding: '0 12px',
          border: '1px solid #AEAEAE', borderRadius: '0px', outline: 'none',
          fontSize: '14px', fontFamily: 'var(--font-family-base)',
          background: 'var(--color-white)', boxSizing: 'border-box',
        }} />
        <button style={{
          height: '32px', padding: '0 16px',
          background: 'var(--color-white)', color: 'var(--color-ftn-green)',
          border: '1px solid var(--color-ftn-green)', cursor: 'pointer',
          fontSize: '14px', fontWeight: 700, fontFamily: 'var(--font-family-base)',
          textTransform: 'uppercase', letterSpacing: 'var(--letter-spacing-tight)',
          whiteSpace: 'nowrap',
        }}>Sign Up</button>
      </div>
    </div>

    {/* ── 3. Main Nav Content ── */}
    <div style={{ width: '100%', background: 'var(--color-soft-tones-2)', padding: '40px 48px', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '1344px', margin: '0 auto', display: 'flex', gap: '32px' }}>

        {/* 4 Nav Columns */}
        {NAV_COLUMNS.map((col, i) => (
          <div key={i} style={{ flex: i === 0 ? '0 0 220px' : '1 1 0', minWidth: 0 }}>
            <p style={headingStyle}>{col.heading}</p>
            {col.links.map((link, j) => (
              <a key={j} href={link.href} style={linkStyle}>{link.label}</a>
            ))}
            {col.showAppDownload && (
              <div style={{ marginTop: '24px' }}>
                <p style={{ ...headingStyle, marginBottom: '12px' }}>Download Our App</p>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <a href="#"><img src={GooglePlayIcon} alt="Google Play" style={{ height: '40px', width: 'auto' }} /></a>
                  <a href="#"><img src={AppStoreIcon}   alt="App Store"   style={{ height: '40px', width: 'auto' }} /></a>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* 5th Column — Logo, Social, Help */}
        <div style={{ flex: '0 0 280px' }}>
          <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FtnLogoFull width={200} height={30} />
            </a>
          </div>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', alignItems: 'center' }}>
            {SOCIAL_ICONS.map(({ name, Icon }) => (
              <a key={name} href="#" aria-label={name} style={{ textDecoration: 'none', display: 'flex', width: '48px', height: '48px' }}>
                <Icon />
              </a>
            ))}
          </div>

          {/* Need Help */}
          <p style={{ ...headingStyle, marginBottom: '12px' }}>Need Help?</p>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
            {/* CHAT — filled dark */}
            <button style={{
              width: '154px', height: '38px',
              background: 'var(--color-aqua-deep)', color: 'var(--color-white)',
              border: 'none', borderRadius: 'var(--radius-default)',
              fontSize: '14px', fontWeight: 700, cursor: 'pointer',
              fontFamily: 'var(--font-family-base)', textTransform: 'uppercase',
              letterSpacing: 'var(--letter-spacing-tight)',
            }}>Chat</button>
            {/* CONTACT US — filled dark */}
            <button style={{
              width: '154px', height: '38px',
              background: 'var(--color-aqua-deep)', color: 'var(--color-white)',
              border: 'none', borderRadius: 'var(--radius-default)',
              fontSize: '14px', fontWeight: 700, cursor: 'pointer',
              fontFamily: 'var(--font-family-base)', textTransform: 'uppercase',
              letterSpacing: 'var(--letter-spacing-tight)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
            }}>
              Contact Us
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
          </div>

          {/* LOG OUT (logged in) or LOGIN NOW (logged out) */}
          {userName ? (
            <>
              <button style={{
                width: '318px', height: '38px', marginBottom: '8px',
                background: 'var(--color-white)', color: '#191919',
                border: '2px solid #191919', borderRadius: 'var(--radius-default)',
                fontSize: '14px', fontWeight: 700, cursor: 'pointer',
                fontFamily: 'var(--font-family-base)', textTransform: 'uppercase',
                letterSpacing: 'var(--letter-spacing-tight)',
              }}>Log Out</button>
              <p style={{ margin: '0 0 12px', fontSize: '14px', color: '#191919', fontFamily: 'var(--font-family-base)' }}>
                Hi, {userName} <a href="#" style={{ color: 'var(--color-ftn-green)', textDecoration: 'none' }}>Not you?</a>
              </p>
              {/* Ratings row: Facebook + stars | Google + stars */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <svg width="18" height="18" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#fbr2)"><path fillRule="evenodd" clipRule="evenodd" d="M36 18.1081C36 8.16793 27.9401 0.108093 18 0.108093C8.05983 0.108093 0 8.16793 0 18.1081C0 27.0919 6.58126 34.5388 15.1875 35.8903V23.313H10.616V18.1081H15.1875V14.1425C15.1875 9.63202 17.8754 7.13853 21.9865 7.13853C23.9559 7.13853 26.0164 7.49051 26.0164 7.49051V11.9206H23.7456C21.5108 11.9206 20.8117 13.3076 20.8117 14.7331V18.1081H25.8035L25.0064 23.313H20.8125V35.8919C29.4187 34.5411 36 27.0945 36 18.1081Z" fill="#006654"/></g>
                  <defs><clipPath id="fbr2"><rect width="36" height="36" fill="white"/></clipPath></defs>
                </svg>
                {[1,2,3,4,5].map(s => <span key={`fb${s}`} style={{ color: '#F8AF44', fontSize: '13px' }}>★</span>)}
                <span style={{ marginLeft: '8px', fontSize: '13px', fontWeight: 700, color: '#191919', fontFamily: 'var(--font-family-base)' }}>G</span>
                {[1,2,3,4,5].map(s => <span key={`g${s}`} style={{ color: '#F8AF44', fontSize: '13px' }}>★</span>)}
              </div>
            </>
          ) : (
            <>
              <button style={{
                width: '318px', height: '38px', marginBottom: '12px',
                background: 'var(--color-white)', color: '#191919',
                border: '2px solid #191919', borderRadius: 'var(--radius-default)',
                fontSize: '14px', fontWeight: 700, cursor: 'pointer',
                fontFamily: 'var(--font-family-base)', textTransform: 'uppercase',
                letterSpacing: 'var(--letter-spacing-tight)',
              }}>Login Now</button>
              {/* Ratings always visible */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <svg width="18" height="18" viewBox="0 0 36 36" fill="none">
                  <g clipPath="url(#fbr3)"><path fillRule="evenodd" clipRule="evenodd" d="M36 18.1081C36 8.16793 27.9401 0.108093 18 0.108093C8.05983 0.108093 0 8.16793 0 18.1081C0 27.0919 6.58126 34.5388 15.1875 35.8903V23.313H10.616V18.1081H15.1875V14.1425C15.1875 9.63202 17.8754 7.13853 21.9865 7.13853C23.9559 7.13853 26.0164 7.49051 26.0164 7.49051V11.9206H23.7456C21.5108 11.9206 20.8117 13.3076 20.8117 14.7331V18.1081H25.8035L25.0064 23.313H20.8125V35.8919C29.4187 34.5411 36 27.0945 36 18.1081Z" fill="#006654"/></g>
                  <defs><clipPath id="fbr3"><rect width="36" height="36" fill="white"/></clipPath></defs>
                </svg>
                {[1,2,3,4,5].map(s => <span key={`fb${s}`} style={{ color: '#F8AF44', fontSize: '13px' }}>★</span>)}
                <span style={{ marginLeft: '8px', fontSize: '13px', fontWeight: 700, color: '#191919', fontFamily: 'var(--font-family-base)' }}>G</span>
                {[1,2,3,4,5].map(s => <span key={`g${s}`} style={{ color: '#F8AF44', fontSize: '13px' }}>★</span>)}
              </div>
            </>
          )}
        </div>
      </div>
    </div>

    {/* ── 4. Bottom Bar ── */}
    <div style={{
      width: '100%', height: '62px', background: 'var(--color-aqua-deep)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 48px', boxSizing: 'border-box',
    }}>
      <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        {['VISA', 'Mastercard', 'Ozow', 'Peach Payments', 'Amex'].map(p => (
          <span key={p} style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', fontWeight: 700, fontFamily: 'var(--font-family-base)' }}>{p}</span>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
        {LEGAL_LINKS.map((link, i) => (
          <span key={i} style={{ display: 'flex', alignItems: 'center' }}>
            {i > 0 && <span style={{ color: 'rgba(255,255,255,0.4)', margin: '0 16px' }}>|</span>}
            <a href={link.href} style={{ fontSize: '16px', fontWeight: 400, color: 'var(--color-white)', textDecoration: 'none', fontFamily: 'var(--font-family-base)' }}>
              {link.label}
            </a>
          </span>
        ))}
      </div>
    </div>

  </footer>
);

export default Footer;
