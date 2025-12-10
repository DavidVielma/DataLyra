import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/lib/i18n";
import Home from "@/pages/Home";
import Process from "@/pages/Process";
import About from "@/pages/About";
import SuccessStories from "@/pages/SuccessStories";
import NotFound from "@/pages/not-found";
import { Navbar } from "@/components/layout/Navbar";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/process">
        <Navbar />
        <Process />
      </Route>
      <Route path="/about" component={About} />
      <Route path="/success-stories" component={SuccessStories} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <LanguageProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </QueryClientProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
