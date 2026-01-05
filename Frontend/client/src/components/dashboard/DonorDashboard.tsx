import {
  Utensils,
  CheckCircle2,
  Clock,
  Package,
  Heart,
  TrendingUp,
  MapPin,
  Calendar,
  Eye,
  Inbox,
  User,
  Phone,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { getDonations, DonationResponse, DisposalPartner } from "@/services/donationService";
import { format } from "date-fns";
import { useState } from "react";
import { PopulatedReceiver } from "@/services/donationService";

const statusStyles = {
  "Pending": "bg-warning/10 text-warning border-warning/20",
  "In Process": "bg-info/10 text-info border-info/20",
  "Completed": "bg-success/10 text-success border-success/20",
  "Rejected": "bg-destructive/10 text-destructive border-destructive/20",
};

export function DonorDashboard() {
  const { userProfile } = useAuth();
  const [selectedReceiver, setSelectedReceiver] = useState<PopulatedReceiver | null>(null);
  const [isReceiverDialogOpen, setIsReceiverDialogOpen] = useState(false);
  const [selectedDisposalPartner, setSelectedDisposalPartner] = useState<DisposalPartner | null>(null);
  const [isDisposalDialogOpen, setIsDisposalDialogOpen] = useState(false);

  const handleViewReceiver = (receiver: PopulatedReceiver) => {
    setSelectedReceiver(receiver);
    setIsReceiverDialogOpen(true);
  };

  const handleViewDisposalPartner = (donation: DonationResponse) => {
    setSelectedDisposalPartner(donation.assignedDisposalPartner ?? null);
    setIsDisposalDialogOpen(true);
  };

  // Fetch donations from backend
  const { data: donationsData, isLoading, error } = useQuery({
    queryKey: ["donations"],
    queryFn: getDonations,
    enabled: !!userProfile, // Only fetch when user is authenticated
  });

  // Debug logging
  console.log("User Profile:", userProfile);
  console.log("All Donations Data:", donationsData);

  // Filter donations by current user's uid
  const userDonations = donationsData?.data?.filter(
    (donation: DonationResponse) => {
      // Check if donation.donor is populated object or uid string
      if (typeof donation.donor === 'object' && donation.donor) {
        return donation.donor.uid === userProfile?.uid;
      }
      // Fallback to string comparison
      return donation.donor === userProfile?.uid;
    }
  ) || [];

  console.log("Filtered User Donations:", userDonations);

  // Filter out rejected donations for stats (wasted food shouldn't count)
  const successfulDonations = userDonations.filter((d: DonationResponse) => d.status !== "Rejected");

  // Calculate stats (excluding rejected donations)
  const totalDonations = successfulDonations.length;
  const totalMeals = successfulDonations.reduce((sum: number, d: DonationResponse) => sum + d.quantity, 0);
  const thisMonth = successfulDonations.filter((d: DonationResponse) => {
    const donationDate = new Date(d.createdAt);
    const now = new Date();
    return donationDate.getMonth() === now.getMonth() &&
      donationDate.getFullYear() === now.getFullYear();
  }).length;

  const donorStats = [
    { label: "Total Donations", value: totalDonations.toString(), icon: Package, color: "primary" },
    { label: "Meals Shared", value: totalMeals.toString(), icon: Utensils, color: "success" },
    { label: "Families Fed", value: Math.floor(totalMeals / 4).toString(), icon: Heart, color: "accent" },
    { label: "This Month", value: thisMonth.toString(), icon: Calendar, color: "info" },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Welcome back, {userProfile?.name || 'Donor'}! 👋</h2>
          <p className="text-muted-foreground">Thank you for making a difference in your community.</p>
        </div>
        <Button className="gradient-hero border-0" asChild>
          <Link to="/donate">
            <Package className="mr-2 h-4 w-4" />
            New Donation
          </Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {donorStats.map((stat, index) => (
          <Card key={stat.label} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl bg-${stat.color}/10`}>
                  <stat.icon className={`h-5 w-5 text-${stat.color}`} />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Impact Summary */}
      {totalDonations > 0 ? (
        <Card className="bg-gradient-to-r from-primary/5 to-success/5 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-full bg-primary/10">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">Amazing Impact! 🎉</h3>
                <p className="text-muted-foreground text-sm">
                  You've donated {totalMeals} meals and helped approximately {Math.floor(totalMeals / 4)} families. Keep up the great work!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="bg-gradient-to-r from-primary/5 to-success/5 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-full bg-primary/10">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">Start Making an Impact! 🌱</h3>
                <p className="text-muted-foreground text-sm">
                  Make your first donation to help those in need. Every meal matters!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recent Donations */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg">Recent Donations</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          ) : userDonations.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="p-4 rounded-full bg-secondary/50 mb-4">
                <Inbox className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No donations yet</h3>
              <p className="text-sm text-muted-foreground mb-4 max-w-sm">
                You haven't made any donations yet. Start sharing your surplus food to make a difference!
              </p>
              <Button className="gradient-hero border-0" asChild>
                <Link to="/donate">
                  <Package className="mr-2 h-4 w-4" />
                  Make Your First Donation
                </Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-3">
              {userDonations.slice(0, 5).map((donation: DonationResponse) => (
                <div
                  key={donation._id}
                  className="flex items-center gap-4 p-3 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
                >
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-secondary">
                    <img
                      src={donation.picture}
                      alt={donation.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-medium truncate">{donation.name}</p>
                      <Badge variant="outline" className={statusStyles[donation.status]}>
                        {donation.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {donation.quantity} servings{donation.foodType ? ` • ${donation.foodType}` : ''}
                    </p>
                    {/* Show receiver info if accepted */}
                    {donation.acceptedBy && typeof donation.acceptedBy === 'object' && (
                      <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {donation.status === "Rejected" ? "Rejected by" : "Accepted by"} {donation.acceptedBy.name}
                      </p>
                    )}
                    {/* Show rejection details if rejected */}
                    {donation.status === "Rejected" && donation.rejectedReason && (
                      <p className="text-xs text-destructive mt-1">
                        Reason: {donation.rejectedReason}
                      </p>
                    )}
                    {donation.status === "Rejected" && donation.assignedDisposalPartner && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Disposal: {donation.assignedDisposalPartner.name}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    <p className="text-sm text-muted-foreground">
                      {format(new Date(donation.createdAt), "MMM dd, yyyy")}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {format(new Date(donation.pickupDate), "MMM dd")} pickup
                    </p>
                    {/* Show receiver profile button if accepted */}
                    {donation.acceptedBy && typeof donation.acceptedBy === 'object' && donation.status !== "Rejected" && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-7 px-3"
                        onClick={() => handleViewReceiver(donation.acceptedBy as PopulatedReceiver)}
                      >
                        <User className="h-3 w-3 mr-1" />
                        View Receiver
                      </Button>
                    )}
                    {/* Show disposal partner button if rejected */}
                    {donation.status === "Rejected" && donation.assignedDisposalPartner && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-7 px-3 border-destructive/50 text-destructive hover:bg-destructive/10"
                        onClick={() => handleViewDisposalPartner(donation)}
                      >
                        <Package className="h-3 w-3 mr-1" />
                        View Disposal
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Donate Food", icon: Package, to: "/donate", color: "primary" },
          { label: "Profile", icon: User, to: "/profile", color: "info" },
          { label: "View Impact", icon: TrendingUp, to: "/donate-dashboard", color: "success" },
          { label: "History", icon: Clock, to: "/donate-dashboard", color: "accent" },
        ].map((action) => (
          <Link
            key={action.label}
            to={action.to}
            className={`flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border hover:border-${action.color}/50 hover:shadow-soft transition-all`}
          >
            <action.icon className={`h-6 w-6 text-${action.color}`} />
            <span className="text-sm font-medium">{action.label}</span>
          </Link>
        ))}
      </div>

      {/* Receiver Profile Dialog */}
      {selectedReceiver && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center ${isReceiverDialogOpen ? '' : 'hidden'}`}
          onClick={() => setIsReceiverDialogOpen(false)}
        >
          <div className="fixed inset-0 bg-black/50" />
          <div
            className="relative bg-card rounded-lg p-6 max-w-md w-full mx-4 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <User className="h-5 w-5" />
              Receiver Profile
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                  {selectedReceiver.avatar ? (
                    <img
                      src={selectedReceiver.avatar}
                      alt={selectedReceiver.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <User className="h-8 w-8 text-muted-foreground" />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{selectedReceiver.name}</h3>
                  <Badge variant="outline" className="capitalize">
                    {selectedReceiver.role}
                  </Badge>
                </div>
              </div>
              <div className="space-y-2">
                {selectedReceiver.phone && (
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <a href={`tel:${selectedReceiver.phone}`} className="text-primary hover:underline">
                      {selectedReceiver.phone}
                    </a>
                  </div>
                )}
                {selectedReceiver.email && (
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a href={`mailto:${selectedReceiver.email}`} className="text-primary hover:underline">
                      {selectedReceiver.email}
                    </a>
                  </div>
                )}
                {selectedReceiver.address && (
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span className="text-muted-foreground">{selectedReceiver.address}</span>
                  </div>
                )}
              </div>
              <Button
                className="w-full"
                onClick={() => setIsReceiverDialogOpen(false)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Disposal Partner Dialog */}
      {isDisposalDialogOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={() => setIsDisposalDialogOpen(false)}
        >
          <div className="fixed inset-0 bg-black/50" />
          <div
            className="relative bg-card rounded-lg p-6 max-w-2xl w-full mx-4 shadow-lg border-2 border-destructive/20 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-destructive">
              <Package className="h-5 w-5" />
              Disposal Partners List
            </h2>

            {selectedDisposalPartner && (
              <div className="bg-destructive/10 rounded-lg p-3 mb-4 border border-destructive/30">
                <p className="text-sm font-medium text-destructive">
                  ✓ Assigned: {selectedDisposalPartner.name}
                </p>
              </div>
            )}

            <div className="space-y-3">
              {[
                {
                  name: "West Bengal Waste Management Limited (WBWML)",
                  contact: "+91-33-2289-3088",
                  location: "Kolkata – Park Circus / Haldia"
                },
                {
                  name: "Medicare Environmental Management Pvt. Ltd.",
                  contact: "+91-33-2289-3088",
                  location: "Howrah – Belgachia"
                },
                {
                  name: "Green Tech Environ Management Pvt. Ltd.",
                  contact: "+91-33-2534-1121",
                  location: "Lake Town – Near Salt Lake"
                },
                {
                  name: "Re Sustainability Limited (C&D Waste Plant)",
                  contact: "+91-40-2444-6000",
                  location: "New Town – Action Area III"
                },
                {
                  name: "Eco Age Recycling",
                  contact: "+91-90387-21515",
                  location: "Kolkata – Rafi Ahmed Kidwai Road"
                }
              ].map((partner, index) => {
                const isAssigned = selectedDisposalPartner?.name === partner.name;
                return (
                  <div
                    key={index}
                    className={`rounded-lg p-4 border ${isAssigned
                      ? 'bg-destructive/5 border-destructive/30 ring-2 ring-destructive/20'
                      : 'bg-secondary/30 border-border'
                      }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-base mb-2 flex items-center gap-2">
                          {partner.name}
                          {isAssigned && (
                            <Badge variant="destructive" className="text-xs">
                              Assigned
                            </Badge>
                          )}
                        </h3>
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2 text-sm">
                            <Phone className="h-3.5 w-3.5 text-muted-foreground" />
                            <a
                              href={`tel:${partner.contact}`}
                              className="text-primary hover:underline"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {partner.contact}
                            </a>
                          </div>
                          <div className="flex items-start gap-2 text-sm">
                            <MapPin className="h-3.5 w-3.5 text-muted-foreground mt-0.5" />
                            <span className="text-muted-foreground">{partner.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-secondary/30 rounded-lg p-3 text-xs text-muted-foreground mt-4">
              <p>
                ℹ️ These are the available waste management partners in West Bengal. The highlighted partner has been automatically assigned for this rejected donation.
              </p>
            </div>

            <Button
              className="w-full mt-4"
              onClick={() => setIsDisposalDialogOpen(false)}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}