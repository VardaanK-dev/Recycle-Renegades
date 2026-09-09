export const locales = ["en", "ja", "ur", "es", "fr", "ta", "hi"] as const;

export type Locale = (typeof locales)[number];

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, { name: string; label: string }> = {
  en: { name: "English", label: "ENG" },
  ja: { name: "日本語", label: "日本語" },
  ur: { name: "اردو", label: "اردو" },
  es: { name: "Español", label: "ESP" },
  fr: { name: "Français", label: "FRA" },
  ta: { name: "தமிழ்", label: "தமிழ்" },
  hi: { name: "हिन्दी", label: "हिन्दी" },
};

export const langDirections: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  ja: "ltr",
  ur: "rtl",
  es: "ltr",
  fr: "ltr",
  ta: "ltr",
  hi: "ltr",
};

export const htmlLangs: Record<Locale, string> = {
  en: "en",
  ja: "ja",
  ur: "ur-PK",
  es: "es",
  fr: "fr",
  ta: "ta",
  hi: "hi",
};

const nav = {
  research: "Research / Our Work",
  feedback: "Your Feedback",
  about: "About Us",
  credits: "Credits",
  mainNav: "Main navigation",
};

const hero = {
  motto: "From Ignored Waste to Public Action",
  badge: "A project exposing silent damage — bringing attention to what’s often overlooked.",
  title: "Plastic waste that ",
  titleAccent: "silently harms our world",
  subtitle:
    "Recycle Renegades raises awareness about a worldwide issue that affects us all. Mismanaged plastic waste silently harms marine life and our planet. Learn what we uncovered and how you can make a difference.",
  ctaPrimary: "See Our Work",
  ctaSecondary: "About Us",
};

const features = {
  title: "What our project does",
  subtitle: "Three goals that guide everything we build.",
  items: {
    accessible: {
      title: "Researching Causes of Mismanaged Plastic",
      description:
        "We created a presentation and research document highlighting the causes of mismanaged plastic and its silent impact on marine life.",
    },
    secure: {
      title: "Raising awareness",
      description:
        "Through our Instagram, we shared multilingual posters to reach audiences worldwide and spread awareness about plastic pollution.",
    },
    fast: {
      title: "The Impact we believe in",
      description:
        "We rely on community support to make change possible. By distributing surveys, inviting feedback, and exploring new solutions, we aim to work together as responsible citizens tackling this issue.",
    },
  },
};

const work = {
  resourcesTitle: "Explore",
  gameBanner: {
    title: "Play our web game",
    subtitle:
      "Sort the waste, stop bottle caps from reaching the ocean, and protect marine life.",
    alt: "Recycle Renegades web game banner",
  },
  resources: {
    survey: {
      title: "Survey",
    },
    researchDocument: {
      title: "Research Document",
    },
    successStory: {
      title: "Success Story: UNEP Restoring Coral Reefs",
    },
  },
};

const about = {
  title: "About Us",
  subtitle: "Raising awareness, one bottle cap at a time.",
  intro:
    "We are Recycle Renegades, a group of students on a mission to show how something as small as a plastic bottle cap can silently damage the marine ecosystem. Tiny plastics escape our bins, slip into drains and rivers, and reach the ocean, where they harm marine life. Most people never see it happen — so we help them see it. Follow our journey on Instagram (@recycle.renegades).",
  headingApproach: "Our approach",
  approach:
    "We begin with research: we study how much tiny plastic escapes into the environment, trace its route to the sea, and look at what it does to marine ecosystems. Then we turn knowledge into action — sorting tools, educational activities, and shareable content — to make the invisible damage of tiny plastics impossible to ignore.",
  team: {
    heading: "Meet the team",
    items: [
      { name: "Samairah Panchal", role: "Group representative" },
      { name: "Dushyant Senthil Kumar", role: "Tech Head" },
      { name: "Vardaan Kulshreshtha", role: "Head of Research" },
      { name: "Rayyan Jafri", role: "Creative head" },
      { name: "Hemendra Naresh", role: "Head of subject integration" },
      { name: "Danish Sayed", role: "Head of CAS" },
      { name: "Mohammed Ammaar Khan", role: "Group Member" },
    ],
  },
};

const feedback = {
  title: "Your Feedback",
  subtitle:
    "Found a better way to sort, learned something new, or have an idea for our project? We'd love to hear it.",
  form: {
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "you@example.com",
    subject: "Topic",
    subjectPlaceholder: "Idea, question, or comment…",
    message: "Message",
    messagePlaceholder: "Tell us what you think…",
    errorName: "Please enter your name (at least 2 characters).",
    errorEmail: "Please enter a valid email address.",
    errorSubject: "Please enter a topic (at least 3 characters).",
    errorMessage: "Please enter a message (at least 10 characters).",
    submit: "Send feedback",
    sending: "Sending…",
    success: "Thank you! Your feedback has been sent.",
    errorGeneric: "Something went wrong. Please try again later.",
  },
  details: {
    title: "Why we ask",
    response: "We read every message and usually reply within 24 to 48 hours.",
  },
};

const notFound = {
  code: "404",
  title: "Page not found",
  text: "The page you're looking for doesn't exist or has been moved.",
  cta: "Back to home",
};

const errorPage = {
  code: "500",
  title: "Something went wrong",
  text: "An unexpected error occurred. Please try again in a moment.",
  cta: "Try again",
  home: "Back to home",
};

const footer = {
  tagline: "A project turning plastic waste into solutions.",
  navigation: "Navigation",
  social: "Social",
  rights: "All rights reserved.",
  madeWith: "Made by students, with Next.js",
};

const credits = {
  title: "Credits",
  subtitle:
    "The people, organisations, and tools behind this website and the resources we used.",
  tools: {
    heading: "Tools used",
    items: [
      { name: "Next.js", url: "https://nextjs.org" },
      { name: "React", url: "https://reactjs.org" },
      { name: "TypeScript", url: "https://www.typescriptlang.org" },
      { name: "Tailwind CSS", url: "https://tailwindcss.com" },
      { name: "Helmet", url: "https://helmetjs.github.io" },
      { name: "Microsoft Copilot", url: "https://copilot.microsoft.com" },
      { name: "opencode", url: "https://opencode.ai" },
    ],
  },
  sources: {
    heading: "Sources & inspiration",
    items: [
      {
        name: "UN Environment Programme (UNEP)",
        role: "Coral reef restoration success story",
        url: "https://www.unep.org/topics/ocean-seas-and-coasts/blue-ecosystems/coral-reefs",
      },
    ],
  },
};

const meta = {
  siteName: "Recycle Renegades",
  title: "Recycle Renegades — Environmental Awareness Project",
  description:
    "Recycle Renegades raises awareness about plastic waste and its silent impact on the ocean and marine life. Discover how we research, educate, and inspire action.",
  keywords:
    "recycle, recycling, plastic waste, marine pollution, plastic pollution, ocean, marine life, sustainability, environment, climate action, reduce reuse recycle",
};

const home = {
  metaTitle: "Home — Recycle Renegades",
  metaDescription:
    "Recycle Renegades raises awareness about how mismanaged plastic waste silently harms marine life and our planet. Discover how you can make a difference.",
};

const workPage = {
  metaTitle: "Research & Our Work — Recycle Renegades",
  metaDescription:
    "Explore the research and work behind our project: sorting stations, educational activities, and the tools that turn mismanaged plastic into solutions.",
};

const aboutPage = {
  metaTitle: "About Us — Recycle Renegades",
  metaDescription:
    "Meet the Recycle Renegades group and discover how we raise awareness about the silent damage that tiny plastics cause to marine ecosystems.",
};

const feedbackPage = {
  metaTitle: "Your Feedback — Recycle Renegades",
  metaDescription:
    "Share your feedback or ideas with the Recycle Renegades team about our awareness project.",
};

const creditsPage = {
  metaTitle: "Credits — Recycle Renegades",
  metaDescription:
    "The people and organisations behind Recycle Renegades and the technology we used to build this multilingual awareness project website.",
};

const notFoundMeta = {
  metaTitle: "Page not found — Recycle Renegades",
  metaDescription: "The page you are looking for does not exist.",
};

const errorMeta = {
  metaTitle: "Error — Recycle Renegades",
  metaDescription: "An unexpected error occurred on this page.",
};

export interface Dict {
  nav: typeof nav;
  hero: typeof hero;
  features: typeof features;
  work: typeof work;
  about: typeof about;
  feedback: typeof feedback;
  notFound: typeof notFound;
  errorPage: typeof errorPage;
  footer: typeof footer;
  credits: typeof credits;
  meta: typeof meta;
  home: typeof home;
  workPage: typeof workPage;
  aboutPage: typeof aboutPage;
  feedbackPage: typeof feedbackPage;
  creditsPage: typeof creditsPage;
  notFoundMeta: typeof notFoundMeta;
  errorMeta: typeof errorMeta;
}

