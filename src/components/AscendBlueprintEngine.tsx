"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";

type BlueprintData = {
  businessName: string;
  websiteUrl: string;
  industry: string;
  location: string;
  currentStage: string;
  founderStory: string;
  customerLove: string;
  differentiator: string;
  communityRoots: string;
  weakPresence: string;
  neededContent: string;
  fasterUnderstanding: string;
  proof: string;
  repetitiveQuestions: string;
  quoteInformation: string;
  manualTasks: string;
  aiSupport: string;
  requestSystems: string;
  platformSystems: string;
  modernOrganization: string;
  priority: string;
  budget: string;
  timeline: string;
};

type ScanData = {
  businessName: string;
  websiteUrl: string;
  location: string;
  industry: string;
  googleBusinessProfile: string;
  socialLink: string;
  knownWeakness: string;
};

type Field = {
  name: keyof BlueprintData;
  label: string;
  type?: "input" | "textarea" | "select";
  placeholder?: string;
  options?: string[];
  required?: boolean;
};

const currentStageOptions = [
  "Just getting established",
  "Established but digitally outdated",
  "Busy but disorganized",
  "Ready to grow",
  "Ready for a full modernization build",
];

const priorityOptions = [
  "Better website",
  "Stronger brand story",
  "Quote / booking system",
  "AI intake or automation",
  "Customer portal or app-style experience",
  "Community / membership experience",
  "Full digital modernization",
];

const budgetOptions = [
  "Under $500",
  "$500-$1,500",
  "$1,500-$3,500",
  "$3,500-$7,500",
  "$7,500+",
  "Not sure yet",
];

const timelineOptions = [
  "As soon as possible",
  "30 days",
  "60-90 days",
  "This year",
  "Just exploring",
];

const initialData: BlueprintData = {
  businessName: "",
  websiteUrl: "",
  industry: "",
  location: "",
  currentStage: "",
  founderStory: "",
  customerLove: "",
  differentiator: "",
  communityRoots: "",
  weakPresence: "",
  neededContent: "",
  fasterUnderstanding: "",
  proof: "",
  repetitiveQuestions: "",
  quoteInformation: "",
  manualTasks: "",
  aiSupport: "",
  requestSystems: "",
  platformSystems: "",
  modernOrganization: "",
  priority: "",
  budget: "",
  timeline: "",
};

const initialScanData: ScanData = {
  businessName: "",
  websiteUrl: "",
  location: "",
  industry: "",
  googleBusinessProfile: "",
  socialLink: "",
  knownWeakness: "",
};

const websiteReviewItems = [
  "Homepage clarity",
  "Service page strength",
  "Mobile trust experience",
  "Calls-to-action",
  "Quote / booking friction",
  "About / founder story visibility",
  "Reviews and proof placement",
  "Gallery / before-after proof",
  "Local authority signals",
];

const reputationResearchItems = [
  "Public review themes",
  "Customer praise patterns",
  "Common complaints or friction",
  "Google Business Profile strength",
  "Directory consistency",
  "Social proof",
  "Competitor positioning",
];

const operatingScanLayers = [
  {
    title: "Origin",
    body: "Story, roots, founder identity, trust signals.",
  },
  {
    title: "Authority",
    body: "Website presence, service clarity, mobile conversion.",
  },
  {
    title: "Intelligence",
    body: "AI intake opportunities, repetitive customer questions, quote-prep needs.",
  },
  {
    title: "Infrastructure",
    body: "Booking, quote flow, dashboards, portals, community features.",
  },
];

