import { createFileRoute } from "@tanstack/react-router";
import { AuditView } from "@/components/views/audit-view";

export const Route = createFileRoute("/audit")({ component: AuditView });
