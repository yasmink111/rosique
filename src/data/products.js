
const products = [
    {
        id: "armani-luminous-silk-foundation",
        name: "Luminous Silk Perfect Glow Flawless Foundation",
        brand: "Giorgio Armani Beauty",
        category: "Foundation",
        price: 69,
        image:process.env.PUBLIC_URL+"/images/armani1.jpg",
        description: "Radiant lightweight foundation with buildable coverage"
    },

    {
        id: "huda-faux-filter-foundation",
        name: "FauxFilter Luminous Matte Foundation",
        brand: "Huda Beauty",
        category: "Foundation",
        price: 40,
        image:process.env.PUBLIC_URL+"/images/huda1.jpg",
        description: "Full coverage luminous matte foundation"
    },

    {
        id: "charlotte-airbrush-foundation",
        name: "Airbrush Flawless Longwear Foundation",
        brand: "Charlotte Tilbury",
        category: "Foundation",
        price: 49,
        image:process.env.PUBLIC_URL+ "/images/ct1.jpg",
        description: "Airbrushed flawless long-lasting foundation"
    },

    {
        id: "chanel-les-beiges-foundation",
        name: "Les Beiges Healthy Glow Foundation",
        brand: "Chanel Beauty",
        category: "Foundation",
        price: 70,
        image:process.env.PUBLIC_URL+"/images/chanel1.jpg",
        description: "Natural healthy glow hydrating foundation"
    },

    {
        id: "chanel-vitalumiere-foundation",
        name: "Vitalumière Aqua Ultra-Light Foundation",
        brand: "Chanel Beauty",
        category: "Foundation",
        price: 65,
        image:process.env.PUBLIC_URL+"/images/chanel3.jpg",
        description: "Ultra-light luminous complexion foundation"
    },

    {
        id: "dior-forever-foundation",
        name: "Dior Forever Skin Glow Foundation",
        brand: "Dior Beauty",
        category: "Foundation",
        price: 52,
        image:process.env.PUBLIC_URL+"/images/dior2.jpg",
        description: "Radiant transfer-proof skincare foundation"
    },

    {
        id: "gucci-eternite-foundation",
        name: "Éternité de Beauté Foundation",
        brand: "Gucci Beauty",
        category: "Foundation",
        price: 68,
        image:process.env.PUBLIC_URL+"/images/gucci1.jpg",
        description: "Luxury smoothing long-wear foundation"
    },

    {
        id: "haus-triclone-foundation",
        name: "Triclone Skin Tech Foundation",
        brand: "Haus Labs",
        category: "Foundation",
        price: 45,
        image:process.env.PUBLIC_URL+"/images/haus1.jpg",
        description: "Skincare-infused medium coverage foundation"
    },

    {
        id: "nars-sheer-glow-foundation",
        name: "Sheer Glow Foundation",
        brand: "NARS",
        category: "Foundation",
        price: 47,
        image:process.env.PUBLIC_URL+"/images/nars1.jpg",
        description: "Natural radiant glow foundation"
    },

    {
        id: "lancome-teint-idole-foundation",
        name: "Teint Idole Ultra Wear Foundation",
        brand: "Lancôme",
        category: "Foundation",
        price: 55,
        image: process.env.PUBLIC_URL+ "/images/lancome1.jpg",
        description: "24-hour full coverage foundation"
    },

    {
        id: "armani-power-fabric-concealer",
        name: "Power Fabric Longwear Concealer",
        brand: "Giorgio Armani Beauty",
        category: "Concealer",
        price: 42,
        image:process.env.PUBLIC_URL+ "/images/armani2.jpg",
        description: "Lightweight high coverage concealer"
    },

    {
        id: "elf-hydrating-camo-concealer",
        name: "Hydrating Camo Concealer",
        brand: "e.l.f. Cosmetics",
        category: "Concealer",
        price: 8,
        image:process.env.PUBLIC_URL+"/images/elf2.jpg",
        description: "Hydrating full coverage concealer"
    },

    {
        id: "nars-radiant-creamy-concealer",
        name: "Radiant Creamy Concealer",
        brand: "NARS",
        category: "Concealer",
        price: 32,
        image:process.env.PUBLIC_URL+"/images/nars2.jpg",
        description: "Creamy brightening concealer"
    },

    {
        id: "armani-neo-nude-blush",
        name: "Neo Nude A-Blush",
        brand: "Giorgio Armani Beauty",
        category: "Blush",
        price: 38,
        image:process.env.PUBLIC_URL+"/images/armani3.jpg",
        description: "Natural liquid blush with radiant finish"
    },

    {
        id: "nars-liquid-blush",
        name: "Liquid Blush",
        brand: "NARS",
        category: "Blush",
        price: 34,
        image:process.env.PUBLIC_URL+"/images/nars3.jpg",
        description: "Highly pigmented natural glow blush"
    },

    {
        id: "refy-cream-blush",
        name: "Cream Blush",
        brand: "REFY",
        category: "Blush",
        price: 20,
        image:process.env.PUBLIC_URL+"/images/refy2.jpg",
        description: "Creamy blendable blush"
    },

    {
        id: "chanel-joues-contraste-blush",
        name: "Joues Contraste Powder Blush",
        brand: "Chanel Beauty",
        category: "Blush",
        price: 40,
        image:process.env.PUBLIC_URL+"/images/chanel4.jpg",
        description: "Elegant silky powder blush"
    },

    {
        id: "haus-color-fuse-blush",
        name: "Color Fuse Blush Balm",
        brand: "Haus Labs",
        category: "Blush",
        price: 32,
        image:process.env.PUBLIC_URL+ "/images/haus2.jpg",
        description: "Cream blush balm with skin-like finish"
    },

    {
        id: "benefit-hoola-bronzer",
        name: "Hoola Matte Bronzer",
        brand: "Benefit Cosmetics",
        category: "Bronzer",
        price: 35,
        image:process.env.PUBLIC_URL+ "/images/benefit1.jpg",
        description: "Iconic matte bronzer"
    },

    {
        id: "nars-laguna-bronzer",
        name: "Laguna Bronzing Powder",
        brand: "NARS",
        category: "Bronzer",
        price: 38,
        image:process.env.PUBLIC_URL+"/images/nars4.jpg",
        description: "Sun-kissed bronzing powder"
    },

    {
        id: "refy-cream-bronzer",
        name: "Cream Bronzer",
        brand: "REFY",
        category: "Bronzer",
        price: 26,
        image:process.env.PUBLIC_URL+"/images/refy4.jpg",
        description: "Natural sculpting cream bronzer"
    },

    {
        id: "anastasia-glow-kit",
        name: "Glow Kit Highlighter Palette",
        brand: "Anastasia Beverly Hills",
        category: "Highlighter",
        price: 40,
        image:process.env.PUBLIC_URL+"/images/ana4.jpg",
        description: "Multi-shade glow highlighter palette"
    },

    {
        id: "haus-highlighter",
        name: "Bio-Radiant Gel Highlighter",
        brand: "Haus Labs",
        category: "Highlighter",
        price: 40,
        image:process.env.PUBLIC_URL+ "/images/haus4.jpg",
        description: "Radiant gel-powder highlighter"
    },

    {
        id: "charlotte-flawless-filter",
        name: "Hollywood Flawless Filter",
        brand: "Charlotte Tilbury",
        category: "Highlighter",
        price: 46,
        salePrice: 31,
        image:process.env.PUBLIC_URL+"/images/ct4.jpg",
        description: "Complexion booster and glow enhancer",
        borderColor: "#f6a0df"
    },

    {
        id: "huda-easy-bake-powder",
        name: "Easy Bake Loose Baking Powder",
        brand: "Huda Beauty",
        category: "Powder",
        price: 38,
        image:process.env.PUBLIC_URL+"/images/huda2.jpg",
        description: "Loose powder for smooth blurred finish"
    },

    {
        id: "gucci-face-powder",
        name: "Poudre De Beauté Face Powder",
        brand: "Gucci Beauty",
        category: "Powder",
        price: 62,
        image:process.env.PUBLIC_URL+"/images/gucci4.jpg",
        description: "Luxury soft-focus face powder"
    },

    {
        id: "anastasia-soft-glam-palette",
        name: "Soft Glam Eyeshadow Palette",
        brand: "Anastasia Beverly Hills",
        category: "Eyes",
        price: 32,
        image:process.env.PUBLIC_URL+"/images/ana3.jpg",
        description: "Neutral glam eyeshadow palette"
    },

    {
        id: "huda-obsessions-palette",
        name: "Obsessions Eyeshadow Palette",
        brand: "Huda Beauty",
        category: "Eyes",
        price: 29,
        image:process.env.PUBLIC_URL+"/images/huda3.jpg",
        description: "Highly pigmented compact eyeshadow palette"
    },

    {
        id: "elf-bite-size-palette",
        name: "Bite-Size Eyeshadow Palette",
        brand: "e.l.f. Cosmetics",
        category: "Eyes",
        price: 5,
        image:process.env.PUBLIC_URL+"/images/elf4.jpg",
        description: "Mini affordable eyeshadow palette"
    },

    {
        id: "dior-backstage-palette",
        name: "Backstage Eyeshadow Palette",
        brand: "Dior Beauty",
        category: "Eyes",
        price: 48,
        salePrice: 38,
        image:process.env.PUBLIC_URL+"/images/dior3.jpg",
        description: "Professional multi-finish eyeshadow palette",
        borderColor: "#eeb09a"
    },


    {
        id: "armani-eyes-to-kill-mascara",
        name: "Eyes To Kill Classico Mascara",
        brand: "Giorgio Armani Beauty",
        category: "Mascara",
        price: 36,
        image:process.env.PUBLIC_URL+"/images/armani4.jpg",
        description: "Volumizing dramatic black mascara"
    },

    {
        id: "benefit-theyre-real-mascara",
        name: "They're Real Lengthening Mascara",
        brand: "Benefit Cosmetics",
        category: "Mascara",
        price: 28,
        image:process.env.PUBLIC_URL+"/images/benefit2.jpg",
        description: "Lengthening and lifting mascara"
    },

    {
        id: "dior-diorshow-mascara",
        name: "Diorshow Iconic Overcurl Mascara",
        brand: "Dior Beauty",
        category: "Mascara",
        price: 32,
        image:process.env.PUBLIC_URL+"/images/dior4.jpg",
        description: "Curling volumizing mascara"
    },

    {
        id: "lancome-hypnose-mascara",
        name: "Hypnôse Drama Mascara",
        brand: "Lancôme",
        category: "Mascara",
        price: 35,
        image:process.env.PUBLIC_URL+"/images/lancome2.jpg",
        description: "Instant full-body volume mascara"
    },

    {
        id: "gucci-mascara",
        name: "Mascara L'Obscur",
        brand: "Gucci Beauty",
        category: "Mascara",
        price: 38,
        image:process.env.PUBLIC_URL+"/images/gucci3.jpg",
        description: "Luxury buildable volume mascara"
    },

    {
        id: "charlotte-pillow-talk-lipstick",
        name: "Pillow Talk Matte Revolution Lipstick",
        brand: "Charlotte Tilbury",
        category: "Lips",
        price: 35,
        image:process.env.PUBLIC_URL+"/images/ct2.jpg",
        description: "Iconic nude pink matte lipstick"
    },

    {
        id: "huda-lip-contour",
        name: "Lip Contour 2.0 Lip Pencil",
        brand: "Huda Beauty",
        category: "Lips",
        price: 20,
        image:process.env.PUBLIC_URL+"/images/huda4.jpg",
        description: "Creamy long-lasting lip liner"
    },

    {
        id: "refy-lip-gloss",
        name: "Lip Gloss",
        brand: "REFY",
        category: "Lips",
        price: 18,
        image:process.env.PUBLIC_URL+"/images/refy3.jpg",
        description: "Hydrating high-shine lip gloss"
    },

    {
        id: "gucci-rouge-lipstick",
        name: "Rouge À Lèvres Satin Lipstick",
        brand: "Gucci Beauty",
        category: "Lips",
        price: 45,
        image:process.env.PUBLIC_URL+"/images/gucci2.jpg",
        description: "Luxury satin finish lipstick"
    },

    {
        id: "chanel-rouge-coco",
        name: "Rouge Coco Flash Lipstick",
        brand: "Chanel Beauty",
        category: "Lips",
        price: 45,
        image:process.env.PUBLIC_URL+"/images/chanel2.jpg",
        description: "Hydrating shine lipstick"
    },

    {
        id: "dior-lip-glow",
        name: "Dior Addict Lip Glow Balm",
        brand: "Dior Beauty",
        category: "Lips",
        price: 38,
        image:process.env.PUBLIC_URL+"/images/dior1.jpg",
        description: "Color-reviving hydrating lip balm"
    },

    {
        id: "lancome-juicy-tubes",
        name: "Juicy Tubes Original Lip Gloss",
        brand: "Lancôme",
        category: "Lips",
        price: 22,
        image:process.env.PUBLIC_URL+"/images/lancome3.jpg",
        description: "Classic ultra-shiny lip gloss"
    },
    {
        id: "haus-labs-lip-oil",
        name: "PhD Hybrid Lip Oil",
        brand: "Haus Labs",
        category: "Lips",
        price: 26,
        image:process.env.PUBLIC_URL+"/images/haus3.jpg",
        description: "hydrating shine"
    },
    {
        id: "charlotte-airbrush-setting-spray",
        name: "Airbrush Flawless Setting Spray",
        brand: "Charlotte Tilbury",
        category: "Setting Spray",
        price: 38,
        image:process.env.PUBLIC_URL+"/images/ct3.jpg",
        description: "Hydrating waterproof setting spray for long-lasting flawless makeup"
    },
    {
        id: "elf-putty-primer",

        name: "Poreless Putty Primer",

        brand: "e.l.f. Cosmetics",

        category: "Primer",

        price: 10,

        image:process.env.PUBLIC_URL+"/images/elf3.jpg",

        description: "Smooth blurring primer that minimizes pores and grips makeup"
    },
    {
        id: "elf-halo-glow-filter",

        name: "Halo Glow Liquid Filter",

        brand: "e.l.f. Cosmetics",

        category: "Foundation",

        price: 14,

        image:process.env.PUBLIC_URL+"/images/elf1.jpg",

        description: "Radiant liquid glow booster for a soft-focus luminous finish"
    },
    {
        id: "anastasia-brow-wiz",
        name: "Brow Wiz Ultra-Slim Brow Pencil",
        brand: "Anastasia Beverly Hills",
        category: "Brows",
        price: 25,
        image:process.env.PUBLIC_URL+ "/images/ana1.jpg",
        description: "Precision brow defining pencil"
    },

    {
        id: "anastasia-dipbrow",
        name: "Dipbrow Pomade",
        brand: "Anastasia Beverly Hills",
        category: "Brows",
        price: 23,
        image:process.env.PUBLIC_URL+ "/images/ana2.jpg",
        description: "Waterproof eyebrow pomade"
    },

    {
        id: "benefit-brow-pencil",
        name: "Precisely My Brow Pencil",
        brand: "Benefit Cosmetics",
        category: "Brows",
        price: 25,
        image:process.env.PUBLIC_URL+ "/images/benefit3.jpg",
        description: "Fine-tip brow shaping pencil"
    },

    {
        id: "refy-brow-sculpt",
        name: "Brow Sculpt Shape and Hold Gel",
        brand: "REFY",
        category: "Brows",
        price: 24,
        image:process.env.PUBLIC_URL+ "/images/refy1.jpg",
        description: "Laminated brow styling gel"
    },

    {
        id: "bioderma-sensibio-h2o",
        name: "Sensibio H2O Micellar Water",
        brand: "Bioderma",
        category: "Cleanser",
        price: 18,
        salePrice: 11,
        image:process.env.PUBLIC_URL+ "/images/bio1.jpg",
        description: "Gentle micellar cleansing water",
        borderColor: "#eb525d"
    },

    {
        id: "bioderma-atoderm-cream",
        name: "Atoderm Ultra-Nourishing Cream",
        brand: "Bioderma",
        category: "Moisturizer",
        price: 20,
        image:process.env.PUBLIC_URL+ "/images/bio2.jpg",
        description: "Deeply nourishing body moisturizer"
    },

    {
        id: "bioderma-sebium-gel",
        name: "Sébium Foaming Gel Cleanser",
        brand: "Bioderma",
        category: "Cleanser",
        price: 18,
        image:process.env.PUBLIC_URL+ "/images/bio3.jpg",
        description: "Purifying cleanser for oily skin"
    },

    {
        id: "bioderma-hydrabio-serum",
        name: "Hydrabio Hydrating Concentrate Serum",
        brand: "Bioderma",
        category: "Serum",
        price: 22,
        image:process.env.PUBLIC_URL+ "/images/bio4.jpg",
        description: "Intense hydration facial serum"
    },

    {
        id: "glow-recipe-watermelon-toner",
        name: "Watermelon Glow PHA+BHA Toner",
        brand: "Glow Recipe",
        category: "Toner",
        price: 35,
        image:process.env.PUBLIC_URL+ "/images/glow1.jpg",
        description: "Hydrating exfoliating glow toner"
    },

    {
        id: "glow-recipe-dew-drops",
        name: "Watermelon Glow Niacinamide Dew Drops",
        brand: "Glow Recipe",
        category: "Serum",
        price: 38,
        image:process.env.PUBLIC_URL+ "/images/glow2.jpg",
        description: "Brightening glow serum drops"
    },

    {
        id: "glow-recipe-plum-plump-cream",
        name: "Plum Plump Hyaluronic Cream",
        brand: "Glow Recipe",
        category: "Moisturizer",
        price: 39,
        image:process.env.PUBLIC_URL+ "/images/glow3.jpg",
        description: "Hydrating plumping moisturizer"
    },

    {
        id: "glow-recipe-avocado-cleanser",
        name: "Avocado Ceramide Cleanser",
        brand: "Glow Recipe",
        category: "Cleanser",
        price: 34,
        image:process.env.PUBLIC_URL+ "/images/glow4.jpg",
        description: "Barrier-support gentle cleanser"
    },

    {
        id: "lancome-genifique-serum",
        name: "Advanced Génifique Face Serum",
        brand: "Lancôme",
        category: "Serum",
        price: 78,
        salePrice: 64,
        image:process.env.PUBLIC_URL+ "/images/lancome4.jpg",
        description: "Youth activating glow boosting serum",
        borderColor: "#baac99"
    },

    {
        id: "kerastase-elixir-ultime-oil",
        name: "Elixir Ultime Hydrating Hair Oil",
        brand: "Kérastase",
        category: "Oil",
        price: 55,
        image:process.env.PUBLIC_URL+ "/images/ker1.jpg",
        description: "Shine-enhancing nourishing hair oil"
    },

    {
        id: "kerastase-resistance-shampoo",
        name: "Résistance Strengthening Shampoo",
        brand: "Kérastase",
        category: "Shampoo",
        price: 35,
        image:process.env.PUBLIC_URL+ "/images/ker2.jpg",
        description: "Strengthening shampoo for damaged hair"
    },

    {
        id: "kerastase-nutritive-mask",
        name: "Nutritive Intense Hydrating Hair Mask",
        brand: "Kérastase",
        category: "Mask",
        price: 60,
        salePrice: 53,
        image:process.env.PUBLIC_URL+ "/images/ker3.jpg",
        description: "Deep conditioning nourishing hair mask",
        borderColor: "#f5a98e"
    },

    {
        id: "kerastase-genesis-serum",
        name: "Genesis Anti Hair-Fall Fortifying Oil Serum",
        brand: "Kérastase",
        category: "Oil",
        price: 50,
        image:process.env.PUBLIC_URL+ "/images/ker4.jpg",
        description: "Fortifying anti-breakage scalp serum"
    },
    {
        id: "Chierosa-68-Mist",
        name: "Chierosa 68 Mist",
        brand: "Sol de Janeiro",
        category: "Fragrance",
        price: 48,
        salePrice: 38,
        image:process.env.PUBLIC_URL+ "/images/SDJprod1.jpg",
        description: "Refreshing mist for all skin types",
        borderColor: "#f497be"
    },
    {
        id: "sdj-brazilian-crush-mist",
        name: "Brazilian Crush Mist",
        brand: "Sol de Janeiro",
        category: "Fragrance",
        price: 38,
        image:process.env.PUBLIC_URL+ "/images/SDJprod2.jpg",
        description: "Warm and sweet body fragrance mist"
    },
    {
        id: "sdj-beija-flor-cream",
        name: "Beija Flor Cream",
        brand: "Sol de Janeiro",
        category: "Body Care",
        price: 48,
        image:process.env.PUBLIC_URL+ "/images/SDJprod3.jpg",
        description: "Collagen-boosting body cream for smooth glowing skin"
    }, {
        id: "sdj-body-scrub",
        name: "Body Scrub",
        brand: "Sol de Janeiro",
        category: "Body Care",
        price: 42,
        image:process.env.PUBLIC_URL+ "/images/SDJprod4.jpg",
        description: "Exfoliating scrub for soft smooth glowing skin"
    },
    {
    id: "benefit-benetint",
    name: "Benetint Cheek & Lip Stain",
    brand: "Benefit Cosmetics",
    category: "Lips",
    price: 26,
    image:process.env.PUBLIC_URL+ "/images/benefit4.jpg",
    description: "Iconic rose-tinted lip and cheek stain with a natural long-lasting flush"
}

];

