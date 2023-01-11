export const FrameworkPages = {
  pages: [
    {
      label: "CSS Framework",
      tags: "framework,about,css,gettingstarted,install,npm,package,reactjs,webpack,tailwindcss,nodejs,config",
      url: "/design-system/about",
    },
    {
      label: "Prototype",
      tags: "framework,about,css,gettingstarted,install,npm,package,reactjs,webpack,tailwindcss,nodejs,config",
      url: "/prototype",
    },
    {
      label: "Comp library",
      tags: "reactjs,react,component library,comp library,components",
      url: "https://developers.gloot.com/component-library/?path=/story/docs-getting-started-quick-start--page",
    },
  ],
  sections: [
    {
      title: "Authentication",
      pages: [
        {
          label: "Login",
          url: "auth/login",
          query: "",
          tags: "auth,oauth,authentication,login,sign in",
        },
        {
          label: "Sign up",
          url: "auth/signup",
          query: "",
          tags: "auth,oauth,authentication,sign up,register",
        },
        {
          label: "Recover password",
          url: "auth/recoverpassword",
          query: "",
          tags: "auth,oauth,authentication,forgotten password,password,recover password,recovery",
        },
        {
          label: "Choose a nickname",
          url: "auth/nickname",
          query: "",
          tags: "auth,oauth,authentication,nickname,username",
        },
        {
          label: "Verify your age",
          url: "auth/age",
          query: "",
          tags: "auth,oauth,authentication,age verification,verification,date",
        },
        {
          label: "Confirm location",
          url: "auth/location",
          query: "",
          tags: "auth,oauth,authentication,location",
        },
        {
          label: "Verify your email location",
          url: "auth/emailverification",
          query: "",
          tags: "auth,oauth,authentication,email verification,verification",
        },
      ],
    },
    {
      title: "Home",
      pages: [
        {
          label: "Home",
          url: "home",
          query: "",
          tags: "home, start, index",
        },
        {
          label: "Loading",
          chip: "loading state",
          url: "home",
          query: "loading=true",
          tab: 1,
          new: false,
          tags: "home, start, index, claim, rewards, daily missions, loading, status",
        },
        {
          label: "Notifications",
          chip: "empty state",
          url: "home",
          query: "empty=true",
          tab: 1,
          new: false,
          tags: "home, start, notifications, empty state, no notifications",
        },
        {
          label: "No Brawls",
          chip: "empty state",
          url: "home",
          query: "nobrawls=true",
          tab: 1,
          new: false,
          tags: "home, start, notifications, empty state, no brawl, not in a brawl",
        },
        {
          label: "No clan",
          chip: "empty state",
          url: "home",
          query: "noclan=true",
          tab: 1,
          new: false,
          tags: "home, start, notifications, empty state, no clan, not in a clan",
        },
        {
          label: "Content card",
          chip: "extra",
          url: "home",
          query: "contentcard=true",
          tab: 1,
          new: false,
          tags: "home, start, index, claim, rewards, daily missions, content card, braze, marketing, status",
        },
        {
          label: "Claim daily rewards",
          chip: "modal",
          url: "home",
          query: "modalclaim=true",
          tab: 1,
          new: false,
          tags: "home, start, index, claim, rewards, daily missions, modal, prompt",
        },
        {
          label: "Claim mission rewards",
          chip: "modal",
          url: "home",
          query: "modalclaimmission=true",
          tab: 1,
          new: false,
          tags: "home, start, index, claim, rewards, daily missions, modal, prompt",
        },
        {
          label: "Edit favorite games",
          chip: "modal",
          url: "home",
          query: "modalfavoritegames=true",
          tab: 1,
          new: false,
          tags: "home, start, index, favorite games, preference, user, modal, prompt",
        },
        {
          label: "Download started",
          chip: "modal",
          url: "home",
          query: "modaldownloadstarted=true",
          tab: 1,
          new: false,
          tags: "home, start, index, favorite games, preference, user, modal, prompt, download, tracker, install, client",
        },
        {
          label: "Tournament schedule",
          chip: "modal",
          url: "home",
          query: "modaltournamentschedule=true",
          tab: 1,
          new: false,
          tags: "home, start, index, tournament schedule, agenda, upcoming, competition, modal, prompt",
          deprecated: true,
        },
      ],
    },
    {
      title: "Profile",
      pages: [
        {
          title: true,
          label: "Profile (self)",
          tab: 0,
        },
        {
          label: "Profile (self)",
          url: "profile/1",
          query: "",
          tags: "profile, view, user",
          tab: 1,
        },
        {
          label: "Profile (self, no clan)",
          url: "profile/1",
          query: "emptyclan=true",
          tags: "profile, view, user, empty state",
          tab: 1,
          new: false,
        },
        {
          label: "Achievements",
          url: "profile/1/achievements",
          query: "",
          tags: "profile, view, user, achievements, badges, level",
          tab: 2,
        },
        {
          label: "Achievement unlocked",
          chip: "modal",
          url: "profile/1/achievements?modalachievement=true",
          query: "",
          tags: "profile, view, user, achievements, badges, level, achievement unlocked, claim",
          tab: 3,
        },
        {
          title: true,
          label: "Profile (others)",
          tab: 0,
        },
        {
          label: "Profile (others)",
          url: "profile/2",
          query: "",
          tags: "profile, view, user",
          tab: 1,
        },
        {
          label: "Profile (no stats, no clan)",
          chip: "empty state",
          url: "profile/10",
          query: "",
          tags: "profile, view, user, empty state",
          tab: 1,
          new: false,
        },
        {
          title: true,
          label: "Profile settings",
          tab: 0,
        },
        {
          label: "Profile settings",
          url: "profile/settings",
          query: "",
          tags: "profile, edit, user, settings, form",
          tab: 1,
        },
        {
          label: "Profile settings (connected to Riot)",
          url: "profile/settings",
          query: "connected=true",
          tags: "profile, edit, user, settings, form, connected, game account, riot games",
          tab: 1,
        },
      ],
    },
    {
      title: "Clans",
      pages: [
        {
          label: "Clans listing",
          url: "clans",
          query: "",
          tags: "clan,team",
          tab: 0,
          new: false,
        },
        {
          label: "Clans search",
          url: "clans/search",
          query: "",
          tags: "clan, team, search, form, find",
          tab: 0,
          new: false,
        },
        {
          label: "Clans applications",
          url: "clans/1/applications",
          query: "",
          tags: "clan, team, applicants, application, accept, decline, form, listing",
          tab: 0,
          new: false,
        },
        {
          label: "Clans applications",
          chip: "empty state",
          url: "clans/1/applications",
          query: "empty=true",
          tags: "clan, team, applicants, application, accept, decline, form, listing, empty state",
          tab: 0,
          new: false,
        },
        {
          title: true,
          label: "Clan detail (self)",
          tab: 0,
        },
        {
          label: "Clan detail (self)",
          url: "clans/1",
          query: "",
          tags: "clan, team, self",
          tab: 1,
          new: false,
        },
        {
          label: "Clan detail (self) (no Brawls)",
          chip: "empty state",
          url: "clans/1",
          query: "empty=true",
          tags: "clan, team, empty state",
          tab: 1,
          new: false,
        },
        {
          title: true,
          label: "Clan detail (others)",
          tab: 0,
        },
        {
          label: "Clan detail (others)",
          url: "clans/2",
          query: "",
          tags: "clan, team",
          tab: 1,
          new: false,
        },
        {
          label: "Clan detail (others) (no Brawls)",
          chip: "empty state",
          url: "clans/2",
          query: "empty=true",
          tags: "clan, team, empty state",
          tab: 1,
          new: false,
        },
        {
          label: "Create clan",
          chip: "modal",
          url: "clans",
          query: "modalcreate=true",
          tags: "clan, team, modal, prompt",
          tab: 2,
          new: false,
        },
        {
          label: "Report message",
          chip: "modal",
          url: "clans/1",
          query: "modalreportmessage=true",
          tags: "clan, team, modal, prompt",
          tab: 2,
          new: false,
        },
        {
          label: "Gift tokens",
          chip: "modal",
          url: "clans/1",
          query: "modalgifttokens=true",
          tags: "clan, team, modal, prompt",
          tab: 2,
          new: false,
        },
      ],
    },
    {
      title: "Shop",
      pages: [
        {
          label: "Shop listing",
          url: "shop",
          query: "",
          tags: "shop, voucher, riot games, amazon, steam, drkn, ifood, reward",
          tab: 0,
        },
        {
          title: true,
          label: "Voucher details",
          tab: 0,
        },
        {
          label: "Voucher details",
          url: "shop/1",
          query: "",
          tags: "shop, voucher, riot games, amazon, steam, drkn, ifood, reward",
          tab: 1,
          new: false,
        },
        {
          label: "Voucher details (with banner)",
          url: "shop/2",
          query: "",
          tags: "shop, voucher, riot games, amazon, steam, drkn, ifood, reward",
          tab: 1,
          new: false,
        },
      ],
    },
    {
      title: "Premium",
      pages: [
        {
          label: "Premium",
          url: "premium",
          query: "",
          tags: "premium,",
          tab: 0,
        },
      ],
    },
    {
      title: "Wallet",
      pages: [
        {
          title: true,
          label: "Overview",
          tab: 0,
        },
        {
          label: "Overview",
          url: "wallet",
          query: "",
          tags: "wallet, rewards, transactions, payments",
          tab: 1,
        },
        {
          label: "Overview (alternative layout)",
          url: "wallet",
          query: "alternativelayout=true",
          tags: "wallet, rewards, transactions, payments",
          tab: 1,
        },
        {
          label: "Buy tokens",
          chip: "modal",
          url: "wallet",
          query: "modalbuytokens=true",
          tags: "wallet, rewards, transactions, payments, buy, tokens, shop, transaction, money, prompt, modal",
          tab: 2,
        },
        {
          label: "History",
          url: "wallet",
          query: "tab=history",
          tags: "wallet, rewards, history, transactions",
          tab: 0,
        },
        {
          label: "History",
          chip: "empty state",
          url: "wallet",
          query: "tab=history&empty=true",
          tags: "wallet, rewards, history, transactions, empty state",
          tab: 1,
        },
        {
          label: "Voucher",
          url: "wallet",
          query: "tab=voucher",
          tags: "wallet, rewards, history, transactions,voucher, redeem",
          tab: 0,
        },
      ],
    },
    {
      title: "Missions",
      pages: [
        {
          title: true,
          label: "Missions & rewards",
          tab: 0,
        },
        {
          label: "Missions & rewards",
          url: "valorant/missions",
          query: "",
          tags: "game, missions",
          tab: 1,
        },
        {
          label: "Missions & rewards (Steam banner)",
          url: "pubg/missions",
          query: "",
          tags: "game, missions",
          tab: 1,
          new: false,
        },
        {
          label: "How it works",
          url: "valorant/missions",
          query: "tab=how-it-works",
          tags: "game, missions, how it works, explanation",
          tab: 0,
        },
      ],
    },
    {
      title: "Brawls",
      pages: [
        {
          label: "Ongoing Brawls listing",
          url: "valorant/brawls",
          query: "",
          tags: "game, brawls",
          new: false,
        },
        {
          label: "Ongoing Brawls listing",
          chip: "free entry",
          url: "valorant/brawls",
          query: "freeentry=true",
          tags: "game, brawls, free entry, new user",
          tab: 1,
          new: false,
        },
        {
          label: "How it works",
          url: "valorant/brawls",
          query: "tab=how-it-works",
          tags: "game, brawls, how it works, explanation",
          new: false,
        },
        {
          label: "How it works video",
          chip: "modal",
          url: "valorant/brawls",
          query: "tab=how-it-works&modalvideo=true",
          tags: "game, brawls, how it works, explanation, modal, prompt",
          tab: 1,
          new: false,
        },
        {
          label: "Stryda rules",
          url: "valorant/brawls",
          query: "tab=rules",
          tags: "game, brawls, rules, explanation, cheating, accounts, player protection",
          new: false,
        },
        {
          label: "Your Brawl history",
          url: "valorant/brawls",
          query: "tab=history",
          tags: "game, listing, history, participation",
          new: false,
        },
        {
          label: "Your brawl matches",
          url: "valorant/brawls/1",
          query: "",
          tags: "game, brawls, matches, enrollment, token",
          tab: 1,
          new: false,
        },
        {
          label: "Before you play",
          chip: "modal",
          url: "valorant/brawls/1",
          query: "modalinfobeforeyouplay=true",
          tags: "game, brawls, matches, enrollment, token, modal, prompt",
          tab: 2,
          new: false,
        },
        {
          title: true,
          label: "Solo leaderboard",
          tab: 1,
        },
        {
          label: "Solo leaderboard",
          url: "valorant/brawls/1",
          query: "tab=solo-leaderboard",
          tags: "game, brawls, matches, enrollment, token, leaderboard, rewards, ranks, diamond, platinum, gold, silver, bronze",
          tab: 2,
          new: false,
        },
        {
          label: "Solo leaderboard",
          chip: "empty state",
          url: "valorant/brawls/1",
          query: "tab=solo-leaderboard&empty=true",
          tags: "game, brawls, matches, enrollment, token, leaderboard, rewards, ranks, diamond, platinum, gold, silver, bronze, empty state",
          tab: 2,
          new: false,
        },
        {
          label: "Solo leaderboard",
          chip: "free entry",
          url: "valorant/brawls/1",
          query: "tab=solo-leaderboard&freeentry=true",
          tags: "game, brawls, matches, enrollment, token, leaderboard, rewards, ranks, diamond, platinum, gold, silver, bronze, free entry, new user",
          tab: 2,
          new: false,
        },
        {
          label: "Solo leaderboard (with rewards to claim)",
          url: "valorant/brawls/1",
          query: "tab=solo-leaderboard&hasclaim=true",
          tags: "game, brawls, matches, enrollment, token, leaderboard, rewards, ranks, diamond, platinum, gold, silver, bronze, claim, rewards",
          tab: 2,
          new: false,
        },
        {
          label: "Clan leaderboard",
          url: "valorant/brawls/1",
          query: "tab=clan-leaderboard",
          tags: "game, brawls, matches, enrollment, token, leaderboard, rewards, ranks, diamond, platinum, gold, silver, bronze, clans, teams",
          tab: 1,
          new: false,
        },
        {
          title: true,
          label: "Rewards",
          tab: 1,
        },
        {
          label: "Rewards",
          url: "valorant/brawls/1",
          query: "tab=rewards",
          tags: "game, brawls, matches, enrollment, token, leaderboard, rewards, ranks, diamond, platinum, gold, silver, bronze, clans, teams, rewards",
          tab: 2,
          new: false,
        },
        {
          label: "Rewards (no clan)",
          url: "pubg/brawls/2",
          query: "tab=rewards&noclan=true",
          tags: "game, brawls, matches, enrollment, token, leaderboard, rewards, ranks, diamond, platinum, gold, silver, bronze, clans, teams, rewards, no clan rewards",
          tab: 2,
          new: false,
        },
        {
          label: "Rewards (no Showdown)",
          url: "valorant/brawls/1",
          query: "tab=rewards&noshowdown=true",
          tags: "game, brawls, matches, enrollment, token, leaderboard, rewards, ranks, diamond, platinum, gold, silver, bronze, clans, teams, rewards, no showdown, no tournaments",
          tab: 2,
          new: false,
        },
        {
          label: "Rewards (no Clan & Showdown)",
          url: "valorant/brawls/1",
          query: "tab=rewards&noclan=true&noshowdown=true",
          tags: "game, brawls, matches, enrollment, token, leaderboard, rewards, ranks, diamond, platinum, gold, silver, bronze, clans, teams, rewards, no showdown, no tournaments, no clan rewards",
          tab: 2,
          new: false,
        },
      ],
    },
    {
      title: "Tournaments",
      pages: [
        {
          label: "Ongoing Tournaments listing",
          url: "valorant/tournaments",
          query: "",
          tags: "game, tournaments, showdown, competition, skirmish, qualifiers, open",
          tab: 0,
          new: false,
          deprecated: true,
        },
        {
          label: "Ongoing Tournaments listing",
          chip: "empty state",
          url: "pubg/tournaments/",
          query: "empty=true",
          tags: "game, tournaments, showdown, competition, skirmish, qualifiers, open, empty state",
          tab: 0,
          tab: 1,
          new: false,
          deprecated: true,
        },
        {
          label: "Finished tournament listing",
          url: "valorant/tournaments/",
          query: "tab=finished",
          tags: "game, tournaments, showdown, competition, skirmish, qualifiers, open, listing, history, past",
          tab: 0,
          new: false,
          deprecated: true,
        },
        {
          label: "Finished tournament listing",
          chip: "empty state",
          url: "valorant/tournaments/",
          query: "tab=finished&empty=true",
          tags: "game, tournaments, showdown, competition, skirmish, qualifiers, open, listing, history, past, empty state",
          tab: 1,
          new: false,
          deprecated: true,
        },
        {
          label: "How it works",
          url: "valorant/tournaments/",
          query: "tab=how-it-works",
          tags: "game, tournaments, showdown, competition, skirmish, qualifiers, open, how it works, explanation",
          tab: 0,
          new: false,
          deprecated: true,
        },
        {
          title: true,
          label: "Tournament details",
          tab: 1,
          deprecated: true,
        },
        {
          title: true,
          label: "Overview",
          tab: 2,
          deprecated: true,
        },
        {
          label: "Overview",
          url: "valorant/tournaments/1",
          query: "tab=overview",
          tags: "game, tournaments, showdown, competition, skirmish, qualifiers, open, overview, register, solo, team, party",
          tab: 3,
          new: false,
          deprecated: true,
        },
        {
          label: "Overview (registered)",
          url: "valorant/tournaments/1",
          query: "tab=overview&registered=true",
          tags: "game, tournaments, showdown, competition, skirmish, qualifiers, open, overview, register, solo, team, party, registered",
          tab: 3,
          new: false,
          deprecated: true,
        },
        {
          label: "Add Discord",
          chip: "modal",
          url: "valorant/tournaments/1",
          query: "tab=overview&modaladddiscord=true",
          tags: "game, tournaments, showdown, competition, skirmish, qualifiers, open, overview, register, solo, team, party, registered, discord, modal, prompt",
          tab: 4,
          new: false,
          deprecated: true,
        },
        {
          label: "Leave party",
          chip: "modal",
          url: "valorant/tournaments/1",
          query: "tab=overview&modalleaveparty=true",
          tags: "game, tournaments, showdown, competition, skirmish, qualifiers, open, overview, register, solo, team, party, leave, quit, cancel, registered, discord, modal, prompt",
          tab: 4,
          new: false,
          deprecated: true,
        },
        {
          label: "Participants",
          url: "valorant/tournaments/1",
          query: "tab=participants",
          tags: "game, tournaments, showdown, competition, skirmish, qualifiers, open, overview, registered, participants, listing",
          tab: 2,
          new: false,
          deprecated: true,
        },
        {
          title: true,
          label: "Leaderboard",
          tab: 2,
          deprecated: true,
        },
        {
          label: "Leaderboard table",
          url: "pubg/tournaments/1",
          query: "tab=leaderboard",
          tags: "game, tournaments, showdown, competition, skirmish, qualifiers, open, overview, registered, participants, listing, winners, leaderboard, prize money",
          tab: 3,
          new: false,
          deprecated: true,
        },
        {
          label: "Leaderboard brackets",
          url: "valorant/tournaments/1",
          query: "tab=leaderboard",
          tags: "game, tournaments, showdown, competition, skirmish, qualifiers, open, overview, registered, participants, listing, winners, leaderboard, prize money",
          tab: 3,
          new: false,
          deprecated: true,
        },
        {
          label: "How to play",
          url: "valorant/tournaments/1",
          query: "tab=how-to-play",
          tags: "game, tournaments, showdown, competition, skirmish, qualifiers, open, explanation, how it works, how to play",
          tab: 2,
          new: false,
          deprecated: true,
        },
        {
          label: "Rules",
          url: "valorant/tournaments/1",
          query: "tab=rules",
          tags: "game, tournaments, showdown, competition, skirmish, qualifiers, open, explanation, rules, eligibility, consent, obligations, law",
          tab: 2,
          new: false,
          deprecated: true,
        },
      ],
    },
    {
      title: "Stats",
      pages: [
        {
          label: "Valorant stats",
          url: "valorant/stats",
          query: "",
          tags: "game, stats, valorant",
          new: false,
        },
        {
          label: "Valorant stats",
          chip: "empty state",
          url: "valorant/stats",
          query: "empty=true",
          tags: "game, stats, valorant",
          new: false,
          tab: 1,
        },
        
      ],
    },
  ],
};

export default FrameworkPages;