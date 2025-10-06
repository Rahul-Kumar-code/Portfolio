import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { projectCategories, projects } from '../data/projects'

const cardVariants = {
	hidden: { opacity: 0, y: 24 },
	visible: { opacity: 1, y: 0 },
}

export function Projects() {
	const [activeCategory, setActiveCategory] = useState('All')

	const filtered = useMemo(() => {
		if (activeCategory === 'All') {
			return projects
		}

		return projects.filter((project) => project.category === activeCategory)
	}, [activeCategory])

	return (
		<motion.section
			id="projects"
			className="relative px-6 py-24 sm:px-10"
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.25 }}
			transition={{ duration: 0.6, ease: 'easeOut' }}
		>
			<div className="mx-auto flex max-w-6xl flex-col gap-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
					className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"
				>
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
											isActive ? 'text-white' : 'text-slate-400 hover:text-white'
										}`}
									>
										<span className="relative z-10">{category}</span>
										{isActive && (
											<motion.span
												layoutId="category-pill"
												className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-[#465def] to-accent"
												transition={{ type: 'spring', stiffness: 400, damping: 28 }}
											/>
										)}
									</button>
								)
							})}
						</div>
					</LayoutGroup>
				</motion.div>
				<AnimatePresence mode="wait">
					<motion.div
						key={activeCategory}
						initial="hidden"
						animate="visible"
						exit="hidden"
						variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
						transition={{ duration: 0.4 }}
						className="grid gap-6 md:grid-cols-2"
					>
						{filtered.map((project, index) => (
							<motion.article
								key={project.id}
								variants={cardVariants}
								initial="hidden"
								animate="visible"
								transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
								className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_40px_90px_-40px_rgba(94,210,255,0.6)]"
							>
								<span className="pointer-events-none absolute -inset-px z-0 rounded-3xl bg-gradient-to-r from-[#465def]/35 via-transparent to-accent/35 opacity-0 transition duration-500 group-hover:opacity-100" />
								<div className="relative z-10 space-y-4">
									<div className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-accent/80">
										<span>{project.category}</span>
										<span className="h-[1px] w-6 bg-accent/40" />
										<span className="text-slate-400">Case {index + 1}</span>
									</div>
									<h3 className="text-2xl font-semibold text-white">{project.title}</h3>
									<p className="text-sm text-slate-300">{project.description}</p>
									<div className="flex flex-wrap gap-2 pt-2">
										{project.tech.map((tech) => (
											<span
												key={tech}
												className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent transition duration-300 hover:border-[#465def]/60 hover:text-[#465def]"
											>
												{tech}
											</span>
										))}
									</div>
								</div>
								<div className="relative z-10 mt-8 flex flex-wrap gap-4">
									<motion.a
										href={project.link}
										target="_blank"
										rel="noreferrer"
										whileHover={{ x: 6, color: '#465def' }}
										whileTap={{ scale: 0.97 }}
										className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors"
									>
										View Repository
										<span aria-hidden>↗</span>
									</motion.a>
									{project.live && (
										<motion.a
											href={project.live}
											target="_blank"
											rel="noreferrer"
											whileHover={{ x: 6, color: '#465def' }}
											whileTap={{ scale: 0.97 }}
											className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors"
										>
											Live Preview
											<span aria-hidden>↗</span>
										</motion.a>
									)}
								</div>
								<div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 translate-y-full bg-gradient-to-t from-slate-900/40 via-transparent to-transparent transition-transform duration-500 group-hover:translate-y-0" />
							</motion.article>
						))}
					</motion.div>
				</AnimatePresence>
			</div>
		</motion.section>
	)
}
