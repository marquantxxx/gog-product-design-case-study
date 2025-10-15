import React from 'react';
import NavigationBar from './components/NavigationBar';

// Hero image
const imgHeroImage = "https://www.figma.com/api/mcp/asset/50785f4c-12d8-4ab7-9934-7536a8d7e6f5";
const imgGogPreservation = "https://www.figma.com/api/mcp/asset/4bac8c5b-77f3-4554-9416-52579354304c";

// Game media images
const imgGameMediaImage = "https://www.figma.com/api/mcp/asset/b30af038-73d8-4b9f-b83d-a37dfa4ee5f8";
const imgGameMediaThumbnail = "https://www.figma.com/api/mcp/asset/9fb75b36-e694-4a28-a45f-3d35c3b66bbe";
const imgGameMediaThumbnail1 = "https://www.figma.com/api/mcp/asset/dc5a37c2-276e-467e-9c65-01afa48b4d88";
const imgGameMediaThumbnail2 = "https://www.figma.com/api/mcp/asset/9f4a8051-5db6-4861-8604-d312308fe53b";
const imgGameMediaThumbnail3 = "https://www.figma.com/api/mcp/asset/08bcee2a-0e8e-4b23-b4ca-1e1b197c2eb4";
const imgPlayCircle = "https://www.figma.com/api/mcp/asset/33d1d588-0983-4890-9f49-a0f89c0d0c11";
const imgGameMediaThumbnailsNavigation = "https://www.figma.com/api/mcp/asset/87aff2d5-ca68-4f14-8007-a74f15261a50";

// Icon images
const img12 = "https://www.figma.com/api/mcp/asset/b1cfb7a1-83a9-4cc1-ad1b-2acb0d89f52b";
const img13 = "https://www.figma.com/api/mcp/asset/c9f2265f-c8f2-47ca-a9fa-948ddbf281c8";
const img14 = "https://www.figma.com/api/mcp/asset/a4a030a7-5f70-4ff7-8490-f6ce8795b029";
const img15 = "https://www.figma.com/api/mcp/asset/3323c8bf-c15e-4c82-9551-23a01635e848";
const img16 = "https://www.figma.com/api/mcp/asset/18f4ec93-3b67-47ca-9436-eac4de6c1885";
const img17 = "https://www.figma.com/api/mcp/asset/5384f3f0-7bc3-4dc2-90de-053c25ab9aab";
const img18 = "https://www.figma.com/api/mcp/asset/8fd3af7a-16fd-4e66-aff9-5c4b043f3608";
const img19 = "https://www.figma.com/api/mcp/asset/cd65ef71-37fc-4b28-a7ff-9ffe2f2371c2";
const img20 = "https://www.figma.com/api/mcp/asset/b337890b-9c5a-4966-bda7-a9bd51435350";
const img21 = "https://www.figma.com/api/mcp/asset/1b1b3518-f2b9-456f-baf0-01787846e850";
const img22 = "https://www.figma.com/api/mcp/asset/eb3cc5eb-6075-48c7-bf84-d6cd4ac346d9";
const img23 = "https://www.figma.com/api/mcp/asset/ff6b5eed-196c-43e3-b878-e5c2295cec00";
const img28 = "https://www.figma.com/api/mcp/asset/07131d21-3b28-4c07-936f-d5c3d8d9da93";
const img29 = "https://www.figma.com/api/mcp/asset/f3c6c136-9e0c-4825-9c0e-ded7b3d651f1";
const img30 = "https://www.figma.com/api/mcp/asset/7595f7ca-9d4b-432b-90e2-c25b31abeef6";
const img31 = "https://www.figma.com/api/mcp/asset/19cb7191-6617-48e6-8da7-a283f783b169";

// Digital extras icons
const img32 = "https://www.figma.com/api/mcp/asset/b7ad5406-5efa-48ed-89d8-0e991b954f2f";
const img33 = "https://www.figma.com/api/mcp/asset/fe201e78-35a0-4629-9409-a88be18eb04c";
const img34 = "https://www.figma.com/api/mcp/asset/10356d51-d7c3-4b39-bce2-abfb23b5fb59";
const img35 = "https://www.figma.com/api/mcp/asset/17378b8c-0531-4757-bbd2-f042c3cea985";
const img36 = "https://www.figma.com/api/mcp/asset/19724c40-ea04-45d8-929b-8716ae70d2e5";
const img37 = "https://www.figma.com/api/mcp/asset/e77295a4-7c3c-41b3-8688-cd26d66989cf";
const img38 = "https://www.figma.com/api/mcp/asset/705ec44c-f2d0-46eb-82c0-2f60f3ce2e14";
const img39 = "https://www.figma.com/api/mcp/asset/a1009587-affb-4d7b-af82-bccc4210540d";
const img40 = "https://www.figma.com/api/mcp/asset/ea65ce68-38fc-4fe0-822a-af8b38dfcacd";
const img41 = "https://www.figma.com/api/mcp/asset/b1cfb7a1-83a9-4cc1-ad1b-2acb0d89f52b";

