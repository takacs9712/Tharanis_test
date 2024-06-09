interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (searchTerm: string) => void;
}

interface MessageModalProps {
  show: boolean;
  handleClose: () => void;
  message: Message | null;
}
