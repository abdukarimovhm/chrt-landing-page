import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ChevronRight,
  BarChart2,
  Users,
  Zap,
  MessageSquare,
  Shield,
  Code,
  FileText,
  Database,
  TrendingUp,
  Globe,
  Mail,
  Phone,
  Settings,
  Sparkles,
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-[#0C054F] to-[#4342BC]">
              <span className="text-xl font-bold text-white">c</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#0C054F] to-[#4342BC] bg-clip-text text-transparent">
              chrt
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Button className="bg-gradient-to-r from-[#0C054F] to-[#4342BC] hover:from-[#4342BC] hover:to-[#7768FF] text-white transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Free Trial
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0C054F] via-[#4342BC] to-[#7768FF] py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#029FF8]/10 to-transparent"></div>
        <div className="container relative z-10">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="flex gap-2 mb-4">
                <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                  <Sparkles className="h-3 w-3 mr-1" />
                  AI-Powered
                </Badge>
                <Badge className="bg-gradient-to-r from-[#029FF8]/20 to-[#7768FF]/20 text-white border-white/30 backdrop-blur-sm">
                  Cloud & On-Premise
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Business Intelligence{" "}
                <span className="bg-gradient-to-r from-[#029FF8] to-[#7768FF] bg-clip-text text-transparent">
                  Made Simple
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Transform your data into actionable insights with AI-powered analytics. Perfect for businesses,
                developers, and data enthusiasts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-[#0C054F] hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Free Trial
                </Button>
                <Button
                  size="lg"
                  className="bg-[#0C054F]/90 text-white hover:bg-[#0C054F] backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20"
                >
                  View Live Demo
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center gap-4 text-white/80 text-sm">
                <div className="flex items-center gap-1">
                  <Globe className="h-4 w-4" />
                  <span>English & Uzbek</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="h-4 w-4" />
                  <span>Enterprise Security</span>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl overflow-hidden">
              {/* YouTube Video Embed */}
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/AOY24_Z2qz4?si=Q6xjBZGDIP-hYKOm"
                title="chrt Platform Demo - The purpose of chrt.app"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
              <div className="absolute bottom-4 left-4 bg-gradient-to-r from-[#0C054F]/80 to-[#4342BC]/80 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                <span className="text-white text-sm font-medium">Live Platform Demo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section id="solutions" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0C054F] to-[#4342BC] bg-clip-text text-transparent">
              Built for Every Data Need
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#029FF8] to-[#7768FF] mx-auto mt-4"></div>
            <p className="text-lg text-[#171718]/70 mt-4 max-w-2xl mx-auto">
              Whether you're a business owner, developer, or data enthusiast, chrt adapts to your workflow
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-[#0C054F]/30 transition-all duration-300 hover:shadow-lg group">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#0C054F]/10 to-[#4342BC]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-6 w-6 text-[#0C054F]" />
                </div>
                <CardTitle className="text-[#0C054F]">Small & Medium Businesses</CardTitle>
                <CardDescription>
                  Complete BI solution for business reporting, financial forecasting, and operational dashboards
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-[#171718]/70">
                  <li>• Interactive dashboards</li>
                  <li>• Automated report generation</li>
                  <li>• Time series forecasting</li>
                  <li>• Multi-format data support</li>
                  <li>• Professional stakeholder reports</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#4342BC]/30 transition-all duration-300 hover:shadow-lg group">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#4342BC]/10 to-[#7768FF]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-6 w-6 text-[#4342BC]" />
                </div>
                <CardTitle className="text-[#0C054F]">CRM Developers</CardTitle>
                <CardDescription>
                  Powerful API integration for embedding analytics directly into your applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-[#171718]/70">
                  <li>• RESTful API access</li>
                  <li>• Embeddable widgets</li>
                  <li>• Custom visualization endpoints</li>
                  <li>• Webhook integrations</li>
                  <li>• Developer documentation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#7768FF]/30 transition-all duration-300 hover:shadow-lg group">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#7768FF]/10 to-[#029FF8]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-6 w-6 text-[#7768FF]" />
                </div>
                <CardTitle className="text-[#0C054F]">Data Enthusiasts</CardTitle>
                <CardDescription>
                  Intuitive platform for exploring personal data, research projects, and learning analytics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-[#171718]/70">
                  <li>• Natural language queries</li>
                  <li>• Educational tutorials</li>
                  <li>• Statistical model explanations</li>
                  <li>• Data visualization tools</li>
                  <li>• Export capabilities</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Section - Compact Grid Layout */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0C054F] to-[#4342BC] bg-clip-text text-transparent">
              Excel, Python and ChatGPT in one tool
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#029FF8] to-[#7768FF] mx-auto mt-4"></div>
            <p className="text-lg text-[#171718]/70 mt-4 max-w-2xl mx-auto">
              Transform your data workflow with AI-powered analytics that combines the best of spreadsheets,
              programming, and artificial intelligence
            </p>
          </div>

          <div className="grid gap-6 max-w-6xl mx-auto">
            {/* Main Demo - Visualize Data */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#171718]">Visualize your data</h3>
                  <p className="text-[#171718]/70 text-lg">
                    Add your files and Julius generates beautiful graphs and charts automatically. No coding required.
                  </p>
                  <Button className="bg-gradient-to-r from-[#0C054F] to-[#4342BC] hover:from-[#4342BC] hover:to-[#7768FF] text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    Try now
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="relative bg-gray-50 rounded-lg p-6 h-[300px] flex items-center justify-center">
                  {/* Chart Visualization Mockup */}
                  <div className="w-full h-full relative">
                    <div className="absolute top-2 left-2 text-xs font-medium text-[#171718]/60">
                      Evolution of Sales Performance by Region
                    </div>
                    <div className="absolute top-6 right-2 text-xs text-[#171718]/50">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-0.5 bg-blue-500"></div>
                          <span>North America</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-0.5 bg-green-500"></div>
                          <span>Europe</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-0.5 bg-orange-500"></div>
                          <span>Asia Pacific</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-0.5 bg-purple-500"></div>
                          <span>Latin America</span>
                        </div>
                      </div>
                    </div>
                    {/* Simple line chart mockup */}
                    <svg className="w-full h-full mt-8" viewBox="0 0 400 200">
                      <defs>
                        <linearGradient id="grid" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f3f4f6" />
                          <stop offset="100%" stopColor="#e5e7eb" />
                        </linearGradient>
                      </defs>
                      {/* Grid lines */}
                      {[...Array(6)].map((_, i) => (
                        <line
                          key={i}
                          x1="40"
                          y1={30 + i * 25}
                          x2="380"
                          y2={30 + i * 25}
                          stroke="#e5e7eb"
                          strokeWidth="1"
                        />
                      ))}
                      {[...Array(8)].map((_, i) => (
                        <line
                          key={i}
                          x1={40 + i * 48}
                          y1="30"
                          x2={40 + i * 48}
                          y2="180"
                          stroke="#e5e7eb"
                          strokeWidth="1"
                        />
                      ))}

                      {/* Sample data lines */}
                      <polyline
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        points="40,120 88,100 136,110 184,95 232,85 280,80 328,75 376,70"
                      />
                      <polyline
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="2"
                        points="40,140 88,130 136,125 184,115 232,110 280,105 328,100 376,95"
                      />
                      <polyline
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="2"
                        points="40,160 88,150 136,145 184,140 232,135 280,130 328,125 376,120"
                      />
                      <polyline
                        fill="none"
                        stroke="#8b5cf6"
                        strokeWidth="2"
                        points="40,170 88,165 136,160 184,155 232,150 280,145 328,140 376,135"
                      />

                      {/* Axis labels */}
                      <text x="40" y="195" fontSize="10" fill="#6b7280">
                        2020-Q1
                      </text>
                      <text x="136" y="195" fontSize="10" fill="#6b7280">
                        2021-Q1
                      </text>
                      <text x="232" y="195" fontSize="10" fill="#6b7280">
                        2022-Q1
                      </text>
                      <text x="328" y="195" fontSize="10" fill="#6b7280">
                        2023-Q1
                      </text>

                      <text x="25" y="180" fontSize="10" fill="#6b7280">
                        0
                      </text>
                      <text x="20" y="130" fontSize="10" fill="#6b7280">
                        25
                      </text>
                      <text x="20" y="80" fontSize="10" fill="#6b7280">
                        50
                      </text>
                      <text x="20" y="35" fontSize="10" fill="#6b7280">
                        75
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row - Two Demos */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Manipulate Data Demo */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="space-y-4 mb-6">
                  <h3 className="text-xl font-bold text-[#171718]">Manipulate data</h3>
                  <p className="text-[#171718]/70">Clean, merge and sort data in Julius and then easily export it</p>
                  <Button className="bg-gradient-to-r from-[#0C054F] to-[#4342BC] hover:from-[#4342BC] hover:to-[#7768FF] text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    Try now
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 h-[200px] overflow-hidden">
                  {/* File upload mockup */}
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium text-[#171718]">2024_Sales_Data.xlsx</span>
                    <span className="text-xs text-[#171718]/50">247 KB</span>
                  </div>

                  {/* Data table mockup */}
                  <div className="bg-white rounded border text-xs">
                    <div className="grid grid-cols-5 gap-1 p-2 bg-gray-100 font-medium text-[#171718]/70">
                      <div>Region</div>
                      <div>Product</div>
                      <div>Sales</div>
                      <div>Growth</div>
                      <div>Target</div>
                    </div>
                    <div className="space-y-1 p-2">
                      <div className="grid grid-cols-5 gap-1 text-[#171718]/80">
                        <div>North</div>
                        <div>Software</div>
                        <div>$125K</div>
                        <div className="text-green-600">+12%</div>
                        <div>$120K</div>
                      </div>
                      <div className="grid grid-cols-5 gap-1 text-[#171718]/80">
                        <div>South</div>
                        <div>Hardware</div>
                        <div>$98K</div>
                        <div className="text-red-600">-3%</div>
                        <div>$100K</div>
                      </div>
                      <div className="grid grid-cols-5 gap-1 text-[#171718]/80">
                        <div>East</div>
                        <div>Services</div>
                        <div>$156K</div>
                        <div className="text-green-600">+8%</div>
                        <div>$145K</div>
                      </div>
                      <div className="grid grid-cols-5 gap-1 text-[#171718]/80">
                        <div>West</div>
                        <div>Software</div>
                        <div>$203K</div>
                        <div className="text-green-600">+15%</div>
                        <div>$180K</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Get Insights Demo */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="space-y-4 mb-6">
                  <h3 className="text-xl font-bold text-[#171718]">Get insights</h3>
                  <p className="text-[#171718]/70">Ask questions and get expert-level analysis in English or Uzbek</p>
                  <Button className="bg-gradient-to-r from-[#0C054F] to-[#4342BC] hover:from-[#4342BC] hover:to-[#7768FF] text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    Try now
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 h-[200px] space-y-3">
                  {/* Chat interface mockup */}
                  <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                    <div className="flex items-center gap-2 text-sm text-[#171718]">
                      <MessageSquare className="h-4 w-4 text-[#0C054F]" />
                      <span>"Please analyze this sales data"</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-[#0C054F]/5 to-[#4342BC]/5 rounded-lg p-3 border border-[#0C054F]/10">
                    <div className="text-xs text-[#171718]/80 space-y-2">
                      <div className="font-medium text-[#0C054F]">Here are some key trends from the sales data:</div>
                      <div className="space-y-1">
                        <div>
                          • <strong>Regional Performance:</strong> West region leading with 15% growth
                        </div>
                        <div>
                          • <strong>Product Analysis:</strong> Software products showing strongest performance
                        </div>
                        <div>
                          • <strong>Target Achievement:</strong> 3 out of 4 regions exceeded targets
                        </div>
                      </div>

                      {/* Mini chart in response */}
                      <div className="mt-3 bg-white rounded p-2">
                        <div className="text-xs font-medium mb-1">Growth Rate by Region</div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <div className="w-12 text-xs">West</div>
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div className="bg-green-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                            </div>
                            <div className="text-xs text-green-600">+15%</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-12 text-xs">North</div>
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div className="bg-blue-500 h-2 rounded-full" style={{ width: "60%" }}></div>
                            </div>
                            <div className="text-xs text-blue-600">+12%</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-12 text-xs">East</div>
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div className="bg-orange-500 h-2 rounded-full" style={{ width: "40%" }}></div>
                            </div>
                            <div className="text-xs text-orange-600">+8%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0C054F] to-[#4342BC] bg-clip-text text-transparent">
              Powerful Features, Simple Interface
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#029FF8] to-[#7768FF] mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#0C054F]/10 to-[#4342BC]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageSquare className="h-6 w-6 text-[#0C054F]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0C054F] mb-2">AI Chat Assistant</h3>
              <p className="text-[#171718]/70 text-sm">
                GPT-powered assistant for real-time data interpretation and guided analysis in English and Uzbek
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#4342BC]/10 to-[#7768FF]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <BarChart2 className="h-6 w-6 text-[#4342BC]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0C054F] mb-2">Advanced Analytics</h3>
              <p className="text-[#171718]/70 text-sm">
                Time series analysis, ML models, and forecasting with pandas, scikit-learn, and Prophet
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#7768FF]/10 to-[#029FF8]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Database className="h-6 w-6 text-[#7768FF]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0C054F] mb-2">Multi-Format Support</h3>
              <p className="text-[#171718]/70 text-sm">
                CSV, XLSX, XLS, and SQL database connections with automatic data type detection
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#029FF8]/10 to-[#0C054F]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <FileText className="h-6 w-6 text-[#029FF8]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0C054F] mb-2">Professional Reports</h3>
              <p className="text-[#171718]/70 text-sm">
                Automated report and document generation for stakeholders and clients
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#4342BC]/10 to-[#0C054F]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-6 w-6 text-[#4342BC]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0C054F] mb-2">Secure Execution</h3>
              <p className="text-[#171718]/70 text-sm">
                Sandboxed Docker containers with session-based file isolation and data security
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#7768FF]/10 to-[#4342BC]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-6 w-6 text-[#7768FF]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0C054F] mb-2">Real-time Processing</h3>
              <p className="text-[#171718]/70 text-sm">
                FastAPI backend supporting 10+ concurrent users with instant query responses
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* API Section - Updated for Contact */}
      <section id="api" className="py-20 bg-gradient-to-br from-[#0C054F] to-[#4342BC]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Developer-First API</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#029FF8] to-[#7768FF] mb-6"></div>
              <p className="text-lg text-white/80 mb-6">
                Ready to integrate chrt's powerful analytics into your CRM or application? Our comprehensive API is
                designed for developers who want to embed advanced data analytics seamlessly.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-white/90">
                  <div className="h-2 w-2 bg-[#029FF8] rounded-full"></div>
                  <span>RESTful endpoints for all analytics functions</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <div className="h-2 w-2 bg-[#029FF8] rounded-full"></div>
                  <span>Embeddable visualization widgets</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <div className="h-2 w-2 bg-[#029FF8] rounded-full"></div>
                  <span>Webhook support for real-time updates</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <div className="h-2 w-2 bg-[#029FF8] rounded-full"></div>
                  <span>Comprehensive developer documentation</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button className="bg-gradient-to-r from-[#029FF8] to-[#7768FF] hover:from-[#7768FF] hover:to-[#029FF8] text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact for API Access
                </Button>
                <Button className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/40">
                  View Documentation
                </Button>
              </div>
            </div>
            <div className="bg-[#171718] rounded-lg p-6 font-mono text-sm border border-white/10 shadow-2xl">
              <div className="text-[#029FF8] mb-2">// Example API call</div>
              <div className="text-white/80">
                <div className="text-[#7768FF]">POST</div>
                <div className="text-white">/api/v1/analyze</div>
                <div className="mt-4 text-[#029FF8]">{"{"}</div>
                <div className="ml-4 text-white">
                  <div>
                    <span className="text-[#7768FF]">"query"</span>:{" "}
                    <span className="text-[#029FF8]">"Show sales trends"</span>,
                  </div>
                  <div>
                    <span className="text-[#7768FF]">"data_source"</span>:{" "}
                    <span className="text-[#029FF8]">"sales.csv"</span>,
                  </div>
                  <div>
                    <span className="text-[#7768FF]">"format"</span>: <span className="text-[#029FF8]">"json"</span>
                  </div>
                </div>
                <div className="text-[#029FF8]">{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom BI Solutions Section */}
      <section id="custom" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0C054F] to-[#4342BC] bg-clip-text text-transparent">
              Custom BI Solutions
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#029FF8] to-[#7768FF] mx-auto mt-4"></div>
            <p className="text-lg text-[#171718]/70 mt-4 max-w-3xl mx-auto">
              Need a BI tool specifically designed for your unique data and business requirements? We create custom
              solutions tailored to your exact needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#0C054F]/10 to-[#4342BC]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Settings className="h-5 w-5 text-[#0C054F]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0C054F] mb-2">Tailored Data Models</h3>
                  <p className="text-[#171718]/70">
                    Custom data models and schemas designed specifically for your industry and data structure
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#4342BC]/10 to-[#7768FF]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <BarChart2 className="h-5 w-5 text-[#4342BC]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0C054F] mb-2">Custom Visualizations</h3>
                  <p className="text-[#171718]/70">
                    Bespoke charts, dashboards, and reports that match your brand and specific analytical needs
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#7768FF]/10 to-[#029FF8]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Code className="h-5 w-5 text-[#7768FF]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0C054F] mb-2">Integration Support</h3>
                  <p className="text-[#171718]/70">
                    Seamless integration with your existing systems, databases, and workflows
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#029FF8]/10 to-[#0C054F]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="h-5 w-5 text-[#029FF8]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0C054F] mb-2">Enterprise Security</h3>
                  <p className="text-[#171718]/70">
                    Custom security configurations and compliance features for your industry requirements
                  </p>
                </div>
              </div>
            </div>
            <Card className="border-2 border-[#0C054F]/10 shadow-lg">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#0C054F] to-[#4342BC] flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-[#0C054F] text-xl">Ready for a Custom Solution?</CardTitle>
                <CardDescription className="text-base">
                  Let's discuss how we can build the perfect BI tool for your specific needs
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="space-y-2 text-sm text-[#171718]/70">
                  <p>✓ Free consultation and requirements analysis</p>
                  <p>✓ Custom development timeline</p>
                  <p>✓ Ongoing support and maintenance</p>
                  <p>✓ Training for your team</p>
                </div>
                <Button className="w-full bg-gradient-to-r from-[#0C054F] to-[#4342BC] hover:from-[#4342BC] hover:to-[#7768FF] text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <Phone className="h-4 w-4 mr-2" />
                  Schedule Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0C054F] via-[#4342BC] to-[#7768FF]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Transform Your Data Strategy?</h2>
            <p className="text-xl text-white/90">
              Join businesses worldwide using chrt to make data-driven decisions with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-white text-[#0C054F] hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Free Trial
              </Button>
              <Button
                size="lg"
                className="bg-[#0C054F]/90 text-white hover:bg-[#0C054F] backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20"
              >
                Schedule Demo
              </Button>
            </div>
            <div className="flex items-center justify-center gap-8 text-white/80 text-sm pt-4">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                <span>Setup in Minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span>No Credit Card Required</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0C054F] py-12 text-white/80">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-[#029FF8] transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#029FF8] transition-colors">
                    API Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#029FF8] transition-colors">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#029FF8] transition-colors">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-[#029FF8] transition-colors">
                    Small Business
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#029FF8] transition-colors">
                    Enterprise
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#029FF8] transition-colors">
                    Developers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#029FF8] transition-colors">
                    Custom BI
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-[#029FF8] transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#029FF8] transition-colors">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#029FF8] transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#029FF8] transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-[#029FF8] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#029FF8] transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#029FF8] transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#029FF8] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-[#4342BC] to-[#7768FF]">
                <span className="text-sm font-bold text-white">c</span>
              </div>
              <span className="text-lg font-bold text-white">chrt</span>
            </div>
            <div className="text-sm text-white/60">© {new Date().getFullYear()} chrt, Inc. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