// Collector score
const imgEllipse9 = "https://www.figma.com/api/mcp/asset/50db22d6-535d-46c3-ad24-7d730216c4ba";
const imgEllipse10 = "https://www.figma.com/api/mcp/asset/d25c1ef6-f39b-4ecb-852b-d4d90c185ecb";

// AI icon
const img42 = "https://www.figma.com/api/mcp/asset/07131d21-3b28-4c07-936f-d5c3d8d9da93";
const img43 = "https://www.figma.com/api/mcp/asset/f3c6c136-9e0c-4825-9c0e-ded7b3d651f1";
const img44 = "https://www.figma.com/api/mcp/asset/7595f7ca-9d4b-432b-90e2-c25b31abeef6";
const img45 = "https://www.figma.com/api/mcp/asset/19cb7191-6617-48e6-8da7-a283f783b169";
const img46 = "https://www.figma.com/api/mcp/asset/e10d5540-ac9a-4a3b-bc7b-63c1326f5e41";

function App() {
  return (
    <div className="bg-neutral-1 min-h-screen w-full overflow-x-hidden">
      {/* Navigation Bar */}
      <NavigationBar className="bg-neutral-1 box-border flex items-center justify-between px-12 py-6 w-full fixed top-0 left-0 right-0 z-50" />
      
      {/* Main Content */}
      <div className="pt-24 relative">
        {/* Hero Section */}
        <div className="relative h-[645px] w-full mix-blend-color-dodge">
          <img alt="Heroes of Might and Magic 3" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity" src={imgHeroImage} />
        </div>

        {/* Product Info Overlay */}
        <div className="absolute top-[334px] left-12 max-w-[741px] z-10">
          {/* Title */}
          <div className="flex flex-col gap-4 mb-8">
            <h1 className="font-bold text-[40px] leading-[48px] text-white">
              Heroes of Might and Magic® 3: Complete
            </h1>
            <h2 className="font-bold text-2xl leading-8 text-white">
              By New World Computing, Inc. / Ubisoft
            </h2>
            <p className="font-bold text-2xl leading-8 text-white">
              DRM-Free Guarantee, Your Game, Forever.
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            <div className="bg-neutral-3 flex items-center gap-2 px-2 py-1 rounded-full">
              <div className="w-6 h-6 overflow-hidden">
                <img alt="" className="w-full h-full" src={img12} />
              </div>
              <p className="text-white text-base">1999</p>
            </div>
            <div className="bg-neutral-3 flex items-center gap-2 px-2 py-1 rounded-full">
              <div className="w-6 h-6 overflow-hidden">
                <img alt="" className="w-full h-full" src={img13} />
              </div>
              <p className="text-white text-base">RPG</p>
            </div>
            <div className="bg-neutral-3 flex items-center gap-2 px-2 py-1 rounded-full">
              <div className="w-6 h-6 overflow-hidden">
                <img alt="" className="w-full h-full" src={img14} />
              </div>
              <p className="text-white text-base">Multiplayer</p>
            </div>
            <div className="bg-neutral-3 flex items-center gap-2 px-2 py-1 rounded-full">
              <div className="w-6 h-6 overflow-hidden">
                <img alt="" className="w-full h-full" src={img15} />
              </div>
              <p className="text-white text-base">~152.5hrs Playtime</p>
            </div>
          </div>
          
          <p className="text-white text-sm mb-8">
            Game length provided by <span className="underline">HowLongToBeat</span>
          </p>

          {/* Pricing */}
          <div className="flex items-end gap-1 mb-2">
            <p className="text-grey text-base line-through">$9.99</p>
            <p className="text-white font-bold text-4xl">$2.99</p>
            <div className="bg-green px-1 py-0.5 rounded-full">
              <p className="text-white text-sm">75% Off</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mb-1">
            <button className="bg-primary px-2 py-2.5 rounded text-white text-base w-[230px]">
              Add to Collection
            </button>
            <button className="border border-primary px-2 py-2.5 rounded text-white text-base w-[230px]">
              Add to Wishlist
            </button>
          </div>

          {/* Offer End Date */}
          <div className="flex items-center gap-1">
            <div className="w-6 h-6 overflow-hidden animate-ring">
              <img alt="Timer" className="w-full h-full" src={img28} />
            </div>
            <p className="text-yellow-1 text-sm">Offer ends on: 18/10/2025 09:59 GMT</p>
          </div>

          {/* Preservation Info */}
          <div className="flex items-center gap-3 mt-4">
            <img alt="GOG Preservation" className="w-18 h-18" src={imgGogPreservation} />
            <p className="text-white text-base max-w-[456px]">
              This game is a Good Old Game. GOG maintains and preserves it as part of the Good Old Game....<span className="text-[#e3bfe0]">Read more</span>
            </p>
          </div>
        </div>

        {/* More Than Just the Game */}
        <div className="px-12 py-20 mt-[500px]">
          <div className="text-center mb-5">
            <h2 className="font-bold text-4xl leading-[44px] text-white mb-2">
              More Than Just the Game
            </h2>
            <p className="font-bold text-2xl leading-8 text-white">
              This GOG edition is preserved with exclusive digital extras:
            </p>
          </div>

          <div className="flex gap-6 justify-center">
            <div className="flex flex-col items-center gap-2 w-[318px] py-3">
              <div className="w-14 h-14 overflow-hidden">
                <img alt="" className="w-full h-full" src={img32} />
              </div>
              <p className="font-bold text-2xl text-white text-center">Game Manuals</p>
            </div>
            <div className="flex flex-col items-center gap-2 w-[318px] py-3">
              <div className="w-14 h-14 overflow-hidden">
                <img alt="" className="w-full h-full" src={img36} />
              </div>
              <p className="font-bold text-2xl text-white text-center">Original Soundtrack</p>
            </div>
            <div className="flex flex-col items-center gap-2 w-[318px] py-3">
              <div className="w-14 h-14 overflow-hidden">
                <img alt="" className="w-full h-full" src={img32} />
              </div>
              <p className="font-bold text-2xl text-white text-center">High-Resolution Maps</p>
            </div>
            <div className="flex flex-col items-center gap-2 w-[318px] py-3">
              <div className="w-14 h-14 overflow-hidden">
                <img alt="" className="w-full h-full" src={img40} />
              </div>
              <p className="font-bold text-2xl text-white text-center">HD Wallpapers</p>
            </div>
          </div>
        </div>

        {/* Game Media */}
        <div className="px-12 pb-20">
          <div className="relative h-[592px] w-full rounded-lg overflow-hidden mb-8">
            <img alt="Game Screenshot" className="absolute inset-0 w-full h-full object-cover" src={imgGameMediaImage} />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img alt="Play" className="w-32 h-32" src={imgPlayCircle} />
            </div>
          </div>

          <div className="flex gap-6 mb-6">
            <div className="relative h-[178px] w-[318px] rounded-lg overflow-hidden border-2 border-white">
              <img alt="Thumbnail" className="w-full h-full object-cover" src={imgGameMediaThumbnail} />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img alt="Play" className="w-12 h-12" src={imgPlayCircle} />
              </div>
            </div>
            <div className="h-[178px] w-[318px] rounded-lg overflow-hidden">
              <img alt="Thumbnail" className="w-full h-full object-cover" src={imgGameMediaThumbnail1} />
            </div>
            <div className="h-[178px] w-[318px] rounded-lg overflow-hidden">
              <img alt="Thumbnail" className="w-full h-full object-cover" src={imgGameMediaThumbnail2} />
            </div>
            <div className="h-[178px] w-[318px] rounded-lg overflow-hidden">
              <img alt="Thumbnail" className="w-full h-full object-cover" src={imgGameMediaThumbnail3} />
            </div>
          </div>

          <div className="flex justify-center">
            <img alt="Navigation" className="h-4 w-46" src={imgGameMediaThumbnailsNavigation} />
          </div>
        </div>

        {/* About this Classic */}
        <div className="max-w-[969px] mx-auto px-12 pb-20">
          <h2 className="font-bold text-4xl text-white text-center mb-4">About this Classic</h2>
          <p className="text-white text-base leading-6">
            When Erathia's King Gryphonheart is murdered by traitors he is resurrected as an undead warlord who leads a ruthless invasion of his former Kingdom. Little resistance is met until his daughter Catherine, Queen of Enroth, returns to her homeland commanding an army of elite Enrothian warriors. Meanwhile the Necromancers raise large hordes of undead and advance towards the Erathian capitol. Queen Catherine receives the aid of her father's survived generals and embarks on a crusade to reclaim her lost land. You control the greatest.... <span className="text-[#e3bfe0]">Read more</span>
          </p>
        </div>

        {/* Player Consensus */}
        <div className="max-w-[969px] mx-auto px-12 pb-20">
          <h2 className="font-bold text-4xl text-white text-center mb-4">The Player Consensus</h2>
          <div className="bg-neutral-2 border border-[#79797e] rounded-lg p-6 flex items-center gap-6">
            <div className="relative w-40 h-40 shrink-0">
              <img alt="" className="absolute inset-0" src={imgEllipse9} />
              <img alt="" className="absolute inset-0" src={imgEllipse10} />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="font-bold text-[40px] text-white">96</p>
                <p className="font-bold text-2xl text-white text-center">Collector Score</p>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap gap-3 mb-5">
                <div className="bg-green-3 px-3 py-2 rounded-full">
                  <p className="font-bold text-2xl text-green-2 text-center">Timeless Story (98%)</p>
                </div>
                <div className="bg-green-3 px-3 py-2 rounded-full">
                  <p className="font-bold text-2xl text-green-2 text-center">Iconic Soundtrack (96%)</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mb-5">
                <div className="bg-green-3 px-3 py-2 rounded-full">
                  <p className="font-bold text-2xl text-green-2 text-center">Timeless Story (98%)</p>
                </div>
                <div className="bg-yellow-2 px-3 py-2 rounded-full">
                  <p className="font-bold text-2xl text-yellow-1 text-center">Timeless Story (98%)</p>
                </div>
              </div>
              <div className="bg-neutral-3 px-2 py-1 rounded inline-block">
                <p className="text-white text-base">Read all 1,483 Reviews</p>
              </div>
            </div>
          </div>
        </div>

        {/* Collector's Note */}
        <div className="max-w-[969px] mx-auto px-12 pb-20">
          <h2 className="font-bold text-4xl text-white text-center mb-4">Collector's Note</h2>
          <div className="bg-neutral-3 rounded-lg p-4 mb-5">
            <p className="text-white text-base">
              "I first played Chrono Trigger in 1996. It wasn't just a game; it was a formative experience. GOG having this version... is like buying back a piece of my childhood."
            </p>
            <p className="text-white text-base">— a_time_traveler</p>
          </div>
          <button className="bg-gradient-to-b from-primary to-[#35203f] px-2 py-2.5 rounded flex items-center gap-2 mx-auto">
            <div className="w-6 h-6 overflow-hidden">
              <img alt="AI" className="w-full h-full" src={img28} />
            </div>
            <p className="text-white text-base">Generate Collector's Summary</p>
          </button>
        </div>

        {/* Technical Briefing */}
        <div className="max-w-[886px] mx-auto px-12 pb-20">
          <div className="text-center mb-4">
            <h2 className="font-bold text-4xl text-white mb-3">Technical Briefing</h2>
            <p className="font-bold text-2xl text-grey">Is your system ready for this classic adventure?</p>
          </div>
          
          <div className="bg-neutral-3 rounded-lg p-6 mb-2">
            <div className="flex gap-10">
              <div className="flex-1">
                <h3 className="font-bold text-2xl text-white border-b border-white pb-2 mb-2">Minimum</h3>
                <div className="space-y-2">
                  <p className="text-white text-base"><span className="font-bold">System</span>: Windows (10, 11)</p>
                  <p className="text-white text-base"><span className="font-bold">Processor</span>: 1.8 GHz</p>
                  <p className="text-white text-base"><span className="font-bold">Memory</span>: 2 GB RAM</p>
                  <p className="text-white text-base"><span className="font-bold">Graphics</span>: 3D graphics card compatible with DirectX 9.0c</p>
                  <p className="text-white text-base"><span className="font-bold">DirectX</span>: DirectX 9.0c</p>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-2xl text-white border-b border-white pb-2 mb-2">Recommended</h3>
                <div className="space-y-2">
                  <p className="text-white text-base"><span className="font-bold">System</span>: Windows (10, 11)</p>
                  <p className="text-white text-base"><span className="font-bold">Processor</span>: 2.5 GHz</p>
                  <p className="text-white text-base"><span className="font-bold">Memory</span>: 8 GB RAM</p>
                  <p className="text-white text-base"><span className="font-bold">Graphics</span>: NVIDIA GeForce GTX 760</p>
                  <p className="text-white text-base"><span className="font-bold">DirectX</span>: DirectX 12</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-2 text-center">
            <p className="text-white text-base mb-2">Languages Supported</p>
            <ul className="list-disc text-white text-base">
              <li className="ml-6">Audio: English,русский,polski,français</li>
              <li className="ml-6">Text: English,русский,polski,français</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

