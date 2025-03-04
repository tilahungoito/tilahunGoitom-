"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/data";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Modal, ModalTrigger, ModalBody, ModalContent, ModalFooter } from "@/components/ui/animated-modal";

export default function Hero()
{
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
      {/* Add BackgroundLines as the background */}
      <BackgroundLines>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-14 text-5xl font-bold text-gray-800 dark:text-white relative z-10"
        >
          {portfolioData.hero.title}
        </motion.h1>
        <p className="mt-20 text-lg text-gray-600 dark:text-gray-300 relative z-10">
          {portfolioData.hero.description}
        </p>

        {/* Replace the <a> tag with ModalTrigger and ModalBody */}
        <Modal>
          <ModalTrigger className="mt-22 bg-black text-orange-700 px-6 py-2 rounded-lg hover:bg-blue-600 transition relative z-10">
            {portfolioData.hero.cta}
          </ModalTrigger>
          <ModalBody>
            <ModalContent>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Request My CV
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Please email me at{" "}
                <a
                  href={`mailto:${portfolioData.footer.email}`}
                  className="text-blue-500 hover:underline"
                >
                  {portfolioData.footer.email}
                </a>{" "}
                to request my CV. I will get back to you as soon as possible!
              </p>
            </ModalContent>
            <ModalFooter>
              <button
                onClick={() => window.location.href = `mailto:${portfolioData.footer.email}`}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Send Email
              </button>
            </ModalFooter>
          </ModalBody>
        </Modal>
      </BackgroundLines>
    </section>
  );
}