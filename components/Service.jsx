"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram } from "react-icons/fa6";
import { GiTrade } from "react-icons/gi";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { SiShopify } from "react-icons/si";
import { BsWordpress } from "react-icons/bs";
import { TbCertificate } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { GiTeacher } from "react-icons/gi";

import Button1 from "@/components/Button1";

const services = [
    {
        id: 1,
        title: "Marketing",
        icon: <FaInstagram className="text-5xl text-emerald-500" />,
        description:
            "Your social media is a ghost town. Meanwhile, your ideal customers are buying from your competitors. We don’t just create content—we build sales pipelines. Bullish Pixel delivers a proven strategy that converts scrollers into buyers and drives real revenue. Stop wasting money. Start dominating.",
        mail: "For queries:",
        inner:'marketing@bullishpixel.com',    
        details: [
            {
                type: "heading",
                text: "1. Service Overview",
            },
            {
                type: "paragraph",
                text: "Social media is a battlefield for attention. Simply posting content isn't enough. To win, you need a strategic partner that knows how to cut through the noise and connect with the people who matter most.",
            },
            {
                type: "paragraph",
                text: "Bullish Pixel’s Social Media Marketing service is for ambitious businesses ready to transform their social channels into powerful growth engines. We move beyond vanity metrics to develop and execute data-backed strategies on platforms like Facebook, Instagram, and TikTok that generate tangible results—more leads, more sales, and a fiercely loyal community.",
            },

            {
                type: "heading",
                text: "2. Key Features & Benefits",
            },
            {
                type: "Subheading",
                text: "Platform-Specific Strategy",
            },
            {
                type: "pragraph",
                Benifit: "Benefit:",
                text: "We don't use a one-size-fits-all approach. Your strategy is tailored to each platform's unique audience and algorithm, ensuring your content resonates and performs.",
            },
            {
                type: "Subheading",
                text: "Content That Captivates & Converts",
            },
            {
                type: "pragraph",
                Benifit: "Benefit:",
                text: "From stunning visuals to engaging video, we create thumb-stopping content that reflects your brand and compels users to take action.",
            },
            {
                type: "Subheading",
                text: "Strategic Paid Advertising",
            },
            {
                type: "pragraph",
                Benifit: "Benefit:",
                text: "We maximize your ad spend with highly targeted campaigns designed to reach your ideal customers, drive traffic, and generate a measurable return on investment.",
            },
            {
                type: "Subheading",
                text: "Data-Driven Performance Analysis",
            },
            {
                type: "pragraph",
                Benifit: "Benefit:",
                text: "We track what matters. Our continuous analysis of key metrics allows us to refine your strategy in real-time, doubling down on what works and eliminating what doesn’t.",
            },
           
            {
                type: "Subheading",
                text: "Authentic Community Management",
            },
             {
                type: "pragraph",
                Benifit: "Benefit:",
                text: "We build real relationships. By actively engaging with your audience, we foster trust and turn followers into brand advocates who champion your business.",
            },
            {
                type: "heading",
                text: "3. How It Helps Clients Grow",
            },
            {
                type: "paragraph",
                text: "Our social media management is a direct line to your bottom line.",
            },
            {
                type: "pragraph",
                Benifit: "Increase Qualified Leads & Sales: ",
                text: "We use targeted campaigns and compelling offers to attract ready-to-buy customers, filling your pipeline with quality prospects.",
            },
            {
                type: "pragraph",
                Benifit: "Build Unbreakable Brand Loyalty: ",
                text: "By creating a authentic dialogue and valuable content, we transform casual followers into a dedicated community that chooses you, again and again.",
            },
            {
                type: "pragraph",
                Benifit: "Drive Targeted Website Traffic: ",
                text: "We don't just aim for likes; we craft strategies designed to pull your social audience off the platform and onto your website, where conversions happen.",
            },
            {
                type: "pragraph",
                Benifit: "Gain a Competitive Edge: ",
                text: "Our proactive and agile approach ensures you are always one step ahead of competitors, capitalizing on trends and opportunities as they arise.",
            },
            {
                type: "heading",
                text: "4. Why Choose Bullish Pixel",
            },
            {
                type: "paragraph",
                text: "We see social media through a business-growth lens, not just a content calendar."
            },
            {
                type: "pragraph",
                Benifit: "Results-First Mindset: ",
                text: "We are obsessed with your ROI. Every post, ad, and engagement tactic is tied to a specific business objective, ensuring your budget is an investment, not an expense."
            },
            {
                type: "pragraph",
                Benifit: "Creative & Strategic Fusion: ",
                text: "Our team is a blend of data analysts and creative storytellers. This means your campaigns are not only beautiful and engaging but also strategically sound and measurable."
            },
            {
                type: "pragraph",
                Benifit: "Transparent Reporting & Communication: ",
                text: `You'll never be left in the dark. We provide clear, easy-to-understand reports that show performance, progress, and exactly how our efforts are contributing to your goals.
`
            },
            {
                type: "pragraph",
                Benifit: "Agile & Adaptive Approach: ",
                text: `Social media changes fast. We constantly monitor platform updates and audience behavior, allowing us to pivot strategies quickly to ensure continued success.

`,
            },
            {
                type: "heading",
                text: "5. Related Sub-Services",
            },
            {
                type: "paragraph",
                text: `To build a comprehensive digital presence, we offer:

`,
            },
            {
                type: "pragraph",
                Benifit: "Social Media Advertising Management: ",
                text: `End-to-end management of your paid campaigns on all major social platforms.
`
            },
            {
                type: "pragraph",
                Benifit: "Content Creation & Video Production: ",
                text: `Professional in-house creation of photos, graphics, and engaging video content tailored for social feeds.

`
            },
            {
                type: "pragraph",
                Benifit: "Influencer & Creator Partnerships: ",
                text: `Strategic identification and management of partnerships to authentically expand your brand's reach.


`
            },
            {
                type: "pragraph",
                Benifit: "Social Media Audit & Strategy Development: ",
                text: `A deep-dive analysis of your current channels with a roadmap for optimized future growth.

`
            },
            {
                type: "pragraph",
                Benifit: "Community Management & Engagement: ",
                text: `Dedicated management of your comments, DMs, and interactions to build a vibrant online community.


`
            },
            {
                type: "pragraph",
                Benifit: "Social Commerce Setup: ",
                text: `Streamlining the path to purchase by setting up and optimizing your social storefronts on platforms like Instagram and Facebook.



`
            },

        ]
    },
    {
        id: 2,
        title: "Trading",
        icon: <GiTrade className="text-5xl text-emerald-500" />,
        description:
            "Tired of losing money to emotional trading? We replace guesswork with a proven system. Get AI-powered strategies, live market analysis, and expert training that turns your trades into consistent profits. This is your last stop before profitability.",
            mail: "For queries: ",
            inner:'trading@bullishpixel.com', 
        details: [
            {
                type: "heading",
                text: "1. Service Overview",
            },
            {
                type: "paragraph",
                text: "The financial markets are a battlefield of information. Without the right strategy and education, even the most promising opportunities can lead to losses. Success requires more than just luck; it demands a disciplined, informed, and technologically-advanced approach.",
            },
            {
                type: "paragraph",
                text: "Bullish Pixel provides a holistic trading ecosystem for aspiring and experienced traders alike. We offer structured trading trainings, AI-powered automation strategies, deep-dive crypto analysis, and curated financial news updates. This service is for individuals who are serious about transforming their trading from an emotional gamble into a strategic, data-driven business.",
            },

            {
                type: "heading",
                text: "2. Key Features & Benefits",
            },
            {
                type: "Subheading",
                text: "Structured Trading Foundation Courses",
            },
            {
                type: "pragraph",
                Benifit: "Benefit:",
                text: " Build an unshakable foundation. From basic terminology to advanced order types, our courses are designed to take you from novice to confident trader, eliminating costly beginner mistakes.",
            },
            {
                type: "Subheading",
                text: "AI-Powered Trading Automation",
            },
            {
                type: "pragraph",
                Benifit: "Benefit:",
                text: "Let data drive your decisions. We provide strategies and frameworks for automating your trading, helping to remove emotion, capture opportunities 24/7, and backtest strategies for proven performance.",
            },
            {
                type: "Subheading",
                text: "Actionable Crypto Analysis (Technical & Fundamental)",
            },
            {
                type: "pragraph",
                Benifit: "Benefit:",
                text: "Get beyond the hype. We deliver clear, actionable insights into market trends, on-chain data, and project fundamentals, so you can make informed entry and exit decisions.",
            },
            {
                type: "Subheading",
                text: "Curated, Impact-Focused News Updates",
            },
            {
                type: "pragraph",
                Benifit: "Benefit:",
                text: "Save time and cut through the noise. We filter the endless stream of financial news to deliver only the most market-moving updates, complete with analysis on potential trading implications.",
            },
           
            {
                type: "Subheading",
                text: "Live Sessions & Community Support",
            },
             {
                type: "pragraph",
                Benifit: "Benefit:",
                text: "Learn and trade alongside peers. Get your questions answered in real-time during live market analysis sessions and collaborate with a community of dedicated traders.",
            },
            {
                type: "heading",
                text: "3. How It Helps Clients Grow",
            },
            {
                type: "paragraph",
                text: "Our service is a direct investment in your financial literacy and trading performance.",
            },
            {
                type: "pragraph",
                Benifit: "Develop a Profitable Trader's Mindset: ",
                text: "Learn the psychological discipline required to manage risk, control emotions, and stick to a proven strategy, which is the cornerstone of long-term success.",
            },
            {
                type: "pragraph",
                Benifit: "Systematize Your Trading for Consistency: ",
                text: "Automation and clear strategies help you move from sporadic, emotionally-charged trades to a consistent, rule-based approach that can be scaled over time.",
            },
            {
                type: "pragraph",
                Benifit: "Make Confident, Informed Decisions: ",
                text: "With a solid education and real-time, analyzed data at your fingertips, you can enter and exit trades with greater conviction and clarity.",
            },
            {
                type: "pragraph",
                Benifit: "Optimize Your Time & Capital: ",
                text: "Our AI tools and filtered news save you hundreds of hours of research, allowing you to focus on execution and portfolio management.",
            },
            {
                type: "heading",
                text: "4. Why Choose Bullish Pixel",
            },
            {
                type: "paragraph",
                text: "We bridge the gap between theoretical knowledge and practical, profitable execution."
            },
            {
                type: "pragraph",
                Benifit: "Education Meets Technology: ",
                text: "We don't just teach you concepts; we show you how to leverage modern tools like AI to implement them effectively, giving you a significant edge."
            },
            {
                type: "pragraph",
                Benifit: "Practical, Real-World Focus: ",
                text: "Our training is built by traders, for traders. Every lesson, strategy, and analysis is designed with one goal: practical application in live markets."
            },
            {
                type: "pragraph",
                Benifit: "Transparent & Ethical Approach: ",
                text: `We believe in responsible trading. Our education emphasizes risk management and setting realistic expectations, unlike "get-rich-quick" schemes.`
            },
            {
                type: "pragraph",
                Benifit: "Continuous Learning Environment: ",
                text: `The markets evolve, and so do we. Your enrollment includes ongoing updates, live sessions, and access to new strategies, ensuring your skills remain relevant.
`,
            },
            {
                type: "heading",
                text: "5. Related Sub-Services",
            },
            {
                type: "paragraph",
                text: `To support your entire trading journey, we offer:

`,
            },
            {
                type: "pragraph",
                Benifit: "One-on-One Mentor Sessions: ",
                text: `Personalized coaching and strategy reviews with experienced traders to accelerate your learning curve.`
            },
            {
                type: "pragraph",
                Benifit: "Custom Trading Bot Development: ",
                text: ` For advanced traders, we offer bespoke development of AI trading bots tailored to your specific strategy and risk tolerance.
`
            },
            {
                type: "pragraph",
                Benifit: "Portfolio Management Workshops:  ",
                text: ` Learn advanced strategies for diversifying your assets, managing overall risk, and rebalancing your portfolio for long-term growth.

`
            },
            {
                type: "pragraph",
                Benifit: "Market Sentiment Analysis Reports: ",
                text: ` Weekly deep-dive reports analyzing social media and news sentiment to gauge market psychology and potential trend shifts.
`
            },
            {
                type: "pragraph",
                Benifit: "Advanced Technical Analysis Masterclass: ",
                text: ` Specialized training on complex indicators, chart patterns, and proprietary trading setups.

`
            },

        ]
    },
    {
        id: 3,
        title: "Custom Website Development",
        icon: <MdOutlineDeveloperMode className="text-5xl text-emerald-500" />,
        description:
            "Your competitors' websites are converting 3x more visitors than yours. We build custom, high-speed websites engineered to turn clicks into customers and stop revenue leaks. Your digital domination starts here.",
            mail: "For queries: ",
            inner:'webSolutions@bullishpixel.com',
         details: [
            {
                type: "heading",
                text: "1. Service Overview",
            },
            {
                type: "paragraph",
                text: "In today's digital arena, your website is your most valuable asset. It’s not just a digital brochure; it's your 24/7 salesperson, your brand's headquarters, and your strongest growth engine.",
            },
            {
                type: "paragraph",
                text: "Bullish Pixel specializes in custom website development for businesses that refuse to settle for generic. We build unique, scalable, and high-performing websites from the ground up—tailored precisely to your goals, your audience, and your vision for the future. This is for entrepreneurs, startups, and established brands who are ready to dominate their market online.",
            },

            {
                type: "heading",
                text: "2. Key Features & Benefits",
            },
            {
                type: "Subheading",
                text: "Tailored Strategy & Design",
            },
            {
                type: "pragraph",
                Benifit: "Benefit:",
                text: "Get a website that is an authentic extension of your brand, not a template clone. We ensure a unique user experience that captures attention and builds credibility from the first click.",
            },
            {
                type: "Subheading",
                text: "Future-Proof & Scalable Code",
            },
            {
                type: "pragraph",
                Benifit: "Benefit:",
                text: "Your website grows with your business. Our clean, robust codebase allows for easy updates and feature additions, protecting your investment long-term.",
            },
            {
                type: "Subheading",
                text: "Blazing-Fast Performance",
            },
            {
                type: "pragraph",
                Benifit: "Benefit:",
                text: "Speed is revenue. We optimize every line of code and every asset to ensure lightning-fast load times, reducing bounce rates and improving search engine rankings.",
            },
            {
                type: "Subheading",
                text: "Conversion-Focused Architecture",
            },
            {
                type: "pragraph",
                Benifit: "Benefit:",
                text: "Benefit: We design with your bottom line in mind. Intuitive navigation and strategic calls-to-action guide users seamlessly through a journey that is designed to convert.",
            },
           
            {
                type: "Subheading",
                text: "Mobile-First Development",
            },
             {
                type: "pragraph",
                Benifit: "Benefit:",
                text: "Reach your audience everywhere. Every website we build is flawlessly responsive, providing an optimal experience on any device, which is critical for both users and SEO.",
            },
            {
                type: "heading",
                text: "3. How It Helps Clients Grow",
            },
            {
                type: "paragraph",
                text: "A custom website from Bullish Pixel is a direct investment in your growth and profitability.",
            },
            {
                type: "pragraph",
                Benifit: "Increase Lead Generation & Sales: ",
                text: "By creating a user-centric journey focused on your key goals, we turn passive browsing into active inquiries and purchases.",
            },
            {
                type: "pragraph",
                Benifit: "Enhance Brand Authority & Trust: ",
                text: "A professional, high-quality website instantly builds credibility, making potential customers feel confident in choosing you over competitors.",
            },
            {
                type: "pragraph",
                Benifit: "Improve Operational Efficiency: ",
                text: "We can integrate with your CRM, booking systems, or internal tools, automating processes and saving you valuable time and resources.",
            },
            {
                type: "pragraph",
                Benifit: "Achieve Sustainable SEO Success: ",
                text: "A technically superior website, built with best practices from day one, gives you a strong foundation to climb search rankings and attract qualified traffic organically.",
            },
            {
                type: "heading",
                text: "4. Why Choose Bullish Pixel",
            },
            {
                type: "paragraph",
                text: "We’re more than developers; we’re growth partners."
            },
            {
                type: "pragraph",
                Benifit: "Partnership, Not Just a Project: ",
                text: "We take the time to deeply understand your business. You get a dedicated team invested in your success, offering strategic insights every step of the way."
            },
            {
                type: "pragraph",
                Benifit: "Technical Excellence Meets Business Acumen: ",
                text: "We don’t just write code—we solve business problems. Our solutions are technically sound and strategically aligned with your growth objectives."
            },
            {
                type: "pragraph",
                Benifit: "Uncompromising Quality & Support: ",
                text: `From the first sketch to post-launch, we maintain the highest standards of quality and provide reliable, ongoing support to ensure your continued success.`
            },
            {
                type: "pragraph",
                Benifit: "Transparent Process & Communication: ",
                text: `No surprises. We work with clear timelines, fixed budgets, and consistent updates, so you are always informed and in control.
`,
            },
            {
                type: "heading",
                text: "5. Related Sub-Services",
            },
            {
                type: "paragraph",
                text: `To complement your custom website, we offer a full suite of digital services:`,
            },
            {
                type: "pragraph",
                Benifit: "Website Redesign & Modernization: ",
                text: `Breathe new life into an outdated site with a modern, high-converting redesign.`
            },
            {
                type: "pragraph",
                Benifit: "E-Commerce Development:",
                text: `Build powerful, secure, and easy-to-manage online stores that drive sales.
`
            },
            {
                type: "pragraph",
                Benifit: "Web Application Development: ",
                text: `Create complex, interactive web applications for unique business processes or SaaS products.


`
            },
            {
                type: "pragraph",
                Benifit: "Headless CMS Development: ",
                text: `For ultimate flexibility and performance, we build decoupled front-ends powered by robust headless CMS platforms.
`
            },
            {
                type: "pragraph",
                Benifit: "Ongoing Maintenance & Support: ",
                text: `Keep your website secure, updated, and running smoothly with our proactive care plans.`
            },
            {
                type: "pragraph",
                Benifit: "Technical SEO Audits & Optimization: ",
                text: `Ensure your new site is perfectly tuned to rank highly on search engines from day one.`
            },

        ]
    },
    {
        id: 4,
        title: "Shopify Development",
        icon: <SiShopify className="text-5xl text-emerald-500" />,
        description:
            "Your Shopify store is leaking revenue. Basic templates create abandoned carts, not loyal customers. We build high-converting, custom Shopify stores engineered to maximize sales and build your brand. Stop losing money. Start dominating.",
             mail: "For queries: ",
             inner:'shopify@bullishpixel.com',
         details: [
            {
                type: "heading",
                text: "1. Service Overview",
            },
            {
                type: "paragraph",
                text: "A great e-commerce store is a revenue-generating asset, not just a digital storefront. While Shopify provides the powerful engine, it takes expert craftsmanship to build a store that truly reflects your brand and converts browsers into buyers.",
            },
            {
                type: "paragraph",
                text: "Bullish Pixel specializes in bespoke Shopify development. We transform the robust Shopify platform into a unique, high-performance sales machine tailored to your products and your audience. This is for visionary brands ready to move beyond basic templates and unlock the full revenue potential of their online business.",
            },

            {
                type: "heading",
                text: "2. Key Features & Benefits",
            },
            {
                type: "Subheading",
                text: "Custom, Brand-Focused Design",
            },
            {
                type: "pragraph",
                Benifit: "Benefit:",
                text: "Stand out in a crowded market. We create a unique visual identity that builds trust and memorability, moving far beyond generic themes to authentically represent your brand.",
            },
            {
                type: "Subheading",
                text: "Conversion-Optimized User Experience (UX)",
            },
            {
                type: "pragraph",
                Benifit: "Benefit:",
                text: "We design every pixel for profit. From intuitive navigation to a frictionless checkout, we systematically remove barriers to purchase, directly increasing your conversion rate.",
            },
            {
                type: "Subheading",
                text: "Strategic App Integration & Customization",
            },
            {
                type: "pragraph",
                Benifit: "Benefit:",
                text: "Extend your store's functionality without bloating it. We expertly integrate and customize the best Shopify apps for reviews, email marketing, and inventory to create a seamless operational flow.",
            },
            {
                type: "Subheading",
                text: "Mobile-First, Blazing-Fast Development",
            },
            {
                type: "pragraph",
                Benifit: "Benefit:",
                text: `The majority of shoppers are on mobile. We build with a "mobile-first" approach, ensuring a flawless and fast shopping experience on any device, which is critical for sales and SEO.`,
            },
           
            {
                type: "Subheading",
                text: "Ongoing Optimization & Scalability",
            },
             {
                type: "pragraph",
                Benifit: "Benefit:",
                text: "Your store is built to grow with you. We lay a clean, scalable technical foundation that allows for easy updates and can handle traffic spikes during your biggest sales.",
            },
            {
                type: "heading",
                text: "3. How It Helps Clients Grow",
            },
            {
                type: "paragraph",
                text: "A professionally developed Shopify store is a direct investment in your bottom line.",
            },
            {
                type: "pragraph",
                Benifit: "Maximize Sales & Average Order Value (AOV): ",
                text: "Through strategic design, upselling features, and a streamlined checkout, we create multiple paths to increase revenue per visitor.",
            },
            {
                type: "pragraph",
                Benifit: "Build a Recognizable, Trusted Brand: ",
                text: "A polished, professional storefront builds immediate credibility, justifying your price point and encouraging customer loyalty and repeat purchases.",
            },
            {
                type: "pragraph",
                Benifit: "Reduce Operational Friction: ",
                text: "By automating key processes and integrating your essential tools, we save you valuable time on order management, customer service, and inventory tracking.",
            },
            {
                type: "pragraph",
                Benifit: "Drive Qualified Traffic with Built-in SEO: ",
                text: "We build with search engine best practices at the core, helping your products rank higher and attract customers who are actively searching for what you sell.",
            },
            {
                type: "heading",
                text: "4. Why Choose Bullish Pixel",
            },
            {
                type: "paragraph",
                text: "We are Shopify experts who blend aesthetic design with commercial strategy."
            },
            {
                type: "pragraph",
                Benifit: "Commerce-First Mindset: ",
                text: "We are not just designers and developers; we are growth partners. Every decision we make is evaluated against one metric: will this help you sell more?"
            },
            {
                type: "pragraph",
                Benifit: "Deep Platform Expertise: ",
                text: "Our team lives and breathes Shopify. We know its nuances, its best practices, and how to leverage its full ecosystem to build a store that performs exceptionally."
            },
            {
                type: "pragraph",
                Benifit: "Speed-to-Market & Reliability: ",
                text: `We follow a streamlined, proven process to get your store to market efficiently without compromising on quality, ensuring a launch that is on time and on budget.`
            },
            {
                type: "pragraph",
                Benifit: "Dedicated Partnership: ",
                text: `You get a dedicated project team that becomes an extension of your own. We are committed to your long-term success, offering clear communication and expert guidance throughout.`,
            },
            {
                type: "heading",
                text: "5. Related Sub-Services",
            },
            {
                type: "paragraph",
                text: `To build a complete e-commerce engine, we offer:`,
            },
            {
                type: "pragraph",
                Benifit: "Shopify Store Setup & Migration: ",
                text: `Expertly launch a new store or seamlessly migrate your existing store from another platform (like WooCommerce or BigCommerce) to Shopify.`
            },
            {
                type: "pragraph",
                Benifit: "Custom Shopify App Development: ",
                text: `Build a bespoke app to solve a unique business challenge that off-the-shelf apps can't address.
`
            },
            {
                type: "pragraph",
                Benifit: "Shopify Plus Development: ",
                text: `Strategic development and implementation for high-volume brands on the enterprise-level Shopify Plus platform.
`
            },
            {
                type: "pragraph",
                Benifit: "Conversion Rate Optimization (CRO) Audits: ",
                text: `A data-driven analysis of your existing store with a detailed plan to identify and fix leaks in your sales funnel.

`
            },
            {
                type: "pragraph",
                Benifit: "E-Commerce Email Marketing Integration: ",
                text: `Set up and automate high-converting email flows (abandoned cart, welcome series) directly within the Shopify ecosystem.`
            },
            {
                type: "pragraph",
                Benifit: "Ongoing Shopify Maintenance & Support: ",
                text: `Proactive care plans to keep your store secure, updated, and running smoothly 24/7.`
            },

        ]
    },
    {
        id: 5,
        title: "Wordpress Development",
        icon: <BsWordpress className="text-5xl text-emerald-500" />,
        description:
            "Your WordPress site is slow, insecure, and failing to convert. Generic templates are killing your business growth. We build custom, high-speed WordPress websites engineered for maximum conversions and security. Your digital solution is here.",
            mail: "For queries:",
            inner:'wordpress@bullishpixel.com ',
         details: [
            {
                type: "heading",
                text: "1. Service Overview",
            },
            {
                type: "paragraph",
                text: `WordPress powers over 40% of the web for a reason: its potential is limitless. But unlocking that potential requires more than just a pre-made theme "it demands strategic design, clean code, and a deep understanding of how to transform this powerful platform into a business asset."`,
            },
            {
                type: "paragraph",
                text: "Bullish Pixel delivers enterprise-grade WordPress development for businesses that demand more. We build custom, secure, and high-converting websites that give you complete control without compromising on speed or sophistication. This is for marketers, entrepreneurs, and established brands who need a powerful digital presence that can evolve as quickly as they do.",
            },

            {
                type: "heading",
                text: "2. Key Features & Benefits",
            },
            {
                type: "Subheading",
                text: "Custom Theme Development",
            },
            {
                type: "pragraph",
                Benifit: "Benefit:",
                text: "Break free from template constraints. We code your website from the ground up for a 100% unique design that perfectly captures your brand and delivers a flawless user experience.",
            },
            {
                type: "Subheading",
                text: "Strategic Page Builder Implementation",
            },
            {
                type: "pragraph",
                Benifit: "Benefit:",
                text: "Gain unparalleled editing freedom without the bloat. We expertly build with Elementor Pro or other premium builders to create a flexible, easy-to-manage site that remains lightning-fast.",
            },
            {
                type: "Subheading",
                text: "Conversion-Focused Architecture",
            },
            {
                type: "pragraph",
                Benifit: "Benefit:",
                text: "We design every page with a purpose. From strategic call-to-action placement to intuitive navigation, we guide users on a journey that is designed to generate leads and sales.",
            },
            {
                type: "Subheading",
                text: "Enterprise-Level Security & Performance",
            },
            {
                type: "pragraph",
                Benifit: "Benefit:",
                text: `Sleep soundly knowing your site is secure and swift. We implement robust security protocols and rigorous performance optimization to protect your data and delight your visitors.`,
            },
           
            {
                type: "Subheading",
                text: "Scalable, Future-Proof Foundation",
            },
             {
                type: "pragraph",
                Benifit: "Benefit:",
                text: "Your website is built to grow with you. Our clean, well-documented code and logical structure make adding new features and functionality simple and cost-effective.",
            },
            {
                type: "heading",
                text: "3. How It Helps Clients Grow",
            },
            {
                type: "paragraph",
                text: "A Bullish Pixel WordPress website is a dynamic tool for business growth.",
            },
            {
                type: "pragraph",
                Benifit: "Increase Lead Generation & Conversions: ",
                text: "A strategically designed user journey minimizes friction and maximizes engagement, systematically turning visitors into valuable contacts and customers.",
            },
            {
                type: "pragraph",
                Benifit: "Establish Market Authority: ",
                text: "A fast, professional, and unique website instantly builds trust and credibility, positioning you as a leader in your industry and justifying premium pricing.",
            },
            {
                type: "pragraph",
                Benifit: "Achieve Top Search Engine Rankings: ",
                text: "Our technically superior builds, optimized for core web vitals and clean code, give you a powerful SEO advantage to attract consistent, organic traffic.",
            },
            {
                type: "pragraph",
                Benifit: "Reduce Long-Term Costs & Gain Independence: ",
                text: "With a intuitive backend and our comprehensive training, your team can easily manage content, reducing reliance on external developers for daily updates.",
            },
            {
                type: "heading",
                text: "4. Why Choose Bullish Pixel",
            },
            {
                type: "paragraph",
                text: "We treat WordPress as the powerful business platform it is, not just a simple blog tool."
            },
            {
                type: "pragraph",
                Benifit: "Strategic Partnership Approach: ",
                text: "We become an extension of your team, investing time to understand your business goals and user needs to ensure your website is a strategic asset, not just a digital brochure."
            },
            {
                type: "pragraph",
                Benifit: "Performance-Balanced Flexibility: ",
                text: "We strike the perfect balance. You get the easy-to-use content management system you want, without sacrificing the lightning-fast performance and security your business requires."
            },
            {
                type: "pragraph",
                Benifit: "Proactive Security Mindset: ",
                text: `Security is not an afterthought. We build with best practices from the start and offer ongoing maintenance to proactively protect your site from emerging threats.`
            },
            {
                type: "pragraph",
                Benifit: "Transparent Process & Pricing: ",
                text: `We believe in clarity. You'll receive a fixed-price quote, a detailed project timeline, and consistent communication, so you're always informed and in control.`,
            },
            {
                type: "heading",
                text: "5. Related Sub-Services",
            },
            {
                type: "paragraph",
                text: `To complement your core WordPress website, we offer: `,
            },
            {
                type: "pragraph",
                Benifit: "WordPress Website Care & Maintenance: ",
                text: `Proactive security monitoring, updates, and performance checks to keep your site secure, fast, and healthy.`
            },
            {
                type: "pragraph",
                Benifit: "WordPress Website Redesign & Modernization: ",
                text: `Transform an outdated or underperforming site into a modern, conversion-focused powerhouse.
`
            },
            {
                type: "pragraph",
                Benifit: "Custom Plugin Development: ",
                text: `Build a bespoke WordPress plugin to add unique functionality that meets your specific business needs.`
            },
            {
                type: "pragraph",
                Benifit: "WooCommerce Development: ",
                text: `Create a powerful, custom-designed online store with all the functionality of WordPress and the power of WooCommerce.`
            },
            {
                type: "pragraph",
                Benifit: "WordPress Speed Optimization: ",
                text: `A specialized service to diagnose and fix performance issues, dramatically improving your site's load times and user experience.`
            },
            {
                type: "pragraph",
                Benifit: "Technical SEO Audit & Hardening: ",
                text: `A deep-dive analysis of your site's technical health and search engine readiness, with a clear action plan for improvement.`
            },

        ]
    },
    {
        id: 6,
        title: "LLC Ltd & Pvt",
        icon: <TbCertificate className="text-5xl text-emerald-500" />,
        description:
            "Stop letting legal complexities stall your global business dreams. We handle USA/UK/Pakistan company formation, tax compliance, and filings so you can focus on growth. Your complete business setup solution is here.",
            mail: "For queries: ",
            inner:'firmRegistration@bullishpixel.com',
        details: [
            {
                type: "heading",
                text: "1. Service Overview",
            },
            {
                type: "paragraph",
                text: `Turning your business idea into a legally recognized entity is a pivotal first step. But navigating the maze of international regulations, tax codes, and compliance requirements can be daunting, distracting you from what you do best—building your business.`,
            },
            {
                type: "paragraph",
                text: "Bullish Pixel provides a streamlined, expert-guided path to legally establish and maintain your company. From forming an LLC in the USA, a Ltd in the UK, or a (Pvt) Ltd in Pakistan, to managing your NTN, FBR filer status, and tax returns, we handle the bureaucratic heavy lifting. This is for global entrepreneurs, freelancers, and startups who demand a solid legal and financial foundation from day one.",
            },

            {
                type: "heading",
                text: "2. Key Features & Benefits",
            },
            {
                type: "Subheading",
                text: "End-to-End Company Formation",
            },
            {
                type: "pragraph",
                Benifit: "Benefit:",
                text: "Launch your business in the USA, UK, or Pakistan without the stress. We manage name reservation, document preparation, and government submissions for a smooth, hassle-free setup.",
            },
            {
                type: "Subheading",
                text: "Dedicated Compliance Manager",
            },
            {
                type: "pragraph",
                Benifit: "Benefit:",
                text: "You have a single point of contact. A dedicated expert guides you through the entire process, ensuring clarity and eliminating confusion across different jurisdictions.",
            },
            {
                type: "Subheading",
                text: "Pakistan-Specific Tax Specialization",
            },
            {
                type: "pragraph",
                Benifit: "Benefit:",
                text: "Navigate the FBR with confidence. We specialize in obtaining your NTN, securing Active Taxpayer/Filer status, and accurately submitting your annual returns to avoid penalties.",
            },
            {
                type: "Subheading",
                text: "Speed & Efficiency",
            },
            {
                type: "pragraph",
                Benifit: "Benefit:",
                text: `We know time is money. Our optimized processes and expertise significantly reduce processing times compared to navigating the complex government procedures on your own.`,
            },
           
            {
                type: "Subheading",
                text: "Transparent Pricing & Process",
            },
             {
                type: "pragraph",
                Benifit: "Benefit:",
                text: "No hidden fees or surprises. We provide a clear, upfront breakdown of all government and service fees, so you can budget with absolute confidence.",
            },
            {
                type: "heading",
                text: "3. How It Helps Clients Grow",
            },
            {
                type: "paragraph",
                text: "A proper legal and tax foundation isn't just about compliance—it's a strategic asset for growth.",
            },
            {
                type: "pragraph",
                Benifit: "Unlock Global Opportunities & Credibility: ",
                text: "A formally registered company (especially in the USA or UK) instantly elevates your brand's perception, making it easier to attract international clients, partners, and investment.",
            },
            {
                type: "pragraph",
                Benifit: "Protect Personal Assets: ",
                text: "Properly forming an LLC or Ltd company creates a legal separation between your business and personal assets, shielding you from personal liability.",
            },
            {
                type: "pragraph",
                Benifit: "Ensure Uninterrupted Operations: ",
                text: "Maintaining Active Taxpayer Status in Pakistan is crucial. It avoids hefty penalties, ensures eligibility for refunds, and allows you to conduct business smoothly (e.g., file IT returns, participate in tenders).",
            },
            {
                type: "pragraph",
                Benifit: "Focus on Your Core Business: ",
                text: "By outsourcing the complex administrative and legal tasks to us, you free up invaluable time and mental energy to focus on strategy, product development, and sales.",
            },
            {
                type: "heading",
                text: "4. Why Choose Bullish Pixel",
            },
            {
                type: "paragraph",
                text: "We bridge the gap between legal formalities and your entrepreneurial ambition."
            },
            {
                type: "pragraph",
                Benifit: "Multi-Jurisdictional Expertise: ",
                text: "Our unique understanding of business formation and tax laws across the USA, UK, and Pakistan makes us the single, trusted partner for your global ambitions."
            },
            {
                type: "pragraph",
                Benifit: "Technology-Driven Tracking: ",
                text: "We provide a clear dashboard to track the status of your application every step of the way, bringing transparency to a traditionally opaque process."
            },
            {
                type: "pragraph",
                Benifit: "Advisory-First Approach: ",
                text: `We don't just process paperwork; we advise you on the best structure for your goals and explain the "why" behind every step, empowering you as a business owner.`
            },
            {
                type: "pragraph",
                Benifit: "Long-Term Partnership Mindset: ",
                text: `We aim to be your lifelong compliance partner. From formation to annual returns and future expansions, we are here to support your journey at every stage.`,
            },
            {
                type: "heading",
                text: "5. Related Sub-Services",
            },
            {
                type: "paragraph",
                text: `To provide a complete business foundation, we offer: `,
            },
            {
                type: "pragraph",
                Benifit: "Registered Agent Services (USA): ",
                text: `A mandatory service for LLCs, providing a legal address and ensuring you never miss critical government notices.`
            },
            {
                type: "pragraph",
                Benifit: "Business Bank Account Opening Support: ",
                text: `Guidance and documentation preparation to help you open a corporate bank account for your new entity.`
            },
            {
                type: "pragraph",
                Benifit: "Trademark Registration: ",
                text: `Protect your brand name and logo legally in your key operating countries.`
            },
            {
                type: "pragraph",
                Benifit: "Accounting & Bookkeeping Setup: ",
                text: `Get your financial records started right with proper setup on cloud-based accounting software.`
            },
            {
                type: "pragraph",
                Benifit: "Virtual Office Address Solutions: ",
                text: `Establish a professional business address for mail handling and to enhance your company profile.`
            },
            {
                type: "pragraph",
                Benifit: "Annual Compliance Maintenance: ",
                text: `Let us handle your yearly filing requirements, annual returns, and secretary services to keep your company in good standing, year after year.`
            },

        ]
    },
    {
        id: 7,
        title: "Coaching/Tutoring",
        icon: <GiTeacher className="text-5xl text-emerald-500" />,
        description:
            "Bullish Pixel builds high-converting online platforms for tutors and coaches, boosting enrollments, revenue, and student satisfaction with seamless management and scalable solutions.",
             mail: "For queries:"
             ,
             inner:'coaching@bullishpixel.com ',
        details: [
            {
                type: "heading",
                text: "1. Service Overview",
            },
            {
                type: "paragraph",
                text: `In a world hungry for knowledge, your expertise is the key. But a great course alone isn't enough. You need a powerful online presence that attracts, convinces, and retains students.`,
            },
            {
                type: "paragraph",
                text: "Bullish Pixel specializes in crafting premium digital ecosystems for online tutors, coaching programs, and formal education providers. We merge strategic marketing with elegant technology to transform your educational vision into a scalable, profitable online school. This is for visionary educators and coaches who are ready to move beyond one-on-one sessions and build a legacy of learning.",
            },

            {
                type: "heading",
                text: "2. Key Features & Benefits",
            },
            {
                type: "Subheading",
                text: "Streamlined Student Onboarding & Management",
            },
            {
                type: "pragraph",
                Benifit: "Benefit:",
                text: "Reduce administrative overhead and create a seamless sign-up and learning experience that keeps students engaged from day one.",
            },
            {
                type: "Subheading",
                text: "High-Converting Website & Sales Funnels",
            },
            {
                type: "pragraph",
                Benifit: "Benefit:",
                text: "Turn more visitors into enrolled students with landing pages and user journeys designed to demonstrate value and drive action.",
            },
            {
                type: "Subheading",
                text: "Integrated Payment & Course Delivery Systems",
            },
            {
                type: "pragraph",
                Benifit: "Benefit:",
                text: "Get paid easily and deliver your content securely on a robust platform that grows with your course catalog.",
            },
            {
                type: "Subheading",
                text: "Content Strategy for Student Acquisition",
            },
            {
                type: "pragraph",
                Benifit: "Benefit:",
                text: `Attract a consistent flow of qualified leads with a content plan that positions you as a trusted authority in your niche.`,
            },
           
            {
                type: "Subheading",
                text: "Data-Driven Performance Analytics",
            },
             {
                type: "pragraph",
                Benifit: "Benefit:",
                text: "Make informed decisions with clear insights on student behavior, conversion rates, and revenue metrics.",
            },
            {
                type: "heading",
                text: "3. How It Helps Clients Grow",
            },
            {
                type: "paragraph",
                text: "We build the infrastructure for your growth, allowing you to focus on what you do best: teaching.",
            },
            {
                type: "pragraph",
                Benifit: "Increase Enrollment & Revenue: ",
                text: "Our conversion-optimized platforms are engineered to systematically grow your student base and maximize your earning potential.",
            },
            {
                type: "pragraph",
                Benifit: "Scale Your Operations Efficiently: ",
                text: "Automate enrollment, communication, and content delivery to serve more students without a proportional increase in your workload.",
            },
            {
                type: "pragraph",
                Benifit: "Build a Recognizable Brand: ",
                text: "Stand out in a crowded market with a professional, cohesive brand identity that builds trust and commands higher prices.",
            },
            {
                type: "pragraph",
                Benifit: "Boost Student Satisfaction & Retention: ",
                text: "A superior user experience leads to happier students, more positive reviews, and a higher lifetime value.",
            },
            {
                type: "heading",
                text: "4. Why Choose Bullish Pixel",
            },
            {
                type: "paragraph",
                text: "Choosing a partner for your online education business is a critical decision. Here’s why we are the definitive choice."
            },
            {
                type: "pragraph",
                Benifit: "We Speak Education & Business: ",
                text: "We understand the unique challenges of providing education online—from conveying intangible value to building learning communities. Our strategies are built for this specific market."
            },
            {
                type: "pragraph",
                Benifit: "Results-Focused Partnership: ",
                text: "We are not just order-takers; we are strategic partners. Your success is our success, and we are invested in achieving your growth targets."
            },
            {
                type: "pragraph",
                Benifit: "Premium Design with a Purpose: ",
                text: `Our designs are not just beautiful; they are meticulously crafted to guide user behavior, build trust, and remove friction from the student journey.`
            },
            {
                type: "pragraph",
                Benifit: "Proven Framework: ",
                text: `We have a battle-tested process for launching and scaling online education platforms that delivers predictable, positive outcomes.`,
            },
            {
                type: "heading",
                text: "5. Related Sub-Services",
            },
            {
                type: "paragraph",
                text: `To build a complete and dominant online presence, we offer:`,
            },
            {
                type: "pragraph",
                Benifit: "Educational Website & LMS Development: ",
                text: `Custom-built learning management systems and websites tailored to your pedagogical approach.`
            },
            {
                type: "pragraph",
                Benifit: "Sales Funnel Design & Optimization: ",
                text: `Mapping and building the entire customer journey from first click to course enrollment and beyond.`
            },
            {
                type: "pragraph",
                Benifit: "Branding & Visual Identity for Educators: ",
                text: `Branding & Visual Identity for Educators: Crafting a memorable brand that resonates with your target student demographic.`
            },
            {
                type: "pragraph",
                Benifit: "Content Marketing for Student Lead Generation: ",
                text: `Creating valuable blog posts, lead magnets, and email sequences that build your audience.`
            },
            {
                type: "pragraph",
                Benifit: "Paid Advertising Management (Meta/Google): ",
                text: `Driving targeted, ready-to-enroll traffic to your courses and coaching programs.`
            },

        ]
    },

];

