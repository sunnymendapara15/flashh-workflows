/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      colors: {
        primary: { 50:'#eef2ff',100:'#e0e7ff',200:'#c7d2fe',300:'#a5b4fc',400:'#818cf8',500:'#6366f1',600:'#4f46e5',700:'#4338ca',800:'#3730a3',900:'#312e81',950:'#1e1b4b' },
        cyan: { 400:'#22d3ee',500:'#06b6d4',600:'#0891b2' }
      },
      animation: { 'fade-up':'fadeUp 0.6s ease-out forwards','fade-in':'fadeIn 0.6s ease-out forwards','slide-left':'slideLeft 0.6s ease-out forwards','slide-right':'slideRight 0.6s ease-out forwards','pulse-slow':'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite','float':'float 6s ease-in-out infinite','float-delayed':'float 6s ease-in-out 3s infinite','typing':'typing 2s steps(30) forwards','cursor':'blink 1s step-end infinite','scale-in':'scaleIn 0.4s ease-out forwards','marquee':'marquee 30s linear infinite' },
      keyframes: { fadeUp:{'0%':{opacity:'0',transform:'translateY(30px)'},'100%':{opacity:'1',transform:'translateY(0)'}}, fadeIn:{'0%':{opacity:'0'},'100%':{opacity:'1'}}, slideLeft:{'0%':{opacity:'0',transform:'translateX(-40px)'},'100%':{opacity:'1',transform:'translateX(0)'}}, slideRight:{'0%':{opacity:'0',transform:'translateX(40px)'},'100%':{opacity:'1',transform:'translateX(0)'}}, float:{'0%,100%':{transform:'translateY(0px)'},'50%':{transform:'translateY(-20px)'}}, blink:{'0%,100%':{opacity:'1'},'50%':{opacity:'0'}}, scaleIn:{'0%':{opacity:'0',transform:'scale(0.95)'},'100%':{opacity:'1',transform:'scale(1)'}}, marquee:{from:{transform:'translateX(0)'},to:{transform:'translateX(-50%)'}}}, backdropBlur:{ xs:'2px' } },
  }, plugins: [],
};