import { createReactQueryHooks } from '@trpc/react';
import { AppRouter } from '../api/trpc/[trpc]';


export const trpc = createReactQueryHooks<AppRouter>();
// => { useQuery: ..., useMutation: ...}