import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  headerFontFamily: [
    'sans-serif',
  ],
  bodyFontFamily: ['serif'],
  googleFonts: [
    {
      name: 'Inconsolata',
      styles: [
        '400',
        '700',
      ],
    },
  ],
});

export default typography;
