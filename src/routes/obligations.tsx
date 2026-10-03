import { createFileRoute } from "@tanstack/react-router";
import { ObligationsView } from "@/components/views/obligations-view";

export const Route = createFileRoute("/obligations")({ component: ObligationsView });
