export interface Bugs {
  id?: string;
  title?: string;
  description?: string;
  priority?: number;
  reporter?: string;
  status?: string;
  createdAt?: string;
  comments?: BugComment[];
}

export interface BugComment {
  reporter: string;
  description: string;
}

export interface SearchBug {
  title: string;
  priority: string;
  reporter: string;
  status: string;
}
