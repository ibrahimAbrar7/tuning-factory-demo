import { notFound } from "next/navigation";
import { vehiclesData } from "../../../data/vehicles";
import HeaderOne from "@/app/Components/HeaderOne";
import HeaderTwo from "@/app/Components/HeaderTwo";
import Footer from "@/app/Components/Footer";
import ThemeToggle from "@/app/Components/ThemeToggle";
import BackToTop from "@/app/Components/BackToTop";

interface Params {
  id: string; // The `id` is passed as a string from the URL
}

const VehiclePage = async ({ params }: { params: Promise<Params> }) => {
  const resolvedParams = await params; // Await the params
  const id = parseInt(resolvedParams.id, 10); // Convert the string `id` to a number

  // Find the vehicle data with the corresponding `id`
  const vehicleData = vehiclesData.find((vehicle) => vehicle.id === id);

  if (!vehicleData) {
    notFound(); // If the vehicle data is not found, return a 404
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <HeaderOne />
      <HeaderTwo />

      {/* Main Content Section */}
      <main className="container mx-auto px-4 py-8 space-y-4 flex-1">
        {/* Vehicles We Service Section */}
        {vehicleData.headings.vehiclesWeService &&
          vehicleData.names.length > 0 && (
            <section className="border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 rounded-lg shadow-lg mx-auto max-w-3xl">
              <h2 className="text-xl md:text-4xl font-semibold text-gray-900 dark:text-gray-200 mb-6 pl-4 space-y-3 uppercase animate-bounce-1s">
                {vehicleData.headings.vehiclesWeService}
              </h2>
              <ul className="list-disc pl-8 space-y-1 text-gray-800 dark:text-gray-300">
                {vehicleData.names.map((name, index) => (
                  <li
                    key={`${vehicleData.id}-vehicle-${index}`}
                    className="text-lg list-none animate-bounce-1s"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </section>
          )}

        {/* Additional Info Section */}
        {vehicleData.headings.additionalInfo &&
          vehicleData.additionalInfo.length > 0 && (
            <section className="border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 rounded-lg shadow-lg mx-auto max-w-3xl">
              <h2 className="text-xl md:text-4xl font-semibold text-gray-900 dark:text-gray-200 mb-6 pl-4 space-y-3 uppercase animate-bounce-1s">
                {vehicleData.headings.additionalInfo}
              </h2>
              <ul className="list-disc pl-6 space-y-1 text-gray-800 dark:text-gray-300">
                {vehicleData.additionalInfo.map((additionalInfo, index) => (
                  <li
                    key={`${vehicleData.id}-info-${index}`}
                    className="text-lg animate-bounce-1s"
                  >
                    {additionalInfo}
                  </li>
                ))}
              </ul>
            </section>
          )}

        {/* Services Section */}
        {vehicleData.headings.services && vehicleData.services.length > 0 && (
          <section className="border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 rounded-lg shadow-lg mx-auto max-w-3xl">
            <h2 className="text-xl md:text-4xl font-semibold text-gray-900 dark:text-gray-200 mb-6 pl-4 space-y-3 uppercase animate-bounce-1s">
              {vehicleData.headings.services}
            </h2>
            <ul className="list-disc pl-6 space-y-1 text-gray-800 dark:text-gray-300">
              {vehicleData.services.map((service, index) => (
                <li
                  key={`${vehicleData.id}-service-${index}`}
                  className="text-lg animate-bounce-1s"
                >
                  {service}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Performance Upgrades Section */}
        {vehicleData.headings.performanceUpgrades &&
          vehicleData.performance.length > 0 && (
            <section className="border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 rounded-lg shadow-lg mx-auto max-w-3xl">
              <h2 className="text-xl md:text-4xl font-semibold text-gray-900 dark:text-gray-200 mb-6 pl-4 space-y-3 uppercase">
                {vehicleData.headings.performanceUpgrades}
              </h2>
              <ul className="list-disc pl-6 space-y-1 text-gray-800 dark:text-gray-300">
                {vehicleData.performance.map((upgrade, index) => (
                  <li
                    key={`${vehicleData.id}-upgrade-${index}`}
                    className="text-lg"
                  >
                    {upgrade}
                  </li>
                ))}
              </ul>
            </section>
          )}
      </main>

      <Footer />
      <BackToTop />
      
      <div className="hidden lg:block">
        <ThemeToggle />
      </div>

    </div>
  );
};

export default VehiclePage;
