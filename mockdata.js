// Mock data for viral content ideas
const viralIdeas = [
    // Fitness
    { topic: "fitness", platform: "TikTok", idea: "Create a 30-day fitness challenge video series." },
    { topic: "fitness", platform: "Instagram", idea: "Post a before-and-after transformation reel with time-lapse." },
    { topic: "fitness", platform: "YouTube", idea: "Make a video on '10 Home Workouts Without Equipment'." },

    // Technology
    { topic: "technology", platform: "TikTok", idea: "Create a short video explaining how AI works in simple terms." },
    { topic: "technology", platform: "Instagram", idea: "Post a carousel of the top 5 tech gadgets of 2023." },
    { topic: "technology", platform: "YouTube", idea: "Make a video comparing the latest smartphones." },

    // Food
    { topic: "food", platform: "TikTok", idea: "Create a series where you try out viral recipes in under 60 seconds." },
    { topic: "food", platform: "Instagram", idea: "Post a reel of a unique food hack or recipe." },
    { topic: "food", platform: "YouTube", idea: "Make a video on '5 Easy Recipes for College Students'." },

    // Travel
    { topic: "travel", platform: "TikTok", idea: "Create a video showcasing hidden gems in popular travel destinations." },
    { topic: "travel", platform: "Instagram", idea: "Post a carousel of must-visit destinations for 2023." },
    { topic: "travel", platform: "YouTube", idea: "Make a video on 'Top 10 Budget Travel Tips'." },

    // Fashion
    { topic: "fashion", platform: "TikTok", idea: "Create a video on 'Outfit Ideas for Every Season'." },
    { topic: "fashion", platform: "Instagram", idea: "Post a reel of the latest fashion trends for 2023." },
    { topic: "fashion", platform: "YouTube", idea: "Make a video on 'How to Style Basics Like a Pro'." },

    // Gaming
    { topic: "gaming", platform: "TikTok", idea: "Create a video reacting to the latest game releases." },
    { topic: "gaming", platform: "Instagram", idea: "Post a carousel of the top 5 games to play in 2023." },
    { topic: "gaming", platform: "YouTube", idea: "Make a video on 'Tips to Improve Your Gaming Skills'." },

    // Education
    { topic: "education", platform: "TikTok", idea: "Create a video explaining a complex topic in under 60 seconds." },
    { topic: "education", platform: "Instagram", idea: "Post a reel of study tips and hacks." },
    { topic: "education", platform: "YouTube", idea: "Make a video on 'How to Stay Productive While Studying'." },

    // Lifestyle
    { topic: "lifestyle", platform: "TikTok", idea: "Create a video on '10 Habits for a Healthier Lifestyle'." },
    { topic: "lifestyle", platform: "Instagram", idea: "Post a carousel of daily self-care routines." },
    { topic: "lifestyle", platform: "YouTube", idea: "Make a video on 'How to Declutter Your Life'." },

    // Trending Topics (2023)
    { topic: "AI", platform: "TikTok", idea: "Create a video explaining how ChatGPT works." },
    { topic: "AI", platform: "Instagram", idea: "Post a reel of AI tools that can make your life easier." },
    { topic: "AI", platform: "YouTube", idea: "Make a video on 'The Future of AI in Everyday Life'." },

    { topic: "sustainability", platform: "TikTok", idea: "Create a video on '5 Easy Ways to Live Sustainably'." },
    { topic: "sustainability", platform: "Instagram", idea: "Post a carousel of eco-friendly products." },
    { topic: "sustainability", platform: "YouTube", idea: "Make a video on 'How to Reduce Your Carbon Footprint'." },

    { topic: "mental health", platform: "TikTok", idea: "Create a video on '5 Tips to Improve Your Mental Health'." },
    { topic: "mental health", platform: "Instagram", idea: "Post a reel of mindfulness exercises." },
    { topic: "mental health", platform: "YouTube", idea: "Make a video on 'How to Manage Stress and Anxiety'." },

    // Faceless Content Ideas
    { topic: "faceless", platform: "TikTok", idea: "Create a text-overlay video with motivational quotes." },
    { topic: "faceless", platform: "Instagram", idea: "Post a carousel of infographics about productivity tips." },
    { topic: "faceless", platform: "YouTube", idea: "Make a video with screen recordings of software tutorials." },
    { topic: "faceless", platform: "Twitter", idea: "Post a thread of life hacks with simple text and emojis." },

    // Video Shooting Tips
    { topic: "video shooting", platform: "TikTok", idea: "Use natural lighting and a tripod for steady shots." },
    { topic: "video shooting", platform: "Instagram", idea: "Shoot in 9:16 aspect ratio for reels." },
    { topic: "video shooting", platform: "YouTube", idea: "Invest in a good microphone for clear audio." },
    { topic: "video shooting", platform: "Twitter", idea: "Use GIFs or short clips to make your tweets stand out." },

    // Hooks for Viral Videos
    { topic: "hooks", platform: "TikTok", idea: "Start with a surprising fact or question to grab attention." },
    { topic: "hooks", platform: "Instagram", idea: "Use a bold caption and eye-catching thumbnail." },
    { topic: "hooks", platform: "YouTube", idea: "Begin with a teaser of the most exciting part of the video." },
    { topic: "hooks", platform: "Twitter", idea: "Use a controversial (but respectful) statement to spark engagement." }
];

