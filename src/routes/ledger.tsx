import { createFileRoute } from "@tanstack/react-router";
import { LedgerView } from "@/components/views/ledger-view";

export const Route = createFileRoute("/ledger")({ component: LedgerView });
