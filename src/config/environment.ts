import { Application } from '@/types/application';

interface Environment {
  apiBaseUrl: string;
  useTestData: boolean;
  useTestnet: boolean;
  rpcUrl: string;
  rpcToken: string;
  metaAllocatorContractAddress: string;
}

const environments: { [key: string]: Environment } = {
  development: {
    apiBaseUrl: 'http://localhost:3001/api/v1',
    useTestData: false,
    useTestnet: false,
    rpcUrl: 'https://api.node.glif.io/rpc/v1',
    rpcToken: process.env.RPC_TOKEN || '',
    metaAllocatorContractAddress: '0xB6F5d279AEad97dFA45209F3E53969c2EF43C21d',
  },
  staging: {
    apiBaseUrl: 'https://allocator-rkh-backend-utcn6.ondigitalocean.app/api/v1',
    useTestData: false,
    useTestnet: false,
    rpcUrl: 'https://api.node.glif.io/rpc/v1',
    rpcToken: process.env.RPC_TOKEN || '',
    metaAllocatorContractAddress: '0xB6F5d279AEad97dFA45209F3E53969c2EF43C21d',
  },
  production: {
    apiBaseUrl: 'https://allocator-rkh-backend-utcn6.ondigitalocean.app/backend/api/v1',
    useTestData: false,
    useTestnet: false,
    rpcUrl: 'https://api.node.glif.io/rpc/v1',
    rpcToken: process.env.RPC_TOKEN || '',
    metaAllocatorContractAddress: '0xB6F5d279AEad97dFA45209F3E53969c2EF43C21d',
  },
};

const currentEnv = process.env.NEXT_PUBLIC_APP_ENV || 'production';

export const env: Environment = environments[currentEnv];

// Test data
export const testApplications: Application[] = [
  {
    id: '66f976bde9de8776b74330e0',
    number: 1099,
    name: 'Deep Kapur ',
    organization:
      'Official name pending, currently referred to as Flamenco team, spinning out from Protocol Labs.',
    address: 'f2pk34lqjjck5jgsbtd2dnvu5z6pm7tiuujvv6cuy',
    github: '@dkkapur',
    country: 'North America',
    region: 'North America',
    type: 'Manual',
    datacap: 50,
    actorId: 'f03019909',
    status: 'KYC_PHASE',
    githubPrNumber: '123',
    githubPrLink: 'https://github.com/dkkapur/test/pull/123',
  },
  {
    id: '88b234cde9de8776b74330e2',
    number: 1101,
    name: 'John Smith',
    organization: 'Future Tech Solutions',
    address: 'f2pk34lqjjck5jgsbtd2dnvu5z6pm7tiuujvv6cuy',
    github: '@johnsmith',
    country: 'Asia',
    region: 'Asia',
    type: 'Manual',
    datacap: 75,
    actorId: 'f03019909',
    status: 'GOVERNANCE_REVIEW_PHASE',
    githubPrNumber: '125',
    githubPrLink: 'https://github.com/johnsmith/test/pull/125',
  },
  {
    id: '99c345def9de8776b74330e3',
    number: 1102,
    name: 'Alice Johnson',
    organization: 'NextGen Technologies',
    address: 'f2pk34lqjjck5jgsbtd2dnvu5z6pm7tiuujvv6cuy',
    github: '@alicejohnson',
    country: 'South America',
    region: 'South America',
    type: 'Manual',
    datacap: 60,
    actorId: 'f03019909',
    status: 'RKH_APPROVAL_PHASE',
    githubPrNumber: '126',
    githubPrLink: 'https://github.com/alicejohnson/test/pull/126',

    rkhApprovals: ['t0101'],
    rkhApprovalsThreshold: 2,
    rkhMessageId: 0,
  },
  {
    id: '11a345def9de8776b74330e4',
    number: 1103,
    name: 'Bob Johnson',
    organization: 'Future',
    address: 'f2pk34lqjjck5jgsbtd2dnvu5z6pm7tiuujvv6cuy',
    github: '@bobjohnson',
    country: 'Europe',
    region: 'Europe',
    type: 'Manual',
    datacap: 70,
    actorId: 'f03019909',
    status: 'RKH_APPROVAL_PHASE',
    githubPrNumber: '127',
    githubPrLink: 'https://github.com/alicejohnson/test/pull/126',

    rkhApprovals: [],
    rkhApprovalsThreshold: 2,
  },
  {
    id: '12b345def9de8776b74330e5',
    number: 1104,
    name: 'Peter Parker',
    organization: 'Future',
    address: '0x999999cf1046e68e36E1aA2E0E07105eDDD1f08E',
    github: '@peterparker',
    country: 'Europe',
    region: 'Europe',
    type: 'Manual',
    datacap: 80,
    status: 'META_APPROVAL_PHASE',
    githubPrNumber: '128',
    githubPrLink: 'https://github.com/peterparker/test/pull/128',
  },
];
