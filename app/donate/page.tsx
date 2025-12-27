"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, QrCode, Building2, AlertCircle, Upload, CheckCircle, ArrowRight } from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { createClient } from "@/lib/supabase/client"

export default function DonatePage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [screenshotFile, setScreenshotFile] = useState<File | null>(null)
  const [screenshotPreview, setScreenshotPreview] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    donorName: "",
    donorEmail: "",
    donorMobile: "",
    donorAddress: "",
    isAnonymous: false,
    paymentAmount: "",
    paymentMethod: "upi",
    notes: "",
  })

  const handleScreenshotChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setScreenshotFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setScreenshotPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // Validate required fields
      if (!formData.donorName.trim()) {
        throw new Error("Please enter your name")
      }
      if (!formData.paymentAmount || Number.parseFloat(formData.paymentAmount) <= 0) {
        throw new Error("Please enter a valid donation amount")
      }
      if (!screenshotFile) {
        throw new Error("Please upload payment screenshot")
      }

      const supabase = createClient()

      // Upload screenshot to Supabase Storage
      const fileExt = screenshotFile.name.split(".").pop()
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("donation-screenshots")
        .upload(fileName, screenshotFile)

      if (uploadError) throw uploadError

      // Get public URL
      const {
        data: { publicUrl },
      } = supabase.storage.from("donation-screenshots").getPublicUrl(fileName)

      // Insert donation record
      const { error: insertError } = await supabase.from("donations").insert({
        donor_name: formData.isAnonymous ? "Anonymous" : formData.donorName,
        donor_email: formData.isAnonymous ? null : formData.donorEmail || null,
        donor_mobile: formData.isAnonymous ? null : formData.donorMobile || null,
        donor_address: formData.isAnonymous ? null : formData.donorAddress || null,
        is_anonymous: formData.isAnonymous,
        payment_amount: Number.parseFloat(formData.paymentAmount),
        payment_screenshot_url: publicUrl,
        payment_method: formData.paymentMethod,
        notes: formData.notes || null,
        status: "pending",
      })

      if (insertError) throw insertError

      setSubmitSuccess(true)
      // Reset form
      setFormData({
        donorName: "",
        donorEmail: "",
        donorMobile: "",
        donorAddress: "",
        isAnonymous: false,
        paymentAmount: "",
        paymentMethod: "upi",
        notes: "",
      })
      setScreenshotFile(null)
      setScreenshotPreview(null)
    } catch (error) {
      console.error("[v0] Donation submission error:", error)
      setSubmitError(error instanceof Error ? error.message : "Failed to submit donation. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Make a <span className="gradient-text">Difference</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your generous donation helps us rescue, treat, and care for cows in need. Every contribution, big or
              small, makes a real impact.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Process - Graphical Presentation */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">How to Donate</h2>
            <p className="text-center text-muted-foreground mb-12">Simple 3-step process to complete your donation</p>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 mb-8 items-center">
              {/* Step 1 */}
              <Card className="relative border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  1
                </div>
                <CardHeader className="text-center pt-8">
                  <div className="flex justify-center mb-3">
                    <QrCode className="text-primary" size={40} />
                  </div>
                  <CardTitle className="text-xl">Choose Payment Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    Select UPI QR code for instant payment or Bank Transfer for direct account transfer
                  </p>
                </CardContent>
              </Card>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center">
                <ArrowRight className="text-primary" size={32} />
              </div>

              {/* Step 2 */}
              <Card className="relative border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  2
                </div>
                <CardHeader className="text-center pt-8">
                  <div className="flex justify-center mb-3">
                    <Heart className="text-primary" size={40} />
                  </div>
                  <CardTitle className="text-xl">Make Payment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    Complete your donation using the payment details provided below and take a screenshot
                  </p>
                </CardContent>
              </Card>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center">
                <ArrowRight className="text-primary" size={32} />
              </div>

              {/* Step 3 */}
              <Card className="relative border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  3
                </div>
                <CardHeader className="text-center pt-8">
                  <div className="flex justify-center mb-3">
                    <Upload className="text-primary" size={40} />
                  </div>
                  <CardTitle className="text-xl">Submit Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    Fill the form with your details and upload payment screenshot to receive invoice
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Complete Your Donation</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* LEFT SIDE - Payment Methods */}
              <div className="space-y-6">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <QrCode className="text-primary" size={24} />
                      <CardTitle>UPI Payment</CardTitle>
                    </div>
                    <CardDescription>Scan QR code with any UPI app</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-secondary p-6 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-48 h-48 bg-white rounded-lg flex items-center justify-center mb-4 mx-auto">
                          <img
                            src="/upi-qr-code-for-donation.jpg"
                            alt="UPI QR Code"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <p className="text-sm text-muted-foreground">Scan with Google Pay, PhonePe, Paytm, etc.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="text-primary" size={24} />
                      <CardTitle>Bank Transfer</CardTitle>
                    </div>
                    <CardDescription>Direct transfer to our account</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Account Name</p>
                        <p className="font-semibold">Cow Seva NGO Trust</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Account Number</p>
                        <p className="font-semibold">1234567890</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">IFSC Code</p>
                        <p className="font-semibold">SBIN0001234</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Bank Name</p>
                        <p className="font-semibold">State Bank of India</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Branch</p>
                        <p className="font-semibold">Mumbai Main Branch</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex gap-3">
                    <AlertCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-1">Important Note</h4>
                      <p className="text-sm text-blue-800 leading-relaxed">
                        After making payment, please take a screenshot and fill the form on the right to submit your
                        donation details. You will receive an invoice via SMS/Email after admin verification.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE - Donation Submission Form */}
              <div className="lg:sticky lg:top-24 lg:self-start">
                {submitSuccess ? (
                  <Card className="bg-green-50 border-green-200">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <CheckCircle className="text-green-600 mx-auto mb-4" size={64} />
                        <h3 className="text-2xl font-bold text-green-900 mb-2">Thank You for Your Donation!</h3>
                        <p className="text-green-800 mb-4">
                          Your donation has been received successfully. Our admin team will verify your payment and send
                          you an invoice shortly via SMS/Email.
                        </p>
                        <Button onClick={() => setSubmitSuccess(false)} className="gradient-bg">
                          Make Another Donation
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card>
                    <CardHeader>
                      <CardTitle>Submit Donation Details</CardTitle>
                      <CardDescription>Fill in your details and upload payment screenshot</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Anonymous Checkbox */}
                        <div className="flex items-center space-x-2 p-3 bg-secondary rounded-lg">
                          <Checkbox
                            id="anonymous"
                            checked={formData.isAnonymous}
                            onCheckedChange={(checked) => setFormData({ ...formData, isAnonymous: checked as boolean })}
                          />
                          <Label htmlFor="anonymous" className="cursor-pointer text-sm">
                            I want to donate anonymously
                          </Label>
                        </div>

                        {/* Name - Required */}
                        <div className="space-y-2">
                          <Label htmlFor="donorName">
                            Full Name <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="donorName"
                            placeholder="Enter your full name"
                            value={formData.donorName}
                            onChange={(e) => setFormData({ ...formData, donorName: e.target.value })}
                            required
                            disabled={formData.isAnonymous}
                          />
                        </div>

                        {/* Email - Optional */}
                        <div className="space-y-2">
                          <Label htmlFor="donorEmail">Email (Optional)</Label>
                          <Input
                            id="donorEmail"
                            type="email"
                            placeholder="your.email@example.com"
                            value={formData.donorEmail}
                            onChange={(e) => setFormData({ ...formData, donorEmail: e.target.value })}
                            disabled={formData.isAnonymous}
                          />
                        </div>

                        {/* Mobile - Optional */}
                        <div className="space-y-2">
                          <Label htmlFor="donorMobile">Mobile Number (Optional)</Label>
                          <Input
                            id="donorMobile"
                            type="tel"
                            placeholder="10-digit mobile number"
                            value={formData.donorMobile}
                            onChange={(e) => setFormData({ ...formData, donorMobile: e.target.value })}
                            disabled={formData.isAnonymous}
                          />
                        </div>

                        {/* Address */}
                        <div className="space-y-2">
                          <Label htmlFor="donorAddress">Address</Label>
                          <Textarea
                            id="donorAddress"
                            placeholder="Enter your complete address"
                            value={formData.donorAddress}
                            onChange={(e) => setFormData({ ...formData, donorAddress: e.target.value })}
                            rows={2}
                            disabled={formData.isAnonymous}
                          />
                        </div>

                        {/* Payment Amount - Required */}
                        <div className="space-y-2">
                          <Label htmlFor="paymentAmount">
                            Donation Amount (₹) <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="paymentAmount"
                            type="number"
                            placeholder="Enter amount"
                            value={formData.paymentAmount}
                            onChange={(e) => setFormData({ ...formData, paymentAmount: e.target.value })}
                            required
                            min="1"
                          />
                        </div>

                        {/* Payment Method */}
                        <div className="space-y-2">
                          <Label htmlFor="paymentMethod">
                            Payment Method <span className="text-destructive">*</span>
                          </Label>
                          <select
                            id="paymentMethod"
                            value={formData.paymentMethod}
                            onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                            className="w-full rounded-md border border-input bg-background px-3 py-2"
                            required
                          >
                            <option value="upi">UPI Payment</option>
                            <option value="bank_transfer">Bank Transfer</option>
                          </select>
                        </div>

                        {/* Screenshot Upload - Required */}
                        <div className="space-y-2">
                          <Label htmlFor="screenshot">
                            Payment Screenshot <span className="text-destructive">*</span>
                          </Label>
                          <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                            {screenshotPreview ? (
                              <div className="space-y-3">
                                <img
                                  src={screenshotPreview || "/placeholder.svg"}
                                  alt="Payment Screenshot Preview"
                                  className="max-h-48 mx-auto rounded-lg"
                                />
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="sm"
                                  onClick={() => {
                                    setScreenshotFile(null)
                                    setScreenshotPreview(null)
                                  }}
                                >
                                  Remove
                                </Button>
                              </div>
                            ) : (
                              <div>
                                <Upload className="mx-auto mb-2 text-muted-foreground" size={40} />
                                <Label htmlFor="screenshot" className="cursor-pointer">
                                  <span className="text-primary hover:underline">Click to upload</span>
                                </Label>
                                <Input
                                  id="screenshot"
                                  type="file"
                                  accept="image/*"
                                  onChange={handleScreenshotChange}
                                  className="hidden"
                                  required
                                />
                                <p className="text-xs text-muted-foreground mt-1">PNG, JPG up to 5MB</p>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Notes */}
                        <div className="space-y-2">
                          <Label htmlFor="notes">Additional Notes (Optional)</Label>
                          <Textarea
                            id="notes"
                            placeholder="Any special message or dedication..."
                            value={formData.notes}
                            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                            rows={2}
                          />
                        </div>

                        {submitError && (
                          <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-3 text-sm">
                            {submitError}
                          </div>
                        )}

                        <Button type="submit" className="w-full gradient-bg" disabled={isSubmitting}>
                          {isSubmitting ? "Submitting..." : "Submit Donation Details"}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
