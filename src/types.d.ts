interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (searchTerm: string) => void;
}

interface MessageModalProps {
  show: boolean;
  handleClose: () => void;
  message: Message | null;
}

interface TicketRowProps {
  ticket: Message;
  index: number;
  handlePriorityChange: (messageId: number, newPriority: string | null) => void;
  handleAssignedToChange: (
    messageId: number,
    newAssignedTo: string | null
  ) => void;
  openChat: (id: number) => void;
}

interface FilterDropdownProps {
  filter: string;
  onFilterChange: (newFilter: string | null) => void;
}
interface User {
  name: string;
}

interface AuthContextProps {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

interface TicketTableProps {
  tickets: Message[];
  handlePriorityChange: (messageId: number, newPriority: string | null) => void;
  handleAssignedToChange: (
    messageId: number,
    newAssignedTo: string | null
  ) => void;
  openChat: (id: number) => void;
}

interface RouteParams {
  id: string;
  [key: string]: string | undefined;
}

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}
interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
}

interface LoginInfoModalProps {
  show: boolean;
  onHide: () => void;
  fillCredentials: () => void;
}