const brandCards = [
    { id: "1", image:process.env.PUBLIC_URL+ "/images/homeCTilbury.jpg", name: "Charlotte Tilbury", description: "Effortless glow, timeless glamour", bgcolor: "#fbc8ed" },
    { id: "2", image:process.env.PUBLIC_URL+ "/images/homeSDJ.jpg", name: "Sol de Janeiro", description: "Radiance, warmth, and irresistable scent", bgcolor: "#f0e6f0" },
    { id: "3", image:process.env.PUBLIC_URL+ "/images/homeNars.jpg", name: "Nars", description: "Bold beauty that speaks for itself", bgcolor: "#d8b4b8" },
    { id: "4", image:process.env.PUBLIC_URL+ "/images/Armani-beauty.jpg", name: "Armani", description: "Refined elegance, perfected", bgcolor: "#eadbc8" },
    { id: "5", image:process.env.PUBLIC_URL+ "/images/homedior.jpg", name: "Dior", description: "Luxury, elegance in every detail", bgcolor: "#baac99" },
    { id: "6", image:process.env.PUBLIC_URL+ "/images/homeHB.jpg", name: "Huda Beauty", description: "Bold, flawless glam made to stand out", bgcolor: "#f5a98e" },
];
const buyMoreProducts = [
    { id: "1", image:process.env.PUBLIC_URL+ "/images/buy1.jpg", name: "Beija Flor Trio", brand: "Sol de Janeiro", description: "Glow & scent", price: 100, salePrice: 83, borderColor: "#ff8fab" },

    { id: "2", image:process.env.PUBLIC_URL+ "/images/buy3.jpg", name: "Gloss & Shine Hair Set", brand: "Kérastase", description: "Glossy hair", price: 130, salePrice: 108, borderColor: "#e5989b" },

    { id: "3", image:process.env.PUBLIC_URL+ "/images/buy6.jpg", name: "Holy Hydration Set", brand: "e.l.f Cosmetics", description: "Deep hydration", price: 50, salePrice: 33, borderColor: "#7ed7c1" },

    { id: "4", image:process.env.PUBLIC_URL+ "/images/buy5.jpg", name: "Watermelon Glow", brand: "Glow Recipe", description: "Dewy skin", price: 130, salePrice: 98, borderColor: "#b8c0ff" },

    { id: "5", image:process.env.PUBLIC_URL+ "/images/buy2.jpg", name: "Easy Blur Duo", brand: "Huda Beauty", description: "Flawless skin", price: 80, salePrice: 58, borderColor: "#ffb38a" },

    { id: "6", image:process.env.PUBLIC_URL+ "/images/buy7.jpg", name: "Flawless Complexion Set", brand: "Charlotte Tilbury", description: "Radiant finish", price: 120, salePrice: 94, borderColor: "#f5c97a" },
];

const SaleProducts = products.filter(product => product.salePrice);

export { products, brandCards, buyMoreProducts, SaleProducts };
