import Link from "next/link";
import { LogoMark } from "@/components/icons/Logo";
import {
  CopyrightIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  SocialIcon,
} from "@/components/icons/MiscIcons";
import { CONTACT, FOOTER_LINKS, SOCIALS } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-white shadow-nav-up">
      <div className="shell py-14 lg:py-[57px]">
        <div className="grid gap-12 lg:grid-cols-[410px_1fr_1fr] lg:gap-0 lg:divide-x-2 lg:divide-divider">
          {/* brand */}
          <div className="lg:pr-16">
            <LogoMark className="h-[110px] w-auto" />
            <p className="mt-8 max-w-[410px] text-[16px] font-medium leading-[1.6] tracking-[-0.02em] text-black lg:text-center">
              {CONTACT.blurb}
            </p>
          </div>

          {/* company links */}
          <nav aria-label="Footer" className="lg:pl-[94px]">
            <h2 className="text-[22px] font-semibold text-black">
              Our <span className="text-brand-cyan">Company</span>
            </h2>
            <ul className="mt-8 space-y-[29px]">
              {FOOTER_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[19px] font-medium text-black transition-colors hover:text-brand-cyan"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* connect */}
          <div className="lg:pl-[94px]">
            <h2 className="text-[22px] font-semibold text-black">
              Connect <span className="text-brand-cyan">with</span> us
            </h2>

            <ul className="mt-7 flex items-center gap-[30px]">
              {SOCIALS.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="block text-black transition-colors hover:text-brand-cyan"
                  >
                    <SocialIcon name={s.name} className="h-[37px] w-[37px]" />
                    <span className="sr-only">{s.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            <ul className="mt-10 space-y-[27px] text-[15px] font-medium text-black">
              <li className="flex items-center gap-5">
                <PhoneIcon className="h-[23px] w-[23px] shrink-0" />
                <a href={`tel:${CONTACT.phone.replace(/[^\d+]/g, "")}`} className="hover:text-brand-cyan">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center gap-5">
                <MailIcon className="h-[23px] w-[23px] shrink-0" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-brand-cyan">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-center gap-5">
                <PinIcon className="h-[26px] w-[18px] shrink-0" />
                <span>{CONTACT.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 flex items-center justify-center gap-2 text-[13px] font-medium text-black">
          <CopyrightIcon className="h-[13px] w-[13px]" />
          {CONTACT.copyright}
        </p>
      </div>
    </footer>
  );
}
