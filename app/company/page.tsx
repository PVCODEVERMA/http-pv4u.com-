export default function CompanyPage() {
  return (
    <div className="flex flex-col flex-1 items-center bg-white dark:bg-black font-sans min-h-screen">
      <section className="w-full bg-dark text-white pt-24 pb-16 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Company</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">Learn more about Comfygen, our team, and our mission.</p>
      </section>
      <section className="container mx-auto py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-primary mb-8">Coming Soon</h2>
        <p className="text-gray-600 dark:text-gray-400">We are currently building this section.</p>
      </section>
    </div>
  );
}