const steps: {
  label: string;
  title: string;
  prompt: string;
  layer: string;
  fields: Field[];
}[] = [
  {
    label: "Business Basics",
    title: "Business Basics",
    prompt: "Set the foundation for the first Blueprint pass.",
    layer: "Signal",
    fields: [
      {
        name: "businessName",
        label: "Business name",
        placeholder: "Example: Gentry Auto Works",
        required: true,
      },
      {
        name: "websiteUrl",
        label: "Website URL",
        placeholder: "https://example.com",
      },
      {
        name: "industry",
        label: "Industry / business type",
        placeholder: "Restaurant, contractor, med spa, fitness studio...",
        required: true,
      },
      {
        name: "location",
        label: "City / state",
        placeholder: "Dallas, TX",
      },
      {
        name: "currentStage",
        label: "Current stage",
        type: "select",
        options: currentStageOptions,
        required: true,
      },
    ],
  },
  {
    label: "Origin",
    title: "Origin",
    prompt: "What makes this business worth supporting?",
    layer: "Origin",
    fields: [
      {
        name: "founderStory",
        label: "Founder story / how the business started",
        type: "textarea",
        placeholder: "What roots, standards, or turning points shaped it?",
      },
      {
        name: "customerLove",
        label: "What customers already love about the business",
        type: "textarea",
        placeholder: "Craft, speed, care, taste, dependability, local trust...",
      },
      {
        name: "differentiator",
        label: "What makes the business different",
        type: "textarea",
        placeholder: "The detail competitors miss or the promise customers remember.",
      },
      {
        name: "communityRoots",
        label: "Reputation or community roots",
        type: "textarea",
        placeholder: "Neighborhood presence, referrals, repeat customers, local proof.",
      },
    ],
  },
  {
    label: "Authority",
    title: "Authority",
    prompt: "How does the business currently show up online?",
    layer: "Authority",
    fields: [
      {
        name: "weakPresence",
        label: "What is weak about the current website or digital presence?",
        type: "textarea",
        placeholder: "Outdated design, unclear services, weak mobile flow, thin proof...",
      },
      {
        name: "neededContent",
        label: "What pages or content does the business need?",
        type: "textarea",
        placeholder: "Service pages, menus, galleries, project pages, FAQs, team story...",
      },
      {
        name: "fasterUnderstanding",
        label: "What should customers understand faster?",
        type: "textarea",
        placeholder: "Pricing factors, process, service area, what happens next...",
      },
      {
        name: "proof",
        label: "Does the business have reviews, project photos, before/after work, or proof?",
        type: "textarea",
        placeholder: "List the trust signals that already exist.",
      },
    ],
  },
  {
    label: "Intelligence",
    title: "Intelligence",
    prompt: "Where could smarter tools save time or improve the customer experience?",
    layer: "Intelligence",
    fields: [
      {
        name: "repetitiveQuestions",
        label: "What repetitive questions do customers ask?",
        type: "textarea",
        placeholder: "Hours, availability, service fit, pricing, prep, timelines...",
      },
      {
        name: "quoteInformation",
        label: "What information do you need before giving a quote?",
        type: "textarea",
        placeholder: "Photos, measurements, location, event size, budget, urgency...",
      },
      {
        name: "manualTasks",
        label: "What tasks feel scattered or manual?",
        type: "textarea",
        placeholder: "Follow-ups, intake, scheduling, notes, quote prep, content...",
      },
      {
        name: "aiSupport",
        label: "Would AI intake, customer education, quote prep, or content support help?",
        type: "textarea",
        placeholder: "Describe the places intelligence should assist the operation.",
      },
    ],
  },
  {
    label: "Infrastructure",
    title: "Infrastructure",
    prompt: "What systems would make the business easier to run and easier to buy from?",
    layer: "Infrastructure",
    fields: [
      {
        name: "requestSystems",
        label: "Do customers need quote requests, booking, service requests, catering inquiries, estimate forms, or emergency requests?",
        type: "textarea",
        placeholder: "Name the customer actions that should become structured flows.",
      },
      {
        name: "platformSystems",
        label: "Would a dashboard, customer portal, membership system, app-style experience, reminders, or community features help?",
        type: "textarea",
        placeholder: "Describe the operational layer that would make the business feel sharper.",
      },
      {
        name: "modernOrganization",
        label: "What would make the business feel more organized and modern?",
        type: "textarea",
        placeholder: "Better handoffs, clearer requests, self-serve info, customer history...",
      },
    ],
  },
  {
    label: "Priority",
    title: "Priority",
    prompt: "What needs to ascend first?",
    layer: "Scope",
    fields: [
      {
        name: "priority",
        label: "Primary priority",
        type: "select",
        options: priorityOptions,
        required: true,
      },
      {
        name: "budget",
        label: "Budget comfort",
        type: "select",
        options: budgetOptions,
        required: true,
      },
      {
        name: "timeline",
        label: "Timeline",
        type: "select",
        options: timelineOptions,
        required: true,
      },
    ],
  },
];

const flow = [
  {
    title: "Scan Setup",
    body: "Prepare the website, reputation, and business profile criteria.",
  },
  {
    title: "Blueprint Questions",
    body: "Map story, goals, services, bottlenecks, and operating needs.",
  },
  {
    title: "Blueprint Preview",
    body: "Organize the inputs into an initial modernization direction.",
  },
  {
    title: "Future AI Scan",
    body: "Connect deeper website review and reputation research later.",
  },
];

