import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { useState } from 'react'
import { projectCategories, projects } from '../data/projects'

const cardVariants = {
	hidden: { opacity: 0, y: 24 },
	visible: { opacity: 1, y: 0 },
}

export function Projects() {
	const [activeCategory, setActiveCategory] = useState('All')

	const filtered =
		activeCategory === 'All'
			? projects
			: projects.filter((project) => project.category === activeCategory)

	return (
		<section id="projects" className="relative px-6 py-24 sm:px-10">
			<div className="mx-auto flex max-w-6xl flex-col gap-10">
				<div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
					<div>
						<h2 className="section-title">Project Launchpad</h2>
						<p className="section-subtitle max-w-xl">
							Products spanning smart attendance systems, AI-led coaching, and booking experiences—each delivered with secure auth, performant APIs, and responsive UI craft.
						</p>
					</div>
					<LayoutGroup>
						<div className="flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/5 p-2 backdrop-blur-xl">
							{projectCategories.map((category) => {
								const isActive = category === activeCategory
								return (
									<button
										key={category}
										type="button"
										onClick={() => setActiveCategory(category)}
										className={`relative overflow-hidden rounded-full px-4 py-2 text-sm font-medium transition ${
											isActive
												? 'text-white'
												: 'text-slate-400 hover:text-white'
										}`}
									>
										<span className="relative z-10">{category}</span>
										{isActive && (
											<motion.span
												layoutId="pill"
												className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-[#465def]"
												transition={{ type: 'spring', stiffness: 400, damping: 26 }}
											/>
										)}
									</button>
								)
							})}
						</div>
					</LayoutGroup>
				</div>
				<AnimatePresence mode="wait">
					<motion.div
						key={activeCategory}
						initial="hidden"
						animate="visible"
						exit="hidden"
						variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
						className="grid gap-6 md:grid-cols-2"
					>
						{filtered.map((project, index) => (
							<motion.article
								key={project.id}
								variants={cardVariants}
								initial="hidden"
								animate="visible"
								transition={{ delay: index * 0.1, duration: 0.5 }}
								className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl transition-transform hover:-translate-y-2 hover:shadow-[0_40px_90px_-40px_rgba(94,210,255,0.6)]"
							>
								<div className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-accent/80">
									<span>{project.category}</span>
									<span className="h-[1px] w-6 bg-accent/40" />
									<span className="text-slate-400">Case {index + 1}</span>
								</div>
								<h3 className="mt-6 text-2xl font-semibold text-white">
									{project.title}
								</h3>
								<p className="mt-4 text-sm text-slate-300">
									{project.description}
								</p>
								<div className="mt-6 flex flex-wrap gap-2">
									{project.tech.map((tech) => (
										<span
											key={tech}
											className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
										>
											{tech}
										</span>
									))}
								</div>
								<motion.a
									href={project.link}
									target="_blank"
									rel="noreferrer"
									whileHover={{ x: 6 }}
									className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent"
								>
									View Repository
									<span aria-hidden>↗</span>
								</motion.a>
								<div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 translate-y-full bg-gradient-to-t from-slate-900/40 via-transparent to-transparent transition-transform duration-500 group-hover:translate-y-0" />
							</motion.article>
						))}
					</motion.div>
				</AnimatePresence>
			</div>
		</section>
	)
}
