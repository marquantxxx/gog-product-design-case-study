import React from 'react';

// Asset URLs
const img = "https://www.figma.com/api/mcp/asset/38107d73-938a-4c9a-bfc6-6c05ea33cf65";
const img1 = "https://www.figma.com/api/mcp/asset/9ee961de-c2b8-4bd6-b56a-4914110cb210";
const img2 = "https://www.figma.com/api/mcp/asset/3dff6ccf-dce2-4f63-bae7-41b1acb0f73e";
const img3 = "https://www.figma.com/api/mcp/asset/7595f7ca-9d4b-432b-90e2-c25b31abeef6";
const img4 = "https://www.figma.com/api/mcp/asset/19cb7191-6617-48e6-8da7-a283f783b169";
const img5 = "https://www.figma.com/api/mcp/asset/e10d5540-ac9a-4a3b-bc7b-63c1326f5e41";
const img6 = "https://www.figma.com/api/mcp/asset/f9e03b7a-73e5-4224-b6e2-b03a62ad3f1e";
const img7 = "https://www.figma.com/api/mcp/asset/79ee3ddd-a3b4-43b0-a068-53029622b5ad";
const img8 = "https://www.figma.com/api/mcp/asset/2f16a980-b6d2-40ae-8d3b-c2d2843ab7d8";
const img9 = "https://www.figma.com/api/mcp/asset/c3f138bb-2516-4539-b4f1-0742d4689d90";
const img10 = "https://www.figma.com/api/mcp/asset/b6a83f36-8dfc-44d9-98af-336a18d54731";
const img11 = "https://www.figma.com/api/mcp/asset/2f24845c-430e-4f45-9e60-0a8bafd18a3e";
const imgIconAvatar = "https://www.figma.com/api/mcp/asset/0cecbe13-bc0d-4a2e-b8db-9e4d31d9f53c";

function IconAvatar({ className }) {
  return (
    <div className={className} data-name="Icon/avatar" data-node-id="9:290">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[9999px]">
        <div className="absolute bg-white inset-0 rounded-[9999px]" />
        <img alt="" className="absolute max-w-none object-[50%_50%] object-cover rounded-[9999px] size-full" src={imgIconAvatar} />
      </div>
    </div>
  );
}

