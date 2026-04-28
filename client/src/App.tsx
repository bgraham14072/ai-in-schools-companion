import { Switch, Route, Router } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";
import { RoleProvider } from "@/lib/role-context";
import Home from "@/pages/Home";
import RolePicker from "@/pages/RolePicker";
import Dashboard from "@/pages/Dashboard";
import ThemeExplorer from "@/pages/ThemeExplorer";
import ThemeDetail from "@/pages/ThemeDetail";
import ChapterList from "@/pages/ChapterList";
import ChapterDetail from "@/pages/ChapterDetail";
import Contributors from "@/pages/Contributors";
import Tools from "@/pages/Tools";
import Assessment from "@/pages/Assessment";
import Chat from "@/pages/Chat";
import NotFound from "@/pages/not-found";

function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/role" component={RolePicker} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/themes" component={ThemeExplorer} />
      <Route path="/themes/:id" component={ThemeDetail} />
      <Route path="/chapters" component={ChapterList} />
      <Route path="/chapters/:n" component={ChapterDetail} />
      <Route path="/contributors" component={Contributors} />
      <Route path="/tools" component={Tools} />
      <Route path="/assessment" component={Assessment} />
      <Route path="/chat" component={Chat} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <RoleProvider>
          <Toaster />
          <Router hook={useHashLocation}>
            <Layout>
              <AppRouter />
            </Layout>
          </Router>
        </RoleProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
