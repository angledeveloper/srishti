import './globals.css';

export const metadata = {
  title: '🖕💨🥳🍺 🖕',
  description: ':)',
  authors: [
    { name: 'Angle.services', url: 'https://Angle.services' },
    { name: 'GlitchNobody', url: 'https://glitchnobody.com' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.png' />
      </head>
      <body className=' bg-white text-black'>{children}</body>
    </html>
  );
}