const Servces = () => {
    const [selectedService, setSelectedService] = useState(null);

    return (
        <>
            {/* === Services Grid === */}
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="bg-[#1f1d1d] rounded-4xl md:h-[370px] p-4 md:p-6 hover:scale-[1.02] transition-all duration-300"
                    >
                        <div>
                            <div className="bg-[#2a2828] inline-block p-1.5 rounded-xl">
                                {service.icon}
                            </div>
                            <h2 className="font-bold text-2xl py-1">{service.title}</h2>
                        </div>

                        <p className="text-lg h-26 overflow-hidden mt-6 ">
                            {service.description}
                        </p>
                        <p className="md:text-lg font-black pt-1 text-gray-400">{service.mail} <span className="text-emerald-500">{service.inner}</span></p>
                        <div className="mt-3">
                            <Button1
                                onClick={() => setSelectedService(service)}
                                text="Explore more"
                                type="button"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* === Popup Modal with Animation === */}
            <AnimatePresence>
                {selectedService && (
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50"
                    >
                        <motion.div
                            key="modal"
                            initial={{ opacity: 0, scale: 0.8, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 50 }}
                            transition={{ type: "spring", stiffness: 120, damping: 15 }}
                            className="bg-[#1f1d1d] w-[80vw] h-[80vh] rounded-3xl p-5 md:p-8 relative shadow-xl overflow-y-auto"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedService(null)}
                                className="fixed top-4 right-4 bg-[#2a2828] hover:bg-emerald-600 transition-all p-2 rounded-full text-white"
                            >
                                <IoClose className="text-2xl" />
                            </button>

                            {/* Popup Content */}
                            <div className="flex flex-col items-start mt-6">
                                <div className="bg-[#2a2828] inline-block p-2 rounded-xl mb-3 md:mb-4">
                                    {selectedService.icon}
                                </div>
                                <h2 className="md:text-5xl text-2xl font-bold mb-2 text-emerald-400">
                                    {selectedService.title}
                                </h2>
                                <div>
                                    {selectedService.details.map((block, index) => {
                                        if (block.type === "heading")
                                            return <h1 key={index} className="text-xl md:text-3xl font-bold mt-4 mb-2 text-emerald-400">{block.text}</h1>;
                                        if (block.type === "Subheading")
                                            return <h5 key={index} className="text-lg text-red-400 font-bold mt-4 mb-2 ">{block.text}</h5>;
                                        if (block.type === "pragraph")
                                           return <p key={index} className=" text-gray-400 mb-3 leading-relaxed"><span className="text-white font-black text-lg">{block?.Benifit}</span> {block.text}</p>;
                                        if (block.type === "paragraph")
                                            return <p key={index} className="text-gray-400 text-lg mb-3 leading-relaxed">{block.text}</p>;


                                        return null;
                                    })}
                                </div>

                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Servces;
