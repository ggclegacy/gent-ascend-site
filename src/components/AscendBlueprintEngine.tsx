"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";

type BlueprintData = {
  businessName: string;
  ownerName: string;
  industry: string;
  location: string;
  businessDescription: string;
  founderStory: string;
  bestCustomers: string;
  customerPraise: string;
  misunderstood: string;
  competitorDifference: string;
  mainOffers: string;
  mostProfitableOffers: string;
  growthOffers: string;
  marginDrains: string;
  pricingClarity: string;
  recurringOpportunities: string;
  customerSources: string;
  postContactProcess: string;
  leadResponseSpeed: string;
  lostLeads: string;
  repeatedQuestions: string;
  customerConfusion: string;
  followUpAfterService: string;
  reviewAutomation: string;
  smootherExperience: string;
  websiteUrl: string;
  googleBusinessProfile: string;
  instagramLink: string;
  facebookLink: string;
  videoSocialLink: string;
  currentWebsiteOpinion: string;
  outdatedPresence: string;
  admiredBusinesses: string;
  professionalPhotos: string;
  testimonialsToHighlight: string;
  visualProof: string;
  brandAssets: string;
  currentTools: string;
  manualOperations: string;
  repeatedTasks: string;
  scatteredInformation: string;
  accountingTools: string;
  internalTaskSystems: string;
  automationWishlist: string;
  repeatedCustomerQuestions: string;
  weeklyTimeDrains: string;
  repeatedDecisions: string;
  helpfulReports: string;
  aiAssistantHelp: string;
  chaoticArea: string;
  topPriorities: string;
  impactFirstBuild: string;
};

type ScanData = {
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  websiteUrl: string;
  googleBusinessProfile: string;
  location: string;
  industry: string;
  instagramLink: string;
  facebookLink: string;
  otherSocialLink: string;
  biggestPresenceIssue: string;
  currentWant: string;
  helpInterest: string;
};

type Field = {
  name: keyof BlueprintData;
  label: string;
  type?: "input" | "textarea" | "select" | "multiselect";
  placeholder?: string;
  options?: string[];
  maxChoices?: number;
  required?: boolean;
};

type BlueprintPath = "blueprint" | "scan";

type BusinessClassification = {
  title: string;
  description: string;
};

const businessClassifications: Record<string, BusinessClassification> = {
  hiddenAuthority: {
    title: "Hidden Authority Business",
    description:
      "You have real value, experience, or customer trust, but your digital presence may not fully prove it yet.",
  },
  frictionHeavy: {
    title: "Friction-Heavy Business",
    description:
      "Your business has demand, but parts of the customer journey may be creating unnecessary delays, confusion, or missed opportunities.",
  },
  underLeveragedReputation: {
    title: "Under-Leveraged Reputation Business",
    description:
      "You may already have proof of quality, but that proof needs to become a stronger trust-building asset.",
  },
  communityReady: {
    title: "Community-Ready Business",
    description:
      "Your business has the potential to turn customers into repeat buyers, advocates, members, and long-term supporters.",
  },
  systemsGap: {
    title: "Systems Gap Business",
    description:
      "The business can run smoother with better systems, automation, and digital infrastructure.",
  },
};

const ascendPriorityOptions = [
  "More leads",
  "Better website",
  "Better customer experience",
  "Better reviews",
  "Better follow-up",
  "Better internal systems",
  "More premium brand perception",
  "Less manual work",
  "More recurring revenue",
  "Better hiring/training",
  "Stronger community",
  "Customer app or portal",
];

const scanWantOptions = [
  "More leads",
  "More calls",
  "More bookings",
  "More quote requests",
  "More reviews",
  "Better website",
  "Better Google presence",
  "Better customer follow-up",
  "Less manual work",
  "More repeat customers",
  "More community engagement",
];

const scanHelpOptions = [
  "Website rebuild",
  "Website improvements",
  "AI tools",
  "Booking/quote system",
  "Customer follow-up",
  "Review automation",
  "Customer portal/app",
  "Full modernization plan",
  "Not sure yet",
];

const initialData: BlueprintData = {
  businessName: "",
  ownerName: "",
  industry: "",
  location: "",
  businessDescription: "",
  founderStory: "",
  bestCustomers: "",
  customerPraise: "",
  misunderstood: "",
  competitorDifference: "",
  mainOffers: "",
  mostProfitableOffers: "",
  growthOffers: "",
  marginDrains: "",
  pricingClarity: "",
  recurringOpportunities: "",
  customerSources: "",
  postContactProcess: "",
  leadResponseSpeed: "",
  lostLeads: "",
  repeatedQuestions: "",
  customerConfusion: "",
  followUpAfterService: "",
  reviewAutomation: "",
  smootherExperience: "",
  websiteUrl: "",
  googleBusinessProfile: "",
  instagramLink: "",
  facebookLink: "",
  videoSocialLink: "",
  currentWebsiteOpinion: "",
  outdatedPresence: "",
  admiredBusinesses: "",
  professionalPhotos: "",
  testimonialsToHighlight: "",
  visualProof: "",
  brandAssets: "",
  currentTools: "",
  manualOperations: "",
  repeatedTasks: "",
  scatteredInformation: "",
  accountingTools: "",
  internalTaskSystems: "",
  automationWishlist: "",
  repeatedCustomerQuestions: "",
  weeklyTimeDrains: "",
  repeatedDecisions: "",
  helpfulReports: "",
  aiAssistantHelp: "",
  chaoticArea: "",
  topPriorities: "",
  impactFirstBuild: "",
};

const initialScanData: ScanData = {
  businessName: "",
  contactName: "",
  email: "",
  phone: "",
  websiteUrl: "",
  googleBusinessProfile: "",
  location: "",
  industry: "",
  instagramLink: "",
  facebookLink: "",
  otherSocialLink: "",
  biggestPresenceIssue: "",
  currentWant: "",
  helpInterest: "",
};

const engineLayers = [
  {
    title: "Origin",
    signal: "Identity",
    body: "Story, positioning, company identity, offer clarity, founder background, and the reason customers should care.",
    explanation:
      "Story, positioning, offer clarity, and the foundation behind why customers should trust the business.",
    markers: ["Founder story", "Offer clarity", "Positioning", "Local roots"],
  },
  {
    title: "Authority",
    signal: "Trust",
    body: "Website, Google Business Profile, reviews, testimonials, project photos, proof, and public reputation signals.",
    explanation:
      "Website, reviews, proof, Google presence, visuals, testimonials, and the signals that build confidence before a customer calls.",
    markers: ["Website", "GBP", "Reviews", "Proof"],
  },
  {
    title: "Intelligence",
    signal: "Friction",
    body: "Customer behavior, bottlenecks, repeated questions, lost leads, missed revenue, and customer journey gaps.",
    explanation:
      "Customer behavior, bottlenecks, repeated questions, lost leads, missed revenue, and the friction slowing growth.",
    markers: ["Lead gaps", "Questions", "Bottlenecks", "Revenue leaks"],
  },
  {
    title: "Infrastructure",
    signal: "Systems",
    body: "CRM, booking, estimates, follow-ups, automations, AI tools, operations, and internal workflows.",
    explanation:
      "Systems, automations, AI tools, booking, estimates, follow-ups, CRM, and workflows that help the company run smoother.",
    markers: ["CRM", "Booking", "Follow-ups", "AI tools"],
  },
];

