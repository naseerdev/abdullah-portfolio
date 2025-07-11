import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-7xl flex-1">
            <Hero />
            <About />
            <Skills />
            
            {/* Experience Section */}
            <section id="experience" className="w-full px-4 sm:px-8 lg:px-0 py-8">
              <h2 className="text-[#101518] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">Experience</h2>
              <div className="grid grid-cols-[40px_1fr] gap-x-2 lg:gap-x-4">
                <div className="flex flex-col items-center gap-1 pt-3">
                  <div className="text-[#101518]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"></path>
                    </svg>
                  </div>
                  <div className="w-[1.5px] bg-[#d4dce2] h-2 grow"></div>
                </div>
                <div className="flex flex-1 flex-col py-3">
                  <p className="text-[#101518] text-base font-medium leading-normal">Senior UI/UX Designer at Software Alliance</p>
                  <p className="text-[#5c748a] text-base font-normal leading-normal">Mar 2022 – Present</p>
                  <ul className="text-[#5c748a] text-sm font-normal leading-normal mt-2 space-y-1">
                    <li>• Led the design of several digital products from concept to delivery</li>
                    <li>• Conducted user research and usability testing to improve product experiences</li>
                    <li>• Mentored junior designers and received &quot;Mentoring Champion&quot; award</li>
                  </ul>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-[1.5px] bg-[#d4dce2] h-2"></div>
                  <div className="text-[#101518]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"></path>
                    </svg>
                  </div>
                  <div className="w-[1.5px] bg-[#d4dce2] h-2 grow"></div>
                </div>
                <div className="flex flex-1 flex-col py-3">
                  <p className="text-[#101518] text-base font-medium leading-normal">UI/UX Designer at IDENBRID</p>
                  <p className="text-[#5c748a] text-base font-normal leading-normal">Nov 2020 – Mar 2022</p>
                  <ul className="text-[#5c748a] text-sm font-normal leading-normal mt-2 space-y-1">
                    <li>• Created wireframes, mockups, and visual designs for web and mobile applications</li>
                    <li>• Collaborated with development teams to implement designs effectively</li>
                  </ul>
                </div>
                <div className="flex flex-col items-center gap-1 pb-3">
                  <div className="w-[1.5px] bg-[#d4dce2] h-2"></div>
                  <div className="text-[#101518]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-1 flex-col py-3">
                  <p className="text-[#101518] text-base font-medium leading-normal">UI/UX Designer at Web Logo-Creator</p>
                  <p className="text-[#5c748a] text-base font-normal leading-normal">May 2020 – Oct 2020</p>
                  <ul className="text-[#5c748a] text-sm font-normal leading-normal mt-2 space-y-1">
                    <li>• Designed brand-centric websites and interfaces</li>
                    <li>• Assisted in user testing and research</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education Section */}
            <section id="education" className="w-full px-4 sm:px-8 lg:px-0 py-8">
              <h2 className="text-[#101518] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">Education</h2>
              <div className="grid grid-cols-[40px_1fr] gap-x-2 lg:gap-x-4">
                <div className="flex flex-col items-center gap-1 pt-3 pb-3">
                  <div className="text-[#101518]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-1 flex-col py-3">
                  <p className="text-[#101518] text-base font-medium leading-normal">BS Computer Science, University of South Asia</p>
                  <p className="text-[#5c748a] text-base font-normal leading-normal">2016 – 2020</p>
                  <p className="text-[#5c748a] text-sm font-normal leading-normal mt-2">
                    <strong>Final Year Project:</strong> AI-Based Seat Belt Detection System
                  </p>
                </div>
              </div>
            </section>

            {/* Portfolio Section */}
            <section id="portfolio" className="w-full px-4 sm:px-8 lg:px-0 py-8">
              <h2 className="text-[#101518] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">Portfolio</h2>
              <p className="text-[#101518] text-base font-normal leading-normal pb-4">
                Take a look at some of my selected works on Behance:
              </p>
              <div className="flex py-3 justify-start">
                <a
                  href="https://behance.net/abdullahnasir8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#dce8f3] text-[#101518] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-100 transition"
                >
                  <span className="truncate">🔗 behance.net/abdullahnasir8</span>
                </a>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="w-full px-4 sm:px-8 lg:px-0 py-8">
              <h2 className="text-[#101518] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">Contact</h2>
              <div className="grid grid-cols-[20%_1fr] gap-x-6 lg:gap-x-8">
                <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#d4dce2] py-5">
                  <p className="text-[#5c748a] text-sm font-normal leading-normal">📍 Location</p>
                  <p className="text-[#101518] text-sm font-normal leading-normal">Lahore, Pakistan</p>
                </div>
                <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#d4dce2] py-5">
                  <p className="text-[#5c748a] text-sm font-normal leading-normal">📞 Phone</p>
                  <p className="text-[#101518] text-sm font-normal leading-normal">+92 324 4254480</p>
                </div>
                <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#d4dce2] py-5">
                  <p className="text-[#5c748a] text-sm font-normal leading-normal">✉️ Email</p>
                  <p className="text-[#101518] text-sm font-normal leading-normal">abdullahnasir06@gmail.com</p>
                </div>
                <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#d4dce2] py-5">
                  <p className="text-[#5c748a] text-sm font-normal leading-normal">🔗 LinkedIn</p>
                  <p className="text-[#101518] text-sm font-normal leading-normal">LinkedIn Profile</p>
                </div>
              </div>
            </section>

            {/* Hobbies Section */}
            <section id="hobbies" className="w-full px-4 sm:px-8 lg:px-0 py-8">
              <h2 className="text-[#101518] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">Hobbies</h2>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 lg:gap-4">
                <div className="flex flex-1 gap-3 rounded-lg border border-[#d4dce2] bg-gray-50 p-4 items-center hover-lift">
                  <div className="text-[#101518]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M176,112H152a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16ZM104,96H96V88a8,8,0,0,0-16,0v8H72a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM241.48,200.65a36,36,0,0,1-54.94,4.81c-.12-.12-.24-.24-.35-.37L146.48,160h-37L69.81,205.09l-.35.37A36.08,36.08,0,0,1,44,216,36,36,0,0,1,8.56,173.75a.68.68,0,0,1,0-.14L24.93,89.52A59.88,59.88,0,0,1,83.89,40H172a60.08,60.08,0,0,1,59,49.25c0,.06,0,.12,0,.18l16.37,84.17a.68.68,0,0,1,0,.14A35.74,35.74,0,0,1,241.48,200.65ZM172,144a44,44,0,0,0,0-88H83.89A43.9,43.9,0,0,0,40.68,92.37l0,.13L24.3,176.59A20,20,0,0,0,58,194.3l41.92-47.59a8,8,0,0,1,6-2.71Zm59.7,32.59-8.74-45A60,60,0,0,1,172,160h-4.2L198,194.31a20.09,20.09,0,0,0,17.46,5.39,20,20,0,0,0,16.23-23.11Z"></path>
                    </svg>
                  </div>
                  <h2 className="text-[#101518] text-base font-bold leading-tight">🎮 Video Games</h2>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-[#d4dce2] bg-gray-50 p-4 items-center hover-lift">
                  <div className="text-[#101518]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.66-3.56L100.28,48h55.43l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM128,88a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,88Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,128,160Z"></path>
                    </svg>
                  </div>
                  <h2 className="text-[#101518] text-base font-bold leading-tight">📸 Photography</h2>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-[#d4dce2] bg-gray-50 p-4 items-center hover-lift">
                  <div className="text-[#101518]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M235.58,128.84,160,91.06V48a32,32,0,0,0-64,0V91.06L20.42,128.84A8,8,0,0,0,16,136v32a8,8,0,0,0,9.57,7.84L96,161.76v18.93L82.34,194.34A8,8,0,0,0,80,200v32a8,8,0,0,0,11,7.43l37-14.81,37,14.81A8,8,0,0,0,176,232V200a8,8,0,0,0-2.34-5.66L160,180.69V161.76l70.43,14.08A8,8,0,0,0,240,168V136A8,8,0,0,0,235.58,128.84ZM224,158.24l-70.43-14.08A8,8,0,0,0,144,152v32a8,8,0,0,0,2.34,5.66L160,203.31v16.87l-29-11.61a8,8,0,0,0-5.94,0L96,220.18V203.31l13.66-13.65A8,8,0,0,0,112,184V152a8,8,0,0,0-9.57-7.84L32,158.24v-17.3l75.58-37.78A8,8,0,0,0,112,96V48a16,16,0,0,1,32,0V96a8,8,0,0,0,4.42,7.16L224,140.94Z"></path>
                    </svg>
                  </div>
                  <h2 className="text-[#101518] text-base font-bold leading-tight">✈️ Traveling</h2>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-[#d4dce2] bg-gray-50 p-4 items-center hover-lift">
                  <div className="text-[#101518]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M224,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h64a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64Z"></path>
                    </svg>
                  </div>
                  <h2 className="text-[#101518] text-base font-bold leading-tight">📖 Reading</h2>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