export function AscendBlueprintEngine() {
  const [activeStep, setActiveStep] = useState(0);
  const [data, setData] = useState<BlueprintData>(initialData);
  const [scanData, setScanData] = useState<ScanData>(initialScanData);
  const [scanPrepared, setScanPrepared] = useState(false);
  const [scanErrors, setScanErrors] = useState<Partial<Record<keyof ScanData, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof BlueprintData, boolean>>>({});

  const preview = useMemo(() => createBlueprintPreview(data), [data]);
  const progress = ((activeStep + 1) / steps.length) * 100;
  const step = steps[activeStep];

  function updateField(name: keyof BlueprintData, value: string) {
    setData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: false }));
  }

  function updateScanField(name: keyof ScanData, value: string) {
    setScanData((current) => ({ ...current, [name]: value }));
    setScanErrors((current) => ({ ...current, [name]: false }));
  }

  function prepareScanProfile() {
    const requiredFields: (keyof ScanData)[] = [
      "businessName",
      "websiteUrl",
      "location",
      "industry",
    ];
    const nextErrors: Partial<Record<keyof ScanData, boolean>> = {};

    requiredFields.forEach((field) => {
      if (!scanData[field].trim()) {
        nextErrors[field] = true;
      }
    });

    setScanErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setData((current) => ({
      ...current,
      businessName: scanData.businessName,
      websiteUrl: scanData.websiteUrl,
      location: scanData.location,
      industry: scanData.industry,
      weakPresence: current.weakPresence || scanData.knownWeakness,
    }));
    setScanPrepared(true);
  }

  function continueToWizard() {
    setActiveStep(0);
    setSubmitted(false);
    document
      .getElementById("blueprint-wizard")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function validateStep() {
    const nextErrors: Partial<Record<keyof BlueprintData, boolean>> = {};

    step.fields.forEach((field) => {
      if (field.required && !data[field.name].trim()) {
        nextErrors[field.name] = true;
      }
    });

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function goNext() {
    if (!validateStep()) {
      return;
    }

    if (activeStep === steps.length - 1) {
      setSubmitted(true);
      return;
    }

    setActiveStep((current) => current + 1);
  }

  function goPrevious() {
    setSubmitted(false);
    setActiveStep((current) => Math.max(0, current - 1));
  }

  return (
    <section
      id="blueprint"
      className="relative isolate overflow-hidden px-5 py-24 md:px-8 md:py-32"
    >
      <BlueprintBackground />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden border border-gold/24 bg-[linear-gradient(145deg,rgba(17,17,17,0.88),rgba(10,10,10,0.82)_54%,rgba(47,69,92,0.2))] px-5 py-10 shadow-[0_36px_150px_rgba(0,0,0,0.52),inset_0_1px_0_rgba(237,232,222,0.08)] backdrop-blur-md md:px-10 md:py-14"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(237,232,222,0.026)_1px,transparent_1px),linear-gradient(90deg,rgba(66,106,140,0.052)_1px,transparent_1px)] bg-[size:56px_56px] opacity-55" />
          <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-gold-bright to-transparent" />
          <div className="absolute -right-28 top-4 h-72 w-72 rounded-full bg-steel-bright/14 blur-3xl" />
          <div className="absolute -left-24 bottom-6 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
          <motion.div
            aria-hidden="true"
            animate={{ x: ["-18%", "58%", "-18%"], opacity: [0.15, 0.44, 0.15] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-steel-bright to-transparent"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <p className="bg-[linear-gradient(90deg,#8A641E,#C4912F,#F2D36A,#C4912F)] bg-clip-text text-xs font-semibold uppercase tracking-[0.32em] text-transparent drop-shadow-[0_0_18px_rgba(196,145,47,0.24)]">
                The Ascend Blueprint Engine
              </p>
              <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-ivory drop-shadow-[0_0_34px_rgba(66,106,140,0.14)] md:text-6xl">
                Not a Contact Form. A Business Discovery System.
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-8 text-[rgba(237,232,222,0.76)] md:text-lg">
                Before we build anything, we map the business behind the
                business. The Ascend Blueprint Engine guides owners through
                their story, website, goals, bottlenecks, and opportunities -
                then turns that information into a clear modernization path.
              </p>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-[rgba(237,232,222,0.62)] md:text-base">
                If a business already has a website, the first step is entering
                the URL. Future versions of the Blueprint Engine will scan the
                site, review public reputation signals, and research what
                already exists online. For now, this guided experience captures
                the foundation and creates a structured Blueprint Preview.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="#ascend-scan">Begin the Blueprint</Button>
                <Button href="#blueprint-flow" variant="secondary">
                  See How It Works
                </Button>
              </div>
            </div>

            <BlueprintMap />
          </div>
        </motion.div>

        <AscendScan
          scanData={scanData}
          scanPrepared={scanPrepared}
          scanErrors={scanErrors}
          onChange={updateScanField}
          onPrepare={prepareScanProfile}
          onContinue={continueToWizard}
        />

        <div
          id="blueprint-flow"
          className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5"
        >
          {flow.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="relative min-h-36 overflow-hidden border border-white/10 bg-carbon/62 p-5 shadow-[inset_0_1px_0_rgba(237,232,222,0.06)]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/65 to-transparent" />
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-steel-bright">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-serif text-2xl text-ivory">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[rgba(237,232,222,0.62)]">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>

        <div id="blueprint-wizard" className="mt-10 grid gap-6 xl:grid-cols-[1fr_0.9fr]">
          <div className="relative overflow-hidden border border-white/10 bg-[linear-gradient(145deg,rgba(17,17,17,0.92),rgba(10,10,10,0.82)_58%,rgba(47,69,92,0.18))] p-5 shadow-[0_30px_120px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(237,232,222,0.07)] md:p-7">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(66,106,140,0.044)_1px,transparent_1px),linear-gradient(90deg,rgba(237,232,222,0.018)_1px,transparent_1px)] bg-[size:42px_42px] opacity-60" />
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-steel-bright to-transparent" />
            <div className="relative">
              <div className="flex flex-col gap-5 border-b border-white/10 pb-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                    Begin Your Ascend Blueprint
                  </p>
                  <h3 className="mt-3 font-serif text-3xl leading-tight text-ivory md:text-4xl">
                    Answer a few strategic questions.
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[rgba(237,232,222,0.62)]">
                    The system will organize your answers into an initial
                    modernization map.
                  </p>
                </div>
                <div className="min-w-36 border border-gold/20 bg-obsidian/54 px-4 py-3 text-left md:text-right">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted">
                    Step
                  </p>
                  <p className="mt-1 font-serif text-3xl text-gold-bright">
                    {activeStep + 1}/{steps.length}
                  </p>
                </div>
              </div>

              <div className="mt-6 h-1 overflow-hidden bg-white/10">
                <motion.div
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-steel-bright via-gold to-gold-bright"
                />
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {steps.map((stepItem, index) => (
                  <button
                    key={stepItem.label}
                    type="button"
                    onClick={() => {
                      if (index <= activeStep || submitted) {
                        setActiveStep(index);
                        setSubmitted(false);
                      }
                    }}
                    className={`min-h-10 border px-3 text-[0.65rem] font-semibold uppercase tracking-[0.16em] transition-colors ${
                      index === activeStep
                        ? "border-gold/70 bg-gold/12 text-gold-bright"
                        : "border-white/10 bg-white/[0.03] text-muted"
                    }`}
                  >
                    {stepItem.layer}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="mt-8"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-steel-bright">
                    Step {activeStep + 1} - {step.label}
                  </p>
                  <h4 className="mt-3 font-serif text-4xl text-ivory">
                    {step.title}
                  </h4>
                  <p className="mt-3 text-base leading-7 text-[rgba(237,232,222,0.7)]">
                    {step.prompt}
                  </p>

                  <div className="mt-7 grid gap-4 md:grid-cols-2">
                    {step.fields.map((field) => (
                      <BlueprintField
                        key={field.name}
                        field={field}
                        value={data[field.name]}
                        hasError={Boolean(errors[field.name])}
                        onChange={updateField}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {Object.values(errors).some(Boolean) ? (
                <p className="mt-5 border border-gold/25 bg-gold/8 px-4 py-3 text-sm text-gold-bright">
                  Complete the highlighted fields before the Blueprint can move
                  forward.
                </p>
              ) : null}

              <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:justify-between">
                <motion.button
                  type="button"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={goPrevious}
                  disabled={activeStep === 0 && !submitted}
                  className="min-h-12 border border-white/10 bg-graphite/40 px-5 text-sm font-semibold uppercase tracking-[0.16em] text-ivory transition-colors hover:border-steel-bright hover:bg-steel/20 disabled:cursor-not-allowed disabled:opacity-35"
                >
                  Previous
                </motion.button>
                <motion.button
                  type="button"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={goNext}
                  className="min-h-12 border border-gold/70 bg-gold px-5 text-sm font-semibold uppercase tracking-[0.16em] text-obsidian shadow-[0_0_36px_rgba(196,145,47,0.18)] transition-colors hover:bg-gold-bright"
                >
                  {activeStep === steps.length - 1
                    ? "Generate Preview"
                    : "Next"}
                </motion.button>
              </div>
            </div>
          </div>

          <BlueprintPreview
            data={data}
            preview={preview}
            submitted={submitted}
          />
        </div>

        <FutureScanPanel />
      </div>
    </section>
  );
}

function AscendScan({
  scanData,
  scanPrepared,
  scanErrors,
  onChange,
  onPrepare,
  onContinue,
}: {
  scanData: ScanData;
  scanPrepared: boolean;
  scanErrors: Partial<Record<keyof ScanData, boolean>>;
  onChange: (name: keyof ScanData, value: string) => void;
  onPrepare: () => void;
  onContinue: () => void;
}) {
  return (
    <div
      id="ascend-scan"
      className="mt-8 grid scroll-mt-24 gap-6 xl:grid-cols-[0.95fr_1.05fr]"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden border border-gold/24 bg-[linear-gradient(145deg,rgba(10,10,10,0.9),rgba(17,17,17,0.86)_56%,rgba(47,69,92,0.24))] p-5 shadow-[0_30px_120px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(237,232,222,0.08)] md:p-7"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(237,232,222,0.024)_1px,transparent_1px),linear-gradient(90deg,rgba(66,106,140,0.052)_1px,transparent_1px)] bg-[size:44px_44px] opacity-70" />
        <div className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-gold-bright to-transparent" />
        <motion.div
          aria-hidden="true"
          animate={{ y: ["-20%", "120%"], opacity: [0, 0.55, 0] }}
          transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-0 top-0 h-24 w-full bg-gradient-to-b from-transparent via-steel-bright/18 to-transparent"
        />
        <motion.div
          aria-hidden="true"
          animate={{ opacity: [0.18, 0.42, 0.18], scale: [0.96, 1.04, 0.96] }}
          transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-16 top-10 h-64 w-64 rounded-full bg-steel-bright/16 blur-3xl"
        />

        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Ascend Scan
          </p>
          <h3 className="mt-3 font-serif text-4xl leading-tight text-ivory md:text-5xl">
            Run an Ascend Scan
          </h3>
          <p className="mt-4 text-sm leading-7 text-[rgba(237,232,222,0.68)] md:text-base md:leading-8">
            Enter your current website and business details. Future versions of
            the Blueprint Engine will review your digital presence, reputation
            signals, trust gaps, and customer friction points before creating a
            deeper modernization plan.
          </p>
          <p className="mt-4 border-l border-steel-bright/40 pl-4 text-sm leading-7 text-steel-bright">
            For now, this prepares the business profile and scan criteria that
            will power the full AI-assisted Blueprint.
          </p>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <ScanField
              label="Business name"
              value={scanData.businessName}
              hasError={Boolean(scanErrors.businessName)}
              onChange={(value) => onChange("businessName", value)}
              placeholder="Example: Gentry Auto Works"
              required
            />
            <ScanField
              label="Website URL"
              value={scanData.websiteUrl}
              hasError={Boolean(scanErrors.websiteUrl)}
              onChange={(value) => onChange("websiteUrl", value)}
              placeholder="https://example.com"
              required
            />
            <ScanField
              label="City / State"
              value={scanData.location}
              hasError={Boolean(scanErrors.location)}
              onChange={(value) => onChange("location", value)}
              placeholder="Dallas, TX"
              required
            />
            <ScanField
              label="Industry"
              value={scanData.industry}
              hasError={Boolean(scanErrors.industry)}
              onChange={(value) => onChange("industry", value)}
              placeholder="Restaurant, contractor, med spa..."
              required
            />
            <ScanField
              label="Google Business Profile link"
              value={scanData.googleBusinessProfile}
              hasError={false}
              onChange={(value) => onChange("googleBusinessProfile", value)}
              placeholder="Optional"
            />
            <ScanField
              label="Facebook / Instagram / social link"
              value={scanData.socialLink}
              hasError={false}
              onChange={(value) => onChange("socialLink", value)}
              placeholder="Optional"
            />
            <ScanField
              label="Notes about what they already know is weak"
              value={scanData.knownWeakness}
              hasError={false}
              onChange={(value) => onChange("knownWeakness", value)}
              placeholder="What feels outdated, confusing, slow, scattered, or underbuilt?"
              multiline
            />
          </div>

          {Object.values(scanErrors).some(Boolean) ? (
            <p className="mt-5 border border-gold/25 bg-gold/8 px-4 py-3 text-sm text-gold-bright">
              Add the core business profile details before preparing the scan
              profile.
            </p>
          ) : null}

          <div className="mt-7 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
            <motion.button
              type="button"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onPrepare}
              className="min-h-12 border border-gold/70 bg-gold px-5 text-sm font-semibold uppercase tracking-[0.16em] text-obsidian shadow-[0_0_36px_rgba(196,145,47,0.18)] transition-colors hover:bg-gold-bright"
            >
              Prepare Scan Profile
            </motion.button>
            <p className="text-xs font-semibold uppercase leading-6 tracking-[0.16em] text-muted">
              No automated scan is performed yet. This creates the profile that
              future AI research will evaluate.
            </p>
          </div>
        </div>
      </motion.div>

      <ScanReadinessPreview
        scanData={scanData}
        scanPrepared={scanPrepared}
        onContinue={onContinue}
      />
    </div>
  );
}

function ScanField({
  label,
  value,
  placeholder,
  hasError,
  required = false,
  multiline = false,
  onChange,
}: {
  label: string;
  value: string;
  placeholder: string;
  hasError: boolean;
  required?: boolean;
  multiline?: boolean;
  onChange: (value: string) => void;
}) {
  const classes = `w-full rounded-lg border bg-obsidian/58 px-4 py-4 text-base leading-7 text-ivory outline-none transition-colors placeholder:text-muted/68 focus:border-gold/70 focus:bg-carbon/82 focus:shadow-[0_0_0_1px_rgba(196,145,47,0.22),0_0_30px_rgba(66,106,140,0.16)] ${
    hasError ? "border-gold-bright/80" : "border-white/10"
  }`;

  return (
    <label className={`block ${multiline ? "md:col-span-2" : ""}`}>
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[rgba(237,232,222,0.72)]">
        {label}
        {required ? <span className="text-gold-bright"> *</span> : null}
      </span>
      {multiline ? (
        <textarea
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          rows={4}
          className={`${classes} min-h-32 resize-y`}
        />
      ) : (
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className={classes}
        />
      )}
    </label>
  );
}

function ScanReadinessPreview({
  scanData,
  scanPrepared,
  onContinue,
}: {
  scanData: ScanData;
  scanPrepared: boolean;
  onContinue: () => void;
}) {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden border border-steel-bright/24 bg-[linear-gradient(145deg,rgba(10,10,10,0.92),rgba(17,17,17,0.88)_54%,rgba(47,69,92,0.24))] p-5 shadow-[0_30px_120px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(237,232,222,0.08)] md:p-7"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(66,106,140,0.24),transparent_34%),linear-gradient(rgba(237,232,222,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(66,106,140,0.044)_1px,transparent_1px)] bg-[size:auto,40px_40px,40px_40px]" />
      <div className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-steel-bright to-transparent" />
      <div className="relative">
        <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-steel-bright">
              Scan Readiness Preview
            </p>
            <h3 className="mt-3 font-serif text-3xl leading-tight text-ivory md:text-4xl">
              {scanPrepared
                ? "Scan Profile Prepared"
                : "Scan profile awaiting details."}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[rgba(237,232,222,0.66)]">
              {scanPrepared
                ? "Your business profile is ready for the next stage of the Blueprint Engine."
                : "Complete the Ascend Scan profile to see the criteria future AI research will evaluate."}
            </p>
          </div>
          <span className="w-fit border border-gold/25 bg-gold/10 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-gold-bright">
            Profile Setup
          </span>
        </div>

        <AnimatePresence mode="wait">
          {scanPrepared ? (
            <motion.div
              key="prepared"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.32, ease: "easeOut" }}
              className="mt-6 space-y-5"
            >
              <div className="border border-white/10 bg-obsidian/45 p-4">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-steel-bright">
                  Business Profile
                </p>
                <div className="mt-4 grid gap-3 text-sm leading-6 text-[rgba(237,232,222,0.72)] sm:grid-cols-2">
                  <ProfileLine label="Business" value={scanData.businessName} />
                  <ProfileLine label="Website" value={scanData.websiteUrl} />
                  <ProfileLine label="Industry" value={scanData.industry} />
                  <ProfileLine label="City / State" value={scanData.location} />
                </div>
              </div>

              <ReadinessChecklist
                title="Future Website Review"
                items={websiteReviewItems}
              />
              <ReadinessChecklist
                title="Future Reputation Research"
                items={reputationResearchItems}
              />

              <div className="border border-white/10 bg-obsidian/45 p-4">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-steel-bright">
                  Operating System Mapping
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {operatingScanLayers.map((layer, index) => (
                    <motion.div
                      key={layer.title}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.32, delay: index * 0.04 }}
                      className="border border-gold/18 bg-gold/8 p-4"
                    >
                      <h4 className="font-serif text-2xl text-ivory">
                        {layer.title}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-[rgba(237,232,222,0.66)]">
                        {layer.body}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="border border-gold/24 bg-[linear-gradient(135deg,rgba(196,145,47,0.12),rgba(66,106,140,0.1))] p-5">
                <h4 className="font-serif text-2xl text-ivory">Next Step</h4>
                <p className="mt-3 text-sm leading-7 text-[rgba(237,232,222,0.68)]">
                  Scan criteria mapped. Continue into the Blueprint questions
                  to add the story, authority gaps, intelligence needs, and
                  infrastructure priorities behind the business.
                </p>
                <motion.button
                  type="button"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onContinue}
                  className="mt-5 min-h-12 w-full border border-gold/70 bg-gold px-5 text-sm font-semibold uppercase tracking-[0.16em] text-obsidian shadow-[0_0_36px_rgba(196,145,47,0.18)] transition-colors hover:bg-gold-bright"
                >
                  Continue to Blueprint Questions
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.32, ease: "easeOut" }}
              className="mt-6 border border-white/10 bg-obsidian/45 p-5"
            >
              <p className="text-sm leading-7 text-[rgba(237,232,222,0.68)]">
                The readiness preview will not produce scores or findings. It
                will show the profile and evaluation map prepared for a future
                website and reputation intelligence pass.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.aside>
  );
}

function ProfileLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-white/10 bg-white/[0.03] p-3">
      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-muted">
        {label}
      </p>
      <p className="mt-1 break-words text-ivory">{value}</p>
    </div>
  );
}

function ReadinessChecklist({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="border border-white/10 bg-obsidian/45 p-4">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-steel-bright">
        {title}
      </p>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {items.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.28, delay: index * 0.035 }}
            className="flex items-start gap-3 border border-white/10 bg-white/[0.03] px-3 py-3"
          >
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-bright shadow-[0_0_16px_rgba(224,184,74,0.35)]" />
            <span className="text-sm leading-6 text-[rgba(237,232,222,0.72)]">
              {item}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function BlueprintField({
  field,
  value,
  hasError,
  onChange,
}: {
  field: Field;
  value: string;
  hasError: boolean;
  onChange: (name: keyof BlueprintData, value: string) => void;
}) {
  const baseClasses = `w-full rounded-lg border bg-obsidian/54 px-4 py-4 text-base leading-7 text-ivory outline-none transition-colors placeholder:text-muted/68 focus:border-gold/70 focus:bg-carbon/80 focus:shadow-[0_0_0_1px_rgba(196,145,47,0.22),0_0_28px_rgba(196,145,47,0.08)] ${
    hasError ? "border-gold-bright/80" : "border-white/10"
  }`;

  return (
    <label
      className={`block ${
        field.type === "textarea" ? "md:col-span-2" : ""
      }`}
    >
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[rgba(237,232,222,0.72)]">
        {field.label}
        {field.required ? <span className="text-gold-bright"> *</span> : null}
      </span>
      {field.type === "textarea" ? (
        <textarea
          value={value}
          onChange={(event) => onChange(field.name, event.target.value)}
          placeholder={field.placeholder}
          rows={4}
          className={`${baseClasses} min-h-32 resize-y`}
        />
      ) : field.type === "select" ? (
        <select
          value={value}
          onChange={(event) => onChange(field.name, event.target.value)}
          className={baseClasses}
        >
          <option value="">Select one</option>
          {field.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          value={value}
          onChange={(event) => onChange(field.name, event.target.value)}
          placeholder={field.placeholder}
          className={baseClasses}
        />
      )}
    </label>
  );
}

function BlueprintPreview({
  data,
  preview,
  submitted,
}: {
  data: BlueprintData;
  preview: ReturnType<typeof createBlueprintPreview>;
  submitted: boolean;
}) {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden border border-gold/20 bg-[linear-gradient(145deg,rgba(10,10,10,0.92),rgba(17,17,17,0.88)_55%,rgba(47,69,92,0.2))] p-5 shadow-[0_30px_120px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(237,232,222,0.08)] md:p-7"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_8%,rgba(66,106,140,0.22),transparent_32%),linear-gradient(rgba(237,232,222,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(66,106,140,0.04)_1px,transparent_1px)] bg-[size:auto,38px_38px,38px_38px]" />
      <div className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-gold-bright to-transparent" />
      <div className="relative">
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              Initial Blueprint Preview
            </p>
            <h3 className="mt-3 font-serif text-3xl leading-tight text-ivory md:text-4xl">
              {submitted ? preview.title : "Preview will form as you answer."}
            </h3>
          </div>
          <div className="border border-steel-bright/25 bg-steel/12 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-steel-bright">
            Local Logic
          </div>
        </div>

        <p className="mt-5 text-sm leading-7 text-[rgba(237,232,222,0.66)]">
          This first version organizes the details you provide. It has not
          scanned a website, reviewed public reputation signals, or researched
          external sources.
        </p>

        <div className="mt-6 space-y-4">
          <PreviewBlock title="Current Business Signal">
            {preview.signal}
          </PreviewBlock>
          <PreviewBlock title="Likely Modernization Opportunity">
            {preview.opportunity}
          </PreviewBlock>
          <PreviewBlock title="Recommended First Build">
            {preview.build}
          </PreviewBlock>
          <div className="border border-white/10 bg-obsidian/45 p-4">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-steel-bright">
              Suggested Operating Layers
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {preview.layers.map((layer) => (
                <span
                  key={layer}
                  className="border border-gold/25 bg-gold/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-gold-bright"
                >
                  {layer}
                </span>
              ))}
            </div>
          </div>
          <PreviewBlock title="Estimated Investment Range">
            {preview.investment}
          </PreviewBlock>
        </div>

        <div className="mt-6 border border-gold/24 bg-[linear-gradient(135deg,rgba(196,145,47,0.12),rgba(66,106,140,0.1))] p-5">
          <h4 className="font-serif text-2xl text-ivory">Next Step</h4>
          <p className="mt-3 text-sm leading-7 text-[rgba(237,232,222,0.68)]">
            A real proposal comes after review. The Blueprint Preview gives us
            a sharper starting point.
          </p>
          <Button href="#apply" className="mt-5 w-full">
            Request a Build Review
          </Button>
        </div>

        {!submitted && (
          <p className="mt-5 text-xs font-semibold uppercase leading-6 tracking-[0.16em] text-muted">
            Complete the priority step to generate the first structured preview
            for {data.businessName || "the business"}.
          </p>
        )}
      </div>
    </motion.aside>
  );
}

function PreviewBlock({
  title,
  children,
}: {
  title: string;
  children: string;
}) {
  return (
    <div className="border border-white/10 bg-obsidian/45 p-4">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-steel-bright">
        {title}
      </p>
      <p className="mt-3 text-sm leading-7 text-[rgba(237,232,222,0.72)]">
        {children}
      </p>
    </div>
  );
}

function BlueprintMap() {
  const nodes = ["Origin", "Authority", "Intelligence", "Infrastructure"];

  return (
    <div className="relative min-h-[420px] overflow-hidden border border-white/10 bg-obsidian/52 p-5 shadow-[inset_0_1px_0_rgba(237,232,222,0.06)]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(66,106,140,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(237,232,222,0.028)_1px,transparent_1px)] bg-[size:34px_34px]" />
      <motion.div
        animate={{ opacity: [0.25, 0.55, 0.25], scale: [0.96, 1.04, 0.96] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-12 rounded-full bg-[radial-gradient(circle,rgba(66,106,140,0.28),rgba(196,145,47,0.12)_46%,transparent_70%)] blur-2xl"
      />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 520 420"
        aria-hidden="true"
      >
        <motion.path
          d="M72 210 C150 80, 370 80, 448 210 C370 340, 150 340, 72 210Z"
          fill="none"
          stroke="#426A8C"
          strokeWidth="1"
          strokeDasharray="8 12"
          animate={{ pathLength: [0.25, 1, 0.25], opacity: [0.35, 0.9, 0.35] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M260 54 L448 210 L260 366 L72 210 Z"
          fill="none"
          stroke="#C4912F"
          strokeWidth="1"
          animate={{ opacity: [0.22, 0.62, 0.22] }}
          transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <path d="M260 54 V366 M72 210 H448" stroke="#EDE8DE" strokeOpacity="0.08" />
      </svg>
      <div className="relative flex min-h-[380px] items-center justify-center">
        <div className="grid w-full max-w-md grid-cols-2 gap-4">
          {nodes.map((node, index) => (
            <motion.div
              key={node}
              animate={{ y: index % 2 === 0 ? [0, -6, 0] : [0, 6, 0] }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.25,
              }}
              className="border border-gold/20 bg-carbon/82 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(237,232,222,0.07)]"
            >
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-muted">
                Layer {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 font-serif text-2xl text-ivory">{node}</p>
            </motion.div>
          ))}
        </div>
        <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/35 bg-obsidian/82 text-center shadow-[0_0_54px_rgba(196,145,47,0.16)]">
          <span className="text-[0.62rem] font-semibold uppercase leading-5 tracking-[0.18em] text-gold-bright">
            Blueprint
            <br />
            Engine
          </span>
        </div>
      </div>
    </div>
  );
}

function FutureScanPanel() {
  const futureStages = [
    "Ascend Scan profile setup",
    "Blueprint questions",
    "Blueprint Preview",
    "Future AI-powered scan / reputation research",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="relative mt-8 overflow-hidden border border-steel-bright/24 bg-[linear-gradient(135deg,rgba(47,69,92,0.22),rgba(10,10,10,0.86)_52%,rgba(196,145,47,0.1))] p-6 shadow-[0_28px_110px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(237,232,222,0.07)] md:p-8"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(237,232,222,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(66,106,140,0.052)_1px,transparent_1px)] bg-[size:46px_46px]" />
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-steel-bright to-transparent" />
      <div className="relative grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-steel-bright">
            Future Intelligence Layer
          </p>
          <h3 className="mt-3 font-serif text-3xl text-ivory md:text-4xl">
            AI-Powered Scan and Reputation Research
          </h3>
        </div>
        <div>
          <p className="text-sm leading-7 text-[rgba(237,232,222,0.68)] md:text-base md:leading-8">
            The Ascend Scan now prepares the business profile and evaluation
            map. Future versions will connect live website review and public
            reputation research so the Blueprint can move from prepared
            criteria into deeper evidence-backed recommendations.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {futureStages.map((stage, index) => (
              <div
                key={stage}
                className="border border-white/10 bg-obsidian/42 p-4"
              >
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-gold-bright">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-sm leading-6 text-[rgba(237,232,222,0.72)]">
                  {stage}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function BlueprintBackground() {
  return (
    <>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(196,145,47,0.12),transparent_30%),radial-gradient(circle_at_82%_28%,rgba(66,106,140,0.28),transparent_34%),linear-gradient(180deg,#0A0A0A_0%,#111111_45%,#0A0A0A_100%)]" />
      <motion.div
        aria-hidden="true"
        animate={{
          opacity: [0.15, 0.34, 0.15],
          backgroundPosition: ["0px 0px", "36px -42px", "0px 0px"],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(66,106,140,0.065)_1px,transparent_1px),linear-gradient(90deg,rgba(237,232,222,0.022)_1px,transparent_1px)] bg-[size:94px_94px]"
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-obsidian to-transparent" />
    </>
  );
}

function createBlueprintPreview(data: BlueprintData) {
  const buildByPriority: Record<string, string> = {
    "Better website": "Authority Presence Build",
    "Stronger brand story": "Origin + Authority Build",
    "Quote / booking system": "Infrastructure Flow Build",
    "AI intake or automation": "Intelligence Intake Build",
    "Customer portal or app-style experience": "Infrastructure + Community Build",
    "Community / membership experience": "Community Experience Build",
    "Full digital modernization": "Full Ascend System Build",
  };

  const opportunityByPriority: Record<string, string> = {
    "Better website": "Authority Presence Build",
    "Stronger brand story": "Origin + Authority Build",
    "Quote / booking system": "Infrastructure Build",
    "AI intake or automation": "Intelligence Build",
    "Customer portal or app-style experience": "Infrastructure + Community Build",
    "Community / membership experience": "Infrastructure + Community Build",
    "Full digital modernization": "Full Ascend Operating System Build",
  };

  const layersByPriority: Record<string, string[]> = {
    "Better website": ["Authority", "Origin"],
    "Stronger brand story": ["Origin", "Authority"],
    "Quote / booking system": ["Infrastructure", "Authority"],
    "AI intake or automation": ["Intelligence", "Infrastructure"],
    "Customer portal or app-style experience": ["Infrastructure", "Intelligence"],
    "Community / membership experience": ["Infrastructure", "Authority"],
    "Full digital modernization": [
      "Origin",
      "Authority",
      "Intelligence",
      "Infrastructure",
    ],
  };

  const investmentByBudget: Record<string, string> = {
    "Under $500": "Starter advisory / limited scope only",
    "$500-$1,500": "Focused foundation build or audit-led starting point",
    "$1,500-$3,500":
      "Strong first build range for website, intake, or focused infrastructure",
    "$3,500-$7,500": "Modernization build range with deeper system work",
    "$7,500+": "Full digital ecosystem / advanced build range",
    "Not sure yet": "Requires Build Review",
  };

  const business = data.businessName.trim() || "This business";
  const industry = data.industry.trim() || "its market";
  const stage = data.currentStage || "an unmapped current stage";
  const website = data.websiteUrl.trim()
    ? ` Current website signal entered: ${data.websiteUrl.trim()}.`
    : " No website URL has been entered yet.";
  const priority = data.priority || "Full digital modernization";

  return {
    title: `${business} Modernization Map`,
    signal: `${business} appears to be in ${stage.toLowerCase()} within ${industry}.${website}`,
    opportunity:
      opportunityByPriority[priority] ||
      "Full Ascend Operating System Build",
    build: buildByPriority[priority] || "Full Ascend System Build",
    layers: layersByPriority[priority] || [
      "Origin",
      "Authority",
      "Intelligence",
      "Infrastructure",
    ],
    investment: investmentByBudget[data.budget] || "Requires Build Review",
  };
}
