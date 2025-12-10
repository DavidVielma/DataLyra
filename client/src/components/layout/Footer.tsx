import { Logo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4 text-white">
              <Logo size={24} className="brightness-200 grayscale-0" />
              <span className="font-display font-bold text-xl">DataLyra</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              Empowering businesses to make smarter decisions through data transformation and beautiful visualization.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 transition-colors cursor-pointer">
                <span className="sr-only">Twitter</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-2.035-4.608-2.049-3.483 0-6.309 2.742-6.309 6.223 0 .488.055.959.161 1.409-5.242-.262-9.889-2.772-12.999-6.634-.537.935-.843 2.016-.843 3.173 0 2.159 1.101 4.067 2.775 5.184-1.022-.032-1.984-.313-2.822-.779v.085c0 3.016 2.148 5.532 4.998 6.102-.523.142-1.075.218-1.644.218-.401 0-.791-.039-1.173-.113.793 2.473 3.09 4.273 5.811 4.322-2.133 1.671-4.818 2.667-7.721 2.667-.502 0-1-.029-1.488-.088 2.756 1.768 6.032 2.8 9.539 2.8 11.45 0 17.713-9.488 17.713-17.713 0-.27 0-.538-.008-.805 1.215-.877 2.269-1.97 3.096-3.238z"/></svg>
              </div>
              <div className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 transition-colors cursor-pointer">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} DataLyra Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
