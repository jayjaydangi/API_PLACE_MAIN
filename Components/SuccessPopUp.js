import React from 'react'

export default function SuccessPopUp({showSucsses, setshowSucsses}) {
    // const [showSucsses, setshowSucsses] = useState(true)
    return (
        <div className={`${showSucsses ? "" : "hidden"}`} style={{position:'fixed', top:"0px", right: '0px', zIndex:"100", fontSize:'16px'}}>
            <div className="w-[400px] my-0 mx-[!important] absolute top-[24px] right-[24px] rounded-radius-md bg-component-colors-utility-success-utility-success-100 overflow-hidden flex flex-row items-center justify-start py-spacing-lg px-container-padding-mobile box-border max-w-[1280px] z-[3]">
                <div className="flex-1 flex flex-row items-center justify-start gap-[0px_12px]">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[0px_16px]">
                        <img
                            className="w-5 relative rounded-9980xl h-5"
                            alt=""
                            src="/featured-icon-outline.svg"
                        />
                        <div className="flex-1 flex flex-row flex-wrap items-start justify-start">
                            <div className="relative leading-[20px] font-medium">
                                Profile photo updated successfully!
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-start">
                        <div className="w-9 rounded-radius-md h-9 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
                            <img
                                className="w-5 relative h-5 overflow-hidden shrink-0"
                                alt=""
                                src="/xclose.svg"
                                onClick={() => setshowSucsses(false)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
