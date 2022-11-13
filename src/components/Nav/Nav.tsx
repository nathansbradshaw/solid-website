import { A } from "solid-start";

export default function Nav() {
  return (
    <nav class="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900 text-white">
      <div class="w-60 h-full shadow-md bg-white px-1 absolute">
        <ul class="relative">
          <li class="relative">
            <A
              class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              href="/"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              Home
            </A>
          </li>
          <li class="relative">
            <A
              class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              href="/projects"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              Projects
            </A>
          </li>
        </ul>
      </div>
    </nav>
  );
}