const steps: {
  label: string;
  title: string;
  prompt: string;
  purpose: string;
  layer: string;
  fields: Field[];
}[] = [
  {
    label: "Origin",
    title: "Chamber 01 - Origin",
    prompt: "The first chamber establishes the story, positioning, and trust foundation behind the business.",
    purpose: "Understand the business story and positioning.",
    layer: "Origin",
    fields: [
      {
        name: "businessName",
        label: "Business name",
        placeholder: "Example: Gentry Auto Works",
        required: true,
      },
      {
        name: "ownerName",
        label: "Owner / founder name",
        placeholder: "Who leads the business?",
      },
      {
        name: "location",
        label: "City / state",
        placeholder: "Dallas, TX",
        required: true,
      },
      {
        name: "industry",
        label: "Industry",
        placeholder: "Restaurant, contractor, med spa, fitness studio...",
        required: true,
      },
      {
        name: "businessDescription",
        label: "What does your business do?",
        type: "textarea",
        placeholder: "Describe the core work in plain language.",
        required: true,
      },
      {
        name: "founderStory",
        label: "Why did you start or take over this business?",
        type: "textarea",
        placeholder: "What pushed you into it, and what still matters about it?",
      },
      {
        name: "bestCustomers",
        label: "Who do you serve best?",
        type: "textarea",
        placeholder: "Describe the customers, jobs, needs, or situations you are best built for.",
      },
      {
        name: "customerPraise",
        label: "What are customers usually praising you for?",
        type: "textarea",
        placeholder: "Speed, quality, taste, detail, care, reliability, honesty...",
      },
      {
        name: "misunderstood",
        label: "What do you wish more people understood about your business?",
        type: "textarea",
        placeholder: "The hidden value, process, standards, or complexity customers miss.",
      },
      {
        name: "competitorDifference",
        label: "What separates you from cheaper or more generic competitors?",
        type: "textarea",
        placeholder: "Explain the premium difference, not just the feature list.",
      },
    ],
  },
  {
    label: "Offer",
    title: "Chamber 02 - Offer",
    prompt: "This chamber maps what the business sells and where stronger revenue can be created.",
    purpose: "Understand what the business sells and where revenue opportunities exist.",
    layer: "Offer",
    fields: [
      {
        name: "mainOffers",
        label: "What are your main services or products?",
        type: "textarea",
        placeholder: "List the core services, products, packages, or categories.",
      },
      {
        name: "mostProfitableOffers",
        label: "Which services/products make you the most money?",
        type: "textarea",
        placeholder: "Where do margins, retention, or project value tend to be strongest?",
      },
      {
        name: "growthOffers",
        label: "Which ones do you want more customers for?",
        type: "textarea",
        placeholder: "Name the offers you want to sell more often.",
      },
      {
        name: "marginDrains",
        label: "Are there any services/products that drain your time or margins?",
        type: "textarea",
        placeholder: "Low-margin work, confusing requests, heavy admin, poor-fit offers...",
      },
      {
        name: "pricingClarity",
        label: "Do customers clearly understand your pricing, packages, or options?",
        type: "textarea",
        placeholder: "Where does pricing clarity help or hurt the sale?",
      },
      {
        name: "recurringOpportunities",
        label: "Do you have memberships, subscriptions, packages, maintenance plans, or repeat-service opportunities?",
        type: "textarea",
        placeholder: "Describe existing or possible recurring revenue paths.",
      },
    ],
  },
  {
    label: "Journey",
    title: "Chamber 03 - Customer Journey",
    prompt: "This chamber follows the path from discovery to contact, purchase, return, review, and referral.",
    purpose: "Understand how customers find, contact, buy, and return.",
    layer: "Journey",
    fields: [
      {
        name: "customerSources",
        label: "How do most customers find you right now?",
        type: "textarea",
        placeholder: "Google, referrals, social, signage, ads, events, repeat customers...",
      },
      {
        name: "postContactProcess",
        label: "What usually happens after someone calls, messages, or fills out a form?",
        type: "textarea",
        placeholder: "Walk through the current handoff.",
      },
      {
        name: "leadResponseSpeed",
        label: "How fast are leads usually answered?",
        type: "textarea",
        placeholder: "Immediately, same day, next day, whenever someone has time...",
      },
      {
        name: "lostLeads",
        label: "Where do leads or customers tend to get lost?",
        type: "textarea",
        placeholder: "Missed calls, slow replies, unclear pricing, no follow-up, poor fit...",
      },
      {
        name: "repeatedQuestions",
        label: "What questions do customers ask over and over?",
        type: "textarea",
        placeholder: "Hours, availability, pricing, service fit, timelines, prep...",
      },
      {
        name: "customerConfusion",
        label: "What do customers complain about or get confused by?",
        type: "textarea",
        placeholder: "Process, options, timing, expectations, payment, next steps...",
      },
      {
        name: "followUpAfterService",
        label: "Do you follow up after service?",
        type: "textarea",
        placeholder: "How do you check in, encourage repeat business, or continue the relationship?",
      },
      {
        name: "reviewAutomation",
        label: "Do you ask for reviews automatically?",
        type: "textarea",
        placeholder: "Describe the current review request process, if any.",
      },
      {
        name: "smootherExperience",
        label: "What would make the customer experience smoother?",
        type: "textarea",
        placeholder: "Faster answers, better booking, clearer info, reminders, portals...",
      },
    ],
  },
  {
    label: "Presence",
    title: "Chamber 04 - Digital Presence",
    prompt: "This chamber audits the public trust layer customers see before they ever talk to you.",
    purpose: "Understand public-facing trust and digital authority.",
    layer: "Presence",
    fields: [
      {
        name: "websiteUrl",
        label: "Website URL",
        placeholder: "https://example.com",
      },
      {
        name: "googleBusinessProfile",
        label: "Google Business Profile link",
        placeholder: "Paste the GBP link or search name",
      },
      {
        name: "instagramLink",
        label: "Instagram link",
        placeholder: "https://instagram.com/...",
      },
      {
        name: "facebookLink",
        label: "Facebook link",
        placeholder: "https://facebook.com/...",
      },
      {
        name: "videoSocialLink",
        label: "TikTok or YouTube link if applicable",
        placeholder: "Optional",
      },
      {
        name: "currentWebsiteOpinion",
        label: "Do you like your current website? Why or why not?",
        type: "textarea",
        placeholder: "What works, what does not, and what feels misaligned?",
      },
      {
        name: "outdatedPresence",
        label: "What feels outdated about your online presence?",
        type: "textarea",
        placeholder: "Design, photos, messaging, reviews, forms, mobile, content...",
      },
      {
        name: "admiredBusinesses",
        label: "What businesses or websites do you admire?",
        type: "textarea",
        placeholder: "Local competitors, national brands, websites, apps, or experiences.",
      },
      {
        name: "professionalPhotos",
        label: "Do you have professional photos?",
        type: "textarea",
        placeholder: "Team, location, work, products, process, before/after, lifestyle...",
      },
      {
        name: "testimonialsToHighlight",
        label: "Do you have testimonials or reviews you want highlighted?",
        type: "textarea",
        placeholder: "Paste notes or describe the proof you want elevated.",
      },
      {
        name: "visualProof",
        label: "Do you have before/after photos, project photos, case studies, or client stories?",
        type: "textarea",
        placeholder: "Describe the proof assets available.",
      },
      {
        name: "brandAssets",
        label: "Do you have logo files, brand colors, or brand assets?",
        type: "textarea",
        placeholder: "Logos, colors, fonts, photos, menus, brochures, brand guides...",
      },
    ],
  },
  {
    label: "Systems",
    title: "Chamber 05 - Systems & Tools",
    prompt: "This chamber finds the operational friction hiding behind the customer-facing experience.",
    purpose: "Find operational friction and automation opportunities.",
    layer: "Systems",
    fields: [
      {
        name: "currentTools",
        label: "What tools do you currently use for booking, scheduling, invoicing, POS, estimates, CRM, email, text marketing, or accounting?",
        type: "textarea",
        placeholder: "Square, Toast, Jobber, Housecall Pro, QuickBooks, Google Sheets, Mailchimp...",
      },
      {
        name: "manualOperations",
        label: "What parts of your business are still handled manually?",
        type: "textarea",
        placeholder: "Scheduling, reminders, invoices, quotes, tracking, follow-up...",
      },
      {
        name: "repeatedTasks",
        label: "What tasks do you repeat constantly?",
        type: "textarea",
        placeholder: "Messages, reminders, explanations, quote prep, updates...",
      },
      {
        name: "scatteredInformation",
        label: "What information gets lost, forgotten, or scattered?",
        type: "textarea",
        placeholder: "Customer notes, job details, photos, payments, follow-ups, requests...",
      },
      {
        name: "accountingTools",
        label: "Do you use QuickBooks or other accounting tools?",
        type: "textarea",
        placeholder: "Name the tools and what still does not connect cleanly.",
      },
      {
        name: "internalTaskSystems",
        label: "Do you have employee scheduling or internal task systems?",
        type: "textarea",
        placeholder: "How does the team know what to do and when?",
      },
      {
        name: "automationWishlist",
        label: "What would you love to automate if possible?",
        type: "textarea",
        placeholder: "The repeated work you would remove first.",
      },
    ],
  },
  {
    label: "AI",
    title: "Chamber 06 - AI & Automation Opportunities",
    prompt: "This chamber identifies where intelligence could support customers, owners, and staff.",
    purpose: "Identify where AI and systems could support the business.",
    layer: "AI",
    fields: [
      {
        name: "repeatedCustomerQuestions",
        label: "What questions do customers ask repeatedly?",
        type: "textarea",
        placeholder: "The questions that keep pulling owner or staff attention.",
      },
      {
        name: "weeklyTimeDrains",
        label: "What tasks eat the most time every week?",
        type: "textarea",
        placeholder: "Admin, messages, scheduling, estimates, updates, reporting...",
      },
      {
        name: "repeatedDecisions",
        label: "What decisions do you make over and over?",
        type: "textarea",
        placeholder: "Routing, pricing, fit, priority, staffing, ordering, reminders...",
      },
      {
        name: "helpfulReports",
        label: "What reports or summaries would help you run the business better?",
        type: "textarea",
        placeholder: "Lead source, close rate, revenue, reviews, missed calls, staff output...",
      },
      {
        name: "aiAssistantHelp",
        label: "What would you want an AI assistant to help with?",
        type: "textarea",
        placeholder: "Customer answers, quote prep, follow-up, summaries, content, training...",
      },
      {
        name: "chaoticArea",
        label: "What part of the business feels chaotic or hard to keep up with?",
        type: "textarea",
        placeholder: "Name the area where the operation needs more control.",
      },
    ],
  },
  {
    label: "Priorities",
    title: "Chamber 07 - Ascend Priorities",
    prompt: "The final chamber chooses what should be modernized first.",
    purpose: "Identify what should be modernized first.",
    layer: "Priority",
    fields: [
      {
        name: "topPriorities",
        label: "What needs to improve first? Choose your top 3 priorities.",
        type: "multiselect",
        options: ascendPriorityOptions,
        maxChoices: 3,
        required: true,
      },
      {
        name: "impactFirstBuild",
        label: "If Gent Ascend could help build one thing first, what would create the biggest impact?",
        type: "textarea",
        placeholder: "Describe the first build that would change the business fastest.",
        required: true,
      },
    ],
  },
];

