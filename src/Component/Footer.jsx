export default function Footer() {
  return (
    <footer className="bg-primary">
     <div className="footer footer-center px-4 py-10 text-primary-content flex-col max-w-7xl mx-auto">
         <div className="col-span-full">
        <h2 className="text-2xl font-bold">KeenKeeper</h2>

        <p className="mt-2 max-w-md text-sm opacity-70">
          Your personal space for meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <p className="mt-4 text-xs font-medium">Social Links</p>

        <div className="flex gap-2 pt-2">
          <button className="btn btn-circle btn-xs">f</button>
          <button className="btn btn-circle btn-xs">in</button>
          <button className="btn btn-circle btn-xs">X</button>
        </div>
      </div>

      <div className="w-full border-t border-primary-content/10 pt-4 col-span-full flex justify-between items-center flex-col sm:flex-row">
        <p className="text-xs opacity-50">
          © 2026 KeenKeeper. All rights reserved.
        </p>
        <div className="text-xs opacity-50">
          <span>Privacy Policy </span>
          <span> Terms of Service </span>
          <span>Cookies </span>
        </div>
      </div>
     </div>
    </footer>
  );
}
