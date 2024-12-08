export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-4 py-8 md:flex-row md:justify-between">
        <div>
          <h3 className="font-bold text-lg">Anyshop</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Modern e-commerce website built with Next.js and shadcn/ui
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <h4 className="font-medium">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>All Products</li>
              <li>Categories</li>
              <li>Featured</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>About Us</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>FAQ</li>
              <li>Shipping</li>
              <li>Returns</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Anyshop. All rights reserved.
        </div>
      </div>
    </footer>
  )
}