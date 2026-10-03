import { createFileRoute } from "@tanstack/react-router";
import { AssetsView } from "@/components/views/assets-view";

export const Route = createFileRoute("/assets")({ component: AssetsView });
