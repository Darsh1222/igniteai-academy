const Header = () => {
  return <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-center overflow-hidden">
          <div className="whitespace-nowrap animate-marquee">
            <span className="text-2xl font-bold bg-gradient-ai bg-clip-text text-transparent mx-8">
              More Information Coming Soon • More Information Coming Soon • More Information Coming Soon • More Information Coming Soon •
            </span>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;