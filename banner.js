document.addEventListener('alpine:init', () => {
  Alpine.data('banner', () => ({
        banner: `
        <section class="bg-gray-200 dark:bg-gray-900 flex items-center py-10">
            <div class="max-w-screen-xl px-4 mx-auto lg:px-12 w-full">

                <!-- BANNER START -->
                <section class="bg-white dark:bg-gray-900 sm:rounded-lg p-9">
                    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                        <div class="mr-auto place-self-center lg:col-span-7">
                            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white ">
                                Explore Amazing Papua</h1>
                            <p
                                class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                                From checkout to global sales tax compliance, companies around the world use Flowbite to
                                simplify their payment stack.</p>
                            <a href="#home"
                                class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                Home
                            </a>
                            <a href="#our-team"
                                class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-dark rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                                Our Team
                                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                            <img src="https://yt3.googleusercontent.com/wF9bWns6yX_H4xAzXyi9efXnWT4O_w747vtDrmv2rxzIGhhE4-jeUzUh_cG1SObthnUtySvevHw=s900-c-k-c0x00ffffff-no-rj" class="m-5 p-5 border rounded" alt="mockup">
                        </div>
                    </div>
                </section>
                <!-- BANNER END -->
            </div>
        </section>
    `,
    }))
})