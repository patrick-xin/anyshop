import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Welcome to Anyshop
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Modern e-commerce website built with Next.js and shadcn/ui
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Feature Rich</CardTitle>
            <CardDescription>Built with the latest web technologies</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Next.js 14 with App Router and React Server Components</p>
          </CardContent>
          <CardFooter>
            <Button>Learn More</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Beautiful UI</CardTitle>
            <CardDescription>Using shadcn/ui components</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Beautifully designed components that you can copy and paste</p>
          </CardContent>
          <CardFooter>
            <Button variant="secondary">View Components</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>E-commerce Ready</CardTitle>
            <CardDescription>Start selling right away</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Includes everything you need to start an online store</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline">Get Started</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}