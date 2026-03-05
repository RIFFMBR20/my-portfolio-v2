import React from 'react';
import {
    Mail,
    ExternalLink,
    Code,
    Database,
    Smartphone,
    Terminal,
    Cpu,
    Layers,
    Download,
    Award
} from 'lucide-react';

import { SiGithub, SiLinkedin, SiTensorflow } from 'react-icons/si';

const Portfolio = () => {
    const projects = [
        {
            title: "Mendaur App",
            description: "Mendaur is an application that can detect organic and inorganic garbage and provides recycling advice. Mendaur's advanced waste detection system helps clients choose recycling options",
            tech: ["Data Analyst", "Image Annotation", "Computer Vision", "Deep Learning"],
            link: "https://github.com/Bam280/mendaur-app"
        },
        {
            title: "Telko Customer Churn Prediction",
            description: "An end-to-end machine learning application designed to help telecommunications companies detect customers at risk of churn. This system covers both telephone and internet services.",
            tech: ["Python", "Scikit-Learn", "Data Analytics"],
            link: "https://github.com/RIFFMBR20/Telko-Churn-prediction-Project"
        },
        {
            title: "Ecommerce App",
            description: "Ecommerce App with React Native.",
            tech: ["React Native", "TypeScript", "Expo", "Zustand"],
            link: "https://github.com/RIFFMBR20/React-native-market-online-apps"
        },
    ];

    return (
        <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-blue-500/30">
            {/* Background Effect: Grid & Glow */}
            <div className="fixed inset-0 z-0 opacity-20"
                 style={{
                     backgroundImage: `radial-gradient(#1e293b 1px, transparent 1px)`,
                     backgroundSize: '30px 30px'
                 }}></div>
            <div
                className="fixed top-0 -left-4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
            <div
                className="fixed bottom-0 -right-4 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>

            <div className="relative z-10">
                {/* Hero Section */}
                <header className="py-20 px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
                    {/* FOTO PROFILE START */}
                    <div className="relative mb-10 group">
                        {/* Efek Cahaya di Belakang Foto */}
                        <div
                            className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full blur-md opacity-30 group-hover:opacity-100 transition duration-1000"></div>

                        {/* Lingkaran Frame */}
                        <div
                            className="relative w-44 h-44 rounded-full border-4 border-[#020617] overflow-hidden bg-slate-800 shadow-2xl">
                            <img
                                src="/Photo_Profile.jpg"
                                alt="Arifful Fikri"
                                className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500 ease-in-out"
                                onError={(e) => {
                                    e.target.src = "https://ui-avatars.com/api/?name=Arifful+Fikri&background=0D8ABC&color=fff&size=256";
                                }}
                            />
                        </div>
                    </div>
                    {/* FOTO PROFILE END */}
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
                        Arifful <span
                        className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Fikri</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed mb-8">
                        Software Engineer with 1 year of experience and a background in Machine Learning.
                        Passionate about building efficient and scalable systems, and continuously improving skills in
                        software engineering and AI engineering.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">

                        <a
                            href="/CV_Arifful Fikri.pdf"
                            download="CV_Arifful Fikri.pdf"
                            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-900/40 hover:-translate-y-0.5"
                        >
                            <Download size={20}/> Download CV
                        </a>
                        <div className="flex gap-4">
                            <a href="https://github.com/RIFFMBR20"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="p-3 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-blue-400 hover:text-blue-400 transition-all">
                                <SiGithub size={24} />
                            </a>

                            <a href="https://www.linkedin.com/in/ariffulfikri/"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="p-3 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-blue-400 hover:text-blue-400 transition-all">
                                <SiLinkedin size={24} />
                            </a>
                            <a href="mailto:ariffulfikri.af@gmail.com"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="p-3 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-blue-400 hover:text-blue-400 transition-all"><Mail
                                size={24}/>
                            </a>
                        </div>
                    </div>
                </header>

                {/* SKILLS SECTION - Optimized for Backend & AI Engineering */}
                <section className="py-12 px-6 max-w-5xl mx-auto">
                    <div
                        className="bg-slate-900/30 border border-slate-800 rounded-[2rem] p-10 backdrop-blur-sm relative overflow-hidden group">

                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                            {/* 1. Programming Languages */}
                            <div className="space-y-5">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-blue-500/10 rounded-lg">
                                        <Terminal className="text-blue-400" size={18}/>
                                    </div>
                                    <h3 className="text-sm font-bold text-white uppercase tracking-widest">Languages</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {["Go", "Python", "Java", "JavaScript", "TypeScript", "HTML/CSS"].map((skill) => (
                                        <span key={skill}
                                              className="px-3 py-1 bg-slate-800/40 border border-slate-700/50 rounded-lg text-[11px] font-medium text-slate-400 hover:text-white hover:border-blue-500/50 transition-all cursor-default">
                                          {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* 2. Machine Learning (Spesialisasi Kamu) */}
                            <div className="space-y-5">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-purple-500/10 rounded-lg">
                                        <Cpu className="text-purple-400" size={18}/>
                                    </div>
                                    <h3 className="text-sm font-bold text-white uppercase tracking-widest">Machine
                                        Learning</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {["Scikit-Learn", "Computer Vision", "Deep Learning", "Data Analysis"].map((skill) => (
                                        <span key={skill}
                                              className="px-3 py-1 bg-purple-500/5 border border-purple-500/20 rounded-lg text-[11px] font-medium text-purple-300 hover:border-purple-400 transition-all cursor-default">
                                          {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* 3. Backend & Infrastructure */}
                            <div className="space-y-5">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-emerald-500/10 rounded-lg">
                                        <Database className="text-emerald-400" size={18}/>
                                    </div>
                                    <h3 className="text-sm font-bold text-white uppercase tracking-widest">Backend</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {["MySQL", "Redis", "PostgresSql", "Kafka", "Oracle"].map((skill) => (
                                        <span key={skill}
                                              className="px-3 py-1 bg-slate-800/40 border border-slate-700/50 rounded-lg text-[11px] font-medium text-slate-400 hover:text-emerald-400 transition-all cursor-default">
                                          {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* 4. Development Tools */}
                            <div className="space-y-5">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-orange-500/10 rounded-lg">
                                        <Layers className="text-orange-400" size={18}/>
                                    </div>
                                    <h3 className="text-sm font-bold text-white uppercase tracking-widest">Dev
                                        Tools</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {["Git", "Docker", "Gitlab", "Bitbucket"].map((skill) => (
                                        <span key={skill}
                                              className="px-3 py-1 bg-slate-800/40 border border-slate-700/50 rounded-lg text-[11px] font-medium text-slate-400 hover:text-orange-400 transition-all cursor-default">
                                      {skill}
                                    </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* WORK EXPERIENCE SECTION START */}
                <section className="py-20 px-6 max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
                        <Layers className="text-blue-400"/> Work Experience
                    </h2>

                    <div className="space-y-12">
                        {/* Experience 2 */}
                        <div
                            className="relative pl-8 border-l-2 border-slate-800 hover:border-blue-500 transition-colors group">
                            {/* Dot Indicator */}
                            <div
                                className="absolute w-4 h-4 bg-slate-900 border-2 border-slate-700 group-hover:border-blue-400 rounded-full -left-[9px] top-1 transition-colors"></div>

                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">Backend Developer</h3>
                                    <p className="text-blue-400 font-medium">PT Jalin Pembayaran Nusantara</p>
                                </div>
                                <span
                                    className="text-sm font-mono text-slate-500 bg-slate-900 px-3 py-1 rounded-full border border-slate-800 mt-2 md:mt-0">
                                  Feb 2026 - Now
                                </span>
                            </div>

                            <p className="text-slate-400 mb-4 leading-relaxed">
                                Responsible for Java and Golang development, as well as Flutter-based web application development, with a strong focus on building efficient and scalable code capable of processing large volumes of data with high performance.
                            </p>

                            <ul className="space-y-2 mb-6">
                                <li className="flex items-start gap-2 text-sm text-slate-400">
                                    <span className="text-blue-500 mt-1">▹</span>
                                    Developed backend services in Golang from scratch, including Kafka consumers and TXT file processing to
                                    update databases for reporting purposes.
                                </li>
                                <li className="flex items-start gap-2 text-sm text-slate-400">
                                    <span className="text-blue-500 mt-1">▹</span>
                                    Built a Flutter-based web application from scratch, implementing Provider as the state management architecture
                                </li>
                                <li className="flex items-start gap-2 text-sm text-slate-400">
                                    <span className="text-blue-500 mt-1">▹</span>
                                    Handled QA defect fixes by performing debugging, log analysis, and internal testing for applications in the
                                    testing phase
                                </li>
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                {["Golang", "Java", "Oracle", "Flutter"].map((tech) => (
                                    <span key={tech}
                                          className="text-[10px] font-bold px-2 py-1 bg-slate-800/50 text-slate-400 rounded uppercase tracking-tighter">
                                    {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        {/* Experience 1 */}
                        <div
                            className="relative pl-8 border-l-2 border-slate-800 hover:border-blue-500 transition-colors group">
                            {/* Dot Indicator */}
                            <div
                                className="absolute w-4 h-4 bg-slate-900 border-2 border-slate-700 group-hover:border-blue-400 rounded-full -left-[9px] top-1 transition-colors"></div>

                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">FullStack
                                        Developer</h3>
                                    <p className="text-blue-400 font-medium">PT Cimb Niaga</p>
                                </div>
                                <span
                                    className="text-sm font-mono text-slate-500 bg-slate-900 px-3 py-1 rounded-full border border-slate-800 mt-2 md:mt-0">
                                  Oct 2024 - Oct 2025
                                </span>
                            </div>

                            <p className="text-slate-400 mb-4 leading-relaxed">
                                Responsible for backend system development and application integration. Focus on code efficiency and system scalability using modern architecture.
                            </p>

                            <ul className="space-y-2 mb-6">
                                <li className="flex items-start gap-2 text-sm text-slate-400">
                                    <span className="text-blue-500 mt-1">▹</span>
                                    Handled the development of web, mobile, and backend systems for a referral
                                    application in the banking sector.
                                </li>
                                <li className="flex items-start gap-2 text-sm text-slate-400">
                                    <span className="text-blue-500 mt-1">▹</span>
                                    Handled the migration of backend services from Java to Golang, improving overall
                                    system performance and
                                    maintainability.
                                </li>
                                <li className="flex items-start gap-2 text-sm text-slate-400">
                                    <span className="text-blue-500 mt-1">▹</span>
                                    Improved the layout structure of website pages using Next.js, transforming
                                    disorganized layouts into clearer and
                                    more user-friendly interfaces.
                                </li>
                                <li className="flex items-start gap-2 text-sm text-slate-400">
                                    <span className="text-blue-500 mt-1">▹</span>
                                    Enhanced mobile application features and redesigned layouts using Flutter, improving
                                    readability and overall
                                    user experience.
                                </li>
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                {["Golang", "Java", "MySQL", "Redist", "Kafka"].map((tech) => (
                                    <span key={tech}
                                          className="text-[10px] font-bold px-2 py-1 bg-slate-800/50 text-slate-400 rounded uppercase tracking-tighter">
                                    {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                {/* WORK EXPERIENCE SECTION END */}

                {/* ORGANIZATION EXPERIENCE SECTION START */}
                <section className="py-20 px-6 max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
                        <Cpu className="text-blue-400"/> Organization Experience
                    </h2>

                    <div className="space-y-12">
                        {/* Organisasi 1 */}
                        <div
                            className="relative pl-8 border-l-2 border-slate-800 hover:border-blue-500 transition-colors group">
                            {/* Dot Indicator */}
                            <div
                                className="absolute w-4 h-4 bg-slate-900 border-2 border-slate-700 group-hover:border-blue-400 rounded-full -left-[9px] top-1 transition-colors"></div>

                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">Head
                                        of Vision Programming</h3>
                                    <p className="text-blue-400 font-medium">Robotiik in Universitas Brawijaya</p>
                                </div>
                                <span
                                    className="text-sm font-mono text-slate-500 bg-slate-900 px-3 py-1 rounded-full border border-slate-800 mt-2 md:mt-0">
                                  2022 - 2023
                                </span>
                            </div>

                            <p className="text-slate-400 mb-4 leading-relaxed">
                                Robotiik is a research organization focused on developing advanced robots for success in
                                the Indonesian Robotics
                                Contest (KRI).
                            </p>

                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2 text-sm text-slate-500">
                                    <span className="text-blue-500 mt-1">▹</span>
                                    Implemented machine learning algorithms like CNN and YOLOV5 in computer vision
                                    robots.
                                </li>
                                <li className="flex items-start gap-2 text-sm text-slate-500">
                                    <span className="text-blue-500 mt-1">▹</span>
                                    Developed an automatic label annotator for a dataset of 12,000 images.
                                </li>
                                <li className="flex items-start gap-2 text-sm text-slate-500">
                                    <span className="text-blue-500 mt-1">▹</span>
                                    Led the vision team to participate in 3 major competitions at the Kontes Robot
                                    Indonesia (KRI).
                                </li>
                            </ul>
                        </div>

                        {/* Organisasi 2 */}
                        <div
                            className="relative pl-8 border-l-2 border-slate-800 hover:border-blue-500 transition-colors group">
                            {/* Dot Indicator */}
                            <div
                                className="absolute w-4 h-4 bg-slate-900 border-2 border-slate-700 group-hover:border-blue-400 rounded-full -left-[9px] top-1 transition-colors"></div>

                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">Vice
                                        Chairman Division Advocacy</h3>
                                    <p className="text-blue-400 font-medium">HIMATEKKOM</p>
                                </div>
                                <span
                                    className="text-sm font-mono text-slate-500 bg-slate-900 px-3 py-1 rounded-full border border-slate-800 mt-2 md:mt-0">
                                  2021 - 2022
                                </span>
                            </div>

                            <p className="text-slate-400 mb-4 leading-relaxed">
                                HIMATEKKOM is a community organization dedicated to enhancing student competence through
                                extracurricular
                                activities and fostering strong connections between new and senior students within the
                                same study program.
                            </p>

                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2 text-sm text-slate-500">
                                    <span className="text-blue-500 mt-1">▹</span>
                                    Led a team of 8 members to execute planned initiatives aimed at enhancing the
                                    competence of computer
                                    engineering students within HIMATEKKOM.
                                </li>
                                <li className="flex items-start gap-2 text-sm text-slate-500">
                                    <span className="text-blue-500 mt-1">▹</span>
                                    Successfully organized 6 diverse events within the field of computer engineering.
                                </li>
                                <li className="flex items-start gap-2 text-sm text-slate-500">
                                    <span className="text-blue-500 mt-1">▹</span>
                                    Established connections with 4 alumni, providing valuable networking opportunities
                                    and real-world insights to
                                    current members.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                {/* ORGANIZATION EXPERIENCE SECTION END */}

                {/* Projects Section */}
                <section className="py-20 px-6 max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
                        <Code className="text-blue-400"/> Projects Portfolio
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <div key={index}
                                 className="group relative bg-slate-900/40 border border-slate-800 p-8 rounded-3xl hover:border-blue-500/50 transition-all overflow-hidden">
                                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                                <p className="text-slate-400 mb-6 leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-8 text-xs font-mono">
                                    {project.tech.map((t, i) => (
                                        <span key={i}
                                              className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-lg">
                                          {t}
                                        </span>
                                    ))}
                                </div>
                                <a href={project.link}
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="inline-flex items-center gap-2 text-white font-bold hover:text-blue-400 transition-colors uppercase tracking-widest text-sm">
                                    View Detail <ExternalLink size={16}/>
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CERTIFICATES SECTION START */}
                <section id="certs" className="py-20 px-6 max-w-5xl mx-auto">
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                            <div className="p-2 bg-yellow-500/10 rounded-lg">
                                <Award className="text-yellow-500"/>
                            </div>
                            Certifications
                        </h2>
                        <div className="h-px flex-1 bg-gradient-to-r from-slate-800 to-transparent"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "TensorFlow Developer Certificate",
                                issuer: "Tensorflow",
                                date: "2023",
                                icon: <SiTensorflow size={24}/>,
                                url: "https://www.credential.net/c5377178-7d8a-47a1-94d9-73aef70ccc04#gs.7geeg7"
                            },
                            {
                                title: "Bangkit Academy 2023 Graduate with Distinction",
                                issuer: "Kemendikbud",
                                date: "2023",
                                icon: <Cpu size={24}/>,
                                url: "https://drive.google.com/file/d/1sd1l9EUR9LDLH7Wg7Pqd8VNqCnxjkCY4/view?usp=sharing"
                            },
                            {
                                title: "Finalist in the National Indonesia Robot Contest",
                                issuer: "Kemendikbud",
                                date: "2023",
                                icon: <Smartphone size={24}/>,
                                url: "https://drive.google.com/file/d/1zvXvUH5whyY52tSxJl0QRPcQQxWY73b4/view"
                            }
                        ].map((cert, i) => (
                            <div key={i}
                                 className="group relative p-6 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-yellow-500/30 transition-all">
                                <div
                                    className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 group-hover:text-yellow-500 transition-all">
                                    {cert.icon}
                                </div>

                                <div className="mb-4 text-yellow-500/80">
                                    <Award size={32}/>
                                </div>

                                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-yellow-500 transition-colors">
                                    {cert.title}
                                </h3>
                                <p className="text-slate-400 text-sm mb-4">{cert.issuer}</p>

                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-mono text-slate-500">{cert.date}</span>

                                    {/* GANTI BUTTON MENJADI TAG <a> */}
                                    <a
                                        href={cert.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
                                    >
                                        VIEW CREDENTIAL <ExternalLink size={12}/>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                {/* CERTIFICATES SECTION END */}

                {/* Footer */}
                <footer className="py-16 text-center border-t border-slate-900">
                    <p className="text-slate-500 text-xs tracking-[0.2em] uppercase mb-2">
                        Built with React & Tailwind CSS
                    </p>
                    <p className="text-slate-400 font-medium">© 2026 Arifful Fikri</p>
                </footer>
            </div>
        </div>
    );
};

export default Portfolio;