import React from 'react'

const Skills = () => {
  return (
    <section className="px-4 flex flex-col justify-center h-[100vh] md:px-10 py-10 md:py-16 skills-back" id='skills'>
    <h3 className="text-4xl text-center  font-bold mb-8">Skills</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        "Blockchain Content",
        "Technical Writing",
        "Community Management",
        "Social Media Strategy",
        "SEO Optimization",
        "Whitepaper Writing",
        "Web3 Marketing",
        "Content Strategy"
      ].map((skill, index) => (
        <div key={index} className="skills p-4 rounded-lg text-center shadow-sm shadow-primary hover:scale-105 ease-in duration-300">
          <span className="text-primary">{skill}</span>
        </div>
      ))}
    </div>
  </section>
  )
}

export default Skills
