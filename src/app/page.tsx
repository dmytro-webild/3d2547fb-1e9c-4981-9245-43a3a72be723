"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Award, Diamond, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="largeSizeMediumTitles"
        background="floatingGradient"
        cardStyle="solid"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "#home",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Collection",
          id: "#collection",
        },
        {
          name: "Reviews",
          id: "#reviews",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=pp8mzt"
      logoAlt="Zafira Luxury Logo"
      brandName="Zafira Luxury"
      bottomLeftText="Exquisite Craftsmanship"
      bottomRightText="info@zafiraluxury.com"
    />
  </div>

  <div id="home" data-section="home">
      <HeroCentered
      background={{
        variant: "radial-gradient",
      }}
      title="Experience Unmatched Elegance"
      description="Zafira Luxury presents a collection of handcrafted makhawir, blending timeless tradition with modern sophistication. Adorn yourself in art."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/young-man-wearing-blue-outfit-looking-happy_1298-197.jpg",
          alt: "Satisfied customer 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-african-american-woman-wearing-turtleneck-sweater-glasses-pink-background-smiling-looking-side-staring-away-thinking_839833-28201.jpg",
          alt: "Satisfied customer 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/woman-posing-with-trendy-hairstyle-medium-shot_23-2149883729.jpg",
          alt: "Satisfied customer 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-handsome-man-choosing-hat-shop_1303-19837.jpg",
          alt: "Satisfied customer 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-adult-wearing-folk-dance-costume_23-2149646799.jpg",
          alt: "Satisfied customer 5",
        },
      ]}
      avatarText="Loved by women across the globe."
      buttons={[
        {
          text: "Shop The Collection",
          href: "#collection",
        },
        {
          text: "Discover Our Craft",
          href: "#about",
        },
      ]}
      buttonAnimation="slide-up"
      marqueeItems={[
        {
          type: "text",
          text: "Handcrafted Excellence",
        },
        {
          type: "text-icon",
          text: "Luxury Fabrics",
          icon: Diamond,
        },
        {
          type: "text",
          text: "Bespoke Designs",
        },
        {
          type: "text-icon",
          text: "Timeless Beauty",
          icon: Sparkles,
        },
        {
          type: "text",
          text: "Artisanal Craftsmanship",
        },
        {
          type: "text-icon",
          text: "Global Clientele",
          icon: Award,
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Our Legacy of Luxury Craftsmanship"
      metrics={[
        {
          icon: Sparkles,
          label: "Years of Heritage",
          value: "20+",
        },
        {
          icon: Diamond,
          label: "Artisanal Hours",
          value: "1000s",
        },
        {
          icon: Award,
          label: "Satisfied Clients",
          value: "500+",
        },
      ]}
      metricsAnimation="blur-reveal"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "Exquisite Hand Embroidery",
          author: "Master Artisans",
          description: "Intricate patterns stitched with precision, reflecting generations of traditional craftsmanship and artistic vision.",
          tags: [
            "Handmade",
            "Unique",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/handmade-embroidery-folk-arts-crafts_469670-10.jpg",
          imageAlt: "Close-up of intricate hand embroidery",
        },
        {
          id: "f2",
          title: "Premium Fabric Selection",
          author: "Textile Experts",
          description: "Sourced from the finest mills globally, our luxurious silks, velvets, and chiffons offer unparalleled comfort and drape.",
          tags: [
            "Luxury",
            "Quality",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/elegant-silk-concept-with-copy-space_23-2148623322.jpg",
          imageAlt: "Flowing premium silk fabric",
        },
        {
          id: "f3",
          title: "Bespoke Tailoring & Fit",
          author: "Couture Tailors",
          description: "Every makhawir is crafted to your unique measurements, ensuring a perfect, flattering fit that celebrates your individuality.",
          tags: [
            "Custom",
            "Perfect Fit",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/woman-confectioner-making-gingerbread-sunflower-gingerbread-design_169016-19995.jpg",
          imageAlt: "Tailor working on a garment",
        },
      ]}
      title="The Art of Makhawir"
      description="Each Zafira Luxury makhawir is a masterpiece, meticulously designed and hand-sewn by master artisans, ensuring unparalleled quality and exclusivity."
    />
  </div>

  <div id="collection" data-section="collection">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Crimson Royale Makhawir",
          price: "$1,200",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-woman-wearing-sari_23-2149502984.jpg",
          imageAlt: "Crimson red makhawir with gold embroidery",
        },
        {
          id: "p2",
          name: "Azure Dream Makhawir",
          price: "$950",
          imageSrc: "http://img.b2bpic.net/free-photo/young-shaved-good-looking-caucasian-male-fashion-designer-stylish-outfit-working-new-blue-dress-spring-collection-his-workshop-artist-creating-beautiful-clothes-his-workshop_176420-11853.jpg",
          imageAlt: "Light blue makhawir with silver accents",
        },
        {
          id: "p3",
          name: "Golden Bloom Makhawir",
          price: "$1,500",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-texture-cream_23-2149409680.jpg",
          imageAlt: "Gold makhawir with floral patterns",
        },
        {
          id: "p4",
          name: "Emerald Opulence Makhawir",
          price: "$1,100",
          imageSrc: "http://img.b2bpic.net/free-photo/young-attractive-emotional-girl-business-style-chair-modern-office-audience_78826-2296.jpg",
          imageAlt: "Deep green makhawir with intricate beadwork",
        },
        {
          id: "p5",
          name: "Desert Rose Makhawir",
          price: "$880",
          imageSrc: "http://img.b2bpic.net/free-photo/intricate-gold-mosaic-facade-wat-phra-kaew-temple_1308-189361.jpg",
          imageAlt: "Soft pink makhawir with delicate lace",
        },
        {
          id: "p6",
          name: "Midnight Grandeur Makhawir",
          price: "$1,350",
          imageSrc: "http://img.b2bpic.net/free-photo/floral-mandala_23-2151843176.jpg",
          imageAlt: "Dark blue makhawir with crystal embellishments",
        },
      ]}
      title="Our Signature Collection"
      description="Explore our latest designs, featuring unique embellishments, luxurious silhouettes, and timeless elegance for every occasion."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Haute Couture Events",
        "Royal Collections",
        "Luxury Lifestyle Bloggers",
        "Bespoke Fashion Houses",
        "Elegant Boutiques",
        "Global Fashion Weeks",
        "Exclusive Clientele",
      ]}
      title="Trusted by Fashion Connoisseurs"
      description="Our luxury makhawir adorn discerning women worldwide, featured in exclusive events and private collections, attesting to our unmatched quality and design."
      showCard={false}
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Fatima Al-Mansoori",
          date: "March 15, 2024",
          title: "Absolutely Breathtaking!",
          quote: "The makhawir from Zafira Luxury is truly a work of art. The embroidery is exquisite, and the fabric feels divine. I received countless compliments!",
          tag: "Exquisite Design",
          avatarSrc: "http://img.b2bpic.net/free-photo/side-view-business-woman-portrait-outdoors_23-2148603027.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/interior-designer-working-out-office_23-2150379234.jpg",
          imageAlt: "Fatima Al-Mansoori in Zafira Luxury Makhawir",
        },
        {
          id: "t2",
          name: "Amina Khan",
          date: "February 28, 2024",
          title: "Unmatched Quality & Elegance",
          quote: "I've never owned a garment of such high quality. The fit was perfect, and the attention to detail is simply phenomenal. A truly luxurious experience.",
          tag: "Premium Quality",
          avatarSrc: "http://img.b2bpic.net/free-photo/beautiful-young-woman-wearing-sari_23-2149502990.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/charming-caucasian-fair-haired-woman-posing-black-dress-near-cactus_197531-21044.jpg",
          imageAlt: "Amina Khan in Zafira Luxury Makhawir",
        },
        {
          id: "t3",
          name: "Layla Hassan",
          date: "January 20, 2024",
          title: "A Masterpiece of Tradition",
          quote: "Zafira Luxury beautifully blends tradition with modern style. My makhawir felt regal and unique. It's an investment in wearable art.",
          tag: "Cultural Fusion",
          avatarSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-home_23-2149412549.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/female-shop-seller-helping-woman-try-new-dress-tying-waistband-customer-choosing-clothes-fashion-store-buying-clothes-boutique-concept_74855-11698.jpg",
          imageAlt: "Layla Hassan in Zafira Luxury Makhawir",
        },
        {
          id: "t4",
          name: "Nadia Saeed",
          date: "December 10, 2023",
          title: "Perfect for Special Occasions",
          quote: "I wore my Zafira makhawir to a wedding, and it was the highlight of my ensemble. The comfort and elegance are unparalleled. Highly recommend!",
          tag: "Special Occasion",
          avatarSrc: "http://img.b2bpic.net/free-photo/close-up-little-red-riding-hood_23-2149165028.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/lady-with-wine_1157-8844.jpg",
          imageAlt: "Nadia Saeed in Zafira Luxury Makhawir",
        },
        {
          id: "t5",
          name: "Samira Omar",
          date: "November 5, 2023",
          title: "Beyond My Expectations!",
          quote: "From the moment I ordered to the exquisite packaging, everything was perfect. The makhawir itself is stunning, even more beautiful in person.",
          tag: "Exceptional Service",
          avatarSrc: "http://img.b2bpic.net/free-photo/woman-posing-indoors-front-view_23-2149884594.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/attractive-female-white-dress-poses-camera-sofa-with-lot-roses-around-her_132075-9672.jpg",
          imageAlt: "Samira Omar in Zafira Luxury Makhawir",
        },
      ]}
      title="Adored by Our Clients"
      description="Hear from our delighted customers who have experienced the unparalleled beauty, elegance, and bespoke service of Zafira Luxury makhawir."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "What fabrics are used in Zafira Luxury makhawir?",
          content: "We meticulously select only the finest luxury fabrics, including pure silk, opulent velvet, and delicate chiffon, ensuring both comfort and exquisite drape.",
        },
        {
          id: "q2",
          title: "Can I request a custom-designed makhawir?",
          content: "Yes, we offer bespoke tailoring and custom design services. Please contact our team with your vision, and our artisans will work with you to create your unique masterpiece.",
        },
        {
          id: "q3",
          title: "How should I care for my luxury makhawir?",
          content: "To maintain its beauty, we recommend dry cleaning for most of our makhawir. Specific care instructions are provided with each garment, depending on the fabric and embellishments.",
        },
        {
          id: "q4",
          title: "What is your shipping policy?",
          content: "We offer worldwide shipping with various options. Please refer to our Shipping Policy page for detailed information on delivery times and costs to your region.",
        },
        {
          id: "q5",
          title: "Do you offer international returns?",
          content: "Yes, we accept international returns within a specified period, provided the garment is in its original condition. Please consult our Returns Policy for full details and instructions.",
        },
      ]}
      sideTitle="Your Questions Answered"
      sideDescription="Browse our frequently asked questions about Zafira Luxury makhawir, from custom orders and sizing to fabric care and shipping details."
      faqsAnimation="slide-up"
      textPosition="right"
      showCard={true}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Connect With Us"
      title="Bespoke Service & Inquiries"
      description="Reach out to our team for personalized assistance, custom design requests, or any questions about our luxury collection. We are here to help."
      imageSrc="http://img.b2bpic.net/free-photo/business-lady-cafe-keeps-phone-planning-her-week-notebook_8353-5985.jpg"
      imageAlt="Elegant woman reaching out to an online form"
      mediaAnimation="opacity"
      mediaPosition="left"
      inputPlaceholder="Your Email Address"
      buttonText="Send Message"
      termsText="By sending a message, you agree to our Privacy Policy."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/still-life-waving-fabric-air_23-2151036763.jpg"
      imageAlt="Luxurious fabric texture background"
      logoText="Zafira Luxury"
      columns={[
        {
          title: "Collection",
          items: [
            {
              label: "All Makhawir",
              href: "#collection",
            },
            {
              label: "New Arrivals",
              href: "#collection",
            },
            {
              label: "Seasonal Styles",
              href: "#collection",
            },
          ],
        },
        {
          title: "About Us",
          items: [
            {
              label: "Our Story",
              href: "#about",
            },
            {
              label: "Craftsmanship",
              href: "#features",
            },
            {
              label: "Sustainability",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contact Us",
              href: "#contact",
            },
            {
              label: "Shipping & Returns",
              href: "#",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2025 Zafira Luxury. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
