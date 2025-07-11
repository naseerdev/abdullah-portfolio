const designTools = [
  {
    name: "Figma",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M184,96a40,40,0,0,0-24-72H88A40,40,0,0,0,64,96a40,40,0,0,0,1.37,65A44,44,0,1,0,136,196V160a40,40,0,1,0,48-64Zm0-32a24,24,0,0,1-24,24H136V40h24A24,24,0,0,1,184,64ZM64,64A24,24,0,0,1,88,40h32V88H88A24,24,0,0,1,64,64Zm24,88a24,24,0,0,1,0-48h32v48H88Zm32,44a28,28,0,1,1-28-28h28Zm40-44a24,24,0,1,1,24-24A24,24,0,0,1,160,152Z"></path>
      </svg>
    ),
  },
  {
    name: "Adobe XD",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M216,136H136a8,8,0,0,0-8,8v57.45a8,8,0,0,0,6.57,7.88l80,14.54A7.61,7.61,0,0,0,216,224a8,8,0,0,0,8-8V144A8,8,0,0,0,216,136Zm-8,70.41-64-11.63V152h64ZM104,136H40a8,8,0,0,0-8,8v40a8,8,0,0,0,6.57,7.87l64,11.64a8.54,8.54,0,0,0,1.43.13,8,8,0,0,0,8-8V144A8,8,0,0,0,104,136Zm-8,50.05-48-8.73V152H96ZM221.13,33.86a8,8,0,0,0-6.56-1.73l-80,14.55A8,8,0,0,0,128,54.55V112a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V40A8,8,0,0,0,221.13,33.86ZM208,104H144V61.22l64-11.63ZM109.13,54.22a8,8,0,0,0-6.56-1.73l-64,11.64A8,8,0,0,0,32,72v40a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V60.36A8,8,0,0,0,109.13,54.22ZM96,104H48V78.68L96,70Z"></path>
      </svg>
    ),
  },
  {
    name: "Adobe Photoshop",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M216,136H136a8,8,0,0,0-8,8v57.45a8,8,0,0,0,6.57,7.88l80,14.54A7.61,7.61,0,0,0,216,224a8,8,0,0,0,8-8V144A8,8,0,0,0,216,136Zm-8,70.41-64-11.63V152h64ZM104,136H40a8,8,0,0,0-8,8v40a8,8,0,0,0,6.57,7.87l64,11.64a8.54,8.54,0,0,0,1.43.13,8,8,0,0,0,8-8V144A8,8,0,0,0,104,136Zm-8,50.05-48-8.73V152H96ZM221.13,33.86a8,8,0,0,0-6.56-1.73l-80,14.55A8,8,0,0,0,128,54.55V112a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V40A8,8,0,0,0,221.13,33.86ZM208,104H144V61.22l64-11.63ZM109.13,54.22a8,8,0,0,0-6.56-1.73l-64,11.64A8,8,0,0,0,32,72v40a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V60.36A8,8,0,0,0,109.13,54.22ZM96,104H48V78.68L96,70Z"></path>
      </svg>
    ),
  },
  {
    name: "Adobe Illustrator",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M184,96a40,40,0,0,0-24-72H88A40,40,0,0,0,64,96a40,40,0,0,0,1.37,65A44,44,0,1,0,136,196V160a40,40,0,1,0,48-64Zm0-32a24,24,0,0,1-24,24H136V40h24A24,24,0,0,1,184,64ZM64,64A24,24,0,0,1,88,40h32V88H88A24,24,0,0,1,64,64Zm24,88a24,24,0,0,1,0-48h32v48H88Zm32,44a28,28,0,1,1-28-28h28Zm40-44a24,24,0,1,1,24-24A24,24,0,0,1,160,152Z"></path>
      </svg>
    ),
  },
  {
    name: "Adobe InDesign",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M216,40H168a8,8,0,0,0,0,16h16V176.85L111,44.14A8,8,0,0,0,104,40H40a8,8,0,0,0,0,16H56V200H40a8,8,0,0,0,0,16H88a8,8,0,0,0,0-16H72V79.15l73,132.71a8,8,0,0,0,7,4.14h40a8,8,0,0,0,8-8V56h16a8,8,0,0,0,0-16ZM77.53,56H99.27l79.2,144H156.73Z"></path>
      </svg>
    ),
  },
];

const otherSkills = [
  {
    name: "Wireframing & Prototyping",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM51.31,160,136,75.31,152.69,92,68,176.68ZM48,179.31,76.69,208H48Zm48,25.38L79.31,188,164,103.31,180.69,120Zm96-96L147.31,64l24-24L216,84.68Z"></path>
      </svg>
    ),
  },
  {
    name: "Visual Design",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.66-3.56L100.28,48h55.43l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM128,88a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,88Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,128,160Z"></path>
      </svg>
    ),
  },
  {
    name: "User Research",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
      </svg>
    ),
  },
  {
    name: "Usability Testing",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
      </svg>
    ),
  },
  {
    name: "Sketching",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM51.31,160,136,75.31,152.69,92,68,176.68ZM48,179.31,76.69,208H48Zm48,25.38L79.31,188,164,103.31,180.69,120Zm96-96L147.31,64l24-24L216,84.68Z"></path>
      </svg>
    ),
  },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full px-4 sm:px-8 lg:px-0 py-8">
      <h2 className="text-[#101518] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">Skills</h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-[#101518] text-lg font-semibold leading-tight mb-4">Design Tools</h3>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 lg:gap-4">
            {designTools.map((skill) => (
              <div key={skill.name} className="flex flex-1 gap-3 rounded-lg border border-[#d4dce2] bg-gray-50 p-4 items-center hover-lift">
                <div className="text-[#101518]">{skill.icon}</div>
                <h2 className="text-[#101518] text-base font-bold leading-tight">{skill.name}</h2>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[#101518] text-lg font-semibold leading-tight mb-4">Other Skills</h3>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 lg:gap-4">
            {otherSkills.map((skill) => (
              <div key={skill.name} className="flex flex-1 gap-3 rounded-lg border border-[#d4dce2] bg-gray-50 p-4 items-center hover-lift">
                <div className="text-[#101518]">{skill.icon}</div>
                <h2 className="text-[#101518] text-base font-bold leading-tight">{skill.name}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 