const dictionaries: Record<Locale, Dict> = {
  en: {
    nav, hero, features, work, about, feedback, notFound, errorPage, footer,
    credits, meta, home, workPage, aboutPage, feedbackPage, creditsPage,
    notFoundMeta, errorMeta,
  },
  ja: {
    nav: {
      research: "研究 / 私たちの活動",
      feedback: "あなたのフィードバック",
      about: "私たちについて",
      credits: "クレジット",
      mainNav: "メインナビゲーション",
    },
    hero: {
      motto: "無視されてきた廃棄物から、みんなの行動へ",
      badge: "静かな損害を明らかにするプロジェクト — 見過ごされがちな問題に注目を集めます。",
      title: "プラスチックごみを ",
      titleAccent: "静かに私たちの世界を傷つけています",
      subtitle:
        "Recycle Renegadesは、私たち全員に関わる世界的な問題に光を当てるプロジェクトです。適切に管理されていないプラスチックごみは、海洋生物と地球を静かに傷つけています。私たちが明らかにしたことと、あなたにできることをご覧ください。",
      ctaPrimary: "私たちの活動を見る",
      ctaSecondary: "私たちについて",
    },
    features: {
      title: "プロジェクトの内容",
      subtitle: "私たちが作るものすべてを導く、3つの目標。",
      items: {
        accessible: {
          title: "適切に管理されていないプラスチックの原因を調査",
          description:
            "私たちは、適切に管理されていないプラスチックの原因と、それが海洋生物に与える静かな影響に焦点を当てたプレゼンテーションと調査資料を作成しました。",
        },
        secure: {
          title: "意識を広める",
          description:
            "Instagramを通じて多言語のポスターを発信し、世界中の人々に届け、プラスチック汚染についての意識を広めています。",
        },
        fast: {
          title: "私たちが信じるインパクト",
          description:
            "変化を実現するには、コミュニティの支えが必要です。アンケートの配布、フィードバックの募集、新しい解決策の模索を通じて、この問題に責任ある市民として一緒に取り組みたいと考えています。",
        },
      },
    },
    work: {
      resourcesTitle: "探索",
      gameBanner: {
        title: "ウェブゲームをプレイ",
        subtitle: "ゴミを分別して、キャップを海に流さず、海洋生物を守ろう。",
        alt: "Recycle Renegades ウェブゲームのバナー",
      },
      resources: {
        survey: {
          title: "アンケート調査",
        },
        researchDocument: {
          title: "調査資料",
        },
        successStory: {
          title: "成功事例：UNEPによるサンゴ礁の再生",
        },
      },
    },
    about: {
      title: "私たちについて",
      subtitle: "ボトルキャップひとつからはじまる、意識を広める活動。",
      intro:
        "私たちはRecycle Renegades — ペットボトルのキャップのように小さなものが、いかに静かに海洋生態系を傷つけているかを伝える学生たちのグループです。小さなプラスチックはごみ箱をすり抜け、排水溝や川を経て海に流れ着き、海洋生物を傷つけます。その瞬間を、ほとんどの人は目にしません — だから私たちは「見える」ようにします。私たちの旅をInstagram（@recycle.renegades）でフォローしてください。",
      headingApproach: "私たちのアプローチ",
      approach:
        "私たちは調査から始めます：環境に漏れ出す小さなプラスチックの量、海までの道のり、そして海洋生態系への影響を調べます。そして知識を行動に変えます — 分別ツール、学びのアクティビティ、共有できるコンテンツを通じて、小さなプラスチックの見えない被害を無視できないものにするのです。",
      team: {
        heading: "チーム紹介",
        items: [
          { name: "Samairah Panchal", role: "グループ代表" },
          { name: "Dushyant Senthil Kumar", role: "テック部門リーダー" },
          { name: "Vardaan Kulshreshtha", role: "リサーチ部門リーダー" },
          { name: "Rayyan Jafri", role: "クリエイティブ部門リーダー" },
          { name: "Hemendra Naresh", role: "教科横断リーダー" },
          { name: "Danish Sayed", role: "CAS部門リーダー" },
          { name: "Mohammed Ammaar Khan", role: "グループメンバー" },
        ],
      },
    },
    feedback: {
      title: "あなたのフィードバック",
      subtitle:
        "もっと良い分別方法を見つけた、新しいことを学んだ、プロジェクトへのアイデアがある？ ぜひお聞かせください。",
      form: {
        name: "お名前",
        namePlaceholder: "山田 太郎",
        email: "メールアドレス",
        emailPlaceholder: "taro@example.com",
        subject: "トピック",
        subjectPlaceholder: "アイデア・質問・コメント…",
        message: "メッセージ",
        messagePlaceholder: "ご意見をお聞かせください…",
        errorName: "お名前を入力してください（2文字以上）。",
        errorEmail: "有効なメールアドレスを入力してください。",
        errorSubject: "トピックを入力してください（3文字以上）。",
        errorMessage: "メッセージを入力してください（10文字以上）。",
        submit: "送信する",
        sending: "送信中…",
        success: "ありがとうございます！フィードバックを送信しました。",
        errorGeneric: "エラーが発生しました。後でもう一度お試しください。",
      },
      details: {
        title: "なぜお聞きするのか",
        response: "すべてのメッセージを読み、通常24〜48時間以内に返信します。",
      },
    },
    notFound: {
      code: "404",
      title: "ページが見つかりません",
      text: "お探しのページは存在しないか、移動されました。",
      cta: "ホームへ戻る",
    },
    errorPage: {
      code: "500",
      title: "エラーが発生しました",
      text: "予期しないエラーが発生しました。しばらくしてからもう一度お試しください。",
      cta: "もう一度試す",
      home: "ホームへ戻る",
    },
    footer: {
      tagline: "プラスチックごみを解決策へ変えるプロジェクト。",
      navigation: "ナビゲーション",
      social: "ソーシャル",
      rights: "All rights reserved.",
      madeWith: "学生とNext.jsで制作",
    },
    meta: {
      siteName: "Recycle Renegades",
      title: "Recycle Renegades — 環境意識向上プロジェクト",
      description:
        "Recycle Renegadesは、プラスチックごみが海と海洋生物に与える静かな影響への意識を高めています。私たちの調査と啓発活動をご覧ください。",
      keywords:
        "リサイクル, プラスチックごみ, 海洋汚染, 海洋プラスチック, 海, 海洋生物, 持続可能性, 環境, 気候アクション, 分別",
    },
    home: {
      metaTitle: "ホーム — Recycle Renegades",
      metaDescription:
        "Recycle Renegadesは、適切に管理されていないプラスチックごみが海洋生物と地球を静かに傷つけていることへの意識を高めています。あなたにできることを見つけましょう。",
    },
    workPage: {
      metaTitle: "研究 / 私たちの活動 — Recycle Renegades",
      metaDescription:
        "私たちのプロジェクトの調査と活動をご覧ください：分別ステーション、学習アクティビティ、そしてプラスチックごみを解決策へ変える取り組み。",
    },
    aboutPage: {
      metaTitle: "私たちについて — Recycle Renegades",
      metaDescription:
        "Recycle Renegadesのグループを知り、小さなプラスチックが海洋生態系に与える静かな被害について、どのように意識を広めているかを発見してください。",
    },
    feedbackPage: {
      metaTitle: "あなたのフィードバック — Recycle Renegades",
      metaDescription:
        "私たちの啓発プロジェクトについて、Recycle Renegadesチームにフィードバックやアイデアを共有してください。",
    },
    credits: {
      title: "クレジット",
      subtitle: "このウェブサイトと、私たちが活用した資料の背景にある人々・団体・ツール。",
      tools: {
        heading: "使用したツール",
        items: [
          { name: "Next.js", url: "https://nextjs.org" },
          { name: "React", url: "https://reactjs.org" },
          { name: "TypeScript", url: "https://www.typescriptlang.org" },
          { name: "Tailwind CSS", url: "https://tailwindcss.com" },
          { name: "Helmet", url: "https://helmetjs.github.io" },
          { name: "Microsoft Copilot", url: "https://copilot.microsoft.com" },
          { name: "opencode", url: "https://opencode.ai" },
        ],
      },
      sources: {
        heading: "出典とインスピレーション",
        items: [
          {
            name: "国連環境計画（UNEP）",
            role: "サンゴ礁再生の成功事例",
            url: "https://www.unep.org/topics/ocean-seas-and-coasts/blue-ecosystems/coral-reefs",
          },
        ],
      },
    },
    creditsPage: {
      metaTitle: "クレジット — Recycle Renegades",
      metaDescription:
        "Recycle Renegadesのクレジット：チーム、参考資料、そしてこの多言語の啓発プロジェクトサイトの制作に使った技術。",
    },
    notFoundMeta: {
      metaTitle: "ページが見つかりません — Recycle Renegades",
      metaDescription: "お探しのページは存在しません。",
    },
    errorMeta: {
      metaTitle: "エラー — Recycle Renegades",
      metaDescription: "このページで予期しないエラーが発生しました。",
    },
  },
  ur: {
    nav: {
      research: "تحقیق / ہمارا کام",
      feedback: "آپ کی رائے",
      about: "ہمارے بارے میں",
      credits: "کریڈٹس",
      mainNav: "مرکزی نیویگیشن",
    },
    hero: {
      motto: "نظر انداز شدہ فضلے سے عوامی عمل تک",
      badge: "خاموش نقصان کو سامنے لانے والا پراجیکٹ — نظر انداز شدہ باتوں کی طرف توجہ دلانا۔",
      title: "پلاسٹک کا فضلہ جو ",
      titleAccent: "خاموشی سے ہماری دنیا کو نقصان پہنچاتا ہے",
      subtitle:
        "ری سائیکل رینیگیڈز ایک پراجیکٹ ہے جو ہم سب کو متاثر کرنے والے عالمی مسئلے پر روشنی ڈالتا ہے۔ بے ترتیب پلاسٹک کا فضلہ خاموشی سے سمندری زندگی اور ہماری دنیا کو نقصان پہنچا رہا ہے۔ جانیں ہم نے کیا دریافت کیا اور آپ کیسے فرق لا سکتے ہیں۔",
      ctaPrimary: "ہمارا کام دیکھیں",
      ctaSecondary: "ہمارے بارے میں",
    },
    features: {
      title: "ہمارا پراجیکٹ کیا کرتا ہے",
      subtitle: "جو کچھ ہم بناتے ہیں اس کی رہنمائی کرنے والے تین اہداف۔",
      items: {
        accessible: {
          title: "بے ترتیب پلاسٹک کی وجوہات پر تحقیق",
          description:
            "ہم نے ایک پریزنٹیشن اور تحقیقی دستاویز بنائی جو بے ترتیب پلاسٹک کی وجوہات اور سمندری زندگی پر اس کے خاموش اثر کو اجاگر کرتی ہے۔",
        },
        secure: {
          title: "آگاہی پیدا کرنا",
          description:
            "اپنے Instagram کے ذریعے ہم نے کثیر لسانی پوسٹر شیئر کیے تاکہ دنیا بھر کے لوگوں تک پہنچ کر پلاسٹک کی آلودگی کے بارے میں آگاہی پھیلائی جا سکے۔",
        },
        fast: {
          title: "وہ اثر جس پر ہم یقین رکھتے ہیں",
          description:
            "تبدیلی ممکن بنانے کے لیے ہم کمیونٹی کی حمایت پر انحصار کرتے ہیں۔ سروے تقسیم کرکے، فیڈ بیک جمع کرکے اور نئے حل تلاش کرکے، ہم ذمہ دار شہریوں کے طور پر اس مسئلے سے نمٹنا چاہتے ہیں۔",
        },
      },
    },
    work: {
      resourcesTitle: "دریافت کریں",
      gameBanner: {
        title: "ہماری ویب گیم کھیلیں",
        subtitle: "فضلہ چھانٹیں، ڈھکنوں کو سمندر تک پہنچنے سے روکیں اور سمندری حیات کی حفاظت کریں۔",
        alt: "ری سائیکل رینیگیڈز ویب گیم بینر",
      },
      resources: {
        survey: {
          title: "سروے",
        },
        researchDocument: {
          title: "تحقیقی دستاویز",
        },
        successStory: {
          title: "کامیابی کی کہانی: UNEP مرجانوں کی بحالی",
        },
      },
    },
    about: {
      title: "ہمارے بارے میں",
      subtitle: "بوتل کے ایک ڈھکن سے آگاہی کی مہم۔",
      intro:
        "ہم ری سائیکل رینیگیڈز ہیں — اس بات کو بیان کرنے والے لوگ کہ کیسے پانی کی بوتل کے ڈھکن جیسی چھوٹی چیزیں خاموشی سے سمندری ماحول کو نقصان پہنچاتی ہیں۔ چھوٹے پلاسٹک ڈبوں سے نکل کر گٹروں، ندیوں اور آخر کار سمندر تک پہنچتے ہیں، جہاں وہ سمندری حیات کو نقصان پہنچاتے ہیں۔ یہ لمحہ اکثر کوئی دیکھ نہیں پاتا — اس لیے ہم اسے نظر آنے والا بناتے ہیں۔ Instagram پر ہمارے سفر کے ساتھ رہیں (@recycle.renegades)۔",
      headingApproach: "ہمارا طریقہ",
      approach:
        "ہم تحقیق سے شروعات کرتے ہیں: ماحول میں پہنچنے والے چھوٹے پلاسٹک کی مقدار، سمندر تک ان کا سفر، اور سمندری ماحول پر اثر۔ پھر ہم علم کو عمل میں بدلتے ہیں — چھانٹ کے اوزار، تعلیمی سرگرمیاں اور شیئر کیے جانے والے مواد کے ذریعے، تاکہ چھوٹے پلاسٹک کے پوشیدہ نقصان کو نظر انداز نہ کیا جا سکے۔",
      team: {
        heading: "ٹیم سے ملیں",
        items: [
          { name: "Samairah Panchal", role: "گروپ کا نمائندہ" },
          { name: "Dushyant Senthil Kumar", role: "ٹیکنالوجی سربراہ" },
          { name: "Vardaan Kulshreshtha", role: "تحقیق کے سربراہ" },
          { name: "Rayyan Jafri", role: "تخلیقی سربراہ" },
          { name: "Hemendra Naresh", role: "مضامین کے انضمام کے سربراہ" },
          { name: "Danish Sayed", role: "CAS کے سربراہ" },
          { name: "Mohammed Ammaar Khan", role: "گروپ کا رکن" },
        ],
      },
    },
    feedback: {
      title: "آپ کی رائے",
      subtitle: "بہتر چھانٹ کا طریقہ ملا، کچھ نیا سیکھا یا پراجیکٹ کے لیے کوئی آئیڈیا؟ سن کر خوشی ہوگی۔",
      form: {
        name: "نام",
        namePlaceholder: "احمد خان",
        email: "ای میل",
        emailPlaceholder: "ahmed@example.com",
        subject: "موضوع",
        subjectPlaceholder: "آئیڈیا، سوال یا تبصرہ…",
        message: "پیغام",
        messagePlaceholder: "بتائیں کیا سوچتے ہیں…",
        errorName: "براہ کرم اپنا نام درج کریں (کم از کم 2 حروف)۔",
        errorEmail: "براہ کرم ایک درست ای میل ایڈریس درج کریں۔",
        errorSubject: "براہ کرم ایک موضوع درج کریں (کم از کم 3 حروف)۔",
        errorMessage: "براہ کرم ایک پیغام درج کریں (کم از کم 10 حروف)۔",
        submit: "فیڈ بیک بھیجیں",
        sending: "بھیجا جا رہا ہے…",
        success: "شکریہ! آپ کا فیڈ بیک بھیج دیا گیا ہے۔",
        errorGeneric: "کچھ غلط ہو گیا۔ براہ کرم دوبارہ کوشش کریں۔",
      },
      details: {
        title: "ہم کیوں پوچھتے ہیں",
        response: "ہم ہر پیغام پڑھتے ہیں اور عموماً 24 سے 48 گھنٹوں میں جواب دیتے ہیں۔",
      },
    },
    notFound: {
      code: "404",
      title: "صفحہ نہیں ملا",
      text: "جس صفحے کی آپ تلاش کر رہے ہیں وہ موجود نہیں یا منتقل ہو چکا ہے۔",
      cta: "ہوم پر واپس جائیں",
    },
    errorPage: {
      code: "500",
      title: "کچھ غلط ہو گیا",
      text: "ایک غیر متوقع خرابی پیش آئی۔ براہ کرم کچھ دیر بعد دوبارہ کوشش کریں۔",
      cta: "دوبارہ کوشش کریں",
      home: "ہوم پر واپس جائیں",
    },
    footer: {
      tagline: "پلاسٹک کے فضلے کو حل میں بدلنے والا پراجیکٹ۔",
      navigation: "نیویگیشن",
      social: "سوشل",
      rights: "جملہ حقوق محفوظ ہیں۔",
      madeWith: "طلبہ نے Next.js کے ساتھ بنایا",
    },
    meta: {
      siteName: "Recycle Renegades",
      title: "Recycle Renegades — ماحولیاتی آگاہی پراجیکٹ",
      description:
        "Recycle Renegades پلاسٹک کے فضلے اور سمندری حیات پر اس کے خاموش اثر کے بارے میں آگاہی کو فروغ دیتا ہے۔ ہماری تحقیق اور آگاہی کی کوششیں دیکھیں۔",
      keywords: "ری سائیکل, پلاسٹک کا فضلہ, سمندری آلودگی, سمندری زندگی, سمندر, پائیداری, ماحول, موسمی کارروائی",
    },
    home: {
      metaTitle: "ہوم — Recycle Renegades",
      metaDescription:
        "Recycle Renegades بے ترتیب پلاسٹک کے فضلے کے سمندری حیات اور ہمارے سیارے کو پہنچنے والے خاموش نقصان کے بارے میں آگاہی پھیلاتا ہے۔ دریافت کریں کہ آپ کیسے فرق لا سکتے ہیں۔",
    },
    workPage: {
      metaTitle: "تحقیق / ہمارا کام — Recycle Renegades",
      metaDescription:
        "ہمارے پراجیکٹ کے پیچھے کی تحقیق اور کام دیکھیں: چھانٹ اسٹیشن، تعلیمی سرگرمیاں اور وہ اثر جو پلاسٹک کے فضلے کو حل میں بدلتا ہے۔",
    },
    aboutPage: {
      metaTitle: "ہمارے بارے میں — Recycle Renegades",
      metaDescription:
        "ری سائیکل رینیگیڈز گروپ کو جانیں اور دریافت کریں کہ ہم کیسے چھوٹے پلاسٹک کے سمندری ماحول پر خاموش اثر کے بارے میں آگاہی پھیلاتے ہیں۔",
    },
    feedbackPage: {
      metaTitle: "آپ کی رائے — Recycle Renegades",
      metaDescription:
        "ہمارے آگاہی پراجیکٹ کے بارے میں ری سائیکل رینیگیڈز ٹیم کو اپنی رائے یا آئیڈیاز شیئر کریں۔",
    },
    credits: {
      title: "کریڈٹس",
      subtitle: "اس ویب سائٹ اور ہمارے استعمال کردہ وسائل کے پیچھے لوگ، تنظیمیں اور اوزار۔",
      tools: {
        heading: "استعمال شدہ اوزار",
        items: [
          { name: "Next.js", url: "https://nextjs.org" },
          { name: "React", url: "https://reactjs.org" },
          { name: "TypeScript", url: "https://www.typescriptlang.org" },
          { name: "Tailwind CSS", url: "https://tailwindcss.com" },
          { name: "Helmet", url: "https://helmetjs.github.io" },
          { name: "Microsoft Copilot", url: "https://copilot.microsoft.com" },
          { name: "opencode", url: "https://opencode.ai" },
        ],
      },
      sources: {
        heading: "ذرائع اور الہام",
        items: [
          {
            name: "اقوامِ متحدہ ماحولیاتی پروگرام (UNEP)",
            role: "مرجان کی بحالی کی کامیابی کی کہانی",
            url: "https://www.unep.org/topics/ocean-seas-and-coasts/blue-ecosystems/coral-reefs",
          },
        ],
      },
    },
    creditsPage: {
      metaTitle: "کریڈٹس — ری سائیکل رینیگیڈز",
      metaDescription:
        "ری سائیکل رینیگیڈز کے کریڈٹس: ٹیم، ذرائع، اور اس کثیر لسانی آگاہی پروجیکٹ ویب سائٹ کو بنانے کے لیے استعمال ہونے والی ٹیکنالوجی۔",
    },
    notFoundMeta: {
      metaTitle: "صفحہ نہیں ملا — Recycle Renegades",
      metaDescription: "جس صفحے کی آپ تلاش کر رہے ہیں وہ موجود نہیں ہے۔",
    },
    errorMeta: {
      metaTitle: "خرابی — Recycle Renegades",
      metaDescription: "اس صفحے پر ایک غیر متوقع خرابی پیش آئی۔",
    },
  },
  es: {
    nav: {
      research: "Investigación / Nuestro trabajo",
      feedback: "Tu opinión",
      about: "Sobre nosotros",
      credits: "Créditos",
      mainNav: "Navegación principal",
    },
    hero: {
      motto: "De residuos ignorados a acción pública",
      badge: "Un proyecto que expone el daño silencioso, dando atención a lo que suele pasarse por alto.",
      title: "El plástico mal gestionado ",
      titleAccent: "daña silenciosamente nuestro mundo",
      subtitle:
        "Recycle Renegades es un proyecto que arroja luz sobre un problema mundial que nos afecta a todos. El plástico mal gestionado daña silenciosamente la vida marina y nuestro planeta. Descubre lo que hemos descubierto y cómo puedes marcar la diferencia.",
      ctaPrimary: "Ver nuestro trabajo",
      ctaSecondary: "Sobre nosotros",
    },
    features: {
      title: "Qué hace nuestro proyecto",
      subtitle: "Tres objetivos guían todo lo que construimos.",
      items: {
        accessible: {
          title: "Investigar las causas del plástico mal gestionado",
          description:
            "Hemos creado una presentación y un documento de investigación que destacan las causas del plástico mal gestionado y su impacto silencioso en la vida marina.",
        },
        secure: {
          title: "Crear conciencia",
          description:
            "A través de nuestro Instagram, compartimos carteles multilingües para llegar a audiencias de todo el mundo y difundir la conciencia sobre la contaminación por plástico.",
        },
        fast: {
          title: "El impacto en el que creemos",
          description:
            "Contamos con el apoyo de la comunidad para hacer posible el cambio. Distribuyendo encuestas, invitando a comentarios y explorando nuevas soluciones, buscamos trabajar juntos como ciudadanos responsables ante este problema.",
        },
      },
    },
    work: {
      resourcesTitle: "Explora",
      gameBanner: {
        title: "Juega a nuestro juego web",
        subtitle: "Clasifica los residuos, evita que los tapones lleguen al océano y protege la vida marina.",
        alt: "Banner del juego web de Recycle Renegades",
      },
      resources: {
        survey: {
          title: "Encuesta",
        },
        researchDocument: {
          title: "Documento de investigación",
        },
        successStory: {
          title: "Historia de éxito: UNEP restaura los arrecifes de coral",
        },
      },
    },
    about: {
      title: "Sobre nosotros",
      subtitle: "Conciencia que empieza con un solo tapón.",
      intro:
        "Somos Recycle Renegades — un grupo de personas que cuenta cómo algo tan pequeño como el tapón de una botella daña en silencio el ecosistema marino. Los plásticos pequeños se escapan de las papeleras a los desagües, los ríos y, por último, el océano, donde perjudican a la vida marina. Es un momento que casi nadie ve — por eso lo hacemos visible. Síguenos en Instagram (@recycle.renegades).",
      headingApproach: "Nuestro enfoque",
      approach:
        "Empezamos con la investigación: cuánto plástico pequeño acaba en el medio ambiente, el camino que recorre hasta el mar y el impacto en los ecosistemas marinos. Luego convertimos ese conocimiento en acción — con herramientas de clasificación, actividades educativas y contenido para compartir, para que el daño invisible de los plásticos pequeños sea demasiado difícil de ignorar.",
      team: {
        heading: "Conoce al equipo",
        items: [
          { name: "Samairah Panchal", role: "Representante del grupo" },
          { name: "Dushyant Senthil Kumar", role: "Responsable de tecnología" },
          { name: "Vardaan Kulshreshtha", role: "Responsable de investigación" },
          { name: "Rayyan Jafri", role: "Responsable creativo" },
          { name: "Hemendra Naresh", role: "Responsable de integración de materias" },
          { name: "Danish Sayed", role: "Responsable de CAS" },
          { name: "Mohammed Ammaar Khan", role: "Miembro del grupo" },
        ],
      },
    },
    feedback: {
      title: "Tu opinión",
      subtitle:
        "¿Encontraste una mejor forma de clasificar, aprendiste algo nuevo o tienes una idea para nuestro proyecto? Nos encantaría escucharla.",
      form: {
        name: "Nombre",
        namePlaceholder: "Juan Pérez",
        email: "Correo electrónico",
        emailPlaceholder: "juan@ejemplo.com",
        subject: "Asunto",
        subjectPlaceholder: "Idea, pregunta o comentario…",
        message: "Mensaje",
        messagePlaceholder: "Cuéntanos qué piensas…",
        errorName: "Escribe tu nombre (al menos 2 caracteres).",
        errorEmail: "Escribe un correo electrónico válido.",
        errorSubject: "Escribe un asunto (al menos 3 caracteres).",
        errorMessage: "Escribe un mensaje (al menos 10 caracteres).",
        submit: "Enviar comentario",
        sending: "Enviando…",
        success: "¡Gracias! Tu comentario ha sido enviado.",
        errorGeneric: "Algo salió mal. Inténtalo de nuevo más tarde.",
      },
      details: {
        title: "Por qué preguntamos",
        response: "Leemos cada mensaje y normalmente respondemos entre 24 y 48 horas.",
      },
    },
    notFound: {
      code: "404",
      title: "Página no encontrada",
      text: "La página que buscas no existe o ha sido movida.",
      cta: "Volver al inicio",
    },
    errorPage: {
      code: "500",
      title: "Algo salió mal",
      text: "Ocurrió un error inesperado. Inténtalo de nuevo en un momento.",
      cta: "Reintentar",
      home: "Volver al inicio",
    },
    footer: {
      tagline: "Un proyecto que convierte el plástico en soluciones.",
      navigation: "Navegación",
      social: "Social",
      rights: "Todos los derechos reservados.",
      madeWith: "Hecho por estudiantes, con Next.js",
    },
    meta: {
      siteName: "Recycle Renegades",
      title: "Recycle Renegades — Proyecto de concienciación ambiental",
      description:
        "Recycle Renegades crea conciencia sobre el desperdicio de plástico y su impacto silencioso en el océano y la vida marina. Descubre cómo investigamos, educamos e inspiramos la acción.",
      keywords: "reciclaje, residuos plásticos, contaminación marina, vida marina, océano, sostenibilidad, medio ambiente, acción climática",
    },
    home: {
      metaTitle: "Inicio — Recycle Renegades",
      metaDescription:
        "Recycle Renegades crea conciencia sobre cómo el plástico mal gestionado daña en silencio la vida marina y nuestro planeta. Descubre cómo puedes marcar la diferencia.",
    },
    workPage: {
      metaTitle: "Investigación / Nuestro trabajo — Recycle Renegades",
      metaDescription:
        "Explora la investigación y el trabajo de nuestro proyecto: estaciones de clasificación, actividades educativas y el impacto que convierte el plástico en soluciones.",
    },
    aboutPage: {
      metaTitle: "Sobre nosotros — Recycle Renegades",
      metaDescription:
        "Conoce al grupo Recycle Renegades y descubre cómo difundimos la conciencia sobre el impacto silencioso de los plásticos pequeños en el ecosistema marino.",
    },
    feedbackPage: {
      metaTitle: "Tu opinión — Recycle Renegades",
      metaDescription:
        "Comparte tus comentarios o ideas con el equipo de Recycle Renegades sobre nuestro proyecto de concienciación.",
    },
    credits: {
      title: "Créditos",
      subtitle:
        "Las personas, organizaciones y herramientas detrás de este sitio y de los recursos que usamos.",
      tools: {
        heading: "Herramientas utilizadas",
        items: [
          { name: "Next.js", url: "https://nextjs.org" },
          { name: "React", url: "https://reactjs.org" },
          { name: "TypeScript", url: "https://www.typescriptlang.org" },
          { name: "Tailwind CSS", url: "https://tailwindcss.com" },
          { name: "Helmet", url: "https://helmetjs.github.io" },
          { name: "Microsoft Copilot", url: "https://copilot.microsoft.com" },
          { name: "opencode", url: "https://opencode.ai" },
        ],
      },
      sources: {
        heading: "Fuentes e inspiración",
        items: [
          {
            name: "Programa de las Naciones Unidas para el Medio Ambiente (PNUMA)",
            role: "Historia de éxito sobre la restauración de arrecifes de coral",
            url: "https://www.unep.org/topics/ocean-seas-and-coasts/blue-ecosystems/coral-reefs",
          },
        ],
      },
    },
    creditsPage: {
      metaTitle: "Créditos — Recycle Renegades",
      metaDescription:
        "Créditos de Recycle Renegades: el equipo, las fuentes y la tecnología utilizada para crear este sitio multilingüe de concienciación.",
    },
    notFoundMeta: {
      metaTitle: "Página no encontrada — Recycle Renegades",
      metaDescription: "La página que buscas no existe.",
    },
    errorMeta: {
      metaTitle: "Error — Recycle Renegades",
      metaDescription: "Ocurrió un error inesperado en esta página.",
    },
  },
  fr: {
    nav: {
      research: "Recherche / Nos travaux",
      feedback: "Vos retours",
      about: "À propos de nous",
      credits: "Crédits",
      mainNav: "Navigation principale",
    },
    hero: {
      motto: "Des déchets ignorés à l'action collective",
      badge: "Un projet qui expose les dégâts silencieux et attire l'attention sur ce qu'on néglige souvent.",
      title: "Le plastique mal géré qui ",
      titleAccent: "nuit silencieusement à notre monde",
      subtitle:
        "Recycle Renegades est un projet qui met en lumière un problème mondial qui nous concerne tous. Le plastique mal géré nuit silencieusement à la vie marine et à notre planète. Découvrez ce que nous avons découvert et comment vous pouvez faire la différence.",
      ctaPrimary: "Voir nos travaux",
      ctaSecondary: "À propos de nous",
    },
    features: {
      title: "Ce que fait notre projet",
      subtitle: "Trois objectifs guident tout ce que nous construisons.",
      items: {
        accessible: {
          title: "Rechercher les causes du plastique mal géré",
          description:
            "Nous avons créé une présentation et un document de recherche qui mettent en évidence les causes du plastique mal géré et son impact silencieux sur la vie marine.",
        },
        secure: {
          title: "Sensibiliser",
          description:
            "Via notre Instagram, nous avons partagé des affiches multilingues pour toucher des publics du monde entier et sensibiliser à la pollution plastique.",
        },
        fast: {
          title: "L'impact auquel nous croyons",
          description:
            "Nous comptons sur le soutien de la communauté pour rendre le changement possible. En distribuant des questionnaires, en invitant aux retours et en explorant de nouvelles solutions, nous souhaitons agir ensemble, en citoyens responsables, face à ce problème.",
        },
      },
    },
    work: {
      resourcesTitle: "Explorer",
      gameBanner: {
        title: "Jouez à notre jeu web",
        subtitle: "Triez les déchets, empêchez les bouchons d'atteindre l'océan et protégez la vie marine.",
        alt: "Bannière du jeu web de Recycle Renegades",
      },
      resources: {
        survey: {
          title: "Sondage",
        },
        researchDocument: {
          title: "Document de recherche",
        },
        successStory: {
          title: "Success story : l'UNEP restaure les récifs coralliens",
        },
      },
    },
    about: {
      title: "À propos de nous",
      subtitle: "Une prise de conscience qui commence par un simple bouchon.",
      intro:
        "Nous sommes Recycle Renegades — un groupe de personnes qui explique comment un objet aussi petit qu'un bouchon de bouteille abîme en silence l'écosystème marin. Les petits plastiques s'échappent des poubelles vers les égouts, les rivières puis l'océan, où ils nuisent à la vie marine. C'est un moment que presque personne ne voit — c'est pourquoi nous le rendons visible. Suivez-nous sur Instagram (@recycle.renegades).",
      headingApproach: "Notre approche",
      approach:
        "Nous commençons par la recherche : combien de petits plastiques finissent dans l'environnement, le chemin qu'ils parcourent jusqu'à la mer et l'impact sur les écosystèmes marins. Puis nous transformons ce savoir en action — grâce à des outils de tri, des activités éducatives et des contenus à partager, afin que les dégâts invisibles des petits plastiques soient trop difficiles à ignorer.",
      team: {
        heading: "Rencontrez l'équipe",
        items: [
          { name: "Samairah Panchal", role: "Représentant du groupe" },
          { name: "Dushyant Senthil Kumar", role: "Responsable technique" },
          { name: "Vardaan Kulshreshtha", role: "Responsable de la recherche" },
          { name: "Rayyan Jafri", role: "Responsable créatif" },
          { name: "Hemendra Naresh", role: "Responsable de l'intégration des matières" },
          { name: "Danish Sayed", role: "Responsable CAS" },
          { name: "Mohammed Ammaar Khan", role: "Membre du groupe" },
        ],
      },
    },
    feedback: {
      title: "Vos retours",
      subtitle:
        "Une meilleure façon de trier, une nouvelle découverte ou une idée pour notre projet ? Nous serions ravis de l'entendre.",
      form: {
        name: "Nom",
        namePlaceholder: "Marie Dupont",
        email: "E-mail",
        emailPlaceholder: "marie@exemple.com",
        subject: "Sujet",
        subjectPlaceholder: "Idée, question ou commentaire…",
        message: "Message",
        messagePlaceholder: "Dites-nous ce que vous pensez…",
        errorName: "Veuillez saisir votre nom (au moins 2 caractères).",
        errorEmail: "Veuillez saisir une adresse e-mail valide.",
        errorSubject: "Veuillez saisir un sujet (au moins 3 caractères).",
        errorMessage: "Veuillez saisir un message (au moins 10 caractères).",
        submit: "Envoyer",
        sending: "Envoi en cours…",
        success: "Merci ! Votre retour a bien été envoyé.",
        errorGeneric: "Une erreur est survenue. Réessayez plus tard.",
      },
      details: {
        title: "Pourquoi demandons-nous cela ?",
        response: "Nous lisons chaque message et répondons généralement sous 24 à 48 heures.",
      },
    },
    notFound: {
      code: "404",
      title: "Page introuvable",
      text: "La page que vous cherchez n'existe pas ou a été déplacée.",
      cta: "Retour à l'accueil",
    },
    errorPage: {
      code: "500",
      title: "Une erreur est survenue",
      text: "Une erreur inattendue s'est produite. Veuillez réessayer dans un instant.",
      cta: "Réessayer",
      home: "Retour à l'accueil",
    },
    footer: {
      tagline: "Un projet qui transforme le plastique en solutions.",
      navigation: "Navigation",
      social: "Réseaux",
      rights: "Tous droits réservés.",
      madeWith: "Fait par des étudiants, avec Next.js",
    },
    meta: {
      siteName: "Recycle Renegades",
      title: "Recycle Renegades — Projet de sensibilisation environnementale",
      description:
        "Recycle Renegades sensibilise au gaspillage de plastique et à son impact silencieux sur l'océan et la vie marine. Découvrez comment nous recherchons, éduquons et inspirons l'action.",
      keywords: "recyclage, déchets plastiques, pollution marine, vie marine, océan, développement durable, environnement, action climatique",
    },
    home: {
      metaTitle: "Accueil — Recycle Renegades",
      metaDescription:
        "Recycle Renegades sensibilise à la façon dont le plastique mal géré nuit en silence à la vie marine et à notre planète. Découvrez comment vous pouvez faire la différence.",
    },
    workPage: {
      metaTitle: "Recherche / Nos travaux — Recycle Renegades",
      metaDescription:
        "Découvrez la recherche et le travail derrière notre projet : stations de tri, activités éducatives et l'impact qui transforme le plastique en solutions.",
    },
    aboutPage: {
      metaTitle: "À propos de nous — Recycle Renegades",
      metaDescription:
        "Rencontrez le groupe Recycle Renegades et découvrez comment nous sensibilisons aux dégâts silencieux des petits plastiques sur l'écosystème marin.",
    },
    feedbackPage: {
      metaTitle: "Vos retours — Recycle Renegades",
      metaDescription:
        "Partagez vos retours ou idées avec l'équipe Recycle Renegades au sujet de notre projet de sensibilisation.",
    },
    credits: {
      title: "Crédits",
      subtitle:
        "Les personnes, organisations et outils derrière ce site et les ressources que nous avons utilisées.",
      tools: {
        heading: "Outils utilisés",
        items: [
          { name: "Next.js", url: "https://nextjs.org" },
          { name: "React", url: "https://reactjs.org" },
          { name: "TypeScript", url: "https://www.typescriptlang.org" },
          { name: "Tailwind CSS", url: "https://tailwindcss.com" },
          { name: "Helmet", url: "https://helmetjs.github.io" },
          { name: "Microsoft Copilot", url: "https://copilot.microsoft.com" },
          { name: "opencode", url: "https://opencode.ai" },
        ],
      },
      sources: {
        heading: "Sources et inspiration",
        items: [
          {
            name: "Programme des Nations Unies pour l'environnement (PNUE)",
            role: "Histoire à succès sur la restauration des récifs coralliens",
            url: "https://www.unep.org/topics/ocean-seas-and-coasts/blue-ecosystems/coral-reefs",
          },
        ],
      },
    },
    creditsPage: {
      metaTitle: "Crédits — Recycle Renegades",
      metaDescription:
        "Les crédits de Recycle Renegades : l'équipe, les sources et la technologie utilisée pour créer ce site multilingue de sensibilisation.",
    },
    notFoundMeta: {
      metaTitle: "Page introuvable — Recycle Renegades",
      metaDescription: "La page que vous cherchez n'existe pas.",
    },
    errorMeta: {
      metaTitle: "Erreur — Recycle Renegades",
      metaDescription: "Une erreur inattendue s'est produite sur cette page.",
    },
  },
  ta: {
    nav: {
      research: "ஆராய்ச்சி / எங்கள் பணி",
      feedback: "உங்கள் கருத்து",
      about: "எங்களைப் பற்றி",
      credits: "நன்றியுரை",
      mainNav: "முதன்மை வழிசெலுத்தல்",
    },
    hero: {
      motto: "புறக்கணிக்கப்பட்ட கழிவிலிருந்து பொது நடவடிக்கைக்கு",
      badge: "அமைதியான சேதத்தை வெளிச்சத்திற்குக் கொண்டுவரும் திட்டம் — பொதுவாக கவனிக்கப்படாதவற்றை கவனத்திற்கு கொண்டு வருதல்.",
      title: "முறையாக நிர்வகிக்கப்படாத பிளாஸ்டிக் ",
      titleAccent: "நமது உலகை அமைதியாக பாதிக்கிறது",
      subtitle:
        "Recycle Renegades என்பது நம் அனைவரையும் பாதிக்கும் உலகளாவிய பிரச்சினையில் வெளிச்சம் போடும் திட்டம். முறையாக நிர்வகிக்கப்படாத பிளாஸ்டிக் கழிவு, கடல்வாழ் உயிரினங்களுக்கும் நமது கிரகத்திற்கும் அமைதியாக தீங்கு விளைவிக்கிறது. நாங்கள் கண்டறிந்ததையும், நீங்கள் எப்படி மாற்றத்தை ஏற்படுத்தலாம் என்பதையும் அறிக.",
      ctaPrimary: "எங்கள் பணியைப் பார்க்க",
      ctaSecondary: "எங்களைப் பற்றி",
    },
    features: {
      title: "எங்கள் திட்டம் என்ன செய்கிறது",
      subtitle: "நாங்கள் உருவாக்கும் ஒவ்வொன்றையும் வழிநடத்தும் மூன்று இலக்குகள்.",
      items: {
        accessible: {
          title: "முறையாக நிர்வகிக்கப்படாத பிளாஸ்டிக்கின் காரணங்களை ஆய்வு செய்தல்",
          description:
            "முறையாக நிர்வகிக்கப்படாத பிளாஸ்டிக்கின் காரணங்களையும், கடல்வாழ் உயிரினங்களின் மீதான அதன் அமைதியான தாக்கத்தையும் விளக்கும் விளக்கக்காட்சி மற்றும் ஆய்வு ஆவணத்தை உருவாக்கினோம்.",
        },
        secure: {
          title: "விழிப்புணர்வை ஏற்படுத்துதல்",
          description:
            "எங்கள் Instagram மூலம் பன்மொழி சுவரொட்டிகளை பகிர்ந்து, உலகெங்கிலும் உள்ளவர்களைச் சென்றடைந்து, பிளாஸ்டிக் மாசுபாடு குறித்த விழிப்புணர்வை பரப்பினோம்.",
        },
        fast: {
          title: "நாங்கள் நம்பும் தாக்கம்",
          description:
            "மாற்றத்தை சாத்தியமாக்க சமூகத்தின் ஆதரவு தேவை. கருத்துக்கணிப்புகளை விநியோகித்து, கருத்துகளை அழைத்து, புதிய தீர்வுகளை ஆராய்ந்து, இந்தப் பிரச்சினையை எதிர்கொள்ளும் பொறுப்புள்ள குடிமக்களாக ஒன்றிணைந்து செயல்பட முயல்கிறோம்.",
        },
      },
    },
    work: {
      resourcesTitle: "ஆராயுங்கள்",
      gameBanner: {
        title: "எங்கள் வலை விளையாட்டை விளையாடுங்கள்",
        subtitle: "கழிவுகளைப் பிரியுங்கள், மூடிகள் கடலை அடைவதைத் தடுத்து கடல் உயிரினங்களை காக்கவும்.",
        alt: "Recycle Renegades வலை விளையாட்டு பேனர்",
      },
      resources: {
        survey: {
          title: "கருத்துக்கணிப்பு",
        },
        researchDocument: {
          title: "ஆய்வு ஆவணம்",
        },
        successStory: {
          title: "வெற்றிக் கதை: UNEP பவளப்பாறைகளை மீட்டமைத்தல்",
        },
      },
    },
    about: {
      title: "எங்களைப் பற்றி",
      subtitle: "ஒரு பாட்டில் மூடியில் தொடங்கும் விழிப்புணர்வு.",
      intro:
        "நாங்கள் Recycle Renegades — பாட்டில் மூடி போன்ற சிறிய பொருள் கடல் சூழலமைப்பை அமைதியாக எப்படி சேதப்படுத்துகிறது என்பதைச் சொல்லும் மக்கள் குழு. சிறிய பிளாஸ்டிக்குகள் குப்பைத் தொட்டிகளில் இருந்து வடிகால்கள், ஆறுகள், கடல் வரை சென்று கடல்வாழ் உயிரினங்களுக்கு தீங்கு விளைவிக்கின்றன. இந்த தருணத்தை கிட்டத்தட்ட யாரும் பார்ப்பதில்லை — அதனால்தான் நாங்கள் அதைப் புலப்படுத்துகிறோம். Instagram இல் எங்களைப் பின்தொடருங்கள் (@recycle.renegades).",
      headingApproach: "எங்கள் அணுகுமுறை",
      approach:
        "நாங்கள் ஆராய்ச்சியில் தொடங்குகிறோம்: சூழலில் சேரும் சிறிய பிளாஸ்டிக்கின் அளவு, கடல் வரை அதன் பயணம், கடல் சூழல்களில் ஏற்படும் தாக்கம். பிறகு அந்த அறிவை செயலாக மாற்றுகிறோம் — பிரிப்பு கருவிகள், கல்வி நடவடிக்கைகள், பகிரக்கூடிய உள்ளடக்கம் மூலம், சிறிய பிளாஸ்டிக்கின் கண்ணுக்குத் தெரியாத சேதத்தை கண்டுகொள்ளாமல் இருக்க முடியாமல் செய்வது.",
      team: {
        heading: "இந்தக் குழுவைச் சந்தியுங்கள்",
        items: [
          { name: "Samairah Panchal", role: "குழு பிரதிநிதி" },
          { name: "Dushyant Senthil Kumar", role: "தொழில்நுட்பத் தலைவர்" },
          { name: "Vardaan Kulshreshtha", role: "ஆராய்ச்சித் தலைவர்" },
          { name: "Rayyan Jafri", role: "படைப்புத் தலைவர்" },
          { name: "Hemendra Naresh", role: "பாட ஒருங்கிணைப்புத் தலைவர்" },
          { name: "Danish Sayed", role: "CAS தலைவர்" },
          { name: "Mohammed Ammaar Khan", role: "குழு உறுப்பினர்" },
        ],
      },
    },
    feedback: {
      title: "உங்கள் கருத்து",
      subtitle:
        "சிறந்த பிரிக்கும் வழியை கண்டறிந்தீர்களா, புதியதை கற்றீர்களா அல்லது எங்கள் திட்டத்திற்கு யோசனை உள்ளதா? கேட்க விரும்புகிறோம்.",
      form: {
        name: "பெயர்",
        namePlaceholder: "குமார் ராஜா",
        email: "மின்னஞ்சல்",
        emailPlaceholder: "kumar@example.com",
        subject: "பொருள்",
        subjectPlaceholder: "யோசனை, கேள்வி அல்லது கருத்து…",
        message: "செய்தி",
        messagePlaceholder: "உங்கள் கருத்தை சொல்லுங்கள்…",
        errorName: "உங்கள் பெயரை உள்ளிடவும் (குறைந்தது 2 எழுத்துகள்).",
        errorEmail: "சரியான மின்னஞ்சல் முகவரியை உள்ளிடவும்.",
        errorSubject: "ஒரு பொருளை உள்ளிடவும் (குறைந்தது 3 எழுத்துகள்).",
        errorMessage: "ஒரு செய்தியை உள்ளிடவும் (குறைந்தது 10 எழுத்துகள்).",
        submit: "கருத்து அனுப்பு",
        sending: "அனுப்புகிறது…",
        success: "நன்றி! உங்கள் கருத்து அனுப்பப்பட்டது.",
        errorGeneric: "ஏதோ தவறு நடந்தது. மீண்டும் முயற்சிக்கவும்.",
      },
      details: {
        title: "ஏன் கேட்கிறோம்",
        response: "ஒவ்வொரு செய்தியையும் படிக்கிறோம்; பொதுவாக 24–48 மணிநேரத்தில் பதிலளிக்கிறோம்.",
      },
    },
    notFound: {
      code: "404",
      title: "பக்கம் கிடைக்கவில்லை",
      text: "நீங்கள் தேடும் பக்கம் இல்லை அல்லது நகர்த்தப்பட்டது.",
      cta: "முகப்புக்குத் திரும்பு",
    },
    errorPage: {
      code: "500",
      title: "ஏதோ தவறு நடந்தது",
      text: "எதிர்பாராத பிழை ஏற்பட்டது. சிறிது நேரம் கழித்து மீண்டும் முயற்சிக்கவும்.",
      cta: "மீண்டும் முயற்சி",
      home: "முகப்புக்குத் திரும்பு",
    },
    footer: {
      tagline: "பிளாஸ்டிக் கழிவுகளை தீர்வுகளாக மாற்றும் திட்டம்.",
      navigation: "வழிசெலுத்தல்",
      social: "சமூக இணைப்புகள்",
      rights: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
      madeWith: "மாணவர்களால், Next.js உடன் உருவாக்கப்பட்டது",
    },
    meta: {
      siteName: "Recycle Renegades",
      title: "Recycle Renegades — சுற்றுச்சூழல் விழிப்புணர்வு திட்டம்",
      description:
        "Recycle Renegades பிளாஸ்டிக் கழிவுகளும் கடல், கடல்வாழ் உயிரினங்கள் மீதான அதன் அமைதியான தாக்கம் குறித்த விழிப்புணர்வைப் பரப்புகிறது. நாங்கள் எவ்வாறு ஆய்வு செய்து, கற்பித்து, செயல்களை ஊக்குவிக்கிறோம் என்பதை அறியுங்கள்.",
      keywords: "மறுசுழற்சி, பிளாஸ்டிக் கழிவு, கடல் மாசுபாடு, கடல்வாழ் உயிரினங்கள், கடல், நிலைத்தன்மை, சூழல், காலநிலை செயல்",
    },
    home: {
      metaTitle: "முகப்பு — Recycle Renegades",
      metaDescription:
        "Recycle Renegades, முறையாக நிர்வகிக்கப்படாத பிளாஸ்டிக் கழிவுகள் கடல்வாழ் உயிரினங்களுக்கும் நமது கிரகத்திற்கும் அமைதியாக ஏற்படுத்தும் தீங்கு குறித்த விழிப்புணர்வைப் பரப்புகிறது. நீங்கள் எப்படி மாற்றம் ஏற்படுத்தலாம் என்பதை அறியுங்கள்.",
    },
    workPage: {
      metaTitle: "ஆராய்ச்சி / எங்கள் பணி — Recycle Renegades",
      metaDescription:
        "எங்கள் திட்டத்தின் பின்னணி ஆராய்ச்சி மற்றும் பணியைப் பாருங்கள்: பிரிப்பு நிலையங்கள், கல்வி நடவடிக்கைகள், மற்றும் பிளாஸ்டிக்கை தீர்வுகளாக மாற்றும் தாக்கம்.",
    },
    aboutPage: {
      metaTitle: "எங்களைப் பற்றி — Recycle Renegades",
      metaDescription:
        "Recycle Renegades குழுவைத் தெரிந்துகொள்ளுங்கள், சிறிய பிளாஸ்டிக்குகள் கடல் சூழலில் ஏற்படுத்தும் அமைதியான தாக்கம் குறித்து நாங்கள் எப்படி விழிப்புணர்வைப் பரப்புகிறோம் என்பதைக் கண்டறியுங்கள்.",
    },
    feedbackPage: {
      metaTitle: "உங்கள் கருத்து — Recycle Renegades",
      metaDescription:
        "எங்கள் விழிப்புணர்வு திட்டம் குறித்து Recycle Renegades குழுவுடன் உங்கள் கருத்தையோ யோசனைகளையோ பகிருங்கள்.",
    },
    credits: {
      title: "நன்றியுரை",
      subtitle:
        "இந்த இணையதளத்திற்கும் நாங்கள் பயன்படுத்திய ஆதாரங்களுக்கும் பின்னால் உள்ளவர்கள், நிறுவனங்கள், கருவிகள்.",
      tools: {
        heading: "பயன்படுத்திய கருவிகள்",
        items: [
          { name: "Next.js", url: "https://nextjs.org" },
          { name: "React", url: "https://reactjs.org" },
          { name: "TypeScript", url: "https://www.typescriptlang.org" },
          { name: "Tailwind CSS", url: "https://tailwindcss.com" },
          { name: "Helmet", url: "https://helmetjs.github.io" },
          { name: "Microsoft Copilot", url: "https://copilot.microsoft.com" },
          { name: "opencode", url: "https://opencode.ai" },
        ],
      },
      sources: {
        heading: "மூலங்கள் மற்றும் உத்வேகம்",
        items: [
          {
            name: "ஐ.நா. சுற்றுச்சூழல் திட்டம் (UNEP)",
            role: "பவளப்பாறை மீட்டமைப்பு வெற்றிக் கதை",
            url: "https://www.unep.org/topics/ocean-seas-and-coasts/blue-ecosystems/coral-reefs",
          },
        ],
      },
    },
    creditsPage: {
      metaTitle: "நன்றியுரை — Recycle Renegades",
      metaDescription:
        "Recycle Renegades நன்றியுரை: குழு, மூலங்கள் மற்றும் இந்த பன்மொழி விழிப்புணர்வு திட்ட இணையதளத்தை உருவாக்க பயன்பட்ட தொழில்நுட்பம்.",
    },
    notFoundMeta: {
      metaTitle: "பக்கம் கிடைக்கவில்லை — Recycle Renegades",
      metaDescription: "நீங்கள் தேடும் பக்கம் இல்லை.",
    },
    errorMeta: {
      metaTitle: "பிழை — Recycle Renegades",
      metaDescription: "இந்தப் பக்கத்தில் எதிர்பாராத பிழை ஏற்பட்டது.",
    },
  },
  hi: {
    nav: {
      research: "शोध / हमारा काम",
      feedback: "आपकी प्रतिक्रिया",
      about: "हमारे बारे में",
      credits: "क्रेडिट्स",
      mainNav: "मुख्य नेविगेशन",
    },
    hero: {
      motto: "अनदेखे कचरे से, जनक्रिया तक",
      badge: "खामोश नुकसान को उजागर करने वाला एक प्रोजेक्ट — जो अक्सर नज़रअंदाज़ किया जाता है, उसकी ओर ध्यान आकर्षित करना।",
      title: "गलत तरीके से प्रबंधित प्लास्टिक ",
      titleAccent: "चुपचाप हमारी दुनिया को नुकसान पहुँचाता है",
      subtitle:
        "Recycle Renegades एक प्रोजेक्ट है जो हम सभी को प्रभावित करने वाले एक वैश्विक मुद्दे पर प्रकाश डालता है। गलत तरीके से प्रबंधित प्लास्टिक कचरा चुपचाप समुद्री जीवन और हमारे ग्रह को नुकसान पहुँचा रहा है। जानें हमने क्या खोजा और आप कैसे बदलाव ला सकते हैं।",
      ctaPrimary: "हमारा काम देखें",
      ctaSecondary: "हमारे बारे में",
    },
    features: {
      title: "हमारा प्रोजेक्ट क्या करता है",
      subtitle: "तीन लक्ष्य जो हम जो कुछ भी बनाते हैं उसका मार्गदर्शन करते हैं।",
      items: {
        accessible: {
          title: "गलत तरीके से प्रबंधित प्लास्टिक के कारणों पर शोध",
          description:
            "हमने एक प्रस्तुति और शोध दस्तावेज़ बनाया जो गलत तरीके से प्रबंधित प्लास्टिक के कारणों और समुद्री जीवन पर इसके खामोश प्रभाव को उजागर करता है।",
        },
        secure: {
          title: "जागरूकता बढ़ाना",
          description:
            "अपने Instagram के ज़रिए हमने बहुभाषी पोस्टर साझा किए ताकि दुनिया भर के दर्शकों तक पहुँचें और प्लास्टिक प्रदूषण के बारे में जागरूकता फैलाई जा सके।",
        },
        fast: {
          title: "वह प्रभाव जिस पर हम विश्वास करते हैं",
          description:
            "बदलाव संभव बनाने के लिए हम समुदाय के समर्थन पर निर्भर हैं। सर्वेक्षण वितरित करके, प्रतिक्रिया आमंत्रित करके और नए समाधान तलाशकर, हम इस मुद्दे से निपट रहे ज़िम्मेदार नागरिकों के रूप में मिलकर काम करना चाहते हैं।",
        },
      },
    },
    work: {
      resourcesTitle: "और देखें",
      gameBanner: {
        title: "हमारा वेब गेम खेलें",
        subtitle: "कचरा छाँटें, ढक्कनों को समुद्र तक पहुँचने से रोकें और समुद्री जीवन की रक्षा करें।",
        alt: "Recycle Renegades वेब गेम बैनर",
      },
      resources: {
        survey: {
          title: "सर्वेक्षण",
        },
        researchDocument: {
          title: "शोध दस्तावेज़",
        },
        successStory: {
          title: "सफलता की कहानी: UNEP प्रवाल भित्तियाँ बहाल कर रहा है",
        },
      },
    },
    about: {
      title: "हमारे बारे में",
      subtitle: "एक ढक्कन से शुरू होती जागरूकता।",
      intro:
        "हम Recycle Renegades हैं — वे लोग जो बताते हैं कि बोतल के ढक्कन जैसी छोटी चीज़ समुद्री पारिस्थितिकी को चुपचाप कैसे नुकसान पहुँचाती है। छोटे प्लास्टिक कूड़ेदानों से निकलकर नालों, नदियों और अंततः समुद्र तक पहुँचते हैं, जहाँ वे समुद्री जीवन को नुकसान पहुँचाते हैं। यह पल लगभग कोई नहीं देखता — इसलिए हम इसे दिखाई देने लायक बनाते हैं। Instagram पर हमारे सफ़र से जुड़े रहें (@recycle.renegades)।",
      headingApproach: "हमारा तरीका",
      approach:
        "हम शोध से शुरू करते हैं: पर्यावरण में पहुँचने वाले छोटे प्लास्टिक की मात्रा, समुद्र तक उनका सफ़र और समुद्री पारिस्थितिकी पर प्रभाव। फिर हम ज्ञान को कार्रवाई में बदलते हैं — छँटाई के उपकरण, शैक्षिक गतिविधियाँ और साझा करने योग्य सामग्री के ज़रिए, ताकि छोटे प्लास्टिक का अदृश्य नुकसान अनदेखा करना मुश्किल हो जाए।",
      team: {
        heading: "टीम से मिलें",
        items: [
          { name: "Samairah Panchal", role: "समूह प्रतिनिधि" },
          { name: "Dushyant Senthil Kumar", role: "टेक प्रमुख" },
          { name: "Vardaan Kulshreshtha", role: "शोध प्रमुख" },
          { name: "Rayyan Jafri", role: "क्रिएटिव प्रमुख" },
          { name: "Hemendra Naresh", role: "विषय एकीकरण प्रमुख" },
          { name: "Danish Sayed", role: "CAS प्रमुख" },
          { name: "Mohammed Ammaar Khan", role: "समूह सदस्य" },
        ],
      },
    },
    feedback: {
      title: "आपकी प्रतिक्रिया",
      subtitle:
        "छाँटने का बेहतर तरीका मिला, कुछ नया सीखा या हमारे प्रोजेक्ट के लिए कोई विचार? हम सुनना चाहेंगे।",
      form: {
        name: "नाम",
        namePlaceholder: "राहुल शर्मा",
        email: "ईमेल",
        emailPlaceholder: "rahul@example.com",
        subject: "विषय",
        subjectPlaceholder: "विचार, सवाल या टिप्पणी…",
        message: "संदेश",
        messagePlaceholder: "बताएँ क्या सोचते हैं…",
        errorName: "कृपया अपना नाम दर्ज करें (कम से कम 2 अक्षर)।",
        errorEmail: "कृपया एक मान्य ईमेल पता दर्ज करें।",
        errorSubject: "कृपया एक विषय दर्ज करें (कम से कम 3 अक्षर)।",
        errorMessage: "कृपया एक संदेश दर्ज करें (कम से कम 10 अक्षर)।",
        submit: "प्रतिक्रिया भेजें",
        sending: "भेजा जा रहा है…",
        success: "धन्यवाद! आपकी प्रतिक्रिया भेज दी गई है।",
        errorGeneric: "कुछ गलत हो गया। बाद में फिर से प्रयास करें।",
      },
      details: {
        title: "हम क्यों पूछते हैं",
        response: "हम हर संदेश पढ़ते हैं और आमतौर पर 24–48 घंटों के भीतर जवाब देते हैं।",
      },
    },
    notFound: {
      code: "404",
      title: "पेज नहीं मिला",
      text: "जिस पेज की आप तलाश कर रहे हैं वह मौजूद नहीं है या स्थानांतरित हो गया है।",
      cta: "होम पर वापस जाएँ",
    },
    errorPage: {
      code: "500",
      title: "कुछ गलत हो गया",
      text: "एक अप्रत्याशित त्रुटि हुई। कृपया कुछ देर बाद फिर से प्रयास करें।",
      cta: "पुनः प्रयास करें",
      home: "होम पर वापस जाएँ",
    },
    footer: {
      tagline: "प्लास्टिक कचरे को समाधान में बदलने वाला प्रोजेक्ट।",
      navigation: "नेविगेशन",
      social: "सोशल",
      rights: "सर्वाधिकार सुरक्षित।",
      madeWith: "विद्यार्थियों द्वारा, Next.js के साथ बनाया गया",
    },
    meta: {
      siteName: "Recycle Renegades",
      title: "Recycle Renegades — पर्यावरण जागरूकता प्रोजेक्ट",
      description:
        "Recycle Renegades प्लास्टिक कचरे और समुद्र तथा समुद्री जीवन पर इसके खामोश प्रभाव के बारे में जागरूकता बढ़ाता है। जानें कि हम कैसे शोध करते, सिखाते और कार्रवाई को प्रेरित करते हैं।",
      keywords: "रीसाइकिलिंग, प्लास्टिक कचरा, समुद्री प्रदूषण, समुद्री जीवन, समुद्र, स्थिरता, पर्यावरण, जलवायु कार्रवाई",
    },
    home: {
      metaTitle: "होम — Recycle Renegades",
      metaDescription:
        "Recycle Renegades गलत तरीके से प्रबंधित प्लास्टिक कचरे के समुद्री जीवन और हमारे ग्रह को होने वाले खामोश नुकसान के बारे में जागरूकता बढ़ाता है। जानें कि आप कैसे बदलाव ला सकते हैं।",
    },
    workPage: {
      metaTitle: "शोध / हमारा काम — Recycle Renegades",
      metaDescription:
        "हमारे प्रोजेक्ट के पीछे का शोध और काम देखें: छँटाई स्टेशन, शैक्षिक गतिविधियाँ और वह प्रभाव जो प्लास्टिक को समाधान में बदलता है।",
    },
    aboutPage: {
      metaTitle: "हमारे बारे में — Recycle Renegades",
      metaDescription:
        "Recycle Renegades समूह से मिलें और जानें कि हम समुद्री पारिस्थितिकी पर छोटे प्लास्टिक के खामोश प्रभाव के बारे में जागरूकता कैसे फैलाते हैं।",
    },
    feedbackPage: {
      metaTitle: "आपकी प्रतिक्रिया — Recycle Renegades",
      metaDescription:
        "हमारे जागरूकता प्रोजेक्ट के बारे में Recycle Renegades टीम को अपनी प्रतिक्रिया या विचार साझा करें।",
    },
    credits: {
      title: "क्रेडिट्स",
      subtitle:
        "इस वेबसाइट और हमारे द्वारा उपयोग किए गए संसाधनों के पीछे के लोग, संगठन और उपकरण।",
      tools: {
        heading: "उपयोग किए गए उपकरण",
        items: [
          { name: "Next.js", url: "https://nextjs.org" },
          { name: "React", url: "https://reactjs.org" },
          { name: "TypeScript", url: "https://www.typescriptlang.org" },
          { name: "Tailwind CSS", url: "https://tailwindcss.com" },
          { name: "Helmet", url: "https://helmetjs.github.io" },
          { name: "Microsoft Copilot", url: "https://copilot.microsoft.com" },
          { name: "opencode", url: "https://opencode.ai" },
        ],
      },
      sources: {
        heading: "स्रोत और प्रेरणा",
        items: [
          {
            name: "यूएन पर्यावरण कार्यक्रम (UNEP)",
            role: "प्रवाल भित्ति बहाली की सफलता की कहानी",
            url: "https://www.unep.org/topics/ocean-seas-and-coasts/blue-ecosystems/coral-reefs",
          },
        ],
      },
    },
    creditsPage: {
      metaTitle: "क्रेडिट्स — Recycle Renegades",
      metaDescription:
        "Recycle Renegades के क्रेडिट्स: टीम, स्रोत और इस बहुभाषी जागरूकता प्रोजेक्ट वेबसाइट को बनाने में प्रयुक्त तकनीक।",
    },
    notFoundMeta: {
      metaTitle: "पेज नहीं मिला — Recycle Renegades",
      metaDescription: "आपके द्वारा खोजा गया पेज मौजूद नहीं है।",
    },
    errorMeta: {
      metaTitle: "त्रुटि — Recycle Renegades",
      metaDescription: "इस पेज पर एक अप्रत्याशित त्रुटि हुई।",
    },
  },
};

export function getDictionary(locale: Locale): Dict {
  return dictionaries[locale];
}