import React from 'react';
import { cn } from '@/lib/utils';
import { Application, ApplicationStatus } from '@/types/application';
import { HelpCircle } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

interface ApplicationStatusBadgeProps {
  application: Application;
}

const phaseColors: Record<ApplicationStatus, string> = {
  SUBMISSION_PHASE: 'bg-purple-600',
  KYC_PHASE: 'bg-blue-600',
  GOVERNANCE_REVIEW_PHASE: 'bg-yellow-600',
  RKH_APPROVAL_PHASE: 'bg-orange-600',
  META_APPROVAL_PHASE: 'bg-orange-800',
  APPROVED: 'bg-green-600',
  REJECTED: 'bg-red-600',
};

const phaseDescriptions: Record<ApplicationStatus, string> = {
  SUBMISSION_PHASE: 'Initial application submission phase',
  KYC_PHASE: 'Know Your Customer verification process',
  GOVERNANCE_REVIEW_PHASE: 'Application review by governance committee',
  RKH_APPROVAL_PHASE: 'Final approval by RKH',
  META_APPROVAL_PHASE: 'Final approval on Meta Allocator smart contract',
  APPROVED: 'Application approved',
  REJECTED: 'Application rejected',
};

const phaseNames: Record<ApplicationStatus, string> = {
  SUBMISSION_PHASE: 'Submit',
  KYC_PHASE: 'KYC',
  GOVERNANCE_REVIEW_PHASE: 'Review',
  RKH_APPROVAL_PHASE: 'RKH Approval',
  META_APPROVAL_PHASE: 'MA Approval',
  APPROVED: 'Approved',
  REJECTED: 'Rejected',
};

export function ApplicationStatusBadge({ application }: ApplicationStatusBadgeProps) {
  return (
          <Badge 
            className={cn(
              "text-xs font-semibold",
              phaseColors[application.status],
              'ring-2 ring-offset-2 ring-offset-white ring-gray-300'
            )}
          >
            {phaseNames[application.status]}
            <Tooltip>
        <TooltipTrigger asChild>
            <HelpCircle className="w-4 h-4 text-white ml-2" />
            </TooltipTrigger>
        <TooltipContent>
          <p>{phaseDescriptions[application.status]}</p>
        </TooltipContent>
      </Tooltip>
          </Badge>
  );
}