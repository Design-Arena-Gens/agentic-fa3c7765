import { llmModels } from "@/lib/data";
import { Paperclip, Send, UploadCloud } from "lucide-react";

const conversations = [
  {
    role: "assistant",
    text:
      "Loaded MRI brain axial slices. Highlighted mass effect with midline shift 4mm. Recommend neurosurgery stat review.",
    model: "RadiAnt Transformer"
  },
  {
    role: "user",
    text:
      "Summarize the EHR timeline for ICU-12 and suggest next steps for sepsis bundle adherence.",
    model: "MedGPT-Clinical"
  },
  {
    role: "assistant",
    text:
      "Patient met bundle items: cultures drawn, broad-spectrum antibiotics started, 30 mL/kg bolus complete. Recommend vasopressor titration to maintain MAP ≥65 and recheck lactate in 2h.",
    model: "MedGPT-Clinical"
  }
];

export function ChatPanel() {
  return (
    <section
      id="chat"
      className="glass-panel flex h-full flex-col"
    >
      <header className="flex flex-col gap-2 border-b border-white/5 px-6 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-soft-white">
            Multimodal clinical copilot
          </h2>
          <select className="rounded-full border border-white/10 bg-night-sky px-4 py-2 text-xs uppercase tracking-widest text-white/60">
            {llmModels.map((model) => (
              <option key={model}>{model}</option>
            ))}
          </select>
        </div>
        <p className="text-sm text-white/50">
          Secure workspace for imaging, documents, and unstructured notes. All
          responses cite the original source.
        </p>
      </header>
      <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-6 py-6">
        {conversations.map((message, idx) => (
          <div
            key={idx}
            className={`flex flex-col gap-2 rounded-3xl border border-white/10 px-5 py-4 ${
              message.role === "assistant" ? "bg-white/5" : "bg-night-sky/80"
            }`}
          >
            <div className="flex items-center justify-between text-xs uppercase tracking-widest text-white/40">
              <span>{message.role === "assistant" ? "Copilot" : "Clinician"}</span>
              <span>{message.model}</span>
            </div>
            <p className="text-sm leading-relaxed text-white/70">{message.text}</p>
          </div>
        ))}
      </div>
      <div className="border-t border-white/5 bg-night-sky/40 px-6 py-4">
        <div className="mb-3 flex gap-3">
          <button className="flex items-center gap-2 rounded-full border border-dashed border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/50 transition hover:border-white/40 hover:text-soft-white">
            <UploadCloud className="h-4 w-4" />
            Upload Study
          </button>
          <button className="flex items-center gap-2 rounded-full border border-dashed border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/50 transition hover:border-white/40 hover:text-soft-white">
            <Paperclip className="h-4 w-4" />
            Attach EHR
          </button>
        </div>
        <div className="flex items-center rounded-full border border-white/10 bg-white/5 px-4">
          <input
            className="flex-1 bg-transparent px-2 py-3 text-sm text-soft-white placeholder:text-white/40 focus:outline-none"
            placeholder="Ask the copilot to trend vitals, interpret imaging, or summarize the chart..."
          />
          <button className="rounded-full bg-aqua p-2 text-night-sky transition hover:bg-soft-white">
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
