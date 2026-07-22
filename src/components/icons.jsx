import {
  LuPhone,
  LuMapPin,
  LuClock,
  LuMail,
  LuStar,
  LuArrowRight,
  LuMenu,
  LuX,
  LuWrench,
  LuShieldCheck,
  LuUsers,
  LuAward,
  LuHeart,
  LuQuote,
  LuCheck,
  LuFacebook,
  LuTriangle,
  LuGauge,
  LuHandshake,
} from 'react-icons/lu'

const registry = {
  phone: LuPhone,
  'map-pin': LuMapPin,
  clock: LuClock,
  mail: LuMail,
  star: LuStar,
  arrow: LuArrowRight,
  menu: LuMenu,
  x: LuX,
  wrench: LuWrench,
  shield: LuShieldCheck,
  users: LuUsers,
  award: LuAward,
  heart: LuHeart,
  quote: LuQuote,
  check: LuCheck,
  facebook: LuFacebook,
  triangle: LuTriangle,
  gauge: LuGauge,
  handshake: LuHandshake,
}

export function Icon({ name, className }) {
  const Cmp = registry[name]
  if (!Cmp) return null
  return <Cmp className={className} aria-hidden="true" />
}
