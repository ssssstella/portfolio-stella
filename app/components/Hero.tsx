export default function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 min-h-[400px] lg:min-h-[500px]">
      <div className="col-span-1 lg:col-span-3 h-full rounded-sm py-8 flex flex-col justify-center items-center">
        <h1 className="text-xl lg:text-2xl font-medium">Hey I&apos;m Stella</h1>
        <h2 className="text-sm lg:text-lg font-normal mt-4 text-muted-foreground">
          A web developer working and living in Vancouver, Canada 🇨🇦
        </h2>
      </div>
    </div>
  );
}
