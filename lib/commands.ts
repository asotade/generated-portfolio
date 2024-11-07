interface CommandResponse {
  content: string;
}

const COMMANDS = {
  help: {
    content: `Available commands:
  - about     Display information about me
  - skills    List technical skills
  - exp       Show work experience
  - projects  View notable projects
  - contact   Display contact information
  - clear     Clear terminal
  - help      Show this help message`
  },
  about: {
    content: `ABDESSAMII SALHI
Senior Software Engineer passionate about building scalable solutions
and driving technical innovation.`
  },
  skills: {
    content: `Technical Skills:
• Languages: JavaScript, TypeScript, Python, Java
• Frameworks: React, Next.js, Node.js, Express
• Cloud: AWS, GCP, Azure
• Tools: Git, Docker, Kubernetes`
  },
  exp: {
    content: `Professional Experience:
Senior Software Engineer
• Led development of scalable applications
• Architected cloud-native solutions
• Mentored junior developers
• Implemented CI/CD pipelines`
  },
  projects: {
    content: `Notable Projects:
1. Cloud Infrastructure Automation
   • Developed automated deployment systems
   • Reduced deployment time by 70%

2. Microservices Architecture
   • Designed scalable microservices
   • Improved system reliability`
  },
  contact: {
    content: `Contact Information:
• Email: salhi.abdessamii@gmail.com
• Website: abdessamii.com
• GitHub: github.com/asotade`
  }
};

export function executeCommand(command: string): CommandResponse | null {
  const cmd = command.toLowerCase().trim();
  return COMMANDS[cmd as keyof typeof COMMANDS] || null;
}