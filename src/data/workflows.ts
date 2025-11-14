export interface Workflow {
  id: string;
  title: string;
  subtitle: string;
  problem: {
    title: string;
    description: string;
  };
  approach: {
    title: string;
    description: string;
  };
  sections?: Array<{
    title: string;
    prompt: {
      label: string;
      content: string;
    };
  }>;
  prompt?: {
    label: string;
    content: string;
  };
  example: {
    title: string;
    description: string;
  };
}

export const workflows: Workflow[] = [
  {
    id: "brainstorming",
    title: "Brainstorming Without Blank Screens",
    subtitle: "",
    problem: {
      title: "The Problem:",
      description: "Staring at empty documents waiting for ideas to strike wastes hours every week."
    },
    approach: {
      title: "My Approach:",
      description: "Ask for 10 ideas upfront, not one. AI generates options faster than you can think them, then you select and refine the best."
    },
    prompt: {
      label: "Copy-Paste Prompt",
      content: `You are a copywriter. Generate 10 [headlines/taglines/subject lines] for [product/service] targeting [specific audience]. 

Make them [energetic/professional/casual/empathetic].

Format: Numbered list, each under 10 words.`
    },
    example: {
      title: "Example I've Used:",
      description: `"Generate 10 email subject lines for a CRM demo targeting solo entrepreneurs. Make them friendly and benefit-focused."

Result: Got 10 options in 30 seconds, picked the best 2, refined in 5 minutes. Total time: 6 minutes vs. 45+ minutes starting from scratch.`
    }
  },
  {
    id: "personas",
    title: "Three-Layer Persona Building",
    subtitle: "",
    problem: {
      title: "The Problem:",
      description: "Generic personas like 'busy professionals' or 'health-conscious millennials' don't inform messaging decisions."
    },
    approach: {
      title: "My Approach:",
      description: "Build personas in three layers: demographics → lifestyle → motivations. Each layer adds targeting precision."
    },
    sections: [
      {
        title: "Layer 1: Demographics & Role (Who they are)",
        prompt: {
          label: "Copy-Paste Prompt",
          content: `Create a customer persona for [product/service].

Start with basics:
- Age range
- Job title/role
- Location type (urban/suburban/remote)
- Income bracket
- Education level

Format: Brief bullet list`
        }
      },
      {
        title: "Layer 2: Lifestyle & Behavior (What they do)",
        prompt: {
          label: "Copy-Paste Prompt",
          content: `Now expand this persona with lifestyle details:
- Daily lifestyle and routines
- Core values and priorities
- Main frustrations or pain points
- Preferred media and platforms
- Attitude toward new tools/technology

Format: Narrative paragraph`
        }
      },
      {
        title: "Layer 3: Motivations & Triggers (Why they act)",
        prompt: {
          label: "Copy-Paste Prompt",
          content: `For this persona, describe:
- What would make them search for a solution TODAY
- Emotional drivers (aspirations, fears, desires)
- Specific situations that create urgency
- What message would make them stop scrolling

Format: Bulleted list with reasoning`
        }
      }
    ],
    example: {
      title: "Real Example Output:",
      description: `Instead of "busy parents" → "Sophie, 34, Vancouver digital marketer. Juggles meetings and HIIT classes. Shops at Whole Foods. Tracks macros in MyFitnessPal. Motivated by guilt-free productivity and avoiding sugar crashes. Triggered by '3pm energy slump' and 'meal prep Sunday dread.'"`
    }
  },
  {
    id: "tone",
    title: "Platform-Specific Tone Adaptation",
    subtitle: "",
    problem: {
      title: "The Problem:",
      description: "Same message posted across all platforms feels off-brand somewhere and wastes potential engagement."
    },
    approach: {
      title: "My Approach:",
      description: "One core message, multiple tone adaptations. Small wording shifts create authentic platform fit."
    },
    prompt: {
      label: "The Core Prompt",
      content: `You are a copywriter. Write a [TikTok/Instagram/LinkedIn/Facebook] post about [product/service].

Target: [persona with 3 key characteristics]

Tone: [playful and bold / professional and strategic / warm and reassuring / casual and relatable]

Include:
- Platform-appropriate hook
- One clear benefit
- Call to action

Length: [under 60 words / 1-2 sentences / short paragraph]`
    },
    example: {
      title: "Example I Use Regularly:",
      description: `For TikTok (Gen Z, eco water bottle):
"Write a TikTok post for an eco-friendly water bottle. Target Gen Z college students who care about sustainability and aesthetics. Tone: playful and bold. Under 50 words."

Output: "Hydrate without the guilt ✨ Style meets sustainability with our new bottle drop. Zero plastic, infinite vibes. Link in bio 💧 #EcoStyle #GenZGreen"

For Facebook (60+, same product):
"Write a Facebook post for the same product. Target adults 60+ focused on health and reducing plastic waste. Tone: warm and reassuring. 2-3 sentences."

Output: "Make hydration part of your wellness routine. Our reusable bottle supports your health goals while protecting the environment for your grandchildren. Simple switches, meaningful impact."

Same product. Two completely different messages. Each one works because it matches platform culture and audience expectations.`
    }
  },
  {
    id: "valueprops",
    title: "Customer-Driven Value Propositions",
    subtitle: "",
    problem: {
      title: "The Problem:",
      description: "Most value props list features ('fast', 'easy', 'affordable') instead of specific outcomes customers care about."
    },
    approach: {
      title: "My Approach:",
      description: "Flip it. Start with customer pain, then connect your solution to their desired end state."
    },
    sections: [
      {
        title: "Step 1: Identify the Pain",
        prompt: {
          label: "Pain Discovery Prompt",
          content: `You are a sales strategist. List 5 specific daily frustrations that [target persona] experiences with [current solution/status quo].

Make them concrete and emotionally resonant.

Example format: "They feel [emotion] when [specific situation] because [underlying reason]"`
        }
      },
      {
        title: "Step 2: Craft the Value Prop",
        prompt: {
          label: "Value Prop Builder",
          content: `Based on this pain point: [paste one pain from above]

Write a value proposition for [product/service] that:
- States the before/after transformation
- Uses customer language, not marketing jargon
- Emphasizes time saved, stress reduced, or goal achieved
- Ends with specific proof or metric if available

Format: 1-2 sentences max`
        }
      }
    ],
    example: {
      title: "Real Example:",
      description: `Pain Identified: "Recruiters feel overwhelmed sorting through 200+ applications, knowing they're probably missing great candidates buried in the pile."

Value Prop Generated: "Stop losing talent in the pile. Our AI surfaces your top 10 matches in under 2 minutes—so you spend time on people, not paperwork."

Instead of: "Fast, intelligent recruitment software" (generic)

Result: Used this for client pitch deck. Client said, "That's exactly my Monday morning." Closed the deal.`
    }
  },
  {
    id: "platform",
    title: "Platform-Persona Matching",
    subtitle: "",
    problem: {
      title: "The Problem:",
      description: "Marketing teams spread thin across every platform hoping something works. Most content goes unseen by the right people."
    },
    approach: {
      title: "My Approach:",
      description: "Match your persona to platform demographics and behavior patterns. Focus budget where your audience actually engages."
    },
    sections: [
      {
        title: "Primary Platform Recommendation",
        prompt: {
          label: "Platform Recommendation Prompt",
          content: `You are a social media strategist. 

Here is my customer segment:
[Paste your 3-layer persona or key characteristics]

Task: Recommend the top 2 social platforms to reach them.

For each platform explain:
- Why this audience uses it
- What content formats perform best
- What tone and topics resonate
- One specific campaign idea

Format: Platform 1, Platform 2 with reasoning`
        }
      },
      {
        title: "Quick Platform Reference",
        prompt: {
          label: "Comparison Prompt",
          content: `Compare [Platform A] vs [Platform B] for reaching [brief persona description].

Focus on:
- Primary user demographics
- Expected content tone
- Engagement patterns
- Best content types

Which fits better and why?`
        }
      }
    ],
    example: {
      title: "Real Application:",
      description: `Persona: "Creative freelancers, 25-35, value portfolio aesthetics and efficient workflows"

AI Output: "Instagram & TikTok. Visual portfolios thrive on Instagram (carousel case studies, before/after). TikTok captures process videos and quick tips that build authority. LinkedIn is secondary—these users browse for inspiration, not professional networking."

Result: Focused budget on Instagram/TikTok, skipped LinkedIn, saw 3x engagement vs. spreading thin across all platforms.`
    }
  },
  {
    id: "scoring",
    title: "Rubric-Based Self-Scoring",
    subtitle: "",
    problem: {
      title: "The Problem:",
      description: `"This feels good" isn't an improvement strategy. You can't optimize what you don't measure.`
    },
    approach: {
      title: "My Approach:",
      description: "Generate evaluation rubrics, score your own work 1-100, get specific improvement areas."
    },
    sections: [
      {
        title: "Step 1: Generate the Rubric",
        prompt: {
          label: "Rubric Generator",
          content: `You are a [sales/marketing/content] expert. Create a rubric to evaluate [email/proposal/pitch deck/social post] for [target audience].

Include these criteria (score each 1-5):
- Clarity: Is the message immediately understandable?
- Audience alignment: Does it speak to their specific needs?
- Tone appropriateness: Does it match expected voice?
- Call-to-action strength: Is next step obvious and compelling?

For each criterion, describe what 1 (weak) vs 5 (excellent) looks like.

Then add: Overall score calculation and top 2 improvement priorities.`
        }
      },
      {
        title: "Step 2: Evaluate Your Work",
        prompt: {
          label: "Evaluation Prompt",
          content: `Using the rubric above, evaluate this [content type]:

[Paste your draft]

Provide:
- Score for each criterion (1-5) with brief justification
- Total score out of 20
- Top 2 specific improvements ranked by impact

Be direct. Point out what's weak.`
        }
      },
      {
        title: "Step 3: Implement & Improve",
        prompt: {
          label: "Revision Prompt",
          content: `Based on this feedback: [paste AI's top 2 improvements]

Rewrite this section to address these issues:
[Paste the weak section]

Keep the same core message but improve [clarity/tone/CTA strength].`
        }
      }
    ],
    example: {
      title: "Example from Real Project:",
      description: `Content: Cold email pitch for design services

Initial Score: 12/20
- Clarity: 3/5 (buried value prop in paragraph 3)
- Audience alignment: 2/5 (talked about "we" not "you")
- Tone: 4/5 (professional, appropriate)
- CTA: 3/5 (multiple asks, unclear next step)

Top 2 Improvements:
1. Lead with client benefit in first sentence
2. Single CTA: "Reply for a 15-min portfolio review"

After revision: 18/20
Result: Reply rate jumped from 8% to 31% after applying the feedback to the entire campaign.`
    }
  }
];

export const tabs = [
  { id: "brainstorming", label: "Brainstorming" },
  { id: "personas", label: "Personas" },
  { id: "tone", label: "Tone Adaptation" },
  { id: "valueprops", label: "Value Props" },
  { id: "platform", label: "Platform Matching" },
  { id: "scoring", label: "Self-Scoring" }
];
