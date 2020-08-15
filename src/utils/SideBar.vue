<template>
  <div>
    <div class="bg-gray-200 font-sans">
      <div class=" sm:flex-row sm:justify-around">
        <div class="w-64 h-screen bg-gray-800">
          <div class="flex items-center justify-center">
            <div>Admin Components</div>
          </div>

          <nav class="mt-10">
            <slot></slot>

            <!-- <div >
                    <button @click="DashBoardOpen = !DashBoardOpen" class="w-full flex justify-between items-center py-3 px-6 text-gray-100 cursor-pointer hover:bg-gray-700 hover:text-gray-100 focus:outline-none">
                        <span class="flex items-center">
                            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>

                            <span class="mx-4 font-medium">Accounts</span>
                        </span>

                        <span>
                            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path x-show="! open" d="M9 5L16 12L9 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: none;"></path>
                                <path x-show="open" d="M19 9L12 16L5 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </span>
                    </button>

                    <div x-show="open" class="bg-gray-700">
                        <a class="py-2 px-16 block text-sm text-gray-100 hover:bg-blue-500 hover:text-white" href="#">All Accounts</a>
                        <a class="py-2 px-16 block text-sm text-gray-100 hover:bg-blue-500 hover:text-white" href="#">Create Account</a>
                        <a class="py-2 px-16 block text-sm text-gray-100 hover:bg-blue-500 hover:text-white" href="#">Accounts Roles</a>
                    </div>
                </div> -->

            <!-- <div>
                    <button @click="open = !open" class="w-full flex justify-between items-center py-3 px-6 text-gray-100 cursor-pointer hover:bg-gray-700 hover:text-gray-100 focus:outline-none">
                        <span class="flex items-center">
                            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>

                            <span class="mx-4 font-medium">Tickets</span>
                        </span>

                        <span>
                            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path x-show="! open" d="M9 5L16 12L9 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: none;"></path>
                                <path x-show="open" d="M19 9L12 16L5 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </span>
                    </button>

                    <div x-show="open" class="bg-gray-700">
                        <a class="py-2 px-16 block text-sm text-gray-100 hover:bg-blue-500 hover:text-white" href="#">All Tickets</a>
                        <a class="py-2 px-16 block text-sm text-gray-100 hover:bg-blue-500 hover:text-white" href="#">Create Ticket</a>
                    </div>
                </div> -->
          </nav>

          <div class="absolute bottom-0 my-8">
            <a
              class="flex items-center py-2 px-8 block text-gray-100 hover:text-gray-200"
              href="#"
            >
              <img
                class="h-6 w-6 rounded-full mr-3 object-cover"
                src="https://lh3.googleusercontent.com/a-/AOh14Gi0DgItGDTATTFV6lPiVrqtja6RZ_qrY91zg42o-g"
                alt="avatar"
              />
              <span>Khatabwedaa</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
};
</script>

<style></style>
