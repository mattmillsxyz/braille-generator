export default function Hero() {
  return (
    <section className="flex flex-row">
      <div className="w-full">
        <img src="/braille-generator.jpg" width="285" alt="Braille Generator" />
        <h1 className="font-bold text-4xl mb-2">Braille Generator</h1>
        <p className="text-gray-500">
          Simply type in a word or phrase to have it converted to braille. Click
          the download button to save the braille code as an image.
        </p>
      </div>
    </section>
  );
}
