import { createFileRoute } from "@tanstack/react-router";
import { RatesView } from "@/components/views/rates-view";

export const Route = createFileRoute("/rates")({ component: RatesView });