export function AscendBlueprintEngine() {
  const [selectedPath, setSelectedPath] = useState<BlueprintPath>("blueprint");
  const [activeStep, setActiveStep] = useState(0);
  const [data, setData] = useState<BlueprintData>(initialData);
  const [scanData, setScanData] = useState<ScanData>(initialScanData);
  const [scanSubmitted, setScanSubmitted] = useState(false);
  const [scanErrors, setScanErrors] = useState<Partial<Record<keyof ScanData, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof BlueprintData, boolean>>>({});

  const preview = useMemo(() => createBlueprintPreview(data), [data]);
  const scanPreview = useMemo(() => createScanPreview(scanData), [scanData]);
  const progress = ((activeStep + 1) / steps.length) * 100;
  const step = steps[activeStep];

  function updateField(name: keyof BlueprintData, value: string) {
    setData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: false }));
  }

  function updateScanField(name: keyof ScanData, value: string) {
    setScanData((current) => ({ ...current, [name]: value }));
    setScanErrors((current) => ({ ...current, [name]: false }));
    setScanSubmitted(false);
  }

  function submitScanProfile() {
    const requiredFields: (keyof ScanData)[] = [
      "businessName",
      "contactName",
      "email",
      "websiteUrl",
      "googleBusinessProfile",
      "location",
      "industry",
      "biggestPresenceIssue",
      "currentWant",
      "helpInterest",
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
      businessName: current.businessName || scanData.businessName,
      websiteUrl: current.websiteUrl || scanData.websiteUrl,
      location: current.location || scanData.location,
      industry: current.industry || scanData.industry,
      googleBusinessProfile:
        current.googleBusinessProfile || scanData.googleBusinessProfile,
      instagramLink: current.instagramLink || scanData.instagramLink,
      facebookLink: current.facebookLink || scanData.facebookLink,
      videoSocialLink: current.videoSocialLink || scanData.otherSocialLink,
      outdatedPresence:
        current.outdatedPresence || scanData.biggestPresenceIssue,
      topPriorities: current.topPriorities || scanData.currentWant,
      impactFirstBuild: current.impactFirstBuild || scanData.helpInterest,
    }));
    setScanSubmitted(true);
  }

  function continueToWizard() {
    setSelectedPath("blueprint");
    setActiveStep(0);
    setSubmitted(false);
    requestAnimationFrame(() => {
      document
        .getElementById("path-flows")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
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
      requestAnimationFrame(() => {
        document
          .getElementById("blueprint-wizard")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return;
    }

    setActiveStep((current) => current + 1);
  }

  function goPrevious() {
    setSubmitted(false);
    setActiveStep((current) => Math.max(0, current - 1));
  }

  function restartBlueprint() {
    setSubmitted(false);
    setActiveStep(0);
  }

  function choosePath(path: BlueprintPath) {
    setSelectedPath(path);
    requestAnimationFrame(() => {
      document
        .getElementById("path-flows")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <section
      id="blueprint"
      className="relative isolate overflow-hidden bg-obsidian px-5 py-24 md:px-8 md:py-32"
    >
      <BlueprintBackground />

      <div className="mx-auto max-w-7xl">
        <BlueprintHero onChoosePath={choosePath} />
        <PathSelector selectedPath={selectedPath} onChoosePath={choosePath} />
        <LayerExplanation />

        <div id="path-flows" className="scroll-mt-24">
          <AnimatePresence mode="wait">
            {selectedPath === "blueprint" ? (
              <motion.div
                key="blueprint-flow"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                id="blueprint-wizard"
                className="mt-8 grid scroll-mt-24 gap-6 xl:grid-cols-[1fr_0.88fr]"
              >
                <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(145deg,rgba(17,17,17,0.92),rgba(10,10,10,0.82)_58%,rgba(47,69,92,0.18))] p-5 shadow-[0_30px_120px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(237,232,222,0.07)] md:p-7">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(66,106,140,0.044)_1px,transparent_1px),linear-gradient(90deg,rgba(237,232,222,0.018)_1px,transparent_1px)] bg-[size:42px_42px] opacity-60" />
                  <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-steel-bright to-transparent" />
                  <div className="relative">
                    <div className="flex flex-col gap-5 border-b border-white/10 pb-6 md:flex-row md:items-end md:justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                          Begin the Blueprint
                        </p>
                        <h3 className="mt-3 font-serif text-3xl leading-tight text-ivory md:text-5xl">
                          The deeper internal discovery.
                        </h3>
                        <p className="mt-3 max-w-2xl text-sm leading-7 text-[rgba(237,232,222,0.64)] md:text-base">
                          This path maps the business from the inside: story,
                          offer, trust, customer friction, AI opportunity,
                          systems, and operational maturity.
                        </p>
                      </div>
                      <div className="min-w-36 border border-gold/20 bg-obsidian/54 px-4 py-3 text-left md:text-right">
                        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted">
                          Chamber
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
                      {submitted ? (
                        <BlueprintResult
                          key="blueprint-result"
                          data={data}
                          preview={preview}
                          onRestart={restartBlueprint}
                        />
                      ) : (
                        <motion.div
                          key={activeStep}
                          initial={{ opacity: 0, x: 24 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -24 }}
                          transition={{ duration: 0.28, ease: "easeOut" }}
                          className="mt-8"
                        >
                          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-steel-bright">
                            Chamber {String(activeStep + 1).padStart(2, "0")} / {step.label}
                          </p>
                          <h4 className="mt-3 font-serif text-4xl text-ivory">
                            {step.title}
                          </h4>
                          <p className="mt-3 text-base leading-7 text-[rgba(237,232,222,0.7)]">
                            {step.prompt}
                          </p>
                          <p className="mt-4 border-l border-gold/30 pl-4 text-xs font-semibold uppercase leading-6 tracking-[0.16em] text-gold-bright">
                            Purpose: {step.purpose}
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
                      )}
                    </AnimatePresence>

                    {Object.values(errors).some(Boolean) && !submitted ? (
                      <p className="mt-5 border border-gold/25 bg-gold/8 px-4 py-3 text-sm text-gold-bright">
                        Complete the highlighted fields before the Blueprint can
                        move forward.
                      </p>
                    ) : null}

                    {!submitted ? (
                      <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:justify-between">
                        <motion.button
                          type="button"
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={goPrevious}
                          disabled={activeStep === 0}
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
                            ? "Generate Blueprint"
                            : "Continue"}
                        </motion.button>
                      </div>
                    ) : null}
                  </div>
                </div>

                <BlueprintPreview
                  data={data}
                  preview={preview}
                  submitted={submitted}
                />
              </motion.div>
            ) : (
              <motion.div
                key="scan-flow"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              >
                <AscendScan
                  scanData={scanData}
                  scanSubmitted={scanSubmitted}
                  scanErrors={scanErrors}
                  scanPreview={scanPreview}
                  onChange={updateScanField}
                  onSubmit={submitScanProfile}
                  onContinue={continueToWizard}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <BlueprintFinalCTA />
      </div>
    </section>
  );
}

function BlueprintHero({
  onChoosePath,
}: {
  onChoosePath: (path: BlueprintPath) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-lg border border-gold/24 bg-[linear-gradient(145deg,rgba(17,17,17,0.9),rgba(10,10,10,0.84)_54%,rgba(47,69,92,0.22))] px-5 py-10 shadow-[0_40px_170px_rgba(0,0,0,0.58),0_0_90px_rgba(66,106,140,0.12),inset_0_1px_0_rgba(237,232,222,0.08)] backdrop-blur-md md:px-10 md:py-14"
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
            A premium diagnostic system for the next version of the business.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[rgba(237,232,222,0.76)] md:text-lg">
            Gent Ascend is not here to simply hang a sharper website on top of
            the same old operation. The Blueprint Engine maps the identity,
            trust, customer experience, intelligence gaps, and internal systems
            that determine how modern the business actually feels.
          </p>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-[rgba(237,232,222,0.62)] md:text-base">
            Start deep with the full Blueprint, or request a faster Ascend Scan
            for the public-facing digital presence.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button
              href="#path-flows"
              onClick={() => onChoosePath("blueprint")}
            >
              Begin the Blueprint
            </Button>
            <Button
              href="#path-flows"
              variant="secondary"
              onClick={() => onChoosePath("scan")}
            >
              Run an Ascend Scan
            </Button>
          </div>
        </div>

        <BlueprintMap />
      </div>
    </motion.div>
  );
}

function LayerExplanation() {
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {engineLayers.map((layer, index) => (
        <motion.div
          key={layer.title}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.55, delay: index * 0.05 }}
          className="group relative min-h-72 overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(145deg,rgba(26,26,26,0.76),rgba(10,10,10,0.72)_58%,rgba(47,69,92,0.16))] p-5 shadow-[0_18px_70px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(237,232,222,0.06)] transition duration-500 hover:-translate-y-1 hover:border-gold/34"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/65 to-transparent" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(66,106,140,0.032)_1px,transparent_1px),linear-gradient(90deg,rgba(237,232,222,0.014)_1px,transparent_1px)] bg-[size:34px_34px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="relative">
            <div className="flex items-start justify-between gap-4">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-steel-bright">
                Layer {String(index + 1).padStart(2, "0")}
              </p>
              <span className="border border-gold/20 bg-gold/8 px-2 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-gold-bright">
                {layer.signal}
              </span>
            </div>
            <h3 className="mt-4 font-serif text-3xl text-ivory">
              {layer.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[rgba(237,232,222,0.64)]">
              {layer.body}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {layer.markers.map((marker) => (
                <span
                  key={marker}
                  className="border border-white/10 bg-white/[0.03] px-2.5 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-muted"
                >
                  {marker}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function PathSelector({
  selectedPath,
  onChoosePath,
}: {
  selectedPath: BlueprintPath;
  onChoosePath: (path: BlueprintPath) => void;
}) {
  return (
    <div className="mt-8 grid gap-5 lg:grid-cols-2">
      <PathCard
        path="blueprint"
        selectedPath={selectedPath}
        onChoosePath={onChoosePath}
        eyebrow="Path 01"
        title="Begin the Blueprint"
        body="Map the business from the inside. Tell us the story, offers, customers, systems, bottlenecks, and goals so we can identify the highest-leverage modernization path."
        emphasis="Full guided business discovery intake"
        bestFor="Owners ready for a deeper business review."
        buttonLabel="Begin the Blueprint"
        marker="01"
        items={[
          "Story, positioning, offer clarity",
          "Customer friction and missed revenue",
          "Systems, AI, CRM, booking, follow-ups",
        ]}
      />
      <PathCard
        path="scan"
        selectedPath={selectedPath}
        onChoosePath={onChoosePath}
        eyebrow="Path 02"
        title="Run an Ascend Scan"
        body="Submit your website, Google profile, location, industry, and digital presence details. Gent Ascend will use this profile to evaluate authority, trust gaps, customer friction, and modernization opportunities."
        emphasis="External presence review"
        bestFor="Owners who want a quick first look at their digital presence."
        buttonLabel="Run an Ascend Scan"
        marker="02"
        variant="steel"
        items={[
          "Website and mobile trust signals",
          "Google Business Profile and reviews",
          "Public-facing clarity and conversion gaps",
        ]}
      />
    </div>
  );
}

function PathCard({
  path,
  selectedPath,
  onChoosePath,
  eyebrow,
  title,
  body,
  emphasis,
  bestFor,
  buttonLabel,
  marker,
  items,
  variant = "gold",
}: {
  path: BlueprintPath;
  selectedPath: BlueprintPath;
  onChoosePath: (path: BlueprintPath) => void;
  eyebrow: string;
  title: string;
  body: string;
  emphasis: string;
  bestFor: string;
  buttonLabel: string;
  marker: string;
  items: string[];
  variant?: "gold" | "steel";
}) {
  const isActive = selectedPath === path;
  const accent = isActive
    ? "border-gold/70 bg-[linear-gradient(145deg,rgba(196,145,47,0.2),rgba(17,17,17,0.88)_42%,rgba(10,10,10,0.94))] shadow-[0_30px_120px_rgba(0,0,0,0.38),0_0_54px_rgba(196,145,47,0.18),inset_0_1px_0_rgba(237,232,222,0.12)]"
    : variant === "gold"
      ? "border-gold/24 bg-[linear-gradient(145deg,rgba(196,145,47,0.1),rgba(17,17,17,0.82)_42%,rgba(10,10,10,0.92))] shadow-[0_24px_100px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(237,232,222,0.07)]"
      : "border-steel-bright/24 bg-[linear-gradient(145deg,rgba(66,106,140,0.15),rgba(17,17,17,0.82)_42%,rgba(10,10,10,0.92))] shadow-[0_24px_100px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(237,232,222,0.07)]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-lg border p-5 transition-colors md:p-7 ${accent}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(237,232,222,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(66,106,140,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-gold-bright/80 to-transparent" />
      <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center border border-gold/30 bg-obsidian/58 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-gold-bright">
        {marker}
      </div>
      <div className="relative">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-bright">
            {eyebrow}
          </p>
          <span className="w-fit max-w-[calc(100%-4rem)] border border-white/10 bg-white/[0.04] px-3 py-2 text-[0.65rem] font-semibold uppercase leading-5 tracking-[0.16em] text-steel-bright">
            {emphasis}
          </span>
        </div>
        <h3 className="mt-5 max-w-[16rem] font-serif text-4xl leading-tight text-ivory md:max-w-none md:text-5xl">
          {title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-[rgba(237,232,222,0.68)] md:text-base">
          {body}
        </p>
        <div className="mt-5 border border-gold/18 bg-gold/8 p-4">
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-muted">
            Best For
          </p>
          <p className="mt-2 text-sm leading-6 text-[rgba(237,232,222,0.76)]">
            {bestFor}
          </p>
        </div>
        <div className="mt-6 grid gap-2">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 border border-white/10 bg-obsidian/42 px-3 py-3"
            >
              <span className="mt-2 h-px w-5 shrink-0 bg-gold-bright" />
              <span className="text-sm leading-6 text-[rgba(237,232,222,0.72)]">
                {item}
              </span>
            </div>
          ))}
        </div>
        <motion.button
          type="button"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onChoosePath(path)}
          className={`mt-6 min-h-12 w-full border px-5 text-sm font-semibold uppercase tracking-[0.16em] transition-colors ${
            isActive
              ? "border-gold/70 bg-gold text-obsidian shadow-[0_0_36px_rgba(196,145,47,0.2)] hover:bg-gold-bright"
              : "border-white/12 bg-graphite/44 text-ivory hover:border-gold/50 hover:bg-gold/10 hover:text-gold-bright"
          }`}
        >
          {buttonLabel}
        </motion.button>
      </div>
    </motion.div>
  );
}

function AscendScan({
  scanData,
  scanSubmitted,
  scanErrors,
  scanPreview,
  onChange,
  onSubmit,
  onContinue,
}: {
  scanData: ScanData;
  scanSubmitted: boolean;
  scanErrors: Partial<Record<keyof ScanData, boolean>>;
  scanPreview: ReturnType<typeof createScanPreview>;
  onChange: (name: keyof ScanData, value: string) => void;
  onSubmit: () => void;
  onContinue: () => void;
}) {
  return (
    <div
      id="ascend-scan"
      className="mt-8 grid scroll-mt-24 gap-6 xl:grid-cols-[0.96fr_1.04fr]"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-lg border border-steel-bright/24 bg-[linear-gradient(145deg,rgba(10,10,10,0.9),rgba(17,17,17,0.86)_56%,rgba(47,69,92,0.24))] p-5 shadow-[0_30px_120px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(237,232,222,0.08)] md:p-7"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(237,232,222,0.024)_1px,transparent_1px),linear-gradient(90deg,rgba(66,106,140,0.052)_1px,transparent_1px)] bg-[size:44px_44px] opacity-70" />
        <div className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-steel-bright to-transparent" />
        <motion.div
          aria-hidden="true"
          animate={{ y: ["-20%", "120%"], opacity: [0, 0.5, 0] }}
          transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-0 top-0 h-24 w-full bg-gradient-to-b from-transparent via-steel-bright/18 to-transparent"
        />

        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-steel-bright">
            Run an Ascend Scan
          </p>
          <h3 className="mt-3 font-serif text-4xl leading-tight text-ivory md:text-5xl">
            Fast external digital presence review.
          </h3>
          <p className="mt-4 text-sm leading-7 text-[rgba(237,232,222,0.68)] md:text-base md:leading-8">
            This path captures the public-facing signals Gent Ascend needs for
            a faster first review of authority, trust gaps, customer friction,
            and modernization opportunities.
          </p>
          <p className="mt-4 border-l border-gold/30 bg-gold/8 px-4 py-3 text-sm leading-7 text-gold-bright">
            No automated website or reputation scan is performed yet. This
            creates the profile that Gent Ascend can review and that future AI
            research can evaluate.
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
              label="Owner / contact name"
              value={scanData.contactName}
              hasError={Boolean(scanErrors.contactName)}
              onChange={(value) => onChange("contactName", value)}
              placeholder="Who should Gent Ascend contact?"
              required
            />
            <ScanField
              label="Email"
              value={scanData.email}
              hasError={Boolean(scanErrors.email)}
              onChange={(value) => onChange("email", value)}
              placeholder="owner@example.com"
              required
            />
            <ScanField
              label="Phone number"
              value={scanData.phone}
              hasError={Boolean(scanErrors.phone)}
              onChange={(value) => onChange("phone", value)}
              placeholder="(555) 555-5555"
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
              label="Website URL"
              value={scanData.websiteUrl}
              hasError={Boolean(scanErrors.websiteUrl)}
              onChange={(value) => onChange("websiteUrl", value)}
              placeholder="https://example.com"
              required
            />
            <ScanField
              label="Google Business Profile"
              value={scanData.googleBusinessProfile}
              hasError={Boolean(scanErrors.googleBusinessProfile)}
              onChange={(value) => onChange("googleBusinessProfile", value)}
              placeholder="Paste the GBP link or search name"
              required
            />
            <ScanField
              label="Instagram link"
              value={scanData.instagramLink}
              hasError={false}
              onChange={(value) => onChange("instagramLink", value)}
              placeholder="https://instagram.com/..."
            />
            <ScanField
              label="Facebook link"
              value={scanData.facebookLink}
              hasError={false}
              onChange={(value) => onChange("facebookLink", value)}
              placeholder="https://facebook.com/..."
            />
            <ScanField
              label="Other social link"
              value={scanData.otherSocialLink}
              hasError={false}
              onChange={(value) => onChange("otherSocialLink", value)}
              placeholder="TikTok, YouTube, LinkedIn, booking profile..."
            />
            <ScanField
              label="What is the biggest issue with your current online presence?"
              value={scanData.biggestPresenceIssue}
              hasError={Boolean(scanErrors.biggestPresenceIssue)}
              onChange={(value) => onChange("biggestPresenceIssue", value)}
              placeholder="Outdated website, weak Google presence, not enough proof, poor follow-up..."
              multiline
              required
            />
            <ScanField
              label="What do you want more of right now?"
              value={scanData.currentWant}
              hasError={Boolean(scanErrors.currentWant)}
              onChange={(value) => onChange("currentWant", value)}
              placeholder="Select one"
              options={scanWantOptions}
              required
            />
            <ScanField
              label="What type of help are you most interested in?"
              value={scanData.helpInterest}
              hasError={Boolean(scanErrors.helpInterest)}
              onChange={(value) => onChange("helpInterest", value)}
              placeholder="Select one"
              options={scanHelpOptions}
              required
            />
          </div>

          {Object.values(scanErrors).some(Boolean) ? (
            <p className="mt-5 border border-gold/25 bg-gold/8 px-4 py-3 text-sm text-gold-bright">
              Add the required public profile details before preparing the
              Ascend Scan.
            </p>
          ) : null}

          <div className="mt-7 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
            <motion.button
              type="button"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onSubmit}
              className="min-h-12 border border-gold/70 bg-gold px-5 text-sm font-semibold uppercase tracking-[0.16em] text-obsidian shadow-[0_0_36px_rgba(196,145,47,0.18)] transition-colors hover:bg-gold-bright"
            >
              Prepare Ascend Scan
            </motion.button>
            <p className="text-xs font-semibold uppercase leading-6 tracking-[0.16em] text-muted">
              Faster than the Blueprint. Focused on what customers can already
              see online.
            </p>
          </div>
        </div>
      </motion.div>

      <ScanReadinessPreview
        scanData={scanData}
        scanSubmitted={scanSubmitted}
        scanPreview={scanPreview}
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
  options,
  onChange,
}: {
  label: string;
  value: string;
  placeholder: string;
  hasError: boolean;
  required?: boolean;
  multiline?: boolean;
  options?: string[];
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
      {options ? (
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={classes}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : multiline ? (
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
  scanSubmitted,
  scanPreview,
  onContinue,
}: {
  scanData: ScanData;
  scanSubmitted: boolean;
  scanPreview: ReturnType<typeof createScanPreview>;
  onContinue: () => void;
}) {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-lg border border-steel-bright/24 bg-[linear-gradient(145deg,rgba(10,10,10,0.92),rgba(17,17,17,0.88)_54%,rgba(47,69,92,0.24))] p-5 shadow-[0_30px_120px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(237,232,222,0.08)] md:p-7"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(66,106,140,0.24),transparent_34%),linear-gradient(rgba(237,232,222,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(66,106,140,0.044)_1px,transparent_1px)] bg-[size:auto,40px_40px,40px_40px]" />
      <div className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-steel-bright to-transparent" />
      <div className="relative">
        <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-steel-bright">
              Ascend Blueprint Preview
            </p>
            <h3 className="mt-3 font-serif text-3xl leading-tight text-ivory md:text-4xl">
              {scanSubmitted
                ? `${scanData.businessName} first-look map is ready.`
                : "External scan profile awaiting details."}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[rgba(237,232,222,0.66)]">
              {scanSubmitted
                ? scanPreview.summary
                : "Complete the Ascend Scan to create a focused external review profile."}
            </p>
          </div>
          <span className="w-fit border border-gold/25 bg-gold/10 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-gold-bright">
            Fast Review
          </span>
        </div>

        <AnimatePresence mode="wait">
          {scanSubmitted ? (
            <motion.div
              key="submitted"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.32, ease: "easeOut" }}
              className="mt-6 space-y-5"
            >
              <div className="border border-gold/30 bg-[linear-gradient(145deg,rgba(196,145,47,0.14),rgba(10,10,10,0.72),rgba(47,69,92,0.16))] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold-bright">
                  Your Ascend Blueprint Preview
                </p>
                <h4 className="mt-3 font-serif text-3xl leading-tight text-ivory md:text-4xl">
                  {scanData.businessName || "Your business"} Ascend Blueprint
                  Preview
                </h4>
                <p className="mt-4 text-sm leading-7 text-[rgba(237,232,222,0.72)]">
                  Based on your responses, we&apos;ve mapped an initial
                  modernization path for how your company can attract more
                  trust, convert more customers, operate smoother, and build a
                  stronger community around your brand.
                </p>
                <div className="mt-5 grid gap-3">
                  <StatusBadge
                    label="Blueprint Status"
                    value="Initial Profile Built"
                  />
                  <StatusBadge
                    label="Recommended Path"
                    value="Digital Authority + Systems Infrastructure"
                  />
                  <StatusBadge
                    label="Review Type"
                    value="Gent Ascend Blueprint Preview"
                  />
                </div>
              </div>

              <div className="grid gap-4">
                <ClassificationCard
                  label="Primary Classification"
                  classification={scanPreview.primaryClassification}
                  featured
                />
                {scanPreview.secondaryClassification ? (
                  <ClassificationCard
                    label="Secondary Signal"
                    classification={scanPreview.secondaryClassification}
                  />
                ) : null}
              </div>

              <div className="border border-white/10 bg-obsidian/45 p-4">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-steel-bright">
                  Captured Profile
                </p>
                <div className="mt-4 grid gap-3 text-sm leading-6 text-[rgba(237,232,222,0.72)] sm:grid-cols-2">
                  <ProfileLine label="Business" value={scanData.businessName} />
                  <ProfileLine label="Contact" value={scanData.contactName} />
                  <ProfileLine label="Email" value={scanData.email} />
                  <ProfileLine label="Phone" value={scanData.phone || "Not entered"} />
                  <ProfileLine label="Website" value={scanData.websiteUrl} />
                  <ProfileLine label="Google Profile" value={scanData.googleBusinessProfile} />
                  <ProfileLine label="City / State" value={scanData.location} />
                  <ProfileLine label="Industry" value={scanData.industry} />
                  <ProfileLine label="Instagram" value={scanData.instagramLink || "Not entered"} />
                  <ProfileLine label="Facebook" value={scanData.facebookLink || "Not entered"} />
                  <ProfileLine label="Other Social" value={scanData.otherSocialLink || "Not entered"} />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <ResultStat label="Current Issue" value={scanData.biggestPresenceIssue} />
                <ResultStat label="Wanted Outcome" value={scanData.currentWant} />
                <ResultStat label="Interest" value={scanData.helpInterest} />
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {scanPreview.focus.map((item) => (
                  <div
                    key={item.title}
                    className="border border-gold/18 bg-gold/8 p-4"
                  >
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-gold-bright">
                      {item.label}
                    </p>
                    <h4 className="mt-3 font-serif text-2xl text-ivory">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-[rgba(237,232,222,0.66)]">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border border-gold/24 bg-[linear-gradient(135deg,rgba(196,145,47,0.12),rgba(66,106,140,0.1))] p-5">
                <h4 className="font-serif text-2xl text-ivory">
                  Recommended Next Move
                </h4>
                <p className="mt-3 text-sm leading-7 text-[rgba(237,232,222,0.68)]">
                  {scanPreview.nextMove}
                </p>
                <motion.button
                  type="button"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onContinue}
                  className="mt-5 min-h-12 w-full border border-gold/70 bg-gold px-5 text-sm font-semibold uppercase tracking-[0.16em] text-obsidian shadow-[0_0_36px_rgba(196,145,47,0.18)] transition-colors hover:bg-gold-bright"
                >
                  Continue to Blueprint
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
                The quick scan path is intentionally external. It prepares a
                focused review of the visible digital presence before deeper
                internal discovery begins.
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

  if (field.type === "multiselect") {
    const selected = value ? value.split(" | ").filter(Boolean) : [];
    const maxChoices = field.maxChoices ?? field.options?.length ?? 99;

    function toggleOption(option: string) {
      const isSelected = selected.includes(option);
      const nextSelected = isSelected
        ? selected.filter((item) => item !== option)
        : selected.length < maxChoices
          ? [...selected, option]
          : selected;

      onChange(field.name, nextSelected.join(" | "));
    }

    return (
      <div className="block md:col-span-2">
        <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgba(237,232,222,0.72)]">
              {field.label}
              {field.required ? <span className="text-gold-bright"> *</span> : null}
            </p>
            <p className="mt-2 text-sm leading-6 text-[rgba(237,232,222,0.56)]">
              Select up to {maxChoices}. The active choices become the first
              modernization signal.
            </p>
          </div>
          <span
            className={`w-fit border px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] ${
              hasError
                ? "border-gold-bright/60 bg-gold/12 text-gold-bright"
                : "border-white/10 bg-white/[0.03] text-muted"
            }`}
          >
            {selected.length}/{maxChoices} selected
          </span>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          {field.options?.map((option) => {
            const isSelected = selected.includes(option);
            const isDisabled = !isSelected && selected.length >= maxChoices;

            return (
              <motion.button
                key={option}
                type="button"
                whileHover={isDisabled ? undefined : { y: -2 }}
                whileTap={isDisabled ? undefined : { scale: 0.98 }}
                onClick={() => toggleOption(option)}
                disabled={isDisabled}
                className={`min-h-14 border px-4 py-3 text-left text-sm font-semibold uppercase leading-6 tracking-[0.12em] transition-colors ${
                  isSelected
                    ? "border-gold/70 bg-gold/14 text-gold-bright shadow-[0_0_28px_rgba(196,145,47,0.16)]"
                    : "border-white/10 bg-obsidian/54 text-[rgba(237,232,222,0.72)] hover:border-gold/35 hover:bg-gold/8"
                } ${isDisabled ? "cursor-not-allowed opacity-35" : ""}`}
              >
                {option}
              </motion.button>
            );
          })}
        </div>
      </div>
    );
  }

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
      className="relative overflow-hidden rounded-lg border border-gold/20 bg-[linear-gradient(145deg,rgba(10,10,10,0.92),rgba(17,17,17,0.88)_55%,rgba(47,69,92,0.2))] p-5 shadow-[0_30px_120px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(237,232,222,0.08)] md:p-7"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_8%,rgba(66,106,140,0.22),transparent_32%),linear-gradient(rgba(237,232,222,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(66,106,140,0.04)_1px,transparent_1px)] bg-[size:auto,38px_38px,38px_38px]" />
      <div className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-gold-bright to-transparent" />
      <div className="relative">
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              Live Modernization Map
            </p>
            <h3 className="mt-3 font-serif text-3xl leading-tight text-ivory md:text-4xl">
              {submitted ? preview.title : "The map forms as you answer."}
            </h3>
          </div>
          <div className="border border-steel-bright/25 bg-steel/12 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-steel-bright">
            Blueprint
          </div>
        </div>

        <p className="mt-5 text-sm leading-7 text-[rgba(237,232,222,0.66)]">
          The Blueprint organizes what you provide into a first modernization
          direction across websites, AI, systems, customer experience, and
          community-building.
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
              {["Origin", "Authority", "Intelligence", "Infrastructure"].map((layer) => (
                <span
                  key={layer}
                  className={`border px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] ${
                    preview.layers.includes(layer)
                      ? "border-gold/40 bg-gold/12 text-gold-bright shadow-[0_0_24px_rgba(196,145,47,0.14)]"
                      : "border-white/10 bg-white/[0.03] text-muted"
                  }`}
                >
                  {layer}
                </span>
              ))}
            </div>
          </div>
          <PreviewBlock title="Priority Signal">
            {preview.prioritySignal}
          </PreviewBlock>
        </div>

        {!submitted && (
          <p className="mt-5 text-xs font-semibold uppercase leading-6 tracking-[0.16em] text-muted">
            Complete the priority step to generate a personalized result for{" "}
            {data.businessName || "the business"}.
          </p>
        )}
      </div>
    </motion.aside>
  );
}

function BlueprintResult({
  data,
  preview,
  onRestart,
}: {
  data: BlueprintData;
  preview: ReturnType<typeof createBlueprintPreview>;
  onRestart: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.32, ease: "easeOut" }}
      className="mt-8"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold-bright">
        Your Ascend Blueprint Preview
      </p>
      <h4 className="mt-3 font-serif text-4xl leading-tight text-ivory md:text-5xl">
        {data.businessName || "Your business"} Ascend Blueprint Preview
      </h4>
      <p className="mt-4 max-w-4xl text-base leading-8 text-[rgba(237,232,222,0.72)]">
        Based on your responses, we&apos;ve mapped an initial modernization path
        for how your company can attract more trust, convert more customers,
        operate smoother, and build a stronger community around your brand.
      </p>
      <div className="mt-6 grid gap-3 md:grid-cols-3">
        <StatusBadge label="Blueprint Status" value="Initial Profile Built" />
        <StatusBadge
          label="Recommended Path"
          value="Digital Authority + Systems Infrastructure"
        />
        <StatusBadge
          label="Review Type"
          value="Gent Ascend Blueprint Preview"
        />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
        <ClassificationCard
          label="Primary Classification"
          classification={preview.primaryClassification}
          featured
        />
        {preview.secondaryClassification ? (
          <ClassificationCard
            label="Secondary Signal"
            classification={preview.secondaryClassification}
          />
        ) : (
          <div className="border border-white/10 bg-obsidian/45 p-5">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted">
              Secondary Signal
            </p>
            <p className="mt-3 text-sm leading-7 text-[rgba(237,232,222,0.66)]">
              The strongest signal is clear enough to lead the first review.
              Gent Ascend would confirm secondary opportunities during a live
              build review.
            </p>
          </div>
        )}
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        <ResultStat label="First Build" value={preview.build} />
        <ResultStat label="Top Priorities" value={preview.priorityList} />
        <ResultStat label="Impact Build" value={data.impactFirstBuild || "Review needed"} />
      </div>
      <div className="mt-6 border border-gold/24 bg-[linear-gradient(135deg,rgba(196,145,47,0.12),rgba(66,106,140,0.1))] p-5">
        <h5 className="font-serif text-2xl text-ivory">
          The future version of this company
        </h5>
        <p className="mt-3 text-sm leading-7 text-[rgba(237,232,222,0.68)]">
          Gent Ascend would turn this initial profile into a modernization path
          across website authority, reputation proof, lead conversion, customer
          follow-up, systems infrastructure, automation, and community-building.
          The goal is not a prettier website. The goal is a business that feels
          more trusted, easier to buy from, easier to run, and harder to ignore.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Button href="#apply" className="w-full sm:w-auto">
            Request Build Review
          </Button>
          <motion.button
            type="button"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={onRestart}
            className="min-h-12 border border-white/10 bg-graphite/40 px-5 text-sm font-semibold uppercase tracking-[0.16em] text-ivory transition-colors hover:border-steel-bright hover:bg-steel/20"
          >
            Review Answers
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

function ResultStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-white/10 bg-obsidian/45 p-4">
      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-muted">
        {label}
      </p>
      <p className="mt-2 font-serif text-2xl leading-tight text-ivory">
        {value}
      </p>
    </div>
  );
}

function StatusBadge({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-gold/24 bg-[linear-gradient(135deg,rgba(196,145,47,0.12),rgba(10,10,10,0.44))] p-4 shadow-[inset_0_1px_0_rgba(237,232,222,0.08)]">
      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-muted">
        {label}
      </p>
      <p className="mt-2 text-sm font-semibold uppercase leading-6 tracking-[0.12em] text-gold-bright">
        {value}
      </p>
    </div>
  );
}

function ClassificationCard({
  label,
  classification,
  featured = false,
}: {
  label: string;
  classification: BusinessClassification;
  featured?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden border p-5 ${
        featured
          ? "border-gold/34 bg-[linear-gradient(145deg,rgba(196,145,47,0.14),rgba(10,10,10,0.72),rgba(47,69,92,0.12))]"
          : "border-white/10 bg-obsidian/45"
      }`}
    >
      <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-gold-bright/70 to-transparent" />
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-gold-bright">
        {label}
      </p>
      <h5 className="mt-3 font-serif text-3xl leading-tight text-ivory">
        {classification.title}
      </h5>
      <p className="mt-3 text-sm leading-7 text-[rgba(237,232,222,0.7)]">
        {classification.description}
      </p>
    </div>
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
  const [activeLayer, setActiveLayer] = useState(0);
  const active = engineLayers[activeLayer];
  const nodePositions = [
    "left-1/2 top-[5%] -translate-x-1/2",
    "right-[4%] top-1/2 -translate-y-1/2",
    "left-[4%] top-1/2 -translate-y-1/2",
    "bottom-[5%] left-1/2 -translate-x-1/2",
  ];
  const connectorPaths = [
    "M260 72 L260 180",
    "M434 215 L326 215",
    "M86 215 L194 215",
    "M260 358 L260 250",
  ];

  return (
    <div className="relative min-h-[620px] overflow-hidden rounded-lg border border-gold/24 bg-[linear-gradient(145deg,rgba(10,10,10,0.86),rgba(17,17,17,0.8)_48%,rgba(47,69,92,0.24))] p-4 shadow-[0_28px_120px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(237,232,222,0.08)] sm:min-h-[560px] md:p-5">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(66,106,140,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(237,232,222,0.026)_1px,transparent_1px)] bg-[size:28px_28px] sm:bg-[size:34px_34px]" />
      <div className="absolute inset-6 border border-white/[0.06]" />
      <div className="absolute inset-10 border border-gold/[0.08]" />
      <div className="absolute left-1/2 top-6 h-10 w-px -translate-x-1/2 bg-gradient-to-b from-gold-bright/70 to-transparent" />
      <div className="absolute bottom-6 left-1/2 h-10 w-px -translate-x-1/2 bg-gradient-to-t from-gold-bright/70 to-transparent" />
      <div className="absolute left-6 top-1/2 h-px w-10 -translate-y-1/2 bg-gradient-to-r from-gold-bright/70 to-transparent" />
      <div className="absolute right-6 top-1/2 h-px w-10 -translate-y-1/2 bg-gradient-to-l from-gold-bright/70 to-transparent" />
      <motion.div
        animate={{ opacity: [0.25, 0.55, 0.25], scale: [0.96, 1.04, 0.96] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-16 rounded-full bg-[radial-gradient(circle,rgba(224,184,74,0.18),rgba(66,106,140,0.24)_42%,transparent_70%)] blur-2xl"
      />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 520 430"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="blueprintPulse" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#C4912F" stopOpacity="0" />
            <stop offset="48%" stopColor="#F2D36A" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#C4912F" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M72 215 C150 80, 370 80, 448 215 C370 350, 150 350, 72 215Z"
          fill="none"
          stroke="#426A8C"
          strokeWidth="1"
          strokeDasharray="8 12"
          animate={{ pathLength: [0.25, 1, 0.25], opacity: [0.35, 0.9, 0.35] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M260 54 L448 215 L260 376 L72 215 Z"
          fill="none"
          stroke="#C4912F"
          strokeWidth="1"
          animate={{ opacity: [0.22, 0.62, 0.22] }}
          transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <path
          d="M260 54 V376 M72 215 H448 M132 118 H388 M132 312 H388"
          stroke="#EDE8DE"
          strokeOpacity="0.08"
        />
        <circle cx="260" cy="215" r="112" fill="none" stroke="#EDE8DE" strokeOpacity="0.08" />
        <circle cx="260" cy="215" r="78" fill="none" stroke="#C4912F" strokeOpacity="0.16" />
        {connectorPaths.map((path, index) => (
          <g key={path}>
            <path d={path} fill="none" stroke="#C4912F" strokeOpacity="0.18" strokeWidth="1" />
            <motion.path
              d={path}
              fill="none"
              stroke="url(#blueprintPulse)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="34 118"
              animate={{ strokeDashoffset: [0, -152], opacity: activeLayer === index ? [0.5, 1, 0.5] : [0.18, 0.62, 0.18] }}
              transition={{
                duration: activeLayer === index ? 2.2 : 4.8,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.18,
              }}
            />
          </g>
        ))}
      </svg>
      <div className="relative min-h-[420px] sm:min-h-[390px]">
        <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-[radial-gradient(circle_at_50%_42%,rgba(242,211,106,0.38),rgba(196,145,47,0.16)_36%,rgba(10,10,10,0.94)_68%)] text-center shadow-[0_0_52px_rgba(196,145,47,0.34),0_0_96px_rgba(66,106,140,0.18),inset_0_0_28px_rgba(242,211,106,0.14)]">
          <motion.div
            aria-hidden="true"
            animate={{ scale: [0.88, 1.18, 0.88], opacity: [0.22, 0.5, 0.22] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-[-18px] rounded-full border border-gold/24"
          />
          <motion.div
            aria-hidden="true"
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 rounded-full border border-dashed border-gold/28"
          />
          <span className="relative text-[0.62rem] font-semibold uppercase leading-5 tracking-[0.18em] text-gold-bright">
            Blueprint
            <br />
            Engine
          </span>
        </div>

        <div className="absolute inset-0 hidden sm:block">
          {engineLayers.map((layer, index) => (
            <motion.div
              key={layer.title}
              role="button"
              tabIndex={0}
              onMouseEnter={() => setActiveLayer(index)}
              onFocus={() => setActiveLayer(index)}
              onClick={() => setActiveLayer(index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActiveLayer(index);
                }
              }}
              animate={{ y: index % 2 === 0 ? [0, -6, 0] : [0, 6, 0] }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.25,
              }}
              className={`absolute w-40 cursor-pointer border p-4 outline-none backdrop-blur-md transition duration-500 ${nodePositions[index]} ${
                activeLayer === index
                  ? "border-gold/70 bg-[linear-gradient(145deg,rgba(196,145,47,0.18),rgba(17,17,17,0.9))] shadow-[0_0_42px_rgba(196,145,47,0.22),inset_0_1px_0_rgba(237,232,222,0.12)]"
                  : "border-gold/22 bg-carbon/78 shadow-[0_18px_60px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(237,232,222,0.07)] hover:border-gold/48 hover:shadow-[0_0_30px_rgba(196,145,47,0.12),inset_0_1px_0_rgba(237,232,222,0.09)]"
              }`}
            >
              <div className="absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-gold-bright/70 to-transparent" />
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-muted">
                Layer {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 font-serif text-2xl text-ivory">
                {layer.title}
              </p>
              <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-steel-bright">
                {layer.signal}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-3 sm:hidden">
          {engineLayers.map((layer, index) => (
            <motion.button
              key={layer.title}
              type="button"
              onClick={() => setActiveLayer(index)}
              whileTap={{ scale: 0.98 }}
              className={`relative min-h-24 border p-4 text-left backdrop-blur-md transition-colors ${
                activeLayer === index
                  ? "border-gold/70 bg-gold/12 shadow-[0_0_34px_rgba(196,145,47,0.18)]"
                  : "border-white/10 bg-carbon/72"
              }`}
            >
              <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-gold-bright/70 to-transparent" />
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-steel-bright">
                Layer {String(index + 1).padStart(2, "0")} / {layer.signal}
              </p>
              <p className="mt-2 font-serif text-2xl text-ivory">
                {layer.title}
              </p>
            </motion.button>
          ))}
        </div>
      </div>

      <div className="relative mt-4 overflow-hidden rounded-lg border border-gold/24 bg-[linear-gradient(145deg,rgba(10,10,10,0.78),rgba(17,17,17,0.68),rgba(47,69,92,0.16))] p-4 shadow-[inset_0_1px_0_rgba(237,232,222,0.08)]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(237,232,222,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(66,106,140,0.038)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <AnimatePresence mode="wait">
          <motion.div
            key={active.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="relative"
          >
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-gold-bright">
              Active Diagnostic Layer
            </p>
            <h3 className="mt-2 font-serif text-3xl text-ivory">
              {active.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[rgba(237,232,222,0.72)]">
              {active.explanation}
            </p>
            <p className="mt-4 border-l border-steel-bright/45 pl-4 text-xs font-semibold uppercase leading-6 tracking-[0.16em] text-steel-bright">
              Gent Ascend maps the business, finds the friction, and builds the
              modernization path.
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function BlueprintFinalCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="relative mt-8 overflow-hidden rounded-lg border border-gold/30 bg-[linear-gradient(145deg,rgba(17,17,17,0.94),rgba(10,10,10,0.88)_52%,rgba(47,69,92,0.22))] p-7 text-center shadow-[0_34px_130px_rgba(0,0,0,0.48),0_0_86px_rgba(66,106,140,0.14),inset_0_1px_0_rgba(237,232,222,0.08)] md:p-10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_16%,rgba(196,145,47,0.16),transparent_34%),radial-gradient(circle_at_50%_88%,rgba(66,106,140,0.24),transparent_42%)]" />
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold-bright/70 to-transparent" />
      <div className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-bright">
          Websites / AI / Systems / Customer Experience / Community
        </p>
        <h3 className="mt-4 font-serif text-3xl leading-tight text-ivory md:text-5xl">
          Build the version of the business customers already expect.
        </h3>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[rgba(237,232,222,0.72)]">
          Start with the full Blueprint for internal clarity, or request the
          faster Ascend Scan for the public digital presence.
        </p>
        <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="#blueprint-wizard" className="w-full sm:w-auto">
            Begin the Blueprint
          </Button>
          <Button href="#ascend-scan" variant="secondary" className="w-full sm:w-auto">
            Run an Ascend Scan
          </Button>
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
    "More leads": "Lead Generation Authority Build",
    "Better website": "Authority Presence Build",
    "Better customer experience": "Customer Journey System Build",
    "Better reviews": "Reputation + Follow-Up Build",
    "Better follow-up": "Follow-Up Infrastructure Build",
    "Better internal systems": "Operations Infrastructure Build",
    "More premium brand perception": "Premium Authority Build",
    "Less manual work": "Automation Infrastructure Build",
    "More recurring revenue": "Recurring Revenue Experience Build",
    "Better hiring/training": "Internal Systems + Training Build",
    "Stronger community": "Community Experience Build",
    "Customer app or portal": "Customer Portal Build",
  };

  const opportunityByPriority: Record<string, string> = {
    "More leads": "Sharper authority, clearer conversion paths, and a stronger reason for qualified customers to take the next step.",
    "Better website": "Sharper trust, clearer services, stronger conversion, and a more premium first impression.",
    "Better customer experience": "A smoother path from first contact through service, follow-up, review, and return business.",
    "Better reviews": "A stronger reputation loop that turns completed work into visible proof and public trust.",
    "Better follow-up": "Cleaner post-contact and post-service systems so fewer opportunities disappear after the first touch.",
    "Better internal systems": "A more organized operating layer that reduces scattered information and owner bottlenecks.",
    "More premium brand perception": "A stronger Origin and Authority layer so customers understand why the business is worth choosing.",
    "Less manual work": "Automation opportunities across repeated tasks, customer questions, scheduling, reminders, and admin.",
    "More recurring revenue": "Packaging, membership, maintenance, or repeat-service systems that can stabilize revenue.",
    "Better hiring/training": "Internal clarity, repeatable workflows, and training assets that help the team run with less owner drag.",
    "Stronger community": "A relationship layer that keeps customers connected beyond the first transaction.",
    "Customer app or portal": "A more organized customer-facing system for requests, updates, history, reminders, and repeat engagement.",
  };

  const layersByPriority: Record<string, string[]> = {
    "More leads": ["Authority", "Origin"],
    "Better website": ["Authority", "Origin"],
    "Better customer experience": ["Intelligence", "Infrastructure"],
    "Better reviews": ["Authority", "Infrastructure"],
    "Better follow-up": ["Infrastructure", "Intelligence"],
    "Better internal systems": ["Infrastructure", "Intelligence"],
    "More premium brand perception": ["Origin", "Authority"],
    "Less manual work": ["Intelligence", "Infrastructure"],
    "More recurring revenue": ["Infrastructure", "Authority"],
    "Better hiring/training": ["Infrastructure", "Origin"],
    "Stronger community": ["Origin", "Infrastructure"],
    "Customer app or portal": ["Infrastructure", "Intelligence"],
  };

  const business = data.businessName.trim() || "This business";
  const industry = data.industry.trim() || "its market";
  const location = data.location.trim() ? ` in ${data.location.trim()}` : "";
  const description = data.businessDescription.trim()
    ? ` It is described as: ${data.businessDescription.trim()}`
    : "";
  const website = data.websiteUrl.trim()
    ? ` Website signal entered: ${data.websiteUrl.trim()}.`
    : " No website URL has been entered yet.";
  const priorities = data.topPriorities
    ? data.topPriorities.split(" | ").filter(Boolean)
    : [];
  const primaryPriority = priorities[0] || "Better website";
  const priorityList = priorities.length > 0 ? priorities.join(", ") : "Not selected yet";
  const prioritySignal = data.impactFirstBuild.trim()
    ? data.impactFirstBuild.trim()
    : "The first impact build will become clearer after Chamber 07.";
  const selectedLayers = Array.from(
    new Set(
      priorities.flatMap(
        (priority) => layersByPriority[priority] || ["Origin", "Authority"],
      ),
    ),
  );
  const classifications = classifyBlueprintBusiness(data);

  return {
    title: `${business} Modernization Map`,
    signal: `${business} operates within ${industry}${location}.${description}${website}`,
    opportunity:
      opportunityByPriority[primaryPriority] ||
      "A connected modernization opportunity across presence, systems, intelligence, and customer experience.",
    build: buildByPriority[primaryPriority] || "Full Ascend Operating System",
    layers: selectedLayers.length > 0 ? selectedLayers : [
      "Origin",
      "Authority",
      "Intelligence",
      "Infrastructure",
    ],
    priorityList,
    prioritySignal,
    primaryClassification: classifications.primary,
    secondaryClassification: classifications.secondary,
  };
}

function createScanPreview(scanData: ScanData) {
  const business = scanData.businessName.trim() || "This business";
  const location = scanData.location.trim() || "its market";
  const industry = scanData.industry.trim() || "local service category";
  const wantedOutcome = scanData.currentWant || "a stronger digital presence";
  const helpInterest = scanData.helpInterest || "a modernization plan";
  const issue = scanData.biggestPresenceIssue || "unclear public-facing friction";
  const classifications = classifyScanBusiness(scanData);

  return {
    summary: `${business} is queued for a fast first-look review across its website, Google profile, public proof, and customer friction in ${location}. The stated goal is ${wantedOutcome.toLowerCase()}.`,
    nextMove: `Gent Ascend should review the public trust layer first, then shape a ${helpInterest.toLowerCase()} around the stated issue: ${issue}`,
    focus: [
      {
        label: "01",
        title: "Authority Signal",
        body: `Review how quickly a ${industry} prospect can trust ${business} through the website, Google presence, reviews, visuals, and social proof.`,
      },
      {
        label: "02",
        title: "Customer Friction",
        body: `Look for the gaps currently blocking ${wantedOutcome.toLowerCase()}, including unclear calls-to-action, mobile friction, weak follow-up, or missing proof.`,
      },
      {
        label: "03",
        title: "Modernization Path",
        body: `Use the scan profile to decide whether the next move is ${helpInterest.toLowerCase()}, a stronger proof system, AI support, or the deeper Blueprint intake.`,
      },
    ],
    primaryClassification: classifications.primary,
    secondaryClassification: classifications.secondary,
  };
}

function classifyBlueprintBusiness(data: BlueprintData) {
  const priorities = data.topPriorities
    ? data.topPriorities.split(" | ").filter(Boolean)
    : [];
  const text = [
    data.businessDescription,
    data.founderStory,
    data.bestCustomers,
    data.customerPraise,
    data.misunderstood,
    data.competitorDifference,
    data.mainOffers,
    data.mostProfitableOffers,
    data.growthOffers,
    data.marginDrains,
    data.pricingClarity,
    data.recurringOpportunities,
    data.customerSources,
    data.postContactProcess,
    data.leadResponseSpeed,
    data.lostLeads,
    data.repeatedQuestions,
    data.customerConfusion,
    data.followUpAfterService,
    data.reviewAutomation,
    data.smootherExperience,
    data.currentWebsiteOpinion,
    data.outdatedPresence,
    data.admiredBusinesses,
    data.professionalPhotos,
    data.testimonialsToHighlight,
    data.visualProof,
    data.brandAssets,
    data.currentTools,
    data.manualOperations,
    data.repeatedTasks,
    data.scatteredInformation,
    data.accountingTools,
    data.internalTaskSystems,
    data.automationWishlist,
    data.repeatedCustomerQuestions,
    data.weeklyTimeDrains,
    data.repeatedDecisions,
    data.helpfulReports,
    data.aiAssistantHelp,
    data.chaoticArea,
    data.impactFirstBuild,
    priorities.join(" "),
  ].join(" ");

  return classifyBusinessFromSignals(text, priorities);
}

function classifyScanBusiness(scanData: ScanData) {
  const priorities = [scanData.currentWant, scanData.helpInterest].filter(Boolean);
  const text = [
    scanData.industry,
    scanData.websiteUrl,
    scanData.googleBusinessProfile,
    scanData.instagramLink,
    scanData.facebookLink,
    scanData.otherSocialLink,
    scanData.biggestPresenceIssue,
    scanData.currentWant,
    scanData.helpInterest,
  ].join(" ");

  return classifyBusinessFromSignals(text, priorities);
}

function classifyBusinessFromSignals(text: string, priorities: string[]) {
  const haystack = `${text} ${priorities.join(" ")}`.toLowerCase();
  const scores: Record<keyof typeof businessClassifications, number> = {
    hiddenAuthority: 0,
    frictionHeavy: 0,
    underLeveragedReputation: 0,
    communityReady: 0,
    systemsGap: 0,
  };

  addScore(scores, "hiddenAuthority", haystack, [
    "website",
    "online",
    "google",
    "presence",
    "outdated",
    "premium",
    "authority",
    "brand perception",
    "trust",
  ]);
  addScore(scores, "frictionHeavy", haystack, [
    "lead",
    "calls",
    "bookings",
    "quote",
    "follow-up",
    "follow up",
    "lost",
    "confused",
    "customer experience",
    "questions",
    "delay",
  ]);
  addScore(scores, "underLeveragedReputation", haystack, [
    "review",
    "reviews",
    "testimonial",
    "testimonials",
    "photo",
    "photos",
    "before",
    "after",
    "case studies",
    "praise",
    "proof",
  ]);
  addScore(scores, "communityReady", haystack, [
    "community",
    "repeat",
    "member",
    "membership",
    "subscription",
    "recurring",
    "loyal",
    "advocates",
    "supporters",
  ]);
  addScore(scores, "systemsGap", haystack, [
    "manual",
    "automation",
    "automate",
    "systems",
    "crm",
    "booking",
    "scheduling",
    "quickbooks",
    "scattered",
    "chaotic",
    "ai",
    "portal",
    "less manual work",
  ]);

  if (scores.hiddenAuthority === 0) {
    scores.hiddenAuthority = 1;
  }

  const ranked = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const primaryKey = ranked[0][0] as keyof typeof businessClassifications;
  const secondaryKey =
    ranked[1] && ranked[1][1] > 0
      ? (ranked[1][0] as keyof typeof businessClassifications)
      : undefined;

  return {
    primary: businessClassifications[primaryKey],
    secondary: secondaryKey ? businessClassifications[secondaryKey] : undefined,
  };
}

function addScore(
  scores: Record<keyof typeof businessClassifications, number>,
  key: keyof typeof businessClassifications,
  haystack: string,
  needles: string[],
) {
  needles.forEach((needle) => {
    if (haystack.includes(needle)) {
      scores[key] += 1;
    }
  });
}
