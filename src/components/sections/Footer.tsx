import { footer, svg, img } from '../../data/content'

export function Footer() {
  return (
    <footer className="bg-surface">
      <div className="container-px py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-xs">
            <a href="#home" className="flex items-center gap-2.5">
              <img src={svg('logo-navy.svg')} alt="" className="h-[26px] w-[26px]" />
              <span className="font-display text-[23px] font-semibold text-ink">
                Propertiva<sup className="ml-0.5 align-super text-[11px] font-medium text-body">®</sup>
              </span>
            </a>
            <p className="mt-5 font-sans text-[16px] leading-[1.5] text-body">{footer.description}</p>
            <a
              href={footer.cta.href}
              className="mt-7 inline-flex h-[50px] items-center justify-center rounded-pill bg-navy px-7 font-sans text-[15px] font-medium text-white shadow-navy transition-all duration-300 ease-framer hover:bg-navy-700 active:scale-[0.98]"
            >
              {footer.cta.label}
            </a>
          </div>

          {/* Link columns */}
          {footer.columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-[18px] font-semibold text-ink">{col.title}</h4>
              <ul className="mt-5 flex flex-col gap-3.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="font-sans text-[16px] text-body transition-colors duration-200 hover:text-ink">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Other info */}
          <div>
            <h4 className="font-display text-[18px] font-semibold text-ink">{footer.otherInfo.title}</h4>
            <ul className="mt-5 flex flex-col gap-4">
              {footer.otherInfo.items.map((item) => (
                <li key={item.text} className="flex items-center gap-3">
                  <img src={item.icon} alt="" className="h-[18px] w-[18px] object-contain opacity-80" />
                  <span className="font-sans text-[16px] text-body">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 rounded-[20px] bg-black/[0.03] px-7 py-5 sm:flex-row">
          <p className="font-sans text-[15px] text-body">
            {footer.copyright} <span className="mx-1.5 text-body/50">•</span> {footer.builtIn.split(' ')[0]} {footer.builtIn.split(' ')[1]}{' '}
            <span className="font-semibold text-ink">{footer.builtIn.split(' ')[2]}</span>
          </p>
          <div className="flex items-center gap-2.5">
            <span className="font-sans text-[15px] text-body">Template by</span>
            <img src={img('t-avatar-nasir.jpg')} alt={footer.templateBy} className="h-7 w-7 rounded-full object-cover" />
            <span className="font-sans text-[15px] font-semibold text-ink">{footer.templateBy}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
