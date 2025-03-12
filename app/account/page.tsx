import { TransactionForm } from "@/components";
import { StarryBackground } from "@/components";


export default function Home() {
  return (
    <main>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <StarryBackground />
        <div className="relative z-10 text-center px-4">
          <TransactionForm />
        </div>
      </section>
    </main>
  );
}
