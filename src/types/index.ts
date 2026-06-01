// CRM Core Types

export type LeadStatus = 'new' | 'contacted' | 'qualified' | 'proposal' | 'negotiation' | 'won' | 'lost';

export type DealStage = 'lead' | 'discovery' | 'proposal' | 'negotiation' | 'closed-won' | 'closed-lost';

export type Priority = 'low' | 'medium' | 'high' | 'urgent';

export type ActivityType = 'call' | 'email' | 'meeting' | 'note' | 'task';

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  position?: string;
  tags?: string[];
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Deal {
  id: string;
  title: string;
  value: number;
  currency: string;
  stage: DealStage;
  priority: Priority;
  contactId: string;
  description?: string;
  expectedCloseDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Activity {
  id: string;
  type: ActivityType;
  title: string;
  description?: string;
  contactId?: string;
  dealId?: string;
  dueDate?: Date;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  source?: string;
  status: LeadStatus;
  assignedTo?: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}
