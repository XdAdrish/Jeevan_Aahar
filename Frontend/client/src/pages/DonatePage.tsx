import { SectionHeader } from "@/components/ui/section-header";
import { DonationWizard } from "@/components/donate/DonationWizard";
import { CheckCircle2 } from "lucide-react";

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Share Your Surplus
          </span>
          <SectionHeader
            title="Donate Food"
            subtitle="Share your surplus food with those in need. Every meal matters."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Wizard */}
          <div className="lg:col-span-3">
            <DonationWizard />
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* Guidelines */}
            <div className="bg-card rounded-2xl border border-border shadow-soft p-6">
              <h3 className="text-lg font-semibold mb-4">Donation Guidelines</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                  <span>Food should be fresh and safe to consume</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                  <span>Packed food must have at least 3 days before expiry</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                  <span>Cooked food should be donated within 4-6 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                  <span>Please ensure proper packaging for transport</span>
                </li>
              </ul>
            </div>

            {/* Stats - Removed hardcoded values */}
            <div className="bg-primary/5 rounded-2xl border border-primary/20 p-6">
              <h3 className="text-lg font-semibold text-primary mb-4">Make an Impact</h3>
              <p className="text-sm text-muted-foreground">
                Start donating today to help feed those in need. Your contributions will be tracked here.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-accent/10 rounded-2xl border border-accent/20 p-6">
              <h3 className="text-lg font-semibold text-accent mb-2">Need Help?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Our team is available 24/7 to assist with your donations.
              </p>
              <p className="font-medium">📞 +91 98765 43210</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}