import { Divider } from "@nextui-org/react";

export default function Footer() {
  return (
    <div className="">
      <Divider />
      <div className="bg-gray-100">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex justify-center text-teal-600">
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500 text-5xl font-black">D'visita</h2>
          </div>

          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
            Esta es una plantilla desarrollada con tecnología React. ¡Gracias por tu visita! Si te interesan más proyectos como este, te invito a conectarte conmigo a través de los siguientes enlaces.
          </p>


          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">

            <li>
              <a className="text-gray-700 transition hover:text-gray-700/75" href="https://iwinsersanchez.netlify.app/"> Servicios </a>
            </li>

            <li>
              <a className="text-gray-700 transition hover:text-gray-700/75" href="https://iwinsersanchez.netlify.app/aplicaciones"> Proyectos </a>
            </li>

            <li>
              <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Blog </a>
            </li>
          </ul>

          <ul className="mt-12 flex justify-center gap-6 md:gap-8">


            <li>
              <a
                href="https://github.com/iwinser117"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:text-gray-700/75"
              >
                <span className="sr-only">GitHub</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
              </a>
            </li>

            <li>
              <a
                href="https://iwinsersanchez.netlify.app/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:text-gray-700/75"
              >
                <span className="sr-only">Portafolio</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
              </a>
            </li>

            <li>
              <a
                href="https://linkedin.com/in/iwinser-aljadys-sanchez-0a62a0234"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:text-gray-700/75"
              >
                <span className="sr-only">Linkedin</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
