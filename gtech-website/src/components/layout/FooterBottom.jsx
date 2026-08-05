const FooterBottom = () => {
  return (
    <div className="border-t border-slate-200 py-5">
      <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
        <p>
          © 2026 G.Tech Global India Pvt. Ltd. All Rights Reserved.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="#"
            className="transition-colors hover:text-blue-600"
          >
            Privacy Policy
          </a>

          <span className="text-slate-300">|</span>

          <a
            href="#"
            className="transition-colors hover:text-blue-600"
          >
            Terms & Conditions
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;