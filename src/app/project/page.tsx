"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/legacy/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faLink } from "@fortawesome/free-solid-svg-icons";
import {FaGithub} from "react-icons/fa";
import CATEGORIES, { Project } from "../../constants";

const STATUS_STYLE: Record<string, { label: string; cls: string }> = {
  live: { label: "Live", cls: "bg-[rgba(76,223,138,0.1)] text-[#4cdf8a] border-[rgba(76,223,138,0.25)]" },
  wip: { label: "WIP", cls: "bg-[rgba(255,204,0,0.1)] text-[#ffcc00] border-[rgba(255,204,0,0.25)]" },
  archived: { label: "Archived", cls: "bg-[rgba(255,255,255,0.05)] text-white/40 border-white/10" },
};

function ProjectCard({ p }: { p: Project }) {
  const status = STATUS_STYLE[p.status];
  return (
    <div className="min-w-[192px] max-w-[192px] bg-[#111211] border border-[#2a2b2a] rounded-xl overflow-hidden flex flex-col flex-shrink-0">
      <div className="relative w-full h-[88px] bg-[#1e1f1e] border-b border-[#2a2b2a]">
        {p.image ? (
          <Image src={p.image} alt={p.title} layout="fill" objectFit="cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white/20 text-[11px]">
            No preview
          </div>
        )}
      </div>

      <div className="p-2.5 flex flex-col gap-1.5 flex-1">
        <p className="text-[12px] font-semibold text-white leading-tight">{p.title}</p>
        <p className="text-[10px] text-white/45 leading-relaxed flex-1">{p.description}</p>
        <div className="flex items-center gap-1.5 flex-wrap">
          {p.techStack.map((t) => (
            <span key={t.name} title={t.name} className="text-white/50 hover:text-white/90 transition-colors text-[16px]">
              {t.icon}
            </span>
          ))}
        </div>
      </div>

      <div className="px-2.5 py-2 border-t border-[#2a2b2a] flex items-center gap-1.5">
        <span className={`text-[9px] px-2 py-0.5 rounded-full border ${status.cls}`}>
          {status.label}
        </span>
        <span className={`text-[9px] px-2 py-0.5 rounded-full border ${p.isOpenSource ? "bg-[rgba(76,223,138,0.08)] text-[#4cdf8a] border-[rgba(76,223,138,0.2)]" : "bg-white/5 text-white/35 border-white/10"}`}>
          {p.isOpenSource ? "Open source" : "Private"}
        </span>
        <div className="ml-auto flex gap-2">
          {p.githubUrl && (
            <Link href={p.githubUrl} target="_blank" rel="noopener noreferrer"
              className="text-white/35 hover:text-[#ffcc00] transition-colors text-sm">
              <FaGithub  />
            </Link>
          )}
          {p.liveUrl && (
            <Link href={p.liveUrl} target="_blank" rel="noopener noreferrer"
              className="text-white/35 hover:text-[#ffcc00] transition-colors text-sm">
              <FontAwesomeIcon icon={faLink} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

function CategorySection({ cat, defaultOpen }: { cat: typeof CATEGORIES[0]; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const count = cat.projects.length;

  return (
    <div className="border border-[#2a2b2a] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center gap-3 px-4 py-3 bg-[#1a1b1a] hover:bg-[#1e1f1e] transition-colors text-left"
      >
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center text-[15px] flex-shrink-0"
          style={{ background: cat.accentBg, color: cat.accentColor }}
        >
          <i className={`ti ${cat.iconClass}`} aria-hidden="true" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[13px] font-semibold text-white">{cat.label}</p>
          <p className="text-[11px] text-white/40 mt-0.5">
            {count > 0 ? `${count} project${count > 1 ? "s" : ""}` : "No projects yet"}
          </p>
        </div>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`text-white/30 text-sm transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            {count > 0 ? (
              <div className="flex gap-2.5 px-4 py-3 overflow-x-auto scrollbar-thin scrollbar-track-[#151615] scrollbar-thumb-[#2a2b2a]">
                {cat.projects.map((p) => (
                  <ProjectCard key={p.id} p={p} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2 py-5 text-white/20 text-[12px] border-t border-[#2a2b2a]">
                <i className={`ti ${cat.iconClass}`} aria-hidden="true" style={{ fontSize: 22 }} />
                <span>{cat.label} projects coming soon</span>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function MyProjects() {
  return (
    <section className="text-white bg-[#151615] flex flex-col w-full items-center gap-4 pt-[90px] max-w-[460px] lg:mt-0 p-3 lg:p-6 pb-[100px] lg:w-[450px] h-full overflow-y-auto">
      <div className="w-full">
        <h1 className="text-xl font-bold border-l-[3px] border-[#ffcc00] pl-3">My Projects</h1>
        <p className="text-[12px] text-white/40 pl-4 mt-0.5">Grouped by discipline</p>
      </div>

      <div className="w-full flex flex-col gap-3">
        {CATEGORIES.map((cat, i) => (
          <CategorySection key={cat.id} cat={cat} defaultOpen={i === 0} />
        ))}
      </div>
    </section>
  );
}