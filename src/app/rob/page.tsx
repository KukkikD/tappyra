import Image from "next/image";
export default function RobProfile() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <section className="w-full max-w-md bg-white rounded-3xl shadow-lg overflow-hidden">

        <div className="bg-gray-900 text-white text-center p-8">

          <Image
            src="/rnh_logo.png"
            alt="RNH Welding Logo"
            width={160}
            height={100}
            className="mx-auto mb-3"
          />

          <h1 className="text-3xl font-bold">
            Rob Howard
          </h1>

          <p className="mt-2 text-gray-300">
            Owner
          </p>
        </div>

        <div className="p-6">

          <a
            href="/rob-rnh.vcf"
            className="block w-full bg-gray-900 text-white text-center font-semibold py-4 rounded-xl mb-6"
          >
            Save Contact
          </a>

          <div className="space-y-3">

            <a
              href="tel:+13608270840"
              className="block w-full border border-gray-300 text-center py-3 rounded-xl"
            >
              📞 Call
            </a>

            <a
              href="sms:+13608270840"
              className="block w-full border border-gray-300 text-center py-3 rounded-xl"
            >
              💬 Text Message
            </a>

            <a
              href="mailto:rnhrob1@gmail.com"
              className="block w-full border border-gray-300 text-center py-3 rounded-xl"
            >
              ✉️ Email
            </a>

            <a
              href="mailto:rnhrob1@gmail.com?subject=Request%20a%20Quote"
              className="block w-full border border-gray-300 text-center py-3 rounded-xl"
            >
              📝 Request a Quote
            </a>

            <a
              href="https://rnhwelding.lovable.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full border border-gray-300 text-center py-3 rounded-xl"
            >
              🌐 Website
            </a>

            <a
              href="https://www.facebook.com/share/19AcmFNwLS/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full border border-gray-300 text-center py-3 rounded-xl"
            >
              📘 Facebook
            </a>

            <a
              href="https://www.instagram.com/rnh_welding?igsh=MXU5bGppZW42MWI3aw=="
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full border border-gray-300 text-center py-3 rounded-xl"
            >
              📷 Instagram
            </a>

            <a
              href="https://maps.google.com/?q=3732+Jackson+Hwy,+Chehalis,+WA+98532"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full border border-gray-300 text-center py-3 rounded-xl"
            >
              📍 Directions
            </a>

          </div>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>3732 Jackson Hwy</p>
            <p>Chehalis, WA 98532</p>
          </div>

          <p className="mt-8 text-center text-xs text-gray-400">
            Powered by Tappyra
          </p>

        </div>
      </section>
    </main>
  );
}