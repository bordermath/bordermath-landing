import { Calendar, MessageSquare, Bot, Bell } from "@deemlol/next-icons";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { AlertRow } from "@/components/ui/AlertRow";
import { Badge } from "@/components/ui/Badge";

export function ValueGrid() {
  return (
    <section id="features" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="font-display-lg text-display-lg mb-4">
            Precision Compliance for High-Stakes Travel
          </h2>
          <p className="font-body-lg text-on-surface-variant">
            Don&apos;t leave your legal status to spreadsheets and guesswork. Our
            algorithms handle the complexity of global immigration rules.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature Card 1 - Large */}
          <FeatureCard
            className="md:col-span-2"
            icon={<Calendar className="w-10 h-10" />}
            title="Schengen 90/180 Tracker"
            description="Our rolling-window calculator predicts your exact overstay date based on historical and planned trips."
            badge={
              <Badge variant="secondary" className="p-4 text-base">
                82/90 Days Used
              </Badge>
            }
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuAbsY-iHUkC6H55PZfjff3BGotaRaCHWtSdHzzlKMoiEYYmV6mUkbtPgXp---580Q7rJapvTS6f9BoiKcAgVXS4DzASjLwtNZnzeBLyL5UZPfdowMNHba05oVhJHOTrJ_yS6_EWdhtxwYYlQjiRoUdqbovHHDfdytbqv9-2Ay_eVZanzu3Mpy_x4vRbDx_kQ-M7qUrcM_PBmBNFwaU2VFSAU6x645OZQdj7fd9CSKVf8I0M8mWYD8FFxnfOeQT6y3JGsuLPFB5b1aV8"
            imageAlt="Calendar showing visa compliance tracking"
          />

          {/* Feature Card 2 */}
          <FeatureCard
            icon={<MessageSquare className="w-10 h-10" />}
            title="AI Chat Intelligence"
            description="Ask your assistant anything. We sync daily with international databases so you can get instant answers on complex visa requirements via chat."
          />

          {/* Feature Card 3 - Dark */}
          <FeatureCard
            variant="dark"
            icon={<Bot className="w-10 h-10" />}
            title="Conversational Planning"
            description="Planning a world tour? Just tell your assistant your goals, and our engine suggests the best sequence of countries to maximize your time."
          />

          {/* Feature Card 4 - With Alert Rows */}
          <div className="md:col-span-2 bg-surface-container border border-outline-variant p-10 rounded-xl flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="text-4xl text-primary mb-4">
                <Bell className="w-10 h-10" />
              </div>
              <h3 className="font-headline text-2xl mb-2">Critical Alerts</h3>
              <p className="text-on-surface-variant">
                Get notified 30 days before a visa expires or when you are 10
                days away from reaching a stay limit.
              </p>
            </div>
            <div className="flex-1 w-full flex flex-col gap-2">
              <AlertRow
                label="Passport Expiry"
                status="expiring"
                statusText="Expiring Soon"
              />
              <AlertRow
                label="Digital Nomad Visa: ES"
                status="active"
                statusText="Active"
                muted
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
