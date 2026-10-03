import { createFileRoute } from "@tanstack/react-router";
import { PeopleView } from "@/components/views/people-view";

export const Route = createFileRoute("/people")({ component: PeopleView });
