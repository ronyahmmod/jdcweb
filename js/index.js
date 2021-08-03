import { createStickyNavObserver } from './components/stickynav';

const navbar = document.querySelector('.navbar');
const story = document.querySelector('.story');
const banner = document.querySelector('.banner');

const stickyNavObserver = createStickyNavObserver(
  null,
  '0px',
  0,
  navbar,
  'navbar--sticky'
);

stickyNavObserver.observe(banner);