// Fallback ideas for unmatched inputs
const fallbackIdeas = [
    "Create a trending challenge video on your chosen platform.",
    "Post a before-and-after transformation to grab attention.",
    "Make a short, engaging video that solves a common problem.",
    "Start a thread or series that educates your audience on a hot topic.",
    "Go live and interact with your audience in real-time.",
    "Create a meme or relatable content that sparks conversations.",
    "Post a controversial (but respectful) opinion to drive engagement.",
    "React to the latest trends or news in your niche.",
    "Try out a viral hack or recipe and share your results.",
    "Share tips or tricks that your audience will find useful."
];

// Video guides for each platform
const videoGuides = {
    TikTok: [
        "Step 1: Choose a trending sound.",
        "Step 2: Plan your video concept.",
        "Step 3: Record and edit your video.",
        "Step 4: Add captions and hashtags.",
        "Step 5: Post and engage with your audience."
    ],
    Instagram: [
        "Step 1: Choose a theme for your reel.",
        "Step 2: Record high-quality footage.",
        "Step 3: Edit your reel using Instagram's tools.",
        "Step 4: Add music and effects.",
        "Step 5: Post and share with your followers."
    ],
    YouTube: [
        "Step 1: Choose a trending topic.",
        "Step 2: Write a script and plan your video.",
        "Step 3: Record high-quality footage.",
        "Step 4: Edit your video and add captions.",
        "Step 5: Upload and optimize your video for SEO."
    ],
    Twitter: [
        "Step 1: Choose a trending hashtag.",
        "Step 2: Write a catchy tweet.",
        "Step 3: Add visuals or GIFs to make it stand out.",
        "Step 4: Engage with replies and retweets.",
        "Step 5: Analyze performance using Twitter Analytics."
    ]
};

// Optimization tips for each platform
const optimizationTips = {
    TikTok: [
        "Use trending sounds and hashtags.",
        "Keep your video under 15 seconds.",
        "Engage with comments to boost visibility."
    ],
    Instagram: [
        "Post at peak engagement times.",
        "Use relevant hashtags and location tags.",
        "Collaborate with influencers in your niche."
    ],
    YouTube: [
        "Use eye-catching thumbnails.",
        "Write a compelling title and description.",
        "Add timestamps and chapters to your video."
    ],
    Twitter: [
        "Use trending hashtags and keywords.",
        "Post during peak engagement hours.",
        "Engage with your audience through replies and retweets."
    ]
};

export { viralIdeas, fallbackIdeas, videoGuides, optimizationTips };
