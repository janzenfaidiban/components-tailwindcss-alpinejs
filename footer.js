document.addEventListener('alpine:init', () => {
  Alpine.data('footer', () => ({
      footer: `
            <footer class="p-4 bg-gray-200 md:p-8 lg:p-10 dark:bg-gray-800">
                <div class="mx-auto max-w-screen-xl text-center">
                    <a href="#" class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
                        <i class="fa-solid fa-globe mr-3 text-2xl"></i>
                        Amazing Papua
                    </a>
                    <p class="my-6 text-gray-500 dark:text-gray-400">Open-source library of over 400+ web components and
                        interactive elements built for better web.</p>
                    <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6 ">About Us</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6">Our Team</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6 ">Campaigns</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6">Blog</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6">Affiliate Program</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6">FAQs</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6">Contact</a>
                        </li>
                    </ul>
                    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#"
                            class="hover:underline">Nokensoft™</a>. All Rights Reserved.</span>
                </div>
            </footer>
      `,
  }))
})