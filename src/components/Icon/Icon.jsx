/**
 * Icon — FtN Design System Icon Library
 * Source: Ionicons 2.0 (from Figma FTN Component Library)
 * All icons are 32x32 viewBox. Pass size prop to scale.
 * Pass color prop to change fill/stroke colour.
 */

const paths = {
  /* Navigation */
  'chevron-left':            { d: 'M20 28L8 16 20 4', stroke: true },
  'chevron-right':           { d: 'M12 4l12 12-12 12', stroke: true },
  'chevron-down':            { d: 'M4 12l12 12L28 12', stroke: true },
  'chevron-up':              { d: 'M4 20L16 8l12 12', stroke: true },
  'chevron-left-solid':      { d: 'M20 6L8 16l12 10V6z', fill: true },
  'chevron-right-solid':     { d: 'M12 6l12 10L12 26V6z', fill: true },
  'caret-down':              { d: 'M8 12l8 8 8-8H8z', fill: true },
  'caret-up':                { d: 'M8 20l8-8 8 8H8z', fill: true },
  /* Actions */
  'close':                   { d: 'M7.1 7.1l17.8 17.8M24.9 7.1L7.1 24.9', stroke: true },
  'close-outline':           { d: 'M16 16m-12 0a12 12 0 1 0 24 0 12 12 0 1 0-24 0M10 10l12 12M22 10L10 22', stroke: true },
  'add':                     { d: 'M16 4v24M4 16h24', stroke: true },
  'remove':                  { d: 'M4 16h24', stroke: true },
  'checkmark':               { d: 'M4 16l8 8L28 8', stroke: true },
  /* Stars */
  'star':                    { d: 'M16 2l4.24 8.59L30 12.24l-7 6.82 1.65 9.63L16 24.09l-8.65 4.6L9 19.06 2 12.24l9.76-1.65z', fill: true },
  'star-outline':            { d: 'M16 2l4.24 8.59L30 12.24l-7 6.82 1.65 9.63L16 24.09l-8.65 4.6L9 19.06 2 12.24l9.76-1.65z', stroke: true },
  'star-half-outline':       { d: 'M16 2v22.09l-8.65 4.6L9 19.06 2 12.24l9.76-1.65zM16 2l4.24 8.59L30 12.24l-7 6.82 1.65 9.63L16 24.09', stroke: true },
  /* Help & Info */
  'help':                    { d: 'M16 22v2M16 8a4 4 0 0 1 4 4c0 3-4 4-4 6', stroke: true },
  'help-circle-outline':     { d: 'M16 16m-12 0a12 12 0 1 0 24 0 12 12 0 1 0-24 0M16 21v1M16 11a3 3 0 0 1 3 3c0 2-3 3-3 5', stroke: true },
  'help-circle':             { d: 'M16 4a12 12 0 1 0 0 24A12 12 0 0 0 16 4zm0 17v1m0-10a3 3 0 0 1 3 3c0 2-3 3-3 5', fill: false, mixed: true },
  'information-circle-outline': { d: 'M16 16m-12 0a12 12 0 1 0 24 0 12 12 0 1 0-24 0M16 11v1M16 15v8', stroke: true },
  'information-circle':      { d: 'M16 4a12 12 0 1 0 0 24A12 12 0 0 0 16 4z M16 11h.01M16 15v8', fill: true },
  'alert-circle-outline':    { d: 'M16 16m-12 0a12 12 0 1 0 24 0 12 12 0 1 0-24 0M16 11v6M16 21v1', stroke: true },
  'alert-circle':            { d: 'M16 4a12 12 0 1 0 0 24A12 12 0 0 0 16 4zM16 11v6m0 4v1', fill: true },
  'alert':                   { d: 'M16 10v8M16 22v1', stroke: true },
  /* Navigation UI */
  'home-outline':            { d: 'M4 14l12-10 12 10v14H20v-8h-8v8H4z', stroke: true },
  'home':                    { d: 'M4 14l12-10 12 10v14H20v-8h-8v8H4z', fill: true },
  'menu-outline':            { d: 'M4 8h24M4 16h24M4 24h24', stroke: true },
  'menu':                    { d: 'M4 8h24v2H4zM4 15h24v2H4zM4 22h24v2H4z', fill: true },
  'search-outline':          { d: 'M20 20l6 6M14 24A10 10 0 1 0 14 4a10 10 0 0 0 0 20z', stroke: true },
  'search':                  { d: 'M28.9 27.5l-5.6-5.6A11 11 0 1 0 5 14a11 11 0 0 0 17.8 8.6l5.7 5.7 1.4-1.4zM14 23A9 9 0 1 1 14 5a9 9 0 0 1 0 18z', fill: true },
  /* E-commerce */
  'cart-outline':            { d: 'M6 6h20l-2 12H8L6 6zM10 24a2 2 0 1 0 4 0 2 2 0 0 0-4 0zM20 24a2 2 0 1 0 4 0 2 2 0 0 0-4 0z', stroke: true },
  'cart':                    { d: 'M27.2 6H5.8L4 28h24L27.2 6zM10 24a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm10 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0z', fill: true },
  'heart-outline':           { d: 'M16 28S4 20.5 4 12a7 7 0 0 1 12-5 7 7 0 0 1 12 5c0 8.5-12 16-12 16z', stroke: true },
  'heart':                   { d: 'M16 28S4 20.5 4 12a7 7 0 0 1 12-5 7 7 0 0 1 12 5c0 8.5-12 16-12 16z', fill: true },
  'trash-outline':           { d: 'M4 8h24M10 8V6h12v2M6 8l2 20h16l2-20M13 14v8M19 14v8', stroke: true },
  'trash':                   { d: 'M4 8h24l-2 20H6L4 8zM10 8V6h12v2M13 14v8M19 14v8', fill: true },
  /* Person */
  'person-outline':          { d: 'M16 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM4 28a12 12 0 0 1 24 0', stroke: true },
  'person':                  { d: 'M16 4a5 5 0 1 1 0 10A5 5 0 0 1 16 4zM4 28a12 12 0 0 1 24 0H4z', fill: true },
  /* Filter */
  'filter-outline':          { d: 'M4 8h24M8 16h16M12 24h8', stroke: true },
  'filter':                  { d: 'M4 7h24v2H4zM8 15h16v2H8zM12 23h8v2h-8z', fill: true },
  /* Eye */
  'eye-outline':             { d: 'M16 8C8 8 4 16 4 16s4 8 12 8 12-8 12-8-4-8-12-8zM16 20a4 4 0 1 1 0-8 4 4 0 0 1 0 8z', stroke: true },
  'eye':                     { d: 'M16 8C8 8 4 16 4 16s4 8 12 8 12-8 12-8-4-8-12-8zm0 13a5 5 0 1 1 0-10 5 5 0 0 1 0 10z', fill: true },
  'eye-off-outline':         { d: 'M4 4l24 24M10 9A12 12 0 0 0 4 16s4 8 12 8a12 12 0 0 0 6-1.7M14 7.1A12 12 0 0 1 28 16a12 12 0 0 1-2 4M12 12a4 4 0 0 0 5.7 5.7', stroke: true },
  'eye-off':                 { d: 'M4.7 3.3L3.3 4.7l4 4A11.8 11.8 0 0 0 4 16s4 8 12 8c2.1 0 4-.5 5.7-1.4l4 4 1.4-1.4L4.7 3.3zm7.8 7.8l4.4 4.4A3 3 0 0 1 13 13l-.5-.9zM16 8c-1.4 0-2.7.3-3.9.8L10 6.7A11.8 11.8 0 0 1 28 16c-.6 2-1.7 3.8-3.1 5.3L22.5 19c.5-1 .8-2.1.8-3a7 7 0 0 0-7.3-7z', fill: true },
  /* Checkmark circle */
  'checkmark-circle-outline':{ d: 'M16 4a12 12 0 1 0 0 24A12 12 0 0 0 16 4zM10 16l4 4 8-8', stroke: true },
  'checkmark-circle':        { d: 'M16 4a12 12 0 1 0 0 24A12 12 0 0 0 16 4zM10 16l4 4 8-8', fill: true },
  /* Share */
  'share-social-outline':    { d: 'M24 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM8 13a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm16 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM11 17.5l10 5M21 9.5l-10 5', stroke: true },
  'share-social':            { d: 'M24 5a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM8 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm16 7a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM11.3 17.7l9.4 4.7M20.7 9.7l-9.4 4.6', fill: true },
  /* Communication */
  'call-outline':            { d: 'M22 20c-2 2-2 4-4 4S12 20 8 16 4 10 6 8l4-4 6 6-3 3 8 8 3-3 6 6-4 4z', stroke: true },
  'mail-outline':            { d: 'M4 8h24v16H4zM4 8l12 10L28 8', stroke: true },
  'mail':                    { d: 'M28 8H4L16 18 28 8zM4 10v14h24V10l-12 9-12-9z', fill: true },
  /* Misc */
  'clipboard-outline':       { d: 'M20 6h2a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2M12 4h8v4H12z', stroke: true },
  'copy-outline':            { d: 'M20 6H8a2 2 0 0 0-2 2v16h2V8h12V6zM12 10h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2z', stroke: true },
  'copy':                    { d: 'M20 5H8a2 2 0 0 0-2 2v16h2V7h12V5zM12 9h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2z', fill: true },
  'ticket-outline':          { d: 'M4 10a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v3a3 3 0 0 0 0 6v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a3 3 0 0 0 0-6V10z', stroke: true },
  /* Location */
  'location-outline':        { d: 'M16 4a8 8 0 0 1 8 8c0 6-8 16-8 16S8 18 8 12a8 8 0 0 1 8-8zM16 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', stroke: true },
  'location-sharp':          { d: 'M16 2a9 9 0 0 0-9 9c0 7 9 19 9 19s9-12 9-19a9 9 0 0 0-9-9zm0 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8z', fill: true },
  /* Lock */
  'lock-closed-outline':     { d: 'M10 14V10a6 6 0 1 1 12 0v4M6 14h20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V16a2 2 0 0 1 2-2zM16 20v2', stroke: true },
  /* Recurring */
  'recurring':               { d: 'M4 12a12 12 0 0 1 20.5-8.5L28 8M28 4v4h-4M28 20a12 12 0 0 1-20.5 8.5L4 24M4 28v-4h4', stroke: true },
  /* Grid / List */
  'grid-outline':            { d: 'M4 4h10v10H4zM18 4h10v10H18zM4 18h10v10H4zM18 18h10v10H18z', stroke: true },
  'grid':                    { d: 'M4 4h10v10H4zM18 4h10v10H18zM4 18h10v10H4zM18 18h10v10H18z', fill: true },
  'list-2':                  { d: 'M6 10h20M6 16h20M6 22h20', stroke: true },
  'list-4':                  { d: 'M6 8h20M6 13h20M6 18h20M6 23h20', stroke: true },
  /* Toggle */
  'toggle-outline':          { d: 'M20 10H12a6 6 0 0 0 0 12h8a6 6 0 0 0 0-12zM12 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4z', stroke: true },
  'toggle':                  { d: 'M20 10H12a6 6 0 0 0 0 12h8a6 6 0 0 0 0-12zm0 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8z', fill: true },
  /* Environment / Social */
  'environment-outline':     { d: 'M16 4a8 8 0 0 1 8 8c0 5-5 10-8 14-3-4-8-9-8-14a8 8 0 0 1 8-8zM16 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z', stroke: true },
  'environment':             { d: 'M16 3a9 9 0 0 0-9 9c0 5.5 5.5 11 9 15 3.5-4 9-9.5 9-15a9 9 0 0 0-9-9zm0 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6z', fill: true },
  /* Calendar */
  'calendar-outline':        { d: 'M22 6H10a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V10a4 4 0 0 0-4-4zM20 4v4M12 4v4M6 14h20', stroke: true },
  'calendar':                { d: 'M22 6H10a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V10a4 4 0 0 0-4-4zM20 4v4M12 4v4M6 14h20', fill: true },
  /* Logos */
  'logo-facebook':           { d: 'M28 16a12 12 0 1 0-13.9 11.9v-8.4H11v-3.5h3.1V13.5c0-3.1 1.8-4.8 4.7-4.8l2.8.1V12H20c-1.5 0-2 1-2 2v2.6h3.4l-.5 3.4H18V28A12 12 0 0 0 28 16z', fill: true },
  'logo-google':             { d: 'M26 16.2c0-.6-.1-1.3-.2-1.9H16v3.6h5.6a4.8 4.8 0 0 1-2.1 3.1v2.6h3.4C25 21.8 26 19.2 26 16.2zm-10 8c2.7 0 5-.9 6.7-2.5l-3.3-2.5c-.9.6-2 1-3.4 1-2.6 0-4.9-1.8-5.7-4.1H6.9v2.6A10 10 0 0 0 16 24zm-5.7-6.5c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V11H6.9A10 10 0 0 0 6 16c0 1.6.4 3.2 1 4.6l3.3-2.5v.4zm5.7-11c1.5 0 2.8.5 3.8 1.5l2.8-2.8A10 10 0 0 0 16 6a10 10 0 0 0-9.1 5.4l3.3 2.5C11 11.6 13.4 9.9 16 9.9v-.4z', fill: true },
  'logo-instagram':          { d: 'M16 4c-3.3 0-3.7 0-5 .1-1.3 0-2.2.3-3 .6A6 6 0 0 0 4.7 8C4.3 8.8 4 9.7 4 11c0 1.3 0 1.7-.1 5s0 3.7.1 5c0 1.3.3 2.2.6 3A6 6 0 0 0 8 27.3c.8.4 1.7.6 3 .7 1.3 0 1.7.1 5 .1s3.7 0 5-.1c1.3 0 2.2-.3 3-.7A6 6 0 0 0 27.3 24c.4-.8.6-1.7.7-3 0-1.3.1-1.7.1-5s0-3.7-.1-5c0-1.3-.3-2.2-.7-3A6 6 0 0 0 24 4.7c-.8-.4-1.7-.6-3-.7C19.7 4 19.3 4 16 4zm0 2.2c3.2 0 3.6 0 4.9.1 1.2 0 1.8.2 2.2.4.6.2 1 .5 1.4.9s.7.9.9 1.4c.2.4.4 1 .4 2.2 0 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4s-.9.7-1.4.9c-.4.2-1 .4-2.2.4-1.3 0-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9s-.7-.9-.9-1.4c-.2-.4-.4-1-.4-2.2 0-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c0-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4s.9-.7 1.4-.9c.4-.2 1-.4 2.2-.4C12.4 6.2 12.8 6.2 16 6.2zm0 3.6a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 2.2a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm6.4-3.9a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z', fill: true },
  'logo-pinterest':          { d: 'M16 4a12 12 0 0 0-4.3 23.2c0-.9 0-1.9.2-2.8l1.5-6.3s-.4-.7-.4-1.8c0-1.7 1-3 2.4-3 1.1 0 1.7.8 1.7 1.8 0 1.1-.7 2.7-1 4.2-.3 1.2.6 2.2 1.8 2.2 2.2 0 3.7-2.8 3.7-6.2 0-2.5-1.7-4.4-4.8-4.4-3.5 0-5.7 2.6-5.7 5.5 0 1 .3 1.7.8 2.2.2.3.3.4.2.7l-.3 1.1c-.1.4-.4.5-.7.4-1.7-.7-2.5-2.6-2.5-4.7 0-3.5 3-7.7 8.9-7.7 4.8 0 7.9 3.5 7.9 7.3 0 5-2.8 8.7-6.9 8.7-1.4 0-2.7-.7-3.1-1.6l-.8 3.2c-.3 1.1-.9 2.2-1.4 3A12 12 0 1 0 16 4z', fill: true },
  'logo-twitter':            { d: 'M29 9a10.5 10.5 0 0 1-3 .8 5.3 5.3 0 0 0 2.3-2.9 10.5 10.5 0 0 1-3.3 1.3 5.2 5.2 0 0 0-9 3.6c0 .4 0 .8.2 1.2A14.8 14.8 0 0 1 5.4 8a5.2 5.2 0 0 0 1.6 7 5.2 5.2 0 0 1-2.4-.6v.1a5.2 5.2 0 0 0 4.2 5.1 5.2 5.2 0 0 1-2.3.1 5.2 5.2 0 0 0 4.9 3.6A10.5 10.5 0 0 1 4.9 25a14.8 14.8 0 0 0 8 2.3c9.6 0 14.9-8 14.9-14.9 0-.2 0-.4-.1-.7A10.5 10.5 0 0 0 30.4 9H29z', fill: true },
  /* Loading */
  'loading-outline':         { d: 'M16 4v4M16 24v4M4 16H8M24 16h4M7 7l3 3M22 22l3 3M7 25l3-3M22 10l3-3', stroke: true },
  'loading':                 { d: 'M16 4v4M16 24v4M4 16H8M24 16h4M7 7l3 3M22 22l3 3M7 25l3-3M22 10l3-3', stroke: true },
};

export const Icon = ({
  name     = 'star',
  size     = 24,
  color    = 'currentColor',
  strokeWidth = 2,
}) => {
  const icon = paths[name];
  if (!icon) return null;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill={icon.fill ? color : 'none'}
      stroke={icon.stroke || !icon.fill ? color : 'none'}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d={icon.d} />
    </svg>
  );
};

export const ICON_NAMES = Object.keys(paths);

export default Icon;
