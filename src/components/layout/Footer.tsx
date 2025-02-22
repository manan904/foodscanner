export default function Footer() {
  return (
    <footer className="border-t bg-background mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Food Scanner</h3>
            <p className="text-muted-foreground">
              A curated collection of Michelin-inspired recipes and culinary insights, 
              bringing fine dining experiences to your kitchen.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-muted-foreground hover:text-foreground">Home</a></li>
              <li><a href="/recipes" className="text-muted-foreground hover:text-foreground">Recipes</a></li>
              <li><a href="/blog" className="text-muted-foreground hover:text-foreground">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <p className="text-muted-foreground">
              Follow us on social media for daily culinary inspiration.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Food Scanner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}