export default function NavigationBar({ className }) {
  return (
    <div className={className} data-name="Navigation-bar" data-node-id="31:362">
      <div className="flex flex-row items-center size-full">
        <div className="box-border flex items-center justify-between px-12 py-6 relative size-full">
          <div className="flex gap-3 items-center relative shrink-0" data-node-id="31:309">
            <div className="overflow-clip relative shrink-0 size-12" data-name="Icon/logo" data-node-id="31:282">
              <div className="absolute bottom-[2.41%] left-0 right-0 top-[2.41%]" data-name="Vector" data-node-id="I31:282;5:140">
                <img alt="" className="block max-w-none size-full" src={img} />
              </div>
            </div>
            <div className="flex gap-2 items-center relative shrink-0" data-node-id="31:296">
              <div className="box-border flex gap-0.5 items-center justify-center px-3 py-2 relative shrink-0" data-name="Nav-item" data-node-id="31:284">
                <p className="font-normal leading-6 relative shrink-0 text-grey text-base" data-node-id="I31:284;9:110">
                  Store
                </p>
              </div>
              <div className="box-border flex gap-0.5 items-center justify-center px-3 py-2 relative shrink-0" data-name="Nav-item" data-node-id="31:290">
                <p className="font-normal leading-6 relative shrink-0 text-grey text-base" data-node-id="I31:290;9:110">
                  Library
                </p>
                <div className="overflow-clip relative shrink-0 size-6" data-name="Icon/icon-wrapper" data-node-id="I31:290;9:111">
                  <div className="absolute left-1/2 overflow-clip size-4 top-1/2 -translate-x-1/2 -translate-y-1/2" data-name="Icon/dropdown-arrow" data-node-id="I31:290;9:111;9:86">
                    <div className="absolute inset-0" data-name="Vector" data-node-id="I31:290;9:111;9:86;8:34">
                      <img alt="" className="block max-w-none size-full" src={img1} />
                    </div>
                    <div className="absolute inset-[37.5%_18.75%_31.25%_18.75%]" data-name="Vector" data-node-id="I31:290;9:111;9:86;8:35">
                      <div className="absolute inset-[-20%_-10%]" style={{ "--stroke-0": "rgba(175, 174, 174, 1)" }}>
                        <img alt="" className="block max-w-none size-full" src={img2} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-border flex gap-0.5 items-center justify-center px-3 py-2 relative shrink-0" data-name="Nav-item" data-node-id="31:297">
                <p className="font-normal leading-6 relative shrink-0 text-grey text-base" data-node-id="I31:297;9:110">
                  Community
                </p>
                <div className="overflow-clip relative shrink-0 size-6" data-name="Icon/icon-wrapper" data-node-id="I31:297;9:111">
                  <div className="absolute left-1/2 overflow-clip size-4 top-1/2 -translate-x-1/2 -translate-y-1/2" data-name="Icon/dropdown-arrow" data-node-id="I31:297;9:111;9:86">
                    <div className="absolute inset-0" data-name="Vector" data-node-id="I31:297;9:111;9:86;8:34">
                      <img alt="" className="block max-w-none size-full" src={img1} />
                    </div>
                    <div className="absolute inset-[37.5%_18.75%_31.25%_18.75%]" data-name="Vector" data-node-id="I31:297;9:111;9:86;8:35">
                      <div className="absolute inset-[-20%_-10%]" style={{ "--stroke-0": "rgba(175, 174, 174, 1)" }}>
                        <img alt="" className="block max-w-none size-full" src={img2} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-border flex gap-0.5 items-center justify-center px-3 py-2 relative shrink-0" data-name="Nav-item" data-node-id="31:303">
                <p className="font-normal leading-6 relative shrink-0 text-grey text-base" data-node-id="I31:303;9:110">
                  Support
                </p>
                <div className="overflow-clip relative shrink-0 size-6" data-name="Icon/icon-wrapper" data-node-id="I31:303;9:111">
                  <div className="absolute left-1/2 overflow-clip size-4 top-1/2 -translate-x-1/2 -translate-y-1/2" data-name="Icon/dropdown-arrow" data-node-id="I31:303;9:111;9:86">
                    <div className="absolute inset-0" data-name="Vector" data-node-id="I31:303;9:111;9:86;8:34">
                      <img alt="" className="block max-w-none size-full" src={img1} />
                    </div>
                    <div className="absolute inset-[37.5%_18.75%_31.25%_18.75%]" data-name="Vector" data-node-id="I31:303;9:111;9:86;8:35">
                      <div className="absolute inset-[-20%_-10%]" style={{ "--stroke-0": "rgba(175, 174, 174, 1)" }}>
                        <img alt="" className="block max-w-none size-full" src={img2} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 gap-4 items-center min-h-[1px] min-w-[1px] relative shrink-0" data-node-id="31:355">
            <button className="bg-neutral-3 cursor-pointer flex-1 min-h-[1px] min-w-[1px] relative rounded-[40px] shrink-0" data-name="Search-bar" data-node-id="31:329">
              <div className="flex flex-row items-center size-full">
                <div className="box-border flex gap-2 items-center px-4 py-5 relative w-full">
                  <div className="overflow-clip relative shrink-0 size-4" data-name="Icon/search" data-node-id="I31:329;9:240">
                    <div className="absolute inset-0" data-name="Vector" data-node-id="I31:329;9:240;9:196">
                      <img alt="" className="block max-w-none size-full" src={img1} />
                    </div>
                    <div className="absolute bottom-1/4 left-[12.5%] right-1/4 top-[12.5%]" data-name="Vector" data-node-id="I31:329;9:240;9:197">
                      <div className="absolute inset-[-10%]" style={{ "--stroke-0": "rgba(175, 174, 174, 1)" }}>
                        <img alt="" className="block max-w-none size-full" src={img3} />
                      </div>
                    </div>
                    <div className="absolute inset-[65.85%_12.5%_12.5%_65.85%]" data-name="Vector" data-node-id="I31:329;9:240;9:198">
                      <div className="absolute inset-[-28.865%]" style={{ "--stroke-0": "rgba(175, 174, 174, 1)" }}>
                        <img alt="" className="block max-w-none size-full" src={img4} />
                      </div>
                    </div>
                  </div>
                  <p className="font-normal leading-6 relative shrink-0 text-grey text-base w-[261px] whitespace-pre-wrap" data-node-id="I31:329;9:194">
                    Search for RPG games from the 90s...
                  </p>
                </div>
              </div>
            </button>
            <div className="flex gap-6 items-center justify-center relative shrink-0" data-node-id="31:336">
              <div className="overflow-clip relative shrink-0 size-8" data-name="Icon/heart" data-node-id="31:337">
                <div className="absolute inset-0" data-name="Vector" data-node-id="I31:337;9:292">
                  <img alt="" className="block max-w-none size-full" src={img5} />
                </div>
                <div className="absolute inset-[18.75%_9.38%_12.5%_9.38%]" data-name="Vector" data-node-id="I31:337;9:293">
                  <div className="absolute inset-[-4.55%_-3.85%]" style={{ "--stroke-0": "rgba(175, 174, 174, 1)" }}>
                    <img alt="" className="block max-w-none size-full" src={img6} />
                  </div>
                </div>
              </div>
              <div className="overflow-clip relative shrink-0 size-8" data-name="Icon/cart" data-node-id="31:338">
                <div className="absolute inset-0" data-name="Vector" data-node-id="I31:338;9:281">
                  <img alt="" className="block max-w-none size-full" src={img5} />
                </div>
                <div className="absolute bottom-[31.25%] left-1/2 right-1/2 top-[46.88%]" data-name="Vector" data-node-id="I31:338;9:282">
                  <div className="absolute inset-[-14.29%_-1px]" style={{ "--stroke-0": "rgba(175, 174, 174, 1)" }}>
                    <img alt="" className="block max-w-none size-full" src={img7} />
                  </div>
                </div>
                <div className="absolute inset-[9.38%_28.13%_65.63%_28.13%]" data-name="Vector" data-node-id="I31:338;9:283">
                  <div className="absolute inset-[-12.5%_-7.14%]" style={{ "--stroke-0": "rgba(175, 174, 174, 1)" }}>
                    <img alt="" className="block max-w-none size-full" src={img8} />
                  </div>
                </div>
                <div className="absolute inset-[46.88%_29.38%_31.25%_68.44%]" data-name="Vector" data-node-id="I31:338;9:284">
                  <div className="absolute inset-[-14.29%_-142.87%]" style={{ "--stroke-0": "rgba(175, 174, 174, 1)" }}>
                    <img alt="" className="block max-w-none size-full" src={img9} />
                  </div>
                </div>
                <div className="absolute inset-[46.88%_68.44%_31.25%_29.38%]" data-name="Vector" data-node-id="I31:338;9:285">
                  <div className="absolute inset-[-14.29%_-142.87%]" style={{ "--stroke-0": "rgba(175, 174, 174, 1)" }}>
                    <img alt="" className="block max-w-none size-full" src={img10} />
                  </div>
                </div>
                <div className="absolute inset-[34.38%_9.38%_18.75%_9.38%]" data-name="Vector" data-node-id="I31:338;9:286">
                  <div className="absolute inset-[-6.67%_-3.85%]" style={{ "--stroke-0": "rgba(175, 174, 174, 1)" }}>
                    <img alt="" className="block max-w-none size-full" src={img11} />
                  </div>
                </div>
              </div>
              <IconAvatar className="relative rounded-full shrink-0 size-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


