import React from 'react'

const About = () => {
    return (
        <>
            <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                    <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                        <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                            <div className="w-full flex-col justify-center items-start gap-8 flex">
                                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                                    <h1 className="text-5xl font-extrabold text-gray-400 leading-relaxed">About Us</h1>
                                    <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                        <h2
                                            className="text-indigo-700 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                            The Tale of Our Achievement Story</h2>
                                        <p
                                            className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                            Our achievement story is a testament to teamwork and perseverance. Together, we've
                                            overcome challenges, celebrated victories, and created a narrative of progress and
                                            success.</p>
                                    </div>
                                </div>
                                <div className="w-full flex-col justify-center items-start gap-6 flex">
                                    <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                        <div
                                            className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">33+ Years</h4>
                                            <p className="text-gray-500 text-base font-normal leading-relaxed">Influencing Digital
                                                Landscapes Together</p>
                                        </div>
                                        <div
                                            className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">125+ Projects
                                            </h4>
                                            <p className="text-gray-500 text-base font-normal leading-relaxed">Excellence Achieved
                                                Through Success</p>
                                        </div>
                                    </div>
                                    <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                        <div
                                            className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">26+ Awards</h4>
                                            <p className="text-gray-500 text-base font-normal leading-relaxed">Our Dedication to
                                                Innovation Wins Understanding</p>
                                        </div>
                                        <div
                                            className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">99% Happy
                                                Clients</h4>
                                            <p className="text-gray-500 text-base font-normal leading-relaxed">Mirrors our Focus on
                                                Client Satisfaction.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button
                                className="sm:w-fit w-full group px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
                                <span
                                    className="px-1.5 text-indigo-600 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">Read
                                    More</span>
                                <svg className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
                                    xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" stroke="#4F46E5" strokeWidth="1.6"
                                        strokeLinecap="round" strokelinejoinc="round" />
                                </svg>
                            </button>
                        </div>
                        <div className="w-full lg:justify-start justify-center items-start flex">
                            <div
                                className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                                <img className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                                    src="https://pagedone.io/asset/uploads/1717742431.png" alt="about Us image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-gray-50 py-24 sm:py-32">
                <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-center text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
                    <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">Everything you need to deploy your app</p>
                    <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                        <div className="relative lg:row-span-2">
                            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Mobile friendly</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</p>
                                </div>
                                <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                                    <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                                        <img className="size-full object-cover object-top" src="https://tailwindui.com/plus/img/component-images/bento-03-mobile-friendly.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
                        </div>
                        <div className="relative max-lg:row-start-1">
                            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Performance</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.</p>
                                </div>
                                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                                    <img className="w-full max-lg:max-w-xs" src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png" alt="" />
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
                        </div>
                        <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                            <div className="absolute inset-px rounded-lg bg-white"></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Security</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.</p>
                                </div>
                                <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                                    <img className="h-[min(152px,40cqw)] object-cover" src="https://tailwindui.com/plus/img/component-images/bento-03-security.png" alt="" />
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                        </div>
                        <div className="relative lg:row-span-2">
                            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Powerful APIs</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.</p>
                                </div>
                                <div className="relative min-h-[30rem] w-full grow">
                                    <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                                        <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                                            <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                                                <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">NotificationSetting.jsx</div>
                                                <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                                            </div>
                                        </div>
                                        <div className="px-6 pb-14 pt-6">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                        </div>
                    </div>
                </div>
            </div>



            <footer className="bg-white dark:bg-gray-900">
                <div className="mx-auto w-full max-w-screen-xl">
                    <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className=" hover:underline">About</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Careers</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Brand Center</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Blog</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Discord Server</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Twitter</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Facebook</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Licensing</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">iOS</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Android</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Windows</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">MacOS</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="bg-white dark:bg-gray-900">
                    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                        <div className="md:flex md:justify-between">
                            <div className="mb-6 md:mb-0">
                                <a href="https://flowbite.com/" className="flex items-center">
                                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo" />
                                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">News App</span>
                                </a>
                            </div>
                            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                        <li className="mb-4">
                                            <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                                        </li>
                                        <li>
                                            <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                        <li className="mb-4">
                                            <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                                        </li>
                                        <li>
                                            <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                        <div className="sm:flex sm:items-center sm:justify-between">
                            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
                            </span>
                            <div className="flex mt-4 sm:justify-center sm:mt-0">
                                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                        <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                                    </svg>
                                    <span className="sr-only">Facebook page</span>
                                </a>
                                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                                    </svg>
                                    <span className="sr-only">Discord community</span>
                                </a>
                                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                        <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd" />
                                    </svg>
                                    <span className="sr-only">Twitter page</span>
                                </a>
                                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
                                    </svg>
                                    <span className="sr-only">GitHub account</span>
                                </a>
                                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clipRule="evenodd" />
                                    </svg>
                                    <span className="sr-only">Dribbble account</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>


        </>
    )
}

export default About
