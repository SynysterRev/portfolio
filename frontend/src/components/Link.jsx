export default function Link({ href, linkText }) {
  return <a href={href} className="relative inline-block px-8 py-3 rounded-full 
  text-white font-bold text-lg uppercase tracking-wider no-underline 
  transition-all duration-300 hover:shadow-[0_0_30px] hover:shadow-pink-500/80">
    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-pink-500"></span>

    <span className="absolute inset-[1px] rounded-full bg-gray-900"></span>

    <span className="relative">
      {linkText}
    </span>
  </a>
}