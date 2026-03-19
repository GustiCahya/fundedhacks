export function TelegramBanner() {
  return (
    <section className="px-6 pb-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-5 p-5 md:p-6 rounded-xl border border-[#1D9E75] bg-[#0f1a12]">
        
        <div className="flex items-start gap-4 text-left">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1 text-green shrink-0">
            <path d="M11.944 21.056c-4.972 0-9-4.028-9-9 0-4.972 4.028-9 9-9 4.972 0 9 4.028 9 9 0 4.972-4.028 9-9 9zm4.276-13.43c-.426-.063-1.077.067-2.315.586L6.5 11.08c-.287.113-.497.228-.606.353-.19.227-.179.467.037.66.192.176.452.3 1.076.49l.608.188 1.408.435.59 1.832c.18.557.292.833.418.918.118.082.261.087.411.02a1.3 1.3 0 00.324-.22c.118-.106 1.056-1.02 1.944-1.874l2.559 1.892c.677.382 1.157.568 1.487.464.298-.093.5-1.066.866-3.136.21-1.22.464-2.86.643-4.102.086-.593.111-1.023.04-1.217-.061-.168-.258-.277-.631-.41z" fill="currentColor"/>
          </svg>
          <div>
            <h3 className="text-base font-bold font-outfit text-text-primary mb-1">
              Join our Telegram for instant deal alerts
            </h3>
            <p className="text-[13px] text-muted mb-3">
              @fundedhacks · Free forever
            </p>
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
              <span className="text-[12px] text-muted focus:outline-none">Get notified the moment a flash sale drops</span>
            </div>
          </div>
        </div>

        <a 
          href="https://t.me/fundedhacks" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full md:w-auto text-center px-5 py-2.5 text-[13px] font-medium text-black rounded-lg bg-green hover:bg-green-dark transition-colors whitespace-nowrap"
        >
          Join Channel &rarr;
        </a>
      </div>
    </section>
  );
}
